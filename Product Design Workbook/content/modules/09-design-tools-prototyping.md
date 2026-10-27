A few years ago, "I'm fast in Figma" was a real career edge. Today, an AI agent can generate a screen in the time it takes you to find the right frame. And a decent prototype can be built in real code from a text description.

So what's left of tool skill? Quite a lot, but it's changed shape. The durable skill isn't mastering any one canvas. It's knowing **which tool and which fidelity answer which question**, building files that people and agents can both use, and getting your intent to the people who build it without losing anything on the way.

This chapter covers tool proficiency, prototyping and developer handoff, reframed for now. Tool features change monthly, so treat specifics as a snapshot (checked October 2026) and go to the vendor's pages for current details.

:::pull
Tools change every year. The questions they answer don't: what do we need to learn, how real does this need to be to learn it, and how does it reach the people who'll build it?
:::

## 1. Tool proficiency

### What proficient means

Not knowing every feature. It means producing files that are **fast to work in, easy for others to understand, and consistent with the product's system**. Marks of a well-built file:

- **Components and variants** for everything reused, with properly defined properties.
- **Auto layout** (or its equivalent) so content, language and viewport changes don't break designs.
- **Variables and modes** for color, spacing, type and theme, mirroring the code's tokens (see [[ch:03]]).
- **Sensible structure and naming:** layers, pages and frames another person can navigate.
- **States designed, not implied:** hover, focus, disabled, error, loading, empty.
- **Notes in the file:** annotations for behavior, edge cases and links to specs.

### Habits that save hours

- Learn the shortcuts for your ten most frequent actions.
- Use libraries and templates before rebuilding.
- Keep a clear file structure: cover, working pages, ready for development, archive.
- Name versions and keep a changelog for shared work.
- Test components with long text, narrow widths, right-to-left and zoom.

### What changed at Config 2026

Figma's Config keynote was on 24 June 2026. According to Figma's own recap, these are in **open beta** for paid plans: a Figma agent that can generate and remix designs, automate repetitive tasks and give design feedback (chats are visible to collaborators); generative plugins the agent builds from a description; custom WebGPU shader effects; and Figma Motion for animation. **Coming soon** (waitlist): code layers, which let you work with code on the canvas including by cloning a repository, plus the agent in FigJam and Slides and 3D transforms.[[ref:figma-config-2026]] That recap didn't cover Figma Make, Dev Mode or design systems, so details on those come from other coverage I haven't verified.

Two points matter more than any feature list:

1. **Agents work better on well-structured files.** One that reads a file with consistent components, variables and names produces far better output than one that reads a heap of detached shapes. The structure habits above are now also the *input* to your tools.
2. **Tools are converging on code.** Design tools add code; code tools add design views. Understanding both sides (see [[ch:10]]) is becoming worth more than mastering one canvas.

:::warning Common trap: letting the tool define "finished"
Generated screens *look* finished. Check them against your system, accessibility needs and the state list from [[ch:02]]. A convincing frame can hide an inaccessible, off-system or incomplete design.
:::

:::exercise Try it: rebuild a file the right way (2 hours)
Take a messy file. Restructure it: turn repeats into components with variants, replace hardcoded values with variables, add auto layout, name layers, add states. Time a small change (new theme, longer labels, new state) before and after.
:::

## 2. Prototyping

### Match fidelity to the question

A prototype exists to answer a question. The usual mistake is making it more realistic than the question needs, or less.

| Fidelity | Looks like | Good for | Misleads when |
| --- | --- | --- | --- |
| Paper or sketch | Hand-drawn screens | Exploring ideas, early flow checks | You need visual or interaction detail |
| Low-fi wireframe | Gray boxes and labels | Structure, content, flow | People react to missing polish |
| Click-through | Linked static screens | Navigation and flow comprehension | Behavior depends on data or states |
| High-fi interactive | Realistic visuals and transitions | Usability, stakeholder alignment | People critique the look, not the concept |
| Coded prototype | Real code with sample data | Realistic behavior, performance, data states | It hides unresolved engineering problems |
| Wizard of Oz | A person simulates the system | Testing AI or complex behavior before building | You can't scale or repeat it |

Some questions can't be answered with static screens: how a table behaves with 5,000 rows, how long a streaming response *feels*, how validation works, how an agent asks for approval. For those, use a coded or AI-assisted prototype.

### 2026 shifts

- **Designers can prototype in code now.** AI coding tools turn a description or a design into a working prototype in hours. Job postings I reviewed in October 2026 for design engineer, rapid prototyping and AI prototyping roles asked for exactly this, though job boards are noisy and some listings are enriched by aggregators, so this is a signal, not a statistic.
- **The risk went up, not down.** A prototype that behaves like a product invites feedback on polish and convinces stakeholders the work is nearly done. Be explicit about what's real and what's simulated, and test the riskiest assumption (value, trust, comprehension), not the visual finish.
- **Prototype debt is real.** A generated prototype can become the thing engineers are told to "just ship." Decide up front whether it's disposable or the start of production, and say so out loud.
- **Test AI with varied inputs.** A single scripted demo path hides the failures that matter. Include messy inputs, wrong outputs and recovery (see [[ch:02]] and [[ch:04]]).

:::decision Which prototype should I build?
Ask what you need to learn, and who needs to learn it. Is the *idea* wanted? Use the cheapest thing people can honestly react to. Does the *interaction* work? Build clickable or coded with realistic states. Does the *system* behave well (AI quality, performance, data)? Build coded or Wizard-of-Oz with varied inputs. Build the least that answers the question.
:::

:::exercise Try it: answer one question three ways (half a day)
Pick a design question. Build the cheapest prototype that can answer it, then a higher-fidelity version. Test both with the same five people. Compare what each taught you and what each hid, and note which fidelity you'll choose next time for this kind of question.
:::

## 3. Developer handoff

"Handoff" implies a single moment. In reality it's a continuous conversation, and the file is only part of it. The goal: engineers can build what you intend without guessing, and you can see where you disagree *early*.

### A complete handoff

- **Every state:** default, hover, focus, active, disabled, loading, error, empty, success, partial or offline where relevant (see [[ch:02]]).
- **Behavior:** what happens on click, how things animate, when validation runs, keyboard behavior, focus order.
- **Responsive rules:** how layout changes with width, container, text length and input type.
- **Real content,** including long and short extremes and truncation rules.
- **Accessibility annotations:** headings, landmarks, accessible names, focus order, contrast, motion preferences (see [[ch:11]]).
- **Data and constraints:** what data the screen needs, how it loads, limits and error cases.
- **Tokens and components by name,** not raw values.
- **Acceptance criteria:** a short list of conditions that mean "built correctly."
- **Open questions,** with owners.

Dev Mode and similar tools help with measurements and tokens, but they can't show behavior, edge cases or intent, so annotate what the inspector can't.

### Design QA

After the build, review it in a real browser and on a real device against the design and acceptance criteria. Log differences with screenshots, rank them by severity and agree a fix schedule. Keep it collaborative: bring the differences that *matter*, not every pixel.

:::framework A short handoff checklist
**States** all designed. **Behavior** written down. **Responsive** rules stated. **Content** realistic. **Accessibility** annotated. **Tokens and components** named. **Data** and error cases covered. **Acceptance criteria** written. **Open questions** listed with owners. **A walkthrough** held with the engineer *before* they start.
:::

### 2026 shifts

- **Shared context between design and code is improving.** Tools now connect design files to coding agents so the agent can see components, variables and layout. Figma's recap mentions exporting generated shaders via MCP, and secondary coverage describes broader MCP support for external agents (not verified here).[[ref:figma-config-2026]] The practical effect: your file's structure and naming flow into generated code, so file quality matters more.
- **Acceptance criteria become the contract.** When more of the implementation is generated, a clear list of conditions the result must meet is what you review against.
- **Handoff happens earlier and more often,** because designers and engineers can collaborate on the same coded artifact. Agree on conventions (naming, tokens, branches) to avoid conflicting changes.

:::exercise Try it: acceptance criteria and a build review (half a day)
For something you're about to hand off, write ten acceptance criteria (states, behavior, responsive, accessibility). After it's built, review it in a real browser and on a phone, log differences, agree on priorities with the engineer and track them to done.
:::

## Case: a prototype in an afternoon

You want to test whether admins will trust an AI-generated weekly summary of team activity. Here's one way to go from idea to test in an afternoon, choosing fidelity deliberately.

**Hour 1: Decide what you need to learn.** The riskiest question isn't "does the summary look good?" It's "do admins read it, trust it and act on it?" That points to a realistic, content-driven prototype, not a pixel-perfect one.

**Hour 2: Create realistic content, not lorem ipsum.** Use real anonymized data from last month to write three summaries by hand (or generate drafts and then edit them heavily, checking every number). Include one summary that's wrong on purpose, to see if people notice. Trust can only be tested with content that can fail.

**Hour 3: Build the minimum.** A simple page in your design tool or a quick coded page with three states: the summary email, the in-app view with "Show sources" and a "Report a problem" control. Make the prototype *honest*: label what's simulated.

**Hour 4: Prepare the test.** Tasks: "You open this on Monday morning. What do you do?" Observation targets: Do they check sources? Do they catch the error? Do they forward it? Success criteria written before the sessions.

**What you deliberately skipped:** visual polish, settings, empty states, responsive layouts. They matter later, but not for this question. Saying so up front stops stakeholders from judging the prototype on things it was never meant to answer.

**After the test:** if three of five admins missed the wrong number, that's a design insight (add visible sources and confidence cues) *and* a product insight (maybe summaries need review before sending). Either is worth far more than a polished mockup.

## File-health checklist

Open a file and check:

- [ ] Frames use auto layout (or the equivalent) rather than manually spaced layers.
- [ ] Spacing, color and type come from variables or styles, not raw values.
- [ ] Components have properties (text, icon, variant) instead of copies of the same shape.
- [ ] Layer and page names describe things ("Invoice row / hover"), not "Rectangle 24."
- [ ] Every component has its states; none is "just in my head."
- [ ] Text layers use real content (long, short, empty and international examples tested).
- [ ] Constraints and resizing behavior are set, and you've tested by resizing.
- [ ] A "Ready for dev" page contains only final, annotated frames.
- [ ] Old explorations are archived, not mixed with final work.
- [ ] Notes explain behavior the picture can't (what's clickable, what loads, what happens on error).

A fast self-test: ask someone else to change the primary color, add a theme and lengthen a label. If it takes more than a few minutes, the file is fighting you.

## Useful annotations

| Annotation | Why it helps |
| --- | --- |
| "Table scrolls inside its container; header and first column are sticky" | Prevents a whole-page scroll bug |
| "Row action buttons appear on hover **and** focus; always visible on touch" | Avoids hover-only controls |
| "Validation runs on blur; error message appears below the field and is linked via `aria-describedby`" | Removes guesswork on timing and accessibility |
| "Empty state shows if the list has no items after loading; skeleton while loading" | Defines the two empty-looking states |
| "Truncate at 2 lines with ellipsis; full text in tooltip on hover **and** focus" | Defines overflow behavior |
| "Animation: 200ms ease-out; replaced by a fade when reduced motion is on" | Covers motion and accessibility together |
| "Max 50 items per page; server-side sorting" | Sets data expectations early |

## Prototype pitfalls

| Pitfall | What goes wrong | Fix |
| --- | --- | --- |
| Testing the happy path only | You find nothing | Include errors, empties, slow responses |
| Perfect data | Hides layout and content problems | Use real, messy, long content |
| Over-polish | Feedback is about color, not value | Match fidelity to the question |
| Under-polish | People can't take it seriously | Add enough realism to make the task believable |
| No stated limits | Stakeholders assume it's nearly done | Label what's real and what's simulated |
| Generated prototype becomes production | Hidden quality and accessibility debt | Decide up front: throwaway or foundation |
| One-off tool | Nobody can reuse or maintain it | Use your system's tokens and components where possible |

## Where to go deeper

- **Version control basics:** branches, commits and pull requests, enough to follow and contribute.
- **Prototyping with AI coding tools:** clear instructions, constrain to your design system, review the output, know what you can't judge.
- **Motion and interaction specs:** duration, easing, triggers and reduced-motion alternatives.
- **File governance:** libraries, publishing, permissions and update processes.
- **Documentation:** short guides and annotated recordings that make your work understandable without you.

## Your next four weeks

| Week | Focus | You'll have |
| --- | --- | --- |
| 1 | Restructure a file: components, variables, auto layout | Before/after timings |
| 2 | Answer one question at two fidelities | A comparison write-up |
| 3 | A coded prototype with real states | A working prototype with sample data and a test |
| 4 | A full handoff plus design QA | A package reviewed by an engineer, and a prioritized difference list |

## Quick check

:::check Knowledge check 1
Your AI-built prototype impresses stakeholders, who say "ship it." What do you do?
---
Clarify what it is and isn't: what's real, what's simulated, which states, accessibility and edge cases are missing. Review it with engineering for quality and feasibility, and decide explicitly whether to rebuild properly or harden it. Agree a plan and acceptance criteria. Polish isn't production readiness.
:::

:::check Knowledge check 2
You need to know whether people understand a new approval flow. Which prototype?
---
A clickable or coded prototype with realistic states and content, because the question is about comprehension of an interaction and static screens may miss behavior. A paper sketch is too coarse for the detail, and a fully coded system is more than the question needs. Test with representative users on tasks.
:::

## Further reading

:::reading Sources to open next
- Figma, *Everything announced at Config 2026* (the vendor's own account).[[ref:figma-config-2026]]
- web.dev for platform features your prototypes can rely on.[[ref:webdev-baseline]]
- W3C WAI for accessibility annotations and patterns.[[ref:aria-apg]]
- NN/g, *State of UX 2026* on changing roles and expectations.[[ref:nng-state-ux-2026]]
:::
