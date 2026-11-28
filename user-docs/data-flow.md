---
title: What leaves your Mac
description: What IndexOne keeps on your Mac, the three small messages it sends by default, and what leaves only when you choose it, with how to turn each one off.
keywords: privacy, data flow, network, update check, usage statistics, telemetry, sign in, cloud, offline, what leaves this mac
---

IndexOne is built to work on your Mac first. This page lists every kind of network traffic in IndexOne 3.19: what never leaves, the three small messages sent by default, and everything that leaves only after you choose it.


For the forthcoming cloud offer, see [Plans and billing](/docs/plans-and-billing/). Standard cloud content is stored and processed on servers readable by the operator, not end-to-end encrypted. Local Mac locks do not change that boundary. Pattern masking is not complete anonymization.

## Stays on this Mac

As long as you work in **On this Mac** with **Ivy on this Mac** as the AI, your content does not leave the Mac:

- The audio of your recordings, and screen video if you record your screen.
- Transcripts. Whisper transcribes on this Mac.
- Notes, meetings, tasks, reminders and the people and topics IndexOne finds in them.
- Answers from Ivy on this Mac, and the search index behind Ask.
- The keys that encrypt your library and your locked folders.

The local MCP server that lets AI apps on your Mac read IndexOne also runs on this Mac. See [MCP](/docs/mcp/).

## Leaves by default

Three small messages are sent without you doing anything. None of them carries meetings, notes, transcripts or recordings, and you can turn off the update check and the usage statistics. The version check stops with the update check, unless an account has ever been signed in on this Mac.

| What | Where it goes | What it sends | How to turn it off |
| --- | --- | --- | --- |
| Update check | GitHub, where IndexOne is published | A request for the latest version of IndexOne. No meetings, notes or account details | Settings › Privacy & Security › Update check › **Check for updates on launch** |
| Version check | IndexOne's server | At launch, then every hour: a question whether your version is still supported, with the app version. No meetings, notes or account details | Runs while **Check for updates on launch** is on. If an account has ever been signed in on this Mac, it keeps running with the switch off |
| Usage statistics | IndexOne's server | Once a day: a random install ID, the app version, the macOS version, the processor type, the system language and whether you are signed in | Settings › Privacy & Security › Usage statistics › **Send anonymous usage statistics** |

The update check runs once at launch. The version check runs at launch and then every hour, and asks IndexOne's server only whether the version you are running is still supported. With the update check off, **Check for updates** in Settings › About still works, because pressing it is you asking. When you agree to an update, IndexOne downloads it from the public release page on GitHub and checks its signature before it installs it. See [Install and updates](/docs/install-and-updates/).

The usage statistics are sent for the first time shortly after launch, then at most once a day. When the switch is off, nothing is sent.

> [!NOTE]
> If you are signed in to your IndexOne account, the daily usage message is sent with your account's sign-in, like other requests to your account. Turn the switch off if you do not want it sent.

## Leaves only when you choose it

Everything below happens only after you turn it on, sign in or press a button.

| What you choose | What leaves your Mac | Where it goes |
| --- | --- | --- |
| Signing in | Your sign-in details, or a sign-in with Apple, Google or GitHub | IndexOne's server |
| Saving to Personal or an organization space | The meeting or note, with its recording, transcript, note and files | Your IndexOne account |
| Ivy on the web | Recordings and questions, for the transcript, note and answers | IndexOne's servers |
| Claude Code or Codex | Transcripts, notes and questions, with personal details removed first | Anthropic (Claude Code) or OpenAI (Codex), through the program on your Mac |
| Local AI server on another machine | Meeting text, with personal details removed first | Only the address you entered and confirmed |
| Note images | Up to four images per question, or up to 36 frames of a screen recording per note | Claude Code |
| Connectors | Your search query, with personal details removed first | Brave, Jira, Slack, Notion or ClickUp |
| Plugins and Ivy skills | Your request to browse, install or turn them on | Your IndexOne account |
| Feedback | Your report, and the screenshot, images and technical details you leave attached | IndexOne's server |
| Model downloads | A download request. No meeting content | Hugging Face |

### Personal and organization spaces

The space switcher at the top of the sidebar has **On this Mac**, **Personal** and your organizations. On this Mac lives only on your Mac. Personal and organization spaces live in your IndexOne account, so their content is stored on IndexOne's servers. See [Organizations](/docs/organizations/).

Personal and every organization you belong to also keep an encrypted copy on this Mac, so they open without a network connection. Edits made offline are sent when you are back online. To take a recording out of its organization, choose **Move to On this Mac** in the meeting's menu; it then stays only on this Mac.

### Where cloud spaces run

We host IndexOne's servers and database in the European Union (AWS, Sweden). In the default cloud Ivy mode, the text needed for a task goes to Anthropic, which may process it outside the EEA. See the [Privacy Policy](https://app.index-one.io/legal/en/privacy-policy.html) for details.

### Cloud AI

Each workspace has one AI setting in Settings › AI Models › AI in this workspace. **Ivy on this Mac**, and a Local AI server on this Mac, keep everything here. These choices send text off the Mac:

- **Ivy on the web** (Personal and organizations): recordings go to IndexOne's servers, which make the transcript, the note and the answers.
- **Claude Code** and **Codex**: recordings are transcribed on this Mac. The transcript, notes and questions go to Anthropic or OpenAI through the `claude` or `codex` program on your Mac. Emails, card and bank account numbers and phone numbers are removed first, and names too if you turn on name masking.

Claude Code and Codex stay off until you allow cloud processing once, in Settings › Privacy & Security › Cloud processing. Asking Ivy on the web needs the same permission. See [Redaction and cloud processing](/docs/redaction/) for what is removed and how to see what was sent.

### Local AI server

A Local AI server at `localhost` on this Mac keeps everything here. A server at any other address is used only after you confirm that exact address, gets the same redaction as a cloud provider, and IndexOne contacts only the address you entered. See [Local AI server](/docs/local-ai-server/).

### Connectors

Web search, Jira, Slack, Notion and ClickUp in Settings › Connectors are off by default. Each one asks for a one-time consent before it sends anything, and sends only your search query, redacted first, never your notes or transcripts. Their keys and tokens stay in your Mac's Keychain.

### Plugins and Ivy skills

Browsing, installing and turning on plugins and Ivy skills needs your IndexOne account. Once installed, plugins keep working when your Mac is offline. See [Plugins](/docs/plugins/) and [Ivy skills](/docs/ivy-skills/).

### Feedback

**Send feedback** sends your title and text to the IndexOne team. Your notes, recordings and transcripts are never attached. A screenshot of the window, images you add and technical details (the app and system version, the screen you were on, the language and any error code) are sent only if you leave them in the report. A screenshot shows whatever is in the window, so check it before you send. See [Feedback](/docs/feedback/).

### Model downloads

Whisper, Ivy, speaker detection, semantic search and name-masking models are downloaded from Hugging Face when you set them up, or the first time a feature needs one. A download sends no meeting content.

## See what was sent

Analytics has a **What leaves this Mac** panel. For the last 7, 30 or 90 days it shows the cloud calls, the tokens sent, what was removed before sending, and each recent call with its destination and model. See [Graph and analytics](/docs/graph-and-analytics/).
