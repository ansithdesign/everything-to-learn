/* Knowledge Book features: edition switcher + text bookmarks.
   Injected into preview.html by build.py (between the FEATURES markers). */
(function () {
  "use strict";

  /* ---------------- storage ---------------- */
  var VER_KEY = "pdbook:edition", BM_KEY = "pdbook:bookmarks:v1", NAV_KEY = "pdbook:bm-open";
  function get(k, d) { try { var v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  /* ---------------- edition ---------------- */
  var EDITIONS = [
    { id: "fundamentals", label: "Fundamentals" },
    { id: "modules", label: "2026 edition" }
  ];
  function ver() { var v = get(VER_KEY, "fundamentals"); return v === "modules" ? "modules" : "fundamentals"; }
  window.__pdVer = ver;

  function setVer(v, opts) {
    if (v === ver()) return;
    set(VER_KEY, v);
    syncSwitches();
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    if (!(opts && opts.keepScroll)) window.scrollTo(0, 0);
    if (!(opts && opts.silent)) toast(v === "modules" ? "Showing the 2026 edition" : "Showing Fundamentals");
  }

  function switchHTML(extra) {
    var v = ver();
    return '<div class="ver ' + (extra || "") + '" role="radiogroup" aria-label="Edition">' +
      EDITIONS.map(function (e) {
        return '<button type="button" role="radio" data-ver="' + e.id + '" aria-checked="' + (e.id === v) + '">' + e.label + "</button>";
      }).join("") + "</div>";
  }
  function syncSwitches() {
    var v = ver();
    document.querySelectorAll(".ver [data-ver]").forEach(function (b) { b.setAttribute("aria-checked", String(b.dataset.ver === v)); });
    document.documentElement.setAttribute("data-edition", v);
  }

  function mountSwitches() {
    var bar = document.querySelector("#readbar .in");
    if (bar && !bar.querySelector(".ver")) {
      var eta = bar.querySelector(".eta");
      var w = document.createElement("div");
      w.innerHTML = switchHTML("ver--bar");
      bar.insertBefore(w.firstChild, eta);
    }
    var hero = document.querySelector(".hero");
    if (hero && !hero.querySelector(".ver-block")) {
      var lede = hero.querySelector(".lede");
      var blk = document.createElement("div");
      blk.className = "ver-block";
      blk.innerHTML = '<p class="ver-label">Choose your edition</p>' + switchHTML("ver--hero") +
        '<p class="ver-help"><b>Fundamentals</b> explains each topic from the ground up: what it is, how it works and the main methods. ' +
        "<b>2026 edition</b> focuses on what is changing now, with AI and new standards.</p>";
      if (lede && lede.nextSibling) hero.insertBefore(blk, lede.nextSibling); else hero.appendChild(blk);
    }
    var eb = document.querySelector(".chapter > .eyebrow");
    if (eb && !eb.querySelector(".ed-tag")) {
      var t = document.createElement("span");
      t.className = "ed-tag";
      t.textContent = (window.__pdFund && !window.__pdFund[slug()]) ? "Fundamentals + 2026" : ver() === "modules" ? "2026 edition" : "Fundamentals";
      eb.insertBefore(t, eb.firstChild);
    }
    applyEditionMeta();
    syncSwitches();
  }

  /* Fundamentals has its own subtitle, description and objectives per chapter. */
  function applyEditionMeta() {
    var F = window.__pdFund || {};
    if (ver() !== "fundamentals") return;
    var s = slug(), meta = s && F[s];
    var chap = document.querySelector(".chapter");
    if (meta && chap && chap.dataset.ed !== "fundamentals") {
      chap.dataset.ed = "fundamentals";
      var sub = chap.querySelector(":scope > .sub");
      if (sub && meta.subtitle) sub.textContent = meta.subtitle;
      var ul = chap.querySelector(":scope > .box-objectives ul");
      if (ul && meta.objectives) ul.innerHTML = meta.objectives.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("");
    }
    document.querySelectorAll(".card").forEach(function (card) {
      if (card.dataset.ed === "fundamentals") return;
      var a = card.querySelector("h3 a"); if (!a) return;
      var m = F[(a.getAttribute("href") || "").replace("#/m/", "")]; if (!m) return;
      card.dataset.ed = "fundamentals";
      var p = card.querySelector(":scope > p:not(.meta)");
      if (p && m.description) p.textContent = m.description;
      var ul2 = card.querySelector("details ul");
      if (ul2 && m.objectives) ul2.innerHTML = m.objectives.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("");
    });
  }

  /* ---------------- helpers ---------------- */
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function slug() { var m = location.hash.match(/^#\/m\/([^/?]+)/); return m ? decodeURIComponent(m[1]) : null; }
  function prose() { return document.querySelector(".chapter .prose"); }
  function textNodes(root) { var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), a = [], n; while ((n = w.nextNode())) a.push(n); return a; }
  function fullText(root) { return textNodes(root).map(function (n) { return n.data; }).join(""); }
  function offsetOf(root, node, off) { var r = document.createRange(); r.setStart(root, 0); r.setEnd(node, off); return r.toString().length; }
  function rangeAt(root, start, len) {
    var nodes = textNodes(root), pos = 0, r = document.createRange(), started = false;
    for (var i = 0; i < nodes.length; i++) {
      var L = nodes[i].data.length;
      if (!started && start <= pos + L) { r.setStart(nodes[i], start - pos); started = true; }
      if (started && start + len <= pos + L) { r.setEnd(nodes[i], start + len - pos); return r; }
      pos += L;
    }
    return null;
  }
  function locate(root, b, full) {
    full = full || fullText(root);
    var t = b.text, best = -1, bestScore = -Infinity, i = full.indexOf(t);
    while (i !== -1) {
      var sc = 0;
      if (b.prefix && full.slice(Math.max(0, i - b.prefix.length), i) === b.prefix) sc += 2;
      if (b.suffix && full.substr(i + t.length, b.suffix.length) === b.suffix) sc += 2;
      sc -= Math.abs(i - (b.start || 0)) / 1e6;
      if (sc > bestScore) { bestScore = sc; best = i; }
      i = full.indexOf(t, i + 1);
    }
    return best < 0 ? null : rangeAt(root, best, t.length);
  }
  function sectionFor(root, range) {
    var hs = root.querySelectorAll("h2,h3"), cur = null;
    for (var i = 0; i < hs.length; i++) { if (range.comparePoint(hs[i], 0) <= 0) cur = hs[i]; else break; }
    if (!cur) return { id: "", title: "Introduction" };
    return { id: cur.id, title: cur.textContent.replace(/#\s*$/, "").trim() };
  }
  function ago(ts) {
    var s = (Date.now() - ts) / 1000;
    if (s < 60) return "just now";
    if (s < 3600) return Math.floor(s / 60) + " min ago";
    if (s < 86400) return Math.floor(s / 3600) + " h ago";
    if (s < 86400 * 7) return Math.floor(s / 86400) + " d ago";
    return new Date(ts).toLocaleDateString(undefined, { day: "numeric", month: "short" });
  }
  function trunc(s, n) { s = s.replace(/\s+/g, " ").trim(); return s.length > n ? s.slice(0, n - 1).trimEnd() + "…" : s; }

  var I = {
    bm: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 21l-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',
    bmFill: '<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M19 21l-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',
    copy: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    trash: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/></svg>',
    x: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    chev: '<svg class="bm-chev" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };

  /* ---------------- bookmarks: data ---------------- */
  function loadBms() { try { var a = JSON.parse(get(BM_KEY, "[]")); return Array.isArray(a) ? a : []; } catch (e) { return []; } }
  var bms = loadBms();
  function saveBms() { set(BM_KEY, JSON.stringify(bms)); renderNav(); renderDrawer(); paint(); }
  function edLabel(v) { return v === "modules" ? "2026 edition" : "Fundamentals"; }

  /* ---------------- highlights ---------------- */
  var HL = !!(window.CSS && CSS.highlights && window.Highlight);
  function paint() {
    if (!HL) return;
    var root = prose(), s = slug(), h = new Highlight();
    if (root && s) {
      var full = fullText(root);
      bms.forEach(function (b) { if (b.slug === s && (b.ver || "modules") === ver()) { var r = locate(root, b, full); if (r) h.add(r); } });
    }
    CSS.highlights.set("bm-saved", h);
  }
  var flashT;
  function flash(r) {
    if (HL) {
      CSS.highlights.set("bm-flash", new Highlight(r));
      clearTimeout(flashT);
      flashT = setTimeout(function () { CSS.highlights.delete("bm-flash"); }, 2600);
    } else {
      var s = getSelection(); s.removeAllRanges(); s.addRange(r);
    }
  }

  /* ---------------- selection toolbar ---------------- */
  var tip = document.createElement("div");
  tip.className = "bm-tip";
  tip.setAttribute("role", "toolbar");
  tip.setAttribute("aria-label", "Selection actions");
  tip.innerHTML = '<button type="button" data-a="save" title="Bookmark (B)">' + I.bm + "<span>Bookmark</span></button>" +
    '<span class="bm-sep" aria-hidden="true"></span><button type="button" data-a="copy" title="Copy">' + I.copy + "<span>Copy</span></button>";
  var cur = null;

  function selInfo() {
    var s = getSelection();
    if (!s || !s.rangeCount || s.isCollapsed) return null;
    var r = s.getRangeAt(0), root = prose();
    if (!root || !root.contains(r.commonAncestorContainer)) return null;
    var t = r.toString();
    if (t.trim().length < 3) return null;
    return { r: r.cloneRange(), root: root, t: t };
  }
  function existing(info) {
    var t = info.t.trim(), s = slug(), v = ver();
    for (var i = 0; i < bms.length; i++) if (bms[i].slug === s && (bms[i].ver || "modules") === v && bms[i].text === t) return bms[i];
    return null;
  }
  function placeTip() {
    if (!cur) return;
    var rects = cur.r.getClientRects(), rect = rects.length ? rects[0] : cur.r.getBoundingClientRect();
    var all = cur.r.getBoundingClientRect();
    if (all.bottom < 0 || all.top > innerHeight) { tip.classList.remove("show"); return; }
    var w = tip.offsetWidth || 190, h = tip.offsetHeight || 40;
    var cx = rect.left + Math.min(rect.width, 240) / 2;
    var left = Math.max(10, Math.min(innerWidth - w - 10, cx - w / 2));
    var top = rect.top - h - 12, below = false;
    var barBottom = (document.getElementById("readbar") || { getBoundingClientRect: function () { return { bottom: 0 }; } }).getBoundingClientRect().bottom;
    if (top < barBottom + 6) { top = all.bottom + 12; below = true; }
    tip.style.left = left + "px";
    tip.style.top = top + "px";
    tip.style.setProperty("--ax", Math.max(14, Math.min(w - 14, cx - left)) + "px");
    tip.classList.toggle("below", below);
    tip.classList.add("show");
  }
  function showTip() {
    var info = selInfo();
    if (!info) { hideTip(); return; }
    cur = info;
    var saved = existing(info), btn = tip.querySelector('[data-a="save"]');
    btn.innerHTML = (saved ? I.bmFill + "<span>Saved</span>" : I.bm + "<span>Bookmark</span>");
    btn.dataset.state = saved ? "saved" : "";
    placeTip();
  }
  function hideTip() { cur = null; tip.classList.remove("show"); }

  function saveSel() {
    if (!cur) return;
    var info = cur, dup = existing(info);
    if (dup) { getSelection().removeAllRanges(); hideTip(); toast("Already in your bookmarks", "View", openDrawer); return; }
    var raw = info.r.toString(), lead = raw.length - raw.replace(/^\s+/, "").length;
    var start = offsetOf(info.root, info.r.startContainer, info.r.startOffset) + lead;
    var text = raw.trim().slice(0, 4000);
    var full = fullText(info.root);
    var sec = sectionFor(info.root, info.r);
    var h1 = document.querySelector(".chapter h1");
    var eb = (document.querySelector(".chapter > .eyebrow") || {}).textContent || "";
    var no = (eb.match(/Chapter\s+(\d+)/) || [])[1] || "";
    var b = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      slug: slug(), ver: ver(), chapterNo: no, chapter: h1 ? h1.textContent.trim() : "",
      section: sec.title, sectionId: sec.id, text: text,
      prefix: full.slice(Math.max(0, start - 40), start), suffix: full.substr(start + text.length, 40),
      start: start, created: Date.now()
    };
    bms.unshift(b);
    saveBms();
    getSelection().removeAllRanges();
    hideTip();
    toast("Saved to bookmarks", "View all", openDrawer);
  }
  function copySel() {
    if (!cur) return;
    var t = cur.t.trim();
    (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(function () { toast("Copied"); }, function () { toast("Couldn't copy"); });
    hideTip();
  }

  tip.addEventListener("mousedown", function (e) { e.preventDefault(); });
  tip.addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    if (b.dataset.a === "save") saveSel(); else copySel();
  });
  var selT;
  document.addEventListener("mouseup", function (e) { if (tip.contains(e.target)) return; setTimeout(showTip, 10); });
  document.addEventListener("touchend", function () { setTimeout(showTip, 300); });
  document.addEventListener("keyup", function (e) { if (e.shiftKey || e.key === "Shift" || e.key.indexOf("Arrow") === 0) showTip(); });
  document.addEventListener("selectionchange", function () { clearTimeout(selT); selT = setTimeout(function () { var s = getSelection(); if (!s || s.isCollapsed) hideTip(); }, 60); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { hideTip(); if (drawerOpen) closeDrawer(); }
    var tag = (document.activeElement && document.activeElement.tagName) || "";
    if ((e.key === "b" || e.key === "B") && !e.metaKey && !e.ctrlKey && !e.altKey && tag !== "INPUT" && tag !== "TEXTAREA" && cur) { e.preventDefault(); saveSel(); }
  });
  var rafS;
  addEventListener("scroll", function () { if (!cur) return; cancelAnimationFrame(rafS); rafS = requestAnimationFrame(placeTip); }, { passive: true });
  addEventListener("resize", function () { if (cur) placeTip(); });

  /* ---------------- go to a bookmark ---------------- */
  function go(b) {
    closeDrawer();
    document.body.classList.remove("nav-open");
    var doIt = function () {
      var root = prose(); if (!root) return;
      var r = locate(root, b);
      if (!r) { toast("Couldn't find that passage. The chapter may have changed."); return; }
      var d = r.startContainer.parentElement && r.startContainer.parentElement.closest("details");
      if (d && !d.open) d.open = true;
      var rect = r.getBoundingClientRect();
      window.scrollTo({ top: rect.top + scrollY - innerHeight * 0.32, behavior: "smooth" });
      setTimeout(function () { flash(r); }, 250);
    };
    var bv = b.ver || "modules";
    if (bv !== ver()) { set(VER_KEY, bv); syncSwitches(); }
    if (slug() === b.slug && prose() && bv === ver() && !go.switched) {
      if (location.hash.indexOf("#/m/" + b.slug) === 0 && document.documentElement.dataset.renderedVer === bv) { doIt(); return; }
    }
    var target = "#/m/" + b.slug;
    if (location.hash === target) window.dispatchEvent(new HashChangeEvent("hashchange")); else location.hash = target;
    var n = 0;
    (function wait() {
      var p = prose();
      if (p && slug() === b.slug && document.documentElement.dataset.renderedVer === bv) { setTimeout(doIt, 160); return; }
      if (++n < 80) setTimeout(wait, 60);
    })();
  }

  /* ---------------- left nav section ---------------- */
  function navOpen() { return get(NAV_KEY, "1") === "1"; }
  function renderNav() {
    var side = document.getElementById("sidenav"); if (!side) return;
    var sec = side.querySelector("#bm-nav");
    if (!sec) {
      sec = document.createElement("section");
      sec.id = "bm-nav"; sec.className = "bm-nav";
      var brand = side.querySelector(".side-brand");
      if (brand) brand.insertAdjacentElement("afterend", sec); else side.prepend(sec);
    }
    if (!side.querySelector(".hub-back")) {
      var hb = document.createElement("a");
      hb.className = "hub-back"; hb.href = "index.html";
      hb.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>Solutions Hub';
      side.prepend(hb);
    }
    sec.innerHTML = '<button type="button" class="bm-head" aria-haspopup="dialog">' +
      '<span class="bm-head-l">' + I.bm + "Bookmarks</span>" +
      '<span class="bm-count">' + bms.length + "</span>" + I.arrow + "</button>";
  }

  /* ---------------- drawer ---------------- */
  var drawer = document.createElement("div");
  drawer.className = "bm-drawer";
  drawer.hidden = true;
  drawer.innerHTML =
    '<div class="bm-scrim" data-close></div>' +
    '<aside class="bm-panel" role="dialog" aria-modal="true" aria-labelledby="bm-title">' +
    '<header class="bm-top"><div><h2 id="bm-title">Bookmarks</h2><p class="bm-sub"></p></div>' +
    '<button type="button" class="bm-x" data-close aria-label="Close bookmarks">' + I.x + "</button></header>" +
    '<div class="bm-search"><input type="search" placeholder="Search your bookmarks" aria-label="Search bookmarks"></div>' +
    '<div class="bm-body"></div></aside>';
  var drawerOpen = false, lastFocus = null, query = "";
  function renderDrawer() {
    if (drawer.hidden) return;
    drawer.querySelector(".bm-sub").textContent = bms.length ? bms.length + (bms.length === 1 ? " saved passage" : " saved passages") : "Nothing saved yet";
    var body = drawer.querySelector(".bm-body"), q = query.trim().toLowerCase();
    var items = bms.filter(function (b) { return !q || (b.text + " " + b.section + " " + b.chapter).toLowerCase().indexOf(q) !== -1; });
    if (!bms.length) {
      body.innerHTML = '<div class="bm-none"><span class="bm-none-i">' + I.bm + "</span><p><b>No bookmarks yet</b></p><p>Select any passage while reading and choose <b>Bookmark</b>, or press <kbd>B</kbd>.</p></div>";
      return;
    }
    if (!items.length) { body.innerHTML = '<div class="bm-none"><p>No bookmarks match “' + esc(query) + "”.</p></div>"; return; }
    var groups = {}, order = [];
    items.forEach(function (b) { var k = b.slug; if (!groups[k]) { groups[k] = []; order.push(k); } groups[k].push(b); });
    order.sort(function (a, b) { return (groups[a][0].chapterNo || "99").localeCompare(groups[b][0].chapterNo || "99"); });
    body.innerHTML = order.map(function (k) {
      var g = groups[k];
      return '<section class="bm-group"><h3>' + esc((g[0].chapterNo ? g[0].chapterNo + " · " : "") + g[0].chapter) + "</h3>" +
        g.map(function (b) {
          return '<article class="bm-card" data-id="' + b.id + '">' +
            '<button type="button" class="bm-go"><blockquote>' + esc(b.text) + "</blockquote>" +
            '<span class="bm-meta"><span class="bm-ed">' + edLabel(b.ver || "modules") + "</span>" + esc(b.section) + " · " + ago(b.created) + "</span></button>" +
            '<div class="bm-acts"><button type="button" data-copy aria-label="Copy text">' + I.copy + '</button><button type="button" data-del aria-label="Delete bookmark">' + I.trash + "</button></div></article>";
        }).join("") + "</section>";
    }).join("");
  }
  function openDrawer() {
    hideTip();
    lastFocus = document.activeElement;
    drawer.hidden = false;
    drawerOpen = true;
    renderDrawer();
    requestAnimationFrame(function () { drawer.classList.add("open"); });
    setTimeout(function () { var i = drawer.querySelector("input"); if (i) i.focus(); }, 60);
    document.documentElement.style.overflow = "hidden";
  }
  function closeDrawer() {
    if (!drawerOpen) return;
    drawerOpen = false;
    drawer.classList.remove("open");
    document.documentElement.style.overflow = "";
    setTimeout(function () { if (!drawerOpen) drawer.hidden = true; }, 260);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  drawer.addEventListener("input", function (e) { if (e.target.matches("input")) { query = e.target.value; renderDrawer(); } });
  drawer.addEventListener("keydown", function (e) {
    if (e.key !== "Tab") return;
    var f = drawer.querySelectorAll("button,input"), a = f[0], z = f[f.length - 1];
    if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
    else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
  });
  drawer.addEventListener("click", function (e) {
    if (e.target.closest("[data-close]")) { closeDrawer(); return; }
    var card = e.target.closest(".bm-card"); if (!card) return;
    var b = bms.filter(function (x) { return x.id === card.dataset.id; })[0]; if (!b) return;
    if (e.target.closest("[data-del]")) { removeBm(b); return; }
    if (e.target.closest("[data-copy]")) {
      (navigator.clipboard ? navigator.clipboard.writeText(b.text) : Promise.reject()).then(function () { toast("Copied"); }, function () { toast("Couldn't copy"); });
      return;
    }
    if (e.target.closest(".bm-go")) go(b);
  });
  function removeBm(b) {
    var idx = bms.indexOf(b); if (idx < 0) return;
    bms.splice(idx, 1); saveBms();
    toast("Bookmark removed", "Undo", function () { bms.splice(idx, 0, b); saveBms(); });
  }

  /* ---------------- toast ---------------- */
  var tst = document.createElement("div");
  tst.className = "bm-toast"; tst.setAttribute("role", "status"); tst.setAttribute("aria-live", "polite");
  var tstT;
  function toast(msg, label, fn) {
    tst.innerHTML = "<span>" + esc(msg) + "</span>" + (label ? '<button type="button">' + esc(label) + "</button>" : "");
    var b = tst.querySelector("button");
    if (b) b.onclick = function () { tst.classList.remove("show"); fn(); };
    tst.classList.add("show");
    clearTimeout(tstT);
    tstT = setTimeout(function () { tst.classList.remove("show"); }, label ? 5000 : 2200);
  }

  /* ---------------- global clicks ---------------- */
  document.addEventListener("click", function (e) {
    var vb = e.target.closest(".ver [data-ver]");
    if (vb) { setVer(vb.dataset.ver); return; }
    if (e.target.closest(".bm-head")) { document.body.classList.remove("nav-open"); openDrawer(); return; }
    var it = e.target.closest(".bm-item");
    if (it) { var b = bms.filter(function (x) { return x.id === it.dataset.id; })[0]; if (b) go(b); return; }
    if (e.target.closest(".bm-all")) { openDrawer(); return; }
  });

  /* ---------------- keep in sync with the app's renders ---------------- */
  function boot() {
    document.body.appendChild(tip);
    document.body.appendChild(drawer);
    document.body.appendChild(tst);
    var app = document.getElementById("app");
    var lastProse = null, pend = 0;
    var mo = new MutationObserver(function () {
      if (pend) return;
      pend = requestAnimationFrame(function () {
        pend = 0;
        if (!document.getElementById("bm-nav")) renderNav();
        mountSwitches();
        var p = prose();
        if (p !== lastProse) { lastProse = p; document.documentElement.dataset.renderedVer = ver(); hideTip(); paint(); }
      });
    });
    if (app) mo.observe(app, { childList: true, subtree: true });
    setInterval(mountSwitches, 700);
    syncSwitches();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
