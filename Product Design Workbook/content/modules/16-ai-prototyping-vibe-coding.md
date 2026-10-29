The biggest change in design practice since Figma arrived is that you can describe an interface and get a working one. Prompt-to-UI and "vibe coding" tools let designers build clickable, even functional, prototypes without an engineer. They also let people with no design training produce something that looks finished, which raises the bar for what designers add.

This chapter covers how these tools work, how to use them well and where they fail. For design-to-code handoff see [[ch:17]]; for tool literacy see [[ch:09]].

:::pull
When anyone can generate a screen, the designer's value moves to what's behind it: the problem, the states, the system and the judgment.
:::

## 1. Three levels of AI-assisted prototyping

| Level | What you get | Examples (snapshot) | Best for |
| --- | --- | --- | --- |
| **Mockups** | Static or lightly linked screens | Google Stitch, Claude Design, Uizard-class tools | Early exploration, stakeholder decks |
| **Editable design in your tool** | Frames and components in a design file | Figma Make and Figma AI features | Staying in your system and handoff flow |
| **Running software** | Real code, data and logic | v0, Lovable, Bolt, Replit, coding agents like Claude Code and Cursor | Validating interaction, flows with logic, demos with real data |

A May 2026 comparison describes Claude Design (an Anthropic Labs product launched in April 2026) and Stitch as mockup-oriented, Figma Make as producing editable Figma output, v0 as React components on shadcn/ui, and Lovable as deployed full-stack apps with its own MCP server.[[ref:mcpdir-compare]] It is a dated snapshot with commercial framing; verify pricing and features on each vendor's site.

## 2. The basic loop

1. **Frame the problem** before opening the tool (user, task, constraints). A vague prompt produces a plausible nothing.
2. **Write a brief**, not a wish: see the template below.
3. **Generate, then critique** against a rubric (hierarchy, states, accessibility, system fit).
4. **Edit in small steps.** Change one thing per instruction; big rewrites tend to break what already worked. Nielsen's observation that each generation "often takes two steps forward, then one step back" is a good expectation to hold.
5. **Keep a version trail** so you can revert.
6. **Decide what ships:** a throwaway test artifact, a reference for engineers or a base for production. Only the last needs production standards.

:::framework Prototype brief
**Goal** (what the user must accomplish), **Users and context**, **Screens/flow** (list them), **Components and system** (point to your tokens, library or a design file), **Data** (realistic samples, including long, empty and error cases), **Behavior** (what happens on click, error, slow network), **Constraints** (accessibility, devices, language), **Out of scope**, **Done when** (how you'll judge it).
:::

## 3. What these tools do well

- **Speed to a believable first draft**, which makes divergent exploration cheap: five approaches in an afternoon.
- **Interaction you can feel.** A working form, filter or drag-and-drop teaches more in a test than a static frame.
- **Realistic data and states** when you ask for them.
- **Communication.** A clickable prototype ends many alignment arguments.
- **Stretching your range.** Designers can test ideas that previously needed an engineer.

## 4. What they get wrong

:::warning Where generated prototypes fail
- **Conventional by default.** Layouts cluster around the most common pattern; novelty and fit to *your* product have to be pushed in.
- **Happy path only.** Empty, error, loading, offline, permission and long-content states are usually missing unless you ask.
- **System drift.** Invented colors, spacing and components that don't exist in your library.
- **Accessibility gaps:** missing labels, weak focus order, low contrast, non-semantic markup.
- **Hidden fakery.** Hard-coded data, buttons that do nothing, logic that works only for the demo path.
- **Overconfidence.** It looks finished, so reviewers critique polish and miss structure.
:::

Always label a prototype honestly ("exploration," "demo with fake data") so nobody mistakes it for something an engineer can ship.

## 5. Vibe coding for designers

"Vibe coding" means directing a coding agent in plain language and accepting code you don't fully read. For a throwaway prototype that is fine. For anything that will be tested with real people, or become the base of a product, you need enough engineering literacy to review it ([[ch:10]]).

Practical rules:

- **Start from a repo or template** with your design tokens and components so output inherits your system.
- **Ask the agent to explain** its structure and list assumptions.
- **Run it** on real devices and with keyboard-only and a screen reader ([[ch:11]]).
- **Use version control** from the first commit.
- **Never put secrets or real customer data** into a prototype.
- **Hand off intent, not just code:** a short note on what's tested, what's fake and what must be rebuilt.

Figma's State of the Designer 2026 is reported to show designers participating in development doubling to 41 percent in a year (secondary coverage of a gated report).[[ref:figma-sotd-2026]] Whatever the exact number, the direction is clear: designers who can build prototypes in code have more influence.

:::decision Prototype, or production base?
Prototype to learn something fast, then throw it away. Only promote generated code to production after engineering review, tests, accessibility checks and conversion to your real components. Keep the learning, not the code.
:::

## 6. Choosing the right fidelity

- **Exploring directions:** mockup tools or sketches; do not polish.
- **Testing a flow with users:** a clickable prototype with realistic data, in whichever tool you control best.
- **Testing a behavior** (AI response, calculation, drag): you may need running code.
- **Selling an idea:** a believable demo, honestly labeled.

## 7. Reviewing generated UI

Use a fixed checklist so you aren't swayed by polish:

1. Does it solve the stated task, with the shortest sensible path?
2. Hierarchy: can you name the first, second and third read?
3. System: real tokens and components, or invented ones?
4. States: empty, loading, error, partial, permission, long content.
5. Accessibility: contrast, labels, focus order, target size, reflow.
6. Copy: accurate, consistent, in your voice.
7. Behavior: does everything clickable do something true?

For a fuller rubric see [[ch:12]] and [[ch:19]].

:::example A hypothetical iteration
Prompt one: "A dashboard for logistics managers." You get a generic card grid. Prompt two adds the user's decision ("spot delayed shipments in under ten seconds"), your token file and three data cases (zero shipments, one thousand, one delayed). The tool now puts delays first, and you see that the table breaks at one thousand rows, which becomes a design requirement.
:::

:::exercise Try it: one idea, three tools (half a day)
Take one real feature. Build it with a mockup tool, with a prompt-to-app tool and by hand in your design tool. Compare time, fit to your system, states covered, accessibility and what each taught you. Write one page on which you'd use for which stage.
:::

## Quick check

:::check Knowledge check 1
A stakeholder sees a generated prototype and says "ship it, it's basically done." What do you say?
---
Explain what it demonstrates (the main path and look), what it lacks (states, accessibility, real data and logic, system fit, tests) and what it would take to make it real. Offer a short plan to turn the learning into a proper build.
:::

:::check Knowledge check 2
Why start generation from your tokens and components instead of a blank prompt?
---
The model doesn't know your system. Without it, it invents styles and components, creating inconsistency and rework. With it, the output stays inside your constraints and is easier to review and hand off.
:::

## Further reading

:::reading Sources to open next
- The vendor documentation for the prototyping tool you use, especially its guidance on providing a design system.
- A current comparison of output shapes.[[ref:mcpdir-compare]]
- NN/g on AI-assisted design versus generative UI, via nngroup.com.[[ref:nng-state-ux-2026]]
:::
