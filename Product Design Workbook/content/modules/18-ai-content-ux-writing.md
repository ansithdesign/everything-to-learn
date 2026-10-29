Words are where AI is most at home, so it is where the temptation to accept the first draft is strongest. Interface copy is small, but it carries product meaning, legal risk and brand voice. A generic sentence in a button or an error message is a defect users feel.

This chapter covers AI for UX writing, content design, localization and sample data. See also [[ch:07]] for communication and [[ch:12]] for prompting.

:::pull
AI writes the average sentence. Your job is to know what the right sentence is for this user at this moment.
:::

## 1. What AI does well with UI text

- **Variations:** ten label options for a button in seconds.
- **Consistency checks:** finding "Delete," "Remove" and "Discard" used for the same action.
- **Tone shifts:** rewrite for a calmer, plainer or more formal register.
- **Plain-language rewrites** of dense legal or technical text.
- **Error and empty-state drafts** to react to.
- **Realistic sample data:** names, addresses, long strings, edge cases.
- **Translation drafts** and pseudo-localization for layout testing.
- **Summaries** of long content for previews and notifications.

## 2. What it does badly

| Weakness | Example | Fix |
| --- | --- | --- |
| Generic voice | "Oops! Something went wrong." | Provide a voice guide and examples |
| Wrong terminology | Uses "client" where your product says "account" | Supply a glossary; check against it |
| Invented facts | States a policy or limit that doesn't exist | Verify every claim with the owner |
| Over-length | Verbose labels that break layouts | Set character limits |
| Cultural slips | Idioms and humor that don't travel | Review with native speakers |
| Missing context | Doesn't know the state, user or next step | Give state, user and action in the prompt |

## 3. A copy brief that works

:::framework Copy brief
**Surface** (button, error, empty state, tooltip), **State** (what just happened), **User** (who, how they feel, what they know), **Goal** (what they should do next), **Voice** (three adjectives and a do/don't), **Glossary** (approved terms), **Constraints** (max characters, localization, legal), **Examples** (two good, one bad). Ask for several options with a one-line rationale for each.
:::

Ask for rationale so you can judge reasoning, not just wording. Ask it to flag any claim it made that needs verification.

## 4. Voice and tone systems

Feed the model your voice guide as a document, not a vibe. Include sample strings for different situations (success, error, risky action, onboarding) and banned phrases. Then test: generate copy for five states and compare against your real examples. If it fails, the guide is probably too abstract; add concrete before-and-after examples.

## 5. Error messages and high-stakes text

Errors, permissions, payments, health and regulated actions need a human owner. Draft with AI, then check:

1. Does it say what happened, in human terms?
2. Does it say what to do next?
3. Is it accurate about cause and consequence?
4. Is it free of blame?
5. Does legal or compliance need to approve it?

:::warning Common trap: confident but wrong
A model will happily write "Your data is deleted permanently" or "No fees apply." If the system doesn't do that, you've shipped a false statement. Treat every factual claim in generated copy as unverified.
:::

## 6. Localization and global products

AI translation is now good enough for drafts and for many internal uses. For product UI, risks remain: terminology drift, wrong formality, gendered forms, text expansion breaking layouts, and right-to-left mirroring. Practical flow: write clear source strings (no idioms, complete sentences), supply a glossary, translate with AI, have a speaker of the language review, and test with pseudo-localization and longest strings. Keep strings out of images.

## 7. Sample data and content for prototypes

Realistic data makes reviews honest. Ask for diverse names and formats, very long and very short values, missing fields, special characters, and numbers at the extremes. Make sure sample data contains no real people's personal information, and avoid stereotyped sets.

## 8. AI-generated content inside the product

If your product itself generates text (summaries, suggestions, replies), the content design job gets bigger: set the tone of the system, how it signals uncertainty, how it cites sources, what it refuses to say, and how users edit or reject output. These are design decisions, not just prompt settings; see [[ch:20]] and [[ch:21]].

:::example A hypothetical error rewrite
Draft from a tool: "Oops! We couldn't process your request. Please try again later." Better: "We couldn't save your changes because you're offline. They'll save when you reconnect." It names the cause, reassures and says what happens next. The model produced the first; a designer who knew the offline behavior wrote the second.
:::

:::exercise Try it: copy audit with a glossary (2 hours)
Collect thirty strings from one flow. Check them against your glossary with an AI tool and list inconsistencies. Rewrite five using a copy brief and compare to the originals. Note which suggestions you rejected and why.
:::

## Quick check

:::check Knowledge check 1
An AI-written tooltip claims "Changes apply instantly." What do you do?
---
Verify with engineering whether that is true in all cases (latency, offline, permissions). If not, revise to the accurate behavior. Treat every factual claim in generated copy as needing confirmation.
:::

:::check Knowledge check 2
How do you make AI copy sound like your product?
---
Give it a concrete voice guide with examples for different states, a glossary and banned phrases, plus context about the user and state. Then test on known cases and refine the guide where output drifts.
:::

## Further reading

:::reading Sources to open next
- Your own voice and terminology documents, kept as machine-readable text.
- Product Talk on AI and product work.[[ref:product-talk]]
- A model vendor's prompting guide.[[ref:prompt-guide]]
:::
