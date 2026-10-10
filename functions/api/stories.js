// Public API for visitor stories.
//   GET  /api/stories  -> approved stories only
//   POST /api/stories  -> stores a new story as "pending" (never shown until approved)
import { json, sha256 } from "./_common.js";

const AGES = ["", "under3", "3-6", "7-12", "13-18", "over18", "private"];
const LANGS = ["ar", "ku", "en"];
const MAX_PER_HOUR = 3;

export async function onRequestGet({ env }) {
  const rs = await env.DB.prepare(
    "SELECT id, created_at, age, display_name, body, lang FROM stories WHERE status = 'approved' ORDER BY created_at DESC LIMIT 100"
  ).all();
  return json(rs.results.map(r => ({
    id: r.id, created_at: r.created_at, age: r.age, name: r.display_name, body: r.body, lang: r.lang,
  })));
}

export async function onRequestPost({ request, env }) {
  let d;
  try { d = await request.json(); } catch { return json({ error: "bad_request" }, 400); }

  // honeypot: real visitors never fill this hidden field; pretend success for bots
  if (d.website) return json({ ok: true }, 201);

  const body = String(d.text || "").trim();
  if (body.length < 20 || body.length > 2000 || d.consent !== true) return json({ error: "invalid" }, 400);

  const name = d.anon ? null : (String(d.name || "").trim().slice(0, 60) || null);
  const age = AGES.includes(d.age) ? d.age : "";
  const lang = LANGS.includes(d.lang) ? d.lang : "ar";

  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const ipHash = await sha256(ip + (env.IP_SALT || "drsally-stories"));
  const since = Math.floor(Date.now() / 1000) - 3600;
  const count = await env.DB.prepare("SELECT COUNT(*) AS n FROM stories WHERE ip_hash = ? AND created_at > ?")
    .bind(ipHash, since).first();
  if (count.n >= MAX_PER_HOUR) return json({ error: "too_many" }, 429);

  await env.DB.prepare(
    "INSERT INTO stories (id, created_at, status, display_name, age, body, lang, ip_hash) VALUES (?, ?, 'pending', ?, ?, ?, ?, ?)"
  ).bind(crypto.randomUUID(), Math.floor(Date.now() / 1000), name, age, body, lang, ipHash).run();

  return json({ ok: true }, 201);
}
