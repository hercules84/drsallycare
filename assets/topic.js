/* Builds a topic page (autism / adhd / adolescence) from window.PAGE before site.js fills in the text.
   PAGE.topic = { color:"teal|coral|lav", icon:"<svg…>", games:["emotions","memory",…] }
   Text keys used from PAGE.t: title, lead, myth, fact, fam, tea, res. */
(function(){
  const P = window.PAGE, T = P.topic;
  const GAMES = { emotions:"😊", memory:"🃏", breath:"🌬️", schedule:"🗓️", thermo:"🌡️", sorting:"🧺", situations:"💭", pattern:"🔷", oddone:"🔍", challenge:"🧩" };
  const GKEY = { emotions:"gEmotions", memory:"gMemory", breath:"gBreath", schedule:"gSchedule", thermo:"gThermo", sorting:"gSort", situations:"gSituations", pattern:"gPattern", oddone:"gOdd", challenge:"gChallenge" };
  const main = document.getElementById("topic");
  main.style.setProperty("--c", `var(--${T.color})`);
  main.style.setProperty("--cs", `var(--${T.color}-soft)`);
  main.innerHTML = `
  <section class="topic-hero">
    <div class="big-ic">${T.icon}</div>
    <div><h1 data-i18n="title"></h1><p class="lead" data-i18n="lead"></p></div>
  </section>
  <div class="myth">
    <div class="m"><b data-i18n="mythLabel"></b><span data-i18n="myth"></span></div>
    <div class="f"><b data-i18n="factLabel"></b><span data-i18n="fact"></span></div>
  </div>
  <div class="aud-switch" role="tablist">
    <button role="tab" data-aud="fam" aria-selected="true"><span class="ae" aria-hidden="true">👨‍👩‍👧</span><span data-i18n="audFam"></span></button>
    <button role="tab" data-aud="tea" aria-selected="false"><span class="ae" aria-hidden="true">🏫</span><span data-i18n="audTea"></span></button>
    <button role="tab" data-aud="res" aria-selected="false"><span class="ae" aria-hidden="true">🔬</span><span data-i18n="audRes"></span></button>
  </div>
  ${["fam","tea","res"].map((a,i) => `<div class="aud-panel" id="p-${a}" role="tabpanel"${i?" hidden":""}><div class="card"><div class="ku-note lang-note" hidden></div><div data-i18n="${a}"></div></div></div>`).join("")}
  <section style="padding-bottom:0">
    <h2 data-i18n="relTitle"></h2>
    <div class="related">${T.games.map(g => `<a href="/play/#${g}"><span class="e" aria-hidden="true">${GAMES[g]}</span><span><b data-i18n="${GKEY[g]}"></b><span data-i18n="${GKEY[g]}D"></span></span></a>`).join("")}</div>
  </section>
  <section class="cta">
    <h2 data-i18n="ctaTitle"></h2><p class="lead" data-i18n="ctaLead"></p>
    <div class="btns"><a class="btn primary wa-link" href="/#book"><span data-i18n="btnBook"></span></a></div>
  </section>`;

  function show(a){
    document.querySelectorAll(".aud-switch button").forEach(b => b.setAttribute("aria-selected", String(b.dataset.aud === a)));
    document.querySelectorAll(".aud-panel").forEach(p => p.hidden = p.id !== "p-" + a);
    if (location.hash !== "#" + a) history.replaceState(null, "", "#" + a);
  }
  document.querySelectorAll(".aud-switch button").forEach(b => b.addEventListener("click", () => {
    show(b.dataset.aud);
    const sw = document.querySelector(".aud-switch");
    if (sw.getBoundingClientRect().top < 0 || window.scrollY > sw.offsetTop) sw.scrollIntoView({block:"start"});
  }));
  const h = location.hash.slice(1); if (["fam","tea","res"].includes(h)) show(h);
})();
