"AI" gets used to mean everything from a spell-checker to a self-driving car. Before you can use it well in your design work (or design good AI features), you need a clear picture of what these systems are, how they work, what they're good and bad at, and what responsible use looks like.

This edition explains the foundations: what AI and generative AI are, how large language models work in plain terms, how designers use AI in their workflow, how prompting works, how to evaluate AI output, and the basics of ethical and responsible AI.

:::pull
AI doesn't replace judgment. It makes judgment the most valuable thing you bring.
:::

## What AI is

### The family tree

| Term | What it means |
| --- | --- |
| Artificial intelligence (AI) | The broad field of making computers do tasks that usually need human intelligence |
| Machine learning (ML) | AI systems that learn patterns from data rather than following hand-written rules |
| Deep learning | Machine learning using large neural networks with many layers |
| Generative AI | AI that creates new content: text, images, audio, video, code |
| Large language model (LLM) | A generative AI model trained on huge amounts of text to understand and produce language |

### Traditional vs. generative AI

- **Traditional (predictive) AI** classifies or predicts: Is this email spam? What will sales be next month? Which product will this user like?
- **Generative AI** produces new content: write a paragraph, generate an image, draft code, summarize a document.

### What "learning" means

ML models learn by looking at many examples and adjusting internal settings (called **parameters** or **weights**) to get better at a task. They don't "understand" like people do; they find statistical patterns that are often remarkably useful.

## How LLMs work

### Tokens

LLMs work with **tokens**: chunks of text, roughly parts of words. "Unbelievable" might be split into "un," "believ" and "able." Costs and limits are measured in tokens.

### Predicting the next token

At its core, an LLM predicts what token is likely to come next, given everything before it. Repeating that prediction produces sentences, paragraphs and code. Training on vast amounts of text, followed by further training to follow instructions and be helpful, makes these predictions surprisingly capable.

### Context window

The **context window** is how much text the model can consider at once: your prompt, any documents you give it and the conversation so far. Information outside the context isn't available to it unless it's provided or retrieved.

### Training vs. inference

- **Training** is the expensive process of creating the model from data.
- **Inference** is using the trained model to respond to a prompt.

### Key behaviors to understand

| Behavior | What it means | Design implication |
| --- | --- | --- |
| Probabilistic | The same prompt can produce different answers | Allow regeneration; don't assume consistency |
| Hallucination | It can confidently state false information | Verify facts; show sources where possible |
| Knowledge cutoff | Training data ends at a point in time | It may not know recent events unless given them |
| Sensitivity to wording | Small prompt changes can change results | Prompts are design material |
| Bias | It can reflect biases in training data | Test across groups; review outputs |

### Ways AI products add knowledge

- **Retrieval-augmented generation (RAG):** the system searches relevant documents and gives them to the model, so answers are based on specific sources.
- **Fine-tuning:** further training a model on specific examples.
- **Tools and agents:** the model can call tools (search, calculators, other software) and take multi-step actions.

### Multimodal AI

**Multimodal** models work with several types of input and output: text, images, audio, video. Some can look at a screenshot and describe it, or generate an image from a description.

## AI in the design workflow

### Where designers use AI

| Stage | Example uses |
| --- | --- |
| Research | Summarizing articles, drafting interview guides, transcribing sessions, first-pass tagging |
| Ideation | Generating many ideas, alternative approaches, "what if" variations |
| Content | Drafting UX copy, error messages, placeholder content, translations |
| Visual design | Generating images, icons, mood boards, layout variations |
| Prototyping | Turning descriptions or sketches into interactive prototypes or code |
| Review | Checking consistency, finding missing states, spotting accessibility issues |
| Documentation | Drafting specs, summaries, release notes |

### Kinds of AI design tools

- **Chat assistants:** general-purpose helpers for writing, thinking and analysis.
- **AI features inside design tools:** generating layouts, renaming layers, creating variants.
- **Image generators:** creating visuals from text descriptions.
- **AI coding and prototyping tools:** building working interfaces from descriptions.
- **Research tools:** transcription, summarization, clustering of feedback.

### Human in the loop

A healthy workflow keeps people in charge: AI generates options or drafts, and humans decide, edit and take responsibility. Think of AI as a fast, tireless junior collaborator whose work always needs review.

## Prompting

### What a prompt is

A **prompt** is the instruction and context you give an AI model. Better prompts produce better results, mostly because they give the model the information it needs.

### Parts of a good prompt

| Part | Example |
| --- | --- |
| Role or perspective | "Act as a UX writer for a banking app." |
| Task | "Write three error messages for a failed transfer." |
| Context | "Users are often anxious about money; our tone is calm and clear." |
| Constraints | "Under 20 words each. No technical jargon." |
| Format | "Return a table with message and reasoning." |
| Examples | "Here's a message we like: …" |

### Prompting techniques

- **Be specific:** vague prompts get generic answers.
- **Give examples** (few-shot prompting): show what good looks like.
- **Break tasks into steps:** ask for an outline first, then details.
- **Ask for options:** "Give me five different approaches."
- **Ask for reasoning:** "Explain why you chose this."
- **Iterate:** refine the prompt based on what you get.
- **Ask it to critique:** "What's weak about this draft?"

Model providers publish prompting guides for their own models, which are worth reading.[[ref:prompt-guide]]

### Image prompts

For image generation, describe the **subject**, **style**, **composition**, **lighting**, **color palette** and **mood**, and mention what to avoid.

## Evaluating AI output

### Why evaluation matters

AI output often *looks* polished, which makes it easy to trust too quickly. Evaluation is where your expertise matters most.

### What to check

| Check | Questions |
| --- | --- |
| Accuracy | Are facts, numbers and claims correct? |
| Relevance | Does it solve the actual problem and fit the users? |
| Quality | Is the hierarchy, clarity and craft good? |
| Consistency | Does it match the brand, design system and tone? |
| Accessibility | Does it meet contrast, structure and labeling needs? |
| Originality | Is it generic, or specific to this product? |
| Bias | Does it stereotype or exclude anyone? |
| Rights | Can you legally use it (images, text, code)? |

### Directing AI

1. Say specifically what's wrong ("The headline is too long and too formal").
2. Say what to keep.
3. Give a direction or example.
4. Change one thing at a time.
5. Know when to finish it yourself.

### Evaluating AI features

When designing AI features, teams use **evaluations ("evals")**: sets of test inputs plus criteria for good and bad outputs. Instead of checking one demo, they check many cases to see how often the feature succeeds or fails.[[ref:product-talk]]

## Designing AI experiences

When AI is part of the product itself, a few principles help:

- **Set expectations:** explain what the AI can and can't do.
- **Show it's AI:** make it clear when content is generated.
- **Explain where answers come from:** sources, data used, confidence where possible.
- **Keep users in control:** easy to edit, undo, regenerate or turn off.
- **Design for errors:** graceful failure, easy correction, a way to reach a human.
- **Collect feedback:** thumbs up/down, corrections, reports.
- **Earn trust gradually:** start with suggestions before automating actions.

Google's People + AI Research (PAIR) guidebook and Microsoft's Guidelines for Human-AI Interaction are well-known resources for these patterns.

## Ethical and responsible AI

### Core principles

| Principle | What it means |
| --- | --- |
| Fairness | Doesn't disadvantage people based on characteristics like race, gender or age |
| Transparency | People know when AI is used and roughly how it works |
| Privacy | Personal data is protected and used with consent |
| Safety | Harmful outputs are prevented or minimized |
| Accountability | Humans are responsible for AI systems and their effects |
| Human oversight | People can review, override and stop AI actions |
| Inclusivity | Works well for diverse users and languages |

### Common risks

- **Bias:** models trained on biased data can produce biased results (for example in hiring or lending).
- **Misinformation:** confident but false answers.
- **Privacy leaks:** sensitive data shared with tools or exposed in outputs.
- **Intellectual property:** unclear rights for generated content or training data.
- **Over-reliance:** people trusting AI too much and not checking.
- **Manipulation:** using AI to persuade users against their interests.
- **Environmental cost:** training and running large models uses significant energy.

### Frameworks and regulation

- The **NIST AI Risk Management Framework** (US) gives organizations a voluntary structure for managing AI risks.[[ref:nist-ai-600-1]]
- The **EU AI Act** classifies AI systems by risk and sets obligations accordingly (see the 2026 edition for current dates).[[ref:eu-ai-act-omnibus]]
- Many companies publish their own **responsible AI principles.**

### Responsible use in your own work

- Don't paste confidential or personal data into tools you're not authorized to use.
- Check rights and licenses for generated images and content.
- Disclose AI use when it matters (in research, imagery, client work).
- Never present AI-generated "user feedback" as real research.
- Always review and take responsibility for what you ship.

## Emerging design practice

A few areas designers increasingly encounter:

- **Conversational interfaces:** chat and voice experiences.
- **Agents:** AI that performs multi-step tasks on a user's behalf.
- **Generative UI:** interfaces partly created by AI at runtime.
- **Multimodal experiences:** combining voice, image, text and gesture.
- **Spatial computing:** augmented and virtual reality interfaces.

The fundamentals of good design (understanding users, clear interaction, accessibility, trust) apply to all of them.

## Key terms

| Term | Plain meaning |
| --- | --- |
| Machine learning | Systems that learn patterns from data |
| Generative AI | AI that creates new content |
| LLM | A large model trained on text to generate language |
| Token | A chunk of text the model processes |
| Context window | How much text a model can consider at once |
| Hallucination | Confident but false output |
| RAG | Giving the model retrieved documents to answer from |
| Agent | AI that takes multi-step actions with tools |
| Prompt | The instructions and context given to a model |
| Few-shot prompting | Including examples in a prompt |
| Eval | A structured test of AI output quality |
| Human in the loop | People review and control AI outputs |
| Responsible AI | Fair, transparent, private, safe, accountable AI |

## Quick check

:::check Knowledge check 1
Why can the same prompt give different answers?
---
LLMs are probabilistic: they generate text by predicting likely next tokens, with some randomness. Design for this by allowing regeneration and not assuming identical output.
:::

:::check Knowledge check 2
What is a hallucination, and how should a product handle the risk?
---
A confident but false output. Reduce the risk by grounding answers in sources (for example RAG), showing citations, encouraging verification and making it easy to report or correct errors.
:::

:::check Knowledge check 3
Name four parts of a strong prompt.
---
Any four of: role, task, context, constraints, output format and examples.
:::

## Further reading

:::reading Sources to open next
- A model provider's official prompting guide.[[ref:prompt-guide]]
- NIST, *Generative AI Profile* (AI 600-1).[[ref:nist-ai-600-1]]
- Product Talk on AI evals.[[ref:product-talk]]
- Google PAIR, *People + AI Guidebook*, and Microsoft, *Guidelines for Human-AI Interaction* (online guides).
:::
