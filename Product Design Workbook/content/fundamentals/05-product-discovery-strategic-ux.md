Most failed products weren't badly designed. They were well-designed answers to questions nobody was asking.

**Product discovery** is the work of figuring out *what* to build before you build it. **UX strategy** is the plan that connects what users need with what the business is trying to achieve. Together they decide whether all the design work that follows is pointed in the right direction.

This edition explains the foundations: what strategy and discovery are, the frameworks teams use, how to frame problems, how to analyze competitors and markets, and how journeys and information architecture feed into strategy.

:::pull
Design answers "how should this work?" Strategy and discovery answer the earlier, harder questions: "should this exist, and for whom?"
:::

## Key ideas first

### Problem space vs. solution space

- The **problem space** is everything about the users, their needs and the situation, independent of any solution.
- The **solution space** is all the ways you might address those needs.

Teams often jump straight into the solution space ("let's build a dashboard") without understanding the problem space. Discovery keeps you there long enough to understand what you're solving.

### Outputs, outcomes and impact

| Term | What it is | Example |
| --- | --- | --- |
| Output | Something you make | A new onboarding flow |
| Outcome | A change in user behavior | More new users complete setup |
| Impact | A business result | Higher retention and revenue |

Good strategy is organized around **outcomes**, because outputs only matter if they change something.

### Discovery vs. delivery

**Discovery** is learning what to build: research, framing, ideation and testing ideas cheaply. **Delivery** is building and shipping. Modern teams run them in parallel ("dual-track"), so learning feeds building continuously.

## What UX strategy is

UX strategy is a plan that aligns user needs, business goals and design decisions over time. Jaime Levy's work on UX strategy describes it as combining business strategy, value innovation, validated user research and killer UX design. In practice, a UX strategy answers:

1. **Who** are we designing for?
2. **What** problems or goals do they have?
3. **Why** will our approach work better than alternatives?
4. **How** will we measure success?
5. **What** are we deliberately *not* doing?

### The kernel of good strategy

Richard Rumelt's *Good Strategy / Bad Strategy* describes three parts every good strategy has:

- **Diagnosis:** what's actually going on and why it matters.
- **Guiding policy:** the overall approach to dealing with it.
- **Coherent actions:** specific steps that work together.

"Bad strategy" is often just a list of goals ("increase engagement!") with no diagnosis or plan.

### Vision, strategy, roadmap

| Term | Time frame | Answers |
| --- | --- | --- |
| Vision | Years | Where are we going and why? |
| Strategy | Months to a year | How will we get there? |
| Roadmap | Weeks to months | What will we work on, in what order? |

## The four product risks

Marty Cagan's framework says every product idea carries four risks:[[ref:svpg-risks]]

| Risk | Question | Usually owned by |
| --- | --- | --- |
| Value | Will people want it, buy it or use it? | Product, design |
| Usability | Can people figure out how to use it? | Design |
| Feasibility | Can we build it with our time, skills and tech? | Engineering |
| Viability | Does it work for the business (cost, legal, sales)? | Product, business |

Discovery is the process of reducing these risks *before* committing to build.

## Discovery frameworks

### The Double Diamond

The Design Council's **Double Diamond** shows two rounds of diverging (exploring widely) and converging (narrowing down):

1. **Discover:** research to understand the problem broadly.
2. **Define:** narrow down to a clear problem statement.
3. **Develop:** generate many possible solutions.
4. **Deliver:** test, refine and ship the best one.

### Design thinking

Stanford d.school's design thinking process has five stages: **Empathize, Define, Ideate, Prototype, Test.** It's not strictly linear; teams loop back as they learn.

### Continuous discovery

Teresa Torres's *Continuous Discovery Habits* argues discovery should happen every week, not as a big project.[[ref:product-talk]] Key practices:

- A **product trio** (product manager, designer, engineer) shares discovery work.
- The trio **talks to customers weekly.**
- Work is organized around a clear **desired outcome.**
- Teams map what they learn in an **opportunity solution tree.**
- Ideas are tested through small **assumption tests.**

### The opportunity solution tree

```text
Desired outcome (e.g. increase week-2 retention)
├── Opportunity: users don't see value quickly
│   ├── Solution: guided first project
│   └── Solution: templates
└── Opportunity: users forget to come back
    ├── Solution: weekly digest email
    └── Solution: reminders for unfinished work
```

**Opportunities** are user needs, pain points or desires (from research). **Solutions** are ideas that address them. Below solutions you list the **assumptions** each depends on and how you'll test them.

### Jobs to be done (JTBD)

JTBD says people "hire" products to make progress in a particular situation. A job statement often looks like: *"When [situation], I want to [motivation], so I can [outcome]."* For example: "When I'm preparing for a client meeting, I want to see the latest project status, so I can answer questions confidently." JTBD helps you see that your real competition may be a spreadsheet, a phone call or doing nothing.

### Lean UX and assumptions

**Lean UX** (Jeff Gothelf and Josh Seiden) treats ideas as hypotheses to test quickly:

> *We believe that [doing this] for [these people] will achieve [this outcome]. We'll know we're right when we see [this signal].*

## Framing problems well

### Problem statements

A good problem statement describes the user, the need and the insight, without proposing a solution:

> *New admins (user) need to know whether their setup is complete (need) because they can't invite their team until it is, and they don't know what's left (insight).*

### "How might we" questions

Turn problems into open questions that invite ideas: *"How might we help new admins see what's left in setup?"* Not too broad ("How might we improve onboarding?") and not too narrow ("How might we add a progress bar?").

### The five whys

Ask "why?" repeatedly to get from a symptom to a root cause. "Users don't finish setup." Why? "They get stuck at integrations." Why? "They don't know which account to connect." That's something you can design for.

## Prioritization basics

Teams always have more ideas than capacity. Common frameworks:

| Framework | How it works |
| --- | --- |
| Impact vs. effort | Plot ideas on a 2×2; start with high impact, low effort |
| RICE | Reach × Impact × Confidence ÷ Effort |
| MoSCoW | Must have, Should have, Could have, Won't have (now) |
| Kano model | Classifies features as basic expectations, performance features or delighters |
| Value vs. complexity | Similar to impact/effort, with business value |

These don't give you the answer. They make your assumptions visible so the team can discuss them.

## Competitive analysis

### Why do it

To understand how people solve the problem today, what competitors do well and badly, where the gaps are, and how to position your product.

### Types of competitors

- **Direct:** same solution for the same users (two project management tools).
- **Indirect:** different solution for the same need (a project tool vs. a shared spreadsheet).
- **Substitutes:** completely different ways of getting the job done, including doing nothing.

### Methods

- **Feature comparison matrix:** what each product offers.
- **UX teardown:** walk through key flows and document the experience step by step.
- **Heuristic review:** evaluate competitors against usability principles.
- **SWOT:** Strengths, Weaknesses, Opportunities, Threats.
- **Review mining:** read app store reviews, forums and social posts to learn what users love and hate.
- **Positioning map:** plot competitors on two dimensions (for example "simple ↔ powerful" and "individuals ↔ teams") to find gaps.

### A simple process

1. Define what you want to learn.
2. Choose 3 to 6 competitors, including at least one indirect.
3. Gather information consistently (same tasks, same criteria).
4. Summarize patterns: what's standard, what's missing, what's done well.
5. End with **implications** for your product. Analysis without implications is just a report.

## Market and customer awareness

### Market basics

- **TAM, SAM, SOM:** Total addressable market (everyone who could use something like this), serviceable addressable market (those you can reach), serviceable obtainable market (those you can realistically win).
- **Segments:** groups of customers with similar needs or traits (by company size, industry, role, behavior).
- **Personas and segments** are related: segments are business groupings; personas are research-based portraits of user types.

### Positioning

**Positioning** is how you want your product to be understood relative to alternatives: for whom, solving what, and why better. April Dunford's *Obviously Awesome* lays out a practical process: identify competitive alternatives, your unique attributes, the value they enable, the customers who care most and the market category that makes your value obvious.

### Business models (briefly)

How a product makes money shapes design: **subscription** (monthly or yearly), **freemium** (free tier plus paid upgrades), **usage-based** (pay per use), **transactional** (fee per purchase), **advertising** (free for users, paid by advertisers). [[ch:06]] goes deeper.

## Journeys and IA in strategy

### Journey maps as strategic tools

A journey map shows a user's experience across phases, touchpoints and emotions. Strategically, maps reveal **where the biggest pain points are across the whole experience**, including parts your team doesn't own (sales, support, billing). They help teams prioritize.

### Service blueprints

A **service blueprint** extends a journey map with layers for what happens behind the scenes: frontstage actions (what employees do that customers see), backstage actions (what they don't see) and support processes (systems). It's essential for products where the experience depends on operations.

### IA as strategy

For complex products, information architecture is a strategic decision: what are the core objects (projects, tasks, invoices), how do they relate, and what do we call them? Getting this model right early makes everything after easier.

## A discovery cycle

1. **Set the outcome:** what change are we trying to create?
2. **Understand:** research users, data and competitors.
3. **Frame:** write problem statements and opportunities.
4. **Ideate:** generate multiple solutions.
5. **Identify assumptions:** what must be true for each idea?
6. **Test cheaply:** prototypes, interviews, fake doors, small experiments.
7. **Decide:** build, change or drop.
8. **Measure:** did the outcome move?

## Key terms

| Term | Plain meaning |
| --- | --- |
| Problem space | Understanding users and needs before solutions |
| Outcome | A change in behavior you want to create |
| Product trio | PM, designer and engineer doing discovery together |
| Opportunity solution tree | A map from outcome to opportunities to solutions to tests |
| Jobs to be done | The progress people want to make in a situation |
| How might we | An open question that invites solutions |
| RICE | A prioritization score: reach, impact, confidence, effort |
| Positioning | How your product is understood relative to alternatives |
| Service blueprint | A journey map plus behind-the-scenes processes |

## Quick check

:::check Knowledge check 1
"Add a dashboard" is a request from sales. Is that a problem or a solution, and what do you do?
---
It's a solution. Find the underlying problem by asking what users are trying to do and why. You might learn that admins can't see team adoption, and a dashboard is only one of several ways to solve that.
:::

:::check Knowledge check 2
Which of Cagan's four risks is about whether people can figure out how to use the product?
---
Usability risk. Value is whether they want it; feasibility is whether we can build it; viability is whether it works for the business.
:::

:::check Knowledge check 3
Why include indirect competitors and substitutes in a competitive analysis?
---
Because users often solve the problem in other ways (spreadsheets, email, doing nothing). Your real competition is whatever they use today, not just products that look like yours.
:::

## Further reading

:::reading Sources to open next
- SVPG, *The Four Big Risks*.[[ref:svpg-risks]]
- Teresa Torres and Product Talk on continuous discovery.[[ref:product-talk]]
- NN/g, *When to Use Which User-Experience Research Methods*.[[ref:nng-methods]]
- Richard Rumelt, *Good Strategy / Bad Strategy*; April Dunford, *Obviously Awesome*; Jeff Gothelf and Josh Seiden, *Lean UX* (books).
:::
