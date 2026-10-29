Design systems and AI meet at one point: the model needs your system in a form it can read. If it can, generated work stays on-brand and on-system. If it can't, you get plausible-looking drift. This chapter is about making your system legible to tools, using agents for design-to-code and code-to-design, and what changes in handoff.

It builds on [[ch:03]] (the system itself) and [[ch:10]] (technical literacy). The tooling here moves fast; every named feature is a snapshot from October 2026.

:::pull
An AI tool will use your design system exactly as well as you have described it.
:::

## 1. Why the system is the control surface

Without context, a model invents. With context, it composes. Your tokens, components, patterns and rules are that context. Teams that treat their system as a machine-readable asset get consistent output from every tool; teams that keep it as screenshots and tribal knowledge get drift at speed.

## 2. What "AI-ready" means

| Layer | What to provide | Why it helps |
| --- | --- | --- |
| **Tokens** | Named, semantic values in a standard format (the Design Tokens Community Group spec reached a first stable version in October 2025)[[ref:dtcg-2025]] | The model uses names, not raw hex |
| **Components** | A coded library with clear props, variants and states | The model reuses instead of inventing |
| **Docs** | Plain-language rules: when to use, when not to, accessibility notes, examples | Models read docs; vague docs give vague results |
| **Mappings** | Links between design components and code components | The model picks the right one |
| **Rules for agents** | A short instruction file for coding agents (conventions, do and don't) | Persistent behavior across sessions |
| **Checks** | Lint rules, visual tests, accessibility tests | Catch drift automatically |

PayPal engineering has written about documenting a design system for AI consumption, and press coverage describes similar moves by other companies;[[ref:paypal-ai-docs]] treat these as signals, not standards.

## 3. How Figma's MCP server fits

Figma's MCP server connects an AI client (Claude Code, Cursor, VS Code and others) to your Figma files. Per Figma's developer docs, it is not a one-click design-to-code converter: it supplies structured context (frames, components, layout, variables) from the layers you select, and the agent writes the code, adapting layout, reusing components and following your prompts and codebase conventions. Output quality depends on the context, the model and the clarity of the prompt. Without Code Connect mappings, variable syntax or rules describing your conventions, the agent doesn't know your design system.[[ref:figma-mcp-docs]]

Secondary sources add that the server now also lets agents write to the canvas (a `use_figma`-style capability) and that accuracy depends heavily on how well the file uses components and auto-layout; I could not verify the status of write features from Figma's own pages, so check the docs.[[ref:figma-mcp-docs]]

:::definition Code Connect
A Figma feature for mapping a design component to its code counterpart, so tools and developers see the real code, not a guess. It is the bridge that turns "a blue button" into "the `Button` component, `variant="primary"`."
:::

## 4. Workflows

### Design to code

1. Build the design with real components, variables and auto-layout.
2. Map components with Code Connect; set variable names that match tokens.
3. Give the agent the selection, the target stack and your rules file.
4. Review the generated code as a pull request: components reused, tokens used, states present, semantics right.
5. Compare against the design visually, at several widths.

### Code to design

Agents can also push UI from a running app into a design file for review or iteration. This helps when design drifted from production or when a prototype built in code needs designing properly. Check which elements come back as real components and which as flat layers.

### Maintenance

- Have an agent **audit** a file for hard-coded values, detached components and inconsistent names, then review its list ([[ch:03]]).
- Use it to **draft docs** from component code and examples; humans verify.
- Use it to **generate usage tests**: render a component in every variant and state and screenshot it.
- Use it to **propose migrations** (token renames, deprecations) with a reviewable diff.

## 5. What goes wrong

:::warning Typical failures
- **Plausible nonexistent components:** the code imports a component that isn't in your library.
- **Raw values** where tokens exist, because the file used them as hex and the model copied.
- **Auto-layout lies:** a design that looks right but is built with manual positioning produces brittle code.
- **Docs that contradict code,** so the model follows the wrong one.
- **Stale context:** the agent works from an old version of the file.
- **Over-trust:** merging generated code without review.
:::

## 6. Governance for AI use

- **Source of truth:** decide which is canonical, the design file or the code, and let tools read it.
- **Contribution rules:** how generated components enter the library (review, tests, accessibility sign-off).
- **Logging repeat mistakes** as doc or constraint fixes, not just one-off corrections.
- **Versioning:** agents should reference a released version of tokens and components.
- **Permissions:** limit what agents can change; require review for writes.

:::decision Fix the system, not the output
When an agent repeatedly makes the same mistake, change the rule, doc or token it misunderstood. Correcting individual outputs forever is the slow path.
:::

## 7. Handoff in an agent era

Handoff shifts from "specs and redlines" to "context and intent": which components, which tokens, which states, which behaviors, what's decided and what's open. A good handoff includes the design file with real components, a short behavior note, the accessibility notes ([[ch:11]]) and a list of known gaps. Engineers (and their agents) do better with a file they can query than with a PDF.

:::exercise Try it: test your system with an agent (half a day)
Pick a small feature. Give an agent your tokens, docs and one Figma frame. Count how many components it reused versus invented, how many raw values it used and how many states it covered. Fix the three biggest causes in your system or docs, then repeat and compare.
:::

## Quick check

:::check Knowledge check 1
An agent generates a card with hard-coded colors, though your system has tokens. What do you check and fix?
---
Check whether the design file used variables or raw values, whether variable names map to code tokens, and whether the agent had a rules file. Fix the source (variables, mappings, rules) so the next run uses tokens, then correct the output.
:::

:::check Knowledge check 2
Why isn't an MCP connection "design to code in one click"?
---
It provides structured context; the agent still writes and adapts code, and quality depends on file structure, mappings, model and prompt. Human review of the result is still required.
:::

## Further reading

:::reading Sources to open next
- Figma's developer documentation for the MCP server, Code Connect and variables.[[ref:figma-mcp-docs]]
- The Design Tokens Community Group specification.[[ref:dtcg-2025]]
- Style Dictionary documentation for token pipelines.[[ref:style-dictionary]]
:::
