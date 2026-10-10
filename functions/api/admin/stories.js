// Moderation: list pending stories, approve or reject one.
//   GET  /api/admin/stories                  -> pending stories
//   POST /api/admin/stories {id, action}     -> action: approve | reject
import { json } from "../_common.js";

export async function onRequestGet({ env }) {
  const rs = await env.DB.prepare(
    "SELECT id, created_at, age, display_name, body, lang FROM stories WHERE status = 'pending' ORDER BY created_at ASC LIMIT 200"
  ).all();
  return json(rs.results);
}

export async function onRequestPost({ request, env }) {
  let d;
  try { d = await request.json(); } catch { return json({ error: "bad_request" }, 400); }
  const status = d.action === "approve" ? "approved" : d.action === "reject" ? "rejected" : null;
  if (!status || !d.id) return json({ error: "bad_request" }, 400);
  await env.DB.prepare("UPDATE stories SET status = ? WHERE id = ?").bind(status, String(d.id)).run();
  return json({ ok: true });
}
