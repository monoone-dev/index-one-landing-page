---
title: Welcome to IndexOne
description: What IndexOne is, where your notes live (On this Mac, Personal, organizations), what stays local, and the Mac you need to run it.
keywords: welcome, overview, getting started, local-first, on this mac, personal, organizations, system requirements, apple silicon
---

IndexOne records your meetings, transcribes them and writes a clean note from each one. Out of the box this all happens on your Mac, and your notes can leave the app as plain Markdown whenever you want them.


For the forthcoming cloud offer, see [Plans and billing](/docs/plans-and-billing/). Standard cloud content is stored and processed on servers readable by the operator, not end-to-end encrypted. Local Mac locks do not change that boundary. Pattern masking is not complete anonymization.

## Three places your work lives

The space switcher at the top of the sidebar picks where you work. There are three kinds of place, and each one says in a short line where its notes live.

| Place | Who sees it | Where it is stored |
| --- | --- | --- |
| **On this Mac** | Only you | In an encrypted library on this Mac. No account needed. |
| **Personal** | Just you | In your IndexOne account, with an encrypted copy on this Mac. |
| An **organization** | The members of each space | In the organization in your IndexOne account, with an encrypted copy on this Mac. |

On this Mac is where you start. It works without an account and without a network connection. Personal and organizations appear after you sign in to an IndexOne account. Their content is stored in the account, so other people in an organization, and IndexOne on the web, see the same spaces you do. The copy on your Mac lets them open offline too. See [Organizations and Personal](/docs/organizations/).

## Local-first

- **On this Mac stays on this Mac.** Recording and transcription run on your Mac. By default Ivy, the AI assistant, writes notes and answers with a model on your Mac too (Ivy on this Mac).
- **Cloud AI is a choice.** Each place has one AI setting in Settings › AI Models. Claude Code, Codex and, for Personal and organizations, Ivy on the web are opt-in. Before text goes to Claude Code or Codex, IndexOne removes emails, phone numbers and card numbers, and can mask names. See [AI models](/docs/ai-models/).
- **One store.** On this Mac, an encrypted database holds your library. The app and the local MCP server read the same store, so there is never a second copy to drift apart.
- **Yours to keep.** A meeting can be copied or saved as Markdown or a PDF, and a backup writes your notes and transcripts as plain `.md` files.

> [!NOTE]
> Some things do use the network. IndexOne checks GitHub for a new version at launch, sends one small usage message a day (no notes, recordings or names; anonymous only while you are signed out), and both can be turned off in Settings › Privacy & Security. Personal and organization content lives in your IndexOne account. Plugins and Ivy skills need you to be signed in, and a feedback report you send goes to the IndexOne team. [Data flow](/docs/data-flow/) lists everything that leaves your Mac.

## System requirements

- A Mac with Apple Silicon (M1 or later). Intel Macs are not supported from 3.19.
- macOS 13.4 or later.
- Disk space for the speech model you choose and for your recordings.

## Where to go next

- [Your first recording](/docs/first-recording/): from launch to a finished note.
- [Workspaces and folders](/docs/workspaces/): how On this Mac is organized.
- [Organizations and Personal](/docs/organizations/): sign in, share work with a team.
- [Ivy](/docs/ivy/): ask questions about your meetings and notes.
- [AI models](/docs/ai-models/): choose who writes your transcripts, notes and answers.
- [Data flow](/docs/data-flow/): what stays on your Mac and what leaves it.
