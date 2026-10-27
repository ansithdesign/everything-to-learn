Here's a test. Open the last screen you designed and ask yourself: *could someone generate this in thirty seconds?*

In 2026 the honest answer is often yes. Anyone with an AI tool can now produce a clean, tidy, perfectly aligned interface. NN/g's 2026 outlook puts it bluntly: decent-looking UI is getting cheap, so surface polish is easy to replace, and what's harder to automate is taste, context, critical thinking and judgment.[[ref:nng-state-ux-2026]]

That doesn't make visual design less important. It changes what you're being paid for. Nobody needs you to nudge pixels. They need you to look at five good-looking options and know *which one is right for this product and why*, then direct the work until it is.

So this chapter isn't a tour of visual design basics (you know those). It's about turning what you already do by feel into something you can explain, repeat and teach. We'll go through the five skills in your list: composition, typography, color, layout and icons. For each: how the pros think, what's shifting in 2026, and one thing to try.

:::pull
Production is getting cheap. Judgment is not. Learn the craft well enough to direct it, critique it and defend it.
:::

:::definition Craft vs. taste
**Craft** is executing: aligning, spacing, building a palette that holds up. **Taste** is judging: knowing which of five acceptable options is right here, and being able to say why. AI is catching up on craft fast. Taste is the part you train on purpose.
:::

## 1. Composition: hierarchy

Most "this looks off" feedback is really "I don't know where to look." Fixing that isn't about styling. It's about deciding what matters most, then making the screen agree with you.

### The five-pass method

Try this on any screen, yours or inherited.

1. **Write the job.** One sentence: what is the person here to do? For a billing page: *"See what I owe and pay it."* If you can't write it, the problem isn't visual yet.
2. **Rank everything.** Sort every element into three tiers. Tier 1 is what they came for (one or two things, max). Tier 2 supports the decision. Tier 3 is everything else: metadata, help, rarely used controls.
3. **Give weight to match the rank.** Use the levers in order of strength: size and position, then weight and contrast, then space, then color, then containers. Color comes late because it works best when everything else is quiet.
4. **Squint and subtract.** Blur the screen. What stands out? Now remove one thing (a border, a divider, a shadow) and look again. Keep going until it gets worse, then put the last thing back.
5. **Stress it.** Long names, empty values, errors, another language. A hierarchy that only survives perfect sample data isn't one.

:::example Before and after: an invoices table (hypothetical)
**Before.** A 14px title. Six equally loud filter dropdowns. Two filled buttons ("Export" and "New invoice") fighting each other. Bold column headers, borders on every row, and five saturated status colors. Everything is Tier 1, so nothing is.

**After, in order.** (1) Title up to 28px. (2) One filled button, "New invoice"; "Export" becomes a text button. (3) Six dropdowns collapse into search plus one "Filters" control. (4) Row borders go; 12px of padding and one hairline under the header do the work. (5) Headers become small, regular and muted. (6) Status becomes a dot plus a label, with color only for *overdue*. (7) Amounts right-aligned with tabular numerals.

Nothing was added. About twenty lines of decoration were removed, and the overdue rows now pop because they're the only colored thing on the page.
:::

### Grouping rules to work by

- **2:1 spacing.** Space *between* groups should be roughly double the space *inside* a group. A label 4px above its input means the gap between fields should be 16 to 24px. This one rule fixes a huge share of "messy" forms.
- **Labels belong to the nearest control.** A label equidistant from two fields is ambiguous.
- **Look-alikes promise the same behavior.** If two items look identical and one navigates while the other opens a menu, you've made a false promise.
- **Containers are noise.** Every card or border is something the eye has to process. Add one only when spacing and alignment can't do the job.

:::warning Common trap: more emphasis, not less
When something feels unclear, the instinct is to make it bolder, bigger or more colorful. Nine times out of ten the fix is to *demote everything else*. If you want one thing to stand out, make the others quieter.
:::

### Density is a decision

| Context | What people need | So you design for |
| --- | --- | --- |
| Checkout, onboarding | Confidence, few mistakes | Low density, one decision per view, big targets |
| Daily pro tools (inbox, console) | Speed, scanning | Compact rows, keyboard shortcuts, persistent context |
| Data analysis | Comparing many values | Dense tables, aligned numbers, minimal decoration |
| Reading | Comprehension | Narrow column, generous line height |

If your users vary a lot, offer a density setting and define it in tokens (say 40px rows vs 32px) so the whole system shifts together.

### 2026 shift: sameness

Shared component libraries and generative tools pull everyone toward the same safe look. NN/g notes UI is getting cheaper to produce partly *because* of design systems and standard components, so differentiation moves elsewhere.[[ref:nng-state-ux-2026]] Your edge is specificity: a point of view about density, tone and behavior that fits one product.

Meanwhile, platform styles are moving. Apple introduced Liquid Glass in 2025 (a translucent material across iOS 26 and sibling platforms) and Google introduced Material 3 Expressive.[[ref:apple-hig-materials]][[ref:material3]] Early reaction to Liquid Glass focused on legibility over busy backgrounds. As I understand Apple's guidance (confirm it in the HIG), glass belongs to the floating control layer, not to content, and you should test legibility over real backgrounds in light and dark.

:::exercise Try it: rebuild five, critique five (a weekend)
Pick five interfaces you admire. Recreate each from scratch, measuring spacing and type as you go. Then write three sentences per screen: the first, second and third read; one decision you wouldn't have made; one you'd steal. Recreating forces you to see decisions you'd otherwise skim past.
:::

## 2. Typography: a system

Type is most of your interface, so a small typographic system does more than any amount of tweaking.

### Build the scale first

Choose a handful of sizes related by a ratio (1.2 or 1.25 are friendly) and name them by role, not by pixel.

| Step | Ratio 1.2 | Ratio 1.25 | Typical role |
| --- | --- | --- | --- |
| -1 | 13.3px | 12.8px | Caption, helper text |
| 0 | 16px | 16px | Body |
| 1 | 19.2px | 20px | Lead, small heading |
| 2 | 23px | 25px | Section heading |
| 3 | 27.6px | 31.3px | Page heading |
| 4 | 33.2px | 39.1px | Display |

Dense tools usually compress this (12, 13, 14, 16, 20, 24, 32). The right scale is the smallest one that gives you the roles you need. Ship it as tokens so nobody types a raw size.

```css
:root {
  --text-caption: 0.8125rem;  /* 13px */
  --text-body:    1rem;       /* 16px */
  --text-h3:      1.5rem;     /* 24px */
  --text-h1:      2.5rem;     /* 40px */
  --leading-tight: 1.15;
  --leading-body:  1.6;
}
```

### The numbers worth memorizing

- **Line length:** about 45 to 75 characters for reading. Longer and the eye gets lost on the return.
- **Line height:** around 1.5 to 1.7 for body, 1.1 to 1.3 for headings. Big text needs tighter leading because the gaps look bigger.
- **Heading spacing:** roughly twice as much space above a heading as below, so it clearly belongs to what follows.
- **Weights:** separate levels with weight (regular, medium, semibold) before adding more sizes. Avoid thin weights for small text.
- **Numbers in data:** use tabular figures (`font-variant-numeric: tabular-nums`) and right-align numeric columns, or comparisons turn into guesswork.

### Fluid type, with the math

Fluid type scales smoothly between a minimum and maximum. To go from 16px at a 320px viewport to 18px at 1,280px:

- Slope = (18 − 16) ÷ (1280 − 320) = 0.2083vw
- Intercept = 16 − (0.002083 × 320) = 15.333px ≈ 0.958rem
- Result: `font-size: clamp(1rem, 0.958rem + 0.208vw, 1.125rem);`

Quick check: at 320px you get 15.333 + 0.667 = 16px; at 1,280px, 15.333 + 2.667 = 18px. Keep the bounds and intercept in `rem` so users' text-size settings still work, which WCAG expects (text resizable to 200 percent, SC 1.4.4).[[ref:wcag22]]

:::warning Common trap: fixed-height text boxes
WCAG 2.2 also needs content to reflow at 320 CSS px (SC 1.4.10) and survive user text-spacing overrides (SC 1.4.12: line height 1.5, paragraph spacing 2×, letter spacing 0.12em, word spacing 0.16em).[[ref:wcag22]] Fixed heights on text containers are what break first. Let things grow, and test at 200% zoom.
:::

### Choosing a typeface

Skip "I like it." Score candidates on: legibility at 12 to 14px (can you tell I, l and 1 apart?), weights available, tabular figures, language coverage, personality, file size, and licensing. For product UI a single neutral sans with a good range is usually enough. If you're unsure, use the system font and put brand expression into color, spacing and voice. Custom fonts also cost bytes and layout shift: load only what you use, prefer a variable font, use `font-display: swap`, and pick a fallback with similar metrics.

### 2026 shift: type tech

- One **variable font** file gives you many weights and widths, which fits fluid type neatly.
- CSS keeps getting better at wrapping (`text-wrap: balance` for headings, `text-wrap: pretty` for paragraphs). Support moves quickly, so check Baseline before relying on anything.[[ref:webdev-baseline]]
- **Localization is typography.** Translations often run 20 to 40 percent longer; CJK scripts need more line height; Arabic and Hebrew mirror the layout. Use logical properties (start/end, not left/right) and test with pseudo-localized strings.

:::exercise Try it: stress-test your type (half a day)
Write your type tokens, then break them four ways: 200% zoom, WCAG text-spacing overrides, strings 40% longer, and a right-to-left layout. Fix the rule behind each failure, not just the screen.
:::

## 3. Color: roles and contrast

If you pick colors as swatches, you'll fight them forever. Pick them as **roles** and the rest gets easier.

### Think in roles

Name colors by what they do (`text-muted`, `surface-raised`, `accent`, `danger`), not what they look like (`gray-200`, `blue-600`). Roles let you theme, add dark mode and rebrand without redesigning every screen. A solid product palette is mostly neutrals, one accent for actions and location, and status colors that are always paired with an icon or label. In the Design Tokens format a role looks like this (shape only; tools vary):[[ref:dtcg-2025]]

```json
{ "color": { "text": {
    "primary": { "$type": "color", "$value": "{color.neutral.900}" },
    "muted":   { "$type": "color", "$value": "{color.neutral.600}" } } } }
```

### Contrast with real numbers

WCAG 2 wants 4.5:1 for normal text, 3:1 for large text and for UI components (SC 1.4.3 and 1.4.11), and never color alone to carry meaning (SC 1.4.1).[[ref:wcag22]] Intuition fails here, so check. I computed these against white:

| Color | Ratio | Text (4.5:1)? | UI or large (3:1)? |
| --- | --- | --- | --- |
| #1e2533 (near-black) | 15.3:1 | Yes | Yes |
| #5b6478 (muted gray) | 5.9:1 | Yes | Yes |
| #767676 (lightest neutral gray that passes) | 4.5:1 | Barely | Yes |
| #9ca3af | 2.5:1 | **No** | **No** |
| #e4e4e7 (common divider) | 1.3:1 | No | No |
| #16a34a (typical "success" green) | 3.3:1 | **No** | Yes |
| #15803d (darker green) | 5.0:1 | Yes | Yes |
| #d97706 (amber) | 3.2:1 | **No** | Yes |
| #b45309 (darker amber) | 5.0:1 | Yes | Yes |

Three takeaways. Popular mid-tones (bright green, amber) often fail as text on white, so you need darker variants for text. A decorative divider can sit below 3:1, but a border that *defines* an input is a component and needs 3:1. And ratios depend on the pair: a color that passes on white can fail on a tinted surface, so always check the real background.

:::warning Common trap: "APCA is replacing WCAG 2 contrast"
It isn't, as of this writing. The W3C's WCAG 3.0 draft (dated 10 September 2026) says WCAG 3 does not replace WCAG 2 and still marks the contrast method as to be determined.[[ref:wcag3-draft]] Adrian Roselli's April 2026 summary says APCA was removed from the July 2023 draft and nothing is decided; his advice is to keep meeting WCAG 2 and document any exception with legal advice.[[ref:roselli-wcag3]] Build to WCAG 2.2; treat APCA as an extra check.
:::

### Build scales in OKLCH

HSL lies about brightness: two colors with the same HSL lightness can look wildly different. **OKLCH** (lightness, chroma, hue) keeps lightness perceptually even, so step 600 of every hue has similar contrast. That makes systematic scales practical, and the Design Tokens spec supports OKLCH and Display P3 directly.[[ref:dtcg-2025]]

A workable recipe: pick a hue and chroma; set 10 lightness steps (say 97% down to 25%); reduce chroma at the extremes; check contrast against *your actual surfaces*; then map steps to roles.

```css
:root {
  --accent-100: oklch(0.95 0.04 260);
  --accent-600: oklch(0.55 0.20 260);
  --accent-700: oklch(0.48 0.20 260);
  --color-accent-solid: var(--accent-600);
  --color-accent-text:  var(--accent-700);
  --color-accent-subtle: var(--accent-100);
}
```

Those values show the structure; always verify real ratios with a checker.

### Dark mode, status, data

- **Dark mode is its own palette.** Use dark grays (not pure black), build elevation with *lighter* surfaces, reduce accent saturation a bit, and recheck contrast. Inverting a light palette looks bad.
- **Status colors** need an icon and label, and not too many of them. Keep the normal state neutral so exceptions stand out.
- **Color blindness:** roughly 8 percent of men of Northern European descent have some form, mostly red-green. Differences in *lightness* survive best. If the design still works in grayscale, it works for most people.
- **Text over images or glass** is the classic failure. Put text on a solid or scrimmed panel and test against the worst-case background.
- **Charts:** use 5 to 8 distinct categorical colors, a steady lightness ramp for sequential data, and gray out everything except what you want people to notice. Label directly when you can.

:::exercise Try it: audit a palette (1 to 2 hours)
List every text and component color in a product and every surface it sits on. Compute a ratio for each pair in a spreadsheet. Count failures by role. Fix the roles, not the screens, then re-run and compare.
:::

## 4. Layout and grids

### One spacing scale

Pick a base unit (4 or 8px) and allow only a few steps.

| Token | Value | Use |
| --- | --- | --- |
| space-1 | 4px | Icon to label |
| space-2 | 8px | Inside compact controls |
| space-3 | 12px | Control padding |
| space-4 | 16px | Default gap, card padding |
| space-5 | 24px | Between groups |
| space-6 | 32px | Between sections |
| space-7 | 48px | Page padding |

Two habits make it stick: use the same token for the same relationship every time, and separate *inset* (padding inside a container) from *stack* (gaps between siblings) in your naming. That stops the bug where changing one padding silently shifts a gap somewhere else.

### Grids, intrinsically

On a 1,200px area with a 12-column grid and 24px gutters, each column is (1200 − 11×24) ÷ 12 = 78px. Nine columns is 894px; three is 282px. You rarely compute this by hand since CSS Grid does it, but the numbers expose designs that only work at one width.

```css
/* responsive cards, no breakpoints */
.cards { display: grid; gap: var(--space-4);
         grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr)); }

/* app shell: nav | main | optional panel */
.shell { display: grid; min-height: 100vh;
         grid-template-columns: 17rem minmax(0, 1fr); }
.shell:has(.panel) { grid-template-columns: 17rem minmax(0, 1fr) 20rem; }
```

`minmax(0, 1fr)` is the quiet hero: it stops wide content (a table, a long word) from blowing out the column.

### Container-aware components

Instead of asking "how wide is the screen?", ask "how much room does *this component* have?"

```css
.card-wrap { container-type: inline-size; }
.card { display: grid; gap: var(--space-3); }
@container (min-width: 28rem) { .card { grid-template-columns: 8rem 1fr; } }
```

The same card goes two-column in a wide area and stacks in a sidebar. When you spec a component now, list its *container* width ranges the way you used to list breakpoints. (Container style queries reached Baseline Newly available in May 2026 per web.dev's digest.[[ref:webdev-baseline]])

### Tables that work

- **Align** text left, numbers right, and only fixed-width things (checkboxes, icons) centered.
- **Row height:** about 32px compact, 40 default, 48 to 56 comfortable; offer a density toggle for heavy users.
- **Separate** with whitespace and a single hairline under the header before you reach for a full grid of borders.
- **Sticky header and first column** for large data.
- **Never** hide the only way to do something behind hover; it fails on touch and keyboard.
- **States:** empty, loading (skeleton rows that match the layout), error, "no results" (offer to clear filters).
- **Small screens:** scroll horizontally with a sticky identifier column if people compare; use stacked cards if they look things up.

### Forms and small screens

One column beats two for almost every form. Labels go above fields, errors next to or under them (and linked in code). On phones, remember thumb reach (primary actions low), keyboards that cover half the screen, safe-area insets, and WCAG 2.2's 24 by 24 CSS px minimum target (platform guidance for touch is bigger, often 44 to 48).[[ref:wcag22]]

:::exercise Try it: spec a layout in words and code (2 hours)
Take a dense screen. Write its grid, spacing tokens, container width ranges and what changes at each. Build it with Grid and one container query. Test at 320, 768, 1,280 and 1,920px, with longer text and at 200% zoom. Note what your spec missed.
:::

## 5. Icons and illustration

### Icons as a family

If you maintain a set, specify these so they behave like one:

| Property | Typical spec |
| --- | --- |
| Grid | 24px canvas, 2px safe margin |
| Stroke | One weight (1.5 or 2px), one cap and join style |
| Corners | One or two radii, used consistently |
| States | Outline by default, filled for active |
| Sizes | 16, 20, 24, 32; redraw detail rather than scaling |

Prefer familiar metaphors (magnifier, house, gear), test unfamiliar ones with five people ("what does this mean?"), and add a label when they fail. Icon-only buttons need an accessible name, and a visible tooltip on hover *and* keyboard focus. Even a 20px icon should have a target of at least 24 by 24 CSS px.

```html
<button type="button" aria-label="Delete invoice 1042">
  <svg aria-hidden="true" focusable="false" width="20" height="20">…</svg>
</button>
```

**Icon, label or both?** Universal actions (close, search) can be icon-only. Most other actions want both. Navigation wants labels first. Status always wants icon plus text.

### Art direction

For product work, spot illustrations (empty states, onboarding, confirmations) earn their keep. A one-page art direction brief should answer: what job the image does, exact palette, line weight and shape language, perspective, how people are depicted, tone (three words and three anti-words), and five dos and don'ts. For empty states let the drawing clarify, but put the value in the words: what will appear here, why it matters, what to do first.

### 2026 shift: generated art

Generating one image is trivial; generating a hundred that feel like one brand is hard. The skill becomes **art direction**: define the style tightly, then reject what drifts. Set rules early: where generated assets are allowed, log the tool, prompt, date and license for each, decide when you disclose, review for stereotypes, and always write alt text that conveys function. Also avoid defaulting to sparkles for anything AI; NN/g notes users are tired of low-value AI features, and generic AI iconography signals exactly that.[[ref:nng-state-ux-2026]]

:::exercise Try it: write a style guide a model could follow (2 hours)
Write a one-page art direction guide, use it to generate ten images, and count how many you'd ship. Revise the guide until at least seven of ten work. The guide is the deliverable.
:::

## Putting it together

Here's how the five skills combine on a B2B "Access and permissions" page. It starts with an 18px title, bordered cells, six role badges in six colors, two filled buttons, light-gray icon-only row actions (#9ca3af, 2.5:1) and 56px rows showing 9 users.

1. **Composition.** Job: find a person and change their access. One filled button ("Invite"); export goes in a menu; add search.
2. **Type.** Title to 28px; table text 14px at 1.4; headers 13px, muted; numbers right-aligned and tabular.
3. **Color.** Six badge colors become one neutral style, with a tint for "Admin" only (the risky role). Row icons move from 2.5:1 to a muted text color at 5.9:1, with visible focus.
4. **Layout.** 44px rows (32px compact option), no cell borders, sticky header; now 13 rows fit instead of 9.
5. **Icons.** "Edit" and "Remove" get labels; the rest hide in a menu, with names like "Remove Dana Whitfield".
6. **States.** Empty, loading, no results, error, each designed.
7. **Check.** Contrast audit, keyboard-only pass, 200% zoom, 320px width (cards below 640px).

No new library, no new style. The gains came from hierarchy, density and contrast. That's the pattern you'll see in most good redesigns.

## Where to go deeper

- **Accessibility as craft.** Contrast, target size, focus visibility, reflow and motion are visual decisions. WCAG 2.2 added minimum target size (SC 2.5.8) and focus-not-obscured (SC 2.4.11). Chapter [[ch:11]] goes deep.
- **Front-end literacy.** If you can write `clamp()` and a grid template, you can spec precisely. Figma's State of the Designer 2026 reports designers' participation in development rising, though I only saw that through secondary coverage of a gated report.[[ref:figma-sotd-2026]] See [[ch:10]].
- **A weekly critique habit.** Write one short critique a week. It's the fastest way to turn taste into something explainable.

## Your next four weeks

| Week | Focus | You'll have |
| --- | --- | --- |
| 1 | Rebuild five interfaces, critique them | Five short write-ups |
| 2 | Type scale and an OKLCH palette | Tokens in CSS, light and dark, with a contrast table |
| 3 | One dense table and one container-query component | A prototype tested at three widths |
| 4 | Redesign one real screen end to end | Before and after with a decision log |

## Quick check

:::check Knowledge check 1
A stakeholder wants a translucent glass panel behind body text because a competitor has one. What do you check first?
---
Legibility and contrast over the *range* of backgrounds that can appear behind the text, in light and dark, against WCAG ratios (4.5:1 for normal text), not just one screenshot. Also whether the content sits in the functional layer or the content layer (platform guidance, as I understand it, reserves glass for floating controls and navigation; confirm in the HIG). If it can't be reliably legible, propose a solid or lightly tinted surface and explain the cost.
:::

:::check Knowledge check 2
A teammate says "WCAG 3 uses APCA now, so we can drop 4.5:1." What's wrong?
---
As of the 10 September 2026 Working Draft, WCAG 3 does not replace WCAG 2 and its contrast method is still undecided; APCA was removed from the July 2023 draft. WCAG 2.2 is what you can be held to, so keep meeting it and treat APCA as an additional check, with documented decisions.
:::

## Further reading

:::reading Sources to open next
- NN/g, *State of UX 2026* for the taste-and-judgment argument.[[ref:nng-state-ux-2026]]
- W3C, *WCAG 2.2* for the normative contrast, target-size, reflow and text-spacing criteria.[[ref:wcag22]]
- W3C *WCAG 3.0 draft* and Adrian Roselli's April 2026 summary for the contrast status.[[ref:wcag3-draft]][[ref:roselli-wcag3]]
- Apple HIG (materials), Material 3 and web.dev Baseline for platform guidance.[[ref:apple-hig-materials]][[ref:material3]][[ref:webdev-baseline]]
:::
