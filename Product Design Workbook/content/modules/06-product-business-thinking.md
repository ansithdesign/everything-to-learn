In a design review, someone asks: "How will this help the business?" The room goes quiet, and the designer says something like "it'll improve the experience."

That answer is true and useless. Compare it with: "Setup completion is 62 percent today and most drop-offs happen at the integration step. This change targets that step. If it works, activation goes up, which is what we're measured on this quarter."

Same design, completely different conversation. The second designer understands the chain **design → product → business → outcome**, and that fluency is one of the biggest things separating a UI/UX designer from a strong *product* designer. You don't need to become a PM or an accountant. You need to follow the money and the metric from your pixel to the result, and say where you're guessing.

This chapter builds on [[ch:05]] (strategy and discovery) and goes deeper on the numbers: product thinking, business models, metrics, prioritization, proving design's impact and positioning yourself.

:::pull
You don't need to own the business. You need to speak it well enough that your design decisions are part of the conversation, not a footnote to it.
:::

## 1. Product thinking

Product thinking starts from the outcome and the problem, not the feature. A product thinker asks: Who has this problem, and how do we know? What behavior would change if we solved it? What would that do for the business? What's the smallest thing we could do to find out?

It shows up in small moments. You push back on "add a filter" with "what are people trying to find?" You propose a metric before building. You notice the exciting feature solves a problem nobody reported.

### Build product sense out loud

"Product sense" is the knack for judging quickly, with reasons, whether an idea is valuable, usable, feasible and viable (the four risks from [[ch:05]]). Practice with products you use:

1. Who is it for, and what job do they hire it for?
2. How does it make money? What makes customers pay, stay or leave?
3. What's the riskiest assumption behind its latest feature?
4. What would you test first?

:::framework A product-thinking checklist for any feature request
**Who** has the problem, and how do we know? **What** behavior are we trying to change? **Why now,** and why this over the alternatives (including doing nothing)? **How will we know** it worked (metric plus baseline)? **What's the smallest test?** **What does it cost** (build, maintain, complexity), and what are we *not* doing to afford it?
:::

### 2026 shifts

- **Building is cheaper, so deciding is scarcer.** AI tools make working software faster to produce, which raises the cost of building the *wrong* thing, because teams can now build a lot of it.
- **Roles overlap more.** One secondary survey summary reported that 65 percent of designers say they do more work overlapping with product or engineering; I couldn't verify the original report, so treat it as a signal.[[ref:musemind-ai-ux]] NN/g says organizations will ask more of each role, demanding "breadth and judgment, not just artifacts."[[ref:nng-state-ux-2026]]
- **"Design theater" is the failure mode.** NN/g warns against artifacts without results.[[ref:nng-state-ux-2026]] The antidote: tie every artifact to a decision and an outcome.

:::exercise Try it: rewrite three requests as problems (1 hour)
Take three backlog items. For each: write the problem without the solution, the behavior to change, the metric to watch and the cheapest test. Ask a PM which one they would've pushed back on anyway.
:::

## 2. How the money works

You should be able to explain, in a few sentences, for your own product:

- **Who pays** (user, buyer, advertiser) and **how** (subscription, usage, transaction, license, ads).
- **What grows revenue:** more customers, higher price, more usage, more products per customer.
- **What drives cost:** acquisition, delivery, support, infrastructure and, for AI features, the cost of each model call.
- **How customers arrive and stay:** self-serve, sales-led, partners.

### The vocabulary of the room

| Term | Meaning | Why a designer cares |
| --- | --- | --- |
| Activation | Share of new users reaching first value | Onboarding is design's biggest growth lever |
| Retention | Share who keep coming back | A product people leave can't grow |
| Churn | Customers or revenue lost over time | Usability and unmet needs show up here |
| ARR / MRR | Annual / monthly recurring revenue | How subscription businesses are measured |
| Net revenue retention | Revenue from existing customers incl. expansion and loss | In B2B, expansion depends on adoption |
| CAC / LTV | Cost to acquire / lifetime value of a customer | Clear value and onboarding lower CAC; retention raises LTV |
| Gross margin | Revenue minus cost of delivering it | Crucial for AI features with real per-use cost |

### B2B vs. B2C: who decides?

In B2B the **user**, **buyer** and **decision-maker** are often different people. A gorgeous experience for people who don't choose the product, or a feature only the buyer sees in a demo, can both fail. Procurement, security reviews, integrations and admin controls are *product features* that win or lose deals. In consumer products the user usually decides, so attention and habit matter more.

### 2026 shifts

- **AI changes unit economics.** Each use of an AI feature can have real cost, which shapes pricing, limits and defaults. A design that encourages heavy, low-value use of an expensive feature can hurt margin. Ask engineering what a typical interaction costs.
- **Pricing is shifting toward usage and outcomes** in many products, which makes design choices (what's metered, how usage is shown, what happens at a limit) part of the business model.

:::exercise Try it: draw your product's money map (1 hour)
On one page, show how money enters and leaves: who pays for what, how customers arrive, where they leave, and the three costs that matter most. Mark where design decisions influence each arrow, then check it with someone in product or finance.
:::

## 3. Metrics and analytics

### What to be able to read

- **Funnels:** the steps to a goal and where people drop. A drop is a *question*, not an answer.
- **Cohorts and retention curves:** compare people who started at the same time. A curve that flattens means a core finds lasting value; one that falls to zero doesn't.
- **Events:** what the product records. Design the events you'll want to know about when you design the feature, not after.
- **Segments:** averages hide what matters. Split by new vs. returning, small vs. large customers, device, plan.
- **Distributions:** a few heavy users can distort a mean. Medians and percentiles are often more honest.

### Don't get fooled

- **Correlation isn't causation.** People who use feature X retain better, but they may be the more engaged people who'd have stayed anyway.
- **Small samples are noisy.** Small differences in small groups are often chance.
- **Pick the metric before the test.** Hunting for one that moved after the fact finds noise.
- **Significant isn't important.** A tiny effect in a huge sample can be significant and still not matter.

### Experiments and traps

A/B tests are the strongest tool for measuring a change, with classic pitfalls: stopping when the result looks good ("peeking"), running too short, ignoring novelty effects, testing many metrics until one moves. A test tells you *what* happened, not *why*, so pair it with qualitative work.

:::warning Common trap: numbers that look precise
Dashboards present tidy numbers built on definitions, filters and tracking that can be wrong. Before you quote a metric, ask how it's defined, when tracking was last verified, who's excluded and what the sample is.
:::

### 2026 shifts

- **AI can query and summarize your data fast.** That lowers the cost of getting an answer and raises the risk of a confident wrong one. Check the logic behind AI analysis and compare against a number you already trust.
- **AI products need quality metrics, not only usage:** accepted vs. edited vs. rejected outputs, task success, complaints, plus structured evaluations (see [[ch:02]] and [[ch:04]]).

:::exercise Try it: interrogate a metric (1 hour)
Pick a number your team cites constantly. Find out how it's defined, tracked and what it excludes. Write down one thing it can't tell you, then one qualitative question that would explain a movement in it.
:::

## 4. Prioritization frameworks

| Framework | How it works | Best for | Main weakness |
| --- | --- | --- | --- |
| Impact vs. effort | Plot on a 2x2 | Quick team alignment | Subjective axes |
| ICE | Impact, confidence, ease | Ranking experiments fast | Scores are guesses |
| RICE | Reach, impact, confidence, effort | Comparing bigger initiatives | False precision |
| Kano | Basic, performance or delight | Understanding expectations | Needs research input |
| MoSCoW | Must / should / could / won't | Scoping a fixed release | Everything becomes a "must" |
| Cost of delay | What waiting costs per unit time | Time-sensitive calls | Hard to estimate |

The key insight: frameworks don't produce answers, they make assumptions **visible and arguable**. The conversation about *why* reach is high or confidence is low is where the value lives.

- **Anchor on an outcome.** You can't rank work without knowing what you're trying to achieve.
- **Make confidence honest.** Low confidence means the next step is discovery, not building.
- **Count the cost of complexity.** Every feature has a maintenance cost and a cognitive cost for users.
- **Keep a "not now" list.** A priority list without one is a wish list.
- **Record the decision and why.**

:::exercise Try it: rank with the assumptions showing (1 hour)
Take six backlog items and score them with RICE. Then rewrite each score as a sentence stating the assumption behind reach, impact and confidence. Find the two scores you trust least and design a cheap test for each.
:::

## 5. Proving design's impact

### The famous claim, with care

The most-cited evidence is the McKinsey Design Index (2018): an analysis of financial data and design actions across about 300 public companies, in which top-quartile design performers outperformed industry benchmarks on growth, in McKinsey's summary by as much as two to one.[[ref:mckinsey-design]] Use it carefully. It's a correlation, parts of the data were self-reported, and well-run companies may simply invest in design *and* everything else. A 2019 Fortune piece discusses the debate, including that design sits on the balance sheet as a cost, not an investment.[[ref:fortune-design-value]] Exact figures differ between summaries, so check the original before quoting.

You'll persuade more by showing *your own* contribution credibly.

### Measuring your impact

1. **Start with a baseline.** Before changing anything, record the current number (completion, time on task, support contacts, error rate, conversion).
2. **Pick the right kind of measure:** behavioral, efficiency, quality, satisfaction or commercial.
3. **Compare fairly.** Before/after, or better, test vs. control. Note anything else that changed.
4. **Convert to money where credible:** time saved × people × loaded hourly cost; support contacts avoided × cost per contact; conversion lift on a known base. State your assumptions.
5. **Be honest about attribution.** Many things move a metric. Say what you contributed, with what confidence, and what you don't know.

:::example A hypothetical impact statement (numbers are illustrative)
"Task success for integration setup rose from 62 percent to 81 percent in moderated tests with eight participants. Support contacts about setup fell by roughly a third over the next quarter, but a documentation update shipped in the same period, so I attribute part, not all, of that to the redesign. At about 400 setups a month and an estimated cost per support contact of X, the saving is Y a month; assumptions are listed below."
:::

Also know your organization's design maturity. NN/g's UX maturity model describes stages from ignored to integrated. In a low-maturity organization, your first win is often small and measurable, one that builds trust, not a transformation.

NN/g notes that UI is getting cheaper to produce, so surface-level work is easily replaceable and judgment, context and critical thinking are what's harder to automate.[[ref:nng-state-ux-2026]] Showing impact makes that judgment *visible*. Expect more pressure to justify design headcount with evidence tied to outcomes.

:::exercise Try it: write one impact case (1 hour)
Choose a past project. Write half a page: problem and baseline, what you did, how you measured, the change, what else may have contributed, and the money translation with assumptions. No baseline? Write how you'd get one next time.
:::

## 6. Strategic positioning

Positioning is how you frame your work and yourself so that others understand its value and scope. It happens at three levels: the **discipline** (explain design in outcomes the business cares about, not process), the **work** (introduce each project with problem, stakes and result, not artifacts) and **you** (your scope, your point of view, your visibility).

### How scope grows

Levels differ less in craft than in the kind of problem and the amount of ambiguity. A rough pattern, which varies by company:

| Level | Typical scope | What changes |
| --- | --- | --- |
| Early career | A well-defined task or component | Executes with guidance |
| Mid-level | A feature or flow, end to end | Works independently within a feature |
| Senior | A problem area across features | Frames the problem, aligns people, defines success |
| Staff and principal | An area of the product or a cross-team problem | Shapes strategy, raises the bar for others |

Uxcel's skills article, as you summarized it, associates product thinking and business fluency with senior roles and progression. That's plausible and matches common experience, but it's a vendor's own analysis, so treat it as supporting rather than proof.

### Practical moves

- **Volunteer for the ambiguous problem,** not just the well-specified one.
- **Write the decision memo** others will use.
- **Connect every update to an outcome.**
- **Teach and share.** Credibility comes from helping others.
- **Keep an impact log** with numbers and dates. You'll need it for reviews and portfolios.

:::exercise Try it: your positioning statement (30 minutes)
In three sentences: who you help, what problem you solve for them, what you're known for. Then rewrite three recent projects as problem, action and measured result. Ask a colleague whether the statement matches how they'd describe you.
:::

## Case: design to money

Let's follow one change from a design idea to a number a finance person would respect. All figures are illustrative.

**The situation.** A B2B tool has a self-serve trial. 1,000 teams start a trial each month. 40 percent complete setup; of those, 25 percent convert to a paid plan at $100 per month. The design team believes the integration step in setup is confusing.

**Step 1: Build the funnel.** Draw it with numbers:

| Stage | Teams per month | Conversion from previous |
| --- | --- | --- |
| Start trial | 1,000 | — |
| Complete setup | 400 | 40% |
| Become paying | 100 | 25% |

At $100 a month, that's $10,000 of new monthly recurring revenue per month.

**Step 2: Find the leak.** Analytics shows 35 percent of people who start setup stop at the integration step, and user tests show why (they don't know which account to connect). So the leak is specific and the cause has evidence.

**Step 3: Write the hypothesis.** *"If we clarify the integration step with account previews and examples, then setup completion will rise from 40 to 46 percent, because fewer people will stall at integration."*

**Step 4: Estimate the prize.** 6 percentage points more completing setup is 60 more teams. At the same 25 percent paid conversion that's 15 more paying teams, or $1,500 of new MRR per month. Over a year, a cohort that keeps paying could bring roughly $18,000 in annual run-rate per month of cohort (before churn). The exact model isn't the point; stating assumptions is.

**Step 5: Count the cost.** Two weeks of design and engineering. Compare cost to benefit. Is a payback of a few months reasonable? Is there a cheaper test?

**Step 6: Run a test.** An experiment with half the traffic on the new step, setup completion as the primary metric and trial-to-paid conversion as a guardrail. Decide in advance: *"We ship if completion rises by at least 3 points with no drop in conversion; otherwise we iterate."*

**Step 7: Report honestly.** "Completion rose from 40 to 45 percent (95 percent confidence interval 43 to 47); conversion was flat within noise; shipping to everyone. Estimated added MRR: about $1,250 per month, with the assumptions listed." If the result is flat, say so, and what you learned.

You didn't need to be a finance expert. You needed a funnel, one hypothesis, a plain estimate and honesty.

## Interrogating a metric

For any number someone shows you, ask:

1. **What exactly is counted?** (users, sessions, accounts, events)
2. **Over what time window, and compared to what?**
3. **Who's excluded?** (internal users, free tier, certain regions)
4. **How is it tracked, and when was that last checked?**
5. **What's the sample size?**
6. **What else changed during that time?** (releases, campaigns, seasonality)
7. **What decision would this number change?** If none, why are we looking at it?

## Prioritizing in practice

Imagine six candidates and you're asked to rank them. A good conversation goes:

1. **State the outcome** you're optimizing this quarter (say, activation).
2. **List candidates** with the assumption behind each ("Reach: all new users. Impact: moderate. Confidence: low, based on one interview.").
3. **Score together,** and note disagreements, which are the most valuable output.
4. **Mark low-confidence items for discovery,** not building.
5. **Ask what's missing:** something small and high-leverage that wasn't on the list?
6. **Agree on a "not now" list** and say why.
7. **Write it down** and revisit when evidence changes.

## Showing your impact

A simple structure that works:

| Part | What to write |
| --- | --- |
| Problem | What was wrong, for whom, with evidence |
| Baseline | The number before (and where it came from) |
| What I did | Your specific contribution, not "we" for everything |
| Result | The change, with how it was measured |
| Attribution | What else contributed; your honest share |
| What I'd do next | Shows judgment and humility |

Use numbers where you can, and say "estimated" where you're estimating.

## Where to go deeper

- **Finance basics:** how a budget, a forecast and a P&L work, enough to read them.
- **Pricing and packaging:** how plans, limits and trials shape experience.
- **Data fluency:** reading simple queries and dashboards, and asking sharper questions of data teams.
- **Writing for decisions:** one-page memos with options and a recommendation (see [[ch:07]]).

## Your next four weeks

| Week | Focus | You'll have |
| --- | --- | --- |
| 1 | Rewrite requests as problems; draw the money map | Three rewrites reviewed by a PM; a one-page map |
| 2 | Interrogate a metric; read a funnel and a cohort | A note on what the metric can't tell you |
| 3 | Rank with assumptions visible | A ranked list with a not-now list and two tests |
| 4 | An impact case and a positioning statement | A one-page case and a statement agreed with your manager |

## Quick check

:::check Knowledge check 1
A teammate says "users who use feature X retain better, so push everyone to use it." What's the problem?
---
It's correlation, not causation: more engaged people may both use X and retain. Test causation with an experiment (promote X to a random subset and compare retention), check whether the relationship holds in comparable segments, and use qualitative research to learn why X helps those who use it. Don't make a big product change based on correlation alone.
:::

:::check Knowledge check 2
You're asked to prove a redesign "worked," but you have no baseline. What now?
---
Be honest about what you can and can't show. Reconstruct a baseline if possible (old analytics, support tickets, archived test results), run a comparison with the old version if it still exists, and set up measurement now for the future. Present what you know with its limits and don't claim credit for changes you can't attribute.
:::

## Further reading

:::reading Sources to open next
- NN/g, *State of UX 2026* on roles and expectations.[[ref:nng-state-ux-2026]]
- McKinsey's *The Business Value of Design*, read with the caveats above, and the Fortune piece on the debate.[[ref:mckinsey-design]][[ref:fortune-design-value]]
- Product Talk for assumption testing, experiments and AI evals.[[ref:product-talk]]
- SVPG on product risks.[[ref:svpg-risks]]
:::
