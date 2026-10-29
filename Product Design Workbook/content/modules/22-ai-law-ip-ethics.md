Designers make decisions with legal weight: what to disclose, what data to collect, what a button commits a user to, what an image implies. AI raises the stakes. This chapter is a working briefing, not legal advice. Laws differ by country and change fast; involve legal counsel for anything you ship.

It extends the responsible-AI section of [[ch:12]] and ties to [[ch:15]] (media), [[ch:14]] (research data) and [[ch:20]] (AI products). Dates reflect October 2026 and come largely from law-firm commentary I did not verify against primary texts.

:::pull
Compliance is a design material: disclosure, consent and control are interface decisions.
:::

## 1. Ownership and copyright of AI output

In the US, the Copyright Office's January 2025 report (Part 2 on copyrightability), as summarized by law firms, concluded that prompts alone do not give a user authorship of the output, that purely AI-generated material can't be registered, and that human contributions (original work that remains perceptible, creative selection and arrangement, substantial modification) can be protected, judged case by case.[[ref:copyright-part2]] Other countries differ. Practical consequences:

- A logo or illustration that is mostly raw generation may be hard to protect.
- Keep records of your human contribution: sketches, edits, selection.
- Contracts should say who owns what and whether AI was used.

## 2. Inputs and training data

Whether training on copyrighted works is lawful is being litigated in several jurisdictions, and I found no settled answer. Risk for designers:

- **Tool terms:** does the vendor train on your inputs? Can admins disable it? Where is data stored?
- **Client confidentiality:** do not paste unreleased designs, source code, research data or personal data into tools you aren't authorized to use.
- **Indemnification:** some vendors offer IP indemnity on paid or enterprise plans; read the conditions.
- **Style imitation:** avoid prompting with living artists' names or competitor brands.

## 3. Transparency rules in the EU (2026)

The EU AI Act's Article 50 sets transparency duties: telling people they're interacting with an AI system, labeling deepfakes and certain AI-generated content, and marking synthetic output in machine-readable form. According to law-firm commentary, Article 50 obligations applied from 2 August 2026, with a transitional period to 2 December 2026 for the machine-readable marking duty (50(2)) for systems already on the market, and the broader Digital Omnibus deferred high-risk obligations to December 2027 and August 2028.[[ref:goodwin-art50]] Commentary also notes the amendments were not yet legally binding until published in the Official Journal; confirm the current status.

What this means in design:

- **Disclose AI interaction** clearly at the start (chatbots, voice agents).
- **Label synthetic media** where people could be misled.
- **Provide a way to reach a human** where appropriate.
- **Check with counsel** whether your feature falls in a high-risk category (hiring, credit, education, essential services, safety).

Elsewhere, US states and other countries are passing their own rules on chatbot disclosure, deepfakes, automated decisions and children. Track the markets you serve.

## 4. Privacy and data

- **Minimize** what you collect and send to a model.
- **Consent** that is informed: say what is used, for what, how long.
- **Sensitive data** (health, finance, children, biometrics) needs extra care.
- **Retention and deletion:** can users delete data and have it removed from logs?
- **Research data:** transcripts and recordings are personal data; check participant consent covers AI processing and where it goes ([[ch:14]]).

## 5. Bias and fairness

Models reflect their training data. In design, bias appears as stereotyped imagery, uneven performance across accents, languages, skin tones or names, and recommendations that disadvantage groups. Practice: test across groups, include affected people in research, review outputs for representation, and document known limits. NIST's Generative AI Profile gives a vocabulary for such risks.[[ref:nist-ai-600-1]]

## 6. Dark patterns and persuasion

AI makes personalized persuasion cheap. Be wary of manufactured urgency, emotional manipulation by companion-like agents, hidden defaults that opt people into data use, and confusing cancellation. Regulators in several regions already treat manipulative design as a consumer-protection issue. Your test: would the user approve of this design if they saw exactly how it works?

## 7. Environmental and human costs

Large models consume significant energy and water, and training and moderation involve human labor, often poorly paid. These are legitimate factors in tool choice and in the question "does this feature need a large model?" Smaller or non-AI approaches can be better and cheaper.

## 8. A working responsible-use process

:::framework Pre-launch AI risk review
1. **Purpose and users:** who benefits, who could be harmed?
2. **Data:** what's collected, sent to vendors, retained?
3. **Disclosure:** where do people learn it's AI and what it can't do?
4. **Control:** edit, opt out, appeal, reach a human?
5. **Quality:** eval results, known failure modes, monitoring plan.
6. **Fairness:** tested across groups?
7. **Legal:** jurisdictions, high-risk categories, IP, contracts.
8. **Accountability:** a named owner and an incident process.
:::

:::decision When to stop and escalate
If a feature affects someone's access to money, work, housing, health, education or safety, or involves children or biometric data, stop and bring in legal, privacy and ethics review before design continues.
:::

:::warning Common traps
- "The vendor handles compliance." You still own how you use it.
- Disclosure in a footer nobody sees.
- Using customer data to demo a tool because it's convenient.
- Treating a legal blog's summary as the law.
:::

:::exercise Try it: a one-page risk review (2 hours)
Take an AI feature your team is considering. Fill in the eight-part review above. Mark every answer as known, assumed or unknown. Send the unknowns to the right owner and set a date.
:::

## Quick check

:::check Knowledge check 1
A client wants a fully AI-generated brand mark. What do you raise?
---
Distinctiveness and similarity risk, the limited copyright protection for mostly machine-generated work, platform license terms, and the option of using AI for exploration while a designer draws the final mark. Document human contribution and confirm ownership in the contract.
:::

:::check Knowledge check 2
Your team ships a chat assistant in the EU. What transparency items do you check?
---
That users are clearly told they're talking to an AI at the start, that any synthetic media is labeled, that machine-readable marking is addressed where applicable, and that legal has confirmed the current Article 50 dates and any high-risk classification.
:::

## Further reading

:::reading Sources to open next
- US Copyright Office AI reports and registration guidance.[[ref:copyright-part2]]
- The EU AI Act text and Commission guidance on Article 50, plus the transparency code of practice.[[ref:goodwin-art50]]
- NIST AI 600-1.[[ref:nist-ai-600-1]]
- Your vendors' data-use and indemnity terms.
:::
