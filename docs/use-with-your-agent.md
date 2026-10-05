# Use IndexOne with your own AI agent

IndexOne records your meetings, transcribes them on-device, and writes clean Markdown notes into
your Obsidian vault. If you already run **Claude Code** (or any MCP/Skills-capable agent) over
that vault as a "second ivy", IndexOne is designed to be a good citizen inside it — it writes
plain, owned Markdown, and it ships a local, read-only server your agent can query directly.

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

### 3. Install the skills

The skill-pack lives in this repository under [`vault-skills/`](../vault-skills/README.md). Get a copy
(or use GitHub's **Code → Download ZIP**), then copy the two skill directories into Claude Code's
skills folder:

```bash
git clone --depth 1 https://github.com/monoone-dev/index-one-landing-page.git
cd index-one-landing-page

# Personal (every project):
mkdir -p ~/.claude/skills
cp -R vault-skills/index-one-vault vault-skills/index-one-mcp ~/.claude/skills/
```

(Or into `.claude/skills/` at your vault root for a project-scoped install.) Start a fresh Claude
Code session so the skills load. Now your agent knows IndexOne's note conventions and how to query
the MCP server instead of blindly grepping files.

## What you get

- Your agent **answers from IndexOne's indexed knowledge** — semantic + full-text search, entity
  dossiers, structured transcripts, open-commitment rollups — instead of scanning raw files.
- Your agent **respects IndexOne's notes**: it knows the front-matter contract, the managed
  sections it must not touch (`## Re-Truth updates`, `## Pinned moments`, entity backlink lists),
  and IndexOne's wikilink discipline.
- Your agent and IndexOne **stay out of each other's way**: it adds new notes freely, prefers
  appending under its own headings, and understands why a locked note vanishes from disk.

## The privacy model, in plain words

- **Unsealed vault = readable by your agent.** Any agent that reads your vault as files sees
  every unsealed note in full — IndexOne's and your own. Point it at a vault you're comfortable
  with.
- **Sealed = absent.** When you lock (seal) a folder in IndexOne, its `.md` files are removed from
  disk entirely (the content is safe, encrypted, in IndexOne's database). A file-reading agent
  physically cannot see sealed content, and the MCP server excludes it too. The files reappear
  when you unlock.
- **MCP = gated and read-only.** The local server is loopback-only (`127.0.0.1`), token-gated by
  default, makes no cloud calls, and has no tool that can write, edit, or delete anything.

## Coexistence guarantees

- IndexOne **never touches a file it didn't create.** Notes your agent writes are yours.
- IndexOne's **database is canonical for the notes IndexOne generated** — the vault `.md` is a
  projection of it. When IndexOne updates one of its own notes, it re-derives the file from that
  database.
- The **safest pattern** for your agent: add new notes freely, prefer appending under its own
  heading over rewriting an IndexOne note, and never edit inside a managed section. The
  [`index-one-vault`](../vault-skills/index-one-vault/SKILL.md) skill spells this out.

## FAQ

**Will IndexOne overwrite my agent's edits?**
IndexOne only rewrites notes **it** generated (from its canonical database); it never touches a
file your agent created. For IndexOne's own notes, an **external-edit guard** ships with this
release: when IndexOne is about to re-derive a note and finds you changed it on disk since it last
wrote, it **preserves your version as a sibling file** (e.g.
`Meeting Title (external edit 2026-07-16 1430).md`) rather than overwriting it, so your edit is
not silently lost — you reconcile the two. On older builds without the guard, a rewrite of a
IndexOne-owned note **can replace your on-disk changes**, so the durable habit either way is to
**append under your own heading** rather than rewrite IndexOne's note body.

**Can my agent unlock sealed notes?**
No. Sealing encrypts a folder's content and removes its `.md` files from disk; unlocking requires
Touch ID on your machine. The MCP server excludes sealed content, and a file-reading agent simply
won't find the files. There is no path for an agent to unlock anything.

**Does the MCP server send anything to the cloud?**
No. It listens on loopback (`127.0.0.1`) only, is read-only, and computes every answer on-device
from IndexOne's local database. Nothing leaves your machine through it.
