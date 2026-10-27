Picture a product with 400 screens and a designer who needs a button. If there's no system, they open the last file and copy one. That one was copied from another one, which was tweaked by someone in a hurry. Six months later you have 14 almost-identical buttons, three grays that are *nearly* the same, and nobody dares touch any of it.

A design system is how you stop that from happening, and it's the main thing that separates "designs great screens" from "makes a product that stays great as it grows." It's also where mid-level designers become senior ones, because the work shifts from drawing the thing to designing the *decisions behind* the thing.

2026 adds a twist. NN/g's outlook says UI is getting cheaper to produce thanks to design systems and standard components, which pushes differentiation elsewhere.[[ref:nng-state-ux-2026]] And your system now has a new kind of user: AI tools that read your docs and generate UI from them. We'll get to that. First, the fundamentals.

:::pull
A design system is a product. Its customers are the people who build your product, and it needs users, a roadmap, quality and support like any other.
:::

## 1. Thinking in systems

### What's in a design system

People use the term loosely. Here's a useful breakdown:

- **Foundations and tokens:** the smallest decisions (color, type, spacing, radius, elevation, motion) stored as named values.
- **Components:** reusable building blocks (button, input, table, dialog) with defined states, behavior and accessibility.
- **Patterns:** component combinations that solve a recurring problem (filter bar, settings page, empty state).
- **Guidelines:** when to use what, voice, accessibility rules, do and don't.
- **Code and tooling:** libraries, design files and pipelines.
- **Governance and people:** who decides, who contributes, how change happens.

A system without that last one is a style guide that's quietly going out of date.

:::definition Atomic thinking
Brad Frost's *Atomic Design* describes UI as atoms (a label, an input), molecules (a labeled input), organisms (a form section), templates and pages.[[ref:atomic-design]] Use it as a mental model for composition, not a rigid folder structure. Arguing over whether something is a molecule or an organism is a time sink.
:::

### Habits of system thinkers

- **Hunt for accidental variation.** Audit a real product: how many button styles, grays and spacing values exist? The audit *is* your business case.
- **Name things by purpose.** `color-text-danger` survives a rebrand; `red-500` doesn't.
- **Prefer a few strong components to many weak ones.** Every component is something you must maintain, document, test and support.
- **Design for composition.** Components with slots and variants outlast components that try to anticipate every case.
- **Optimize for adoption.** The system wins when teams choose it because it's the fastest *good* option.

:::exercise Try it: audit before you design (2 hours)
Screenshot ten screens from one product. Catalogue every distinct button, text style, gray and spacing value. Group the duplicates. Write one page: what the variation costs, and what to standardize first.
:::

## 2. Building and maintaining

### Tokens in three layers

Design tokens are named, platform-neutral decisions. They work best layered:

- **Primitive** tokens: raw values, like `blue-600` or `space-4`.
- **Semantic** tokens: meaning, referencing primitives, like `color-action-primary`.
- **Component** tokens: specific to one component, like `button-primary-background`.

Components should use semantic or component tokens, never primitives. That's what lets you retheme, add dark mode and support multiple brands without touching a component.

```json
{
  "color": {
    "action": { "primary": { "$type": "color", "$value": "{color.blue.600}" } }
  }
}
```

**There's now a standard format.** The Design Tokens Community Group (a W3C Community Group) published the first stable Design Tokens Specification, 2025.10, on 28 October 2025: a vendor-neutral format with theming and multi-brand support, color support including Display P3 and Oklch, and relationships like aliases and inheritance. Reference implementations include Style Dictionary, Tokens Studio and Terrazzo, and the announcement names support or work in Figma, Sketch, Penpot, Framer, Supernova, zeroheight and others.[[ref:dtcg-2025]] One nuance: its own report says it's a community group spec, not a W3C Standard on the Standards Track. Read "standard" as "stable shared format."

:::decision Where to start with tokens
Start with semantic color roles, a spacing scale, a type scale and radii. Add motion and elevation later. Don't tokenize every number: a token earns its place by being reused and needing to change in one place.
:::

### Reusable components

- **A clear API.** Props and variants that map to real decisions, with few boolean flags. If a component needs a long list of options, it's probably two components.
- **Every state designed *and* built:** default, hover, focus, active, disabled, loading, error, empty.
- **Accessibility inside.** Keyboard behavior, focus management, roles and names, contrast, reduced motion. If the component ships without these, every team using it pays.
- **Docs people actually read:** purpose, anatomy, variants, usage rules, live examples.
- **Tests:** visual regression and accessibility checks so a change doesn't silently break forty screens.

Many teams build on headless primitives (libraries that supply behavior and accessibility without styling) or on a copy-in model where components live in your repo. Both trade control against upgrade effort, so choose based on your engineering capacity.

### Governance

Three operating models, popularized in writing by Nathan Curtis and others: **solitary** (one person builds for themselves), **centralized** (a dedicated team owns it) and **federated** (a core team plus contributors across product teams). Most mature systems end up hybrid. Whatever you choose, you need a clear way to **request and contribute**, **versioning and deprecation** (so teams can plan), and a **decision record** so debates don't repeat.

:::framework How to measure a system
Track adoption and outcomes, not component count. Useful signals: share of product UI built from system components; detached or overridden instances; time to build a new screen; accessibility defects; contribution requests and time to resolve; team satisfaction. Pair numbers with stories, like "this release removed a month of duplicate work."
:::

### Build, adopt or extend?

Mature systems like Material, Carbon, Polaris, Primer, Spectrum and Fluent show good patterns. Adopting is fast but constraining; building is slow but fits. A common middle path: adopt a solid foundation, then layer your tokens and a few product-specific components on top.

### 2026 shifts

- **Tokens are becoming portable.** With a stable shared format and growing tool support, a token file moves between design tools and code with less custom glue. Learn how a pipeline works end to end (source of truth, transformation, output per platform).[[ref:dtcg-2025]]
- **Design files and code are converging.** Variables with modes in design tools mirror tokens with themes in code. The closer your file mirrors your code, the less gets lost.
- **Documentation is now a product feature.** Docs need to be accurate and structured, because tools read them too.

:::exercise Try it: a mini system in a week
Define semantic tokens (at least eight color roles, plus spacing, type and radius). Build three components (button, text input, alert) with all states in your design tool *and* in code or a prototype. Document each in a page. Rebrand by changing only the primitive layer and log what broke.
:::

## 3. Strategic craft decisions

This is the judgment part, and the part NN/g's outlook expects to matter more: discernment and strategy over artifact production.[[ref:nng-state-ux-2026]]

| Decision | Case for consistency | Case for flexibility |
| --- | --- | --- |
| Add a variant or component | Fewer things to learn and maintain | A real, recurring need is unmet |
| Allow overrides | Everything stays aligned | Teams ship without waiting |
| Strict accessibility rules | Fewer defects and less legal risk | Some bespoke interactions need judgment |
| Opinionated defaults | Fast adoption | Harder to fit unusual products |

### Breaking the system well

1. **State the need.** What user problem does the standard component not solve?
2. **Look for an existing answer.** Is there a variant or pattern that nearly fits?
3. **Estimate the full cost.** Design, build, test, document, maintain, plus the confusion of a second way to do the same thing.
4. **Decide scope.** One-off, product-specific, or promoted to the system?
5. **Record it.** A short decision note ends repeat debates and shows which exceptions deserve to become features.

:::example A hypothetical decision
A team needs a date range picker with comparison periods; the system only has a single-date picker. Option one: a one-off. Option two: contribute a range picker. Three other products will need it within a year, so they contribute it, with accessibility and keyboard behavior done once. The decision note records why, so the next "similar but not quite" request starts from the same logic.
:::

### Thinking at scale

- **A decision multiplied across a thousand screens is a big decision.** Default spacing or corner radius is a product-wide change; review it like one.
- **Constraints are features.** A system that allows anything protects nothing.
- **Maintenance is the cost people forget.** When generating variants becomes cheap, the *maintenance* cost of those variants doesn't shrink.

:::exercise Try it: write a decision record (1 hour)
Pick a component request. Write one page: need, alternatives, cost estimate, decision, scope and review date. Show it to someone and see if they'd have decided the same.
:::

## 4. Systems in the age of AI

AI tools generate UI quickly, and teams increasingly point them at their design system. That creates a new type of consumer, and a new failure mode.

### What goes wrong

A PayPal engineering post describes AI-generated components with invented prop names and hardcoded hex values where a token belonged.[[ref:paypal-ai-docs]] That's what you should expect from a model that doesn't *know* your system: output that looks plausible and quietly breaks consistency, accessibility and theming.

### What makes a system AI-ready

- **Semantic, consistent naming.** A model follows `color-text-danger` far more reliably than `red-3`.
- **Constraints you can check:** lint rules, type definitions and tests that fail on hardcoded values or invented props.
- **Machine-readable docs.** Structured descriptions of components, props, rules and anti-patterns in formats tools can fetch. Emerging approaches include Model Context Protocol (MCP) servers that let an agent query tokens and components before writing code, `llms.txt`-style files and agent instruction files. A July 2026 study, which I only saw through a German-language secondary source, reportedly found MCP servers in 19 of 20 design systems examined, instruction files in 18 and an `llms.txt` in 14. Treat those figures as indicative.[[ref:drweb-ds-agents]]
- **Great examples.** Complete, correct usage examples are among the most effective context you can provide.
- **Accessible by default.** If the component is accessible, generated usage inherits it; if not, generation multiplies the defect.

:::warning Common trap: letting speed erase the system
When a screen takes seconds to produce, it's tempting to skip the system and generate bespoke UI. The bill arrives later as inconsistency, accessibility debt and maintenance. The system is the guardrail that lets teams move fast without drifting.
:::

Your new responsibilities: write docs as if a tool will read them; define rules as *checks*, not just guidelines; review generated output against the system and log repeat mistakes as doc or constraint fixes; and understand the toolchain well enough to talk to engineers about how the system is exposed to tools.

:::exercise Try it: test your system with an AI tool (half a day)
Give an AI coding or design tool your mini system's docs and ask for five screens. Record every deviation: invented props, hardcoded values, missing states, accessibility failures. For each, decide whether the fix is better docs, a stricter constraint or a missing component. Update the system and run it again.
:::

## Case: building a button

A button looks trivial, which is exactly why it's the best way to see what a system really involves.

**1. Decide the API before the look.** What decisions does a button actually vary on? Usually: *emphasis* (primary, secondary, tertiary), *size* (small, medium, large), *tone* (default, danger), and *state*. Notice what's *not* a prop: color, because color comes from tone and emphasis through tokens. A clean API might be:

```tsx
<Button emphasis="primary" size="md" tone="default" loading={false} disabled={false}>
  Save changes
</Button>
```

**2. Count the states.** Default, hover, focus, active, disabled, loading. Each needs a visual treatment *and* a behavior. Loading, for example, should keep the button's width (no layout jump), announce the change to assistive tech and prevent double submission.

**3. Wire it to tokens.**

| Part | Token it uses |
| --- | --- |
| Background (primary) | `button-primary-background` → `color-action-primary` → `blue-600` |
| Text on primary | `button-primary-text` → `color-text-on-action` |
| Focus ring | `focus-ring-color`, `focus-ring-offset` (checked on every surface) |
| Padding (md) | `space-inset-control-md` |
| Radius | `radius-control` |
| Disabled | Reduced contrast *plus* `cursor: not-allowed` and an explanation elsewhere |

If you rebrand by editing only `blue-600`, every primary button changes and nothing else is touched. That's the payoff of three token layers.

**4. Bake in accessibility.** It's a real `button`; Enter and Space work; the focus ring has at least 3:1 contrast against its surroundings; the minimum target is 24 by 24 CSS px (usually much more); an icon-only variant requires an `aria-label`; and the loading state announces itself.

**5. Document it for humans and machines.** One page covering: purpose ("Use for the main action on a screen"), anatomy, variants with live examples, **when not to use it** ("Don't place two primary buttons in one view"), content guidance ("Start with a verb: *Save changes*, not *OK*"), accessibility notes and the changelog. Add a machine-readable description of props and allowed values so tools can't invent new ones.

**6. Test it.** Visual regression across states and themes, an automated accessibility check, a keyboard test and a quick test in a screen reader. These checks run on every change, so a "small tweak" to padding can't silently break forty screens.

**7. Decide how it will change.** Add a variant? Open a request with the problem, not the pixels. Deprecate one? Publish a migration note and a date. A button has a lifecycle, like any product.

That's one component. Now multiply by thirty and you see why a system is a product with a team, not a Figma page.

## System smells

| Smell | What it usually means | What to do |
| --- | --- | --- |
| Teams detach components constantly | The component doesn't fit real needs | Interview the teams; add the missing variant or slot |
| Nobody knows which button to use | Docs say *what*, not *when* | Add usage rules and a decision guide |
| 30 colors named `gray-something` | No semantic layer | Introduce roles and migrate gradually |
| A "temporary" override is three years old | No process for exceptions | Add a review date and an owner to every override |
| Design file and code disagree | No single source of truth | Pick one source (often tokens in code) and sync from it |
| Contributions pile up unreviewed | No clear bar or owner | Publish a contribution guide and a review SLA |
| System releases break products | Weak versioning and tests | Semantic versioning, visual tests, migration notes |
| AI tools invent props | Docs aren't machine-readable | Provide structured specs and lint rules |

## Selling the system

Systems often fail politically, not technically. A short case that lands with leadership:

1. **The cost today:** the audit result (e.g. "we have 14 button styles and 3 date pickers"), plus the time teams spend rebuilding.
2. **The risk:** inconsistency, accessibility defects and slow onboarding for new designers and engineers.
3. **The proposal:** a small first version covering the 10 most-used components and the tokens behind them.
4. **The measure:** time to build a new screen, accessibility defects, share of UI built from the system.
5. **The ask:** a named owner, a small team and a quarter to prove it.

Start small, ship something useful quickly and let adoption make your case. Systems built in isolation for a year before anyone uses them rarely survive.

## Where to go deeper

- **Front-end fluency.** HTML, CSS custom properties and enough of a component framework to read a component's API (see [[ch:10]]).
- **Accessibility engineering:** keyboard patterns, focus management, roles and names (see [[ch:11]]).
- **Documentation and writing.** Usage guidance is most of the daily work of a system.
- **Product thinking for internal products:** roadmaps, adoption metrics and a business case (see [[ch:06]]).
- **Automation:** token pipelines, visual regression, release pipelines.

## Your next four weeks

| Week | Focus | You'll have |
| --- | --- | --- |
| 1 | Audit a product and make the case | A one-page audit with counts and a plan |
| 2 | Token architecture in the DTCG format | A token file and a rebrand test |
| 3 | Three accessible components with docs | Components in design and code, keyboard-tested |
| 4 | Governance plus an AI test | A contribution guide, two decision records, and before/after deviation counts |

## Quick check

:::check Knowledge check 1
Why should components use semantic tokens rather than primitives?
---
Semantic tokens carry meaning and point to primitives, so you can change a theme, add dark mode or rebrand by changing the mapping, without editing components. A component using `blue-600` directly is tied to one appearance and must be edited everywhere if the brand changes.
:::

:::check Knowledge check 2
A team asks for a bespoke component the system doesn't have. What do you do before saying yes or no?
---
Clarify the user need, check whether an existing variant nearly fits, estimate the full cost (design, build, test, document, maintain, plus the confusion of a second way), decide whether it's a one-off, product-specific or system-level, and record the decision. If other teams will need it, contribute it once, properly designed and tested.
:::

## Further reading

:::reading Sources to open next
- Design Tokens Community Group, the 2025.10 announcement and format module.[[ref:dtcg-2025]]
- Brad Frost, *Atomic Design*.[[ref:atomic-design]]
- Style Dictionary docs for how a token pipeline works.[[ref:style-dictionary]]
- NN/g, *State of UX 2026* on why systems and judgment matter now.[[ref:nng-state-ux-2026]]
- PayPal Engineering on AI-generated components and documentation.[[ref:paypal-ai-docs]]
:::
