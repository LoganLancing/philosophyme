// Checks every essay file in content/essays/ before a build.
// Runs automatically before `npm run build` (see "prebuild" in package.json),
// so a broken essay fails the Netlify preview and the weekly publish skips it.
// Usage: node scripts/check-essays.mjs [file ...]   (no args = check all)
import fs from 'fs';
import path from 'path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const dir = path.join(root, 'content', 'essays');
const NAME = /^(\d{4}-\d{2}(?:-\d{2})?)-([a-z0-9]+(?:-[a-z0-9]+)*)\.json$/;

// Philosopher ids and death years, read from data/philosophers.ts the same way
// the site builds ids (see the `defined` helper there). Death 0 means living.
function loadPhilosophers() {
  const src = fs.readFileSync(path.join(root, 'data', 'philosophers.ts'), 'utf8');
  const out = new Map();
  for (const m of src.matchAll(/defined\("([^"]+)",\s*(-?\d+),\s*(-?\d+)/g)) {
    const id = m[1].toLowerCase()
      .replace(/[éèê]/g, 'e').replace(/[òó]/g, 'o').replace(/ø/g, 'o').replace(/ü/g, 'u')
      .replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    out.set(id, { name: m[1], death: Number(m[3]) });
  }
  return out;
}

const nonEmpty = (v) => typeof v === 'string' && v.trim().length > 0;

function checkFile(file, philosophers, seen) {
  const errors = [];
  const base = path.basename(file);
  const nm = base.match(NAME);
  if (!nm) return [`${base}: name must be YYYY-MM-DD-some-id.json (lowercase letters, digits, hyphens)`];
  const [, datePart, idPart] = nm;

  let e;
  try {
    e = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (err) {
    return [`${base}: not valid JSON (${err.message})`];
  }

  if (e.id !== idPart) errors.push(`id must be "${idPart}" to match the file name`);
  if (e.date !== datePart) errors.push(`date must be "${datePart}" to match the file name`);
  if (seen.has(e.id)) errors.push(`id "${e.id}" is already used by ${seen.get(e.id)}`);
  seen.set(e.id, base);
  if (!['guest', 'imagined'].includes(e.kind)) errors.push('kind must be "guest" or "imagined"');
  for (const k of ['title', 'excerpt']) if (!nonEmpty(e[k])) errors.push(`${k} is required`);
  if (!Array.isArray(e.tags) || e.tags.length < 1 || e.tags.length > 6 || !e.tags.every(nonEmpty)) {
    errors.push('tags must be 1 to 6 strings');
  }
  if (!Array.isArray(e.sections) || e.sections.length === 0) {
    errors.push('sections must be a non-empty list');
  } else {
    e.sections.forEach((s, i) => {
      if (!(s.heading === null || nonEmpty(s.heading))) errors.push(`sections[${i}].heading must be text or null`);
      if (!nonEmpty(s.text)) errors.push(`sections[${i}].text is required`);
    });
  }

  if (e.kind === 'guest' && !nonEmpty(e.author)) errors.push('guest essays need an author');

  if (e.kind === 'imagined') {
    const p = philosophers.get(e.philosopher);
    if (!p) errors.push(`philosopher "${e.philosopher}" is not a philosopher id on the site`);
    else if (p.death === 0) errors.push(`${p.name} is living; imagined essays use historical philosophers only`);
    if (!nonEmpty(e.topic)) errors.push('topic is required');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(e.date ?? '')) errors.push('date must be a full YYYY-MM-DD');
    else if (new Date(`${e.date}T12:00:00Z`).getUTCDay() !== 0) errors.push('date must be a Sunday');
    if ('author' in e || 'bio' in e) errors.push('imagined essays must not have author or bio (the page credits PhilosophyMe)');

    const all = [e.title, e.excerpt, e.topic, ...(e.tags ?? []), ...(e.sections ?? []).flatMap((s) => [s.heading ?? '', s.text ?? ''])].join('\n');
    if (/[—–]/.test(all)) errors.push('no em dashes or en dashes');
    if (/["“”]/.test(all)) errors.push('no quotation marks (an imagined essay must not quote anyone)');
    if (/https?:|www\./i.test(all)) errors.push('no links');
    const words = (e.sections ?? []).map((s) => s.text ?? '').join(' ').split(/\s+/).filter(Boolean).length;
    if (words < 900 || words > 1800) errors.push(`body is ${words} words; keep it between 900 and 1800`);
  }

  return errors.map((m) => `${base}: ${m}`);
}

const files = process.argv.slice(2).length
  ? process.argv.slice(2).map((f) => path.resolve(f))
  : fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => path.join(dir, f)) : [];

// Always load every existing essay so duplicate ids are caught.
const seen = new Map();
const philosophers = loadPhilosophers();
const targets = new Set(files);
const others = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => path.join(dir, f)).filter((f) => !targets.has(f)) : [];
for (const f of others) {
  try { const e = JSON.parse(fs.readFileSync(f, 'utf8')); seen.set(e.id, path.basename(f)); } catch {}
}

const problems = files.flatMap((f) => checkFile(f, philosophers, seen));
if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}
console.log(`Essays OK (${files.length} checked)`);
