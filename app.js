/* Builds every page from SITE (content.js). You should not need to edit this file. */
(function () {
  const TYPES = [
    ["notes", "Notes"],
    ["solutions", "Worked solutions"],
    ["assignment", "Assignment"],
    ["extension", "Extension"],
    ["review", "Review"],
    ["practice", "Practice quiz"],
    ["investigation", "Investigation"],
    ["answers", "Answers"],
    ["markscheme", "Markscheme"],
    ["slides", "Slides"]
  ];
  const KEYS = ["solutions", "answers", "markscheme"];
  const STATUS = { done: "Done", now: "Now", next: "Coming up" };

  const app = document.getElementById("app");
  const side = document.getElementById("side");
  const q = document.getElementById("q");
  const T = SITE.teacher;

  const esc = s => String(s ?? "").replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const isUrl = p => /^https?:\/\//.test(p);
  const DRIVE = typeof FILES === "object" ? FILES : {};
  const link = p => isUrl(p) ? p
    : DRIVE[p] ? `https://drive.google.com/file/d/${DRIVE[p]}/view`
    : encodeURI(SITE.filesBase + p);
  const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const currentUnit = c => c.units.find(u => u.status === "now");
  const lessonCount = c => c.units.reduce((n, u) => n + (u.lessons || []).length, 0);
  const todo = v => v ? v : (SITE.draft ? `<span class="todo">To add</span>` : "");
  const plural = (n, word) => `${n} ${word}${n === 1 ? "" : word.endsWith("s") ? "es" : "s"}`;

  function fileKind(p) {
    const m = /\.(pdf|docx?|pptx?|xlsx?)$/i.exec(p);
    if (!m) return "Open";
    const e = m[1].toLowerCase();
    return e === "pdf" ? "PDF" : e.startsWith("doc") ? "Word" : e.startsWith("ppt") ? "PPT" : "Excel";
  }

  /* ───── Building blocks ───── */

  function crumbs(items, right = "") {
    return `<div class="crumbs"><nav aria-label="Breadcrumb">${items.map(([label, href]) =>
      href ? `<a href="${href}">${esc(label)}</a>` : `<span aria-current="page">${esc(label)}</span>`
    ).join('<span aria-hidden="true">›</span>')}</nav><span>${right}</span></div>`;
  }

  // One table: fixed first columns, then one column per resource type any row has.
  function specTable(rows, firstCols, rowAttrs = () => "") {
    const types = TYPES.filter(([k]) => rows.some(r => k in r));
    const head = firstCols.map(c => `<th class="${c.cls || ""}">${c.head}</th>`).join("") +
      types.map(([, label]) => `<th class="link-col">${label}</th>`).join("");
    const body = rows.map(r => `<tr${rowAttrs(r)}>` +
      firstCols.map(c => `<td class="${c.cls || ""}">${c.render(r)}</td>`).join("") +
      types.map(([k, label]) => {
        if (!(k in r)) return `<td class="link-col na">–</td>`;
        const key = KEYS.includes(k) ? " key" : "";
        if (!r[k]) return `<td class="link-col${key}" data-label="${label}"><span class="soon">soon</span></td>`;
        return `<td class="link-col${key}" data-label="${label}"><a href="${esc(link(r[k]))}" target="_blank" rel="noopener">${fileKind(r[k])}</a></td>`;
      }).join("") + `</tr>`).join("");
    return `<table class="spec"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
  }

  // A row's files as named links, e.g. "Notes · Worked solutions ✓ · Assignment". Empty value = coming soon.
  function fileLinks(r) {
    return TYPES.filter(([k]) => k in r).map(([k, label]) => {
      const key = KEYS.includes(k) ? " key" : "";
      return r[k]
        ? `<a class="file${key}" href="${esc(link(r[k]))}" target="_blank" rel="noopener">${label}</a>`
        : `<span class="file soon">${label} (soon)</span>`;
    }).join("");
  }

  /* Upcoming dates: hide ones that are over; label this week and next week.
     An item has either "week" (Monday of that week) or "date" (an exact due date). */
  function upcomingRows(c) {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const monday = new Date(today); monday.setDate(today.getDate() - ((today.getDay() + 6) % 7));
    return (c.upcoming || [])
      .map(x => ({ ...x, start: new Date((x.date || x.week) + "T00:00:00") }))
      .filter(x => { const end = new Date(x.start); if (!x.date) end.setDate(end.getDate() + 6); return end >= today; })
      .sort((a, b) => a.start - b.start)
      .map(x => {
        const startMonday = new Date(x.start); startMonday.setDate(x.start.getDate() - ((x.start.getDay() + 6) % 7));
        const weeks = Math.round((startMonday - monday) / (7 * 864e5));
        const relative = weeks <= 0 ? "This week" : weeks === 1 ? "Next week" : "";
        const day = x.start.toLocaleDateString("en-GB", x.date ? { weekday: "short", day: "numeric", month: "short" } : { day: "numeric", month: "short" });
        const when = x.date ? (relative ? `${relative} · ${day}` : day) : (relative || "Week of " + day);
        return { when, soonest: !!relative, what: x.what };
      });
  }

  /* ───── Sidebars ───── */

  function sideAll(activeId) {
    return `<div class="side-title">Choose a class</div>
      <ul class="side-list">${SITE.classes.map(c =>
        `<li><a href="#/${c.id}"${c.id === activeId ? ' aria-current="page"' : ""}>${esc(c.name)}</a></li>`).join("")}</ul>`;
  }

  function sideClass(c, activeUnitId) {
    const tools = (c.tools || []).length ? `<div class="side-title">Formula sheet &amp; calculator</div>
      <ul class="side-list">${c.tools.map(t => t.link
        ? `<li><a href="${esc(link(t.link))}" target="_blank" rel="noopener">${esc(t.label)}</a></li>`
        : `<li><span class="muted" style="font-size:.88rem">${esc(t.label)}: soon</span></li>`).join("")}</ul>` : "";
    return `<a class="side-back" href="#/">‹ All classes</a>
      <div class="side-title"><a href="#/${c.id}"${!activeUnitId ? ' aria-current="page"' : ""}>${esc(c.name)}</a></div>
      <ul class="side-list">${c.units.map(u =>
        `<li><a href="#/${c.id}/${u.id}"${u.id === activeUnitId ? ' aria-current="page"' : ""}><span class="code">${esc(u.code)}</span>${esc(u.title)}${u.status === "now" ? '<span class="tag">Now</span>' : ""}</a></li>`).join("")}</ul>
      ${tools}`;
  }

  /* ───── Pages ───── */

  function home() {
    const cats = SITE.classes.map(c => `<section class="cat">
        <h2><a href="#/${c.id}">${esc(c.name)}</a><span class="sub">${esc(c.course)}</span></h2>
        <ul class="unit-links">${c.units.map(u =>
          `<li><span class="code">${esc(u.code)}</span><a href="#/${c.id}/${u.id}">${esc(u.title)}</a>${u.status === "now" ? '<span class="tag">Now</span>' : ""}</li>`).join("")}</ul>
      </section>`).join("");
    return {
      title: `${T.name} · Math`,
      side: sideAll(),
      sideLabel: "Choose a class",
      html: `<h1>All classes</h1>${cats}`
    };
  }

  function classPage(c) {
    const u = currentUnit(c);
    const up = upcomingRows(c);
    const upHtml = up.length
      ? `<table class="spec"><thead><tr><th>When</th><th>What</th></tr></thead><tbody>${up.map(x =>
          `<tr><td class="when${x.soonest ? " soonest" : ""}">${x.when}</td><td class="main-col">${esc(x.what)}</td></tr>`).join("")}</tbody></table>`
      : `<p class="hint">No dates posted yet.</p>`;
    const units = specTable(c.units, [
      { head: "Unit", cls: "code-col", render: x => esc(x.code) },
      { head: "Title", cls: "main-col", render: x => `<a class="row-link" href="#/${c.id}/${x.id}">${esc(x.title)}</a>${x.status === "now" ? '<span class="tag">Now</span>' : ""}` },
      { head: "Dates", cls: "when", render: x => esc(x.dates) },
      { head: "Lessons", cls: "when", render: x => (x.lessons || []).length || "–" }
    ]);
    return {
      title: c.name,
      side: sideClass(c),
      sideLabel: c.name,
      html: `${crumbs([["All classes", "#/"], [c.name]])}
        <h1>${esc(c.name)}</h1><p class="sub">${esc(c.course)}</p>
        ${u ? `<p class="now-line">Now: <a href="#/${c.id}/${u.id}"><strong>${esc(u.code)} ${esc(u.title)}</strong></a> <span class="muted">· ${esc(u.dates)}</span></p>` : ""}
        <section class="section"><div class="bar">Coming up</div>${upHtml}</section>
        <section class="section"><div class="bar">Units</div>${units}</section>`
    };
  }

  function unitPage(c, u, focus) {
    const lessons = u.lessons || [];
    const mats = u.materials || [];
    const anyLessonFiles = lessons.some(l => TYPES.some(([k]) => k in l));
    const matHtml = mats.length ? `<section class="section"><div class="bar">Whole unit</div>
      <table class="files"><tbody>${mats.map(m =>
        `<tr><th scope="row">${esc(m.title)}</th><td>${fileLinks(m)}</td></tr>`).join("")}</tbody></table></section>` : "";

    let lessonHtml;
    if (!lessons.length) lessonHtml = `<p class="hint">The lesson list for this unit is coming soon.</p>`;
    else {
      const hint = u.status === "next" ? `<p class="hint">Files appear here when we start this unit.</p>`
        : (!anyLessonFiles && mats.length) ? `<p class="hint">This unit's notes and assignments are in the whole-unit files above.</p>` : "";
      const anyIcan = lessons.some(l => (l.ican || []).length);
      lessonHtml = hint + (anyIcan ? `<p class="hint">Click a lesson to see its I can goals.</p>` : "") +
        `<table class="files lessons"><tbody>${lessons.map(l => {
          const id = slug(l.code), ican = l.ican || [];
          const title = ican.length
            ? `<button type="button" class="lesson-toggle" aria-expanded="false" aria-controls="ican-${id}">${esc(l.title)}</button>
               <div class="ican" id="ican-${id}" hidden>I can:<ul>${ican.map(i => `<li>${esc(i)}</li>`).join("")}</ul></div>`
            : `<span class="t">${esc(l.title)}</span>`;
          return `<tr id="l-${id}"><td class="code-col">${esc(l.code)}</td><td class="main-col">${title}</td><td class="links">${fileLinks(l)}</td></tr>`;
        }).join("")}</tbody></table>`;
    }

    const i = c.units.indexOf(u);
    const prev = c.units[i - 1], next = c.units[i + 1];
    return {
      title: `${u.code} ${u.title} · ${c.name}`,
      side: sideClass(c, u.id),
      sideLabel: `${c.name} · ${u.code}`,
      after: () => {
        if (!focus) return;
        const el = document.getElementById("l-" + slug(focus));
        if (!el) return;
        const btn = el.querySelector(".lesson-toggle");
        if (btn) toggleIcan(btn, true);
        el.scrollIntoView({ block: "center" }); el.classList.add("flash"); setTimeout(() => el.classList.remove("flash"), 1800);
      },
      html: `${crumbs([["All classes", "#/"], [c.name, `#/${c.id}`], [u.code]])}
        <h1>${esc(u.code)} · ${esc(u.title)}</h1>
        <p class="sub">${esc(u.dates)} · ${STATUS[u.status]}</p>
        ${matHtml}
        <section class="section"><div class="bar">Lessons</div>${lessonHtml}</section>
        <nav class="pager" aria-label="Other units">
          <span>${prev ? `<a href="#/${c.id}/${prev.id}">‹ ${esc(prev.code)} ${esc(prev.title)}</a>` : ""}</span>
          <span>${next ? `<a href="#/${c.id}/${next.id}">${esc(next.code)} ${esc(next.title)} ›</a>` : ""}</span>
        </nav>`
    };
  }

  function toggleIcan(btn, open = btn.getAttribute("aria-expanded") !== "true") {
    btn.setAttribute("aria-expanded", String(open));
    document.getElementById(btn.getAttribute("aria-controls")).hidden = !open;
  }
  app.addEventListener("click", e => {
    const btn = e.target.closest(".lesson-toggle");
    if (btn) toggleIcan(btn);
  });

  function search(term) {
    // every word must match the start of a word, so "log" finds Logarithms but not Technology
    const res = term.split(/\s+/).filter(Boolean).map(w =>
      new RegExp("(^|[^a-z0-9])" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
    const hits = [];
    SITE.classes.forEach(c => c.units.forEach(u => {
      const match = text => res.every(r => r.test(text));
      if (match(`${c.name} ${u.code} ${u.title}`)) hits.push({ c, u, code: u.code, title: u.title, href: `#/${c.id}/${u.id}` });
      (u.lessons || []).forEach(l => {
        if (match(`${l.code} ${l.title} ${(l.ican || []).join(" ")}`))
          hits.push({ c, u, code: l.code, title: l.title, href: `#/${c.id}/${u.id}?l=${encodeURIComponent(l.code)}` });
      });
    }));
    const table = hits.length ? `<table class="spec"><thead><tr><th>Class</th><th>Unit</th><th>Lesson</th><th>Title</th></tr></thead><tbody>${hits.slice(0, 80).map(h =>
      `<tr><td class="when">${esc(h.c.name)}</td><td class="when">${esc(h.u.code)}</td><td class="code-col">${h.code === h.u.code ? "–" : esc(h.code)}</td><td class="main-col"><a class="row-link" href="${h.href}">${esc(h.title)}</a></td></tr>`).join("")}</tbody></table>`
      : `<p class="hint">Nothing matches “${esc(term)}”. Try a shorter word, or a lesson number like 2.3.</p>`;
    return {
      title: `Search: ${term}`,
      side: sideAll(),
      sideLabel: "Choose a class",
      html: `${crumbs([["All classes", "#/"], ["Search"]], plural(hits.length, "result"))}<h1>Results for “${esc(term)}”</h1><section class="section">${table}</section>`
    };
  }

  function about() {
    const names = SITE.classes.map(c => c.name);
    const list = names.slice(0, -1).join(", ") + " and " + names[names.length - 1];
    return {
      title: "About & help",
      side: sideAll("about"),
      sideLabel: "Choose a class",
      html: `${crumbs([["All classes", "#/"], ["About & help"]])}
        <h1>About &amp; help</h1>
        <div class="prose">
          <p class="sub">I teach ${esc(list)} at ${esc(T.school)}. Everything for class is here, organized by class, unit and lesson.</p>
          <div class="bar">Contact</div>
          <table class="spec"><tbody>
            <tr><td class="when">Email</td><td class="main-col">${T.email ? `<a href="mailto:${esc(T.email)}">${esc(T.email)}</a>` : todo("")}</td></tr>
            <tr><td class="when">Help time</td><td class="main-col">${todo(esc(T.helpTimes))}</td></tr>
            <tr><td class="when">Grades</td><td class="main-col">${esc(T.toddle)}</td></tr>
          </tbody></table>
          <div class="bar">How to get help</div>
          <ol>${T.howToGetHelp.map(x => `<li>${esc(x)}</li>`).join("")}</ol>
          <div class="bar">Class expectations</div>
          <ul>${T.expectations.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
        </div>`
    };
  }

  function notFound() {
    return { title: "Page not found", side: sideAll(), sideLabel: "Choose a class",
      html: `<h1>Page not found</h1><p style="margin-top:10px"><a href="#/">Back to all classes</a></p>` };
  }

  /* ───── Router ───── */

  let lastPage = "#/";

  function route() {
    const [path, query] = location.hash.replace(/^#\/?/, "").split("?");
    const parts = path.split("/").filter(Boolean);
    const params = new URLSearchParams(query || "");
    let page;
    if (!parts.length) page = home();
    else if (parts[0] === "about") page = about();
    else if (parts[0] === "search") page = search(params.get("q") || "");
    else {
      const c = SITE.classes.find(x => x.id === parts[0]);
      const u = c && parts[1] ? c.units.find(x => x.id === parts[1]) : null;
      page = !c ? notFound() : !parts[1] ? classPage(c) : u ? unitPage(c, u, params.get("l")) : notFound();
    }
    if (parts[0] !== "search") { lastPage = location.hash || "#/"; if (document.activeElement !== q) q.value = ""; }

    side.classList.remove("open");
    side.innerHTML = `<button class="side-toggle" type="button" aria-expanded="false">Browse: ${esc(page.sideLabel)}</button>
      <div class="side-body">${page.side}</div>`;
    side.querySelector(".side-toggle").addEventListener("click", e => {
      const open = side.classList.toggle("open");
      e.currentTarget.setAttribute("aria-expanded", open);
    });
    app.innerHTML = page.html;
    document.title = page.title;
    if (!params.get("l") && parts[0] !== "search") window.scrollTo(0, 0);
    if (page.after) page.after();
  }

  q.addEventListener("input", () => {
    const v = q.value.trim();
    location.replace(v ? "#/search?q=" + encodeURIComponent(v) : lastPage);
  });

  document.getElementById("foot").innerHTML = `<div class="foot-inner">
      <span>${esc(T.toddle)}</span>
      <span>Updated ${esc(SITE.updated)}</span></div>`;
  document.getElementById("draft-bar").innerHTML = SITE.draft
    ? (location.protocol === "file:"
        ? `<div class="draft">Draft preview: links open files from your Desktop. They'll point to shared files once the site is hosted.</div>`
        : `<div class="draft">Draft: file links don't work online yet. They will once the files are shared from Google Drive.</div>`)
    : "";

  window.addEventListener("hashchange", route);
  route();
})();
