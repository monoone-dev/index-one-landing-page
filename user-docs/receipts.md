---
title: Receipts
description: Receipts link claims in a meeting note to their likely source in the transcript, with the time and, when available, a speaker label and audio clarity.
keywords: receipts, citations, sources, claims, audio, speaker, timestamp, confidence, grounded, unsupported claims, trust
---

A note is only useful if you can trust it. Receipts let you check: claims in a meeting note that can be traced to a specific part of the transcript get a receipt. On Mac, when the recording is available, select an entry in the **Receipts** card below the note. IndexOne opens the **Audio** tab and highlights the likely passage in the transcript. A speaker label appears when available.

![A meeting note with a Receipts list of claims, with recording times and visible speaker labels](shot:detail-receipts "Receipts with recording times and visible speaker labels")

## Where receipts appear

Below a meeting's note, the **Receipts** card lists every claim IndexOne could match to the audio, with a count. Each row shows:

- the claim, shortened to one line,
- a speaker label, such as **Me** or **Others**, when available,
- the time in the recording.

On Mac, when the recording is available, select an entry in the **Receipts** card below the note. IndexOne opens the **Audio** tab and highlights the likely passage in the transcript. A speaker label appears when available. For a meeting with a screen recording, that tab is called **Recording**.

## Reading a receipt

Hover over a receipt to see its details, for example "Likely source · 3:34 · Others". When IndexOne knows how well the speech was recognized there, it adds **audio: clear** or **audio: unclear**. An unclear source is worth a listen before you rely on the claim.

A receipt points to the *likely* source: the part of the transcript that best matches the claim. A line in the note with no receipt was not matched to a single moment, for example because it sums up several parts of the meeting. That is a signal to check it, not proof that it is wrong.

## Receipts elsewhere

- **People and projects.** A person's or project's details in the graph include a change history. Each entry links to its source meeting. See [Graph, people and analytics](/docs/graph-and-analytics/).
- **Ask Ivy.** Answers list their **Sources**, the meetings and notes they came from. See [Meet Ivy](/docs/ivy/).

## Flag unsupported claims

For a second check, turn on **Flag potentially unsupported claims** in Settings › Notes. After writing a note, IndexOne compares it with the meeting's transcript and marks lines that may need review. The check runs on your Mac and adds no cloud request. Its thresholds are conservative and not yet calibrated, so a marker is not proof that a claim is true or false.

## Receipts and locked folders

Receipts follow the meeting they belong to. When a meeting is in a locked folder, its note, transcript and audio, and so its receipts, stay hidden until you unlock the folder. See [The lock model](/docs/lock-model/).
