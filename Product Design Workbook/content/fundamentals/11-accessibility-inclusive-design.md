Around the world, more than a billion people live with some form of disability, according to the World Health Organization. Add people with temporary injuries, older adults, people on old phones or slow connections, and anyone using a phone in bright sunlight, and "accessibility" stops sounding like a niche. It's simply designing for how people actually are.

This edition explains accessibility and inclusive design from the ground up: what they mean, the types of disability and the assistive technologies people use, the WCAG guidelines, accessible color, interaction and content, and how to test.

:::pull
Accessibility is not a feature for a few users. It's a quality of the product for everyone.
:::

## What accessibility means

- **Accessibility (often written a11y)** means people with disabilities can perceive, understand, navigate and interact with a product. It's often measured against standards like WCAG.
- **Inclusive design** is a broader approach: designing for the full range of human diversity, including ability, age, language, culture, gender, income and context.
- **Universal design** aims to make one design usable by as many people as possible, without special adaptation.

Accessibility sets the minimum bar; inclusive design aims higher.

### Why it matters

- **People:** it's about equal access to information and services.
- **Law:** many countries require digital accessibility (see the 2026 edition for current details).
- **Business:** more customers, better search visibility, better usability for everyone.
- **Quality:** accessible products are usually clearer and more robust.

### The curb-cut effect

Curb cuts (the ramps at sidewalk edges) were made for wheelchair users, but they help people with strollers, suitcases and bikes. Similarly, captions help people in noisy places, good contrast helps everyone in sunlight, and keyboard shortcuts help power users.

### Permanent to situational

Microsoft's inclusive design toolkit describes a helpful spectrum:[[ref:inclusive-microsoft]]

| | Permanent | Temporary | Situational |
| --- | --- | --- | --- |
| Touch | One arm | Arm injury | Holding a baby |
| See | Blind | Cataract | Bright sunlight |
| Hear | Deaf | Ear infection | Noisy place |
| Speak | Non-verbal | Laryngitis | Heavy accent |

Designing for the permanent case often helps many more people in the other columns.

## Disability and assistive tech

### Visual

Includes blindness, low vision, color vision deficiency and age-related vision changes.

**Assistive technologies and strategies:**

- **Screen readers** read on-screen content aloud or to a braille display: VoiceOver (Apple), TalkBack (Android), NVDA and JAWS (Windows).
- **Screen magnifiers** and browser zoom.
- **High contrast modes** and custom colors.

### Hearing

Includes deafness and hard of hearing. Needs: **captions** for video, **transcripts** for audio, and visual alternatives to sound alerts.

### Motor (physical)

Includes limited dexterity, tremors, paralysis and repetitive strain injury.

**Assistive technologies:** keyboard-only navigation, **switch devices** (one or two buttons), **voice control**, eye tracking, mouth sticks. Needs: full keyboard access, large targets, no time pressure and alternatives to complex gestures.

### Cognitive and neurological

Includes learning disabilities, dyslexia, ADHD, autism, memory issues and anxiety. Needs: clear language, consistent layouts, help with errors, fewer distractions and no unnecessary memory demands.

### Speech

Includes people who can't speak or are hard to understand. Needs: alternatives to voice-only interfaces.

## WCAG: the guidelines

### What WCAG is

The **Web Content Accessibility Guidelines (WCAG)** are published by the World Wide Web Consortium (W3C) and are the most widely used accessibility standard. The current version is **WCAG 2.2**.[[ref:wcag22]]

### POUR: the four principles

Everything in WCAG fits under four principles:

| Principle | Meaning | Examples |
| --- | --- | --- |
| **P**erceivable | People can perceive the content | Alt text, captions, contrast |
| **O**perable | People can operate the interface | Keyboard access, enough time, no seizure-causing flashes |
| **U**nderstandable | People can understand content and behavior | Clear language, predictable navigation, help with errors |
| **R**obust | Content works with many technologies, including assistive ones | Valid, semantic code |

### Levels of conformance

- **Level A:** the minimum; failing these blocks some users completely.
- **Level AA:** the standard most organizations and laws aim for.
- **Level AAA:** the highest; not required for whole sites but useful where possible.

### Key success criteria

| Criterion | Level | In plain language |
| --- | --- | --- |
| 1.1.1 Non-text content | A | Images have text alternatives |
| 1.2.2 Captions | A | Videos have captions |
| 1.3.1 Info and relationships | A | Structure (headings, lists, labels) is in the code |
| 1.4.1 Use of color | A | Color isn't the only way to convey meaning |
| 1.4.3 Contrast (minimum) | AA | Text contrast at least 4.5:1 (3:1 for large text) |
| 1.4.4 Resize text | AA | Text can zoom to 200% without breaking |
| 1.4.10 Reflow | AA | Works at narrow widths without horizontal scrolling |
| 1.4.11 Non-text contrast | AA | UI components and graphics at least 3:1 |
| 2.1.1 Keyboard | A | Everything works with a keyboard |
| 2.4.3 Focus order | A | Tab order is logical |
| 2.4.7 Focus visible | AA | You can see where keyboard focus is |
| 2.5.8 Target size (minimum) | AA | Targets at least 24×24 CSS pixels (new in 2.2) |
| 3.3.1 Error identification | A | Errors are clearly described |
| 3.3.2 Labels or instructions | A | Inputs have labels |
| 4.1.2 Name, role, value | A | Components expose what they are to assistive tech |

## Accessible color and contrast

### Contrast ratio

**Contrast ratio** compares the lightness of text and background, from 1:1 (no contrast) to 21:1 (black on white).

- Normal text: at least **4.5:1**.
- Large text (about 18pt, or 14pt bold): at least **3:1**.
- Interface components and meaningful graphics: at least **3:1**.

### Don't rely on color alone

About 1 in 12 men and 1 in 200 women have some form of color vision deficiency. Common types: **protanopia** and **deuteranopia** (red–green), and the rarer **tritanopia** (blue–yellow). Always combine color with something else: text, icons, patterns, underlines.

### Practical tips

- Check every text and background combination with a contrast checker.
- Make links distinguishable by more than color (underline them in body text).
- Use patterns or labels in charts, not just colors.
- Test designs in grayscale.

## Accessible interaction

### Keyboard accessibility

Many people use only a keyboard (or devices that act like one).

- **Tab** moves focus forward; **Shift+Tab** backward.
- **Enter** activates links and buttons; **Space** activates buttons and checkboxes.
- **Arrow keys** move within components like menus, tabs and radio groups.
- **Escape** closes dialogs and menus.

Every interactive element must be reachable and usable by keyboard, in a logical order.

### Focus indicators

The **focus indicator** shows which element is selected. Never remove it without replacing it with something equally visible. A clear outline or ring with good contrast works well.

### Target size

Small targets are hard to hit for people with motor impairments (and anyone on a bumpy bus). WCAG 2.2 sets a minimum of 24×24 CSS pixels; platform guidelines recommend larger, around 44 to 48, for touch.

### Motion and time

- Respect "reduce motion" settings.
- Avoid content that flashes more than three times per second.
- Let users pause, stop or hide moving content.
- Give enough time to read and act, or let users extend time limits.

### Accessible forms

- Every input has a visible **label**.
- Required fields are clearly marked (not only with color).
- **Errors** are described in text, near the field, with how to fix them.
- Group related fields (like address) with clear headings.
- Don't clear the form when there's an error.

### Accessible components

Complex components (tabs, menus, dialogs, accordions, comboboxes) have expected keyboard behavior and roles. The **ARIA Authoring Practices Guide** documents these patterns.[[ref:aria-apg]]

### ARIA basics

**ARIA** (Accessible Rich Internet Applications) is a set of attributes that add accessibility information to HTML, such as `aria-label` (a name), `aria-expanded` (open or closed) and roles like `role="dialog"`. The first rule of ARIA: **if a native HTML element does the job, use it instead**.[[ref:using-aria]] Incorrect ARIA can make things worse.

## Accessible content

### Text alternatives

- Informative images need **alt text** that describes their purpose.
- Decorative images should have **empty alt text** (`alt=""`) so screen readers skip them.
- Complex images (charts) need a longer description or data table.
- Icon-only buttons need an accessible name ("Close," "Search").

### Headings and structure

Screen reader users often navigate by headings. Use one `h1` per page and nest headings logically (h2, then h3), based on structure, not size.

### Links and buttons

Link text should make sense out of context: "Download the 2026 report" rather than "Click here."

### Plain language

- Short sentences and common words.
- Explain or avoid jargon.
- One idea per paragraph.
- Use lists for steps.
- Front-load important information.

### Media

Provide captions for video, transcripts for audio, and audio descriptions when important visual information isn't spoken.

## Testing accessibility

### Automated testing

Tools like axe, WAVE and Lighthouse scan pages for common issues (missing alt text, low contrast, missing labels). They're fast but catch only part of the problems.

### Manual testing

- **Keyboard test:** unplug the mouse and complete key tasks.
- **Zoom test:** zoom to 200% and check that nothing breaks.
- **Screen reader test:** try VoiceOver or NVDA on key flows.
- **Color test:** check contrast and view in grayscale.
- **Content review:** headings, labels, link text, alt text.

### Testing with disabled users

The most valuable testing involves people with disabilities using their own assistive technology. Recruit through disability organizations, pay fairly and make sessions accessible.

### In the design process

| Stage | What to do |
| --- | --- |
| Research | Include people with disabilities |
| Design | Check contrast, target sizes, focus states, structure |
| Handoff | Annotate headings, labels, focus order, alt text |
| Build | Use semantic HTML and accessible components |
| Test | Automated + manual + user testing |
| Maintain | Fix issues and monitor regularly |

## Beyond disability

- **Age:** larger text options, clear navigation, patient flows.
- **Language and literacy:** plain language, translations, icons with labels.
- **Culture:** names, dates, addresses, images and colors vary across cultures.
- **Gender and identity:** inclusive options and language in forms.
- **Economic situation:** older devices, slow connections, limited data.
- **Context:** one-handed use, noise, glare, distraction.

## Key terms

| Term | Plain meaning |
| --- | --- |
| a11y | Short for accessibility (11 letters between a and y) |
| Assistive technology | Tools like screen readers, magnifiers and switches |
| Screen reader | Software that reads content aloud or to braille |
| WCAG | The main web accessibility standard |
| POUR | Perceivable, Operable, Understandable, Robust |
| AA conformance | The standard most organizations aim for |
| Contrast ratio | Lightness difference between text and background |
| Focus indicator | Visual marker of keyboard focus |
| ARIA | Attributes that add accessibility information |
| Alt text | Text alternative for images |
| Curb-cut effect | Accessibility features that help everyone |

## Quick check

:::check Knowledge check 1
A design uses a red border only to show an input error. What's the accessibility issue, and the fix?
---
Color alone conveys meaning, which fails people with color vision deficiencies and screen reader users. Add a text error message near the field (and an icon), and make sure it's announced to assistive technology.
:::

:::check Knowledge check 2
What should the alt text be for a purely decorative background image?
---
Empty alt text (`alt=""`), so screen readers skip it.
:::

:::check Knowledge check 3
Name three quick manual accessibility tests you can do yourself.
---
Navigate key tasks with only the keyboard; zoom to 200% and check the layout; check color contrast (and view in grayscale); try a screen reader on a key flow.
:::

## Further reading

:::reading Sources to open next
- W3C, *WCAG 2.2*.[[ref:wcag22]]
- W3C, *ARIA Authoring Practices Guide* and *Using ARIA*.[[ref:aria-apg]][[ref:using-aria]]
- Microsoft, *Inclusive Design*.[[ref:inclusive-microsoft]]
- WebAIM, *The WebAIM Million*, for the most common real-world failures.[[ref:webaim-million]]
- Sarah Horton and Whitney Quesenbery, *A Web for Everyone* (book).
:::
