# drsallycare.com — instructions for Claude (read README.md too)

Owner of the work: Dr. Saleem Andraws (dr.saleemo@gmail.com), who builds and maintains this site for Dr. Sally Rizqo (child & adolescent mental health, online, Iraq). Replies in Arabic or English, approves briefly.

## Where everything is
- Repo: github.com/hercules84/drsallycare, branch `main` (its own repo; not part of saleemqia/doctorsaleemandraws).
- Hosting: Cloudflare Pages project `drsallycare` (same Cloudflare account as doctorsaleem.com: 669c04c975d3e6bf5af1e4cd8ec06fca). No build step, output `/`; pushing to `main` deploys.
- Database: D1 `drsally-stories` (ID 77909622-5431-4523-8843-ac5337513561), binding `DB`, table from `migrations/0001_stories.sql`.
- Secrets live only in Cloudflare (Pages → Settings → Variables): `CASES_PASSWORD` (staff access code), optional `IP_SALT`. Never write them in the repo or in chat.
- Staff page: /private-254f50cabe4785fd/ (stories approval at .../stories.html), guarded by `functions/private-254f50cabe4785fd/[[path]].js` and the access code.
- Contact on the site: WhatsApp/phone 0773 891 9655 (`WHATSAPP_NUMBER` / `PHONE_DISPLAY` in `assets/site.js`).

## How the site is built
- Static HTML/CSS/JS. Arabic source pages at the root; Kurdish `/ku/` and English `/en/` copies are GENERATED: edit the Arabic/source pages or `tools/articles.json`, then run `node tools/build-articles.mjs` (it also runs `tools/build-langs.mjs`, rebuilds `learn/`, `assets/articles-data.js`, `sitemap.xml`) and commit the output.
- Shared header/footer/language switch: `assets/site.js`; topic pages: `assets/topic.js`; styles `assets/site.css`. After changing CSS/JS, bump the `?v=` number on asset links in every page.
- Stories: `functions/api/stories.js` (public GET/POST, posts saved as pending), `functions/api/admin/*` (access code). Nothing is published without Dr. Sally's approval.

## Rules
- Medical content: careful, non-diagnostic wording; articles and photos need Dr. Sally's review before they are called final. Don't invent credentials (her specialty/registration number stay hidden until she confirms).
- Child privacy: stories and messages may involve children; keep them unpublished until approved; never put personal data in the repo.
- Check before pushing: open the changed pages in a browser at phone width (390 px) and desktop, all three languages, no horizontal scroll, no console errors.
- Commit with clear messages; push to `main`; check the live page after Cloudflare deploys (about 1 minute).

## Open items (see README "Still to fill in")
Dr. Sally's photo `assets/dr-sally.jpg`, her review of articles, specialty/registration number, Kurdish review of long topic texts.
