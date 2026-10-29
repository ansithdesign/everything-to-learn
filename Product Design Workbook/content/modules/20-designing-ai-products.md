Using AI in your workflow is one skill. Designing a product that *contains* AI is another, and it is where much of the new design work lies. Chat boxes, copilots, summaries, agents that act for people and interfaces that generate themselves all need new patterns, because the system is probabilistic, sometimes wrong, and increasingly able to take actions.

This chapter covers the fundamentals of AI interaction design and the 2026 frontier: agents and generative UI. It extends [[ch:02]] and connects to evaluation ([[ch:21]]) and law ([[ch:22]]).

:::pull
Designing with AI is a tool skill. Designing for AI is a systems skill: you are designing behavior under uncertainty.
:::

## 1. Is AI the right answer?

Start by asking whether the problem needs AI at all. Good fits: language and perception tasks, large-volume summarizing, personalization, search over messy content, first drafts. Poor fits: tasks where the right answer must be exact every time, where errors are costly and hard to spot, or where a simple rule works. Compare against a non-AI baseline before committing.

:::decision The cost-of-error test
List what happens if the AI is wrong 1 time in 10. If the answer is "a user wastes a minute," proceed. If it's "a patient is harmed" or "money moves," require stronger controls, human review or a different approach.
:::

## 2. Core interaction patterns

| Pattern | What it is | Design concerns |
| --- | --- | --- |
| **Chat / prompt box** | Open-ended conversation | Blank-page problem, discoverability of capabilities, history |
| **Inline suggestion** | Autocomplete, rewrite, next step | Unobtrusive, easy to accept or ignore |
| **Summarize / transform** | Condense or reshape content | Show sources; let users see the original |
| **Generate and refine** | Produce options, then iterate | Variants, undo, controls beyond re-prompting |
| **Search and answer** | Natural-language query | Citations, confidence, "no answer" states |
| **Agent / assistant** | Plans and acts across steps | Autonomy, approval, progress, undo |
| **Generative UI** | Interface assembled at runtime | Predictability, consistency, accessibility |

## 3. Principles that hold up

1. **Set expectations.** Say what it can do, what it can't and that it can be wrong.
2. **Show your work where it matters.** Sources, inputs and reasoning at the level the decision needs.
3. **Keep the user in control.** Edit, regenerate, reject, undo.
4. **Make errors cheap.** Easy to catch, easy to fix.
5. **Calibrate confidence.** Don't signal certainty you don't have.
6. **Fail gracefully.** Have designed states for refusals, uncertainty, timeouts and bad output.
7. **Learn from feedback** and make it easy to give.
8. **Protect people:** data use, consent, safety.

Google's PAIR guidebook and Microsoft's HAX toolkit are long-standing, practical references for these ideas; I did not open either for this edition, so consult them directly.

## 4. Designing for agents

An agent takes multiple steps, calls tools and may change things in the world. The design questions are about control, consent and accountability. Practitioner guidance in 2026 converges on a few patterns:[[ref:smashing-agentic]]

- **Autonomy levels the user chooses:** *suggest* (agent proposes, human acts), *ask first* (agent works but waits for approval before acting), *act and report* for low-risk tasks.
- **Match autonomy to risk.** Reading and drafting get freedom; sending, paying, deleting and publishing need confirmation.
- **A visible plan** before action and **progress** during it, in human terms.
- **Interruption points** before irreversible steps, and a stop control always reachable.
- **Undo and audit trail:** what happened, when, on whose authority.
- **Handoff and escalation:** when the agent is unsure or stuck, it asks.
- **Earned trust:** let users widen autonomy as they see good results.

:::framework Agent action review
For every action an agent can take, write: **Reversible?** **Who is affected?** **Required approval** (none, preview, explicit confirm, two-person). **What the user sees before and after.** **How to undo.** **What gets logged.** If you can't fill a row, the action isn't ready to automate.
:::

Most of this practitioner writing comes from blogs and agencies, not from controlled studies, so treat the patterns as informed convention that you should test with your users.

## 5. Generative UI

Two meanings get blurred: **design-time** generation, where AI produces screens a human reviews and ships, and **runtime** generative UI, where the interface is assembled for each user and request.[[ref:copilotkit-genui]] NN/g distinguishes the same two ideas in its 2026 research.

For runtime generative UI, sources describe a spectrum of control:

- **Controlled:** the agent picks from a fixed set of designed components and fills them with data. Predictable and accessible.
- **Declarative:** the agent emits a structured description (via protocols like AG-UI or A2UI) that a trusted renderer turns into UI.
- **Open-ended:** the agent writes arbitrary UI or code. Flexible, hardest to make safe, consistent and accessible.

Regulated settings favor the most controlled option.[[ref:copilotkit-genui]] The CopilotKit source is a vendor, and "generative UI" is used loosely in 2026, so ask which of these a person means. Your design system is the contract: if the agent can only assemble approved components, you keep consistency and accessibility by construction.

:::warning Common traps
- **Chat as default.** A text box is a lazy interface for tasks with clear structure; offer buttons, forms and presets.
- **Hidden uncertainty.** Fluent text with no cue that it might be wrong.
- **Anthropomorphism that misleads.** Names, faces and emotion that imply understanding or authority the system lacks.
- **No exit.** No way to stop, edit, undo or reach a human.
- **Feature theater.** AI added to be on the roadmap, not to solve a problem.
:::

## 6. Designing the whole experience

- **Onboarding:** teach by example prompts and good defaults.
- **Empty and failure states:** a refusal or "I don't know" is a designed moment.
- **Feedback loops:** thumbs, edits and corrections should feed improvement and be visible to users.
- **Latency:** streaming, progress and partial results change how long waits feel.
- **Multimodal and voice:** design for interruption, ambiguity and privacy in shared spaces.
- **Personalization:** explain why something was suggested and let users adjust.
- **Content and tone:** the model's voice is a brand decision ([[ch:18]]).

:::example A hypothetical agent flow
A support agent drafts a refund reply. At "suggest" level, it shows a draft and the policy it cited; the human sends. At "ask first," it prepares the refund and shows "Refund £42 to card ending 1234. Approve / Edit / Cancel." Only after a month of accurate approvals does the team consider auto-approving refunds under £10, with a daily report.
:::

:::exercise Try it: design the guardrails (3 hours)
Pick an AI feature (a summarizer, a drafting assistant or an agent). Write the cost-of-error table, define autonomy levels, sketch the plan, approval, stop and undo states, and write the copy for uncertainty and refusal. Then ask three people what they would assume the system can and can't do.
:::

## Quick check

:::check Knowledge check 1
Your team wants an agent to send emails on users' behalf automatically. What do you propose?
---
Start with draft-and-approve. Show recipient, content and reason; allow edit and cancel; log actions; offer an undo window or delayed send. Consider automatic sending only for low-risk categories after observed accuracy, with user opt-in and reporting.
:::

:::check Knowledge check 2
What is the difference between design-time and runtime generative UI?
---
Design-time: AI helps produce screens that people review and ship. Runtime: the interface is assembled per request from components or descriptions the agent selects. Runtime needs strong constraints, tests and accessibility guarantees because no human reviews each result.
:::

## Further reading

:::reading Sources to open next
- Google PAIR *People + AI Guidebook* and Microsoft HAX Toolkit (not opened for this edition).
- Smashing Magazine on designing for agentic AI.[[ref:smashing-agentic]]
- A developer's guide to generative UI, read as vendor material.[[ref:copilotkit-genui]]
- NN/g articles on generative UI.[[ref:nng-state-ux-2026]]
:::
