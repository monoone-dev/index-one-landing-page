---
title: Install and update
description: Download and verify the IndexOne DMG, install it, keep it current with in-app updates, and move your library to a new Mac without losing anything.
keywords: install, download, dmg, sha256, checksum, update, software update, intel, apple silicon, new mac, migrate, restore, murmur
---

IndexOne comes as a signed DMG and, from 3.8 on, updates itself from inside the app. This page covers the first install, updates, and moving to a new Mac.

## Download

Download the latest DMG and `SHA256SUMS.txt` from the [latest release](https://github.com/monoone-dev/index-one-landing-page/releases/latest). The DMG is signed and notarized by Apple.

IndexOne 3.19 runs on Apple Silicon Macs (M1 or later) with macOS 13.4 or later.

### Verify the download

Put the DMG and `SHA256SUMS.txt` in the same folder, open Terminal in that folder and run:

```
shasum -a 256 -c SHA256SUMS.txt
```

The line for the DMG must end in `OK`. If it doesn't, delete the file and download it again.

## Install

1. Open the DMG. It opens as an installer window.
2. Drag IndexOne onto Applications.
3. Open IndexOne from Applications.

The first launch shows a short setup. You pick the speech model and the AI for On this Mac, and can turn on Ivy's on-device models. [Your first recording](/docs/first-recording/) walks through it.

## Updates

From 3.8, IndexOne updates inside the app. You no longer download each release by hand.

- **Settings › About › Software update** has **Check for updates**. When a new version exists it says so, with a link to its release notes.
- **Download** fetches the update and checks its signature. When it shows "Signature verified. Ready to install.", choose **Install update**.
- When the update is installed, choose **Restart now**, or restart later.

Finish any recording or processing first. IndexOne does not install or restart while one is running.

IndexOne also asks GitHub once at launch whether a newer version exists. The request sends no notes, meetings or anything you wrote, but it does name the app and the version you run. Turn it off with **Check for updates on launch** in Settings › Privacy & Security. **Check for updates** in Settings › About keeps working either way.

> [!NOTE]
> If you run a version older than 3.8, download the current DMG by hand once. Later versions arrive in the app.

### Intel Macs

From 3.19, IndexOne runs only on Apple Silicon (M1 or later). Intel Macs are no longer supported. Version 3.18.0 was the last release that ran on Intel Macs, and the in-app update offers new versions only on a supported Mac.

### Updating from Murmur

IndexOne was called Murmur before 3.0. If you still have Murmur.app, IndexOne installs next to it and opens the same library: notes, recordings, folders, settings and Keychain keys stay where they are. The two apps can't run at the same time. Once IndexOne has started, you can delete Murmur.app.

An older library may also need a one-time **Ivy engine migration**. IndexOne shows a notice when it does, and the migration is also in Settings › About.

## Moving to a new Mac

What moves depends on where your work lives.

- **Personal and organizations** live in your IndexOne account. Sign in on the new Mac and they open there, with a fresh copy on that Mac.
- **On this Mac** lives only on your previous Mac. Move it with a restorable backup.

To move On this Mac:

1. On your previous Mac, open Settings › Backups and create a backup with **Restorable in IndexOne** turned on.
2. Copy the `index-one.backup` folder to the new Mac.
3. On the new Mac, open Settings › Imports › IndexOne backup and choose that folder. A restorable backup rebuilds your spaces, projects, folders, notes and meetings as they were.
4. Keep your previous Mac's library until you have checked everything arrived.

> [!WARNING]
> A backup leaves out locked folders, the Trash, tasks and items shared with you. Remove a folder's lock before the backup if you want it to move. See [Backups](/docs/backups/).

If IndexOne finds an encrypted library whose key it can't read, which usually happens after copying a library to a new Mac, it refuses to create a new key, so no meeting becomes unreadable. Restore from a backup as above instead.
