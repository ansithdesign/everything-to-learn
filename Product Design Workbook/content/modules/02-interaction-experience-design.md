Think about the last feature you shipped. How many screens did you design? Now count the *states*: empty, loading, partial, error, offline, no permission, first use, returning use.

If you're like most of us, the screens are in the portfolio and the states are in the backlog as "edge cases." But real users meet your product in the edges far more often than in the happy path.

That's the secret of interaction design: **the quality of a product lives in the parts nobody screenshots.** And in 2026 there's a second reason this matters. More products now include AI that acts on someone's behalf, so the "interface" increasingly includes delegating, waiting, approving and undoing. NN/g's outlook says experience now spans content, system behavior and logic, not just the screen.[[ref:nng-state-ux-2026]]

This chapter covers patterns and states, motion, flows, information architecture and responsive design. Then it adds the skill that's missing from most skill lists: designing AI interactions.

:::pull
A screen is a snapshot. A product is everything that happens between snapshots.
:::

## 1. Patterns and states

### The ideas that never expire

A few concepts from decades of HCI research still explain most usability problems:

- **Mental models.** People guess how something works from how it looks and behaves. When the product's model and theirs differ, the "user error" is your design's fault.
- **Signifiers.** An affordance is what something *allows*; a signifier is the cue that says so. A flat, borderless element can be clickable, but is anything telling people? Most "unclear UI" is missing signifiers.
- **Feedback.** Every action needs a visible, timely response. No response means people repeat the action or assume it failed.
- **Recoverability.** Prefer undo to confirmation dialogs. A confirm dialog interrupts everyone to protect against rare mistakes; undo protects without costing the careful majority anything.

NN/g's ten heuristics are a handy checklist for all this, with their own caveat: rules of thumb from expert evaluation, not laws.[[ref:nng-heuristics]] The same goes for the "Laws of UX" collection. Fitts's law is a well-supported model of pointing time; Miller's "7 plus or minus 2" is routinely misused to justify menu sizes it was never about.[[ref:laws-of-ux]]

### The state checklist

Every component and screen has more states than the happy path. Keep this list near your canvas:

:::framework The state checklist
**Empty** (nothing yet) · **loading** (including slow and partial) · **populated** · **stale or partial** (some data failed) · **error** (with a way forward) · **success** (with a next step) · **disabled** (with a reason) · **no permission** · **offline** · **first use vs. returning use**. For forms add **pristine, focused, valid, invalid, submitting**.
:::

:::example A purchase-order table, six states
*Empty:* explains what an order is and offers "Create order." *Loading:* a skeleton shaped like the final rows. *Partial:* rows that loaded plus a banner for the part that didn't. *Error:* says what failed and offers retry. *No permission:* names the role that can see this and how to request access. *Offline:* cached rows with a "last updated" time. Six decisions, none of them in the typical mockup.
:::

### Choosing patterns well

Know the standard patterns well enough to **adopt** them (usually), **adapt** them (when context changes the trade-offs) and **reject** them (rarely, with evidence). Familiar patterns carry learning your users already paid for.

- **Navigation.** Side nav scales to many destinations; tabs suit a few peer views; a command palette serves expert keyboard users and complements (never replaces) visible navigation.
- **Forms.** Visible labels, validation *after* a field is finished, errors that say what to do, smart defaults. Fewer fields beat prettier fields.
- **Progressive disclosure.** Show what most people need first. Great when done well; terrible when it hides what people need.
- **Selection controls.** Radios for few exclusive options, checkboxes for independent ones, dropdowns for long lists, toggles for *immediate* effects only.
- **Feedback surfaces.** Inline for local issues, toasts for brief confirmation (with undo), banners for page-level states, modals only when you truly must block.

:::decision Adopt, adapt or reject?
Adopt the standard unless you can name the specific reason it fails here. Adapt when volume, expertise, device or regulation changes the trade-offs, and write down *which* trade-off changed. Reject only with evidence from your own users.
:::

:::warning Common trap: dark patterns
Defaults, wording and visual weight can steer people against their interests (forced continuity, hidden cancel buttons, confirmshaming). Beyond being unethical, it's increasingly regulated and it burns trust. A quick test: could you comfortably explain this choice to the person it affects?
:::

:::exercise Try it: complete the matrix (1 hour)
Take one feature you know. List every state from the checklist and describe what the person sees and can do. Circle the three that have no design at all, and design them.
:::

## 2. Motion

Motion earns its place by doing one of four jobs:

- **Orientation:** shows where something came from or went.
- **Feedback:** confirms an action registered.
- **Continuity:** keeps the mental model intact across a change (a card expanding into its detail view).
- **Attention:** points at an important change, sparingly.

Decoration is a fifth job, and the one to be suspicious of.

A micro-interaction has four parts: a trigger, a rule, feedback and a loop or end state (tap a heart; the count changes, the icon fills, you can undo). Useful starting points: most UI transitions feel right between roughly 100 and 300ms; ease-out for things entering, ease-in for things leaving; shorter for small elements, longer for big ones. Tune by eye on real devices, not by law.

### Motion and accessibility

Motion can genuinely harm. WCAG 2.2 says auto-moving content lasting over five seconds needs pause/stop/hide (SC 2.2.2), nothing should flash more than three times a second (SC 2.3.1), and at AAA, interaction-triggered motion should be disableable (SC 2.3.3).[[ref:wcag22]] In practice: respect the OS reduced-motion setting (swap big movement for a fade or nothing), and never use animation as the *only* way to convey something.

### 2026 shifts

- **The browser can do more natively.** Same-document view transitions, scroll-driven animations and richer CSS animation are shipping, with uneven support. web.dev's January 2026 digest notes `:active-view-transition` reaching Baseline Newly available.[[ref:webdev-baseline]] Page-to-page continuity is getting cheap, so the question becomes *should we*, not *can we*.
- **Waiting is a design problem.** Streaming text, long-running agent tasks and "thinking" states need honest feedback. Fake typing delays and spinning sparkles feel modern but hide whether the system is working. Show real progress and what the system is doing.

:::exercise Try it: motion with a reason (1 hour)
List five animations in a product you use. For each, name which of the four jobs it does and whether it still works with reduced motion. Cut any that do no job. Then spec one micro-interaction (trigger, rule, feedback, end state, duration, easing, reduced-motion version) in a sentence a developer can build from.
:::

## 3. User flows

A **task flow** is the steps to finish a task (system view). A **user flow** adds the person's decisions and entry points. A **wireflow** places screens along the path. A **service blueprint** adds everything behind the screen. Pick the lightest one that answers your question.

A flow is only useful if it goes beyond the happy path:

- **Entry points:** link, notification, search, empty state?
- **Decision points:** where do they choose, and what do they need to know?
- **Failure and recovery:** what if a step fails, times out or is declined?
- **Exits and re-entry:** can they leave and come back without losing work?
- **Roles:** does someone else have to act?

:::framework Flow review questions
Is there one clear goal? Is the shortest path the one most people take? What's the first thing that can go wrong, and then what? Where does the person need info they don't have yet? What happens to work in progress if they stop? What do they see when they return? Which step could disappear entirely?
:::

### 2026 shifts

- **Flows now contain AI steps,** which fail in new ways: confident wrong answers, refusals, timeouts, answers to the wrong question. Draw those branches and decide what people can do (edit, retry, escalate, ignore).
- **Flows are less linear.** People start in a chat or search box and land deep in the product, so key destinations need to work as entry points with enough context.
- **Handoffs between agent and person are the design:** what's pre-filled, what needs checking, what the person sees on arrival.

:::exercise Try it: the unhappy flow (1 hour)
Take a flow with an approval step. Draw the happy path in one color and every failure, rejection and timeout in another. Count them. Design the screen for the most likely failure and write the one sentence the person sees.
:::

## 4. Information architecture

IA is how things are organized, grouped and labeled so people can find and understand them. Four ingredients get confused constantly: **organization** (how things group), **labeling** (the words), **navigation** (how you move) and **search** (how you retrieve without browsing).

Start from people's mental models, not the org chart. Three methods cover most needs: **card sorting** (how do people group these?), **tree testing** (can they find things in this proposed structure with the visuals stripped away?) and **first-click testing**. Tree testing is the most direct way to check a structure before you build it. Most findability problems turn out to be labeling problems.

### 2026 shifts

- **Content is read by people *and* models.** Clear headings, consistent labels and structured content help both. IA blends into content strategy: what are the entities, and how do they relate?
- **Asking joins browsing.** A search or command box that understands intent doesn't remove the need for structure; it exposes structural problems faster, because people ask for the things your navigation hides.
- **Complex products need IA the most.** In enterprise software, deciding what the objects are, how they relate and what they're called shapes the entire product. Get the model wrong and no UI fixes it.

:::exercise Try it: test a structure (half a day)
Write 12 realistic tasks ("Where would you find last month's invoices?"). Run a tree test with at least 15 people. Record success, directness and where people went wrong. Fix the three worst labels and test again.
:::

## 5. Responsive design

Responsive makes one layout flex across sizes; adaptive changes the experience for the context (device, input, connection, preferences). The ideas that carry most of the weight:

- **Content-driven breakpoints** over device presets.
- **Input modes are not screen sizes.** Touch has no hover, pointer is precise, keyboard needs visible focus.
- **Target size.** WCAG 2.2 sets a 24 by 24 CSS px minimum (SC 2.5.8); touch guidance is larger, often 44 to 48px.[[ref:wcag22]]
- **Progressive enhancement:** the core works everywhere; extras layer on.

WCAG 2.2 also added requirements that touch interaction design directly: dragging needs a non-drag alternative (SC 2.5.7), focus must not be completely hidden by sticky content (SC 2.4.11), don't make people re-enter information (SC 3.3.7), and don't require a cognitive test to log in (SC 3.3.8).[[ref:wcag22]]

### 2026 shifts

- **Components adapt to their container.** Container queries let one component work in a sidebar, a modal and a full page, so design component behavior at several container widths, not only page widths.[[ref:webdev-baseline]]
- **Preferences are context.** Reduced motion, contrast, color scheme, text size and forced-colors modes are all signals to respect.
- **Adaptive can mean generated.** If parts of an interface get assembled on the fly, the components and rules underneath matter more than any single layout (see [[ch:03]]).

:::exercise Try it: three inputs (1 hour)
Take a screen with a hover interaction. Redesign it so it works for touch (no hover), keyboard (clear focus, logical order) and pointer. Document each in a small table, then test with keyboard only and with a phone.
:::

## 6. Designing AI interactions

If your skills list was written a few years ago, this is the missing row. NN/g calls 2026 a year of AI fatigue: users are tired of low-value AI features, companies using AI thoughtfully are expected to beat those adding it everywhere, and trust is named as a major design problem, built through transparency, user control, consistency and support when the system fails.[[ref:nng-state-ux-2026]] That reads like a brief.

| User's question | What they need | Design levers |
| --- | --- | --- |
| Is it right? | Calibrated trust | Citations, uncertainty cues, easy verification |
| What's it doing? | Visibility | Progress, plans shown before acting, activity logs |
| Can I stop or change it? | Control | Stop, pause, edit, undo, approval before risky actions |
| What if it fails? | Recovery | Clear errors, manual fallback, escalation to a person |
| Who's responsible? | Clarity | Show what was generated and what was changed |

### Patterns worth knowing

- **Suggest by default; act with permission,** and make the scope of any action obvious.
- **Approval checkpoints.** Practitioner writing frames agent work as a loop of delegate, monitor, approve, interrupt, refine, with approval at the *risky* moments (not every step) and a stop control always within reach.[[ref:agent-ux-practitioner]] Treat that as one useful framing, not a standard.
- **Show the plan, then the result,** with a way to roll back.
- **Citations and provenance** wherever answers come from sources.
- **Honest limits:** say what it can't do and offer the next best thing.

### Generative interfaces

Some products let an AI choose or assemble UI at runtime. One practitioner taxonomy sorts this into three degrees: picking from a pre-built component set (predictable, testable), emitting a declarative description the product renders (flexible but inspectable), and generating arbitrary UI code (powerful, needs sandboxing and a clear security model).[[ref:agent-ux-practitioner]] Protocols for connecting agents to tools and interfaces are young and vendor-driven, so learn the concepts and watch which ones settle. The design consequence is the same either way: a constrained, accessible component library is the guardrail.

### Evals: designing behavior

You can't judge an AI feature from a mockup. You judge it across many inputs. That's why "evals" (structured tests of output quality against a rubric) became part of product work. Product Talk frames AI evals as a new discovery habit, moving teams from vibe checks to systematic quality control.[[ref:product-talk]] You can contribute by writing the rubric: what does a good answer look like for this user and task, what failures are unacceptable, what tone fits. A rubric is a design artifact.

:::decision Should this feature use AI at all?
Can occasional errors be tolerated or recovered from? Is there enough variety that fixed rules would fail? Would a person actually choose this over a simple control? Can we show, check or undo the result? If most answers are no, a deterministic design is the better product.
:::

:::warning Common trap: bolt-on AI
A chat box added because competitors have one rarely solves a problem. Start from the user's task, find where it's slow, error-prone or tedious, and apply AI *there*, with the control and recovery patterns above.
:::

:::exercise Try it: design an agent approval flow (half a day)
A user says "clean up my overdue invoices." Design (1) the plan shown first, (2) which actions need explicit approval and why, (3) progress while it runs, (4) the summary afterward, (5) how they reverse a mistake. Then write a five-line rubric for judging the assistant's work.
:::

## Case: a delete action

Let's put the chapter together on one deceptively small feature. A SaaS app lets admins delete a project. The first design is a red button and a confirmation dialog that says "Are you sure?" Here's how a more careful pass goes.

**Step 1: What's actually at stake?** Deleting a project removes tasks, files and comments for 14 people. It's high-impact. But is it irreversible? That's a product decision, and it changes everything. If the team can keep deleted projects for 30 days, you can design for *recovery* instead of *fear*.

**Step 2: Choose the pattern.** With a 30-day recovery window you can drop the scary dialog entirely. Delete moves the project to a "Recently deleted" area and shows a toast: *"Project 'Q4 Launch' deleted. Undo."* The toast stays long enough to read and act (several seconds, and it's keyboard reachable). Fewer interruptions, same safety.

**Step 3: If it truly is irreversible**, the dialog earns its place, but make it informative: *"Delete 'Q4 Launch'? This permanently removes 312 tasks, 48 files and 14 members' access. This can't be undone."* The button says **Delete project**, not "Yes" or "OK". For very high stakes, ask the person to type the project name, which is friction on purpose, only here.

**Step 4: Draw the states.**

| State | What the person sees |
| --- | --- |
| Default | Delete in an overflow menu, not next to Save |
| No permission | Delete hidden or disabled with "Only owners can delete projects" |
| Loading | Button shows progress and is disabled so a double-click can't fire twice |
| Partial failure | "Deleted 310 of 312 tasks. 2 couldn't be removed. Retry?" |
| Error | Says what failed and what to do next |
| Offline | Delete is disabled with an explanation, or queued with a clear label |
| Success | Toast with Undo; focus moves somewhere sensible (not lost) |

**Step 5: Motion and keyboard.** The deleted row collapses over ~200ms (not instantly, so people see what changed), respecting reduced motion by fading instead. After deletion, keyboard focus lands on the next item in the list. If focus vanishes, a keyboard user has to start from the top of the page.

**Step 6: Write the words.** Labels, toast and error text are interaction design. "Couldn't delete 2 tasks because they're locked by an integration. Retry or unlock them in Settings" beats "Something went wrong."

Notice what happened: one "simple" button became a decision about reversibility, a pattern choice, seven states, a focus rule and microcopy. That's the real job.

## Mistakes to memorize

| Mistake | What happens | Fix |
| --- | --- | --- |
| Confirm everything | People click through without reading | Undo for reversible actions; confirm only the irreversible |
| Disabled buttons with no reason | People are stuck and guess | Explain why, or keep it enabled and show the error |
| Validate on every keystroke | Errors appear before people finish typing | Validate on blur or submit |
| Placeholders as labels | The label disappears while typing | Visible labels, placeholders for examples |
| Hover-only controls | Fails on touch and keyboard | Show on focus too; never hide the only path |
| Toasts for critical info | Gone before it's read | Use inline or banner messages for anything important |
| Infinite scroll for goals | People can't reach the footer or return to a spot | Pagination or "load more" when location matters |
| Modals stacked on modals | Focus and context get lost | One layer; use a page or side panel for complex tasks |
| Custom widgets that look native | Keyboard and screen readers break | Use native elements or follow the ARIA patterns |

## A 20-minute flow review

Take any flow and ask these in order:

1. **What's the goal, in one sentence?** If there are two, it's two flows.
2. **How many steps does the *typical* person take?** Count clicks, fields and decisions.
3. **Where do people need information they don't have yet?** Move that information earlier.
4. **What can go wrong at each step?** Write the message for the most likely failure.
5. **What happens if they stop halfway?** Is work saved? Can they resume?
6. **Who else must act, and how do they find out?** Notifications, assignments, permissions.
7. **Which step could be removed or automated?** Defaults and smart prefill beat extra fields.
8. **What does the person see after success?** A next step, not a dead end.

## Where to go deeper

- **Content design / UX writing.** Labels, errors, empty states and AI responses are all words.
- **Accessible interaction patterns:** keyboard operation, focus management and the ARIA Authoring Practices patterns for tabs, comboboxes and dialogs (see [[ch:11]]).[[ref:aria-apg]]
- **Prototyping real behavior,** including with AI coding tools (see [[ch:09]]).
- **Evaluating AI behavior:** rubrics, failure cases, small evals (see [[ch:04]]).

## Your next four weeks

| Week | Focus | You'll have |
| --- | --- | --- |
| 1 | States and patterns: matrix plus a form audit | A matrix for one real feature |
| 2 | Flows with failure paths, plus an IA tree test | Annotated flows and a test report |
| 3 | Motion and responsive behavior with keyboard and reduced-motion support | A small prototype that passes a keyboard-only test |
| 4 | One AI feature with approvals and an eval rubric | A prototype, a rubric and a one-page rationale |

## Quick check

:::check Knowledge check 1
A teammate wants a confirmation dialog on every delete. What do you suggest?
---
Undo for reversible deletes (a short-lived "Deleted. Undo" message), and a confirmation dialog only for irreversible or high-impact actions with clear wording about what will be lost. Confirming everything trains people to click through without reading and adds friction for the careful majority.
:::

:::check Knowledge check 2
An AI assistant can send emails for the user. Where do you put approval, and why not everywhere?
---
Before any externally visible, hard-to-reverse action (sending, deleting, paying), with the full content and recipients shown first, and a stop control always available. Not at every low-risk step, because constant approvals train people to click through and defeat the point of delegating. Scale oversight to risk and reversibility.
:::

## Further reading

:::reading Sources to open next
- NN/g, *State of UX 2026* on trust as a design problem for AI.[[ref:nng-state-ux-2026]]
- NN/g, *10 Usability Heuristics* for evaluation.[[ref:nng-heuristics]]
- W3C, *WCAG 2.2* and the *ARIA Authoring Practices Guide* for accessible interaction.[[ref:wcag22]][[ref:aria-apg]]
- Product Talk on evals and discovery with AI.[[ref:product-talk]]
:::
