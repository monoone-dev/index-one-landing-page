---
title: Organizations and Personal
description: Sign in to use Personal and organizations: create or join one, invite people, work in spaces and folders, record into a space, and work offline.
keywords: organizations, personal, account, sign in, invite, roles, spaces, folders, record to organization, sending, not sent yet, offline, conflict copy, ai processing, shared notes
---

Personal and organizations are the places that live in your IndexOne account. Personal is just for you; an organization is shared with a team. Both are the same ones you see on IndexOne on the web, and both open on your Mac with the same screens as On this Mac.


For the forthcoming cloud offer, see [Plans and billing](/docs/plans-and-billing/). Standard cloud content is stored and processed on servers readable by the operator, not end-to-end encrypted. Local Mac locks do not change that boundary. Pattern masking is not complete anonymization.

## Signing in

On this Mac needs no account. To use Personal and organizations, sign in to an IndexOne account in Settings › Account, or choose **Sign in to open your workspaces** in the space switcher. Anyone can create an account with an email address.

Signed in, Settings › Account shows the account with **Sign out**. Your notes in On this Mac stay on this Mac when you sign out.

## Personal and organizations

After you sign in, the space switcher lists **On this Mac**, **Personal** and every organization you belong to.

- **Personal** ("Just you") is the personal space of your account. Only you see it.
- An **organization** holds **spaces**. Each space is open to everyone in the organization or only to the people you add. Members see the spaces they can open, the same ones as on the web.

Content in Personal and in organizations is stored in your IndexOne account, with an encrypted copy on your Mac. Who makes transcripts, notes and answers there is a separate choice; see [AI processing](#ai-processing) below.

## Create or join an organization

Open the space switcher:

- **New organization** creates a company organization. Your Personal space stays separate.
- **Join organization** accepts an invitation sent to the address you signed in with. Paste the invitation email, or enter its organization ID and invitation ID.

## Members, roles and invitations

Owners and admins invite people in Settings › Organization › **Members**: enter an email, choose a role and, under **Space access**, the spaces the person can open, then **Send invitation**.

| Role | What it means |
| --- | --- |
| Owner | Manages the organization, its people and its owners. |
| Admin | Manages people and spaces. |
| Member | Sees every space open to the organization. |
| Guest | Sees only the spaces you choose. A guest needs at least one space. |

Owners can give every role; admins can invite members and guests. Inside a space, a person is a **Viewer**, **Editor** or **Owner**. Organization roles do not bypass a space that is only for the people you add. When someone leaves, the organization keeps every space and note.

## Spaces and folders

An organization's spaces appear in the sidebar tree. Since 3.18, a space can hold folders, and folders inside folders, like the folders on this Mac:

- Create, rename, move and delete folders from the space's tree.
- Create a note straight in a folder, or move a note to another folder in the same space.
- If you can only view a space, you see its folders but can't change them.

Owners and admins create spaces with **+** next to the sidebar tree, or in Settings › Organization › **Spaces & access**. There, **Who sees it** makes a space open to everyone in the organization or only to the people you add.

An organization has notes, meetings, recording, Ask Ivy, tasks, search and a Trash. It doesn't have projects, reminders, the Ivy page, analytics, the graph, people or the processing queue; those items stay in the Browse menu and say so. A new note in an organization is created there.

## Recording into an organization

On the Record screen, the **Saves to** row picks the destination: On this Mac, Personal, or a space in one of your organizations. The menu lists each organization with one row per space. An organization with no space you can record to is greyed out and says why.

Where the transcript and note are made depends on that place's AI choice in Settings › AI Models, and the processing badge on the Saves to row shows it:

- **Ivy on this Mac**: the recording, transcript and note are made on your Mac. Then the recording, its transcript and its note are sent to the space; no outside AI is involved.
- **Ivy on the web**: the recording goes to the space, and IndexOne servers make the transcript, the note and answers.
- **Claude Code** or **Codex**: transcribed on your Mac; the redacted text goes to that tool, which writes the note.

### Sending, and what the statuses mean

A recording saved to Personal or an organization appears in its space right away: while it records, while your Mac processes it and while it is sent. You can open it before it arrives; the note, transcript and audio come from your Mac until the space has them. It is never listed twice.

Each recording shows one status:

- **Sending…**: IndexOne is sending it. Nothing to do.
- **Not sent yet**: it is waiting for you. The meeting and its page say why, and **Send now** appears when sending again can help.

Most recordings are sent again by themselves once the problem is gone, for example when you are back online, sign in again or unlock the app. When your storage is full, free up space and the recording is sent. The switcher shows a count next to an organization with recordings waiting for you.

Once a recording has arrived, the copy on your Mac is removed; nothing is left on your Mac outside the space's copy.

To take a recording out of its organization, choose **Move to On this Mac** in the meeting's menu. It then stays only on this Mac. A recording you can't open in its organization, for example because you signed out, stays under On this Mac with its status, so it never disappears.

## Working offline

Personal and every organization you belong to keep an encrypted copy on your Mac, so they open without a network connection. The switcher says how fresh the copy is: "Up to date", "Syncing…", or "Offline, showing your copy from" a given time.

- Edits you make offline are queued, and the switcher shows how many changes are waiting. They are sent when you are back online.
- If someone changed the same note in the meantime, both versions are kept: theirs in the note, yours in a note marked "(conflict copy)" next to it.
- If changes can't be sent at all, IndexOne keeps them in On this Mac, one note per place, and tells you where.

Recordings you play stay on your Mac. To keep all of a place's recordings available offline, turn on **Keep recordings on this Mac** in Settings › AI Models while that place is selected.

## AI processing

Each place has one AI setting in Settings › AI Models, under **AI in this workspace**. For Personal and organizations the choices are Ivy on this Mac, Ivy on the web, Claude Code and Codex (and a Local AI server, if you set one up). It is used for transcription, notes, Ask and the other AI features in that place. See [AI models](/docs/ai-models/).

An organization also has **AI processing for this organization**, one setting for every space, including new ones. Owners and admins change it in Settings › Organization › General. When it is off, nothing from the organization is processed on IndexOne servers: a recording saved there with Ivy on the web gets no transcript or note, and the badge says **Server processing is off**. Recordings processed on a Mac keep working.

## Organization settings

With an organization selected, Settings › **Organization** (or **Settings** and **People** in the space switcher) opens its settings. The tabs:

| Tab | What is there |
| --- | --- |
| General | The organization's name (owners and admins rename it), AI processing, and **Refresh access** |
| Members | Invitations, members and their roles |
| Spaces & access | The spaces and who can open each one |
| Storage | How much storage the organization uses; owners and admins also see who uploaded what |

Each plugin installed in the organization adds its own tab. See [Plugins](/docs/plugins/).

Use **Refresh access** when someone changes what you can see.

> [!NOTE]
> AI apps connected through the local MCP server can read an organization only after you turn it on in the MCP server settings. Organizations are off until you do. See [MCP server](/docs/mcp/).

## What happened to old shared notes

Before 3.15, IndexOne had end-to-end encrypted sharing with people, share links and its own encrypted organizations. These are retired.

- Everything that was shared with you, and every old encrypted organization on this Mac, moved into **On this Mac › Shared**: folders, notes, meetings, transcripts, recordings and files. IndexOne tells you once where they went, and how many recordings could not be kept, if any.
- Settings › Account lists your old share links under **Old shared links**. Anyone with one of these links can open the note until you choose **Stop sharing** or the link ends.
- Tasks from old organizations stay on this Mac. See [Tasks and reminders](/docs/tasks-and-reminders/).
