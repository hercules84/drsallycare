// Every /api/admin/* route needs the same access code as the private case tool (secret CASES_PASSWORD).
export async function onRequest(context) {
  const expected = context.env.CASES_PASSWORD || "";
  const auth = context.request.headers.get("Authorization") || "";
  let ok = false;
  if (expected && auth.startsWith("Basic ")) {
    try {
      const pass = atob(auth.slice(6));
      ok = pass.slice(pass.indexOf(":") + 1) === expected;
    } catch (e) { ok = false; }
  }
  if (!ok) {
    return new Response("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Staff", charset="UTF-8"', "Cache-Control": "no-store" },
    });
  }
  return context.next();
}
