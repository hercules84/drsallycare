/* Dr. Sally Care — shared header, footer, language switching and WhatsApp links.
   Each page sets window.PAGE = { id, t: {ar:{}, ku:{}, en:{}}, onLang(lang) } before loading this file.
   Text lookup: page text → shared text; Kurdish falls back to Arabic where a Kurdish string is missing. */

/* ===== Settings to fill in before launch ===== */
const WHATSAPP_NUMBER = "9647738919655"; // international format, digits only. Empty = buttons go to the booking section.
const PHONE_DISPLAY = "0773 891 9655"; // shown to visitors; tel: link is built from WHATSAPP_NUMBER

const COMMON = {
ar:{
 testbar:"نسخة تجريبية للمراجعة — المحتوى بانتظار اعتماد الطبيبة.",
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
 refsTitle:"مراجع مختارة",
 navLearn:"مقالات وأدلة", phoneLabel:"هاتف / واتساب", callNow:"اتصال هاتفي",
 tagAutism:"التوحد", tagAdhd:"فرط الحركة", tagAdolescence:"المراهقة", tagLearning:"صعوبات التعلم", tagTeachers:"للمعلمين", tagCommunity:"دعم في الأزمات", tagWellbeing:"الحياة اليومية", tagConsultation:"الاستشارة", allTags:"الكل",
 minWord:"دقائق قراءة", backLearn:"← كل المقالات", moreArt:"مقالات ذات صلة", allArt:"كل المقالات", artNote:"محتوى عام للتوعية، ولا يغني عن التقييم الفردي.",
},
ku:{
 testbar:"وەشانا تاقیکرنێ بۆ پێداچوونێ — کوردیا ڤێ ماڵپەڕێ ڕەشنڤیسە و پێدڤی ب پێداچوونێیە.",
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
 refsTitle:"ژێدەرێن هەلبژارتی",
 navLearn:"ڕێبەر و بابەت", phoneLabel:"تەلەفون / واتسئاپ", callNow:"پەیوەندیێ بکە",
 tagAutism:"ئۆتیزم", tagAdhd:"زێدە-جوولە", tagAdolescence:"هەرزەکاری", tagLearning:"زەحمەتیێن فێربوونێ", tagTeachers:"بۆ مامۆستایان", tagCommunity:"پشتەڤانی د قەیرانان دا", tagWellbeing:"ژیانا ڕۆژانە", tagConsultation:"شێوەر", allTags:"هەمی",
 minWord:"خولەک بۆ خواندنێ", backLearn:"← هەمی بابەت", moreArt:"بابەتێن پەیوەندیدار", allArt:"هەمی بابەت", artNote:"ناڤەڕۆکەکێ گشتییە بۆ هۆشیاریێ، و جهێ هەلسەنگاندنا تاکەکەسی ناگریت.",
},
en:{
 testbar:"Test version for review — content awaits the doctor's approval.",
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
 refsTitle:"Selected references",
 navLearn:"Guides & articles", phoneLabel:"Phone / WhatsApp", callNow:"Call",
 tagAutism:"Autism", tagAdhd:"ADHD", tagAdolescence:"Adolescence", tagLearning:"Learning difficulties", tagTeachers:"For teachers", tagCommunity:"Support in crises", tagWellbeing:"Everyday life", tagConsultation:"Consultation", allTags:"All",
 minWord:"min read", backLearn:"← All articles", moreArt:"Related articles", allArt:"All articles", artNote:"General information for awareness; it does not replace an individual assessment.",
}};

const WA_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.6 2.1 1.1 1 2 1.3 2.3 1.4.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.4z"/></svg>';
const MARK = '<span class="brand-mark" aria-hidden="true" style="display:inline-block;background:var(--teal);-webkit-mask:url(/assets/logo-mark.png?v=2) center/contain no-repeat;mask:url(/assets/logo-mark.png?v=2) center/contain no-repeat"></span>';

const NAV = [
  ["home","/","navHome"],["autism","/autism/","navAutism"],["adhd","/adhd/","navAdhd"],
  ["teen","/adolescence/","navTeen"],["learn","/learn/","navLearn"],["play","/play/","navPlay"],["book","/#book","navBook"]
];

let LANG = "ar";
const PAGE = window.PAGE || { id:"", t:{} };

function tx(key, lang = LANG){
  const p = PAGE.t || {};
  if (p[lang] && p[lang][key] !== undefined) return p[lang][key];
  if (COMMON[lang] && COMMON[lang][key] !== undefined) return COMMON[lang][key];
  if (lang === "ku") return tx(key, "ar");
  return "";
}
window.tx = tx;

function buildChrome(){
  const head = document.createElement("div");
  head.innerHTML = `
  <header class="site"><div class="wrap">
    <div class="head-row">
      <a class="brand" href="/">${MARK}<span><span class="brand-name" data-i18n="brand"></span><br><span class="brand-sub" data-i18n="brandSub"></span></span></a>
      <div class="langs" role="group" aria-label="Language">
        <button data-lang="ar" lang="ar">العربية</button><button data-lang="ku" lang="ku">کوردی</button><button data-lang="en" lang="en">English</button>
      </div>
    </div>
    <nav class="tabs" aria-label="Main">${NAV.map(([id,href,key]) => `<a href="${href}" data-i18n="${key}"${id===PAGE.id?' aria-current="page"':''}></a>`).join("")}</nav>
  </div></header>`;
  document.body.prepend(...head.childNodes);

  const foot = document.createElement("div");
  foot.innerHTML = `
  <footer class="site"><div class="wrap">
    <div class="emerg" data-i18n="emergency"></div>
    <div class="foot-grid">
      <div><b data-i18n="brand"></b><br><span data-i18n="base"></span><br><a class="tel-link" dir="ltr" href="#" data-tel>${PHONE_DISPLAY}</a></div>
      <div class="foot-links">${NAV.slice(1,6).map(([id,href,key]) => `<a href="${href}" data-i18n="${key}"></a>`).join("")}</div>
    </div>
    <p data-i18n="confid"></p><p data-i18n="disclaimer"></p>
  </div></footer>
  <a class="fab wa-link" href="/#book" aria-label="WhatsApp">${WA_ICON}<span data-i18n="fab"></span></a>`;
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
    else { a.href = "/#book"; a.removeAttribute("target"); }
    // no number yet: hide the floating button and the button inside the booking box; links elsewhere lead to the "opening soon" note
    a.hidden = !has && (a.classList.contains("fab") || !!a.closest("#book"));
  });
  document.querySelectorAll("[data-tel]").forEach(a => { a.href = has ? `tel:+${WHATSAPP_NUMBER}` : "#"; a.hidden = !has; });
  document.querySelectorAll(".wa-missing").forEach(el => el.hidden = has);
  const title = tx("pageTitle"); if (title) document.title = title;
  try { localStorage.setItem("drsally-lang", lang); } catch(e){}
  if (typeof PAGE.onLang === "function") PAGE.onLang(lang);
}
window.setLang = setLang;
window.getLang = () => LANG;

buildChrome();
document.querySelectorAll(".langs button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
let start = "ar";
try { const s = localStorage.getItem("drsally-lang"); if (s && COMMON[s]) start = s; } catch(e){}
const q = new URLSearchParams(location.search).get("lang"); if (q && COMMON[q]) start = q;
setLang(start);
