Try this for five minutes: unplug your mouse, open your own product and complete your main task using only the keyboard.

Most designers who do this for the first time find the same things. Focus disappears. Tab order jumps around. A dropdown can be opened but not closed. A beautiful modal traps you with no way out. Then they turn on a screen reader and find out their "Submit" button is announced as "button" and their icon-only controls are announced as nothing at all.

That experience is how a lot of people use your product every day. The 2026 WebAIM Million analysis of one million home pages found automatically detectable WCAG 2 failures on 95.9 percent of them (up from 94.8 percent the year before), with 56.1 detected errors per page on average.[[ref:webaim-million]] The industry isn't getting better by default.

I made accessibility its own chapter, as you suggested. It covers implementation, accessible color and accessible interaction, then the legal picture in 2026, testing and inclusive design beyond disability. (This isn't legal advice; confirm obligations with qualified counsel for your product and markets. Facts were checked October 2026.)

:::pull
Accessibility isn't a layer you add at the end. It's a set of design constraints that, applied early, make the product better for everyone and cheaper to build.
:::

## 1. Why it matters

### A spectrum, not a niche

Accessibility helps people with **permanent** disabilities (a person who is blind), **temporary** ones (a broken arm) and **situational** ones (bright sunlight, a noisy room, a baby in your arms). Microsoft's inclusive design materials describe this spectrum, and the principle that solving for people with disabilities often produces designs that serve everyone.[[ref:inclusive-microsoft]] Captions, keyboard access, clear language and strong contrast help many people who'd never call themselves disabled.

### The legal picture

Rules vary by country and sector and are changing. Points below mix primary and secondary sources; confirm details for your case.

- **United States, ADA Title II (state and local governments).** The DOJ rule requires web content and mobile apps, including contractor-provided content, to meet **WCAG 2.1 Level AA**. ADA.gov lists compliance dates of **26 April 2027** for entities with a population of 50,000 or more and **26 April 2028** for smaller entities and special districts, following an interim final rule in April 2026 that extended the earlier deadlines.[[ref:ada-title-ii]] Private businesses are generally covered through other provisions and case law, and website lawsuits are common; that area is separate and unsettled.
- **European Union, European Accessibility Act.** Directive (EU) 2019/882 set accessibility requirements for a range of products and services (e-commerce, banking services, e-books and more), applying from **28 June 2025**. Commentary I found says services already on the market have a transition until 2030, which I didn't verify in the legal text. The Directive sets functional requirements; the standard commonly used to show conformity, EN 301 549, draws on WCAG, so check which WCAG version your market's edition references.[[ref:eaa-directive]]
- **Elsewhere:** Section 508 for US federal agencies, Canada's and Ontario's rules, the UK Equality Act and public sector regulations, and more. If you ship internationally, ask legal which apply.
- **WCAG 2.2 remains the practical baseline.** WCAG 3.0 is a working draft that says it doesn't replace WCAG 2.[[ref:wcag3-draft]] Build to WCAG 2.2 AA and follow the legal reference your markets name.

:::warning Common trap: accessibility overlays
Widgets sold as a one-line "accessibility fix" claim to repair a site automatically. Accessibility professionals widely criticize them, and they can't fix underlying structure, labels or interaction problems. I believe US regulators have acted against at least one vendor over such claims, but I haven't verified that. Don't rely on an overlay for compliance.
:::

## 2. WCAG in practice

WCAG is organized under four principles, **POUR**: **Perceivable**, **Operable**, **Understandable**, **Robust**. Success criteria are graded A, AA and AAA, and most laws target AA.[[ref:wcag22]]

### What WCAG 2.2 added

| Criterion | Level | What it asks |
| --- | --- | --- |
| 2.4.11 Focus Not Obscured (Min) | AA | A focused element isn't entirely hidden by sticky headers or overlays |
| 2.5.7 Dragging Movements | AA | Anything done by dragging has a non-drag alternative |
| 2.5.8 Target Size (Minimum) | AA | Targets at least 24 by 24 CSS pixels, with exceptions |
| 3.2.6 Consistent Help | A | Help appears in a consistent place |
| 3.3.7 Redundant Entry | A | Don't make people re-enter information already provided |
| 3.3.8 Accessible Authentication (Min) | AA | No cognitive test (like transcribing characters) to log in |

### Common failures

The 2026 WebAIM Million found these on the share of home pages shown: low-contrast text (83.9 percent), missing image alt text (53.1), missing form labels (51), empty links (46.3), empty buttons (30.6) and missing document language (13.5). It also reported that 82.7 percent of pages used ARIA and that pages with ARIA averaged 59.1 errors against 42 for pages without.[[ref:webaim-million]] That shows association, not that ARIA *causes* errors, but it matches the old guidance: incorrect or unnecessary ARIA makes things worse, and the first rule of ARIA is to use a native HTML element if one exists.[[ref:using-aria]]

Notice how many of these are design and content decisions: contrast, labels, link and button names, alt text. They're cheap to prevent early and expensive to fix late.

## 3. Implementation

### Semantics first

Assistive tech reads the page's **accessibility tree**, built from HTML semantics. A native `button`, a real `label`, a proper heading outline and landmarks (`main`, `nav`) give you structure for free, and bad structure can't be repaired with decoration. See [[ch:10]].

### Keyboard and focus

- Everything a mouse can do must work by keyboard, in a logical order.
- **Focus must be visible** with enough contrast, and not hidden by sticky elements (SC 2.4.11).
- Manage focus deliberately in dialogs, menus and when content changes: move it in, trap it while a modal is open, return it when closed.
- Provide a skip link for repeated navigation.
- The ARIA Authoring Practices Guide documents keyboard behavior and roles for complex widgets like tabs, comboboxes and dialogs.[[ref:aria-apg]]

### Names, roles and states

Every interactive control needs an **accessible name** (what it is), a **role** (what kind of thing) and **state** (expanded, selected, invalid). Icon-only buttons need a name. Fields need labels, and errors need to be linked to their fields and announced.

### Content, forms, motion

- **Content:** plain language, descriptive headings, link text that makes sense out of context ("View invoice 1042," not "Click here"), meaningful alt text, captions and transcripts, a declared page language.
- **Forms:** visible labels, clear instructions, errors that say what to do and are linked to the field, no data loss on error, no needless re-entry (SC 3.3.7).
- **Motion and timing:** respect the reduced-motion preference, avoid flashing, give control over moving content (see [[ch:02]]), allow enough time or let people extend limits.

:::exercise Try it: audit one flow by keyboard and screen reader (2 hours)
Unplug the mouse and complete a core task by keyboard, noting every place focus is lost, hidden or illogical. Then turn on a screen reader (VoiceOver on Mac or iOS, NVDA on Windows, TalkBack on Android) and do it again with the screen off. List every problem with its WCAG criterion and a fix.
:::

## 4. Accessible color

[[ch:01]] covers the fundamentals. The accessibility essentials:

- **Text contrast:** 4.5:1 for normal text, 3:1 for large text (SC 1.4.3). **Non-text:** 3:1 for UI components and meaningful graphics (SC 1.4.11).
- **Never color alone** to convey meaning (SC 1.4.1). Add an icon, label, pattern or position.
- **Test the states,** not just the default: hover, focus, disabled, selected, error, and text over images or gradients.
- **Test themes:** dark mode, high contrast and forced-colors modes.
- **Consider color vision deficiency** in charts and status. Use differences in lightness, direct labels and patterns.
- **Bake it into the system:** define text, surface and border roles that are pre-checked in both themes, so teams can't pick failing combinations by accident (see [[ch:03]]).
- **Know the standards situation:** WCAG 2.2 ratios are what you can be held to; WCAG 3's contrast method is still undecided.[[ref:wcag3-draft]][[ref:roselli-wcag3]]

## 5. Accessible interaction

[[ch:02]] covers patterns. The accessibility lens adds:

- **Choose patterns with known accessible behavior** and implement them as documented, rather than inventing new ones.
- **Make targets big enough and spaced** (WCAG 2.2: 24 by 24 CSS pixels minimum; platform guidance for touch is larger).
- **Offer alternatives to gestures** like dragging, multi-finger or path-based actions.
- **Give feedback in more than one way** (visual, text, and sometimes sound or vibration) and announce dynamic changes to assistive tech.
- **Avoid time limits and interruptions** that disadvantage people who need more time.
- **Reduce cognitive load:** consistent patterns, clear language, progressive disclosure, no needless memory demands (SC 3.3.7, 3.3.8).
- **Respect system preferences** for text size, motion, contrast and color scheme.

### Accessible AI interfaces

New interaction types create new barriers:

- **Streaming text** can overwhelm a screen reader if every token is announced. Announce completion or let people read the result when ready.
- **Chat interfaces** need keyboard access, logical focus and clear labels, and shouldn't hide actions in unlabeled icons.
- **Approvals and stop controls** must be reachable and operable without a mouse, with state announced.
- **Generated content** may lack alt text or structure. If you present it, you're responsible for it.
- **Voice and multimodal input** helps many and excludes others, so offer more than one way.

:::exercise Try it: annotate a design for accessibility (2 hours)
Take a screen and add heading levels, landmarks, accessible names for every control, tab order, focus states, error messaging, motion behavior and contrast checks. Give it to an engineer and ask which annotations changed how they'd build it.
:::

## 6. Testing

No single method is enough.

| Method | Catches | Misses |
| --- | --- | --- |
| Automated checks (linters, scanners, CI) | Structural problems: missing labels, contrast failures, invalid ARIA | Most problems of meaning, flow and usability |
| Manual checks (keyboard, zoom, reflow, reduced motion) | Focus, order, resizing, operability | Experience with assistive tech |
| Screen reader testing | Names, structure, announcements, flow | Wider usability |
| Testing with disabled people | The real experience | Needs recruitment, budget and care |

Automated tools are valuable (especially in CI), and the WebAIM data shows the same few errors recur widely. But they're the floor, not the target.

**Make it part of the process:** check contrast and target sizes in design; run automated checks and component tests in build; do manual keyboard and screen reader passes before release; keep a feedback channel and audit regularly after release; include disabled participants in research (see [[ch:04]]), compensate them fairly and plan accessible materials and sessions.

## 7. Inclusive design

Standards are necessary but not sufficient. Inclusive design asks who is excluded by the assumptions in the product.

- **Language and reading level:** plain language helps non-native speakers, people with cognitive differences and everyone in a hurry. Design for translation and longer text.
- **Culture and context:** names, addresses, dates, units, payment methods, imagery and metaphors vary. Avoid one default.
- **Neurodiversity:** reduce needless stimulation, give control over motion and sound, make structure predictable, avoid dense, unstructured content.
- **Age:** larger text, clear targets and forgiving flows serve older users and everyone else.
- **Connectivity and devices:** low bandwidth, older and shared devices. Performance is accessibility (see [[ch:10]]).
- **Safety:** consider how features could be misused or harm vulnerable people (location sharing, notifications, reminders of difficult events).
- **Bias in AI:** models can perform worse for some groups or languages. Test across them and make failures recoverable (see [[ch:12]]).

:::framework Ask before you ship
Who might be unable to perceive this? Operate it? Understand it? Who might be harmed? Who isn't in our research? What happens on a poor connection, small screen, noisy place, second language? Can the person recover, ask for help or choose another way?
:::

## Case: fixing a modal

Here's a very common component, and what "accessible" actually involves. The original: a div overlay with a close icon, opened by a styled div that says "Edit profile."

**What's wrong (found with a keyboard and a screen reader):**

| Problem | Effect |
| --- | --- |
| The trigger is a `div`, not a `button` | Can't be reached or activated by keyboard; not announced as a control |
| The modal appears but focus stays behind it | Keyboard users keep tabbing through the page *under* the overlay |
| No role or name | A screen reader doesn't announce "dialog" or what it's for |
| Close icon has no accessible name | Announced as "button" or nothing |
| Escape doesn't close it | Keyboard users can get stuck |
| Focus doesn't return after closing | The person loses their place |
| Gray helper text is 2.8:1 | Fails contrast |
| Error text is red only | Color alone conveys the error |

**The fix, in order:**

```html
<button type="button" id="edit-btn">Edit profile</button>

<div role="dialog" aria-modal="true" aria-labelledby="dlg-title" hidden>
  <h2 id="dlg-title">Edit profile</h2>
  <label for="name">Full name</label>
  <input id="name" type="text" aria-describedby="name-err" />
  <p id="name-err" role="alert">Enter your full name.</p>
  <button type="button" aria-label="Close dialog">×</button>
  <button type="submit">Save changes</button>
</div>
```

1. Use a real `button` to open it.
2. On open, **move focus** into the dialog (to the first field or the heading) and **keep it inside** until it closes.
3. Give it `role="dialog"`, `aria-modal="true"` and a name via `aria-labelledby`.
4. Make **Escape** close it, and **return focus** to the trigger.
5. Give the icon button an **accessible name**.
6. Fix text contrast to 4.5:1 and add an **icon and text** to errors.
7. Link the error to its field (`aria-describedby`) and announce it.

Modern browsers also provide a native `dialog` element with built-in focus handling, which is often the simplest accurate answer. The lesson: accessible components are built from the right *semantics*, plus a handful of *behaviors* you can write down, test and reuse.

## A 15-minute review

Do this on any screen before it goes to development:

1. **Zoom to 200 percent.** Does anything overlap or get cut off? (WCAG 1.4.4, 1.4.10)
2. **Tab through it.** Is focus always visible and in a logical order? (2.4.3, 2.4.7, 2.4.11)
3. **Check contrast** of text, icons, borders on inputs and focus rings. (1.4.3, 1.4.11)
4. **Turn the color off** (grayscale). Is anything only communicated by color? (1.4.1)
5. **Read it as a list:** headings, links, buttons. Do the names make sense out of context?
6. **Look at forms:** labels visible, errors specific, no re-entering known info. (3.3.x)
7. **Check targets:** at least 24 by 24 CSS px, with space between them. (2.5.8)
8. **Check motion:** does it respect reduced motion? Is anything flashing or auto-playing?
9. **Ask:** what happens with a screen reader, voice control, a switch device?

## Writing alt text

| Image type | What to write |
| --- | --- |
| Informative photo | Describe what matters in context: "A nurse checks a patient's blood pressure." |
| Icon that is the only content of a button | Describe the action: "Delete invoice" (not "trash can") |
| Decorative image | Empty alt (`alt=""`) so it's skipped |
| Chart or diagram | Short alt plus a longer description or table nearby |
| Logo linking home | "Company name, home" |
| Image of text | Avoid; if unavoidable, repeat the text |

Good alt text answers "what would I need to know if I couldn't see this, *in this context*?" Don't start with "image of" and don't repeat the surrounding text.

## Common accessibility myths

- **"Our product is B2B so it doesn't matter."** Employees with disabilities use B2B tools, and many contracts require accessibility.
- **"Automated tools cover it."** They catch some structural issues, not meaning or usability.
- **"It makes design ugly."** Constraints often improve clarity and hierarchy.
- **"We'll do it in a later phase."** Retrofitting is far costlier than building it in.
- **"A few users won't notice."** Situational limits affect almost everyone sometimes.
- **"ARIA fixes things."** Native HTML first; ARIA only to fill gaps, and wrong ARIA does harm.

## Where to go deeper

- **Assistive tech fluency:** learn the basics of at least one screen reader, plus magnifiers, voice control and switch devices.
- **Alt text and plain language** as content skills.
- **Specs and annotations** as part of handoff (see [[ch:09]]).
- **Legal and policy literacy:** know which rules apply, what a conformance report is and how to talk to legal and procurement.
- **Advocacy:** accessibility is often won by someone explaining cost and benefit clearly (see [[ch:07]] and [[ch:08]]).

## Your next four weeks

| Week | Focus | You'll have |
| --- | --- | --- |
| 1 | WCAG 2.2 AA for design, plus a keyboard and screen reader audit | A one-page checklist and an audit with criteria and fixes |
| 2 | A color system with checked roles in two themes | A tokenized palette with a contrast table |
| 3 | Accessible components: names, roles, states, focus | Annotated specs for three components |
| 4 | An accessible AI interface and a research plan with disabled participants | A design, a test plan and a recruitment plan |

## Quick check

:::check Knowledge check 1
A teammate proposes an accessibility overlay widget to meet the regulation. What do you say?
---
Overlays can't fix underlying structure, labeling, keyboard and interaction problems, and accessibility professionals widely criticize them. The reliable route is building to WCAG 2.2 AA through semantics, tested components and manual and assistive-technology testing, and confirming the applicable legal standard with counsel. An overlay may just give false confidence.
:::

:::check Knowledge check 2
Your automated scanner reports zero errors on a screen. Is it accessible?
---
Not necessarily. Automated tools detect only a portion of issues: they can't judge whether alt text is meaningful, focus order is logical, labels make sense, errors help or the flow is usable. Test by keyboard and screen reader, check reflow and zoom and, where possible, test with people who use assistive tech.
:::

## Further reading

:::reading Sources to open next
- WebAIM, *The WebAIM Million*.[[ref:webaim-million]]
- W3C, *WCAG 2.2* and the *ARIA Authoring Practices Guide*.[[ref:wcag22]][[ref:aria-apg]]
- ADA.gov, the Title II web rule page for current dates.[[ref:ada-title-ii]]
- Microsoft, *Inclusive Design*.[[ref:inclusive-microsoft]]
- W3C, *Using ARIA* for when and when not to use ARIA.[[ref:using-aria]]
:::
