// Gate for the private case-sheet tool. Requires HTTP Basic auth.
// Set the secret in Cloudflare Pages: Settings > Environment variables > CASES_PASSWORD (encrypted).
// If the secret is missing, access is refused (fails closed).

function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function onRequest(context) {
  const { request, env, next } = context;
  const expected = env.CASES_PASSWORD || "";
  const auth = request.headers.get("Authorization") || "";
  let ok = false;
  if (expected && auth.startsWith("Basic ")) {
    try {
      const decoded = atob(auth.slice(6));
      const pass = decoded.slice(decoded.indexOf(":") + 1);
      ok = safeEqual(pass, expected);
    } catch (e) { ok = false; }
  }
  if (!ok) {
    return new Response("Authentication required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Staff", charset="UTF-8"',
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow, noarchive",
      },
    });
  }
  return next();
}
