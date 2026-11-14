---
title: Developer mode and diagnostics
description: Turn on developer mode to read IndexOne's app log, filter it, and save a diagnostics bundle when you need to look into a problem.
keywords: developer mode, logs, app log, diagnostics bundle, debug, crash, troubleshooting, retention, previous session, reveal in finder
---

Developer mode is off by default. Turn it on when something went wrong and you want to see what the app actually did. It changes nothing about how IndexOne records, transcribes or writes notes.

## Turn on developer mode

In Settings › Developer, turn on **Developer mode**. A **Developer mode** group with the app log appears in the sidebar. You can also choose **Open logs** in the **Logs** row of the same page.

## The app log

The log is a readable list of what IndexOne did while it ran: stages, counts and failures. It holds IDs and stage names, never your note text, transcript text, titles or keys.

- Switch between the **Current** session and the **Previous** one. IndexOne keeps the previous session's log so a crash can be read after the restart, including the last words of a run that crashed.
- Filter by level (**All**, **Errors**, **Warnings**, **Info**, **Debug**) or by message text.
- Click a row to see the whole entry, with its time, level, target, message and raw text, and **Copy entry**.
- Use **Auto-refresh**, **Refresh**, **Copy**, **Reveal in Finder** or **Clear**.

## How long the log is kept

The log lives only on this Mac. The log viewer shows the last 24 hours; older entries stay in the log file only. The file itself drops entries older than seven days and never grows past 16 MB, whichever limit comes first, so a long or noisy session cannot fill the disk.

## The diagnostics bundle

**Save diagnostics bundle** on the log page writes one text file next to the logs; **Reveal in Finder** opens that folder. It contains:

- the app version, the operating system and the chip architecture
- the log settings
- the file names of the speech models on disk
- the log entries of the current and the previous session

It reads only logs and model file names, never your notes, recordings or transcripts. It can still contain file paths from your Mac, and those can include your macOS user name.

> [!WARNING]
> Do not attach the diagnostics bundle to a public issue or discussion. Describe the problem there, or use [Send feedback](/docs/feedback/). If the team needs the bundle, it will ask for it privately.

The file stays on your Mac. It leaves only if you choose to send it.
