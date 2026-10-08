/* Renders article cards. Needs window.ARTICLES (articles-data.js) and window.tx / window.getLang (site.js). */
(function(){
  const TAG = {"autism":"tagAutism","adhd":"tagAdhd","adolescence":"tagAdolescence","learning":"tagLearning","teachers":"tagTeachers","community":"tagCommunity","wellbeing":"tagWellbeing","consultation":"tagConsultation"};
  window.artCard = function(a){
    const L = window.getLang(), d = a[L] || a.ar;
    const kuAr = L === "ku" ? " lang=\"ar\"" : "";
    return '<a class="art-card" href="/learn/' + a.slug + '/" data-topic="' + a.topic + '"><span class="art-tag">' + window.tx(TAG[a.topic]) +
      '</span><h3' + kuAr + '>' + d.title + '</h3><p' + kuAr + '>' + d.sum + '</p><span class="art-min">' + a.min + ' ' + window.tx("minWord") + '</span></a>';
  };
  window.artTag = t => window.tx(TAG[t]);
})();
