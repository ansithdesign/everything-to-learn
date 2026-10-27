Imagine ten designers and forty engineers building one product without any shared rules. Within a year you'd have a dozen button styles, five ways to show an error and three slightly different blues. Users would feel it as "this product is a bit messy," and every new screen would take longer than the last.

A **design system** is the fix: a shared set of decisions, components and guidelines that lets many people build one coherent product. This edition explains what a design system is, what it contains, how tokens and components work, how systems are run, and what the famous examples teach.

:::pull
A design system turns a thousand small decisions into a few shared ones, so teams can spend their energy on problems that are actually new.
:::

## What a design system is

A design system is a **single source of truth** for how a product looks and behaves, made of reusable parts and the rules for using them. It serves two audiences: designers (in a design tool) and engineers (in code), and it works best when those two stay in sync.

### Guide, library or system?

| Term | What it is |
| --- | --- |
| Brand guidelines | Logo, brand colors, tone for marketing |
| Style guide | Visual rules: colors, type, spacing |
| Component / pattern library | A collection of reusable UI pieces (in design and/or code) |
| Design system | All of the above plus principles, documentation, code, governance and the team that maintains it |

A design system is more than a component library because it includes *how and why* to use things, and *who* keeps it alive.

### Why teams build one

- **Consistency:** the product feels like one product.
- **Speed:** teams assemble screens from tested parts instead of starting from scratch.
- **Quality:** accessibility and edge cases are solved once, in the component.
- **Shared language:** designers and engineers say "secondary button" and mean the same thing.
- **Easier change:** update a color once and it changes everywhere.

## The layers of a design system

### 1. Principles

Short statements that guide decisions when rules run out. For example: "Clarity over cleverness," "Accessible by default." Good principles help people choose between two valid options.

### 2. Foundations

The basic visual building blocks: color, typography, spacing, grid, elevation (shadows), radius (corner roundness), iconography, motion. These are usually stored as **design tokens**.

### 3. Components

Reusable UI elements: buttons, inputs, checkboxes, cards, modals, tables, navigation. Each component has variants, states, behavior and accessibility built in.

### 4. Patterns

Combinations of components that solve common problems: a login form, a search with filters, an empty state, a settings page.

### 5. Documentation and guidelines

When and how to use each piece, with examples and "do and don't."

### 6. Tools and code

The design library (for example in Figma) and the code library (for example in React), plus the pipelines that keep them in sync.

### 7. Governance

The processes and people: who owns the system, how changes are proposed and approved, how releases work.

## Atomic design

Brad Frost's **Atomic Design** is a popular way to think about building interfaces from small to large, borrowing terms from chemistry:[[ref:atomic-design]]

| Level | Description | Example |
| --- | --- | --- |
| Atoms | The smallest elements | A label, an input, a button |
| Molecules | Simple groups of atoms | A search field (label + input + button) |
| Organisms | Complex sections | A header (logo + navigation + search) |
| Templates | Page-level layouts with placeholders | A product page layout |
| Pages | Templates with real content | The actual product page |

It's a mental model, not a strict rule. Its main lesson: build small, reusable pieces and compose them into bigger ones.

## Design tokens

### What tokens are

**Design tokens** are named values that store design decisions: a color, a font size, a spacing amount, a shadow. Instead of writing `#3451d1` everywhere, you use a name like `color-primary`.

```css
:root {
  --color-primary: #3451d1;
  --space-4: 16px;
  --radius-md: 8px;
}
.button { background: var(--color-primary); padding: var(--space-4); border-radius: var(--radius-md); }
```

Tokens let design and code share the same values, and they let you change a decision in one place.

### Token layers

Most mature systems use three layers:

| Layer | Also called | Example | Purpose |
| --- | --- | --- | --- |
| Primitive | Global, core, base | `blue-600: #3451d1` | The raw palette of available values |
| Semantic | Alias, purpose | `color-action-primary: {blue-600}` | What a value is *for* |
| Component | Specific | `button-primary-bg: {color-action-primary}` | What a specific component uses |

Why bother with layers? Imagine a rebrand from blue to green. If buttons use `blue-600` directly, you must find and change every usage. If they use `color-action-primary`, you change one mapping and everything updates. The same mechanism powers **themes** like dark mode: the semantic names stay, the values they point to change.

### Naming tokens

Good token names describe purpose, not appearance. `text-danger` is better than `red-text`, because the color might change but the purpose won't. A common naming structure is *category–property–variant–state*, for example `color-background-surface-hover`.

### Tokens across platforms

Tools such as Style Dictionary transform a single token file into outputs for different platforms (CSS for web, Swift for iOS, Kotlin for Android).[[ref:style-dictionary]] The Design Tokens Community Group publishes a shared format so tokens can move between tools.[[ref:dtcg-2025]]

## Components in depth

### Anatomy

Every component has parts. A button might have a container, label, optional icon and focus ring. Documenting the anatomy helps everyone talk about the same parts.

### Variants

Variants are different versions for different purposes:

- **Emphasis / hierarchy:** primary, secondary, tertiary (text).
- **Size:** small, medium, large.
- **Tone / intent:** default, danger, success.

### States

Interactive components need designed states: default, hover, focus, pressed (active), disabled, loading, and where relevant selected, error and read-only.

### Properties (props)

In code and in modern design tools, components have **properties** you set: `variant="primary"`, `size="md"`, `disabled`. Well-designed components have properties that map to real decisions, and not too many of them.

### Accessibility built in

Components should handle keyboard use, focus visibility, screen reader labels and color contrast, so every team that uses them gets accessibility for free.

### Composition and slots

Flexible components allow content to be placed inside them (**slots**), so one card component can hold text, an image or a list, instead of needing a separate component for every combination.

## Documentation

Documentation is where many systems succeed or fail. A typical component page includes:

1. **Overview:** what it is and when to use it.
2. **When not to use it** (and what to use instead).
3. **Anatomy.**
4. **Variants and states,** with live examples.
5. **Behavior:** interactions, responsiveness.
6. **Content guidelines:** how to write labels and messages.
7. **Accessibility notes.**
8. **Do and don't examples.**
9. **Code usage and properties.**
10. **Changelog.**

## Running a design system

### Team models

Nathan Curtis and others describe common ways teams organize:

| Model | How it works | Pros | Cons |
| --- | --- | --- | --- |
| Solitary | One team builds a system for itself | Fast, simple | Others may not adopt it |
| Centralized | A dedicated team owns and builds it | High quality, clear ownership | Can become a bottleneck |
| Federated | Designers from many teams contribute | Broad input, shared ownership | Slower decisions, needs coordination |
| Hybrid | A core team plus contributors | Balance of quality and reach | Needs clear processes |

### Contribution

Teams should be able to propose new components or changes. A good process: describe the problem, check whether something existing fits, review with the system team, design and build to the system's standards, document, release.

### Versioning and releases

Systems in code usually use **semantic versioning**: `MAJOR.MINOR.PATCH`. A *patch* fixes bugs, a *minor* release adds features without breaking things, a *major* release includes breaking changes and needs a migration guide.

### Measuring success

- **Adoption:** how much of the product uses system components.
- **Consistency:** fewer one-off styles and detached components.
- **Efficiency:** time to design and build new features.
- **Quality:** fewer accessibility and UI bugs.
- **Satisfaction:** do designers and engineers like using it?

## Famous design systems to study

| System | Company | Known for |
| --- | --- | --- |
| Material Design | Google | Comprehensive guidance, motion, theming |
| Human Interface Guidelines | Apple | Platform conventions for iOS, macOS and more |
| Carbon | IBM | Enterprise, data-heavy interfaces |
| Polaris | Shopify | Merchant-focused admin, strong content guidance |
| Fluent | Microsoft | Cross-platform consistency |
| Primer | GitHub | Developer-focused UI |
| Spectrum | Adobe | Creative tools, accessibility |
| Lightning | Salesforce | Enterprise CRM, early token pioneer |

Studying how these document components and explain decisions is one of the best ways to learn.[[ref:material3]]

## When (and when not) to build one

**Build or formalize a system when:** several teams build the same product, inconsistency is slowing you down, or you're rebuilding the product anyway.

**Start small when:** you're a small team or early product. A few tokens and five well-built components beat a giant system nobody uses.

**Adopt an existing one when:** speed matters more than uniqueness, or you lack people to maintain your own. Many teams start with an existing system and customize the tokens.

## Key terms

| Term | Plain meaning |
| --- | --- |
| Design system | Shared decisions, components, guidelines and the team that maintains them |
| Design token | A named value for a design decision |
| Primitive token | A raw value like `blue-600` |
| Semantic token | A value named by purpose, like `color-action-primary` |
| Component | A reusable UI element |
| Variant | A version of a component for a purpose |
| Slot | A place inside a component where other content goes |
| Atomic design | Building UI from atoms to pages |
| Governance | How a system is owned and changed |
| Semantic versioning | MAJOR.MINOR.PATCH release numbering |

## Quick check

:::check Knowledge check 1
Why do components use semantic tokens instead of primitive ones?
---
So you can change the underlying value (for a rebrand or dark mode) by changing one mapping, without editing every component. Semantic names describe purpose, which stays stable while appearance changes.
:::

:::check Knowledge check 2
What's the difference between a component library and a design system?
---
A component library is a collection of reusable UI pieces. A design system also includes principles, foundations, documentation, code, governance and the people who maintain it.
:::

:::check Knowledge check 3
In atomic design, is a search bar (label, input and button) an atom, molecule or organism?
---
A molecule: a simple group of atoms working together. A whole header containing the search bar, logo and navigation would be an organism.
:::

## Further reading

:::reading Sources to open next
- Brad Frost, *Atomic Design*.[[ref:atomic-design]]
- Design Tokens Community Group, the stable token format.[[ref:dtcg-2025]]
- Style Dictionary documentation.[[ref:style-dictionary]]
- Material Design 3 as a complete reference system.[[ref:material3]]
:::
