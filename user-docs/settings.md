---
title: A tour of Settings
description: Every section of IndexOne's Settings in the order the sidebar shows them, with what each one holds and where to read more about it.
keywords: settings, preferences, appearance, window transparency, surface, audio, transcription, storage, notes, ai models, ivy, connectors, account, privacy, imports, backups, health check, developer, feedback, about
---

Settings opens over the app, with its sections in a sidebar on the left. A **Search** box at the top of the sidebar finds any setting by name. This page walks through the sections in the order the sidebar shows them.

## General and Appearance

- **General**: **Run setup again** reopens the first-run setup. Your existing settings are kept and prefilled.
- **Appearance**: the **App language** (System by default; changing it reloads the window), **Light & dark** (Light, Dark or System), **Window transparency**, the **Accent color** (Warm orange by default, or Blue, Teal, Green, Orange or Pink) and where the note editor's **Formatting toolbar** sits (**Top bar** or **Dock**).

IndexOne has one look, called Surface, on the Mac and on the web; the older Studio, Paper and Minimalist looks were removed in [3.16](/changelog/#v3.16.0). The Mac window is see-through over the sidebar. Window transparency sets how much of your desktop shows through the frosted glass: 0% is the most frosted. When "Reduce transparency" is on in macOS, the window turns opaque.

## Capture

- **Audio & Capture**: the microphone, **Capture system audio**, **Smart speech detection**, **Keep high-fidelity masters**, **Split "Others" into individual speakers**, **Recognise speakers across meetings**, **Remove speaker echo from recordings** and the **Voice trigger**. See [Recording](/docs/recording/).
- **Transcription**: the transcription language (Auto-detect or a fixed language), the Whisper model, which runs on this Mac and is downloaded once, and an optional **Custom model file**.
- **Storage**: how much disk your recordings use on this Mac, a storage limit, automatic deletion of old recordings, **Free up space now** and recordings to recover. See [Storage](/docs/storage/).

## Notes & AI

- **Notes**: how meeting notes are written and filed: the **Summary style** and your own templates, how **Your typed notes** are used, the notes language, a **Workspace glossary**, **Flag potentially unsupported claims** and **Automatic filing**. See [Notes](/docs/notes/).
- **AI Models**: who makes transcripts, notes and answers in each workspace, the Ivy on this Mac download and the Local AI server. See [AI in each workspace](/docs/ai-models/) and [Local AI server](/docs/local-ai-server/).
- **Ivy**: what your assistant does and what it remembers: the in-meeting voice assistant and proactive hints, the note assistant, cross-meeting memory, the search index, the weekly vault audit and how long on-device Ivy stays loaded. See [Ivy](/docs/ivy/).
- **Connectors**: tools Ivy can reach (web search, Jira, Slack, Notion and ClickUp, each off until you allow it), the **AI connections** for Claude Code and Codex, and the **Local server for Claude**. See [What Ivy can do](/docs/ivy-tools/) and [The local MCP server](/docs/mcp/).

## Plugins

This group appears only when a plugin with settings is on in the place you are working in, such as **Screen recording** or **Languages**. Each plugin's settings are a section here; installing and removing plugins happens on the Plugins screen. See [Plugins](/docs/plugins/).

## Organization

- **Account**: signed out, this is the sign-in form itself. Signed in, it shows the account you are signed in as, with **Sign out**. It also lists any **Old shared links** from the retired sharing, so you can stop them.
- **Organization**: appears when an organization is chosen in the space switcher. It has tabs for General (name, AI processing, access), Members, Spaces & access and Storage, plus a tab for each plugin installed in the organization. See [Organizations](/docs/organizations/).

## Privacy & Data

- **Cloud storage**: appears while you are signed in. Everything you have recorded or uploaded to your IndexOne account, in every space and organization. See [Storage](/docs/storage/).
- **Privacy & Security**: the **App lock**, what is removed before text leaves (including name masking), cloud processing consent, images in notes, locked folders, the update check and **Send anonymous usage statistics**. See [App lock](/docs/app-lock/), [Redaction](/docs/redaction/) and [What leaves your Mac](/docs/data-flow/).
- **Imports**: bring notes in from Notion, Obsidian, Markdown files and Apple Notes, restore an IndexOne backup, and move folders to and from IndexOne on the web. See [Imports and export](/docs/imports-and-export/).
- **Backups**: save everything as plain Markdown, restorable in IndexOne. See [Backups and Health Check](/docs/backups/).
- **Health Check**: whether everything IndexOne needs is working. See [Backups and Health Check](/docs/backups/#health-check).
- **Developer**: developer mode and the app log. See [Developer mode and diagnostics](/docs/diagnostics/).

## Help

- **Feedback**: the bugs you reported and ideas you sent, with their status and the team's replies. See [Send feedback](/docs/feedback/).
- **About**: the version you run, **Check for updates** and installing an update, and the open-source models IndexOne uses. See [Install and updates](/docs/install-and-updates/).
