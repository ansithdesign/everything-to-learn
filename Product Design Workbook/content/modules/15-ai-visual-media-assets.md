Image, video and motion models are the most visible face of AI in design, and the area where "it looks great" most often hides a problem: inconsistent style, wrong text in the image, unclear rights, or a look that's indistinguishable from everyone else's.

This chapter covers the fundamentals of generative media and how designers use it in 2026: moodboards, illustration, product and marketing imagery, video, motion, 3D and brand work. For legal detail see [[ch:22]]; for visual judgment see [[ch:01]].

:::pull
Generation is cheap. Direction is the skill: knowing what you want, why, and when to stop.
:::

## 1. How image models work (enough to direct them)

- **Diffusion and similar models** learn to turn noise into an image guided by your text (and often a reference image). They don't "draw"; they sample plausible pictures.
- **Text and reference together** give more control than text alone. Reference images carry style, composition or a subject.
- **Seeds and variations:** the same prompt gives different images; saving seeds or using "vary" tools lets you steer instead of re-rolling blindly.
- **Editing, not just generating:** modern tools support inpainting (change a region), outpainting (extend), background removal, relighting and conversational edits. Most professional use is editing.
- **Known weak spots:** legible text, hands and fine anatomy, exact logos, consistent characters across images, accurate charts and diagrams, and precise UI. Models are improving but verify every time.

## 2. The tool landscape (October 2026)

| Need | Tools commonly named | Notes |
| --- | --- | --- |
| Exploratory, stylized imagery | Midjourney | Strong aesthetic range, less precise control |
| Commercial-safe production work | Adobe Firefly | Adobe positions it around licensed training data and, per secondary sources, IP indemnification on paid plans; confirm your plan |
| Conversational editing, consistency | Google's Nano Banana family, ChatGPT images | Good at following edit instructions and keeping a subject |
| Video | Google Veo, Runway-class tools, Midjourney video, others | Fast-changing; clips are short and rights vary |
| Vectors, logos, icons | Recraft-class and Illustrator-integrated tools | Check that output is clean, editable vector |
| 3D and mockups | Image-to-3D and mockup tools | Quality varies; useful for concepts |

Roundups agree on the direction but disagree on rankings and licensing details, and most are affiliate or vendor sites.[[ref:rangy-commercial]] Treat the table as vocabulary, not an endorsement, and read each tool's current terms.

## 3. What designers actually do with it

1. **Moodboards and style exploration.** Generate fifty directions in an hour, then pick three and name *why*. The risk is homogeneity: everyone gets the same "AI look."
2. **Illustration and spot art.** Fast for onboarding, empty states and marketing; keep a style guide (palette, line weight, subject rules) and feed it as references.
3. **Product and lifestyle imagery.** Backgrounds, scene changes, variations; always keep the real product accurate.
4. **Asset production at scale.** Resizing, background extension, localized variants, seasonal versions.
5. **Placeholder to final.** Replace gray boxes in prototypes with believable images so reviews focus on the design.
6. **Motion and video.** Short clips for landing pages, social and concept demos; storyboards before animation.
7. **Icons and illustration systems.** Generate, then redraw or clean in vector so they match your system.

## 4. Directing images: a repeatable prompt structure

:::framework Image brief
**Subject** (who/what), **Setting** (where, when), **Composition** (framing, angle, crop for the layout), **Style** (medium, lighting, color, references), **Constraints** (no text, brand colors, space left for a headline), **Use** (where it will appear and at what size). Add one or two reference images, and name what to take from each.
:::

Tips that hold across tools: generate *without* text and add type in your design tool; ask for negative space where UI or copy will sit; set aspect ratio first; iterate one change at a time; keep a log of prompts and references for repeatability.

## 5. Consistency across a set

The hardest professional problem is a *set* of images that look like they belong together.

- Write a short **art direction note** and reuse it.
- Use **style references** and the same model version for the whole set.
- Generate a **character or subject sheet** first; reuse it as a reference.
- **Post-process** (color grade, crop, grain) in one pass to unify.
- Review the set side by side at the real sizes.

## 6. Video and motion

Video models produce short clips with convincing motion, but control over exact timing, continuity between shots and brand-accurate objects is limited. Practical uses: concept teasers, mood and atmosphere, background loops, storyboards, animatics and quick product-in-context shots. For UI motion (transitions, micro-interactions) you still specify behavior with easing, duration and states; see [[ch:02]]. Treat generated footage as a starting plate, not a finished edit, and check for artifacts at full size.

## 7. Where generative media goes wrong

:::warning Failure modes to check every time
- **Wrong text or logos** baked into the image.
- **Representation problems:** stereotyped people, uniform "default" faces, cultural mistakes.
- **Impossible details:** extra fingers, warped objects, nonsensical UI in screenshots.
- **Accidental resemblance** to a real person or an existing artwork.
- **Style sameness** that makes your brand look generic.
- **Provenance gaps:** you can't say how an asset was made or what it was based on.
:::

## 8. Rights, labels and disclosure (short version)

Under the US Copyright Office's January 2025 report, as summarized by law-firm commentary, prompts alone do not give a user authorship of the output; human-authored contributions, creative selection and arrangement, and substantial modification can be protected.[[ref:copyright-part2]] So the more you edit, the stronger your position, and a purely generated logo may be hard to protect. Platform licenses differ, and lawsuits against image-model makers are ongoing. The EU's AI Act adds labelling duties for synthetic content that are phasing in during 2026 (see [[ch:22]]). Practical habits: use tools whose terms you've read, keep a provenance log, avoid prompting with living artists' names or competitors' brands, and label AI imagery where audiences could be misled.

:::decision When not to generate
Avoid generated imagery for identifiable real people, sensitive subjects, regulated claims (health, finance, safety), product photography that must match the real item, and any asset where authenticity is the point. Photograph or commission instead.
:::

:::exercise Try it: a consistent set of six (3 hours)
Write an art direction note for an onboarding illustration set. Generate six images using one reference style, then edit them to match (palette, crop, grain). Place them in a screen at real size and list every inconsistency you still see. Record prompts, references and edits as a provenance log.
:::

## Quick check

:::check Knowledge check 1
A tool produces a gorgeous hero image with a garbled headline in it. What now?
---
Regenerate without text (or crop it out), leave space for the headline, and set the type in your design tool. Check the rest of the image for artifacts, and record the prompt and tool for provenance.
:::

:::check Knowledge check 2
Marketing wants a fully AI-generated logo. What do you raise?
---
Distinctiveness (models average toward common looks), rights (a purely generated mark may not be protectable and platform terms vary), vector quality and brand fit. Suggest using AI for exploration, then having a designer draw and own the final mark.
:::

## Further reading

:::reading Sources to open next
- US Copyright Office AI reports, read through the office's own pages for the current state.[[ref:copyright-part2]]
- The vendor terms of every media tool you use professionally.
- A commercial-use roundup, read for questions to ask rather than answers.[[ref:rangy-commercial]]
:::
