function setLanguage(lang) {
  const t = translations[lang];
  document.getElementById("title").innerText = t.title;
  document.getElementById("greeting").innerText = t.greeting;
  document.getElementById("q1").innerText = t.q1;
  document.getElementById("q2").innerText = t.q2;
  document.getElementById("q3").innerText = t.q3;
  localStorage.setItem("lang", lang);
}

window.onload = () => {
  const defaultLang = localStorage.getItem("lang") || "en";
  setLanguage(defaultLang);
};
