# Use IndexOne with your own AI agent

IndexOne records your meetings, transcribes them on-device, and keeps clean Markdown notes in its
own encrypted vault. If you already run **Claude Code** (or any MCP/Skills-capable agent) as a
"second brain", IndexOne ships a local, read-only server your agent can query directly.

This guide gets your agent cooperating with IndexOne in about five minutes.

## 5-minute setup

### 1. Enable the local MCP server and grab its config

IndexOne runs a local, read-only MCP server on `http://127.0.0.1:8765` that exposes your meetings
and notes to an agent — gated, indexed, and never leaving your machine.

- Open **Settings → Privacy & Integrations** in IndexOne.
- Under **Local server for Claude**, click **Copy config**.

That copies a ready-to-paste JSON block that already includes a **private access token** for
your server (the server requires it by default). It looks like:

```json
{
  "mcpServers": {
    "index-one": {
      "type": "http",
      "url": "http://127.0.0.1:8765",
      "headers": { "Authorization": "Bearer <your-token>" }
    }
  }
}
```

Keep that token to yourself — it's the key to your local server.

### 2. Add it to Claude Code

Paste the block into your Claude Code MCP configuration and restart Claude. Your agent now has
twenty read-only tools covering your meetings and transcripts, imported documents and their
outlines, semantic and located search, open commitments, entity dossiers and the entity list, note
folders, your Spaces hierarchy, boards, shared tasks, and your Shared Ivy — all computed
on-device.

### 3. Install the skill

The skill lives in this repository under [`vault-skills/`](../vault-skills/README.md). Get a copy
(or use GitHub's **Code → Download ZIP**), then copy the skill directory into Claude Code's
skills folder:

```bash
git clone --depth 1 https://github.com/monoone-dev/index-one-landing-page.git
cd index-one-landing-page

# Personal (every project):
mkdir -p ~/.claude/skills
cp -R vault-skills/index-one-mcp ~/.claude/skills/
```

(Or into `.claude/skills/` at a project root for a project-scoped install.) Start a fresh Claude
Code session so the skill loads. Now your agent knows when and how to query IndexOne's server.

## What you get

- Your agent **answers from IndexOne's indexed knowledge** — semantic + full-text search, entity
  dossiers, structured transcripts, open-commitment rollups.
- Your agent **sees only what you allow**: locked content stays out of every answer.
- Your agent **can't change anything**: every tool is read-only.

## The privacy model, in plain words

- **Your notes live in IndexOne's encrypted vault**, not as loose files on disk. An agent reaches
  them only through the MCP server.
- **Locked = absent.** When you lock a folder or protect an item in IndexOne, its content is
  encrypted and the MCP server excludes it entirely until you unlock it in the app.
- **MCP = gated and read-only.** The local server is loopback-only (`127.0.0.1`), token-gated by
  default, makes no cloud calls, and has no tool that can write, edit, or delete anything.

## FAQ

**Can my agent edit my notes?**
No. The MCP server has no write tool. Notes change only inside the IndexOne app. If you want a
note as a file, export it as `.md` from the app.

**Can my agent unlock locked notes?**
No. Unlocking requires Touch ID on your machine, and the MCP server excludes locked content.
There is no path for an agent to unlock anything.

**Does the MCP server send anything to the cloud?**
No. It listens on loopback (`127.0.0.1`) only, is read-only, and computes every answer on-device
from IndexOne's local database. Nothing leaves your machine through it.
