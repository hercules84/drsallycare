# drsallycare.com

Static site for Dr. Sally Rizqo (child & adolescent mental health, online). Cloudflare Pages project `drsallycare` deploys this branch (`drsallycare`) with no build step, output directory `/`.

## Structure
- `index.html` home, `autism/`, `adhd/`, `adolescence/` topic pages (Families / Teachers / Researchers), `play/` games
- `assets/site.js` shared header, footer, language switch (ar / ku / en), WhatsApp number setting
- `assets/topic.js` topic page template, `assets/site.css` styles, `assets/logo-mark.png` logo mask

## Status
Public since 2026-10-07 (indexable, sitemap at /sitemap.xml).

## Still to fill in
- `WHATSAPP_NUMBER` in `assets/site.js`: until set, booking buttons lead to an "opening soon" note and the floating button is hidden.
- Specialty and registration number (hidden until confirmed); her title currently reads "physician in child & adolescent mental health".
- Kurdish review; long topic content shows Arabic with a note in the Kurdish view.
- Bump the `?v=` number on asset links in every page after changing CSS/JS.
