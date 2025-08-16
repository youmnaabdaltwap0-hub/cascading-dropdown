/* ========== i18n ========== */
const STR = {
  ar: {
    appTitle: "WebLearn — منصة تعليم الواجهة الأمامية",
    tagline: "تعلم HTML / CSS / JS بمستويات — شرح عربي/إنجليزي، أمثلة حيّة، وفيديوهات، واختبارات لكل مستوى",
    tracks: "المسارات",
    levels: "المستويات",
    lessons: "الدروس",
    quiz: "الاختبار",
    startQuiz: "ابدأ الاختبار",
    yourScore: "نتيجتك",
    of: "من",
    back: "رجوع",
    viewLessons: "عرض الدروس",
    resources: "مصادر إضافية",
    language: "اللغة",
    arabic: "العربية",
    english: "English",
    watch: "مشاهدة الفيديو",
    codeSample: "مثال كود",
    selectTrack: "اختاري مسارًا للبدء",
    htmlDesc: "",
    cssDesc: "",
    jsDesc: "",
    level: "المستوى",
    startExam: "ابدأ الامتحان",
    passMsg: "ممتاز! تجاوزتِ هذا المستوى.",
    failMsg: "جربي مرة أخرى—راجعي الدروس ثم أعيدي المحاولة."
  },
  en: {
    appTitle: "WebLearn — Frontend Learning Platform",
    tagline: "Learn HTML / CSS / JS in levels — Arabic/English explanations, live examples, videos, and quizzes per level",
    tracks: "Tracks",
    levels: "Levels",
    lessons: "Lessons",
    quiz: "Quiz",
    startQuiz: "Start Quiz",
    yourScore: "Your score",
    of: "of",
    back: "Back",
    viewLessons: "View lessons",
    resources: "Extra Resources",
    language: "Language",
    arabic: "Arabic",
    english: "English",
    watch: "Watch video",
    codeSample: "Code sample",
    selectTrack: "Pick a track to start",
    htmlDesc: "Structure of web pages & semantic elements.",
    cssDesc: "Styling interfaces with craft and motion.",
    jsDesc: "Interaction logic and web programming.",
    level: "Level",
    startExam: "Start exam",
    passMsg: "Awesome! You passed this level.",
    failMsg: "Try again—review the lessons then retry."
  }
};

/* ========== Content model ========== */
const CONTENT = {
  HTML: {
    descKey: "htmlDesc",
    levels: [
      {
        id: 1,
        title: { ar: "الأساسيات: عناصر وهيكل الصفحة", en: "Basics: elements & structure" },
        lessons: [
          {
            id: "h1",
            title: { ar: "هيكل صفحة HTML", en: "HTML page structure" },
            en: "The minimal HTML document: doctype, html, head, body.",
            ar: "أبسط مستند HTML: الدوكتايب، html، head، body.",
            code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Minimal</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>`,
            youtube: "https://www.youtube.com/embed/kUMe1FH4CHE"
          },
          {
            id: "h2",
            title: { ar: "العناصر الدلالية", en: "Semantic elements" },
            en: "Use header, nav, main, section, article, aside, footer for meaning.",
            ar: "استخدمي عناصر دلالية مثل header وnav وmain وsection لتوضيح المعنى.",
            code: `<main>
  <article>
    <h2>Post</h2>
    <p>Semantic HTML improves accessibility.</p>
  </article>
</main>`,
            youtube: "https://www.youtube.com/embed/srvUrASNj0s"
          }
        ],
        quiz: [
          {
            q: {
              ar: "أين نضع عنوان الصفحة الذي يظهر في تبويب المتصفح؟",
              en: "Where do we place the page title shown in the browser tab?"
            },
            options: [
              { ar: "داخل body", en: "Inside body" },
              { ar: "داخل head", en: "Inside head" },
              { ar: "بعد doctype", en: "After doctype" }
            ],
            answerIndex: 1
          },
          {
            q: { ar: "غرض العناصر الدلالية هو…", en: "Semantic elements help…" },
            options: [
              { ar: "تسريع الإنترنت", en: "Speed up the internet" },
              { ar: "تحسين الدلالة والوصولية", en: "Improve meaning & accessibility" },
              { ar: "تكبير الخط تلقائياً", en: "Auto-enlarge text" }
            ],
            answerIndex: 1
          }
        ],
        resources: [
          { label: "MDN: HTML elements", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element" },
          { label: "web.dev: semantic HTML", url: "https://web.dev/learn/html/semantic-html/" }
        ]
      },
      {
        id: 2,
        title: { ar: "الروابط والصور والقوائم", en: "Links, images & lists" },
        lessons: [
          {
            id: "h3",
            title: { ar: "روابط وصور", en: "Links & Images" },
            en: "Anchor tags with href, img with alt for accessibility.",
            ar: "روابط باستخدام a و الصور باستخدام img مع alt للوصولية.",
            code: `<a href="/about">About</a>
<img src="cat.png" alt="Cat" />`,
            youtube: "https://www.youtube.com/embed/qz0aGYrrlhU"
          }
        ],
        quiz: [
          {
            q: { ar: "سمة بديلة للصور؟", en: "Which image attribute provides alternative text?" },
            options: [
              { ar: "src", en: "src" },
              { ar: "alt", en: "alt" },
              { ar: "role", en: "role" }
            ],
            answerIndex: 1
          }
        ],
        resources: [
          { label: "MDN: img", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img" }
        ]
      }
    ]
  },
  CSS: {
    descKey: "cssDesc",
    levels: [
      {
        id: 1,
        title: { ar: "الأساسيات: المحددات والخواص", en: "Basics: selectors & properties" },
        lessons: [
          {
            id: "c1",
            title: { ar: "أنواع المحددات", en: "Selector types" },
            en: "Element, class, id, attribute, pseudo classes.",
            ar: "محددات العنصر، الصنف، المعرف، والسمات والحالات شبهية.",
            code: `h1 { color: tomato }
.card { border-radius: 16px }
#main { max-width: 960px }
a:hover { text-decoration: underline }`,
            youtube: "https://www.youtube.com/embed/1Rs2ND1ryYc"
          }
        ],
        quiz: [
          {
            q: { ar: "محدد يختار عنصرًا بمعرف؟", en: "Which selector targets an element by id?" },
            options: [
              { ar: ".card", en: ".card" },
              { ar: "#main", en: "#main" },
              { ar: "img[alt]", en: "img[alt]" }
            ],
            answerIndex: 1
          }
        ],
        resources: [
          { label: "MDN: CSS selectors", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors" },
          { label: "web.dev: CSS", url: "https://web.dev/learn/css/" }
        ]
      },
      {
        id: 2,
        title: { ar: "التخطيطات: Flexbox و Grid", en: "Layouts: Flexbox & Grid" },
        lessons: [
          {
            id: "c2",
            title: { ar: "Flexbox", en: "Flexbox" },
            en: "Axis, alignment, gap, wrapping.",
            ar: "المحاور، المحاذاة، الفراغات، والالتفاف.",
            code: `.row{ display:flex; gap:12px; align-items:center; }
.card{ flex:1 }`,
            youtube: "https://www.youtube.com/embed/-Wlt8NRtOpo"
          },
          {
            id: "c3",
            title: { ar: "CSS Grid", en: "CSS Grid" },
            en: "Define columns/rows and place items precisely.",
            ar: "تعريف الأعمدة والصفوف ووضع العناصر بدقة.",
            code: `.grid{ display:grid; grid-template-columns: repeat(3, 1fr); gap: 12px }`,
            youtube: "https://www.youtube.com/embed/jV8B24rSN5o"
          }
        ],
        quiz: [
          {
            q: { ar: "خاصية أعمدة الشبكة؟", en: "Which property defines grid columns?" },
            options: [
              { ar: "grid-template-columns", en: "grid-template-columns" },
              { ar: "flex-direction", en: "flex-direction" },
              { ar: "justify-content", en: "justify-content" }
            ],
            answerIndex: 0
          }
        ],
        resources: [
          { label: "Grid Garden", url: "https://cssgridgarden.com/" },
          { label: "Flexbox Froggy", url: "https://flexboxfroggy.com/" }
        ]
      }
    ]
  },
  JS: {
    descKey: "jsDesc",
    levels: [
      {
        id: 1,
        title: { ar: "الأساسيات: المتغيرات والأنواع", en: "Basics: variables & types" },
        lessons: [
          {
            id: "j1",
            title: { ar: "let / const / var", en: "let / const / var" },
            en: "Block scoping and immutability basics.",
            ar: "نطاق الكتلة والثبات الأساسي.",
            code: `let name = "Yomna";
const pi = 3.14;
var old = true;`,
            youtube: "https://www.youtube.com/embed/W6NZfCO5SIk"
          },
          {
            id: "j2",
            title: { ar: "الدوال والأسهم", en: "Functions & arrows" },
            en: "Function declarations vs arrow functions.",
            ar: "تعريفات الدوال مقابل الدوال السهمية.",
            code: `function add(a,b){ return a+b }
const mul = (a,b)=>a*b;`,
            youtube: "https://www.youtube.com/embed/hdI2bqOjy3c"
          }
        ],
        quiz: [
          {
            q: { ar: "أي الكلمة تُعرّف ثابت؟", en: "Which keyword defines a constant?" },
            options: [
              { ar: "var", en: "var" },
              { ar: "let", en: "let" },
              { ar: "const", en: "const" }
            ],
            answerIndex: 2
          }
        ],
        resources: [
          { label: "MDN: JS Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
          { label: "Eloquent JS (book)", url: "https://eloquentjavascript.net/" }
        ]
      },
      {
        id: 2,
        title: { ar: "DOM والأحداث", en: "DOM & events" },
        lessons: [
          {
            id: "j3",
            title: { ar: "التعامل مع DOM", en: "Manipulating the DOM" },
            en: "Select, create and update elements.",
            ar: "اختيار وإنشاء وتحديث العناصر.",
            code: `document.querySelector('#btn').addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
});`,
            youtube: "https://www.youtube.com/embed/0ik6X4DJKCc"
          }
        ],
        quiz: [
          {
            q: { ar: "دالة اختيار عنصر؟", en: "Method to select an element?" },
            options: [
              { ar: "console.log", en: "console.log" },
              { ar: "querySelector", en: "querySelector" },
              { ar: "setInterval", en: "setInterval" }
            ],
            answerIndex: 1
          }
        ],
        resources: [
          { label: "MDN: DOM", url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model" }
        ]
      }
    ]
  }
};

/* ========== State ========== */
let LANG = "ar";
let CURRENT_TRACK = null; // "HTML" | "CSS" | "JS"
let CURRENT_LEVEL_INDEX = null;

/* ========== Helpers ========== */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const setText = (el, v) => { if (el) el.textContent = v; };

function i18nSync(){
  $$("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = STR[LANG][key] || key;
  });
  document.documentElement.setAttribute("dir", LANG === "ar" ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", LANG);
}

/* ========== Views ========== */
function showView(id){
  $$(".view").forEach(v => v.classList.remove("active"));
  $("#"+id).classList.add("active");
}

/* Home */
function renderHome(){
  const trackGrid = $("#track-grid");
  trackGrid.innerHTML = "";
  ["HTML","CSS","JS"].forEach(key => {
    const card = document.createElement("button");
    card.className = "card track";
    card.innerHTML = `
      <div class="flare"></div>
      <div class="eyebrow">${STR[LANG].tracks}</div>
      <div class="row">
        <div class="h2">${key}</div>
      </div>
      <p class="muted mt">${STR[LANG][key.toLowerCase()+"Desc"]}</p>
      <div class="chips mt"><span class="chip">${STR[LANG].viewLessons}</span></div>
    `;
    card.addEventListener("click", () => openTrack(key));
    trackGrid.appendChild(card);
  });
}

/* Track */
function openTrack(key){
  CURRENT_TRACK = key;
  const track = CONTENT[key];
  setText($("#track-title"), key);
  setText($("#track-desc"), `${STR[LANG][track.descKey]} / ${STR[LANG === "ar" ? "en" : "ar"][track.descKey]}`);
  const levels = $("#levels");
  levels.innerHTML = "";
  track.levels.forEach((lvl, idx) => {
    const btn = document.createElement("button");
    btn.className = "card";
    btn.innerHTML = `
      <div class="eyebrow">${STR[LANG].level} ${lvl.id}</div>
      <div class="h3">${lvl.title.ar} / ${lvl.title.en}</div>
      <div class="muted mt-small">${lvl.lessons.length} ${STR[LANG].lessons} • ${STR[LANG].quiz}</div>
    `;
    btn.addEventListener("click", () => openLevel(idx));
    levels.appendChild(btn);
  });
  showView("track");
}

/* Level */
function openLevel(idx){
  CURRENT_LEVEL_INDEX = idx;
  const lvl = CONTENT[CURRENT_TRACK].levels[idx];
  setText($("#level-number"), lvl.id);
  setText($("#level-title"), `${lvl.title.ar} / ${lvl.title.en}`);
  const lessons = $("#lessons");
  lessons.innerHTML = "";
  lvl.lessons.forEach(lsn => {
    const card = document.createElement("div");
    card.className = "lesson";
    card.innerHTML = `
      <div class="body">
        <h4>${lsn.title.ar} / ${lsn.title.en}</h4>
        <p class="muted">${LANG === "ar" ? lsn.ar : lsn.en}</p>
        <details class="mt">
          <summary>${STR[LANG].codeSample}</summary>
          <pre><code>${lsn.code.replace(/</g, "&lt;")}</code></pre>
        </details>
        <div class="mt">
          <iframe class="video" src="${lsn.youtube}" title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    `;
    lessons.appendChild(card);
  });
  // resources
  const res = $("#resources");
  res.innerHTML = "";
  lvl.resources.forEach(r => {
    const a = document.createElement("a"); a.href = r.url; a.target = "_blank"; a.textContent = r.label;
    res.appendChild(a);
  });
  showView("level");
}

/* Quiz */
function openQuiz(){
  const lvl = CONTENT[CURRENT_TRACK].levels[CURRENT_LEVEL_INDEX];
  setText($("#quiz-level-number"), lvl.id);
  const form = $("#quiz-form");
  form.innerHTML = "";
  lvl.quiz.forEach((q, idx) => {
    const wrap = document.createElement("div"); wrap.className = "quiz-q";
    wrap.innerHTML = `<div class="q">${q.q.ar} / ${q.q.en}</div>`;
    const opts = document.createElement("div"); opts.className = "options";
    q.options.forEach((opt, i) => {
      const label = document.createElement("label"); label.className = "option";
      label.innerHTML = `<input type="radio" name="q${idx}" value="${i}" hidden /> ${opt.ar} / ${opt.en}`;
      label.addEventListener("click", () => {
        Array.from(opts.querySelectorAll(".option")).forEach(o => o.classList.remove("active"));
        label.classList.add("active");
      });
      opts.appendChild(label);
    });
    wrap.appendChild(opts);
    form.appendChild(wrap);
  });
  $("#quiz-result").classList.add("hidden");
  showView("quiz");
}

function submitQuiz(){
  const lvl = CONTENT[CURRENT_TRACK].levels[CURRENT_LEVEL_INDEX];
  let correct = 0;
  lvl.quiz.forEach((q, idx) => {
    const checked = document.querySelector(`input[name="q${idx}"]:checked`);
    if (checked && Number(checked.value) === q.answerIndex) correct++;
  });
  $("#score").textContent = correct;
  $("#total").textContent = lvl.quiz.length;
  const pass = (correct === lvl.quiz.length);
  $("#pass-fail").textContent = pass ? STR[LANG].passMsg : STR[LANG].failMsg;
  $("#quiz-result").classList.remove("hidden");
}

/* ========== Floating icons ========== */
const FLOATERS = [
  { text: "<div>", x: 8, y: 12 },
  { text: "{css}", x: 78, y: 16 },
  { text: "()=>{}", x: 22, y: 70 },
  { text: "<grid>", x: 85, y: 66 },
  { text: "flex", x: 12, y: 88 },
  { text: "let x", x: 64, y: 86 }
];
function renderFloaters(){
  FLOATERS.forEach((f,i) => {
    const el = document.createElement("div");
    el.className = "floater";
    el.textContent = f.text;
    el.style.left = f.x + "%";
    el.style.top = f.y + "%";
    el.style.animationDelay = (i%3) + "s";
    document.body.appendChild(el);
  });
}

/* ========== Stars canvas ========== */
function initStars(){
  const canvas = document.getElementById("stars"); const ctx = canvas.getContext("2d");
  function resize(){ canvas.width = innerWidth; canvas.height = innerHeight; }
  window.addEventListener("resize", resize); resize();
  const N = 150; const stars = Array.from({length:N}, () => ({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*1.2+0.3,
    a: Math.random()*1
  }));
  function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for(const s of stars){
      s.a += 0.02; const o = 0.3 + Math.sin(s.a)*0.3;
      ctx.fillStyle = `rgba(255,255,255,${o})`;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2); ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
}

/* ========== Boot ========== */
function boot(){
  document.getElementById("year").textContent = new Date().getFullYear();

  i18nSync();
  renderHome();

  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".lang-switch button").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      LANG = btn.dataset.lang;
      i18nSync();
      const activeId = document.querySelector(".view.active")?.id;
      if(activeId === "home") renderHome();
      else if(activeId === "track") openTrack(CURRENT_TRACK);
      else if(activeId === "level") openLevel(CURRENT_LEVEL_INDEX);
      else if(activeId === "quiz") openQuiz();
    });
  });

  document.getElementById("btn-home").addEventListener("click", () => {
    showView("home"); renderHome();
  });

  document.getElementById("start-quiz").addEventListener("click", openQuiz);
  document.getElementById("quiz-back").addEventListener("click", () => showView("level"));
  document.getElementById("quiz-submit").addEventListener("click", submitQuiz);

  renderFloaters();
  initStars();
}

document.addEventListener("DOMContentLoaded", boot);

/* ========== Small utilities CSS via JS (inject) ========== */
const styleExtra = document.createElement('style');
styleExtra.textContent = `
.floater{ position:fixed; z-index:-1; color:rgba(255,255,255,.2); font-size:12px; border:1px solid rgba(255,255,255,.06); padding:6px 10px; border-radius:12px; backdrop-filter: blur(4px); animation: float 6s ease-in-out infinite; }
@keyframes float { 50% { transform: translateY(-10px) } }
.row{ display:flex; align-items:center; justify-content:space-between; gap:12px }
.h2{ font-size:24px; font-weight:900 }
.h3{ font-size:18px; font-weight:800 }
.mt{ margin-top:10px } .mt-small{ margin-top:6px }
.chip{ font-size:12px; border:1px solid var(--border); border-radius:999px; padding:6px 10px; }
.video{ width:100%; aspect-ratio:16/9; border:1px solid var(--border); border-radius:10px }
`;
document.head.appendChild(styleExtra);
