/* Dr. Sally Care — shared header, footer, language switching and WhatsApp links.
   Each page sets window.PAGE = { id, t: {ar:{}, ku:{}, en:{}}, onLang(lang) } before loading this file.
   Text lookup: page text → shared text; Kurdish falls back to Arabic where a Kurdish string is missing. */

/* ===== Settings to fill in before launch ===== */
const WHATSAPP_NUMBER = "9647738919655"; // international format, digits only. Empty = buttons go to the booking section.
const PHONE_DISPLAY = "0773 891 9655"; // shown to visitors; tel: link is built from WHATSAPP_NUMBER

const COMMON = {
ar:{

 skip:"تجاوز إلى المحتوى", testbar:"نسخة تجريبية للمراجعة — المحتوى بانتظار اعتماد الطبيبة.",
 brand:"د. سالي رزقو", brandSub:"الصحة النفسية للأطفال والمراهقين · أونلاين",
 navHome:"الرئيسية", navAutism:"التوحد", navAdhd:"فرط الحركة", navTeen:"المراهقة", navPlay:"ألعاب وأنشطة", navBook:"احجز",
 btnBook:"احجز عبر واتساب", fab:"واتساب",
 confid:"جميع الاستشارات والمعلومات سرّية تمامًا.",
 disclaimer:"هذا الموقع للمعلومات العامة، ولا يغني عن التقييم الفردي أو الرعاية الطارئة.",
 emergency:"الاستشارات أونلاين ليست للحالات الطارئة. إذا كان الطفل في خطر مباشر، اتصلوا بخدمات الطوارئ أو توجهوا إلى أقرب مستشفى.",
 base:"دهوك، إقليم كوردستان العراق",
 waMsg:"مرحبًا دكتورة سالي، أود حجز استشارة أونلاين.", waMsgTraining:"مرحبًا دكتورة سالي، أود الاستفسار عن ورشة تدريبية لمدرستنا أو مؤسستنا.", waMsgAsk:"مرحبًا دكتورة سالي، لدي سؤال.",
 kuFallback:"",
 audFam:"للعائلات", audTea:"للمعلمين", audRes:"للباحثين",
 mythLabel:"شائع لكنه غير صحيح", factLabel:"الحقيقة",
 relTitle:"ألعاب وأنشطة مرتبطة", ctaTitle:"هل لديكم مخاوف؟", ctaLead:"استشارة أونلاين خاصة وسرّية، بالعربية أو الكوردية أو الإنجليزية.",
 gEmotions:"مطابقة المشاعر", gEmotionsD:"التعرّف على تعابير الوجه",
 gMemory:"لعبة الذاكرة", gMemoryD:"تقوية الانتباه والذاكرة",
 gBreath:"فقاعة التنفس", gBreathD:"تهدئة الجسم في دقيقة",
 gSchedule:"جدولي اليومي", gScheduleD:"روتين مصوّر قابل للطباعة",
 gThermo:"مقياس مشاعري", gThermoD:"للمراهقين: كيف أشعر اليوم؟",
 gSort:"فرز وتصنيف", gSortD:"ضع كل شيء في سلته", gPattern:"أنماط وتسلسل", gPatternD:"ما الذي يأتي بعد ذلك؟", gOdd:"من المختلف؟", gOddD:"لاحظ واختر الشيء المختلف", gSituations:"كيف يشعرون؟", gSituationsD:"اربط الموقف بالشعور", gChallenge:"تحدي ألغاز التفكير", gChallengeD:"٨ ألغاز ممتعة (ليس اختبار ذكاء)",
 refsTitle:"مراجع مختارة",
 navLearn:"مقالات وأدلة", menu:"القائمة", sections:"الأقسام", search:"ابحث في الموقع", noRes:"لا توجد نتائج", navRes:"الموارد", phoneLabel:"هاتف / واتساب", callNow:"اتصال هاتفي",
 tagAutism:"التوحد", tagAdhd:"فرط الحركة", tagAdolescence:"المراهقة", tagLearning:"صعوبات التعلم", tagTeachers:"للمعلمين", tagCommunity:"دعم في الأزمات", tagWellbeing:"الحياة اليومية", tagConsultation:"الاستشارة", allTags:"الكل",
 minWord:"دقائق قراءة", backLearn:"← كل المقالات", moreArt:"مقالات ذات صلة", allArt:"كل المقالات", artNote:"محتوى عام للتوعية، ولا يغني عن التقييم الفردي.",
},
ku:{

 skip:"بڕۆ بۆ ناوەڕۆک", testbar:"وەشانا تاقیکرنێ بۆ پێداچوونێ — کوردیا ڤێ ماڵپەڕێ ڕەشنڤیسە و پێدڤی ب پێداچوونێیە.",
 brand:"د. سالی ڕزقۆ", brandSub:"ساخلەمیا دەروونی یا زارۆکان و هەرزەکاران · ئۆنلاین",
 navHome:"سەرەکی", navAutism:"ئۆتیزم", navAdhd:"زێدە-جوولە", navTeen:"هەرزەکاری", navPlay:"یاری و چالاکی", navBook:"ژڤان بگرە",
 btnBook:"ب واتسئاپێ ژڤان بگرە", fab:"واتسئاپ",
 confid:"هەمی شێوەر و زانیاری ب تەمامی نهێنی دمینن.",
 disclaimer:"ئەڤ ماڵپەڕە بۆ زانیاریێن گشتییە، و جهێ هەلسەنگاندنا تاکەکەسی یان چارەسەریا لەزگین ناگریت.",
 emergency:"شێوەرێن ئۆنلاین بۆ ڕەوشێن لەزگین نینن. ئەگەر زارۆک د مەترسیەکا ڕاستەوخۆ دا بیت، پەیوەندیێ ب خزمەتگوزاریێن لەزگین بکەن یان بچنە نێزیکترین نەخوشخانێ.",
 base:"دهۆک، هەرێما کوردستانا عێراقێ",
 waMsg:"سلاڤ دکتۆرە سالی، دخوازم ژڤانەکێ شێوەرا ئۆنلاین بگرم.", waMsgTraining:"سلاڤ دکتۆرە سالی، دخوازم پسیارێ بکەم دەربارەی ورکشۆپەکا ڕاهێنانێ بۆ قوتابخانا یان دامەزراوا مە.", waMsgAsk:"سلاڤ دکتۆرە سالی، پسیارەکا من هەیە.",
 kuFallback:"وەرگێڕانا کوردی یا ڤێ بەشێ د بەرهەڤکرنێ دایە. نوکە دەقێ عەرەبی دئێتە نیشاندان.",
 audFam:"بۆ خێزانان", audTea:"بۆ مامۆستایان", audRes:"بۆ ڤەکۆلەران",
 mythLabel:"بەربەلاڤ بەلێ نە دروستە", factLabel:"ڕاستی",
 relTitle:"یاری و چالاکیێن پەیوەندیدار", ctaTitle:"نیگەرانیێن هەوە هەنە؟", ctaLead:"شێوەرەکا ئۆنلاین یا تایبەت و نهێنی، ب کوردی، عەرەبی یان ئینگلیزی.",
 gEmotions:"هەستان بگەهینە ئێک", gEmotionsD:"ناسینا دەربڕینێن ڕوویی",
 gMemory:"یاریا بیرێ", gMemoryD:"بهێزکرنا سەرنج و بیرێ",
 gBreath:"پڵقا هەناسێ", gBreathD:"ئارامکرنا لەشی د خولەکەکێ دا",
 gSchedule:"خشتێ من یێ ڕۆژانە", gScheduleD:"ڕۆتینەکا وێنەیی بۆ چاپکرنێ",
 gThermo:"پێڤەرێ هەستێن من", gThermoD:"بۆ هەرزەکاران: ئەز ئەڤرۆ چەوانم؟",
 gSort:"ڕیزکرن و پۆلینکرن", gSortD:"هەر تشتەکی بکە د سەبەتا خۆ دا", gPattern:"پاتێر و ڕیزبوون", gPatternD:"پشتی ڤێ چ دئێت؟", gOdd:"کیژ جودایە؟", gOddD:"تێبینی بکە و یێ جودا هەلبژێرە", gSituations:"چەوا هەست دکەن؟", gSituationsD:"ڕەوشێ ب هەستی ڤە گرێبدە", gChallenge:"بەرەنگاربوونا پەزلان", gChallengeD:"8 پەزلێن خۆش (تێستا زیرەکیێ نینە)",
 refsTitle:"ژێدەرێن هەلبژارتی",
 navLearn:"ڕێبەر و بابەت", menu:"مینو", sections:"بەش", search:"گەڕان د ماڵپەڕی دا", noRes:"ئەنجام نینە", navRes:"سەرچاوە", phoneLabel:"تەلەفون / واتسئاپ", callNow:"پەیوەندیێ بکە",
 tagAutism:"ئۆتیزم", tagAdhd:"زێدە-جوولە", tagAdolescence:"هەرزەکاری", tagLearning:"زەحمەتیێن فێربوونێ", tagTeachers:"بۆ مامۆستایان", tagCommunity:"پشتەڤانی د قەیرانان دا", tagWellbeing:"ژیانا ڕۆژانە", tagConsultation:"شێوەر", allTags:"هەمی",
 minWord:"خولەک بۆ خواندنێ", backLearn:"← هەمی بابەت", moreArt:"بابەتێن پەیوەندیدار", allArt:"هەمی بابەت", artNote:"ناڤەڕۆکەکێ گشتییە بۆ هۆشیاریێ، و جهێ هەلسەنگاندنا تاکەکەسی ناگریت.",
},
en:{

 skip:"Skip to content", testbar:"Test version for review — content awaits the doctor's approval.",
 brand:"Dr. Sally Rizqo", brandSub:"Child & adolescent mental health · Online",
 navHome:"Home", navAutism:"Autism", navAdhd:"ADHD", navTeen:"Adolescence", navPlay:"Games & activities", navBook:"Book",
 btnBook:"Book via WhatsApp", fab:"WhatsApp",
 confid:"Every consultation and all information are completely confidential.",
 disclaimer:"This website offers general information and does not replace an individual assessment or emergency care.",
 emergency:"Online consultations are not for emergencies. If a child is in immediate danger, contact your local emergency services or go to the nearest hospital.",
 base:"Duhok, Kurdistan Region of Iraq",
 waMsg:"Hello Dr. Sally, I'd like to book an online consultation.", waMsgTraining:"Hello Dr. Sally, I'd like to ask about a training workshop for our school or organisation.", waMsgAsk:"Hello Dr. Sally, I have a question.",
 kuFallback:"",
 audFam:"Families", audTea:"Teachers", audRes:"Researchers",
 mythLabel:"Common, but not true", factLabel:"The facts",
 relTitle:"Related games & activities", ctaTitle:"Have concerns?", ctaLead:"A private, confidential online consultation in Arabic, Kurdish or English.",
 gEmotions:"Feelings match", gEmotionsD:"Recognising facial expressions",
 gMemory:"Memory cards", gMemoryD:"Building attention and memory",
 gBreath:"Breathing bubble", gBreathD:"Calm the body in a minute",
 gSchedule:"My day", gScheduleD:"A printable picture routine",
 gThermo:"Feelings check-in", gThermoD:"For teens: how am I today?",
 gSort:"Sort it out", gSortD:"Put each thing in its basket", gPattern:"Patterns", gPatternD:"What comes next?", gOdd:"Odd one out", gOddD:"Spot the one that is different", gSituations:"How do they feel?", gSituationsD:"Match the situation to the feeling", gChallenge:"Thinking puzzles", gChallengeD:"8 fun puzzles (not an IQ test)",
 refsTitle:"Selected references",
 navLearn:"Guides & articles", menu:"Menu", sections:"Sections", search:"Search the site", noRes:"No results", navRes:"Resources", phoneLabel:"Phone / WhatsApp", callNow:"Call",
 tagAutism:"Autism", tagAdhd:"ADHD", tagAdolescence:"Adolescence", tagLearning:"Learning difficulties", tagTeachers:"For teachers", tagCommunity:"Support in crises", tagWellbeing:"Everyday life", tagConsultation:"Consultation", allTags:"All",
 minWord:"min read", backLearn:"← All articles", moreArt:"Related articles", allArt:"All articles", artNote:"General information for awareness; it does not replace an individual assessment.",
}};

const WA_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.6 2.1 1.1 1 2 1.3 2.3 1.4.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.4z"/></svg>';
const MARK = '<span class="brand-mark" aria-hidden="true" style="display:inline-block;background:var(--teal);-webkit-mask:url(/assets/logo-mark.png?v=2) center/contain no-repeat;mask:url(/assets/logo-mark.png?v=2) center/contain no-repeat"></span>';

const NAV = [
  ["home","/","navHome"],["autism","/autism/","navAutism"],["adhd","/adhd/","navAdhd"],
  ["teen","/adolescence/","navTeen"],["learn","/learn/","navLearn"],["res","/resources/","navRes"],["play","/play/","navPlay"],["book","/#book","navBook"]
];

let LANG = "ar";
const PAGE = window.PAGE || { id:"", t:{} };
if (!window.LOC) window.LOC = p => p; // normally defined by the inline snippet in each page
if (!window.SITE_LANG) window.SITE_LANG = "ar";

function tx(key, lang = LANG){
  const p = PAGE.t || {};
  if (p[lang] && p[lang][key] !== undefined) return p[lang][key];
  if (COMMON[lang] && COMMON[lang][key] !== undefined) return COMMON[lang][key];
  if (lang === "ku") return tx(key, "ar");
  return "";
}
window.tx = tx;

function buildChrome(){
  const BRAND = `<a class="brand" href="${LOC('/')}">${MARK}<span><span class="brand-name" data-i18n="brand"></span><br><span class="brand-sub" data-i18n="brandSub"></span></span></a>`;
  const TEL = `<a class="head-tel" dir="ltr" data-tel href="#" aria-label="Call"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg><span class="tel-num">${PHONE_DISPLAY}</span></a>`;
  const LANGS = `<div class="langs" role="group" aria-label="Language"><button data-lang="ar" lang="ar">العربية</button><button data-lang="ku" lang="ku">کوردی</button><button data-lang="en" lang="en">English</button></div>`;
  const NAVL = NAV.map(([id,href,key]) => `<a href="${LOC(href)}" data-i18n="${key}"${id===PAGE.id?' aria-current="page"':''}></a>`).join("");
  const head = document.createElement("div");
  head.innerHTML = `
  <header class="site"><div class="wrap">
    <div class="head-row">${BRAND}<button class="menu-btn" type="button" aria-controls="side" aria-expanded="false"><span aria-hidden="true">☰</span> <span data-i18n="menu"></span></button></div>
    <div class="langs-bar">${LANGS}</div>
  </div></header>
  <aside class="side" id="side" aria-label="Site"><div class="side-in">
    <div class="side-top">${BRAND.replace('class="brand"','class="brand side-brand"')}${TEL.replace('class="head-tel"','class="head-tel side-tel"')}</div>
    <div class="langs-bar side-langs">${LANGS}</div>
    <input type="search" id="side-q" class="side-q" aria-label="search" autocomplete="off">
    <div class="side-h" data-i18n="sections"></div>
    <nav class="side-nav" aria-label="Main">${NAVL}</nav>
    <div class="side-res" id="side-res"></div>
  </div></aside>
  <div class="scrim" id="scrim"></div>`;
  document.body.prepend(...head.childNodes);
  document.body.classList.add("has-side");

  const foot = document.createElement("div");
  foot.innerHTML = `
  <footer class="site"><div class="wrap">
    <div class="emerg" data-i18n="emergency"></div>
    <div class="foot-grid">
      <div><b data-i18n="brand"></b><br><span data-i18n="base"></span><br><a class="tel-link" dir="ltr" href="#" data-tel>${PHONE_DISPLAY}</a></div>
      <div class="foot-links">${NAV.slice(1,6).map(([id,href,key]) => `<a href="${LOC(href)}" data-i18n="${key}"></a>`).join("")}</div>
    </div>
    <p data-i18n="confid"></p><p data-i18n="disclaimer"></p>
  </div></footer>
  <a class="fab wa-link" href="${LOC('/#book')}" aria-label="WhatsApp">${WA_ICON}<span data-i18n="fab"></span></a>`;
  document.body.append(...foot.childNodes);
}

function setLang(lang){
  LANG = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.innerHTML = String(tx(el.dataset.i18n)).replace(/\{(\w+)\}/g, (m, k) => tx(k) || m);
  });
  document.querySelectorAll(".langs button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  document.querySelectorAll(".ku-note").forEach(el => { el.hidden = lang !== "ku"; el.textContent = COMMON.ku.kuFallback; });
  const has = WHATSAPP_NUMBER.trim() !== "";
  document.querySelectorAll(".wa-link").forEach(a => {
    if (has){ a.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(tx(a.dataset.wamsg || "waMsg"))}`; a.target = "_blank"; a.rel = "noopener"; }
    else { a.href = LOC("/#book"); a.removeAttribute("target"); }
    // no number yet: hide the floating button and the button inside the booking box; links elsewhere lead to the "opening soon" note
    a.hidden = !has && (a.classList.contains("fab") || !!a.closest("#book"));
  });
  document.querySelectorAll("[data-tel]").forEach(a => { a.href = has ? `tel:+${WHATSAPP_NUMBER}` : "#"; a.hidden = !has; const n = a.querySelector(".tel-num"); if (n && !n.textContent) n.textContent = PHONE_DISPLAY; });
  document.querySelectorAll(".wa-missing").forEach(el => el.hidden = has);
  const title = tx("pageTitle"); if (title) document.title = title;
  const sq = document.getElementById("side-q"); if (sq) sq.placeholder = tx("search");
  if (typeof PAGE.onLang === "function") PAGE.onLang(lang);
}
window.setLang = setLang;

/* side panel: open/close on phones, search over sections and articles */
function wireSide(){
  const side = document.getElementById("side"), scrim = document.getElementById("scrim"), mb = document.querySelector(".menu-btn");
  const setSide = o => { side.classList.toggle("open", o); scrim.classList.toggle("on", o); mb.setAttribute("aria-expanded", String(o)); };
  mb.addEventListener("click", () => setSide(!side.classList.contains("open")));
  scrim.addEventListener("click", () => setSide(false));
  document.addEventListener("keydown", e => { if (e.key === "Escape") setSide(false); });
  side.querySelectorAll(".side-nav a").forEach(a => a.addEventListener("click", () => setSide(false)));
  const q = document.getElementById("side-q"), res = document.getElementById("side-res");
  let loading = false;
  const loadArticles = () => { if (window.ARTICLES || loading) return; loading = true; const s = document.createElement("script"); s.src = "/assets/articles-data.js?v=23"; s.onload = () => draw(q.value); document.head.appendChild(s); };
  function draw(v){
    const term = (v || "").trim().toLowerCase();
    if (!term){ res.innerHTML = ""; return; }
    const hits = [];
    NAV.forEach(([id, href, key]) => { const label = tx(key); if (label.toLowerCase().includes(term)) hits.push([label, LOC(href)]); });
    (window.ARTICLES || []).forEach(a => { const d = a[LANG] || a.ar; if ((d.title + " " + d.sum).toLowerCase().includes(term)) hits.push([d.title, LOC("/learn/" + a.slug + "/")]); });
    res.innerHTML = hits.length ? hits.slice(0, 12).map(([l, h]) => `<a href="${h}">${l}</a>`).join("") : `<p class="small-note">${tx("noRes")}</p>`;
  }
  q.addEventListener("focus", loadArticles);
  q.addEventListener("input", () => { loadArticles(); draw(q.value); });
}

/* gentle scroll reveal */
(function(){
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold:.08 });
  setTimeout(() => document.querySelectorAll("main .card, main .svc, main .topic-card, main .art-card, main .faq details, main .contact-card, main .cta").forEach((el, i) => {
    const r = el.getBoundingClientRect(); if (r.top < innerHeight) return;
    el.classList.add("rv"); el.style.transitionDelay = (i % 3) * 70 + "ms"; io.observe(el);
  }), 60);
})();
window.getLang = () => LANG;

buildChrome();
{ const sk = document.createElement("a"); sk.className = "skip"; sk.href = "#main"; sk.dataset.i18n = "skip"; document.body.prepend(sk); }
wireSide();
/* each language has its own address: /, /ku/, /en/ (the page is rebuilt per language by tools/build-langs.mjs) */
function goLang(lang){
  const cur = window.SITE_LANG || "ar";
  if (lang === cur) return;
  const base = location.pathname.replace(/^\/(ku|en)(?=\/|$)/, "") || "/";
  location.href = (lang === "ar" ? "" : "/" + lang) + base + location.search + location.hash;
}
document.querySelectorAll(".langs button").forEach(b => b.addEventListener("click", () => goLang(b.dataset.lang)));
setLang(window.SITE_LANG || "ar");
