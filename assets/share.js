/* Visitor stories: the share form (posts to /api/stories) and the list of approved stories.
   Needs site.js (window.tx). Text is always inserted with textContent, never as HTML. */
(function(){
  const AGE_KEY = { under3:"shA1", "3-6":"shA2", "7-12":"shA3", "13-18":"shA4", over18:"shA5", private:"shA6" };

  const form = document.getElementById("share-form");
  if (form){
    const send = document.getElementById("share-send"), err = document.getElementById("share-err"), done = document.getElementById("share-ok");
    const anon = document.getElementById("sh-anon");
    const show = (el, msg) => { el.hidden = !msg; el.textContent = msg || ""; };
    function syncAnon(){ form.name.disabled = anon.checked; form.age.disabled = anon.checked; if (anon.checked){ form.name.value = ""; form.age.selectedIndex = 0; } }
    anon.addEventListener("change", syncAnon);

    send.addEventListener("click", async function(){
      const text = form.text.value.trim();
      show(done, "");
      if (text.length < 20 || !form.consent.checked){ show(err, window.tx("shErr")); return; }
      show(err, "");
      send.disabled = true;
      const payload = {
        text: text,
        anon: anon.checked,
        name: anon.checked ? "" : form.name.value.trim(),
        age: anon.checked ? "" : form.age.value,
        lang: document.documentElement.lang || "ar",
        consent: true,
        website: form.website.value, // honeypot, must stay empty
      };
      try {
        const r = await fetch("/api/stories", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
        if (r.status === 201){ form.reset(); syncAnon(); show(done, window.tx("shOk")); }
        else if (r.status === 429){ show(err, window.tx("shLimit")); }
        else { show(err, window.tx("shFail")); }
      } catch (e) {
        show(err, window.tx("shFail"));
      } finally {
        send.disabled = false;
      }
    });
  }

  const list = document.getElementById("stories-list");
  if (list){
    const note = document.getElementById("stories-note");
    const li = (text) => { const p = document.createElement("p"); p.className = "small-note"; p.textContent = text; return p; };
    fetch("/api/stories").then(r => { if (!r.ok) throw new Error(); return r.json(); }).then(items => {
      list.replaceChildren();
      if (!items.length){ list.append(li(window.tx("sEmpty"))); return; }
      items.forEach(s => {
        const card = document.createElement("article");
        card.className = "card story";
        const meta = document.createElement("p");
        meta.className = "story-meta";
        const who = document.createElement("span");
        who.textContent = s.name ? s.name : window.tx("sAnonLabel");
        meta.append(who);
        if (s.age && AGE_KEY[s.age]){
          const age = document.createElement("span");
          age.textContent = " · " + window.tx("sAgeLabel") + " " + window.tx(AGE_KEY[s.age]);
          meta.append(age);
        }
        const body = document.createElement("p");
        body.className = "story-body";
        body.textContent = s.body;
        card.append(meta, body);
        list.append(card);
      });
    }).catch(() => { list.replaceChildren(li(window.tx("sLoadErr"))); });
    if (note) note.textContent = "";
  }
})();
