Tools don't make you a good designer, but clumsy tool use can make a good designer slow, inconsistent and hard to work with. And prototyping, done well, is one of the most powerful things a designer can do: it turns ideas into something people can react to before anyone writes production code.

This edition explains the foundations: the main kinds of design tools, how to work well in a design tool like Figma, the different kinds and fidelities of prototypes, and how to hand off work to engineers.

:::pull
A prototype is a question you can hold in your hand. The better the question, the more useful the answer.
:::

## The design tool landscape

| Category | What it's for | Examples |
| --- | --- | --- |
| Interface design | Designing screens, components and systems | Figma, Sketch, Penpot |
| Prototyping | Interactive simulations | Figma prototyping, ProtoPie, Framer |
| Whiteboarding | Workshops, mapping, brainstorming | FigJam, Miro, Mural |
| Research | Testing, recording, analysis | Maze, Lookback, Dovetail |
| Motion | Animation design | After Effects, Rive, Lottie |
| Handoff and docs | Specs, design system docs | Figma Dev Mode, Storybook, zeroheight |
| Code-based tools | Building real interfaces | Code editors, Framer, Webflow |

Figma has become the most common interface design tool in product teams, so the examples below use its terms. The principles apply to most tools.

## Working well in a design tool

### Frames and layout

- **Frames** are containers (screens, sections, components). Unlike simple groups, frames can have their own layout rules, clipping and constraints.
- **Constraints** control how elements behave when a frame resizes (pin to left, stretch, center).
- **Auto layout** arranges children automatically in a row or column with consistent spacing and padding, like CSS Flexbox. When content changes (longer text, extra items), the layout adjusts.

Auto layout is the single biggest skill that separates fast, flexible files from fragile ones.

### Components and instances

- A **component** is a reusable master element (for example a button).
- An **instance** is a copy that stays linked to the component; when the component changes, instances update.
- **Variants** group related versions of a component (primary/secondary, small/large, default/hover/disabled) into one component set.
- **Component properties** let you change text, swap icons or toggle parts of an instance without detaching it.

### Styles and variables

- **Styles** store reusable colors, text styles, effects and grids.
- **Variables** store values (colors, numbers, strings, booleans) that can have different **modes**, such as light and dark themes. Variables map closely to design tokens in code.

### Libraries

A **library** shares components, styles and variables across files and teams. Updating the library lets every file adopt changes.

### File organization

A clean file structure helps everyone:

- **Cover page:** name, status, owner, last updated.
- **Working pages:** explorations and drafts.
- **Ready for development:** final, annotated designs.
- **Archive:** old ideas, kept separate.
- **Clear naming:** "Checkout / Payment / Error" instead of "Frame 237."

### Efficiency habits

- Learn keyboard shortcuts for common actions.
- Use plugins for repetitive tasks (renaming, content, accessibility checks).
- Build with real content to find problems early.
- Use the system's components instead of drawing from scratch.

## Prototyping

### What a prototype is

A **prototype** is a simulation of a product or feature, made to explore, communicate or test an idea before building the real thing. Prototypes can be as simple as paper sketches or as realistic as coded apps.

### Why prototype

- **Explore** ideas quickly and compare options.
- **Communicate** how something should work, which is often clearer than a static screen or a document.
- **Test** with users to find problems early, when changes are cheap.
- **Align** stakeholders around a shared picture.
- **Check feasibility** with engineers.

### Fidelity

**Fidelity** describes how closely a prototype resembles the final product. It has dimensions: visual polish, interactivity, content realism and data.

| Fidelity | What it looks like | Strengths | Weaknesses |
| --- | --- | --- | --- |
| Low (paper, sketches) | Rough drawings | Very fast; invites honest feedback on the concept | Can't test detailed interactions or visuals |
| Medium (wireframes, click-throughs) | Simple gray layouts with links | Tests structure and flow | Less realistic; people may miss subtle issues |
| High (polished interactive) | Looks and feels real | Tests usability, visual design, details | Slower; people comment on polish, not concept |
| Coded | Real code, often with sample data | Realistic behavior, data and performance | Most effort; can be mistaken for "nearly done" |

**Rule of thumb:** use the lowest fidelity that can answer your question.

### Types of prototypes

| Type | Description | Good for |
| --- | --- | --- |
| Paper prototype | Hand-drawn screens moved by a person | Very early concepts |
| Clickable wireframe | Linked wireframes | Flows and navigation |
| Interactive mockup | Realistic screens with transitions | Usability testing, stakeholder demos |
| Wizard of Oz | A human secretly performs the "system" responses | Testing complex or AI features before building |
| Concierge | The service is delivered manually to real customers | Testing value before automating |
| Fake door | A button or link for a feature that doesn't exist yet, to measure interest | Testing demand |
| Coded prototype | Built in code | Complex interactions, real data |
| Video prototype | A video showing the experience | Communicating a vision |

### Prototyping interactions

Most design tools let you connect screens with:

- **Triggers:** on click/tap, hover, drag, after a delay, key press.
- **Actions:** navigate to, open overlay, swap, scroll to, go back.
- **Animations:** instant, dissolve, move in, push, smart animate (animates matching layers between screens).

Advanced prototyping uses **variables and conditions** (for example, a cart count that increases), letting prototypes behave more like real products.

### Prototyping tips

- **Decide the question first.** "Can users find the export option?" drives a very different prototype than "Does the brand feel premium?"
- **Prototype the critical path,** not every screen.
- **Use realistic content.** Fake text hides real problems.
- **Include errors and edge cases** when they matter.
- **Tell participants what's real** and what isn't.

## Developer handoff

### What handoff means

**Handoff** is giving engineers what they need to build the design correctly. It's really an ongoing collaboration, not a one-time delivery.

### What engineers need

| Item | Why it matters |
| --- | --- |
| Final designs for all screens | The baseline |
| All states | Empty, loading, error, disabled, success, hover, focus |
| Responsive behavior | How layouts change at different widths |
| Interactions and animations | What happens, with timings |
| Content rules | Real text, maximum lengths, truncation |
| Spacing, type and color | Using tokens and system components |
| Assets | Icons and images in the right formats |
| Accessibility notes | Focus order, labels, roles, contrast |
| Edge cases | Long names, no data, errors, permissions |
| Acceptance criteria | What "done correctly" means |

### Specs and annotations

**Specs** describe measurements and properties; modern tools (like Figma's Dev Mode) let engineers inspect them directly. **Annotations** explain what can't be seen: behavior, logic, accessibility and edge cases. Good annotations answer questions before they're asked.

### Assets

- **SVG** for icons and simple illustrations (scalable, small).
- **PNG** for images that need transparency.
- **JPG / WebP / AVIF** for photos (smaller file sizes).
- Provide images at the right resolution (often 1x, 2x and 3x for different screens).

### The handoff process

1. **Walkthrough:** explain the design and flows to engineers, ideally before final polish.
2. **Questions and adjustments:** refine based on feasibility feedback.
3. **Documentation:** link designs, specs and decisions in one place.
4. **Build support:** stay available during development.
5. **Design QA:** review the built product against the design.
6. **Fix and iterate.**

### Design QA

**Design QA** (quality assurance) is checking the built product against the design before release. Check: layout and spacing, typography, colors, states, interactions, responsive behavior, accessibility and content. Log issues with screenshots and priority, and fix the important ones first.

## Key terms

| Term | Plain meaning |
| --- | --- |
| Frame | A container with its own layout rules |
| Auto layout | Automatic spacing and arrangement, like Flexbox |
| Component / instance | A reusable master and its linked copy |
| Variant | A version of a component |
| Variables / modes | Stored values with alternate sets, like light and dark |
| Library | Shared components and styles across files |
| Fidelity | How realistic a prototype is |
| Wizard of Oz | A human secretly simulates the system |
| Fake door | Measuring interest in a feature that doesn't exist yet |
| Handoff | Giving engineers what they need to build |
| Design QA | Checking the built product against the design |

## Quick check

:::check Knowledge check 1
You want to know whether users understand a new navigation structure. What fidelity of prototype do you build?
---
A low-to-medium fidelity click-through (or even a tree test) is enough. The question is about structure and labels, not visual polish.
:::

:::check Knowledge check 2
What's the difference between a component and an instance?
---
A component is the master definition. An instance is a linked copy used in designs; it updates when the component changes, and you can adjust its properties without breaking the link.
:::

:::check Knowledge check 3
Name four things a good handoff includes beyond the main screens.
---
Any four of: all states (empty, loading, error, disabled), responsive behavior, interaction details and timings, content rules, accessibility notes, edge cases, assets and acceptance criteria.
:::

## Further reading

:::reading Sources to open next
- Figma's announcements, to see where tools are heading.[[ref:figma-config-2026]]
- W3C, *ARIA Authoring Practices Guide* for accessibility notes in handoff.[[ref:aria-apg]]
- Todd Zaki Warfel, *Prototyping: A Practitioner's Guide*, and Carolyn Snyder, *Paper Prototyping* (books).
:::
