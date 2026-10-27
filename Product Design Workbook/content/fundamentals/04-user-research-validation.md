Every product decision is a bet about people. *They'll understand this label. They need this feature. They'll pay for this plan.* User research is how you check those bets before you spend months building on them.

This edition explains user research from the ground up: what it is, the different kinds, the main methods and when to use each, how to run a usability test, how to turn notes into insights, and what journey maps are for. If you want what's changing in 2026 (AI in research, synthetic users and so on), flip to the *2026 edition* at the top.

:::pull
Research doesn't tell you what to build. It tells you what's true about the people you're building for, so your decisions stop being guesses.
:::

## What user research is

User research is the systematic study of the people who use (or might use) a product: their goals, behaviors, contexts, needs and frustrations. "Systematic" is the key word. Chatting with a friend about your app is not research. Deciding what you need to learn, choosing a method that can answer it, talking to the right people and analyzing what you find honestly: that's research.

It answers three big kinds of question:

- **What's the problem?** Who are our users, what are they trying to do, and where does it hurt? (*generative* or *exploratory* research)
- **Does our solution work?** Can people use this design, and where do they get stuck? (*evaluative* research)
- **How much, how many, how often?** How common is this behavior, and did our change make a difference? (*quantitative* or *measurement* research)

:::definition User research vs. market research
**Market research** asks who will buy and how many (segments, demand, pricing). **User research** asks how people behave and why (tasks, mental models, pain points). They overlap, but a market survey saying "70 percent want faster checkout" won't tell you *why* checkout feels slow.
:::

## Four ways to classify methods

There are dozens of research methods. You don't need to memorize them all. You need to understand the dimensions they vary on, so you can pick the right one. NN/g's well-known landscape uses two axes, and a couple more are worth adding.[[ref:nng-methods]]

### 1. Attitudinal vs. behavioral

- **Attitudinal** methods capture what people *say*: their opinions, beliefs and stated preferences. Surveys and interviews are mostly attitudinal.
- **Behavioral** methods capture what people *do*. Usability tests, analytics and field observation are behavioral.

This distinction matters because people's words and actions often differ. Someone may say they always read the terms before signing up, then click "accept" in half a second. When the two disagree, behavior usually wins.

### 2. Qualitative vs. quantitative

- **Qualitative** research gathers rich, non-numerical data from a small number of people to understand *why* and *how*. Output: observations, quotes, themes.
- **Quantitative** research gathers numerical data from many people to understand *how many* and *how much*. Output: percentages, averages, comparisons.

Qualitative tells you the story; quantitative tells you how big the story is. Good teams use both.

### 3. Generative vs. evaluative

- **Generative** research happens early. You don't have a solution yet; you're exploring the problem space.
- **Evaluative** research tests something that exists: a sketch, prototype or live product.

### 4. Context of use

- **Natural** context: watching people in their real environment (field studies, analytics).
- **Scripted** context: you give people specific tasks (usability tests).
- **Decontextualized:** questions without the product in front of them (interviews, surveys).

:::framework Choosing a method in one sentence
Ask: *Do I need to know what people do or what they think? Do I need depth or numbers? Am I exploring a problem or testing a solution?* The answers point to the method.
:::

## The core methods, explained

### User interviews

**What:** a one-on-one conversation (usually 30 to 60 minutes) to understand someone's experiences, goals and pain points.

**When:** early, to understand a problem space, and any time you need to know *why*.

**How it works:** you prepare a discussion guide with open questions, then follow the conversation where it's interesting. The best questions ask about real past events: "Tell me about the last time you planned a trip." Avoid hypothetical futures ("Would you use...?") because people are poor at predicting their own behavior. Rob Fitzpatrick's *The Mom Test* is a short, practical guide to this.[[ref:mom-test]]

**Watch out for:** leading questions, talking too much, and treating compliments as evidence.

### Field studies

**What:** observing and interviewing people *where they actually do the work*: at their desk, in a warehouse, in a clinic.

**When:** you need to understand workflows, workarounds and environment, especially in complex or professional settings.

**Why it's powerful:** you see the sticky note on the monitor with a password, the spreadsheet that really runs the process, the interruption every four minutes. People rarely mention these in interviews because they've stopped noticing them.

### Diary studies

**What:** participants record experiences over days or weeks, through short entries, photos or prompts.

**When:** the behavior happens over time or at unpredictable moments (a habit, a recurring task, a long purchase decision).

**Trade-off:** rich longitudinal data, but participants drop off and need nudging.

### Surveys

**What:** a structured set of questions sent to many people.

**When:** you need to measure how common something is, or compare groups. Not great for discovering problems you haven't thought of.

**How to do it well:** keep it short; ask one thing per question; use balanced scales; pilot it with a few people first; and decide in advance what decision each question informs. A badly worded survey produces precise-looking nonsense.

### Card sorting

**What:** participants group topics or features into categories that make sense to them.

**Types:** *open* (participants create and name the groups) and *closed* (you provide the categories).

**When:** designing or restructuring navigation and information architecture.

### Tree testing

**What:** participants try to find items in a text-only version of your navigation (the "tree"), without any visual design.

**When:** after card sorting or before building navigation, to check whether a structure works.

**Why it's useful:** it isolates the structure and labels from visual design, so you know whether problems come from the words and hierarchy.

### Usability testing

**What:** watching people attempt realistic tasks with a design to find where it fails. It's the most common evaluative method, so it gets its own section below.

### A/B testing

**What:** showing two versions to different random groups of real users and comparing a metric (like completion rate).

**When:** you have enough traffic and want to measure which version performs better.

**Limitation:** it tells you *which* version won, not *why*. Pair it with qualitative research.

### Analytics

**What:** data on how people actually use a live product: page views, funnels, retention, events.

**When:** to find *where* problems are (where people drop off) and to measure change over time.

**Limitation:** it shows what happened, never why. A drop-off is a question, not an answer.

### Heuristic evaluation

**What:** experts review an interface against established usability principles, such as NN/g's ten heuristics.[[ref:nng-heuristics]]

**When:** a quick, cheap check before user testing. It finds obvious problems but isn't a substitute for watching real users.

| Method | Says/Does | Qual/Quant | Best moment |
| --- | --- | --- | --- |
| Interviews | Says | Qual | Early, understanding the problem |
| Field studies | Does + says | Qual | Early, complex workflows |
| Diary studies | Does + says | Qual | Behavior over time |
| Surveys | Says | Quant | Measuring prevalence |
| Card sorting | Says | Both | Designing navigation |
| Tree testing | Does | Quant | Validating navigation |
| Usability testing | Does | Mostly qual | Testing a design |
| A/B testing | Does | Quant | Comparing versions live |
| Analytics | Does | Quant | Finding and measuring problems |

## Planning a study

Most research goes wrong before the first session, at the planning stage. A good plan answers:

1. **What decision will this inform?** If no decision depends on it, don't run it.
2. **What are the research questions?** Specific and answerable: "Why do new admins abandon setup at the integration step?" not "What do users think?"
3. **Which method, and why?** Match it to the questions using the dimensions above.
4. **Who are the participants?** Recruit people who match the behaviors you care about, not just whoever's available. Colleagues and friends are almost always the wrong participants: they're polite and know too much.
5. **How many?** For qualitative problem-finding, small numbers (often five to eight per distinct user group) reveal most major issues. NN/g's well-known argument for testing with five users is about *iterative* qualitative testing of one group, not a rule for every study.[[ref:nng-five-users]] For measurement, you need far more.
6. **What will you do with the results,** and by when?

### Bias: the enemy of good research

Research can mislead you in predictable ways:

- **Confirmation bias:** noticing evidence that supports what you already believe.
- **Leading questions:** "Don't you find this confusing?" invites a yes.
- **Social desirability:** people give the answers they think are "good."
- **Sampling bias:** you only hear from people who are easy to reach or already love the product.
- **The observer effect:** people behave differently when watched.

You can't remove bias entirely, but naming it and designing around it (neutral questions, the right participants, more than one method) reduces it a lot.

### Ethics and consent

Participants are doing you a favor. Tell them what you're recording and why, how the data will be stored, and that they can stop at any time. Get written consent, pay them fairly, and protect personal information.

## Usability testing in depth

Usability testing is the workhorse of design research, so it's worth understanding properly.

### The basic setup

A participant tries to complete realistic tasks with your design while you observe. In a **moderated** test you're present (in person or remote) and can ask follow-up questions. In an **unmoderated** test, software gives the tasks and records the session, which is faster and cheaper but loses the chance to ask "why."

### Writing good tasks

Tasks should be **goals**, not instructions:

- Bad: "Click on Settings, then Billing, then Download invoice."
- Good: "Your accountant needs last month's invoice. Get it for them."

The bad version tests whether people can follow directions. The good one tests whether your design makes sense.

### Think-aloud

Ask participants to say what they're thinking as they work. "I'm looking for... I expected this to... hmm, that's not what I wanted." It's the closest you get to seeing inside someone's head. Your job is mostly to stay quiet. When they get stuck, resist helping; where they struggle *is* the finding.

### What to measure

- **Task success:** did they complete it, with or without help?
- **Time on task and errors:** useful when comparing versions.
- **Severity:** how bad is each problem? A common way to rate it combines frequency (how many hit it), impact (how badly it blocks them) and persistence (does it keep happening).
- **Questionnaires:** standard ones like the System Usability Scale (SUS, a 10-question score) and the Single Ease Question (SEQ, "How easy was this task?" on a 1 to 7 scale) let you compare over time.

### Reporting findings

Keep three things separate:

- **Observation:** "Four of five participants didn't notice the filter button."
- **Interpretation:** "It doesn't look clickable."
- **Recommendation:** "Make it a labeled button."

Mixing them up ("users hate the filter") makes findings easy to argue with and hard to act on.

:::example A tiny usability test, start to finish
**Goal:** check if new users can create their first project. **Tasks:** two goal-based tasks. **Participants:** five people who recently signed up for similar tools. **Sessions:** 30 minutes, moderated, recorded with consent. **Finding:** four of five looked for "New project" in the sidebar, but it's only in the top-right corner. **Recommendation:** add the action to the sidebar where people expect it. Total cost: one day. Value: fixed a problem every new user would have hit.
:::

## Synthesis: notes to insights

After sessions you have pages of notes, quotes and recordings. **Synthesis** turns that pile into something you can act on.

### The chain

**Observation** (what happened) → **Pattern** (it happened across several people) → **Insight** (why it matters) → **Recommendation** (what to do).

An *insight* isn't just a summary. "Users found onboarding confusing" is a summary. "New users skip optional-looking steps and rarely return, so the two steps that unlock core value get missed" is an insight: specific, explains behavior, implies a decision.

### Common synthesis methods

- **Affinity mapping:** write each observation on a note, then group similar notes and name the groups. Bottom-up: let the groups emerge instead of forcing your existing categories.
- **Thematic analysis:** a more rigorous version where you "code" the data (label each relevant bit) and develop themes from the codes.
- **Personas:** fictional-but-research-based profiles representing key user types. Useful when they're built from real patterns; misleading when invented from assumptions.
- **Jobs to be done (JTBD):** frames needs as the progress someone is trying to make in a situation. "When I'm closing the month, I want to see what's unpaid so I can chase it before the deadline."

:::framework How confident are we?
Label each insight: **strong** (seen across many participants and backed by another source like analytics), **moderate** (several participants, one method) or **weak** (one or two people, or stated opinion). Being honest about confidence makes people trust your research more, not less.
:::

## Journey mapping

A **customer journey map** shows the end-to-end experience of someone trying to achieve a goal, over time.[[ref:nng-journey-mapping]]

### What's in one

- **Actor:** whose journey (one persona or user type).
- **Scenario and goal:** what they're trying to do.
- **Phases:** the big stages (for example: discover, sign up, set up, use, renew).
- **Actions:** what they do in each phase.
- **Thoughts and emotions:** what they're thinking and feeling, often drawn as a line going up and down.
- **Touchpoints:** where they interact with you (website, email, support, app).
- **Opportunities:** where you could make things better.

### Related maps

| Map | What it shows | Use it for |
| --- | --- | --- |
| Empathy map | What a user says, thinks, does and feels | Building shared understanding quickly |
| Journey map | One person's experience over time | Finding pain points across a journey |
| Experience map | A general human experience, not tied to a product | Seeing the bigger context |
| Service blueprint | The journey plus everything behind the scenes (staff, systems) | Fixing operational and handoff problems |

### Making maps useful

A journey map based on guesses is a nice poster and nothing more. Build it from research (interviews, support tickets, analytics), keep the scope narrow (one actor, one goal), and end with prioritized opportunities and owners.

## A research cycle

1. **Frame:** what decision, what questions?
2. **Choose:** method, participants, sample size.
3. **Prepare:** guide or tasks, consent, prototype.
4. **Collect:** run sessions; take notes on what you see, not what you conclude.
5. **Synthesize:** observations → patterns → insights → recommendations.
6. **Share:** short, prioritized, with evidence and confidence labels.
7. **Act and measure:** change the design, then check whether it helped.

Then repeat. The most effective teams don't do one big study a year; they talk to users a little, often.

## Key terms

| Term | Plain meaning |
| --- | --- |
| Generative research | Exploring a problem before you have a solution |
| Evaluative research | Testing a solution that exists |
| Attitudinal | What people say |
| Behavioral | What people do |
| Moderated test | A researcher is present during the session |
| Think-aloud | Participants narrate their thoughts while working |
| Affinity mapping | Grouping observations to find patterns |
| Persona | A research-based profile of a user type |
| Journey map | A timeline of someone's experience toward a goal |
| SUS | A standard 10-question usability score |

## Quick check

:::check Knowledge check 1
You want to know why people abandon your signup form. Which methods would you combine, and why?
---
Analytics to see *where* they drop off (behavioral, quantitative), then usability tests or interviews to understand *why* (qualitative). Analytics finds the problem; qualitative research explains it.
:::

:::check Knowledge check 2
What's wrong with the task "Click the Billing tab and download your invoice"?
---
It's an instruction, not a goal, so it tests whether people can follow directions rather than whether the design is understandable. Rewrite it as a goal: "Your accountant needs last month's invoice. Get it for them."
:::

:::check Knowledge check 3
Card sorting or tree testing: which do you use to *check* a navigation structure you've already drafted?
---
Tree testing. Card sorting helps you *create* groupings from users' mental models; tree testing checks whether people can find things in a structure you've already proposed.
:::

## Further reading

:::reading Sources to open next
- NN/g, *When to Use Which User-Experience Research Methods*.[[ref:nng-methods]]
- NN/g, *Why You Only Need to Test with 5 Users* (and what it doesn't mean).[[ref:nng-five-users]]
- NN/g, *Journey Mapping 101*.[[ref:nng-journey-mapping]]
- Rob Fitzpatrick, *The Mom Test*.[[ref:mom-test]]
- NN/g, *10 Usability Heuristics*.[[ref:nng-heuristics]]
:::
