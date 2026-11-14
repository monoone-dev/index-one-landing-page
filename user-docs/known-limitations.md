---
title: Known limitations
description: What IndexOne 3.19 does not do or needs before it works, from Mac and macOS requirements to recording length, memory, accounts and privacy controls.
keywords: known limitations, requirements, apple silicon, intel, macos, recording limit, memory, offline, name masking, limits
---

This page lists the limits of IndexOne 3.19 that you may run into, stated plainly. Each one is true of the shipped app.

## Mac and macOS

- IndexOne runs on Apple Silicon Macs (M1 or later) with macOS 13.4 or later. Intel Macs are no longer supported as of 3.19. See [Install and updates](/docs/install-and-updates/).
- Recording your screen needs macOS 14 or later and the Screen recording plugin. On older systems the option is hidden. See [Screen recording](/docs/screen-recording/).

## Recording

- A recording processed on this Mac stops at 4 hours. IndexOne warns you before it reaches the limit.
- A recording processed on IndexOne's servers, with Ivy on the web, stops at 2 hours.
- When the storage of your IndexOne account is full, new uploads and recordings to your account pause until you free up space. See [Storage](/docs/storage/).
- If an organization turns off processing on IndexOne's servers, a recording saved there gets no transcript or note from the server until an owner or admin turns it back on.

## Ivy on this Mac

- Each Ivy model needs a minimum amount of memory. If your Mac has less than the model needs, Settings › AI Models says "This Mac doesn't have enough memory for Ivy". IndexOne picks a model that fits your Mac's memory. See [AI models](/docs/ai-models/).
- Models are downloaded once before they can run. Until then, Ivy on this Mac is not available.

## Accounts and the internet

- Personal and organization spaces need you to sign in, and a connection the first time they load. After that, their copy on this Mac opens offline, and edits are sent when you are back online.
- Ivy on the web needs a connection.
- Browsing and installing plugins and Ivy skills needs your IndexOne account. Installed plugins keep working offline.

## Privacy controls

- Name masking is off until you download its model, and it covers names in Polish and English only. It cannot run during a recording; see [Redaction and cloud processing](/docs/redaction/).
- Faces, handwriting and anything else visible in an image cannot be masked. Images leave the Mac only if you turn on **Send note images to the AI model**.
- Once cloud processing is allowed, Settings has no switch to take it back. To stop, choose Ivy on this Mac for each workspace.
- App lock does not stop recording or connected apps. An AI app connected through the local MCP server can still read the workspaces you allowed while the app is locked. See [App lock and Touch ID](/docs/app-lock/).
- Locks and protection are available in On this Mac only, not in Personal or organization spaces.

## Backups and moving to a new Mac

- Backups leave out locked folders, even when they are unlocked for this session. Trash, tasks and items shared with you are not included either. Everything else is saved unencrypted in the folder you choose. See [Backups](/docs/backups/).
- The key that encrypts your library stays in your previous Mac's Keychain. To move to a new Mac, create a backup with **Restorable in IndexOne** turned on, then restore it on the new Mac from Settings › Imports.
