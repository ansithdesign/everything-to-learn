#!/usr/bin/env python3
"""Build the site: product-design.html (the book) and index.html (the Solutions Hub).

Run:  python3 build.py

To add a chapter: write content/modules/NN-name.md, add an entry to
"chapters" in content/book.json (and any new sources to "references"),
then run this script. It rewrites only the regions between the
/*CH_START*/ and /*DATA_START*/ markers inside product-design.html.
"""
import json
import re
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).parent
HTML = ROOT / "product-design.html"
HUB_TEMPLATE = ROOT / "hub.template.html"
HUB_OUT = ROOT / "index.html"
HUB_DATA = ROOT / "content" / "hub.json"
BOOK = ROOT / "content" / "book.json"
MODS = ROOT / "content" / "modules"
FUND = ROOT / "content" / "fundamentals"

# The app's content loader, patched to read the edition chosen in the switcher.
BN_OLD = 'function Bn(n){if(n.status!=="written"||!n.file)return null;if(!vn.has(n.slug)){const e=Uo[`./content/modules/${n.file}.md`];if(!e)return null;const t=No(e);t.html=t.html.replaceAll("__SLUG__",n.slug),vn.set(n.slug,t)}return vn.get(n.slug)}'
BN_NEW = 'function Bn(n){if(n.status!=="written"||!n.file)return null;const V=window.__pdVer?window.__pdVer():"modules",K=n.slug+"|"+V;if(!vn.has(K)){const e=Uo[`./content/${V}/${n.file}.md`]||Uo[`./content/modules/${n.file}.md`];if(!e)return null;const t=No(e);t.html=t.html.replaceAll("__SLUG__",n.slug),vn.set(K,t)}return vn.get(K)}'


def skip_string(s, i):
    """Return index just past the string/template literal starting at s[i]."""
    q = s[i]
    i += 1
    while i < len(s):
        c = s[i]
        if c == "\\":
            i += 2
            continue
        if q == "`" and c == "$" and s[i + 1:i + 2] == "{":
            i = match(s, i + 1)  # skip ${...}
            continue
        if c == q:
            return i + 1
        i += 1
    raise ValueError("unterminated string")


def match(s, i):
    """s[i] is an opening bracket; return index just past its match."""
    pairs = {"[": "]", "{": "}", "(": ")"}
    stack = [pairs[s[i]]]
    i += 1
    while stack:
        c = s[i]
        if c in "\"'`":
            i = skip_string(s, i)
            continue
        if c in pairs:
            stack.append(pairs[c])
        elif c == stack[-1]:
            stack.pop()
        i += 1
    return i


def js_template(text):
    return "`" + text.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${") + "`"


def js(obj):
    return json.dumps(obj, ensure_ascii=False)


def main():
    book = json.loads(BOOK.read_text(encoding="utf-8"))
    s = HTML.read_text(encoding="utf-8")

    backup = ROOT / "_archive" / "product-design.original.html"
    if not backup.exists():
        shutil.copy(HTML, backup)

    # ---- chapter markdown ---------------------------------------------
    # Two editions: content/modules (2026 edition) and content/fundamentals.
    entries = []
    for ch in book["chapters"]:
        md = (MODS / (ch["file"] + ".md")).read_text(encoding="utf-8")
        entries.append(js("./content/modules/%s.md" % ch["file"]) + ":" + js_template(md))
        fund = FUND / (ch["file"] + ".md")
        if fund.exists():
            entries.append(js("./content/fundamentals/%s.md" % ch["file"]) + ":" + js_template(fund.read_text(encoding="utf-8")))
    ch_block = "/*CH_START*/const CH_MD={" + ",".join(entries) + "}/*CH_END*/"

    if "/*CH_START*/" in s:
        a = s.index("/*CH_START*/")
        b = s.index("/*CH_END*/") + len("/*CH_END*/")
    else:
        a = s.index("const sa=`")
        i = a + len("const ")
        while True:  # sa=`..`,aa=`..`,...
            i = s.index("=`", i) + 1
            i = skip_string(s, i)
            m = re.match(r",[A-Za-z_$][\w$]*=`", s[i:])
            if not m:
                break
            i += 1
        b = i + 1 if s[i] == ";" else i
    s = s[:a] + ch_block + s[b:]

    # ---- content map ---------------------------------------------------
    s = re.sub(r"Uo=Object\.assign\(\{.*?\}\),vn=new Map", "Uo=Object.assign(CH_MD),vn=new Map", s, count=1, flags=re.S)

    # ---- parts and chapters -------------------------------------------
    chapters = []
    for ch in book["chapters"]:
        chapters.append({
            "id": ch["id"], "slug": ch["slug"], "part": book["parts"][ch["part"]],
            "title": ch["title"], "subtitle": ch["subtitle"], "description": ch["description"],
            "objectives": ch["objectives"], "difficulty": ch["difficulty"],
            "prerequisites": ch["prerequisites"], "related": ch["related"],
            "status": "written", "file": ch["file"],
        })
    data_block = "/*DATA_START*/ts=%s,F=ts,ie=%s,/*DATA_END*/" % (js(book["parts"]), js(chapters))
    if "/*DATA_START*/" in s:
        a = s.index("/*DATA_START*/")
        b = s.index("/*DATA_END*/") + len("/*DATA_END*/")
    else:
        a = s.index('ts=["Part I')
        b = s.index("Ee=n=>ie.find")
    s = s[:a] + data_block + s[b:]

    # ---- references, glossary and the rest of the old datasets ---------
    refs = []
    for r in book["references"]:
        refs.append(r)
    gloss = book["glossary"]
    if "/*DATA2_START*/" in s:
        a = s.index("/*DATA2_START*/")
        b = s.index("/*DATA2_END*/")
        seg = s[a + len("/*DATA2_START*/"):b]
        ii = re.search(r"Ii=(\[.*?\]),Pn=", seg, re.S).group(1)
        us = re.search(r"_=(\[.*?\]),dn=", seg, re.S).group(1)
        end = b + len("/*DATA2_END*/")
    else:
        a = s.index("_t=[{key:")
        j = a + 3
        j = match(s, j)                     # end of _t array
        k = s.index("Ii=[", j); ii_end = match(s, k + 3); ii = s[k + 3:ii_end]
        k = s.index(",_=[", ii_end) + 3; us_end = match(s, k); us = s[k:us_end]
        # Ta ends the chain with ];
        t = s.index(",Ta=[", us_end) + 4
        t_end = match(s, t)
        end = t_end
    block = ("/*DATA2_START*/_t=%s,Dn=%s,Ii=%s,Pn=[],ka=[],_=%s,dn=[],xa=[],Ta=[]/*DATA2_END*/"
             % (js(refs), js(gloss), ii, us))
    s = s[:a] + block + s[end:]

    # ---- home page copy -----------------------------------------------
    s = s.replace(
        "A research-backed field guide for moving from strong execution to senior product design judgment, applied to complex enterprise SaaS.",
        "A reading book for staying skilled in UX and product design through 2026 and beyond: what to keep, what is changing, and what to add.")
    s = re.sub(
        r'<section class="notice"><strong>Status of this build\.</strong>.*?</section>',
        '<section class="notice"><strong>How to read this book.</strong> Each chapter separates fundamentals from what is changing in 2026, and ends with practice. Anything that depends on the date was checked in October 2026. Sources marked <em>not verified</em> were not opened for this book; follow the link before relying on them. See <a href="#/references">References</a>.</section>',
        s, flags=re.S)

    s = s.replace("planned in total)", "in the book so far)")
    s = s.replace(
        "Each chapter separates fundamentals from what is changing in 2026, and ends with practice.",
        "Every chapter comes in two editions. <em>Fundamentals</em> explains the topic from the ground up; the <em>2026 edition</em> covers what is changing now. Switch any time from the bar at the top of a chapter.")

    # ---- edition-aware loader + features (switcher, bookmarks) ---------
    s = s.replace(BN_OLD, BN_NEW)
    css = (ROOT / "features.css").read_text(encoding="utf-8")
    css_block = "/*FEATURES_CSS*/\n" + css + "\n/*END_FEATURES_CSS*/"
    if "/*FEATURES_CSS*/" in s:
        a = s.index("/*FEATURES_CSS*/"); b = s.index("/*END_FEATURES_CSS*/") + len("/*END_FEATURES_CSS*/")
        s = s[:a] + css_block + s[b:]
    else:
        k = s.index("</style>")
        s = s[:k] + css_block + "\n" + s[k:]
    fund_meta = {ch["slug"]: ch["fundamentals"] for ch in book["chapters"] if ch.get("fundamentals")}
    feat = ("window.__pdFund=" + js(fund_meta) + ";\n" + (ROOT / "features.js").read_text(encoding="utf-8")).replace("</script", "<\\/script")
    js_block = '<script id="pd-features">' + feat + "</script>"
    if '<script id="pd-features">' in s:
        a = s.index('<script id="pd-features">'); b = s.index("</script>", a) + len("</script>")
        s = s[:a] + js_block + s[b:]
    else:
        k = s.rindex("</body>")
        s = s[:k] + js_block + "\n" + s[k:]
    HTML.write_text(s, encoding="utf-8")
    build_hub(book)
    print("built:", len(book["chapters"]), "chapters,", len(refs), "references,", len(gloss), "glossary terms")


def build_hub(book):
    """Write index.html (the Solutions Hub) from hub.template.html + content/hub.json."""
    hub = json.loads(HUB_DATA.read_text(encoding="utf-8"))
    for t in hub["topics"]:
        if t.get("book") != "product-design":
            continue
        words = 0
        for ch in book["chapters"]:
            for d in (MODS, FUND):
                f = d / (ch["file"] + ".md")
                if f.exists():
                    words += len(f.read_text(encoding="utf-8").split())
        parts = []
        for i, name in enumerate(book["parts"]):
            n = sum(1 for ch in book["chapters"] if ch["part"] == i)
            parts.append({"name": name.split(": ", 1)[-1], "count": n})
        t["stats"] = {
            "chapters": len(book["chapters"]),
            "minutes": round(words / 220),
            "sources": len(book["references"]),
            "editions": 2,
            "editionNames": ["Fundamentals", "2026 edition"],
            "parts": parts,
            "first": book["chapters"][0]["title"],
            "titles": {ch["slug"]: ch["title"] for ch in book["chapters"]},
        }
    h = HUB_TEMPLATE.read_text(encoding="utf-8")
    a = h.index("/*HUB_DATA*/") + len("/*HUB_DATA*/")
    b = h.index("/*END_HUB_DATA*/")
    h = h[:a] + js(hub).replace("</", "<\\/") + h[b:]
    h = h.replace("<!--OWNER-->", hub.get("owner", ""))
    HUB_OUT.write_text(h, encoding="utf-8")


if __name__ == "__main__":
    sys.exit(main())
