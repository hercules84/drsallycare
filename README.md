# drsallycare.com

Static site for Dr. Sally Rizqo (child & adolescent mental health, online). Cloudflare Pages project `drsallycare` deploys this repo with no build step, output directory `/`. (Repo: github.com/hercules84/drsallycare, `main`. It used to be the `drsallycare` branch of doctorsaleemandraws.)

## Structure
- `index.html` home, `autism/`, `adhd/`, `adolescence/` topic pages (Families / Teachers / Researchers), `play/` games
- `learn/` guides hub and one page per article. Articles are written in `tools/articles.json`; run `node tools/build-articles.mjs` to regenerate `learn/`, `assets/articles-data.js` and `sitemap.xml` (commit the output).
- `assets/site.js` shared header, footer, language switch (ar / ku / en), WhatsApp number setting
- `assets/topic.js` topic page template, `assets/site.css` styles, `assets/logo-mark.png` logo mask

## Status
Public since 2026-10-07 (indexable, sitemap at /sitemap.xml).

## Still to fill in
- WhatsApp/phone is set (07738919655 → `WHATSAPP_NUMBER` / `PHONE_DISPLAY` in `assets/site.js`).
- Her details as given by Dr. Sally: graduated 2009 (Mosul, Nineveh Medicine), began practising psychiatry 2017, director of the Child Psychology Centre since 2021, 2,000+ cases. The portrait frames (home top + About) are intentionally empty: save a new photo as `assets/dr-sally.jpg` (about 560x700) and it appears automatically.
- The articles and her photo (`assets/dr-sally.jpg`) await Dr. Sally's medical review and approval.
- Specialty and registration number (hidden until confirmed); her title currently reads "physician in child & adolescent mental health".
- Kurdish review; long topic content shows Arabic with a note in the Kurdish view.
- Bump the `?v=` number on asset links in every page after changing CSS/JS.

## Stories database (visitor experiences)

Visitors post at /stories/. Posts are stored as "pending" and shown only after Dr. Sally approves them.

One-time setup on Cloudflare (Pages project):
1. D1 database `drsally-stories` (ID `77909622-5431-4523-8843-ac5337513561`) is created and the `stories` table is set up. If you ever recreate it, run `migrations/0001_stories.sql` against it.
2. Pages → Settings → Bindings: add a **D1 database** binding named `DB` pointing to that database.
3. Settings → Environment variables: `CASES_PASSWORD` (access code for staff pages) and optionally `IP_SALT` (any random text, used to hash visitor IPs for rate limiting).
4. Approval page (access code required): https://drsallycare.com/private-254f50cabe4785fd/stories.html

Routes: `GET/POST /api/stories` (public), `/api/admin/*` (access code). Nothing is published automatically.
