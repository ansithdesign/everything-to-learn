Here's a research story that happens every week somewhere. A team runs five interviews. Every participant says "yes, I'd definitely use that." The team ships. Almost nobody uses it.

What went wrong? The participants weren't lying. People are just bad at predicting their own behavior, and the team asked questions that invited polite agreement. The research *felt* like evidence and wasn't.

Good research is mostly about *not fooling yourself*. And in 2026 there's a new way to fool yourself: AI tools that transcribe, tag and summarize in minutes, and even "synthetic users" who answer questions for you without existing. NN/g's January 2026 outlook argues research becomes *more* important in an AI-heavy world, partly because user insight shapes how AI systems are trained and customized.[[ref:nng-state-ux-2026]]

This chapter takes you through methods, usability testing, synthesis and journey mapping, then adds two skills your list doesn't have: using AI in research responsibly, and researching AI products.

:::pull
Research isn't a phase you finish. It's the habit of finding out you're wrong as cheaply and early as possible.
:::

## 1. Choosing the right method

The most common research mistake is picking the method first. Start with the question and the decision it will inform. NN/g's classic framing puts methods on two axes: **attitudinal vs. behavioral** (what people say vs. what they do) and **qualitative vs. quantitative** (why and how vs. how many).[[ref:nng-methods]]

| Your question | Reach for |
| --- | --- |
| What problems and needs exist, and why? | Interviews, field studies, diary studies |
| How many people, how big is it? | Surveys, analytics |
| Can people use this? | Usability testing |
| Does the structure make sense? | Card sorting, tree testing |
| Which version performs better? | A/B tests |
| What do people actually do at scale? | Product analytics, session data |

### Interviews

The principles popularized by Rob Fitzpatrick's *The Mom Test* are worth tattooing somewhere: ask about their life, not your idea; ask about specific past events, not opinions about the future; and talk less.[[ref:mom-test]]

- Prefer "Tell me about the last time you..." to "Would you ever...?"
- Follow up on concrete examples.
- Treat compliments and "I'd definitely use that" as noise.
- Record with consent and note what you *saw* as well as what was said.
- If nothing surprised you, you probably asked about what you already believed.

### Surveys and their limits

Common failures: leading questions, double-barreled questions ("fast and reliable?"), unbalanced scales and unrepresentative samples. Pilot everything, keep it short, and decide beforehand which decision each question informs.

### Sampling and bias

Who you talk to caps what you can claim. Name your target group, recruit for the *behaviors* that define it, and be honest about who's missing. The usual suspects: confirmation bias (seeing what fits your belief), leading questions and social desirability (answers people think you want), sampling and survivorship bias (only hearing from people who stayed or are easy to reach) and researcher effects (your tone and reactions).

:::warning Common trap: "five users is enough"
NN/g's argument is about iterative qualitative testing with a small group of one user type, but it often gets stretched into a license for one small study about everything.[[ref:nng-five-users]] Use small samples to find problems iteratively, bigger ones to *measure*, and more groups when you have more kinds of users.
:::

### Ethics and privacy

Get informed consent that says what you record, how it's stored and who sees it. Minimize personal data and pay people fairly. If you use AI tools for transcription or analysis, you're sending participant data to a third party: check your policy, your consent wording and local law first.

:::exercise Try it: a one-page research plan (1 hour)
For a real question, write: the decision this informs, research questions, method and why, participants (who, how many, how recruited), interview guide or tasks, analysis approach, risks and report date. Then ask yourself: if the result came back the opposite, would we do anything differently? If not, rewrite the question.
:::

## 2. Usability testing

Usability testing watches real people try realistic tasks to find where the design fails. A solid test has:

- **Tasks written as goals**, not instructions: "You want to know what you owe this month," not "Click Billing."
- **Think-aloud** with minimal prompting in moderated sessions.
- **Success criteria defined beforehand.**
- **Observation first, interpretation later.**

Moderated sessions give depth and let you probe; unmoderated ones give scale and speed with less context.

### What to measure

- **Task success** (with or without help).
- **Time and errors**, when you need comparison.
- **Severity** of problems, usually by frequency, impact and persistence.
- **Standardized questionnaires** like the System Usability Scale (SUS) and Single Ease Question (SEQ), read against benchmarks and your own baseline, not as pass/fail.

### Turning findings into action

A list of observations isn't a result. Keep three layers separate: **observation** ("three of five missed the filter"), **interpretation** ("it doesn't look like a button") and **recommendation** ("make it a labeled control").

### 2026 shifts

- **Unmoderated and AI-moderated testing is cheaper.** Great for narrow, well-specified tasks. Check what the moderation actually did; a script that can't follow up misses the "why."
- **Prototypes are more realistic.** A working prototype is quick to build now, which improves validity, but a polished one invites feedback on polish and hides weak ideas.
- **You're testing behavior, not screens.** For AI features a test needs varied inputs and bad outcomes, not one demo path.

:::exercise Try it: five sessions (a week)
Write four tasks, run moderated sessions with five people from your target group, record with consent and write observations only after each. Afterwards group by task, rate severity and present the top three problems with evidence and a recommendation each.
:::

## 3. Synthesis

Synthesis is turning raw material into something decision-ready. A useful chain:

**Observation** → **Pattern** (across people) → **Insight** (why it matters) → **Recommendation.**

Skip steps and you get the classic failure: a deck of quotes and a list of opinions. A good insight is specific, backed by multiple pieces of evidence, explains behavior and implies a decision.

### Methods worth knowing

- **Affinity mapping:** group observations bottom-up. Resist sorting into categories you already had.
- **Thematic analysis:** a more rigorous way to code data and develop themes. Braun and Clarke's *reflexive* approach treats the researcher's interpretation as part of the method.
- **Jobs to be done:** frame needs as progress someone wants to make in a circumstance, not demographics or features.
- **Personas, carefully:** useful when built from real patterns, fiction when invented from assumptions.

:::framework Label the strength of every insight
**Strong:** observed across multiple participants *and* corroborated by a second source (analytics, another method). **Moderate:** across several participants in one method. **Weak:** one or two participants, or stated opinion. Say it in the deck. It's the single best habit for keeping stakeholders honest about what you know.
:::

:::exercise Try it: an evidence trail (2 hours)
Take your five sessions and produce five insights. Link each to the exact quotes or clips behind it and label its strength. Give them to a colleague and ask them to challenge one. Revise.
:::

## 4. Journey mapping

A journey map shows a person's experience over time as they pursue a goal: stages, actions, thoughts, emotions, touchpoints, and where the problems and opportunities lie. NN/g describes it as organizing user actions into a timeline with a lane of thoughts and emotions.[[ref:nng-journey-mapping]] Cousins include empathy maps, experience maps and **service blueprints**, which add the back-stage actions and systems behind each step.

What makes a map *useful*:

- **It's grounded in research.** If the emotions line is invented, the map is decoration.
- **It has one actor and a defined scope.** "The customer's journey" is too broad to act on.
- **It ends in decisions:** prioritized opportunities with owners.
- **It stays alive.** A map printed once and hung on a wall has already expired.

### 2026 shifts

Journeys now include chats, assistants and tools where your product is one step. Map those, and map where control moves between person and system. Also calibrate emotional low points with quantitative data (drop-off, support volume) rather than guessing.

:::exercise Try it: map one real journey (a day)
Pick one goal and one actor. Use at least five real sources (interviews, support tickets, analytics). Build the map and mark the evidence for each emotion. Choose the top three opportunities and say what you'd test first.
:::

## 5. Using AI in research

### Where AI helps

Transcription, first-pass coding and tagging, summarizing long transcripts, drafting interview guides, finding examples across large sets of notes. For well-defined, deductive tasks (apply this codebook to these transcripts), evidence points to moderate-to-good agreement with human coders. A 2026 systematic review of 30 studies, which I saw only in a secondary summary, reported agreement ranging from moderate to substantial (Cohen's kappa roughly 0.40 to 0.91, median about 0.72) and big time savings, with trouble on cultural nuance and context-dependent coding.[[ref:llm-coding-evidence]] Treat those numbers as indicative: the evidence base is small. The same summary found agreement lower for open-ended, inductive coding than for coding against a fixed codebook, and that humans still produced richer codes and theme synthesis. (Human coders also often agree with each other only moderately, so the benchmark isn't perfect either.)

### Where it fails

Some vendors sell "synthetic users": AI-generated participants who answer your questions. NN/g tested this directly by re-running three earlier studies, using ChatGPT and a dedicated synthetic-user product. What they found:

- Synthetic users were **overly agreeable** (they said they'd finished courses real learners hadn't).
- They produced **long lists of needs with no priority** ("synthetic users seem to care about everything").
- Their concept feedback was **favorable but vague**.
- Value was mostly limited to desk-research-style questions like describing a typical workday.

NN/g's recommendations: use them only to *supplement* real research (desk research, preparing studies, piloting an interview guide, drafting proto-personas), treat the output as hypotheses, disclose when findings are synthetic, avoid them for niche populations and low-maturity organizations that might mistake them for the real thing.[[ref:nng-synthetic-users]]

:::warning The risk is organizational, not technical
The danger isn't that a synthetic user is wrong. It's that a cheap, instant, confident answer replaces the slower, more uncomfortable work of talking to real people, especially in teams that already struggle to fund research.
:::

### A responsible protocol

1. **Decide what AI may do.** Transcription and first-pass tagging: usually fine. Final insights and decisions: no.
2. **Protect participants.** Check consent language, data handling and vendor terms; strip identifiers where possible.
3. **Keep the evidence trail.** Every AI theme must link back to underlying quotes, or it's unverified.
4. **Verify.** Spot-check quotes against recordings; models can paraphrase, merge or invent.
5. **Pilot and compare.** Code a sample both ways and note where they differ.
6. **Watch for sycophancy and sameness.** Models drift toward agreeable, average answers. Hunt for the outlier and the contradiction.
7. **Disclose** what AI did and what humans did.

:::exercise Try it: the comparison experiment (half a day)
Take five transcripts. Code them yourself first, no AI. Then have an AI tool code the same ones with the same codebook. Compare: what did it miss, add or get wrong, and where were its quotes inaccurate? Write a one-page protocol for how your team will and won't use AI in analysis.
:::

## 6. Researching AI products

AI features change what research needs to look at:

- **Trust and calibration.** Do people over-trust or under-trust it? Do they check its work? Study the behavior, not the stated attitude.
- **Failure modes.** Collect and categorize real failures: wrong, refused, unsafe, right for a different question, slow. Decide which matter most to users.
- **Wizard-of-Oz tests.** Simulate the feature with a person or scripted prototype before building it, to learn whether the interaction is worthwhile.
- **Longitudinal behavior.** Novelty fades. Does use persist past week one, and where does it quietly stop?
- **Evals as research.** Systematic evaluation against a rubric is becoming a core product habit; Product Talk frames AI evals as a new discovery habit.[[ref:product-talk]] Researchers are well placed to write the rubric, collect representative inputs and review results with real users.

## Case: five onboarding sessions

Let's follow a small study from question to insight so you can see how the pieces connect.

**The decision.** A product team is deciding whether to ship a new in-app onboarding checklist or keep the old product tour. Time to decide: two weeks.

**The questions.** (1) Can new admins complete setup without help? (2) Where do they hesitate? (3) Does the checklist change what they do first?

**The plan.** Moderated usability sessions with five new admins from the target segment (recruited from a waitlist, not colleagues), 40 minutes each, with a prototype that has real data. Tasks are goals: *"You've just signed up for your team. Get your first project ready for two colleagues."* Success is defined beforehand: invites sent and one project created without hints.

**What happens.** Sessions are recorded with consent. The note-taker logs observations in a shared sheet: time, what happened, and a direct quote if there is one. No interpretations yet.

| Observation | Participants | Strength so far |
| --- | --- | --- |
| Skipped "Connect calendar" without reading it | 4 of 5 | Moderate |
| Said "I'll do that later" about integrations, then forgot | 3 of 5 | Moderate |
| Completed "Invite team" in under 30 seconds | 5 of 5 | Strong for this task |
| Looked for progress indicator, found none | 3 of 5 | Moderate |
| Asked "what happens if I skip this?" | 4 of 5 | Moderate |

**From observation to insight.** The team groups observations and writes insights, each with a recommendation and a strength:

1. *Admins treat optional-looking steps as skippable and rarely return to them.* (Moderate; supported by skipping, "later" quotes and no revisits within the session.) → Mark the two steps that affect core value as required, and say *why*.
2. *People can't tell how much is left.* (Moderate.) → Add a visible progress indicator and a "~3 min left" estimate.
3. *Inviting teammates is easy and satisfying.* (Strong for this task.) → Keep it early, it creates momentum.

**What they don't claim.** Five people can't tell you what percentage of all admins will skip calendar connection. The report says so: *"These are qualitative findings. To measure the effect, we recommend an A/B test with activation as the primary metric."* That sentence is what makes the research trustworthy.

**The outcome.** The team ships the checklist with required steps and progress, plus an experiment. One decision, informed by evidence, with honest limits.

## A research plan template

```text
Decision this informs:   [what will we do differently depending on the answer?]
Research questions:      [2 to 4, specific and answerable]
Method and why:          [method; why it fits these questions]
Participants:            [who, how many, how recruited, who is excluded]
Materials:               [prototype, guide, tasks, consent form]
Success measures:        [what counts as success, defined in advance]
Analysis plan:           [how you will code and synthesize; who reviews]
Risks and limits:        [bias, sample, prototype fidelity, AI tools used]
Timeline and owner:      [dates; who reports to whom]
What would change my mind: [the result that would make us choose differently]
```

That last line is the underrated one. If nothing could change your mind, you're not researching, you're confirming.

## Better interview questions

| Instead of... | Ask... | Why |
| --- | --- | --- |
| "Would you use a feature that does X?" | "Tell me about the last time you needed to do X." | Past behavior beats predictions |
| "Do you like this design?" | "What would you do next? What did you expect to happen?" | Opinions are cheap; expectations are informative |
| "Is the navigation clear?" | "Where would you look to find your invoices?" | Tasks reveal problems; ratings hide them |
| "Don't you think it's too complicated?" | "How did that feel?" | Leading questions get agreement |
| "How much would you pay?" | "What are you paying for this today, and what else did you consider?" | Hypothetical pricing is unreliable |
| (silence is awkward, so you fill it) | (wait three more seconds) | People often say the real thing after a pause |

## Common research mistakes

- **Recruiting friends and colleagues.** They're polite and they know too much. Recruit the real segment.
- **Testing with a prototype that only has one path.** People stay on the rails; real use doesn't. Add realistic data and dead ends.
- **Helping too soon.** If they're stuck, wait. Where they struggle is the finding.
- **Reporting opinions as findings.** "People hated it" isn't a finding. "Four of five abandoned at step 3 and said X" is.
- **Skipping the evidence trail.** Every insight should link to quotes and clips.
- **Presenting too many findings.** Five clear, prioritized insights beat thirty. Rank by severity and decision impact.
- **Treating research as a one-off.** Even one hour a week of customer contact beats a big study once a year.

## Where to go deeper

- **Quant literacy:** sampling, confidence intervals, effect size, and why a small difference in a big sample might not matter.
- **Product analytics:** funnels, retention and event data (see [[ch:06]]).
- **Research operations:** recruitment, consent, repositories, tooling, so research can happen weekly, not just in crisis.
- **Facilitation and storytelling:** evidence only changes decisions when stakeholders feel it (see [[ch:07]]).
- **Accessibility research:** include people who use assistive technology as participants (see [[ch:11]]).

## Your next four weeks

| Week | Focus | You'll have |
| --- | --- | --- |
| 1 | A research plan and five interviews | Plan plus evidence-linked insights |
| 2 | Five usability sessions | Severity-rated findings and recommendations |
| 3 | Synthesis with strength labels, then a journey map | An insight deck and an evidence-backed map |
| 4 | The AI comparison experiment, plus a failure taxonomy for an AI feature | A one-page protocol and a rubric |

## Quick check

:::check Knowledge check 1
A stakeholder wants to replace the next round of interviews with synthetic users to save time. What do you say?
---
Explain the evidence: NN/g's re-runs found synthetic users overly agreeable, shallow and unreliable on concept feedback, and they recommend them only as a supplement for desk research, preparation, piloting guides and proto-personas, with disclosure. Offer a cheaper real alternative (fewer, shorter, targeted interviews), and use synthetic users to sharpen hypotheses that you then test with people.
:::

:::check Knowledge check 2
Your AI tool produced the theme "Users are frustrated by onboarding." What do you do before it goes in a report?
---
Trace it to evidence: find the actual quotes and behaviors, verify them against recordings, check how many participants it covers and look for contradictions. Then rewrite it as a specific insight (what happened, for whom, why it matters), label its strength and note that AI produced the first-pass theme.
:::

## Further reading

:::reading Sources to open next
- NN/g, *When to Use Which UX Research Methods*.[[ref:nng-methods]]
- NN/g, *Why You Only Need to Test with 5 Users* (and its caveats).[[ref:nng-five-users]]
- NN/g, the article testing synthetic users against three real studies.[[ref:nng-synthetic-users]]
- NN/g, *Journey Mapping 101*.[[ref:nng-journey-mapping]]
- Rob Fitzpatrick, *The Mom Test*.[[ref:mom-test]]
- Product Talk for continuous discovery and AI evals.[[ref:product-talk]]
:::
