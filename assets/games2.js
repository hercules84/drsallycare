/* Extra calm games: sorting, patterns, odd one out, "how do they feel?" and a thinking-skills challenge.
   No timers, no sound, wrong answers just fade, nothing is saved. Loaded on /play/ before site.js.
   The challenge is a friendly puzzle set, NOT an IQ test: it never produces an IQ number. */
(function(){
const TEXT = {
ar:{
 tagThink:"تفكير ومنطق", tagSocial:"مهارات اجتماعية", tagNotIQ:"ليس اختبار ذكاء",
 age5:"من عمر 5", age6:"من عمر 6", age4b:"من عمر 4",
 qProg:"السؤال {n} من {m}", qDone:"أحسنت! أكملت كل الجولات 🎉", next:"التالي",
 patQ:"ما الذي يأتي بعد ذلك؟", oddQ:"أي واحد مختلف؟", countQ:"كم عددها؟", analogyQ:"أكمل الزوج", sortQ:"أين نضع هذا؟", scQ:"كيف يشعر الطفل في هذا الموقف؟",
 whySort:"للأهل: الفرز والتصنيف نشاط مريح لأن له قاعدة واضحة وإجابة واضحة، ويدرّب على التنظيم والتفكير المنطقي. بعد كل إجابة اسألوا: «لماذا هذا هنا؟».",
 whyPattern:"للأهل: كثير من الأطفال يحبون الأنماط والتسلسل، وهذه اللعبة تبني على هذه القوة وتنمّي التفكير المنطقي. ابدؤوا بالمستوى السهل.",
 whyOdd:"للأهل: تدرّب الملاحظة والتصنيف. اسألوا بعد كل إجابة: «لماذا هذا مختلف؟» ليتعلم الطفل شرح تفكيره بكلماته.",
 whySituations:"للأهل: ربط الموقف بالشعور مهارة اجتماعية أساسية. بعد كل إجابة اسألوا: «ماذا يمكن أن نفعل لنساعده؟» أو «متى شعرتَ هكذا؟».",
 whyChallenge:"للأهل: ألغاز تفكير ممتعة تُظهر كيف يلاحظ طفلكم الأنماط والمنطق في هذه اللحظة. هي ليست اختبار ذكاء ولا تشخيصًا، ولا تُحفظ نتيجتها.",
 lvlLabel:"العمر",
 cats:{animals:"حيوانات",food:"طعام",clothes:"ملابس",toys:"ألعاب",vehicles:"مركبات",sea:"البحر",fruit:"فواكه",veg:"خضار"},
 sc:{s1:"سقطت الآيس كريم على الأرض.",s2:"أهداه أحدهم هدية في عيد ميلاده.",s3:"سمع رعدًا قويًا فجأة.",s4:"هدم أحدهم برجه عمدًا.",s5:"فتح الصندوق فوجد جروًا صغيرًا.",s6:"يجلس قرب البحر ويسمع الأمواج.",s7:"دعاه صديقه ليلعبا معًا.",s8:"فقد لعبته المفضلة."},
 chTitle:"تحدي ألغاز التفكير", chIntro:"٨ ألغاز قصيرة بلا وقت وبلا ضغط. اختاروا العمر الأقرب:",
 chStart:"ابدأ التحدي", chResult:"حللتَ {n} من {m} لغزًا",
 chMsgHi:"رائع! لديك عين ممتازة للأنماط والمنطق 🌟", chMsgMid:"جهد جميل! مع التدريب تصبح الألغاز أسهل 💚", chMsgLo:"الألغاز قد تكون صعبة أحيانًا. جرّبوا المستوى الأقل أو العبوا معًا وتحدثوا عن كل لغز 🤝",
 iqNote:"هذه لعبة تفكير للمتعة وليست اختبار ذكاء (IQ)، ولا تعطي رقمًا ولا تشخيصًا. اختبارات الذكاء الحقيقية مقنّنة ويجريها مختص مدرَّب. إذا كانت لديكم أسئلة عن نمو طفلكم أو تعلّمه، يمكننا التحدث.",
 btnAssess:"استفسار عن تقييم لقدرات الطفل", showAnswer:"الإجابة",
 waMsgAssess:"مرحبًا دكتورة سالي، أود الاستفسار عن تقييم نمو وقدرات طفلي."
},
ku:{
 tagThink:"هزرکرن و لۆژیک", tagSocial:"شارەزاییێن جڤاکی", tagNotIQ:"تێستا زیرەکیێ نینە",
 age5:"ژ 5 سالیێ", age6:"ژ 6 سالیێ", age4b:"ژ 4 سالیێ",
 qProg:"پرسیارا {n} ژ {m}", qDone:"دەستخۆش! تە هەمی خول تەمام کرن 🎉", next:"یێ دیتر",
 patQ:"پشتی ڤێ چ دئێت؟", oddQ:"کیژ ئێک جودایە؟", countQ:"چەند نە؟", analogyQ:"جووتێ تەمام بکە", sortQ:"ئەڤە دێ کیژ جهی دا چێ بیت؟", scQ:"زارۆک د ڤی ڕەوشی دا چەوا هەست دکەت؟",
 whySort:"بۆ دایک و بابان: ڕیزکرن چالاکیەکا ئارامە چونکی یاسایەکا ڕوون و بەرسڤەکا ڕوون هەیە، و ڕێکخستن و هزرکرنا لۆژیکی ڕادهێنیت. پشتی هەر بەرسڤەکێ بپرسن: «بۆچی ئەڤە ل ڤێرێیە؟».",
 whyPattern:"بۆ دایک و بابان: گەلەک زارۆک حەز ژ پاتێرن و ڕیزبوونێ دکەن، و ئەڤ یاری ل سەر ڤێ بهێزیێ ڕادوەستیت. ب ئاستێ ساناهی دەست پێ بکەن.",
 whyOdd:"بۆ دایک و بابان: تێبینیکرن و پۆلینکرنێ ڕادهێنیت. پشتی هەر بەرسڤەکێ بپرسن: «بۆچی ئەڤە جودایە؟».",
 whySituations:"بۆ دایک و بابان: گرێدانا ڕەوشێ ب هەستی شیانەکا جڤاکی یا بنەڕەتی یە. پشتی هەر بەرسڤەکێ بپرسن: «ئەم چ بکەین دا هاریکاریا وی بکەین؟».",
 whyChallenge:"بۆ دایک و بابان: پەزلێن هزرکرنێ یێن خۆش، نیشان ددەن کا زارۆکێ هەوە چەوا ل ڤی دەمی پاتێر و لۆژیکێ تێبینی دکەت. ئەڤە تێستا زیرەکیێ نینە و تشخیس نینە، و ئەنجام ناهێتە پاراستن.",
 lvlLabel:"تەمەن",
 cats:{animals:"ئاژەل",food:"خوارن",clothes:"جلک",toys:"یاری",vehicles:"ئوتومبێل و گەهشتن",sea:"دەریا",fruit:"میوە",veg:"سەوزە"},
 sc:{s1:"بەستەنیا وی کەفتە ڕۆیێ.",s2:"کەسەکی ل ڕۆژا لەدایکبوونا وی دیاری دا.",s3:"ب کتوپڕی دەنگێ هەورەتریشقێ یێ بەهێز بیست.",s4:"کەسەکی ب مەبەست بورجا وی ڕووخاند.",s5:"سندوق ڤەکر و تولەیەکێ بچووک تێدا دیت.",s6:"ل نک دەریایێ ڕونشتیە و گوهێ خۆ ددەتە شەپۆلان.",s7:"هەڤالەکی وی بانگ کر دا پێکڤە یاری بکەن.",s8:"یارییا وی یا دڵخۆش ژ دەست چوو."},
 chTitle:"بەرەنگاربوونا پەزلێن هزرکرنێ", chIntro:"8 پەزلێن کورت بێ دەم و بێ فشار. تەمەنێ نێزیک هەلبژێرن:",
 chStart:"دەست پێ بکە", chResult:"تە {n} ژ {m} پەزل چارەسەر کرن",
 chMsgHi:"نایابە! چاڤەکێ تەمام بۆ پاتێر و لۆژیکێ هەیە 🌟", chMsgMid:"هەوڵەکا جوان! ب ڕاهێنانێ پەزل ساناهیتر دبن 💚", chMsgLo:"پەزل هندەک جاران زەحمەتن. ئاستێ کێمتر تاقی بکەن یان پێکڤە یاری بکەن و دەربارەی هەر پەزلەکێ باخڤن 🤝",
 iqNote:"ئەڤە یاریەکا هزرکرنێ یە بۆ دلخۆشیێ و تێستا زیرەکیێ (IQ) نینە، ژمارەک و تشخیس ناکەت. تێستێن زیرەکیێ یێن ڕاستەقینە ستانداردن و پسپۆڕەکێ ڕاهێنایی ئەنجام ددەت. ئەگەر پسیارێن هەوە دەربارەی گەشەکرن یان فێربوونا زارۆکێ هەوە هەبن، ئەم دشێین باخڤین.",
 btnAssess:"پسیار دەربارەی هەلسەنگاندنا شیانێن زارۆکی", showAnswer:"بەرسڤ",
 waMsgAssess:"سلاڤ دکتۆرە سالی، دخوازم پسیارێ بکەم دەربارەی هەلسەنگاندنا گەشە و شیانێن زارۆکێ من."
},
en:{
 tagThink:"Thinking & logic", tagSocial:"Social skills", tagNotIQ:"Not an IQ test",
 age5:"Age 5+", age6:"Age 6+", age4b:"Age 4+",
 qProg:"Question {n} of {m}", qDone:"Well done! You finished every round 🎉", next:"Next",
 patQ:"What comes next?", oddQ:"Which one is different?", countQ:"How many are there?", analogyQ:"Complete the pair", sortQ:"Where does this go?", scQ:"How does the child feel?",
 whySort:"For parents: sorting is a restful activity because it has a clear rule and a clear answer, and it builds organisation and logical thinking. After each answer ask: \"Why does this go here?\"",
 whyPattern:"For parents: many children enjoy patterns and sequences, and this game builds on that strength while growing logical thinking. Start with the easy level.",
 whyOdd:"For parents: trains observation and categorising. After each answer ask: \"Why is this one different?\" so your child practises explaining their thinking.",
 whySituations:"For parents: linking a situation to a feeling is a core social skill. After each answer ask: \"What could we do to help?\" or \"When did you feel like this?\"",
 whyChallenge:"For parents: fun thinking puzzles that show how your child spots patterns and logic right now. This is not an IQ test or a diagnosis, and no result is saved.",
 lvlLabel:"Age",
 cats:{animals:"Animals",food:"Food",clothes:"Clothes",toys:"Toys",vehicles:"Vehicles",sea:"Sea life",fruit:"Fruit",veg:"Vegetables"},
 sc:{s1:"The ice cream fell on the ground.",s2:"Someone gave a gift on their birthday.",s3:"A loud thunderclap came suddenly.",s4:"Someone knocked down their tower on purpose.",s5:"They opened the box and found a little puppy.",s6:"Sitting by the sea, listening to the waves.",s7:"A friend invited them to play together.",s8:"They lost their favourite toy."},
 chTitle:"Thinking puzzles challenge", chIntro:"8 short puzzles, no timer and no pressure. Pick the closest age:",
 chStart:"Start the challenge", chResult:"You solved {n} of {m} puzzles",
 chMsgHi:"Great! A sharp eye for patterns and logic 🌟", chMsgMid:"Lovely effort! Puzzles get easier with practice 💚", chMsgLo:"Puzzles can be tricky sometimes. Try a younger level, or play together and talk about each puzzle 🤝",
 iqNote:"This is a fun thinking game, not an IQ test, and it gives no number and no diagnosis. Real IQ tests are standardised and given by a trained specialist. If you have questions about your child's development or learning, we're happy to talk.",
 btnAssess:"Ask about a developmental assessment", showAnswer:"Answer",
 waMsgAssess:"Hello Dr. Sally, I'd like to ask about a developmental and abilities assessment for my child."
}};
Object.keys(TEXT).forEach(l => { window.PAGE.t[l] = Object.assign(window.PAGE.t[l] || {}, TEXT[l]); });

const L = k => window.tx(k);
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = (a, n = 1) => n === 1 ? a[Math.floor(Math.random() * a.length)] : shuffle(a).slice(0, n);
const rint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));

/* ---------- content pools (language-neutral emoji) ---------- */
const CATS = {
  animals:["🐱","🐶","🐰","🐢","🦁","🐘","🐴","🐑"], food:["🍎","🍌","🥕","🍞","🥛","🍇","🧀","🍉"],
  clothes:["👕","👖","🧦","🧢","🧥","👗"], toys:["🧸","⚽","🧩","🪁","🎲","🚂"],
  vehicles:["🚗","🚌","✈️","🚲","🚂","🚀"], sea:["🐟","🐙","🦀","🐬","🐳","🦈"],
  fruit:["🍎","🍌","🍇","🍓","🍉","🍊"], veg:["🥕","🥦","🌽","🍆","🥒","🧅"],
  tools:["🔨","🪛","🔧","🪚"], music:["🎸","🥁","🎹","🎺"]
};
const CAT_ICON = { animals:"🐾", food:"🍽️", clothes:"👕", toys:"🧸", vehicles:"🚗", sea:"🌊", fruit:"🍓", veg:"🥕" };
const SYM = ["🔴","🔵","🟡","🟢","🟣","🟠"];
const FACES = { happy:"😊", sad:"😢", angry:"😠", scared:"😨", surprised:"😲", calm:"😌" };
const SC = [["s1","🍦","sad"],["s2","🎁","happy"],["s3","⛈️","scared"],["s4","🧱","angry"],["s5","📦","surprised"],["s6","🌊","calm"],["s7","⚽","happy"],["s8","🧸","sad"]];
const ANALOGIES = [["🧦","🦶","🧤","✋",["🦵","👀"]],["👁️","👓","👂","🎧",["🧢","🥾"]],["🚗","🛣️","🚂","🛤️",["🌊","✈️"]],["🐦","🪺","🐝","🍯",["🌳","🐟"]],["🦷","🪥","💇","🪮",["🔨","🧴"]]];

/* ---------- round generators ---------- */
const mk = (promptKey, visual, choices, extra) => Object.assign({ promptKey, visual, choices: shuffle(choices) }, extra || {});
const opt = (html, ok, aria) => ({ html, ok: !!ok, aria: aria || "" });

function genPatternEasy(){
  const [x, y, z] = pick(SYM, 3), unit = pick([[x,y],[x,x,y],[x,y,y]]);
  const seq = []; for (let i = 0; i < 7; i++) seq.push(unit[i % unit.length]);
  const ans = seq[6], shown = seq.slice(0, 6);
  const wrong = shuffle([x, y, z].filter(s => s !== ans)).slice(0, 2);
  return mk("patQ", `<div class="seq">${shown.map(s => `<span>${s}</span>`).join("")}<span class="q">?</span></div>`, [opt(ans, true), ...wrong.map(w => opt(w, false))]);
}
function genPatternHard(){
  if (Math.random() < 0.5){
    const [a, b, c, d] = pick(SYM, 4), unit = pick([[a,b,c],[a,a,b,b],[a,b,a,c]]);
    const seq = []; for (let i = 0; i < unit.length * 2 + 1; i++) seq.push(unit[i % unit.length]);
    const ans = seq[seq.length - 1], shown = seq.slice(0, -1);
    const wrong = shuffle([a, b, c, d].filter(s => s !== ans)).slice(0, 2);
    return mk("patQ", `<div class="seq">${shown.map(s => `<span>${s}</span>`).join("")}<span class="q">?</span></div>`, [opt(ans, true), ...wrong.map(w => opt(w, false))]);
  }
  return genNumberSeq(1);
}
function numChoices(ans, step){
  const set = new Set([ans]); const pool = shuffle([ans + 1, ans - 1, ans + step, ans - step, ans + 2, ans - 2].filter(n => n > 0 && n !== ans));
  for (const n of pool){ if (set.size >= 3) break; set.add(n); }
  return [...set].map(n => opt(String(n), n === ans));
}
function genNumberSeq(level){
  let seq, ans, step = 2;
  if (level === 1){ const s = rint(1, 8), d = rint(1, 4); seq = [0,1,2,3].map(i => s + i * d); ans = s + 4 * d; step = d; }
  else {
    const t = rint(0, 4);
    if (t === 0){ const s = rint(1, 3); seq = [s, s*2, s*4, s*8]; ans = s * 16; step = s * 4; }
    else if (t === 1){ seq = [1, 4, 9, 16]; ans = 25; step = 4; }
    else if (t === 2){ const s = rint(2, 9), d = rint(3, 7); seq = [0,1,2,3].map(i => s + i * d); ans = s + 4 * d; step = d; }
    else if (t === 3){ seq = [2, 3, 5, 8, 12]; ans = 17; step = 3; }
    else { seq = [20, 18, 15, 11]; ans = 6; step = 3; }
  }
  return mk("patQ", `<div class="seq nums">${seq.map(n => `<span>${n}</span>`).join("")}<span class="q">?</span></div>`, numChoices(ans, step));
}
function genOdd(hard){
  let a, b;
  if (hard) [a, b] = pick([["animals","sea"],["fruit","veg"],["sea","animals"],["veg","fruit"]]);
  else [a, b] = pick([["animals","food"],["clothes","vehicles"],["fruit","toys"],["vehicles","animals"],["food","clothes"],["toys","sea"]]);
  const three = pick(CATS[a], 3), one = pick(CATS[b]);
  return mk("oddQ", "", [...three.map(e => opt(e, false)), opt(one, true)], { grid4:true });
}
function genOddNumbers(){
  const t = Math.random() < 0.5;
  let three, one;
  if (t){ three = shuffle([2,4,6,8,10,12,14,16]).slice(0,3); one = pick([3,5,7,9,11,13]); }
  else { three = shuffle([5,10,15,20,25,30,35]).slice(0,3); one = pick([12,18,23,27,31]); }
  return mk("oddQ", "", [...three.map(n => opt(String(n), false)), opt(String(one), true)], { grid4:true });
}
function genCount(){
  const e = pick(["🍎","⭐","🐟","🎈","🐱","🚗"]), n = rint(1, 6);
  const opts = new Set([n]); while (opts.size < 3) opts.add(rint(1, 7));
  return mk("countQ", `<div class="seq">${Array(n).fill(`<span>${e}</span>`).join("")}</div>`, [...opts].map(v => opt(String(v), v === n)));
}
function genAnalogy(){
  const [a, b, c, d, wrongs] = pick(ANALOGIES);
  return mk("analogyQ", `<div class="seq"><span>${a}</span><span class="op">:</span><span>${b}</span><span class="op">=</span><span>${c}</span><span class="op">:</span><span class="q">?</span></div>`, [opt(d, true), ...wrongs.map(w => opt(w, false))]);
}

/* ---------- generic round engine ---------- */
function Quiz(stageId, o){
  const el = document.getElementById(stageId);
  let rounds = [], i = 0, stars = 0, cur = null, answered = false, tok = 0, level = o.level0 || 0, finished = false;
  const T = (fn) => { const t = tok; setTimeout(() => { if (t === tok) fn(); }, o.delay || 1200); };
  function plan(){ return o.plan ? o.plan(level) : []; }
  function start(){ tok++; rounds = plan(); i = 0; stars = 0; finished = false; o.onStart && o.onStart(level); next(); }
  function next(){ if (i >= rounds.length){ finished = true; draw(); return; } cur = rounds[i++]; answered = false; draw(); }
  function choose(c, btn){
    if (answered || finished) return;
    if (o.retry !== false){
      if (c.ok){
        answered = true; btn.classList.add("right"); el.querySelectorAll(".choice").forEach(x => x.disabled = true);
        stars++; const r = L("emoRight"); fb(r[Math.floor(Math.random() * r.length)]); starsDraw(); T(next);
      } else { btn.classList.add("wrong"); btn.disabled = true; fb(L("emoTry")); }
    } else {
      answered = true; if (c.ok) stars++;
      el.querySelectorAll(".choice").forEach(x => { x.disabled = true; if (x.dataset.ok === "1") x.classList.add("right"); });
      if (!c.ok) btn.classList.add("wrong");
      T(next);
    }
  }
  const fb = t => { const f = el.querySelector(".feedback"); if (f) f.textContent = t; };
  const starsDraw = () => { const s = el.querySelector(".stars"); if (s) s.textContent = "⭐".repeat(stars); };
  function levelSeg(){
    if (!o.levels) return "";
    return `<div class="game-controls" style="margin:0 0 14px"><div class="seg" role="group">${o.levels.map((lv, k) => `<button type="button" data-lv="${k}" aria-pressed="${k === level}">${typeof lv === "string" ? L(lv) : lv.label}</button>`).join("")}</div></div>`;
  }
  function draw(){
    if (o.intro && !rounds.length){ drawIntro(); return; }
    if (finished){
      el.innerHTML = levelSeg() + (o.done ? o.done(stars, rounds.length) : `<div class="prompt">${L("qDone")}</div><div class="stars">${"⭐".repeat(stars)}</div>`) +
        `<div class="game-controls"><button class="btn small" type="button" data-act="restart">${L("restart")}</button></div>`;
      wire(); return;
    }
    const lab = c => typeof c.html === "function" ? c.html() : c.html;
    const prog = o.progress ? `<div class="qprog">${L("qProg").replace("{n}", i).replace("{m}", rounds.length)}</div>` : "";
    const promptHtml = cur.promptKey === "scQ" && cur.scene ? `<div class="scene"><span class="se" aria-hidden="true">${cur.scene[0]}</span><span>${L("sc")[cur.scene[1]]}</span></div><div class="prompt">${L("scQ")}</div>` : `<div class="prompt">${L(cur.promptKey)}</div>`;
    el.innerHTML = levelSeg() + prog + promptHtml + (cur.visual ? `<div class="visual">${typeof cur.visual === "function" ? cur.visual() : cur.visual}</div>` : "") +
      `<div class="choices${cur.grid4 ? " g4" : ""}">${cur.choices.map((c, k) => `<button type="button" class="choice${c.wide ? " wide" : ""}" data-k="${k}" data-ok="${c.ok ? 1 : 0}"${c.aria ? ` aria-label="${typeof c.aria === "function" ? c.aria() : c.aria}"` : ""}>${lab(c)}</button>`).join("")}</div>` +
      `<div class="feedback" aria-live="polite"></div><div class="stars" aria-label="stars">${"⭐".repeat(stars)}</div>` +
      `<div class="game-controls"><button class="btn small" type="button" data-act="restart">${L("restart")}</button></div>`;
    wire();
  }
  function drawIntro(){
    el.innerHTML = levelSeg() + `<p style="margin:0 0 6px">${L("chIntro")}</p><div class="game-controls"><button class="btn primary" type="button" data-act="go">${L("chStart")}</button></div>`;
    wire();
  }
  function wire(){
    if (o.afterDraw) o.afterDraw();
    el.querySelectorAll(".choice").forEach(b => b.onclick = () => choose(cur.choices[+b.dataset.k], b));
    el.querySelectorAll("[data-act=restart]").forEach(b => b.onclick = () => { if (o.intro){ tok++; rounds = []; finished = false; draw(); } else start(); });
    el.querySelectorAll("[data-act=go]").forEach(b => b.onclick = start);
    el.querySelectorAll("[data-lv]").forEach(b => b.onclick = () => { level = +b.dataset.lv; if (o.intro){ tok++; rounds = []; finished = false; draw(); } else start(); });
  }
  return { start: o.intro ? () => { rounds = []; draw(); } : start, relabel: () => { if (rounds.length || o.intro) draw(); } };
}

/* ---------- the five games ---------- */
let sorting, pattern, odd, situations, challenge;
let sortPair = ["animals","food"];
function init(){
  /* 1. sorting: 8 items, two baskets */
  sorting = Quiz("sort-stage", {
    progress:false,
    onStart(){ sortPair = pick([["animals","food"],["clothes","toys"],["vehicles","animals"],["fruit","veg"],["food","clothes"]]); },
    plan(){
      const pair = sortPair;
      return shuffle([...pick(CATS[pair[0]], 4).map(e => [e, 0]), ...pick(CATS[pair[1]], 4).map(e => [e, 1])]).map(([e, side]) => {
        const r = mk("sortQ", `<div class="big-item">${e}</div>`, [0, 1].map(s => ({ html: () => `<span class="ci" aria-hidden="true">${CAT_ICON[sortPair[s]]}</span><span class="cl">${L("cats")[sortPair[s]]}</span>`, ok: s === side, wide:true })));
        return r;
      });
    }
  });
  /* 2. patterns */
  pattern = Quiz("pat-stage", { progress:true, levels:["easy","harder"], plan: lv => Array.from({ length:6 }, () => lv ? genPatternHard() : genPatternEasy()) });

  /* 3. odd one out */
  odd = Quiz("odd-stage", { progress:true, levels:["easy","harder"], plan: lv => Array.from({ length:6 }, () => genOdd(!!lv)) });

  /* 4. how do they feel? */
  situations = Quiz("sit-stage", {
    progress:true,
    plan(){
      return shuffle(SC).slice(0, 6).map(([k, e, f]) => {
        const others = shuffle(Object.keys(FACES).filter(x => x !== f)).slice(0, 2);
        const r = mk("scQ", "", [f, ...others].map(x => ({ html: () => `<span class="fe" aria-hidden="true">${FACES[x]}</span><span class="cl">${L("feelings")[x]}</span>`, ok: x === f, wide:true })));
        r.scene = [e, k]; return r;
      });
    }
  });

  /* 5. thinking challenge: 8 puzzles, one try each, no number result */
  const PLANS = [
    [genOdd.bind(null,false), genPatternEasy, genCount, genPatternEasy, genOdd.bind(null,false), genCount, genPatternEasy, genOdd.bind(null,false)],
    [genPatternHard, genOdd.bind(null,true), genAnalogy, () => genNumberSeq(1), genPatternHard, genOdd.bind(null,true), genAnalogy, () => genNumberSeq(1)],
    [() => genNumberSeq(2), genAnalogy, genOddNumbers, () => genNumberSeq(2), genAnalogy, genOddNumbers, () => genNumberSeq(2), genPatternHard]
  ];
  challenge = Quiz("ch-stage", {
    progress:true, retry:false, intro:true, delay:1500, level0:1, afterDraw: () => setTimeout(fixWa, 0),
    levels:[{label:"4–6"},{label:"7–10"},{label:"11+"}],
    plan: lv => PLANS[lv].map(g => g()),
    done(n, m){
      const msg = n >= 6 ? "chMsgHi" : n >= 3 ? "chMsgMid" : "chMsgLo";
      return `<div class="prompt">${L("chResult").replace("{n}", n).replace("{m}", m)}</div><div class="stars">${"⭐".repeat(n)}</div><p class="feedback">${L(msg)}</p>
        <p class="iq-note">${L("iqNote")}</p><div class="game-controls"><a class="btn small wa-link" data-wamsg="waMsgAssess" href="${LOC('/#book')}"><span>${L("btnAssess")}</span></a></div>`;
    }
  });

  sorting.start(); pattern.start(); odd.start(); situations.start(); challenge.start();
}
function fixWa(){
  const fab = document.querySelector(".fab"); if (!fab) return;
  const base = fab.href.split("?")[0];
  document.querySelectorAll("#ch-stage .wa-link").forEach(a => { a.href = base + "?text=" + encodeURIComponent(L(a.dataset.wamsg)); a.target = "_blank"; a.rel = "noopener"; });
}
function relabel(){ [sorting, pattern, odd, situations, challenge].forEach(g => g && g.relabel()); fixWa(); }
window.Games2 = { init, relabel };
})();
