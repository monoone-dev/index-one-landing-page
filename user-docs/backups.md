---
title: Backups and Health Check
description: Back up everything on this Mac as plain Markdown, restore it in IndexOne on this Mac or a new one, and check that every part of IndexOne works.
keywords: backup, backups, restore, restorable in indexone, markdown, front matter, index-one.backup, new mac, health check, permissions, models, encrypted database
---

Settings › Backups keeps a complete, readable copy of your data as plain Markdown files. Settings › Health Check shows at a glance whether everything IndexOne needs is working.

## Back up everything

Choose **Create backup** in Settings › Backups and pick a folder. IndexOne saves an `index-one.backup` folder inside it. Each backup is a new dated folder, so earlier backups are never overwritten.

A backup holds:

- **Meetings**: every meeting note and its full transcript.
- **Notes**: your notes and documents, in their folder structure.
- **Images**: every image, linked from the notes that use it.

Everything is written as plain `.md` files, with the note's YAML front matter and `[[wikilinks]]` between notes, so you can open it in any Markdown app.

The trash, tasks and items shared with you are not included. Locked folders are always left out, even when you have unlocked them for this session.

IndexOne shows progress while it runs, then the number of files and where they were saved, with **Show in Finder**. **Your backups** lists your earlier backups.

### Restorable in IndexOne

Leave **Restorable in IndexOne** on to make the backup restorable. It adds an `index-one-backup.json` file that records your Spaces, projects, folders, notes and meetings with their transcripts. Without it, the backup has only the `.md` files: readable in any app, but importing them brings the notes back without your workspace structure or meetings.

## Restore a backup

Open Settings › Imports and choose **Restore an IndexOne backup**. Pick the `index-one.backup` folder (the newest backup inside it is used) or one dated folder in it. You see what will happen before anything is written.

- A backup made with **Restorable in IndexOne** on rebuilds your exact Spaces, projects, folders and meetings, with every transcript in place. Folders that already exist here with the same name are reused, so nothing is duplicated.
- Any other backup comes back inside a new **Restored from backup** folder: notes go into their workspace folders, meeting notes and transcripts into a **Meetings** folder, and images are re-attached. Nothing you already have is overwritten.

See [Imports and export](/docs/imports-and-export/) for the other import sources.

### Moving to a new Mac

Your library is encrypted with a key kept on your Mac. To move to a new Mac, create a backup on the old one with **Restorable in IndexOne** on, then restore it on the new Mac from Settings › Imports. Keep the old Mac's library until you have checked the new one.

If IndexOne finds an encrypted library whose key it cannot read, it does not create a new key, so no meeting becomes unreadable, and it explains these steps.

## Health Check

Settings › Health Check runs when you open it, and again when you choose **Run again**. A summary at the top says whether everything important is connected, something needs your attention, or something important is not working. The checks are grouped as **Needs attention**, **Working** and **Optional**.

It checks:

- the encrypted database and its integrity
- the Ivy engine keys
- the AI provider for notes
- the connection for other apps (the [local MCP server](/docs/mcp/))
- your account sign-in
- microphone access, screen and system audio recording, and calendar access
- the speech-to-text model, the on-device Ivy model, the semantic search model and the name redaction model

Installed plugins can add their own checks; the Screen recording plugin checks its permission.

Most rows offer a fix. A missing permission has **Allow** or **Open System Settings**, and a missing model or setting has a button that opens the right Settings section. If the database check finds a problem, it asks you to make a backup before anything else changes.
