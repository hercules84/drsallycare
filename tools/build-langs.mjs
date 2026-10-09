// Builds one address per language:
//   /            Arabic (source pages at the root)
//   /ku/...      Kurdish  (generated copies)
//   /en/...      English  (generated copies)
// Adds canonical, hreflang and per-language snippets, and writes sitemap.xml with alternates.
// Run through tools/build-articles.mjs (which imports this file), or on its own: node tools/build-langs.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://drsallycare.com";
const LANGS = ["ar", "ku", "en"];
const DATE = new Date().toISOString().slice(0, 10);

// Every public page, relative to the root (directories end with "/").
function collect(dir, out = []) {
  for (const e of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
    const rel = path.posix.join(dir, e.name);
    if (e.isDirectory()) collect(rel, out);
    else if (e.name === "index.html") out.push(rel);
  }
  return out;
}
const SKIP = ["private-254f50cabe4785fd/", "ku/", "en/", "functions/", "tools/"];
const pages = ["index.html", ...collect("autism"), ...collect("adhd"), ...collect("adolescence"), ...collect("play"), ...collect("resources"), ...collect("learn")]
  .filter(p => !SKIP.some(s => p.startsWith(s)));

// Path of a page in the Arabic (root) tree, e.g. "learn/x/index.html" -> "/learn/x/"
const urlPath = rel => "/" + rel.replace(/index\.html$/, "");

const BLOCK = (name, body) => `<!--${name}-->${body}<!--/${name}-->`;
const stripBlock = (html, name) => html.replace(new RegExp(`<!--${name}-->[\\s\\S]*?<!--/${name}-->\\n?`, "g"), "");

function snippet(lang) {
  const prefix = lang === "ar" ? "" : "/" + lang;
  return BLOCK("lang", `<script>window.SITE_LANG="${lang}";window.LOC=function(p){return "${prefix}"+p};</script>\n`);
}
function hreflang(arUrl) {
  const alt = l => `${SITE}${l === "ar" ? "" : "/" + l}${arUrl}`;
  return BLOCK("hreflang", LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="${alt(l)}">`).join("\n") +
    `\n<link rel="alternate" hreflang="x-default" href="${alt("ar")}">\n`);
}

function insertHead(html, block) {
  // put the snippet before the site scripts, so window.LOC exists when they run
  const i = html.search(/<script src="\/assets\//);
  if (i >= 0) return html.slice(0, i) + block + html.slice(i);
  return html.replace("</head>", block + "</head>");
}
function insertAfterCanonical(html, block) {
  return html.replace(/<link rel="canonical"[^>]*>\n?/, m => m + block + "\n");
}

function transform(html, lang, arUrl) {
  let h = stripBlock(stripBlock(html, "lang"), "hreflang");
  h = h.replace(/<html lang="[^"]*"(?: dir="[^"]*")?>/, `<html lang="${lang}" dir="${lang === "en" ? "ltr" : "rtl"}">`);
  const self = `${SITE}${lang === "ar" ? "" : "/" + lang}${arUrl}`;
  h = h.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${self}">`);
  h = h.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${self}">`);
  const pageTitle = (h.match(/<title>([^<]*)<\/title>/) || [])[1];
  if (pageTitle) h = h.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${pageTitle}">`);
  h = h.replace(/<main class="wrap">/, '<main id="main" class="wrap">');
  // internal page links: /x -> /lang/x (not assets, icons or files)
  if (lang !== "ar") h = h.replace(/(href|src|action)="\/(?!\/|assets\/|favicon|apple-touch|icon-|robots|sitemap)/g, `$1="/${lang}/`);
  h = insertAfterCanonical(h, hreflang(arUrl));
  h = insertHead(h, snippet(lang));
  return h;
}

const urls = [];
for (const rel of pages) {
  const arUrl = urlPath(rel);
  const src = path.join(root, rel);
  const original = fs.readFileSync(src, "utf8");
  // the Arabic source keeps its own snippet and hreflang
  fs.writeFileSync(src, transform(original, "ar", arUrl));
  for (const lang of LANGS.slice(1)) {
    const out = path.join(root, lang, rel);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, transform(original, lang, arUrl));
  }
  urls.push(arUrl);
}

const xml = urls.map(u => {
  const links = LANGS.map(l => `      <xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${l === "ar" ? "" : "/" + l}${u}"/>`).join("\n") +
    `\n      <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${u}"/>`;
  return LANGS.map(l => `  <url>\n    <loc>${SITE}${l === "ar" ? "" : "/" + l}${u}</loc>\n    <lastmod>${DATE}</lastmod>\n${links}\n  </url>`).join("\n");
}).join("\n");
fs.writeFileSync(path.join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${xml}\n</urlset>\n`);
console.log(`languages built: ${pages.length} pages x ${LANGS.length} languages`);
