A designer spends six weeks on a beautiful onboarding flow. It ships and metrics barely move. Turns out nobody was dropping off at onboarding. They were leaving two weeks later, when they hit the first real task and couldn't figure out how to do it.

The craft was great. The *problem* was wrong.

That's what discovery and strategy are for: deciding what's worth designing *before* you pay to design it. It's also the least automatable part of the job. NN/g's 2026 outlook says the practitioners who'll do best are "deep thinkers" who understand user problems and link them to business goals, and it warns against "design theater" that produces artifacts without results.[[ref:nng-state-ux-2026]]

This chapter covers UX strategy, continuous discovery, competitive analysis and market awareness, then adds three things your skill list leaves out: metrics fluency, strategy for AI products and the art of making your case. (Flows, journey maps and IA are taught in depth in [[ch:04]] and [[ch:02]]; here we focus on how to use them *strategically*.)

:::pull
A beautiful solution to the wrong problem is the most expensive kind of design.
:::

## 1. UX strategy

### Strategy is a plan

A strategy isn't a list of goals or a vision statement. Richard Rumelt's *Good Strategy / Bad Strategy* gives it a "kernel" of three parts: a **diagnosis** of the challenge, a **guiding policy** for dealing with it, and **coherent actions** that carry out the policy. For UX: what's actually going wrong or possible (diagnosis), what approach will we take *and what will we refuse to do* (policy), and what specific work follows (actions).

In practice, a UX strategy is a short, argued document that answers: who is this for, what problem are we solving for them, why will our approach win, how will we know, and what are we *not* doing.

:::framework A one-page UX strategy
**Context** (what we know and how). **Diagnosis** (the core problem, in a sentence). **Target users and their job.** **Approach** (guiding policy, including what we won't do). **Bets** (3 to 5 pieces of work, ordered, each tied to an outcome). **Measures** (leading and lagging). **Risks and assumptions** (what must be true, and how we'll test it). A strategy that can't say what it excludes isn't one yet.
:::

### Discovery vs. delivery

**Discovery** decides what to build and why: find problems, frame them, test ideas cheaply. **Delivery** builds and ships. Teams that only deliver ship fast in the wrong direction; teams that only discover never ship. Run them in parallel.

Marty Cagan's four risks give you a lens for any idea: **value** (will people want it?), **usability** (can they use it?), **feasibility** (can we build it?) and **viability** (does it work for the business?). Discovery exists to cut those risks before you commit.[[ref:svpg-risks]] Designers own usability and lean heavily into value, but strong ones help the team face all four.

### Continuous discovery

Teresa Torres's *Continuous Discovery Habits* describes a **product trio** (typically PM, designer, engineer) talking to customers *every week* and keeping an **opportunity solution tree** current: a desired outcome at the top, customer opportunities (needs, pains, desires) beneath it, then solutions, then assumption tests that decide which solution to pursue.[[ref:product-talk]] Its power is making learning a habit instead of a project. The cadence is the hard part; one vendor claim that fewer than one in five teams sustain a weekly rhythm is unverified, but it matches common experience.

:::definition Outcome vs. output
An **output** is something you make (a feature, a screen). An **outcome** is a change in behavior or result that matters (more people finish setup, fewer support contacts). Strategy and discovery organize around outcomes; roadmaps made of outputs ask the team to deliver, not learn.
:::

### Framing and prioritizing

- **Write the problem without the solution.** "Users need a dashboard" is a solution; "New admins can't tell whether setup is complete" is a problem.
- **Ask why until you hit something a user would recognize.**
- **Use "how might we"** to open the space without assuming an answer.
- **Describe the situation:** who, in what circumstance, trying to achieve what.
- **Write down the assumptions** in your framing and test the riskiest first.

Frameworks like RICE or impact-effort give you a shared vocabulary, not an answer. Their weakness is false precision: scores are guesses. Use them to make assumptions visible, and always ask what you're *not* doing.

:::exercise Try it: write a strategy memo (2 hours)
For a product you know, write one page using the framework above, including one thing the team should stop or not start. Share it with a PM or engineer and ask where they disagree. The disagreement is the useful part.
:::

:::exercise Try it: build an opportunity solution tree (2 hours)
Pick an outcome. List five opportunities drawn from *research*, not ideas. Under the top one, add three solutions. For the most promising, list the assumptions that must be true and design the cheapest test for the riskiest.
:::

## 2. Competitive analysis

### It's not a feature checklist

Competitive analysis answers: how do people solve this today, what do they like and dislike, where are the gaps, and where do we want to differ. Competitors include **direct** rivals, **indirect** ones (different approach, same job) and **substitutes**, including spreadsheets, email and doing nothing. For many B2B products, the biggest competitor is the existing workflow.

### A method that works

1. **Define the question.** "How do competitors handle admin onboarding?" is answerable; "analyze competitors" isn't.
2. **Choose the set:** a handful of direct, two or three indirect, and the status quo.
3. **Collect consistently:** walkthroughs, heuristics, pricing and packaging, positioning, reviews, support content.
4. **Capture what they do *and* why you think they do it.**
5. **End with implications:** what's table stakes, where's the gap, what do we copy, adapt or ignore?

:::warning Common trap: copying a feature isn't copying a strategy
A competitor's feature is the visible end of decisions about customers, pricing, data and architecture that you can't see. Ask what problem it solves for *them*, and whether you share it.
:::

AI tools can summarize competitor sites, reviews and release notes in minutes. That makes collection cheap and interpretation valuable. Verify what AI says against the source, because summaries can be wrong, stale or invented, and use the time you save to walk through their product yourself and talk to their customers.

:::exercise Try it: a teardown with implications (half a day)
Pick one competitor and one flow. Walk it end to end, capturing screenshots and decisions. Write a page: what they do, why you think so, where it works and fails, three implications for you. Mark which statements are observed and which are your inference.
:::

## 3. Market awareness

A designer who understands the business makes better decisions and gets taken more seriously. The essentials:

- **Customers and segments.** In B2B the user, buyer and decision-maker are often three different people. A design for "users" in general serves nobody well.
- **Positioning.** What category are we in, what do we do better, for whom? April Dunford's *Obviously Awesome* is a clear treatment.
- **Business model and pricing:** free trials, seats, usage-based pricing and upgrade paths all shape design.
- **Go-to-market.** Product-led (try it yourself) and sales-led (guided) need different onboarding, proof and interfaces.
- **Unit economics, at a basic level:** acquisition cost, retention, lifetime value, and why a small change in activation or churn can beat a new feature.
- **Industry dynamics:** regulation, procurement, integrations, incumbents.

### The 2026 job market

NN/g's State of UX 2026 describes a boom after the pandemic, a sharp contraction around 2023 and 2024 and an uneven stabilization since, with senior and generalist roles recovering faster than entry-level ones and organizations demanding "breadth and judgment, not just artifacts."[[ref:nng-state-ux-2026]] A small sample of job postings I reviewed in October 2026 showed some segments asking for designers who can build working prototypes, often with AI coding tools, and favoring senior hires. Job boards are noisy, so treat that as a signal to investigate, not a statistic.

Also be careful with numbers repeated across blogs about 2026 design careers. Several are attributed inconsistently across articles and come from gated reports, so trace them to the original or discount them.[[ref:figma-sotd-2026]]

## 4. Flows, journeys and IA

You learned these as craft in [[ch:04]] and [[ch:02]]. Their *strategic* uses are different:

- **Journey maps at strategy level** show where the experience breaks across the whole relationship, including parts you don't own (sales, support, billing). The best discoveries often sit *between* teams.
- **Service blueprints** expose operational cost: every manual step behind a screen is a cost, a risk and an opportunity.
- **IA for complex products** is domain modeling. Deciding what the objects are, how they relate and what they're called shapes the whole product. Get the model wrong and no interface fixes it.

## 5. Metrics fluency

### Metrics design can move

- **Activation:** share of new users reaching first meaningful value.
- **Task success and time:** how well the product supports a key job.
- **Retention and engagement:** whether people come back, and how deeply.
- **Support contacts and error rates:** often the most honest signal of design problems.
- **Satisfaction (SUS, SEQ, NPS):** used carefully and in context.

Google's HEART framework (happiness, engagement, adoption, retention, task success) is a common way to connect product goals to user-centered metrics. Pair a **leading** measure (behavior you can move fast) with a **lagging** one (the business result).

### Experiments

A/B tests compare versions with real users and can settle what opinion can't. They need enough traffic, a clear hypothesis, a primary metric chosen in advance and patience. They tell you *what* performed better, never *why*, so pair them with qualitative work.

### Talking in business terms

State the problem in terms the business already tracks, the evidence, the change, the expected effect and how you'll check. "This step loses 30 percent of people and users tell us pricing is unclear; we'll simplify the summary and measure completion and support contacts" beats "the page is confusing." (That 30 percent is illustrative, not real data.)

:::exercise Try it: turn a design change into a measurable bet (1 hour)
Pick an improvement you believe in. Write the hypothesis ("If we..., then..., because..."), the primary metric and its baseline, how long you'd run it, what would make you stop and what you'll do if it fails. If you can't name the baseline, finding it is step one.
:::

## 6. Strategy for AI products

AI features aren't just features with a smarter engine. They change the strategy:

- **Quality is probabilistic.** A feature can be good on average and terrible for one user or case. Define "good enough" and measure it.
- **Cost scales with use.** Each interaction can carry real cost, which affects pricing, limits and defaults.
- **Models are shared infrastructure.** If your edge is model access, competitors can match it. Durable advantage tends to come from data, workflow integration, distribution, trust and design.
- **Trust is the product.** NN/g says it's built through transparency, user control, consistency and support when systems fail.[[ref:nng-state-ux-2026]]
- **Fatigue is real.** NN/g calls 2026 a year of AI fatigue, with users tired of low-value AI features and "AI slop."[[ref:nng-state-ux-2026]]

:::decision An AI feature checklist
**Problem:** is there a real, frequent, painful user problem, or are we adding AI because we can? **Fit:** is a probabilistic answer acceptable, and can people check or undo it? **Quality:** how will we measure good output (rubric, eval set, human review)? **Risk:** what's the worst plausible failure and who bears it? **Cost:** what does each use cost and does pricing support it? **Differentiation:** what makes it hard to copy? **Fallback:** what does the person do when it fails?
:::

Product Talk treats AI evals as part of continuous discovery: moving from informal vibe checks to systematic evaluation so teams can see whether a change helped or hurt quality.[[ref:product-talk]] As a designer, help define the rubric, the representative inputs and the review process, and treat failure cases as discovery material.

### Prototype fast, validate well

AI coding and design tools let you build a convincing prototype in hours. That's a real advantage for discovery. It's also a trap: a polished prototype can draw enthusiastic reactions to an unvalidated idea, because people respond to finish, not value. Test whether people would *use* it, *pay* for it or *change behavior*, not whether it looks good.

:::warning Fast is not the same as validated
Speed of building doesn't shrink what you don't know about users. It lets you ask your questions earlier, but you still have to ask them, and get answers from real people.
:::

## 7. Making your case

Strategy nobody understands changes nothing.

- **Write.** Short decision memos (context, options, recommendation, risks) travel further than decks.
- **Tell it with evidence.** Combine a number, a quote and a clip. Each persuades a different person.
- **Know the decision-maker's problem** and frame your recommendation as a solution to *their* goal.
- **Offer options.** Two or three paths with trade-offs and a recommendation beat a single proposal to accept or reject.
- **Be explicit about uncertainty:** what you know, believe and are guessing. It builds credibility over time.

## Case: from request to bet

Let's walk one idea through the whole chapter. The request from the VP of Sales: *"Customers keep asking for a dashboard. Can design build one?"*

**Step 1: Turn the solution into a problem.** "A dashboard" is a solution. Ask: what are customers trying to do when they ask for it? In five short calls with customers and two with account managers, a pattern emerges: *admins can't quickly tell which teams haven't adopted the product, so they can't justify the renewal to their own boss.*

**Step 2: Write the diagnosis.** *"Admins have no fast way to see adoption by team, which makes renewal conversations hard and hides at-risk accounts."* That's a sentence a team can argue with, which is exactly what makes it useful.

**Step 3: Pick the outcome.** Not "ship a dashboard," but *"increase the share of admins who can show adoption to their stakeholders, measured by exports or shares of the adoption view per account per quarter."* Plus a business tie: renewal rate for accounts that use the view.

**Step 4: Map the opportunity solution tree.**

```text
Outcome: more admins can demonstrate adoption to stakeholders
├── Opportunity A: "I can't see which teams are inactive"
│   ├── Solution 1: Adoption-by-team table with last-active dates
│   └── Solution 2: Weekly email summary to admins
├── Opportunity B: "My boss wants a number, not a tool"
│   └── Solution 3: One-click exportable adoption report
└── Opportunity C: "I find out about drop-off too late"
    └── Solution 4: Alert when a team goes inactive for 14 days
```

**Step 5: Surface assumptions for the most promising solution (Solution 3).** What must be true? *Desirability:* admins actually share reports. *Usability:* they can find and generate it. *Feasibility:* we have clean adoption data per team. *Viability:* it improves renewals enough to justify the work.

**Step 6: Test the riskiest assumption cheaply.** The riskiest is probably desirability: *would admins really share this?* A quick test: build a static, hand-made version of the report for five customers and email it. Measure whether they forward it or reply with changes. Cost: two days. If three of five share it within a week, move on. If none do, the dashboard would have been a costly miss.

**Step 7: Decide and write it down.** The memo says: problem, evidence, three options with trade-offs, recommendation (ship the exportable report first, defer the live dashboard) and what we'll measure. The VP gets an answer to their *goal*, not just their request.

Notice what design contributed: framing, talking to users, structuring options, designing a minimum test and writing the case. Not a single screen was drawn until step 6.

## A strategy memo template

```text
TITLE:           [what this memo decides]
CONTEXT:         [what we know; 3 to 5 bullets, with sources]
DIAGNOSIS:       [the core problem or opportunity, one sentence]
WHO IT'S FOR:    [target users and their job to be done]
APPROACH:        [guiding policy; what we will NOT do]
BETS:            [1. ...  2. ...  3. ...  each with the outcome it moves]
MEASURES:        [leading and lagging, with baselines]
RISKS:           [assumptions and how we'll test them]
OPTIONS:         [A, B, C with trade-offs; recommendation]
DECISION NEEDED: [who decides, by when]
```

## Positioning in one table

When you synthesize a teardown, put it in a form people can use:

| Dimension | Us | Competitor A | Competitor B | The status quo (spreadsheets) |
| --- | --- | --- | --- | --- |
| Who it's built for | Admins at mid-size teams | Enterprise IT | Individuals | Anyone |
| Time to first value | ~10 min | Days (needs setup) | Minutes | Hours, manual |
| Where they're strong | Ease, speed | Governance | Price | Familiarity, flexibility |
| Where they're weak | Reporting depth | Complexity | No team features | Errors, no history |
| What it means for us | Lean into speed; close the reporting gap | Don't compete on governance yet | Watch if they add teams | Easiest "competitor" to beat on reliability |

The last row is the whole point: every comparison should end in a decision.

## Discovery questions

- "Tell me about the last time you tried to [do the job]. What happened?"
- "What did you do before you found this?" (the real competitor)
- "What's the worst part of how you do this today?"
- "If this problem went away tomorrow, what would change for you?"
- "Who else is involved, and who has to say yes?"
- "What have you tried that didn't work?" (reveals what *not* to build)
- "What would make you stop using this?" (reveals risk)

## Where to go deeper

- **Product sense:** judging, with reasons, whether an idea is valuable, feasible and viable. Practice by critiquing products out loud.
- **Technical literacy:** knowing what's cheap, expensive or impossible, including what AI models can and can't do (see [[ch:10]]).
- **Financial literacy:** the unit economics of your products (see [[ch:06]]).
- **Writing and facilitation,** the most leveraged soft skills (see [[ch:07]]).
- **Ethics:** dark patterns, bias, privacy and safety are part of strategy now (see [[ch:12]]).

## Your next four weeks

| Week | Focus | You'll have |
| --- | --- | --- |
| 1 | Problem framing and a one-page strategy | A memo reviewed by a PM |
| 2 | An opportunity solution tree plus a competitive teardown | A tree with one test designed, and a marked-up teardown |
| 3 | Metrics and a measurable bet | A hypothesis with baseline and decision rule |
| 4 | An AI product bet with an eval rubric | A memo: problem, risks, rubric, test plan |

## Quick check

:::check Knowledge check 1
A stakeholder wants an AI chat assistant "because everyone has one." How do you respond?
---
Reframe from solution to problem: which user task is painful, frequent and suited to a probabilistic answer? Ask what would make it valuable and hard to copy, how quality would be measured, how users could check, correct or recover from errors, and what each use costs. If the case is weak, propose a smaller test or a non-AI improvement. NN/g notes users are experiencing fatigue from low-value AI features, which supports being selective.
:::

:::check Knowledge check 2
Your AI-assisted prototype got enthusiastic reactions in five sessions. Is the idea validated?
---
Not necessarily. People may be reacting to polish, and stated enthusiasm is weak evidence of behavior. Check whether participants match the real target group, whether they did something that cost them (switched, paid, committed time, gave real data) and what they did unprompted. Design a test of the riskiest assumption about value and viability, and label the current evidence moderate or weak.
:::

## Further reading

:::reading Sources to open next
- NN/g, *State of UX 2026* for the market and AI context.[[ref:nng-state-ux-2026]]
- Teresa Torres and Product Talk on continuous discovery and AI evals.[[ref:product-talk]]
- SVPG, *The Four Big Risks*.[[ref:svpg-risks]]
- Richard Rumelt, *Good Strategy / Bad Strategy* and April Dunford, *Obviously Awesome* (books).
- NN/g, *When to Use Which UX Research Methods*.[[ref:nng-methods]]
:::
