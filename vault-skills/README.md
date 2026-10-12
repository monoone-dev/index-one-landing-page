# Use IndexOne with your own AI agent

IndexOne records your meetings, transcribes them on-device, and keeps clean Markdown notes in its
own encrypted vault. If you also run **Claude Code** (or any other MCP- or Skills-capable agent),
this pack teaches your agent to reach IndexOne's gated, indexed knowledge through a local
read-only server.

This is a set of **plain files** — you own them, they never phone home, and nothing here
changes IndexOne itself.

## What's in the pack

| File | For | Teaches |
| --- | --- | --- |
| [`index-one-mcp/SKILL.md`](index-one-mcp/SKILL.md) | your agent | When and how to query IndexOne's local read-only MCP server (gated, indexed retrieval), plus the full tool catalog. |

There is also a human-facing setup guide at
[`docs/use-with-your-agent.md`](../docs/use-with-your-agent.md).

## Installing the skill into Claude Code

Agent Skills are directories containing a `SKILL.md`. Claude Code discovers them from two
locations:

- **Personal (all your projects):** copy the skill directory into `~/.claude/skills/`.
- **Project-scoped (checked in for a repo):** copy it into `.claude/skills/` at the root of the
  project.

```bash
# Personal install (for every project):
mkdir -p ~/.claude/skills
cp -R index-one-mcp ~/.claude/skills/

# …or project-scoped, from inside a project:
mkdir -p .claude/skills
cp -R /path/to/index-one-landing-page/vault-skills/index-one-mcp .claude/skills/
```

The skill's YAML front-matter (`name` + `description`) is what Claude reads to decide when the
skill is relevant; the body loads only when it's actually needed. After copying, start a new
Claude Code session so the skill is picked up.

## A word on privacy

IndexOne's MCP server gives **gated, indexed, read-only** access — semantic + full-text search,
entity dossiers, structured transcripts, typed-property queries — and every tool excludes the
content of locked folders and protected items. It listens on loopback only (`127.0.0.1:8765`), is
token-gated by default, and never sends anything to the cloud. The skill covers the setup.
