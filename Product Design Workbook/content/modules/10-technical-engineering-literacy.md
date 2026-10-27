You hand off a beautiful design. An engineer replies: "This table needs to load 50,000 rows. We'll have to paginate and drop the live sorting."

If you don't speak the language, you nod, or you push back and lose. If you do, you ask: "What if we sort on the server and load rows in chunks as you scroll? Would that keep the feel?"

That's the point of technical literacy. You're not trying to become an engineer. You're trying to understand the *material* your designs are made of well enough to design things that can be built, to talk to engineers as a peer, and to know what's cheap, expensive or impossible. The designers who get the best results from engineering are almost always the ones who respect its craft and constraints.

This chapter covers HTML and CSS, how the web works, developer workflow, design systems in code and responsive implementation, plus a layer designers didn't need a few years ago: how AI systems behave. (Handoff is in [[ch:09]]; responsive layout from the design side is in [[ch:01]] and [[ch:02]].)

:::pull
The goal isn't writing production code. It's closing the gap between what you intend and what ships.
:::

## 1. HTML and CSS

### HTML says what things *are*

HTML describes the meaning of content, not how it looks. That one idea is the foundation of accessibility, search and maintainability.

- **Semantic elements** (`header`, `nav`, `main`, `section`, `button`, `a`, `ul`, `table`, `form`, `label`) tell browsers and assistive tech what things are. A `button` is focusable, activates with Enter and Space and is announced as a button. A clickable `div` is none of these unless someone adds a lot of code.
- **Headings** form an outline that screen-reader users navigate by. Pick levels by structure, not by size.
- **Forms** need real labels linked to inputs, the right input types and native validation hooks.
- **Links go places; buttons do things.** Mixing them confuses people and breaks expectations.

### How CSS works

- **The box model:** every element is content, padding, border and margin. Most "why is there extra space?" questions are box-model questions.
- **The cascade and specificity:** several rules can hit one element; the browser resolves them by origin, specificity and order. Cascade layers help manage this at scale.
- **Layout:** Flexbox for one dimension, Grid for two. Understanding `gap`, alignment and how items grow and shrink explains most behavior.
- **Custom properties** (CSS variables) hold design tokens and enable themes.
- **Units:** `rem` and `em` scale with text size; `px` is fixed; `%`, `vw` and container units respond to surroundings. Picking units is an accessibility decision.
- **Logical properties** (inline/block, start/end) support right-to-left languages.
- **Modern features:** container queries, `clamp()`, `:has()`, nesting, view transitions. Support varies and moves fast, so check Baseline before designing around a feature.[[ref:webdev-baseline]]

:::definition The box model in one sentence
Every element is a rectangle made of content, padding, border and margin. Knowing which of the four a gap belongs to is half of CSS debugging.
:::

**How to learn it:** build small things. Recreate a page from a screenshot in plain HTML and CSS, no framework. Open dev tools on sites you admire and watch structure, computed styles and responses to resizing. MDN Web Docs is the standard reference.[[ref:mdn]]

:::exercise Try it: build one page by hand (a day)
Take a screen you designed. Build it with semantic HTML and CSS only: a real button, a labeled form, a heading outline, custom properties for tokens, Grid or Flexbox for layout. Resize from 320px up. Note what was easy and what you'd have specified differently in your design.
:::

## 2. How the web works

- **Client and server.** The browser asks a server for pages and data. Some work happens in the browser, some on the server.
- **APIs.** Apps fetch and send data through APIs. Data takes time, can fail, can be partial and can be huge. Design for loading, error and empty states (see [[ch:02]]).
- **State.** What the interface currently knows (typed form, selected filter, fetched data). Much of front-end engineering is managing state. A design that implies several screens share live state has a cost.
- **Rendering.** Pages can be assembled on the server, in the browser or both, which affects load time, search visibility and feel.
- **Performance.** Google's Core Web Vitals measure loading (Largest Contentful Paint), responsiveness (Interaction to Next Paint) and visual stability (Cumulative Layout Shift).[[ref:web-vitals]] Big images, heavy fonts and layout shift are often design decisions.
- **Components.** Modern front ends are built from components (as in React) that take inputs (props) and manage state. That maps neatly to design components, which is why shared structure and naming help.

### Questions to ask first

- Where does this data come from, and how long can it take?
- What happens when it fails, is empty or is huge?
- Is there an existing component for this?
- What would make this expensive, and is there a cheaper version with 80 percent of the value?
- Does it need to work offline, on slow networks and small devices?

## 3. Developer workflow

Knowing how work moves from idea to users helps you plan and collaborate.

- **Git and pull requests.** Changes are recorded in commits, grouped on branches and proposed through pull requests (PRs) that others review before merging. You don't need to be an expert, but being able to read a PR, comment and open a branch preview is a strong skill.
- **Environments.** Code moves through development, staging and production. Preview links per branch let you review the real build.
- **Code review.** Engineers review each other's changes; treat design review of a build the same way: specific, kind, tied to acceptance criteria.
- **Continuous integration.** Automated checks (tests, linting, accessibility checks, visual regression) run on every change. The more of your standards a machine can check, the less depends on memory.
- **Feature flags and staged rollouts** let teams ship behind a switch and turn features on gradually, which changes how you plan experiments.
- **Sprints and estimates.** Teams plan in short cycles with rough estimates. Estimates are uncertain, so early conversations help.
- **Definition of done:** agree what it means, including accessibility, states and design review.

### 2026: agents in the loop

AI coding agents now write, test and propose changes inside this workflow. Figma's Config 2026 announcements about code on the canvas and cloning a repository into a design tool point the same way.[[ref:figma-config-2026]] For you, more changes arrive as pull requests that were partly or wholly generated. Your review job: check behavior, states, accessibility and system consistency, and don't assume generated code is correct or accessible.

:::warning Common trap: generated code isn't reviewed code
Models produce plausible code with invented props, hardcoded values, missing states and accessibility problems (see [[ch:03]]). The 2026 WebAIM Million analysis found accessibility failures on 95.9 percent of home pages, and pages using ARIA averaged *more* errors than those without.[[ref:webaim-million]] That shows how easy it is to ship code that looks fine and isn't. Review generated output as rigorously as any other.
:::

:::exercise Try it: read a pull request (1 hour)
Ask an engineer for a recent PR that changes the interface. Read the description, files changed and preview. Write three comments: one question, one observation about behavior, one about accessibility or consistency. Ask which were useful and why.
:::

## 4. Design systems in code

[[ch:03]] covers design systems; here's the implementation side.

- **Tokens become CSS custom properties** (and platform variables). A pipeline like Style Dictionary transforms a token source into outputs per platform.[[ref:style-dictionary]]
- **Components have APIs.** A button takes props like variant, size and disabled; its states and accessibility are implemented once and reused.
- **Libraries are versioned and published.** Teams consume them as packages, so changes need release notes and deprecation paths.
- **Docs and tests live beside the code.** Tools like Storybook (a workshop for building and documenting components in isolation) are common, along with visual regression and accessibility tests.
- **Headless primitives and copy-in components** give you behavior and accessibility with your own styling, each with trade-offs in control, upgrades and maintenance.

Being able to open your design system's code, find a component and read how its props, tokens and states work is a high-value skill. It lets you propose changes that fit, spot drift and speak the same language as the team.

## 5. Responsive implementation

From the technical side:

- **Fluid layout** (Grid, Flexbox, `minmax`, `clamp`) so layouts adapt without a breakpoint per device.
- **Container queries** where components live in different-sized spaces.
- **Relative units** so text and layout respect user settings.
- **Real devices and emulation:** sizes, input types, reduced motion, forced colors, slow networks.
- **Input modes:** touch, keyboard and pointer don't behave alike (focus and hover especially).

## 6. How AI systems behave

To design AI features and use AI tools well, you need a working mental model. No maths required.

- **They generate probable output, not guaranteed facts.** The same prompt can give different answers, and quality varies by case. Design for variability, verification and recovery (see [[ch:02]]).
- **Context is limited.** A model works from what's in its context: the conversation, retrieved documents, instructions. If it isn't there, it can't reliably be used. A lot of AI product design is deciding what context to provide and showing people what the system is using.
- **Retrieval and grounding.** Many products fetch relevant documents and give them to the model to answer from (often called retrieval-augmented generation). It improves relevance and enables citations, and it's only as good as what's retrieved.
- **Latency and cost scale with use.** Longer inputs and outputs take more time and money. Streaming makes waiting feel shorter but changes how people read and act on partial answers.
- **Tools and agents.** Models can be given tools (search, code, internal systems) and chain steps, which introduces actions with side effects and the approval and recovery design from [[ch:02]].
- **Instructions are interface.** The text a product sends the model (system prompts, templates) is part of the design: it sets tone, limits and behavior. Designers should help write and test it (see [[ch:12]]).
- **Evaluation matters.** Behavior is judged across many inputs with a rubric, not by a demo (see [[ch:02]] and [[ch:04]]).

:::example One question for every AI feature review
"What exactly goes into the model for this request, where does it come from, and what does the person see of it?" The answer reveals most privacy, trust and quality issues.
:::

### Working with AI coding tools

- **Be specific:** give design system rules, tokens, components, accessibility needs and expected states.
- **Work in small steps** and review each one. Big generated changes are hard to check.
- **Ask for explanations,** and read the code that handles states and accessibility first.
- **Run the checks:** lint, tests, accessibility tools. Test by keyboard and with a screen reader.
- **Know your limit.** If you can't judge a piece of generated code, ask an engineer to review it before anyone relies on it.

:::exercise Try it: trace one AI feature end to end (1 hour)
Pick an AI feature you use or design. Write down what goes into the model, where each piece comes from, what the person sees of it, how long it takes, what it costs per use and what happens when it's wrong. Mark the three design decisions that depend on those answers.
:::

## Case: a card, design to code

Let's see what's in a small piece of UI so the terms stop being abstract. You designed a "project card": title, status badge, a short description and an action button. Here's the same thing in code.

```html
<article class="card">
  <header class="card__header">
    <h3 class="card__title">Q4 launch</h3>
    <span class="badge badge--success">On track</span>
  </header>
  <p class="card__body">Cross-team launch plan for the new billing flow.</p>
  <button type="button" class="btn btn--primary">Open project</button>
</article>
```

```css
.card {
  display: grid;
  gap: var(--space-3);
  padding: var(--space-inset-card);
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-lg);
}
.card__header { display: flex; justify-content: space-between; align-items: start; gap: var(--space-2); }
.card__title  { margin: 0; font-size: var(--text-h3); line-height: var(--leading-tight); }
.card__body   { margin: 0; color: var(--color-text-muted); }
```

**What a designer can learn from reading this:**

- It's an `article` with a heading, so screen-reader users can navigate by heading and the card has meaning.
- The action is a real `button`, so keyboard and focus work for free.
- Every visual value comes from a token (`--space-3`, `--color-surface-raised`). Change the token and every card changes.
- `display: grid; gap` is how spacing between children is handled, so no margin hacks.
- The header is `flex` with `justify-content: space-between` which is why the badge sits on the right, and `align-items: start` is why a two-line title doesn't stretch the badge.
- What's missing tells you things too: there's no hover or focus style here, no loading or empty state, and no rule for a title that's three lines long. Those are exactly the questions to take back to design.

## Debugging layout

When something looks wrong in the browser, ask in this order:

1. **Is it the right element?** Inspect it. Is that the box you think it is?
2. **Which rule won?** Dev tools show every rule that applies, and which were overridden.
3. **What's the box model doing?** Padding vs. margin vs. border, as the "box" diagram shows.
4. **What's the parent doing?** Most layout surprises come from the container's `display` (block, flex, grid) and size.
5. **What changes with viewport or content?** Resize, add a long word, set zoom to 200 percent.

Being able to answer these in a conversation ("it looks like the parent is `flex` without `min-width: 0`, so the text can't shrink") makes you a collaborator, not a spec-thrower.

## What engineers wish you knew

| Topic | The thing worth knowing |
| --- | --- |
| Data takes time | Show loading, handle failure, plan for partial data |
| Edge cases are the work | The happy path is maybe 30 percent of the code |
| "Small" changes can be huge | Moving a field might touch data models, permissions and tests |
| Consistency is cheaper | Reusing a component beats a one-off, for build and for maintenance |
| Performance is a feature | Big images and heavy animations cost real users on real devices |
| Browsers and devices differ | A thing that works in one place may break in another |
| Estimates are guesses | Ask early, and expect ranges, not promises |
| Reviews are a gift | Early feedback on a build is cheaper than late rework |

## A mini-glossary

| Term | In plain language |
| --- | --- |
| Component | A reusable piece of UI with its own inputs and behavior |
| Props | The inputs you pass to a component (variant, size, label) |
| State | What the UI currently remembers (what's typed, which tab is open) |
| API | How the front end asks a server for data or sends data back |
| Endpoint | One specific address on the API (for example, "get invoices") |
| Latency | How long a request takes |
| Pagination | Loading data in chunks instead of all at once |
| Cache | Stored data reused to avoid asking again |
| Branch | A separate line of work in version control |
| Pull request (PR) | A proposal to merge a branch, reviewed by others |
| CI | Automated checks that run on every change |
| Feature flag | A switch to turn a feature on or off without redeploying |
| Regression | Something that used to work and broke |
| Refactor | Changing code structure without changing behavior |
| Tech debt | Shortcuts that make future changes slower |
| Token (design) | A named design decision (spacing, color) |
| Token (AI) | A chunk of text a model processes; cost and limits are measured in tokens |

## Where to go deeper

- **A little JavaScript and TypeScript,** enough to read a component and follow state and events.
- **Browser dev tools:** layout, accessibility tree, network and performance.
- **APIs and data modeling:** how objects and relationships are represented, which shapes enterprise design (see [[ch:02]]).
- **Security and privacy basics:** authentication, permissions, personal data and what's risky to paste into tools.
- **Automated accessibility and visual testing:** what they catch and miss (see [[ch:11]]).

## Your next four weeks

| Week | Focus | You'll have |
| --- | --- | --- |
| 1 | HTML and CSS: build a page by hand | A responsive, accessible page, no framework |
| 2 | How a screen's data flows | A diagram and a list of states |
| 3 | Workflow and your design system in code | Comments on three PRs, plus a note tracing one component |
| 4 | AI behavior and AI coding tools | A trace of an AI feature, and a log of what a coding tool got right and wrong |

## Quick check

:::check Knowledge check 1
An engineer proposes a custom clickable `div` "for speed." What do you ask?
---
Ask what the `div` provides that a real `button` or link doesn't, and what it costs. A `button` already gives keyboard focus, activation via Enter and Space, a role and an accessible name, and it's announced correctly by assistive tech. A `div` needs all of that added. Unless there's a specific reason, use the native element and style it.
:::

:::check Knowledge check 2
A proposed AI summary feature "reads the user's documents." What do you ask before designing it?
---
What exactly goes into the model, from where and with what permissions; what the person sees of it; whether sources can be shown; how long it takes and what it costs per use; what happens when it's wrong or the documents are sensitive; and how quality will be evaluated. Those answers shape the design far more than the layout of the summary.
:::

## Further reading

:::reading Sources to open next
- MDN Web Docs for HTML, CSS and JavaScript.[[ref:mdn]]
- web.dev for Baseline status and Core Web Vitals.[[ref:webdev-baseline]][[ref:web-vitals]]
- Style Dictionary docs for how tokens flow into code.[[ref:style-dictionary]]
- WebAIM Million for the state of accessibility in production code.[[ref:webaim-million]]
:::
