AI is a good second pair of eyes and a poor final judge. In accessibility, QA and critique it can widen your coverage and speed up the dull parts, but it cannot replace testing with people, and it has a record of passing things that are wrong.

This chapter covers AI for accessibility, state coverage and QA, design critique and review preparation. It builds on [[ch:11]] and [[ch:02]].

:::pull
Use AI to find more problems. Never use it to certify that there are none.
:::

## 1. Accessibility with AI

### What helps

- **Automated checks plus AI explanation:** automated tools find contrast, missing labels and basic structure issues; AI can explain a failure and suggest a fix.
- **Draft alt text** for images, then human review.
- **Plain-language rewrites** and reading-level checks.
- **Captions and transcripts** from audio and video, edited by a person.
- **Reviewing markup** for semantic problems when you share a component's code.
- **Generating test scripts** for keyboard and screen reader checks.

### What doesn't

Sources broadly agree that automated detection covers only a fraction of WCAG issues, with estimates ranging from roughly a third to two-thirds depending on the vendor, so no tool can tell you a product is accessible.[[ref:testparty-limits]] Alt text is the clearest weak spot: a 2025 test found AI-generated alt text often missed context and that no tool found wrong or misleading alt text.[[ref:joomla-alt]] Keyboard flows, timing and focus management are hard to judge without actually using them. Those sources include vendors, so treat figures as indicative.

:::warning Common trap: AI "overlay" promises
Products claiming to make a site compliant automatically have drawn sustained criticism from accessibility practitioners and, in some cases, legal action. Fix the source (design, markup, content); don't paste a widget over the problem. WebAIM's annual analysis of the top million home pages continues to find errors on the large majority of them.[[ref:webaim-million]]
:::

### A practical routine

1. Run automated checks in design and in the browser.
2. Ask AI to review the design against WCAG 2.2 criteria and list *questions* rather than verdicts (target size, focus visibility, reflow, redundant entry, accessible authentication).[[ref:wcag22]]
3. Test with keyboard only, a screen reader and zoom.
4. Include people with disabilities in research whenever you can.
5. Record issues and owners.

## 2. State coverage and edge cases

A model is good at enumerating what you forgot. Give it a screen description and ask for every state: empty, loading, partial, error, offline, permission-limited, very long content, many items, concurrency, regulated confirmation. Then add domain-specific ones the model can't know. Use the result as a checklist, not as proof of coverage.

| Prompt | Result |
| --- | --- |
| "List every state this table can be in" | Empty, loading, error, filtered-empty, selection, bulk action, pagination edge, stale data |
| "What could go wrong in this payment step?" | Declined card, timeout, double submit, expired session, currency mismatch |
| "What does a keyboard user need here?" | Focus order, trap-free dialogs, visible focus, shortcuts |

## 3. AI as a design critic

Used well, a model is a tireless reviewer with no ego and no context. Used badly, it flatters.

- **Provide the brief.** Share the user, goal, constraints and what you want critiqued (hierarchy, copy, accessibility).
- **Give criteria.** Nielsen's heuristics[[ref:nng-heuristics]] or your own rubric produce structured feedback.
- **Ask for the strongest objections** and for what a skeptical user would struggle with.
- **Ask it to rank issues** by severity and say what evidence would confirm each.
- **Never accept praise as signal.** Models skew agreeable.

A critique from a model is a hypothesis list. Confirm the important ones with users.

## 4. Consistency and QA

- **Design-to-build comparison:** feed screenshots of design and implementation; ask for visual differences. Verify; models miss small spacing and color errors.
- **Terminology and copy consistency** against a glossary.
- **Visual regression** tools that use AI to ignore noise and flag meaningful differences.
- **Test-case drafting:** from a flow, generate acceptance criteria and test cases; review them with QA.
- **Bug-report triage:** cluster reports, find duplicates, draft reproduction steps.

## 5. Preparing for reviews

Before a design review, ask a model to play a PM, an engineer and a compliance reviewer and to list their likely questions. Then answer them in your deck. This is a rehearsal, not a replacement for the real conversation. See [[ch:07]] and [[ch:08]].

:::framework AI review prompt
**Role** (skeptical senior designer), **Artifact** (screens or description), **Context** (user, goal, constraints), **Criteria** (heuristics, WCAG 2.2 AA, system rules), **Output** (issues ranked by severity, each with evidence, a fix and a question I should answer), **Rules** (don't praise; say what you can't judge from the material).
:::

## 6. Measuring what AI adds

Track whether AI-assisted review actually finds real problems: how many of its issues you accepted, how many it missed that testing found later, and how much time it saved. After a month you'll know where to trust it.

:::example A hypothetical audit
You ask a model to review a checkout form. It flags missing labels, low-contrast placeholder text and no error summary. It misses that the date field traps keyboard focus, which you find in ten minutes of keyboard testing. Your routine becomes: AI for the broad list, a person for interaction.
:::

:::exercise Try it: AI vs human audit (3 hours)
Pick one screen. Get an AI review, then audit it yourself with keyboard, screen reader and zoom. List issues found by each and by both. Note what the model missed and what it caught that you didn't. Write a one-paragraph rule for how you'll use it next time.
:::

## Quick check

:::check Knowledge check 1
A tool reports "no accessibility issues found." What does that tell you?
---
Only that the automated checks it ran found nothing. They cover a fraction of WCAG criteria and can't judge meaning, keyboard flow or screen reader experience. Continue with manual and user testing.
:::

:::check Knowledge check 2
Why does an AI critique often feel positive?
---
Models tend toward agreeableness. Counter it by asking for the strongest objections, ranking by severity, forbidding praise and requiring evidence for each issue; then verify with users.
:::

## Further reading

:::reading Sources to open next
- W3C WCAG 2.2.[[ref:wcag22]]
- WebAIM, *The WebAIM Million*.[[ref:webaim-million]]
- NN/g heuristics for structured critique.[[ref:nng-heuristics]]
- Evidence on automated-testing limits, read critically.[[ref:testparty-limits]]
:::
