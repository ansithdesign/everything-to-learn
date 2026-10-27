You press a button and nothing happens. You press it again. Now you've ordered two pizzas.

That tiny failure is an interaction design problem. Interaction design (IxD) is about how a product *behaves*: what happens when people act, how the system responds, and how they find their way around. Visual design decides how a button looks; interaction design decides what it does, what it says while it's doing it, and what happens if it fails.

This edition covers the foundations: the principles behind usable interactions, common patterns, motion, user flows, information architecture and responsive design.

:::pull
Good interaction design is invisible. People only notice it when it's missing.
:::

## What interaction design is

Interaction design shapes the dialogue between a person and a product. Every interaction is a little loop: the person **acts**, the system **responds**, the person **interprets** the response and decides what to do next. Interaction design makes each step of that loop clear.

It's closely related to **user experience (UX) design**, which covers the whole experience (including research, content and service), and **UI design**, which focuses on the visual interface. In practice the roles overlap, but the question interaction design asks is always: *how does it work, and does that make sense to people?*

### The five dimensions

A common framework describes interaction design in five dimensions:

1. **Words:** labels, instructions, messages.
2. **Visual representations:** icons, images, typography.
3. **Physical objects or space:** the device and how it's held or used (mouse, touch, voice).
4. **Time:** animation, sound, how long things take.
5. **Behavior:** how the system reacts to actions.

## Principles of usable design

Most of these come from Don Norman's *The Design of Everyday Things* and Jakob Nielsen's usability heuristics.[[ref:nng-heuristics]]

### Affordances and signifiers

An **affordance** is what an object allows you to do: a button affords pressing, a slider affords dragging. A **signifier** is the cue that tells you so: a raised shape, an underline, a cursor change. Many usability problems happen because something *can* be done but nothing *signals* it.

### Feedback

Every action should get a clear, timely response. Clicked a button? It should change state. Submitted a form? Show progress, then confirmation. Without feedback, people repeat actions or assume something broke.

### Mapping

**Mapping** is the relationship between controls and their effects. Good mapping feels natural: a volume slider that goes up to increase volume, a scroll direction that matches the content movement.

### Constraints

**Constraints** limit what people can do to prevent errors. Disabling a "Next" button until required fields are filled, or only allowing dates in the future for a booking, are constraints.

### Consistency

Similar things should look and behave the same, inside your product and with platform conventions. **Jakob's law** puts it simply: people spend most of their time on *other* products, so they expect yours to work the same way.

### Conceptual models

A **conceptual model** is how the product works, as the designer intended. A **mental model** is how users *think* it works. Good design makes these match. When they don't, users make "mistakes" that are really design failures.

### Nielsen's ten heuristics

A widely used checklist for evaluating interfaces:

| Heuristic | In plain language |
| --- | --- |
| Visibility of system status | Always show what's happening |
| Match with the real world | Use familiar words and concepts |
| User control and freedom | Provide undo and easy exits |
| Consistency and standards | Follow conventions |
| Error prevention | Stop mistakes before they happen |
| Recognition over recall | Show options instead of making people remember |
| Flexibility and efficiency | Shortcuts for experts, simplicity for beginners |
| Aesthetic and minimalist design | Remove what doesn't help |
| Help with errors | Clear messages that explain how to fix it |
| Help and documentation | Easy to find when needed |

### Laws worth knowing

| Law | What it says | Design implication |
| --- | --- | --- |
| Fitts's law | Time to hit a target depends on its size and distance | Make important targets large and close |
| Hick's law | More choices take longer to decide | Reduce or group options |
| Jakob's law | Users expect your product to work like others | Follow familiar patterns |
| Miller's law | Working memory is limited | Chunk information (but "7±2" is often misused) |
| Tesler's law | Complexity can't be removed, only moved | Decide who handles it: the system or the user |

The Laws of UX site collects these with sources.[[ref:laws-of-ux]] Treat them as helpful rules of thumb, not physics.

## Designing every state

Every component and screen exists in several **states**. Designers often draw only the "populated, everything works" version, but users spend lots of time in the others.

| State | Example |
| --- | --- |
| Empty | No projects yet |
| Loading | Fetching data |
| Partial | Some data loaded, some failed |
| Error | Something went wrong |
| Success | Action completed |
| Disabled | Not available right now (say why) |
| Hover / focus / active | Interactive feedback |
| No permission | User can't access this |
| Offline | No connection |

Designing all the states is one of the clearest signs of a thorough interaction designer.

## Common interaction patterns

**Design patterns** are reusable solutions to common problems. Using familiar patterns means people already know how to use your product.

### Navigation patterns

- **Top navigation bar:** a few main sections, common on websites.
- **Sidebar navigation:** many sections, common in apps and dashboards.
- **Tabs:** switch between a few related views on the same page.
- **Bottom tab bar:** main destinations on mobile apps.
- **Breadcrumbs:** show where you are in a hierarchy and let you go back up.
- **Hamburger menu:** hides navigation behind an icon; saves space but reduces discoverability.
- **Search:** essential when there's lots of content.

### Input and form patterns

- **Text fields** with visible labels (placeholders disappear when typing, so they shouldn't be labels).
- **Radio buttons** for one choice from a few; **checkboxes** for multiple independent choices.
- **Dropdowns** for long lists; **segmented controls** for a few views.
- **Toggles** for on/off settings that take effect immediately.
- **Steppers and sliders** for numbers within a range.
- **Inline validation:** check input after the user finishes a field, and explain how to fix errors.

### Feedback patterns

- **Inline messages:** next to the thing they're about.
- **Toasts / snackbars:** brief messages that disappear, good for confirming an action (with Undo).
- **Banners:** page-level messages that stay until dismissed.
- **Modals (dialogs):** block the page until the user responds; use sparingly.
- **Progress indicators:** spinners for short waits, progress bars for longer, skeleton screens to show the shape of content while loading.

### Disclosure patterns

- **Progressive disclosure:** show the basics first and reveal advanced options when needed.
- **Accordions:** expandable sections.
- **Tooltips:** short help on hover or focus.

### Error prevention and recovery

- **Undo** is usually better than "Are you sure?" dialogs.
- **Confirmation dialogs** are for irreversible, high-impact actions.
- **Good error messages** say what happened, why and how to fix it, in plain language.

:::example Writing a good error message
Bad: "Error 422." Better: "Something went wrong." Best: "That email is already registered. Log in instead, or use a different email."
:::

## Motion and micro-interactions

### Why motion matters

Animation isn't just decoration. It helps people understand what's happening:

- **Feedback:** a button press animation confirms the tap.
- **Orientation:** a panel sliding in from the right shows where it came from.
- **Continuity:** a thumbnail expanding into a full image keeps context.
- **Attention:** a subtle pulse highlights something new.

### Micro-interactions

A **micro-interaction** is a small, single-purpose interaction, like liking a post or toggling a setting. Dan Saffer's model breaks it into four parts:

1. **Trigger:** what starts it (a tap, or a system event).
2. **Rules:** what happens.
3. **Feedback:** how the user knows what happened.
4. **Loops and modes:** what happens over time or on repeat.

### Timing and easing

- Most interface animations feel right between roughly **100 and 300 milliseconds**. Faster feels instant; slower feels sluggish.
- **Easing** describes acceleration. *Ease-out* (fast start, slow end) feels natural for things appearing; *ease-in* for things leaving. *Linear* movement often feels mechanical.
- Bigger movements can be a little longer than small ones.

### Motion and accessibility

Some people get dizzy or distracted by motion. Respect the operating system's "reduce motion" setting, avoid flashing content, and never rely on animation alone to communicate something.[[ref:wcag22]]

## User flows

### What a user flow is

A **user flow** is the path a user takes to complete a task: the steps, screens and decisions from start to finish.

| Type | Shows | Use it for |
| --- | --- | --- |
| Task flow | A single linear path | Simple tasks |
| User flow | Paths including decisions and branches | Most features |
| Wireflow | Flow plus wireframes of each screen | Communicating with teams |
| Screen flow | Sequence of actual screens | Detailed handoff |

### Flow diagram basics

Common notation: **rectangles** for screens or steps, **diamonds** for decisions, **arrows** for movement, and start/end points. Start with the user's **entry point** (where do they come from?), mark the **decisions**, and include the **failure paths** (what if payment fails?).

### Good flows

- Have one clear goal.
- Use the fewest steps that still feel safe.
- Ask for information when it's needed, not all up front.
- Let users go back without losing work.
- End with clear confirmation and a next step.

## Information architecture

### What IA is

**Information architecture (IA)** is how content and features are organized, structured and labeled so people can find and understand them. If interaction design is how things work, IA is where things live and what they're called.

IA has four main parts:

1. **Organization systems:** how content is grouped.
2. **Labeling systems:** the words used.
3. **Navigation systems:** how people move around.
4. **Search systems:** how people find things directly.

### Ways to organize content

- **Alphabetical, chronological, geographical:** objective, good for known items.
- **By topic or subject:** most common.
- **By task:** organized around what users want to do ("Pay a bill").
- **By audience:** "For students," "For teachers."
- **Hybrid:** combinations, which can get confusing if not handled carefully.

### Hierarchies: broad vs. deep

A **broad** structure has many top-level items and few levels; a **deep** one has few top-level items and many levels. Too broad overwhelms; too deep hides things. Most products aim for a balance.

### Labels

Most findability problems are labeling problems. Use the words your users use, not internal jargon. "Billing" beats "Revenue operations."

### IA research methods

- **Card sorting:** users group content into categories (open: they name groups; closed: you provide them).
- **Tree testing:** users try to find items in a text-only hierarchy.
- **First-click testing:** where do users click first for a task?

### Sitemaps

A **sitemap** is a diagram of the product's structure: pages and how they nest. It's the IA's blueprint, made before designing individual screens.

## Responsive and adaptive design

### Responsive vs. adaptive

- **Responsive design** uses one flexible layout that adjusts fluidly to any screen size.
- **Adaptive design** uses several fixed layouts designed for specific screen sizes or contexts.

Most modern web products are responsive with a few breakpoints.

### Key ideas

- **Breakpoints:** where the layout changes. Choose them based on when *content* stops fitting, not on specific devices.
- **Mobile-first:** design for small screens first; it forces you to prioritize.
- **Fluid grids and flexible images:** sizes in percentages or relative units.
- **Touch vs. mouse:** touch targets need to be larger (at least 24 by 24 CSS pixels per WCAG, and platform guides recommend about 44 to 48 for touch), and hover doesn't exist on touch screens.[[ref:wcag22]]
- **Content priority:** on smaller screens, decide what to show, hide, collapse or move.

### Common responsive patterns

- **Mostly fluid:** columns reflow and stack at narrower widths.
- **Column drop:** columns stack one by one as the screen narrows.
- **Layout shifter:** the layout changes more substantially at breakpoints.
- **Off-canvas:** navigation or panels slide in from the side on small screens.

## Key terms

| Term | Plain meaning |
| --- | --- |
| Affordance | What an object lets you do |
| Signifier | The cue that shows what's possible |
| Feedback | The system's response to an action |
| Mental model | How users think something works |
| Design pattern | A reusable solution to a common problem |
| Progressive disclosure | Showing advanced options only when needed |
| Micro-interaction | A small, single-purpose interaction |
| Easing | How an animation accelerates and decelerates |
| User flow | The path to complete a task |
| Information architecture | How content is organized and labeled |
| Breakpoint | A width where the layout changes |

## Quick check

:::check Knowledge check 1
A "Save" button gives no response when clicked. Which principle is broken, and what's the fix?
---
Feedback (and visibility of system status). Show a pressed state, a progress indicator while saving and a confirmation when done, or an error with a way to retry.
:::

:::check Knowledge check 2
When should you use a confirmation dialog instead of undo?
---
For irreversible, high-impact actions where undo isn't possible (like permanently deleting an account). For reversible actions, undo is better because it doesn't interrupt everyone.
:::

:::check Knowledge check 3
What's the difference between card sorting and tree testing?
---
Card sorting helps *create* a structure by learning how users group content. Tree testing *evaluates* a structure by checking whether users can find items in it.
:::

## Further reading

:::reading Sources to open next
- NN/g, *10 Usability Heuristics*.[[ref:nng-heuristics]]
- Laws of UX for the psychological principles behind patterns.[[ref:laws-of-ux]]
- W3C, *ARIA Authoring Practices Guide* for accessible interaction patterns.[[ref:aria-apg]]
- Don Norman, *The Design of Everyday Things*, and Dan Saffer, *Microinteractions* (books).
:::
