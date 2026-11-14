---
title: The Screen recording plugin
description: Record your screen with a meeting, pick a screen, window or app, play it back in sync with the transcript, and put key frames in the note.
keywords: screen recording, plugin, voice and screen, source picker, hide indexone, recording tab, player, save video, screens in ai notes, frames, resolution, frame rate, macos 14
---

The free Screen recording plugin records your screen together with your voice. The video plays back in sync with the transcript, and a few key frames can go into the note. Until you install the plugin, the screen recording controls are hidden.

## Install it

1. Sign in to your IndexOne account. Plugins need an account; once installed, they keep working when your Mac is offline.
2. Open **Plugins** in the left rail and choose **Screen recording**.
3. Choose **Install** and pick where it should work: On this Mac, Personal or an organization. The plugin works only in the places you install it, and each place has its own settings. Only an organization's admins can install it for that organization.

See [Plugins](/docs/plugins/) for how plugins work in general.

> [!NOTE]
> Recording your screen on the Mac needs macOS 14 or later. On macOS 13 the option shows "Voice + screen needs macOS 14 or later." The first time, macOS asks you to allow IndexOne under Screen & System Audio Recording; the source picker has a button that opens the right place in System Settings.

## Voice only or voice + screen

On the Record screen and the recording bar, choose what to record:

- **Voice**: your microphone and system audio, as usual.
- **Voice + screen**: the same, plus the screen.

The default for new recordings is set in the plugin's settings.

## Choose a source

With Voice + screen, a source picker opens. Its tabs list your screens (**Entire screen**), single windows (**Window**) from every desktop, and apps (**App**), with live thumbnails and a search field. It remembers the last source you used.

A window that is minimized, hidden or on another desktop is marked as such. If macOS can't capture it, IndexOne records your voice only and tells you.

While you record you can:

- **Hide screen**: stop recording the picture for a while. Your voice keeps recording.
- **Change source**: switch to another screen, window or app. Your voice keeps recording without a break.

### Hide IndexOne from recordings

When you record an entire screen, **Hide IndexOne from recordings** (in the picker's Entire screen tab and in the plugin's settings) decides whether the main IndexOne window appears in the video. It is on by default. Turn it off if you want to record IndexOne itself. The recording bar and other IndexOne overlays are never recorded. The switch takes effect at once, also during a recording.

## Play it back

A meeting with a screen recording has a **Recording** tab. The player plays the screen video in sync with the audio, and the timeline has a **Screen** lane: click it to jump to a moment. Hatched parts of the lane show where the screen was hidden and only your voice was recorded.

You can dock the player, shrink it to a small mini player, show it in picture in picture or full screen, or close it.

To keep a copy, choose **Save video…** in the meeting's More menu. It saves the screen video together with the meeting audio.

## Screens in your notes

When a meeting has a screen recording, IndexOne picks the moments where the screen mattered and adds a few frames from them to the note as images.

The switch is **Screens in AI notes** in the plugin's settings, under **All your devices**. It is on by default and is saved to your account.

> [!NOTE]
> On your Mac, the text in each frame is read and used as text. The pictures themselves go to the AI only if you choose **Allow sending images**, and only Claude Code receives them, up to 36 frames per meeting note. Codex and Ivy on this Mac get the recognized text. Faces, handwriting and anything else visible in a picture can't be masked the way text is. Every send is listed under What leaves this Mac in Analytics. See [Redaction](/docs/redaction/).

## Settings

Open Settings and choose **Screen recording** under Plugins. The **This Mac** settings stay on this device:

| Setting | Options |
| --- | --- |
| Default mode | Voice or Voice + screen |
| Quality | 1080p or 720p, each with its size per hour |
| Frame rate | 15 fps or 30 fps, each with its size per hour |
| Hide IndexOne from recordings | On or off |

The page also shows about how many hours of screen fit in your free space, and whether macOS allows IndexOne to record your screen.

## Storage and locked folders

Screen videos stay on your Mac like audio. In a locked folder they are encrypted together with the timeline of window titles.

Screen video counts toward the storage limit in Settings › Storage. When IndexOne frees space there, it removes the oldest recordings' screen video first and their audio after that. Notes and transcripts are kept, and the meeting says the video was removed to save space. See [Storage](/docs/storage/).
