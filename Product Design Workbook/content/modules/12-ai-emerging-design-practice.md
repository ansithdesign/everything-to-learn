Ask ten designers whether AI will replace them and you'll get ten confident answers. Here's a more useful question: *what would you still need to be good at if AI could generate any screen in seconds?*

The answer is surprisingly stable. Framing the right problem. Judging output against real users and real constraints. Knowing when *not* to use AI at all. Taking responsibility for what ships. NN/g's State of UX 2026 says it plainly: 2025 was the year of "post-hype AI," 2026 is "the year of AI fatigue," and the harder-to-automate strengths are curated taste, research-informed context, critical thinking and judgment.[[ref:nng-state-ux-2026]]

This chapter is about *your own practice*: AI-assisted workflows, prompting, evaluating and directing outputs, and responsible AI. Other chapters cover designing AI interactions ([[ch:02]]), researching with and about AI ([[ch:04]]), AI product strategy ([[ch:05]]) and how AI systems behave technically ([[ch:10]]). This is the fastest-moving topic in the book, so treat every tool and date as a snapshot (checked October 2026).

:::pull
Use AI as a multiplier of your judgment, not a substitute for it. The better your judgment, the more it multiplies. The worse, the faster you ship confident mistakes.
:::

## 1. AI in your workflow

### Where AI helps and hurts

| Task type | AI is often useful for | Watch out for |
| --- | --- | --- |
| **Exploring** (ideas, angles, analogies) | Widening the option set fast | Sameness: everyone gets the same ideas |
| **Drafting** (copy, first layouts, boilerplate) | A fast first version to react to | Generic output; accepting the first draft |
| **Transforming** (reformatting, summarizing, translating) | Mechanical changes at volume | Dropped detail, shifts in meaning |
| **Checking** (consistency, contrast, missing states, typos) | A fast second pair of eyes | False confidence, missed context |
| **Deciding** (what to build, what's right for users) | Little; it can structure options | Delegating judgment you should keep |

### A workflow, end to end

- **Discovery:** summarize background reading, draft interview guides, find questions to ask. Don't replace participants (see [[ch:04]] on synthetic users).
- **Framing:** stress-test a problem statement, list assumptions, generate counterarguments.
- **Ideation:** produce wide starting points, then choose deliberately.
- **Design:** generate layout and copy variations within your system, build prototypes (see [[ch:09]]), create sample data.
- **Review:** run mechanical checks (states, contrast, labels), draft test scripts and acceptance criteria.
- **Communication:** structure and tighten documents; keep your voice and verify facts (see [[ch:07]]).

### What surveys say

Surveys point the same way: heavy, rising use. Figma's State of the Designer 2026, as relayed by secondary coverage of a gated report, reports that 72 percent of surveyed designers use generative AI and that heavy users say it improves quality and speed. Another survey summary says 91 percent of designers use AI at least weekly. I couldn't verify either report, the two come from different surveys and are often confused, and both are self-reported by people who chose to respond.[[ref:figma-sotd-2026]] Read them as evidence that adoption is widespread, not as measurements of benefit.

### Your operating principles

1. **Start from the problem, not the tool.**
2. **Keep the decisions.** Let the tool produce options; you choose and can say why.
3. **Verify.** Facts, numbers, citations and behavior must be checked.
4. **Constrain.** Give the tool your system, tokens, content rules and accessibility requirements.
5. **Keep a record** of what you asked, what it produced and what you changed.
6. **Protect people's data.** Don't put confidential or personal data into tools you aren't authorized to use.
7. **Keep practicing the underlying skill.** Do some work without the tool so your judgment doesn't atrophy.

:::exercise Try it: map your own workflow (1 hour)
List what you did last week. Mark each task as exploring, drafting, transforming, checking or deciding. For each, note whether you used AI, what it saved and what you had to fix. Choose one task to hand more to AI and one to keep entirely yours, and say why.
:::

## 2. Prompting for design

### What it really is

Prompting is writing a clear brief for a system that has no context beyond what you give it. It's much closer to writing a good ticket or design brief than to finding a magic phrase. Model vendors publish guidance for their own models, and the common elements are consistent.[[ref:prompt-guide]]

:::framework A prompt that works
**Goal:** what you want and what it's for. **Context:** users, product, situation, constraints. **Inputs:** the material to work from, clearly separated. **Constraints:** what must and must not happen (tokens, accessibility rules, tone, length). **Output format:** the shape you want. **Examples:** one or two of good (and sometimes bad). **Criteria:** how you'll judge it, which the model can also use to check itself.
:::

### Techniques that help

- **Be specific about outcome and audience.** "A settings page for a finance admin who changes permissions weekly" beats "a settings page."
- **Provide the system:** tokens, component names, content guidelines, accessibility requirements.
- **Show examples** of the style or structure you want.
- **Break big tasks into steps.** Ask for a plan, review it, then ask for the next piece.
- **Ask for alternatives and trade-offs,** not one answer.
- **Ask it to check against your criteria** and say what it's unsure about.
- **Iterate on the brief,** not just the output. If results are consistently off, the brief is usually the problem.
- **Keep a library** of prompts that work, with context and date, since models change.

### Prompts in the product

When a product uses a model, the instructions it sends (system prompts, templates, examples) are part of the design. They set tone, scope, refusals and behavior. Designers should help write and test them with the same care as copy and states: version them, test them across varied inputs and document why they say what they say.

### 2026 shift

Models increasingly handle underspecified requests and longer, multi-step tasks, and agents can act across tools. That moves the skill from clever phrasing to **good specification and good review**: say what "done" means, give constraints, check the result. Tool-specific tricks expire quickly; a clear brief doesn't.

:::exercise Try it: write a brief, then improve it (1 hour)
Pick a design task (say, a tokenized empty state for a table). Write a one-line prompt and save the result. Then write a full brief using the framework and compare. Change one element at a time (add the system, an example, criteria) and note which helped most.
:::

## 3. Evaluating and directing

When producing options is cheap, **judging them well** is the job. Use the vocabulary from [[ch:01]] and the states thinking from [[ch:02]].

### A rubric for generated work

| Dimension | Questions |
| --- | --- |
| **Fit to the problem** | Does it solve the user's task? Is anything missing or invented? |
| **Hierarchy and clarity** | What's the first read? Is it the right one? |
| **System consistency** | Real tokens and components, or hardcoded and invented ones? |
| **States and edge cases** | Empty, loading, error, long text, other languages? |
| **Accessibility** | Contrast, keyboard, labels, focus, motion? (See [[ch:11]]) |
| **Content accuracy** | Are facts, numbers and labels correct? |
| **Behavior** | For code and prototypes: does it work, and for which inputs? |
| **Originality** | Specific to us, or generic? |

### How generated work fails

- **Plausible and wrong:** fluent text with incorrect facts, UI that looks right and doesn't work.
- **Sameness:** generic layouts and stock phrases. NN/g notes decent-looking UI is easy for anyone to make, so your edge is elsewhere.[[ref:nng-state-ux-2026]]
- **Invented structure:** props, components, tokens or behaviors that don't exist in your system (see [[ch:03]]).
- **Missing the unhappy paths:** generated designs tend to show success.
- **Inaccessible output:** poor structure, missing labels, low contrast. The industry baseline is already poor (see [[ch:11]]), and models learn from it.
- **Sycophancy:** models tend to agree with you, which undermines asking one to critique your work.
- **Confident numbers and citations:** check any statistic or reference against the original.

:::warning Common trap: fluency isn't accuracy
Because generated text and interfaces look finished, it's easy to skip checks you'd do on a colleague's draft. Apply at least that scrutiny, and more where the output asserts facts or will reach users unreviewed.
:::

### Directing

Directing is turning critique into a better next attempt:

1. **Name the problem specifically** ("the secondary action competes with the primary because both are filled").
2. **Say what to keep.**
3. **Give a constraint or example** that points the way.
4. **Change one thing at a time** so you learn what works.
5. **Know when to stop and do it by hand.** Past a point, directing costs more than doing.

For features that use models, evaluation is systematic: build a set of representative inputs (including hard ones), write a rubric for acceptable and unacceptable output, review samples with real users and track failure categories over time. Product Talk presents AI evals as a core discovery habit.[[ref:product-talk]] See also [[ch:02]] and [[ch:04]].

:::exercise Try it: score five generated options (2 hours)
Generate five versions of a screen with a tool. Score each on the rubric, noting the most serious problem in each. Choose one, direct two rounds of improvement with specific critiques and write what you had to fix by hand. Record how long each step took.
:::

## 4. Responsible AI

### Why designers are involved

Designers decide what a product asks of people, what it shows, how it explains itself and what happens when it fails. Those choices determine whether an AI feature is understandable, fair, safe and under the user's control. Responsible AI isn't only an engineering or legal concern.

| Area | What can go wrong | Design responses |
| --- | --- | --- |
| **Bias and fairness** | Worse performance or harm for some groups, languages or contexts | Test across groups; include diverse users; make failure recoverable; avoid sensitive attributes without need |
| **Privacy and data** | Personal data used or exposed without consent | Minimize and explain data use; real consent; control and deletion |
| **Safety and misuse** | Harmful or false output; abuse by bad actors | Limits, warnings where useful, escalation, abuse reporting |
| **Transparency** | People don't know they're dealing with AI or how it reached a result | Clear disclosure, explanation, sources |
| **Oversight and accountability** | No one is responsible; people can't intervene | Approval points, stop controls, audit trails, named owners (see [[ch:02]]) |
| **Manipulation** | Persuasive, sycophantic or dependency-forming design | Avoid dark patterns; test for overreliance; offer ways out |
| **IP** | Training data, generated output or imitation of creators | Provenance, licensing, clear asset policy |
| **Environmental and economic cost** | Heavy compute for low-value features | Ask whether it's worth it (see [[ch:05]]) |

### Regulation in 2026

This area is moving, and this isn't legal advice. Verify with counsel.

- **EU AI Act.** Obligations phase in over several years. Secondary legal analyses I found (law firm and compliance sources, not the legal text) say the Article 50 transparency duties, covering disclosure of chatbot interaction and labeling of AI-generated content and deepfakes, still apply from **2 August 2026**. They also report that an agreement to postpone high-risk deadlines was endorsed in June 2026, moving the main high-risk deadline from August 2026 to December 2027 and some product-related categories to August 2028. One source noted Official Journal publication was unconfirmed. Check the current legal position before relying on any date.[[ref:eu-ai-act-omnibus]]
- **NIST AI Risk Management Framework.** NIST published the voluntary Generative AI Profile (NIST AI 600-1) in July 2024 as a companion to its AI RMF, identifying risks specific to generative AI with suggested actions, including recording who provides human oversight and planning how to halt a system posing unacceptable risk.[[ref:nist-ai-600-1]] It's written mostly for governance, development and evaluation teams, not designers, but it's a useful vocabulary for talking to them.
- **Sector and local rules** on automated decisions, health, finance, employment and children's data vary widely.

:::framework Before you ship an AI feature
**Who** could be harmed or excluded, and how? **What data** is used, with what consent, and where does it go? **What's the worst plausible failure,** and can the person notice and recover? **Can the person tell** it's AI and what it used? **Who's accountable,** and how can people reach them? **How do we monitor** after release, and who acts? **Is the benefit worth the cost?** Record the answers with the date and decision owner.
:::

### Responsible use

- Follow your organization's policy on tools and data.
- Don't present generated content as human-made research or testimonials. Label synthetic content as synthetic (see [[ch:04]]).
- Respect others' intellectual property and check licenses for generated assets.
- Be honest with colleagues, clients and users about where AI was used when it matters to them.

:::exercise Try it: run a risk review (1 hour)
Take an AI feature (yours or one you use). Walk through the framework above and write answers. Identify the two highest risks and propose a design change for each. Present them to an engineer or PM and note what they'd change.
:::

## 5. Staying current

### What's emerging

- **Agents** that perform multi-step tasks with tools, and the approval and visibility patterns they need (see [[ch:02]]).
- **Interfaces generated at runtime,** and the systems and constraints that keep them coherent (see [[ch:03]]).
- **Design and code converging,** with design tools adding agents and code layers (see [[ch:09]]).
- **Voice, multimodal and ambient interaction,** where the screen is one channel among several.
- **Spatial and wearable computing,** niche for most product teams but shaping platform direction.
- **Evaluation as a design material,** with rubrics and eval sets as artifacts.

Each may or may not matter for your product. Your skill is judging which do.

### A method for tracking change

1. **Read primary sources:** vendor docs, standards bodies, regulators, original research. This book marks which sources were opened and which weren't.
2. **Keep a dated log:** what changed, the source, why it might matter. Revisit it quarterly.
3. **Run small experiments:** give a few hours to a new tool on a real task and write down results, rather than reading ten opinions.
4. **Be skeptical of statistics:** trace numbers to the original. Many figures about AI and design circulate without a source, get attributed to the wrong report or come from vendor surveys.
5. **Talk to peers.** What a colleague tried last month beats a headline.
6. **Separate durable from perishable.** Principles (problem framing, critique, accessibility, trust, ethics) last. Tool names and features expire.

### What it means for your career

NN/g reports a field that contracted and then stabilized unevenly, with senior and generalist roles recovering faster than entry-level and organizations expecting breadth and judgment.[[ref:nng-state-ux-2026]] What you can show matters: a portfolio that demonstrates your reasoning, measured outcomes (see [[ch:06]]), accessible and well-evaluated AI work, and the ability to build working prototypes. A small number of job postings I reviewed asked explicitly for prototyping in code with AI tools; job boards are noisy, so check what the roles you want actually request.

## Case: a prompt in three rounds

Let's watch a vague request become a useful one. The task: an empty state for an invoices table in a B2B finance tool.

**Round 1: the one-liner.**
> "Design an empty state for an invoices table."

The result: a cartoon of a clipboard, a cheery headline ("Nothing here yet!") and a button saying "Get started". Generic, no guidance, and the cartoon doesn't match your product's tone.

**Round 2: add context and constraints.**
> "You're designing for a finance admin at a mid-size company who has not created any invoices yet. Tone: calm and professional, no cartoons. Use only these tokens: `color-text-primary`, `color-text-muted`, `space-4`, `space-6`, `radius-lg`; the button component is `Button` with `emphasis="primary"`. The empty state must say what will appear here, why it's useful and what to do first. Return HTML and CSS."

Better: the structure is right and it uses your tokens. But the copy is still vague and there's no secondary path (import existing invoices).

**Round 3: add criteria and ask it to check itself.**
> "Same task. Additional requirements: the primary action is 'Create invoice'; offer a secondary text link 'Import from CSV'. The headline must be a statement, not an exclamation. Body copy: 2 sentences max, no jargon. Meet WCAG 2.2 AA: contrast 4.5:1, a heading element, a real button. After the code, list any assumptions you made and any requirement you couldn't meet."

Now the result is something you can review quickly, and its "assumptions" list tells you where to look (for example, it assumed a heading level).

**Then you review it against the rubric**, because the tool's answer is a draft: Does the copy match your voice? Is the heading level right for the page? Does the secondary link have a clear focus style? What would a first-time user think "Import from CSV" means?

What changed between rounds wasn't magic wording. It was *specification*: audience, constraints, tokens, content rules, acceptance criteria and a request for self-checking.

## A paste-ready rubric

```text
FIT:            Does it solve the user's task? (1 to 5)  notes:
HIERARCHY:      First read is the right one?            notes:
SYSTEM:         Real tokens/components, none invented?  notes:
STATES:         Empty/loading/error/long text covered?  notes:
ACCESSIBILITY:  Contrast, keyboard, labels, focus?      notes:
ACCURACY:       Facts, numbers, labels verified?        notes:
BEHAVIOR:       Works for varied inputs?                notes:
ORIGINALITY:    Specific to us, or generic?             notes:
VERDICT:        ship / fix / redo      what I changed by hand:
```

Fill it in for five generated options and you'll start seeing patterns in what tools get wrong, which lets you write better briefs.

## Prompt patterns worth trying

| Pattern | Example |
| --- | --- |
| **Act as a critic** | "Review this onboarding flow against NN/g's heuristics. List the three biggest risks and the evidence in the design for each. Don't suggest fixes yet." |
| **Generate options with trade-offs** | "Give me three approaches to bulk editing in a table. For each, list one advantage, one risk and what research would settle it." |
| **Stress test** | "Here's my problem statement. List five assumptions that might be false and a cheap test for each." |
| **Transform with rules** | "Rewrite this error message in the voice described below. Keep under 20 words. Say what happened and what to do." |
| **Checklist check** | "Here's the component spec. Which of these states are missing: loading, error, empty, disabled, long text, RTL?" |
| **Explain your reasoning** | "Before answering, state the three assumptions you're making about the users." |

A caution: models tend to agree with you. Ask for *disagreement*, "what's the strongest argument against this?", to get something useful.

## A personal AI policy

Write yours down; it keeps you honest. Example:

- **I use AI for:** first drafts, mechanical checks, summarizing my own notes, generating options to react to.
- **I don't use AI for:** final research insights, claims about users I haven't verified, anything with confidential data unless approved.
- **I always:** verify facts and numbers, check output against my system and accessibility needs, keep a record of what I asked and changed.
- **I disclose AI use when:** it affects trust in research, imagery or authorship, or when a client or policy requires it.
- **I practice without it:** one task a week done by hand, so my judgment doesn't fade.
- **I review this policy:** every three months, because tools and rules change.

## Where to go deeper

- **Evaluation design:** rubrics, eval sets and review processes.
- **AI literacy:** how models behave and fail (see [[ch:10]]).
- **Policy and governance literacy:** your organization's rules and the regulations that apply.
- **Critical reading** of research and vendor claims.
- **Teaching others:** helping your team adopt tools well, with norms and checks (see [[ch:08]]).

## Your next four weeks

| Week | Focus | You'll have |
| --- | --- | --- |
| 1 | Map your workflow and set personal rules | A one-page operating policy |
| 2 | Prompting and evaluation: briefs scored against a rubric | A tested prompt library and scored comparisons |
| 3 | A prototype built with AI under your system's constraints | A prototype and a list of what it got wrong |
| 4 | A responsible-AI risk review, plus a dated change log | A completed review with design changes, and a log with one tool experiment |

## Quick check

:::check Knowledge check 1
A tool generates a clean settings page in seconds. What do you check before it goes to design review?
---
Check against the problem and rubric: does it fit the user's task; is the hierarchy right; does it use your system's real tokens and components; are states and edge cases covered; does it meet accessibility requirements; is every label and fact accurate? Note what you had to fix, and say in the review which parts were generated.
:::

:::check Knowledge check 2
Your team wants to launch an AI feature that summarizes customer support tickets. What responsible-AI questions do you raise?
---
Who could be harmed or misled by wrong summaries; what data is used, with what permissions and retention; how people can see what a summary is based on; how errors are noticed and corrected; who's accountable and reviews quality; whether people are told it's AI; how quality is monitored after launch; and whether the benefit justifies the cost and risk. Record the answers and owners.
:::

## Further reading

:::reading Sources to open next
- NN/g, *State of UX 2026* for the career and AI context.[[ref:nng-state-ux-2026]]
- A model vendor's official prompting guide for the model you use; re-read it when the model changes.[[ref:prompt-guide]]
- NIST, *Generative AI Profile (AI 600-1)* for a risk vocabulary.[[ref:nist-ai-600-1]]
- Product Talk for evals and AI-era discovery.[[ref:product-talk]]
- Legal analyses of the EU AI Act timeline, read with the caveats above, and the Act itself.[[ref:eu-ai-act-omnibus]]
:::
