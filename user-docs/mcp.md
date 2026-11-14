---
title: The local MCP server and AI apps
description: Let Claude Desktop, Claude Code and other AI apps read your IndexOne meetings through a read-only MCP server that runs only on your Mac.
keywords: mcp, local server, claude desktop, claude code, ai apps, config, bearer token, read-only, workspaces, organizations, agent guide, skill pack, vault skills
---

IndexOne can run a small server on your Mac that lets AI apps such as Claude Desktop and Claude Code read your meetings and notes. It uses MCP, the Model Context Protocol. The server is read-only, listens only on this Mac, and is off until you turn it on.

## What the server is

- **Local only.** It listens on `127.0.0.1:8765`. Nothing on it is reachable from the internet, and requests addressed to any other host name are refused.
- **Read-only.** An AI app can search and read your meetings, never write or change them.
- **Protected by a key.** Every request must carry the private key from your config.
- **Respects locks.** Meetings in a locked folder stay hidden from AI apps unless you have unlocked that folder in IndexOne, and the copies of Personal and your organizations are not readable while IndexOne itself is locked. See [The lock model](/docs/lock-model/).

AI apps can search meetings, transcripts, notes and imported documents, by words or by meaning; read a meeting's note, transcript and topics; list open commitments; build a summary of everything about a person or project; and browse your workspaces, note folders, projects and organization tasks.

## Turn it on

1. Open Settings › Connectors and find **Local server for Claude**.
2. Turn on **Turn on the local server**. Claude Desktop and Claude Code can connect only while this is on.
3. Under **Config**, choose **Copy config**.
4. Add it to your Claude config, then restart Claude.

The copied config looks like this, with your own key in place of the placeholder:

```json
{
  "mcpServers": {
    "index-one": {
      "type": "http",
      "url": "http://127.0.0.1:8765",
      "headers": {
        "Authorization": "Bearer <your-token>"
      }
    }
  }
}
```

> [!WARNING]
> The config contains a private key for your local server. Anyone who has it can read your meetings, so keep it to yourself and never paste it into an issue or a chat.

If the card says another app is using the port, quit that app; IndexOne connects on its own, with no restart needed.

## Choose which workspaces AI apps can read

Under **Workspaces Claude can read**, each workspace has its own switch: On this Mac (notes and meetings stored on this Mac), Personal and each of your organizations.

- On this Mac and Personal are on unless you turn them off.
- **Organizations are off** until you turn them on.
- An AI app reads an organization only when it names that organization in its request.

If an AI app used an organization before [3.17](/changelog/#v3.17.0), turn that organization on again.

## Programs IndexOne starts

Before IndexOne starts a program on your behalf, such as a new path to Claude Code set in Settings › Connectors, it asks you to confirm in a dialog that names the program. If you say no, nothing runs.

## Teach your agent IndexOne

If you run Claude Code or another agent over your notes, give it the two public guides from the IndexOne repository. They describe IndexOne's note conventions and every MCP tool, so the agent asks the server instead of searching files:

- The agent guide: [use-with-your-agent.md](https://github.com/monoone-dev/index-one-landing-page/blob/main/docs/use-with-your-agent.md)
- The skill pack: [vault-skills](https://github.com/monoone-dev/index-one-landing-page/tree/main/vault-skills)
