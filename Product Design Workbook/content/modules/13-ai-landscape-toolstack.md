Every area of design work now has an AI tool attached to it, and new ones appear monthly. If you learn tools one at a time you will always be behind. If you learn the *map* (what kinds of AI exist, which design jobs each kind fits and how to choose) you can place any new tool in about ten minutes.

This chapter is the map for Part VI. It covers the fundamentals (what these systems are, in designer's terms) and the 2026 picture (where designers actually use them) in one place. The chapters after it go deep on each area. Tool names and prices are a snapshot from October 2026 and, as the sources below are mostly secondary, treat them as pointers to verify, not facts to quote.

:::pull
Learn the job each kind of AI does, not the logo. Logos change every quarter; the jobs don't.
:::

## 1. The kinds of AI a designer touches

| Kind | What it does | Designer examples | Main risk |
| --- | --- | --- | --- |
| **Chat assistants (LLMs)** | Read, write, reason over text, images and files | Claude, ChatGPT, Gemini: synthesis, critique, copy, plans | Confident wrong answers; sameness |
| **Image models** | Generate or edit pictures from text and references | Midjourney, Adobe Firefly, Google's Nano Banana family, ChatGPT images | Style drift, text errors, licensing |
| **Video and motion models** | Generate clips or animate stills | Veo, Sora-class models, Runway-class tools, Midjourney video | Inconsistency across shots, rights, deepfake risk |
| **Prompt-to-UI tools** | Turn a description into screens | Figma Make, Google Stitch, Claude Design, Uizard-class tools | Generic, convention-bound layouts |
| **Prompt-to-app tools** | Turn a description into running software | v0, Lovable, Bolt, Replit | Looks finished, hides missing states and bugs |
| **Coding agents** | Edit a real codebase over many steps | Claude Code, Cursor, Codex-class agents | Changes you can't review without engineering literacy |
| **Research platforms** | Transcribe, tag, cluster, even run interviews | Dovetail, Looppanel, Outset-class interviewers | Shallow themes; invented quotes |
| **Embedded features** | AI inside tools you already use | Figma AI, Notion, Miro, Adobe apps | Hard to audit; defaults change silently |
| **Connectors and agents** | Let a model act in your tools | MCP servers, Figma's MCP server, workflow automations | Permissions; actions you didn't mean |

:::definition MCP (Model Context Protocol)
An open standard for connecting an AI model to tools and data, such as a Figma file, a ticket tracker or a codebase. For designers it matters because it turns "paste a screenshot into a chat" into "the model reads your real components and variables." See [[ch:17]].
:::

## 2. How these models work, in designer's terms

You do not need the mathematics. You need the five properties that explain nearly every failure you will see.

1. **Probabilistic.** The model predicts likely output; it does not look up truth. Ask twice, get two answers. Design and process must tolerate that.
2. **Context-bound.** It knows only its training and what you give it now. Most "bad output" is missing context: your users, your system, your constraints.
3. **Fluent, not reliable.** Polish tells you nothing about correctness. A beautiful screen can have broken states; a confident summary can have an invented quote.
4. **Average-seeking.** Models drift toward the most common answer. That is why generated UI looks like every other generated UI. An empirical study of AI-generated prototypes described them as usable but conventional,[[ref:sbc-conventional]] which matches what most designers report.
5. **Moving.** Capabilities, limits and prices change faster than any course. Re-test your assumptions every few months.

:::warning Common trap: judging a tool by its demo
Demos are the best case: a clean prompt, a forgiving topic, a cherry-picked result. Judge a tool on *your* messy brief, three times, and keep the failures.
:::

## 3. Where designers actually use AI (2026)

Adoption is wide. Figma's State of the Designer 2026 is reported (via secondary coverage of a gated report; I could not open the full report) to show about 72 percent of surveyed designers using generative AI, 98 percent saying their use grew year over year, and the share of designers participating in development doubling to 41 percent.[[ref:figma-sotd-2026]] A separate survey by Designer Fund and Foundation Capital is cited as finding 91 percent using AI weekly and an average of seven tools; the two get confused in coverage.[[ref:fastco-ai-design-jobs]] Both are self-reported by people who chose to respond. Read them as "this is mainstream," not as proof of benefit.

The areas, and the chapter that goes deep on each:

| Area | Typical uses | Chapter |
| --- | --- | --- |
| Research and discovery | Transcription, tagging, synthesis, interview guides, AI-moderated interviews | [[ch:14]] |
| Visual, brand and media | Moodboards, illustration, product imagery, video, motion | [[ch:15]] |
| Prototyping | Prompt-to-UI, vibe-coded prototypes, clickable flows with real logic | [[ch:16]] |
| Design systems and handoff | Agents that read tokens and components, design-to-code, code-to-design | [[ch:17]] |
| Content | UX writing, tone, localization, sample data | [[ch:18]] |
| Accessibility, QA and critique | Audits, state coverage, consistency checks, review prep | [[ch:19]] |
| Designing AI products | Chat, agents, generative UI, trust patterns | [[ch:20]] |
| Evals and quality | Defining "good" for AI features, test sets, monitoring | [[ch:21]] |
| Law, IP and ethics | Copyright, disclosure, data, regulation | [[ch:22]] |
| Role and career | Workflows, agents, design engineering, skills | [[ch:23]] |

## 4. Choosing a tool: a repeatable method

:::framework The five questions
1. **Job:** what exact task, and what does "done" look like?
2. **Output shape:** pixels, editable layers, or running code? This decides what you can do next.
3. **Context:** can it see your system, files and research, or only a prompt?
4. **Control:** can you edit precisely and undo, or only re-roll?
5. **Risk:** where does your data go, who owns the output, and what happens if it's wrong?
:::

Comparison articles agree on one useful rule: choose by output shape first and vendor second. A May 2026 comparison describes Figma Make as producing editable Figma output, v0 as React components built on shadcn/ui and Tailwind, and Lovable as full-stack apps with hosting, with chaining tools as a legitimate workflow.[[ref:mcpdir-compare]] That article is a snapshot with vendor-influenced framing and its prices will have moved; use it to learn the categories, not to buy.

:::decision Pick one tool per job, not one tool for all
A small, deliberate stack beats a long list. Choose a chat assistant you know deeply, one prompt-to-UI or prototyping tool, one media tool if your work needs it, and your existing design tool's AI. Revisit quarterly. Seven tools you half-know is worse than three you can direct.
:::

## 5. A safe way to try a new tool

1. **Timebox** it: two hours, on a real past task whose right answer you already know.
2. **Run it three times** on the same brief. Note the variance.
3. **Score the output** with a rubric ([[ch:12]], [[ch:19]]), not a feeling.
4. **Check the terms:** training on your data, ownership, retention, team admin controls.
5. **Write down** what it's good for, what it fails at and what you'll never give it. Date the note.

:::exercise Try it: build your personal map (1 hour)
Make a table with your ten most frequent tasks. Beside each, name the AI kind from section 1 that could help, the tool you'd test, and the check you'd run on its output. Highlight the two tasks you will deliberately *not* hand over, and say why.
:::

## Quick check

:::check Knowledge check 1
A teammate says "just use the best AI design tool." What do you ask first?
---
What job, what output shape (editable design, code or images), what context the tool needs (your system, research), how much control you need, and what the data and ownership risk is. "Best" depends on those answers, and the answers change tool by tool and month by month.
:::

:::check Knowledge check 2
Why do generated interfaces so often look alike?
---
Models are probabilistic and average-seeking: they produce the most statistically common solution unless given specific context, constraints and references. Your system, brand and research are what push the output away from the average, so supplying them is part of the job.
:::

## Further reading

:::reading Sources to open next
- Figma, *State of the Designer 2026*; request the full report and check the sample and method.[[ref:figma-sotd-2026]]
- NN/g, *State of UX 2026* for the cautious view of AI adoption.[[ref:nng-state-ux-2026]]
- A tool-category comparison, read for the categories rather than the rankings.[[ref:mcpdir-compare]]
:::
