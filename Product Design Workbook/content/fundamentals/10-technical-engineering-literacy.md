You don't need to write production code to be a great product designer. But you do need to understand the material you're designing with. A furniture designer who understands wood designs chairs that can be built and last. A product designer who understands the web designs interfaces that can be built, perform well and work for everyone.

This edition explains the technical foundations in plain language: how the web works, HTML and CSS, JavaScript basics, how engineering teams work, how responsive design is built and how design systems become code.

:::pull
Technical literacy isn't about writing code. It's about having better conversations with the people who do.
:::

## How the web works

### Clients and servers

When you open a website:

1. Your **browser** (the client) sends a **request** to a **server** over the internet.
2. The server sends back a **response**: HTML, CSS, JavaScript, images and data.
3. The browser **renders** (draws) the page.

Apps work similarly, with the app as the client.

### Front end and back end

| Part | What it does | Typical technologies |
| --- | --- | --- |
| Front end | Everything users see and interact with | HTML, CSS, JavaScript, frameworks like React |
| Back end | Logic, data storage, security, integrations | Servers, databases, languages like Python, Java, Node.js |
| API | The bridge between front end and back end | REST, GraphQL |
| Database | Where data is stored | PostgreSQL, MySQL, MongoDB |

### APIs

An **API** (Application Programming Interface) is how different parts of software talk to each other. When a screen shows your recent orders, the front end asks an API, "Give me this user's orders," and the API returns data.

For designers, APIs matter because:

- Data **takes time** to arrive, so you need loading states.
- Requests can **fail**, so you need error states.
- Data may be **missing or empty**, so you need empty states.
- What you can show depends on **what data exists.**

### Performance

How fast a page feels affects users and business. Google's **Core Web Vitals** measure three things:[[ref:web-vitals]]

- **LCP (Largest Contentful Paint):** how fast the main content appears.
- **INP (Interaction to Next Paint):** how quickly the page responds to interactions.
- **CLS (Cumulative Layout Shift):** how much the layout jumps around while loading.

Design choices affect these: huge images, many fonts and elements that load late and push content around all hurt performance.

## HTML: structure and meaning

### What HTML is

**HTML** (HyperText Markup Language) defines the structure and meaning of content using **elements** written as tags:

```html
<h1>Your orders</h1>
<p>You have 3 orders in progress.</p>
<button type="button">Track order</button>
```

### Semantic HTML

**Semantic** elements describe *what* content is, not how it looks:

| Element | Meaning |
| --- | --- |
| `<header>`, `<footer>` | Page or section header and footer |
| `<nav>` | Navigation |
| `<main>` | Main content |
| `<section>`, `<article>` | Grouped or standalone content |
| `<h1>`–`<h6>` | Headings in a hierarchy |
| `<p>` | Paragraph |
| `<ul>`, `<ol>`, `<li>` | Lists |
| `<a>` | Link (goes somewhere) |
| `<button>` | Button (does something) |
| `<form>`, `<label>`, `<input>` | Forms |
| `<table>` | Tabular data |

Semantics matter because browsers, search engines and assistive technologies (like screen readers) rely on them. A real `<button>` works with the keyboard and screen readers automatically; a `<div>` styled to look like a button doesn't.

### The DOM

The browser turns HTML into the **DOM** (Document Object Model): a tree of elements that JavaScript can read and change. When a page updates without reloading, JavaScript is changing the DOM.

## CSS: presentation and layout

### What CSS is

**CSS** (Cascading Style Sheets) controls how HTML looks: colors, fonts, spacing, layout and animation.

```css
.button {
  background: #3451d1;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
}
```

### Key concepts

- **Selectors** choose which elements to style (`.button`, `h1`, `#header`).
- **The cascade** decides which rule wins when several apply, based on importance, specificity and order.
- **Inheritance:** some properties (like font and color) pass from parent to child elements.

### The box model

Every element is a rectangular box made of:

1. **Content:** the text or image.
2. **Padding:** space inside the border.
3. **Border:** the edge.
4. **Margin:** space outside, separating it from other boxes.

Understanding this explains most spacing questions in implementation.

### Layout systems

- **Normal flow:** elements stack top to bottom (block) or sit in lines (inline).
- **Flexbox:** arranges items in one direction (row or column), with control over alignment, spacing and wrapping. Great for toolbars, nav bars and card rows. Design tools' auto layout works similarly.
- **Grid:** arranges items in rows *and* columns. Great for page layouts and galleries.
- **Positioning:** `relative`, `absolute`, `fixed`, `sticky` for special placement (like a sticky header).

### Units

| Unit | What it is | Use for |
| --- | --- | --- |
| `px` | Pixels | Borders, small fixed details |
| `rem` | Relative to the root font size | Font sizes and spacing that respect user settings |
| `em` | Relative to the element's font size | Spacing tied to text |
| `%` | Percentage of the parent | Fluid widths |
| `vw` / `vh` | Percentage of the viewport | Full-screen sections |

### CSS custom properties

**Custom properties** (CSS variables) store values for reuse, which is how design tokens show up in code:

```css
:root { --color-primary: #3451d1; }
.link { color: var(--color-primary); }
```

## JavaScript basics

### What JavaScript does

**JavaScript** makes pages interactive: responding to clicks, validating forms, fetching data, updating content without reloading and animating elements.

### Key concepts in plain words

- **Events:** things that happen (click, input, scroll) that code can respond to.
- **State:** the current data the interface is showing or remembering (what's in the cart, which tab is open).
- **Rendering:** drawing or updating the interface based on state.
- **Asynchronous code:** work that finishes later (like waiting for an API), which is why loading states exist.

### Frameworks and components

Most modern front ends use **frameworks** like React, Vue, Angular or Svelte. They organize interfaces into **components**: reusable pieces with their own structure, style and behavior. A component receives **props** (inputs) and may hold **state**.

This maps directly to design components: a `Button` component in Figma with variants matches a `Button` component in React with props.

## How engineering teams work

### The development workflow

1. **Planning:** work is broken into tickets or user stories.
2. **Development:** engineers write code on a **branch** (a separate copy of the code).
3. **Version control:** **Git** tracks changes; platforms like GitHub host code.
4. **Pull request (PR):** a request to merge changes into the main code. Teammates review it.
5. **Code review:** feedback on quality, bugs and consistency.
6. **Testing:** automated tests and manual QA.
7. **CI/CD:** Continuous Integration / Continuous Deployment automatically tests and releases code.
8. **Environments:** code moves from development to staging (testing) to production (live).
9. **Release:** sometimes behind **feature flags** that turn features on for some users first.

### Words you'll hear

| Term | Meaning |
| --- | --- |
| Ticket / story | A unit of work |
| Story points / estimate | Rough measure of effort |
| Sprint | A fixed period of work (often two weeks) |
| Branch / merge | A separate line of work / combining it back |
| Bug | Something not working as intended |
| Regression | Something that used to work and broke |
| Tech debt | Shortcuts that make future work slower |
| Refactor | Improving code without changing behavior |
| Deploy | Releasing code to an environment |
| Feature flag | A switch to turn a feature on or off |
| Edge case | An unusual situation the code must handle |

### What makes things hard

- It needs **new data** that doesn't exist yet.
- It changes **shared components** used in many places.
- It requires **complex state** (many things changing together).
- It has **performance** concerns (lots of data, heavy animations).
- It needs **integration** with other systems.
- It must work across **many browsers and devices.**

Asking "what makes this hard?" is one of the most useful questions a designer can ask.

## Responsive design in code

### Media queries

**Media queries** apply styles at certain screen sizes:

```css
.cards { display: grid; grid-template-columns: 1fr; }
@media (min-width: 768px) {
  .cards { grid-template-columns: 1fr 1fr; }
}
```

### Container queries

**Container queries** apply styles based on the size of the *container*, not the whole screen, so components adapt wherever they're placed.

### Responsive images

Using `srcset` and modern formats lets browsers load the right image size for each screen, saving data and time.

### The viewport

The **viewport** is the visible area of the page. The `viewport` meta tag tells mobile browsers to use the device width instead of zooming out a desktop layout.

## Design systems in code

### From design to code

1. **Tokens** become CSS custom properties or platform variables.
2. **Components** become coded components with props matching design variants.
3. **Documentation** often lives in tools like **Storybook**, which shows each component in isolation with its states and code.
4. **Packages:** the system is published as a package that product teams install.
5. **Versioning:** updates are released with version numbers so teams can upgrade safely.

### Keeping design and code in sync

- Use the same names for components, variants and tokens in both.
- Agree on a source of truth for tokens.
- Review changes together.
- Document differences and fix them.

## Key terms

| Term | Plain meaning |
| --- | --- |
| Front end / back end | What users see / the logic and data behind it |
| API | How software parts talk to each other |
| HTML | Structure and meaning of content |
| Semantic HTML | Elements that describe what content is |
| DOM | The browser's tree of elements |
| CSS | Styling and layout |
| Box model | Content, padding, border, margin |
| Flexbox / Grid | One-dimensional / two-dimensional layout |
| rem | A font-size-relative unit |
| JavaScript | The language that makes pages interactive |
| State | Current data the interface remembers |
| Component / props | Reusable UI piece / its inputs |
| Git / PR | Version control / request to merge code |
| CI/CD | Automated testing and deployment |
| Core Web Vitals | Google's performance metrics |

## Quick check

:::check Knowledge check 1
Why does a designer need to design loading and error states for a list of orders?
---
Because the data comes from an API: it takes time to arrive (loading), can fail (error) and may be empty (empty state). The interface needs to handle each.
:::

:::check Knowledge check 2
What's the difference between Flexbox and Grid?
---
Flexbox lays out items in one direction (a row or a column). Grid lays out items in two dimensions (rows and columns at once).
:::

:::check Knowledge check 3
Why should a clickable element be a `<button>` rather than a styled `<div>`?
---
A real button is keyboard-focusable, works with Enter and Space and is announced as a button by screen readers. A div needs extra code to do any of that.
:::

## Further reading

:::reading Sources to open next
- MDN Web Docs, the standard reference for HTML, CSS and JavaScript.[[ref:mdn]]
- web.dev, *Core Web Vitals*.[[ref:web-vitals]]
- Style Dictionary, for how tokens become code.[[ref:style-dictionary]]
- Jon Duckett, *HTML and CSS: Design and Build Websites* (book).
:::
