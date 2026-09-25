// Adds a site signup to the Sender.net list, keeping the API token on the server.
// Netlify serves it at /api/subscribe. Needs the environment variable SENDER_API_TOKEN, set in
// Netlify (Site configuration → Environment variables). Subscribers go to the Sender group named
// "PhilosophyMe", unless SENDER_GROUP_ID is set to a specific group's ID.
// Replies { status: 'success' } or { status: 'failed' } for the signup box to show.

const GROUP_NAME = 'PhilosophyMe';
const ALLOWED_ORIGIN = /^(https:\/\/(www\.)?philosophyme\.co|http:\/\/(localhost|127\.0\.0\.1)(:\d+)?)$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const API = 'https://api.sender.net/v2';

let cachedGroupId = null; // kept while Netlify reuses the same function instance

const reply = (status, code = 200) => Response.json({ status }, { status: code });

const senderHeaders = (token) => ({
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

async function findGroupId(token) {
  if (process.env.SENDER_GROUP_ID) return process.env.SENDER_GROUP_ID;
  if (cachedGroupId) return cachedGroupId;
  const res = await fetch(`${API}/groups`, { headers: senderHeaders(token) });
  if (!res.ok) throw new Error(`listing groups failed: ${res.status}`);
  const json = await res.json();
  const group = (json?.data || []).find(
    (g) => String(g?.title || '').trim().toLowerCase() === GROUP_NAME.toLowerCase()
  );
  if (!group?.id) throw new Error(`no Sender group named "${GROUP_NAME}"`);
  cachedGroupId = group.id;
  return cachedGroupId;
}

// For people already in Sender: creating them again is refused, so add them to the group
// directly. trigger_automation starts the welcome series for them too.
async function addToGroup(token, group, email) {
  const res = await fetch(`${API}/subscribers/groups/${encodeURIComponent(group)}`, {
    method: 'POST',
    headers: senderHeaders(token),
    body: JSON.stringify({ subscribers: [email], trigger_automation: true }),
  });
  if (!res.ok) console.error(`subscribe: adding to group answered ${res.status}: ${(await res.text()).slice(0, 300)}`);
  return res.ok;
}

export default async (req) => {
  if (req.method !== 'POST') return reply('failed', 405);

  const origin = req.headers.get('origin') || '';
  if (origin && !ALLOWED_ORIGIN.test(origin)) return reply('failed', 403);

  let body;
  try {
    body = await req.json();
  } catch {
    return reply('failed', 400);
  }

  const email = String(body?.email || '').trim().toLowerCase();
  // Honeypot: the hidden "website" field is invisible to people, so only bots fill it in.
  // Pretend it worked so they don't retry.
  if (body?.website) return reply('success');
  if (!EMAIL.test(email) || email.length > 254) return reply('failed', 400);

  const token = process.env.SENDER_API_TOKEN;
  if (!token) {
    console.error('subscribe: SENDER_API_TOKEN is not set');
    return reply('failed', 500);
  }

  try {
    const group = await findGroupId(token);
    const res = await fetch(`${API}/subscribers`, {
      method: 'POST',
      headers: senderHeaders(token),
      body: JSON.stringify({ email, groups: [group], trigger_automation: true }),
    });
    if (res.ok) return reply('success');
    const text = await res.text();
    // Already in Sender (signed up before, or added another way): make sure they're in the group.
    if (res.status === 422 && /already|taken|exists/i.test(text)) {
      return (await addToGroup(token, group, email)) ? reply('success') : reply('failed', 502);
    }
    console.error(`subscribe: Sender answered ${res.status}: ${text.slice(0, 300)}`);
    return reply('failed', 502);
  } catch (err) {
    console.error('subscribe: request to Sender failed', err);
    return reply('failed', 502);
  }
};

export const config = { path: '/api/subscribe' };
