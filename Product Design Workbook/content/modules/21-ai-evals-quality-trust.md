You can't design an AI feature well if you can't say what "good" means and measure it. Classic UX has usability tests and metrics; AI features add a new layer, **evals**: repeatable tests of the model's behavior on realistic inputs. Increasingly, designers are expected to help write them. Job-prep material for AI product roles lists writing evals and measuring output quality as core expectations.[[ref:techinterview-aipe]]

This chapter explains what evals are, how designers contribute, and how to build and monitor trust. It extends the rubric in [[ch:12]] and the interaction patterns in [[ch:20]].

:::pull
If nobody has written down what a good answer looks like, the model's average behavior becomes your product's definition of quality.
:::

## 1. What an eval is

An **eval** is a set of test inputs plus a way to judge outputs. Think of it as a usability test for the model's behavior, repeated every time the prompt, model or data changes.

| Part | What it is | Designer's role |
| --- | --- | --- |
| **Test set** | Realistic inputs, including hard and adversarial ones | Source real user cases; add edge cases |
| **Criteria** | What good means (accurate, helpful, safe, on-tone, concise) | Define in user terms |
| **Judge** | Who or what scores: humans, code checks, or another model | Write the rubric; calibrate |
| **Threshold** | What score is good enough to ship | Join the decision with PM and engineering |
| **Loop** | Re-run on every change | Review failures, not just averages |

## 2. Types of checks

- **Code checks:** format valid, length within limit, required fields present, no banned words.
- **Reference checks:** compare to a known correct answer when one exists.
- **Rubric scoring by humans:** the gold standard for quality and tone; slow and costly.
- **Model-as-judge:** another model applies your rubric at scale. Fast, but biased, and must be calibrated against human scores.
- **Behavioral metrics in production:** acceptance rate, edit distance, regeneration rate, abandonment, escalation to a human.

## 3. How designers contribute

1. **Build the test set from real use.** Pull actual queries, tickets or tasks (with privacy care). Include the messy, ambiguous and sensitive.
2. **Define quality in user terms.** "Accurate" is vague; "names the right policy and quotes its limit" is testable.
3. **Write the rubric** with scale anchors ("1 = wrong or harmful, 3 = correct but unhelpful, 5 = correct, clear and actionable").
4. **Label examples** and calibrate with engineers so everyone scores alike.
5. **Read failures.** Cluster them. Each cluster is a design or prompt fix, a data gap or a "don't do that" rule.
6. **Decide fallbacks:** what the product does when confidence is low or the answer fails a check.

:::framework Quality rubric for an AI answer
Score each from 1 to 5: **Correct** (facts and logic), **Complete** (covers what's needed), **Grounded** (cites or uses provided sources), **Useful** (helps the user's next step), **Safe** (no harm, policy followed), **Tone** (fits voice and situation), **Honest** (admits uncertainty and limits). Add a pass/fail for any critical failure, such as a harmful or fabricated claim.
:::

## 4. Trust is designed, then earned

Trust has two failure modes: too little (people ignore a good feature) and too much (people accept wrong answers). Calibrated trust comes from honest signals and consistent behavior.

- **Show sources and let users open them.**
- **Signal uncertainty** in ways that match reality, not decorative badges.
- **Make verification easy:** highlight the passage a claim came from.
- **Be consistent** on the things that matter; users build mental models from patterns.
- **Own mistakes:** let users flag errors and show that flags matter.
- **Avoid over-claiming** in marketing and UI copy.

NN/g's State of UX 2026 frames trust as a central design problem as AI fatigue sets in.[[ref:nng-state-ux-2026]]

## 5. Testing AI features with people

Usability testing still matters, with additions:

- Test with **realistic, messy inputs**, not scripted ones.
- Watch for **over-trust** (accepting wrong output) and **under-trust** (rejecting right output).
- Include **failure moments** on purpose and watch recovery.
- Run **multi-session** studies; behavior changes as people learn the system.
- Measure **time to correct task outcome**, not satisfaction with the AI.

## 6. Monitoring after launch

Quality drifts as models, prompts, data and users change. Plan:

- A **dashboard** of acceptance, edit and regeneration rates, escalations and complaints.
- A **sampling routine**: humans review a slice of real outputs weekly.
- **Alerts** for spikes in refusals, errors or flags.
- **A change log** for every prompt or model change, and an eval run before each.
- **Incident process** for harmful output: who decides, who communicates, who fixes.

:::warning Common traps
- **Averages hide disasters.** A 95 percent score can contain the one answer that hurts someone. Read the tail.
- **Judge models agreeing with themselves.** Calibrate against human scores.
- **Testing on the examples you tuned on.** Keep a held-out set.
- **Vanity metrics.** "Messages sent" says nothing about helpfulness.
- **No owner.** Quality becomes everybody's and nobody's job.
:::

:::example A hypothetical summary feature
A ticket-summarizer is evaluated on fifty real tickets. The rubric finds summaries are accurate but drop the customer's deadline in 12 of 50. The team changes the prompt to always extract dates, adds a "key facts" strip in the UI, and re-runs the eval before release. Acceptance rate in production is then watched weekly.
:::

:::exercise Try it: a 30-case eval (half a day)
Pick an AI feature. Gather thirty realistic inputs, including five hard and three adversarial. Write a five-criterion rubric with anchors. Score outputs yourself, then have a colleague score ten and compare. Where you disagree, tighten the rubric. List the top three failure clusters and a design fix for each.
:::

## Quick check

:::check Knowledge check 1
Engineering reports 94 percent "quality" on an eval. What do you ask?
---
What the criteria and test set are, how realistic and hard the inputs are, who or what scored (and whether calibrated against humans), what the failures look like, and whether the remaining 6 percent includes harmful cases.
:::

:::check Knowledge check 2
How can a design change improve an AI feature without touching the model?
---
Better inputs (guided prompts), grounding in sources, clearer expectations, verification affordances, editing controls, fallbacks for low confidence and feedback capture all reduce harm from errors and improve outcomes.
:::

## Further reading

:::reading Sources to open next
- NIST AI 600-1 for a risk vocabulary.[[ref:nist-ai-600-1]]
- Product Talk on evals and AI-era discovery.[[ref:product-talk]]
- Your model vendor's evaluation guidance.[[ref:prompt-guide]]
:::
