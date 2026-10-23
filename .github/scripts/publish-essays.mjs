// Publishes the weekly essay by merging its pull request on Sunday at 6:00am
// America/Chicago. Netlify deploys main after the merge.
//
// A pull request is merged only if ALL of these hold:
//   - it targets main, comes from this repository (not a fork), and is not a draft
//   - its branch is essay/YYYY-MM-DD and that date is today or earlier (Chicago time)
//   - it adds exactly one new file, content/essays/YYYY-MM-DD-<id>.json, and changes nothing else
//   - the Netlify deploy preview for its latest commit succeeded and no check failed
// Anything else is left alone. A pull request on an essay branch that fails a check
// makes this run fail, so GitHub emails the repo owner.
//
// Env: GITHUB_TOKEN, GITHUB_REPOSITORY, GITHUB_EVENT_NAME, DRY_RUN ("true" = report only)

const token = process.env.GITHUB_TOKEN;
const repo = process.env.GITHUB_REPOSITORY;
const event = process.env.GITHUB_EVENT_NAME;
const dryRun = process.env.DRY_RUN === 'true' || event === 'pull_request';
const API = `https://api.github.com/repos/${repo}`;

async function gh(path, init = {}) {
  const res = await fetch(path.startsWith('http') ? path : `${API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(init.body ? { 'Content-Type': 'application/json' } : {}),
    },
  });
  if (!res.ok) throw new Error(`${init.method ?? 'GET'} ${path}: ${res.status} ${await res.text()}`);
  return res.status === 204 ? null : res.json();
}

function chicagoNow() {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Chicago', year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', hourCycle: 'h23', weekday: 'short',
    }).formatToParts(new Date()).map((p) => [p.type, p.value]),
  );
  return { date: `${parts.year}-${parts.month}-${parts.day}`, hour: Number(parts.hour), weekday: parts.weekday };
}

async function problemsWith(pr, today) {
  const problems = [];
  const branchDate = pr.head.ref.match(/^essay\/(\d{4}-\d{2}-\d{2})$/)?.[1];
  if (!branchDate) return ['branch name is not essay/YYYY-MM-DD'];
  if (branchDate > today) return null; // a later week's essay: not due yet, not a problem
  if (pr.base.ref !== 'main') problems.push('does not target main');
  if (pr.head.repo?.full_name !== repo) problems.push('comes from a fork');

  const files = await gh(`/pulls/${pr.number}/files?per_page=100`);
  const re = new RegExp(`^content/essays/${branchDate}-[a-z0-9]+(?:-[a-z0-9]+)*\\.json$`);
  if (files.length !== 1) problems.push(`changes ${files.length} files; an essay adds exactly one`);
  for (const f of files) {
    if (f.status !== 'added' || !re.test(f.filename)) problems.push(`not allowed: ${f.status} ${f.filename}`);
  }

  const sha = pr.head.sha;
  const status = await gh(`/commits/${sha}/status`);
  const preview = status.statuses.find((s) => s.context.includes('deploy-preview'));
  if (!preview) problems.push('no Netlify deploy preview yet');
  else if (preview.state !== 'success') problems.push(`Netlify deploy preview is ${preview.state}`);
  const failed = status.statuses.filter((s) => ['failure', 'error'].includes(s.state)).map((s) => s.context);
  const runs = await gh(`/commits/${sha}/check-runs?per_page=100`);
  failed.push(...runs.check_runs.filter((c) => ['failure', 'timed_out', 'cancelled', 'action_required'].includes(c.conclusion)).map((c) => c.name));
  if (failed.length) problems.push(`failed checks: ${[...new Set(failed)].join(', ')}`);

  return problems;
}

async function main() {
  const now = chicagoNow();
  console.log(`Chicago time: ${now.weekday} ${now.date} ${now.hour}:00. Event: ${event}. Dry run: ${dryRun}.`);
  // Scheduled runs fire at several UTC hours to cover daylight saving time and
  // GitHub's occasional late starts. Only publish from 6am Sunday Chicago time on.
  if (event === 'schedule' && (now.weekday !== 'Sun' || now.hour < 6)) {
    console.log('Not yet 6am Sunday in Chicago. Nothing to do.');
    return;
  }

  const prs = (await gh('/pulls?state=open&base=main&per_page=100')).filter((p) => p.head.ref.startsWith('essay/'));
  let failures = 0;
  for (const pr of prs) {
    if (pr.draft) { console.log(`#${pr.number} is a draft. Skipping.`); continue; }
    const problems = await problemsWith(pr, now.date);
    if (problems === null) { console.log(`#${pr.number} (${pr.head.ref}) is not due yet.`); continue; }
    if (problems.length) {
      failures++;
      console.log(`::error::#${pr.number} (${pr.head.ref}) was not published: ${problems.join('; ')}`);
      continue;
    }
    if (dryRun) { console.log(`#${pr.number} (${pr.head.ref}) would be published.`); continue; }
    await gh(`/pulls/${pr.number}/merge`, {
      method: 'PUT',
      body: JSON.stringify({ merge_method: 'squash', sha: pr.head.sha, commit_title: `Publish essay: ${pr.title}` }),
    });
    console.log(`Published #${pr.number}: ${pr.title}`);
    try { await gh(`/git/refs/heads/${pr.head.ref}`, { method: 'DELETE' }); } catch (err) { console.log(`Could not delete branch: ${err.message}`); }
  }
  if (!prs.length) console.log('No open essay pull requests.');
  if (failures) process.exit(1);
}

main().catch((err) => { console.error(err); process.exit(1); });
