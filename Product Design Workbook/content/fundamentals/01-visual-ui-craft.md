Some screens feel calm and obvious. Others feel cluttered even when you can't say why. The difference is rarely talent or taste. It's a small set of principles that good visual designers apply, often without thinking.

This edition explains those principles from the ground up: composition and hierarchy, typography, color, layout and grids, and icons and illustration. You've used most of these for years; the goal here is to give you the *vocabulary and reasons* behind them, so you can apply them on purpose and explain them to others.

:::pull
Visual design isn't decoration. It's how a screen tells people what matters, what belongs together and what to do next.
:::

## What visual design does

Visual design in a product has four jobs:

1. **Guide attention:** make the most important thing noticeable first.
2. **Show structure:** make it obvious which things belong together.
3. **Communicate meaning:** use color, shape and type consistently so they carry information (this is a button, that's an error).
4. **Set the tone:** calm or energetic, serious or playful, premium or friendly.

When a design "looks good" but people can't find what they need, it has done job 4 and failed jobs 1 to 3.

## Composition: the core principles

### Hierarchy

**Hierarchy** is the order in which people notice things. Every screen has one, whether you designed it or not. The tools for creating it:

| Lever | How it creates emphasis |
| --- | --- |
| Size | Bigger things are seen first |
| Weight | Bold text stands out from regular |
| Color and contrast | High-contrast or colorful elements pop against muted ones |
| Position | Top and left (in left-to-right languages) are seen early |
| Space | An element with lots of space around it draws the eye |
| Shape and style | A filled button stands out from outlined ones |

A useful exercise: for any screen, write down the **first, second and third read**. If you can't, or if five things compete for first place, the hierarchy needs work.

### Contrast

**Contrast** is difference. Differences in size, weight, color, shape or space are what make hierarchy visible. Without contrast, everything looks equally important, which means nothing is. The trick is to use *strong* contrast for the few things that matter and *little* contrast everywhere else.

### Alignment

**Alignment** means placing elements along shared edges or centers. Aligned elements feel organized and intentional; misaligned ones feel careless, even if people can't say why. Most interfaces use left alignment for text and controls, because it gives the eye a consistent starting point for each line.

### Proximity

**Proximity** means items placed close together look related. It's the cheapest way to group things: no boxes, no lines, just space. A rule of thumb: the space between groups should be clearly bigger than the space within a group.

### Repetition and consistency

**Repetition** means using the same styles for the same kinds of things. If every primary button looks the same, people learn the pattern once and recognize it everywhere. Inconsistency forces people to re-learn.

:::definition The CRAP principles
A popular memory aid from Robin Williams's *The Non-Designer's Design Book*: **C**ontrast, **R**epetition, **A**lignment, **P**roximity. Four principles that fix most layout problems.
:::

### Balance and whitespace

**Balance** is how visual weight is distributed. *Symmetrical* balance (mirrored) feels formal and stable; *asymmetrical* balance (different elements with equal visual weight) feels more dynamic and is common in interfaces.

**Whitespace** (or negative space) is the empty space between and around elements. It's not wasted space. It improves readability, creates grouping and makes important things stand out. *Micro* whitespace is between lines and letters; *macro* whitespace is between sections.

### Gestalt principles

Gestalt psychology describes how people perceive groups and patterns. The most useful in UI:

| Principle | What it means | UI example |
| --- | --- | --- |
| Proximity | Close items look related | A label right above its input |
| Similarity | Similar-looking items look related | All links share one color |
| Common region | Items in a shared container look related | A card groups its content |
| Continuity | The eye follows lines and curves | A row of aligned icons reads as a set |
| Closure | We complete incomplete shapes | Icons that suggest a shape with few lines |
| Figure–ground | We separate objects from background | A modal over a dimmed page |
| Common fate | Things moving together look related | Items that animate together |

:::exercise Try it: name the reads (15 minutes)
Pick three apps you use daily. For one screen in each, write the first, second and third thing your eye lands on, and which lever (size, weight, color, position, space) causes each. You'll start seeing hierarchy everywhere.
:::

## Typography

Most interfaces are mostly text, so typography is a big part of visual design.

### Anatomy and vocabulary

- **Typeface vs. font:** a typeface is the design (for example Helvetica); a font is a specific style and weight of it (Helvetica Bold 16).
- **Baseline:** the invisible line letters sit on.
- **x-height:** the height of lowercase letters like "x." A taller x-height makes text look bigger and read better at small sizes.
- **Ascenders and descenders:** the parts that rise above (b, d, h) or drop below (g, p, y).
- **Leading (line height):** the vertical space between lines.
- **Tracking:** uniform spacing between all letters; **kerning:** spacing between specific pairs.
- **Measure:** line length.

### Kinds of typefaces

| Classification | Features | Typical use |
| --- | --- | --- |
| Serif | Small strokes at the ends of letters | Editorial, long reading, traditional brands |
| Sans-serif | No serifs, cleaner forms | Interfaces, modern brands |
| Monospace | Every character the same width | Code, data |
| Display | Decorative, expressive | Headlines, branding only |

Most product interfaces use a sans-serif for clarity at small sizes on screens.

### Legibility vs. readability

- **Legibility** is how easily individual letters can be told apart (is that an "l" or an "I"?).
- **Readability** is how easily blocks of text can be read, which depends on size, line length, line height, contrast and layout.

You can have a legible typeface set in an unreadable way: tiny, light gray, with lines 150 characters long.

### The settings that matter

- **Size:** body text on screens is commonly around 16px; smaller for captions, larger for headings.
- **Line height:** about 1.4 to 1.7 times the font size for body text; tighter for headings.
- **Line length:** roughly 45 to 75 characters per line for comfortable reading.
- **Weight:** use a few weights (regular, medium, bold) to create levels. Very thin weights are hard to read at small sizes.
- **Alignment:** left-aligned text is easiest to read in most languages. Centered text works for short headlines, not paragraphs. Justified text can create uneven gaps on screens.

### Type scales

A **type scale** is a set of predefined sizes, often based on a ratio (each step is, for example, 1.25 times the previous). It keeps sizes consistent and creates clear levels:

| Role | Example size |
| --- | --- |
| Caption | 13px |
| Body | 16px |
| Subheading | 20px |
| Heading | 25px |
| Page title | 31px |
| Display | 39px |

### Pairing typefaces

If you use two typefaces, they should be clearly different (for example a serif heading with a sans-serif body) but share some quality (similar proportions or mood). Most products are best with one family in a few weights. More than two families usually looks messy.

## Color

### The basics of color

Every color can be described by three properties:

- **Hue:** the color itself (red, blue, green).
- **Saturation (chroma):** how intense or muted it is.
- **Value (lightness):** how light or dark it is.

Lightness differences matter most for readability and hierarchy. Two colors with different hues but similar lightness can be hard to tell apart, especially for people with color vision deficiencies.

### Color models you'll meet

| Model | What it is | Where you see it |
| --- | --- | --- |
| RGB / HEX | Mixes red, green and blue light | Screens, CSS (`#3451d1`) |
| HSL | Hue, saturation, lightness | Easier to reason about in CSS |
| OKLCH | Perceptual lightness, chroma, hue | Modern CSS; lightness steps look even |
| CMYK | Cyan, magenta, yellow, black ink | Print |

### Color harmonies

The **color wheel** arranges hues in a circle. Harmonies are combinations that tend to look pleasing:

- **Monochromatic:** shades of one hue. Calm and cohesive.
- **Analogous:** neighbors on the wheel (blue, blue-green, green). Harmonious, low contrast.
- **Complementary:** opposites (blue and orange). High contrast, energetic; use one as the accent.
- **Split-complementary:** one hue plus the two neighbors of its complement. Contrast with less tension.
- **Triadic:** three evenly spaced hues. Vibrant; hard to balance in UI.

In product design you usually build from **neutrals** (grays) plus **one primary/accent color**, plus **status colors** for success, warning, error and info.

### The 60-30-10 rule

A classic guideline from interior design: about 60 percent dominant color (often a neutral background), 30 percent secondary (surfaces, text), 10 percent accent (buttons, highlights). It's a rule of thumb, not a law, but it stops interfaces from becoming rainbows.

### Meaning and culture

Colors carry associations (red for danger or error, green for success), but meanings vary by culture and context. Never rely on color alone to communicate something: pair it with text, an icon or a pattern.

### Contrast and accessibility

Text needs enough contrast against its background. The Web Content Accessibility Guidelines (WCAG) require a contrast ratio of at least **4.5:1** for normal text and **3:1** for large text and for important interface elements like input borders and icons.[[ref:wcag22]] Black on white is 21:1; a light gray like #9ca3af on white is only about 2.5:1, which fails.

:::warning Common trap: light gray text
Light gray text looks elegant in a mockup and becomes unreadable on a real screen in sunlight. Keep body text dark and secondary text at least 4.5:1.
:::

### Building a UI palette

1. Start with a **neutral scale** (8 to 10 grays from near-white to near-black).
2. Choose a **primary color** for actions and the current location.
3. Add **status colors**: success, warning, error, info, each with a strong and a subtle version.
4. Define colors by **role** (background, surface, text, muted text, border, primary, danger) rather than by appearance, so you can change a theme later.
5. **Test contrast** for every text–background pair.

## Layout and grids

### What a grid is

A **grid** is an invisible structure of columns and spaces that helps you align elements consistently. Its parts:

- **Columns:** vertical sections where content sits.
- **Gutters:** the spaces between columns.
- **Margins:** the space between the outer columns and the edge of the screen.
- **Rows and modules:** horizontal divisions and the cells they create (in modular grids).

### Types of grids

| Grid | Description | Good for |
| --- | --- | --- |
| Manuscript | One large column | Articles, long reading |
| Column | Several equal columns (12 is common because it divides into 2, 3, 4 and 6) | Most websites and apps |
| Modular | Columns plus rows, creating cells | Galleries, dashboards, card layouts |
| Hierarchical | Irregular, based on content importance | Editorial and marketing pages |
| Baseline | Horizontal lines that text sits on | Consistent vertical rhythm |

### Spacing systems

Most design systems use a **base unit**, commonly 4 or 8 pixels, and only use multiples of it (4, 8, 12, 16, 24, 32...). This "8-point grid" makes spacing consistent and easy to hand off. Instead of debating whether something should be 13 or 15 pixels apart, you choose between 12 and 16.

### Responsive layout

Screens vary from narrow phones to wide monitors. **Responsive design** adapts the layout to the available space:

- **Breakpoints:** widths at which the layout changes (for example from one column to two).
- **Fluid layouts:** elements stretch and shrink between breakpoints.
- **Mobile-first:** design the smallest screen first, then add complexity for larger ones. It forces you to prioritize.

### Reading patterns

Eye-tracking research has described common scanning patterns, such as the **F-pattern** (people scan the top and left of text-heavy pages) and the **Z-pattern** (on sparse pages, the eye zigzags from top left to bottom right). Treat these as tendencies, not rules: good hierarchy shapes how people scan.

## Icons and illustration

### Kinds of icons

- **Outlined (line) icons:** light, modern; common in interfaces.
- **Filled (solid) icons:** heavier, easier to see small; often used for the "selected" state.
- **Two-tone and duotone:** two colors or shades for depth.
- **Glyphs:** simple symbols, often in a font or system set.

### Principles for good icons

1. **Recognizable:** use familiar metaphors (magnifier for search, trash can for delete).
2. **Consistent:** same size, stroke width, corner style and level of detail across the set.
3. **Simple:** remove details that disappear at small sizes.
4. **Labeled when unclear:** many icons are ambiguous. Pair them with text unless the meaning is universal.
5. **Accessible:** icon-only buttons need a text label for screen readers.

Icons usually sit on a pixel grid (24 by 24 is common) with "keylines" (guide shapes) so circles, squares and rectangles look equally heavy.

### Illustration

Illustration in products is used for **empty states** (nothing here yet), **onboarding**, **errors** and **marketing**. Good illustration clarifies or sets tone; it doesn't just fill space. Common styles include flat, line, isometric (3D-looking on a diagonal grid), hand-drawn and abstract. Whatever the style, consistency matters more than which style you pick.

## A quick visual critique

When reviewing a screen, walk through:

1. **Hierarchy:** is the most important thing seen first?
2. **Grouping:** do related things sit together, separated from unrelated things?
3. **Alignment:** are edges lined up?
4. **Consistency:** do similar things look the same?
5. **Contrast:** is text readable, and do important actions stand out?
6. **Color:** is color used with purpose, and never as the only signal?
7. **Typography:** sensible sizes, line lengths and line heights?
8. **Whitespace:** is there room to breathe?

## Key terms

| Term | Plain meaning |
| --- | --- |
| Hierarchy | The order in which things are noticed |
| Whitespace | Empty space that separates and emphasizes |
| Gestalt | How people perceive groups and patterns |
| x-height | Height of lowercase letters; affects apparent size |
| Leading | Line height |
| Measure | Line length |
| Type scale | A set of consistent font sizes |
| Hue, saturation, value | The three properties of a color |
| Contrast ratio | A measure of text readability against its background |
| Gutter | Space between grid columns |
| 8-point grid | Spacing in multiples of 8 (or 4) |

## Quick check

:::check Knowledge check 1
A form looks messy, but nothing is misaligned. What's the most likely culprit?
---
Proximity. If labels sit the same distance from the field above as from their own field, and gaps between fields equal gaps within a field, grouping is unclear. Make the space between groups clearly larger than within groups.
:::

:::check Knowledge check 2
Why is the 12-column grid so common?
---
Twelve divides evenly into 2, 3, 4 and 6, so you can create halves, thirds, quarters and sixths, which gives lots of layout flexibility.
:::

:::check Knowledge check 3
Your error messages use red text only. What's wrong?
---
Color alone carries the meaning, so people with color vision deficiencies (and anyone in poor lighting) may miss it. Add an icon and clear text, and check the red meets contrast requirements.
:::

## Further reading

:::reading Sources to open next
- W3C, *WCAG 2.2* for contrast and text requirements.[[ref:wcag22]]
- Material Design 3 for a complete example of a type, color and layout system.[[ref:material3]]
- NN/g, *10 Usability Heuristics*, especially consistency and aesthetic design.[[ref:nng-heuristics]]
- Robin Williams, *The Non-Designer's Design Book*, and Ellen Lupton, *Thinking with Type* (books).
:::
