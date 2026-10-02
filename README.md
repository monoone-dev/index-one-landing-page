# IndexOne

**Local-first meeting notes for macOS, with Ivy.** IndexOne records your calls, transcribes them on
your Mac, writes a structured note you own as plain Markdown, and lets you ask Ivy questions —
during the meeting and across everything you have ever recorded.

[Download for macOS](https://github.com/monoone-dev/index-one-landing-page/releases/latest) ·
[index-one.io](https://index-one.io) ·
[Documentation](https://index-one.io/docs.html) ·
[Release notes](https://github.com/monoone-dev/index-one-landing-page/releases) ·
[Support](#support)

macOS 13.4+ · Apple Silicon and Intel (universal) · signed and notarized · free during early access

## Contents

- [This repository](#this-repository)
- [What IndexOne does](#what-index-one-does)
- [Install](#install)
- [Privacy in one table](#privacy-in-one-table)
- [Obsidian, MCP and your own agent](#obsidian-mcp-and-your-own-agent)
- [Where your data lives](#where-your-data-lives)
- [Uninstall](#uninstall)
- [Working on the website](#working-on-the-website)
- [Support](#support)
- [Authors and license](#authors-and-license)

## This repository

IndexOne's public home. The app's source code is not public and is not here.

| Path | What it is |
| --- | --- |
| [Releases](https://github.com/monoone-dev/index-one-landing-page/releases) | The signed, notarized DMG of every release, with its notes |
| [`release-notes/`](release-notes/) | The same release notes, as Markdown |
| [`site/`](site/) | The website at [index-one.io](https://index-one.io) — Nuxt, statically generated |
| [`docs/use-with-your-agent.md`](docs/use-with-your-agent.md) | Using IndexOne with your own AI agent |
| [`vault-skills/`](vault-skills/README.md) | The skill pack for Claude Code |
| Issues and Discussions | Bug reports, ideas and questions |

## What IndexOne does

1. **Record** — press Record (or `⌘⇧R` from any app). Your microphone and the other side's audio are
   captured as two streams.
2. **Transcribe** — both streams are transcribed on your Mac with Whisper and merged into one
   **Me / Others** transcript. There is no cloud transcription.
3. **Write the note** — when you stop, the AI you chose writes a summary, decisions, action items and
   quotes. Each grounded line links back to the second of audio it came from.
4. **Ask Ivy** — mid-meeting without stopping the recording, or months later across every meeting,
   note and document. Every answer lists its sources.

Also included: Workspaces (one tree for recordings, notes, tasks and boards), composable dashboards,
offline imports from Notion, Obsidian and Apple Notes, a Markdown editor with Ivy actions, documents
(PDF, Office, web pages, images) indexed next to your meetings, and optional end-to-end encrypted
sharing through Shared Ivy.

**Where Ivy runs is your choice:**

| Connection | Where it runs | Does meeting text leave your Mac? |
| --- | --- | --- |
| On-device Ivy (Qwen3 or Bielik, downloaded once) | Your Mac | No |
| Ollama at a local address | Your Mac | No |
| Claude Code (default note writer), Codex | Local CLI → provider | Only after consent; redacted first |
| Anthropic API (your key, in the Keychain), Kong or another OpenAI-compatible gateway | Direct HTTPS | Only after consent; redacted first |

The full feature list is on [index-one.io](https://index-one.io/#features) and in the
[documentation](https://index-one.io/docs.html).

## Install

1. Download `Index-One-<version>.dmg` from the
   [latest release](https://github.com/monoone-dev/index-one-landing-page/releases/latest).
2. Open the DMG and drag **IndexOne** into **Applications**.
3. Open it from Applications and confirm **Open** when macOS asks.

Every release is signed with an Apple Developer ID and notarized, with the ticket stapled to the DMG.
If macOS says the app "cannot be opened" or "is damaged", don't work around it: delete the file,
download it again, and [open an issue](https://github.com/monoone-dev/index-one-landing-page/issues/new/choose)
if it happens again.

<details>
<summary>Verify a download (optional)</summary>

```bash
spctl -a -vvv -t open --context context:primary-signature ~/Downloads/Index-One-<version>.dmg
xcrun stapler validate ~/Downloads/Index-One-<version>.dmg
codesign -dv --verbose=2 "/Applications/Index One.app" 2>&1 | grep -E "Authority|TeamIdentifier"
```

Expect `accepted` and `source=Notarized Developer ID`; the TeamIdentifier should read `BVF778E5QD`.
Each release also carries `SHA256SUMS.txt` — run `shasum -a 256 -c SHA256SUMS.txt` in the download
folder.

</details>

**Permissions.** macOS asks for each one the first time it is needed: Microphone and Screen & System
Audio Recording (first recording — audio only, never your screen), Calendars, Reminders,
Automation → Notes (Apple Notes import) and Touch ID (unlocking a locked folder). Details:
[Your first recording](https://index-one.io/docs.html#first-recording).

**Updates.** At launch the app asks GitHub whether a newer release exists; the request carries only
the app version. Turn it off in **Settings → Privacy & Integrations**. The app never installs
anything by itself — download the new DMG and replace the old copy; your library stays put.
Versions 2.8.0 and earlier can no longer reach the update check: download the
[latest release](https://github.com/monoone-dev/index-one-landing-page/releases/latest) once.

## Privacy in one table

Recording, transcription, search and on-device Ivy work with no network connection.

| What can leave your Mac | When | Where it goes |
| --- | --- | --- |
| Update check — the app version, no content, no account | At launch (can be turned off) | `api.github.com` |
| Model downloads — nothing about you | Only when you start one | Hugging Face |
| **Redacted** meeting text | Only with a cloud AI connection **and** one-time consent | The provider you chose |
| Redacted connector queries | Only for connectors you enabled | That service |
| **Encrypted** notes, summaries and tasks | Only when you share, with an account | The sharing relay (ciphertext only) |

The database is encrypted with SQLCipher. Any Workspace or folder can also be locked with
AES-256-GCM under a key only Touch ID or your login password releases; a locked folder is invisible
to the app, search, the graph, MCP and the audio player until unlocked. More:
[What never leaves your Mac](https://index-one.io/docs.html#data-flow) ·
[The lock model](https://index-one.io/docs.html#lock-model) ·
[Redaction firewall](https://index-one.io/docs.html#redaction-firewall) ·
[Known limitations](https://index-one.io/docs.html#known-limitations)

## Obsidian, MCP and your own agent

- **Obsidian** — pick a vault folder and every note is written there as plain Markdown with YAML
  front-matter, `[[wikilinks]]`, `obsidian://` block references and an optional `.canvas` board.
- **MCP** — a read-only [Model Context Protocol](https://modelcontextprotocol.io) server on
  `127.0.0.1:8765`, loopback-only and protected by a bearer token. Copy the real config, token
  included, from **Settings → Privacy & Integrations → Local server for Claude → Copy config**:

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

- **Your own agent** — read [Use IndexOne with your own AI agent](docs/use-with-your-agent.md) and
  install the [skill pack](vault-skills/README.md).

## Where your data lives

| What | Where |
| --- | --- |
| Library, recordings, models, logs | `~/Library/Application Support/MeetNotes/` |
| Encryption and API keys | macOS Keychain, items named `com.meetnotes.app` |
| Exported notes | The vault folder you chose |

The folder keeps the app's original internal name. Don't rename it, or the app starts with an empty
library.

## Uninstall

1. Quit IndexOne and move `/Applications/Index One.app` to the Trash. Your library stays.
2. To remove your data too, delete `~/Library/Application Support/MeetNotes/` — **this permanently
   deletes every recording, transcript and note**, locked folders included — then delete the
   `com.meetnotes.app` items in Keychain Access.
3. Optional: `tccutil reset All com.meetnotes.app` clears the macOS permissions.

A sharing account is not deleted by uninstalling; see
[SUPPORT.md](SUPPORT.md#deleting-a-sharing-account).

## Working on the website

`site/` is a [Nuxt](https://nuxt.com) 4 app in TypeScript with [Nuxt UI](https://ui.nuxt.com),
[Nuxt i18n](https://i18n.nuxtjs.org) and SCSS, generated to static HTML so every word is in the
served markup. It is published in English (`/`), Polish (`/pl/`), Spanish (`/es/`), Italian
(`/it/`), French (`/fr/`), Portuguese (`/pt/`), German (`/de/`), Simplified Chinese (`/zh/`) and
Japanese (`/ja/`); the first visit follows the
browser's language and the choice is kept in a first-party cookie. The colour mode follows the
system until the visitor picks one.

```bash
cd site
npm ci
npm run dev        # http://localhost:3000
npm run generate   # static output in site/.output/public
npm run typecheck
```

| Path | What it holds |
| --- | --- |
| `site/i18n/content/` | All page copy, one typed file per language (`en.ts` is the source; `types.ts` keeps the others complete) |
| `site/app/data/` | What doesn't get translated: links, icons, screenshots, the comparison's yes/no values |
| `site/app/components/` | One component per section |
| `site/app/assets/scss/` | Fonts, the Studio / Paper / Minimalist skins and base styles |
| `site/app/composables/usePageSeo.ts` | Meta tags, Open Graph and JSON-LD; `hreflang` and canonical come from Nuxt i18n |
| `site/server/routes/sitemap.xml.ts` | The sitemap, with every language as an alternate |
| `site/public/` | Static files served as they are: `docs.html` (English only), screenshots, fonts, icons, `robots.txt`, `CNAME` |

The site makes no third-party requests: fonts and icons are bundled, and there is no analytics.
CI ([`site-check.yml`](.github/workflows/site-check.yml)) builds the site and refuses external
assets, `data:` URIs and missing SEO tags; [`pages.yml`](.github/workflows/pages.yml) deploys `main`
to GitHub Pages. `npm install` also wires git hooks that check branch names and commit messages
([Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), no AI attribution).
Runbooks for people and coding agents are in [`AGENTS.md`](AGENTS.md) and `.agents/skills/`.
Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## Support

- **Docs first:** [index-one.io/docs.html](https://index-one.io/docs.html).
- **Bug:** [open a bug report](https://github.com/monoone-dev/index-one-landing-page/issues/new?template=bug_report.yml)
  with your app version (Settings → About), macOS version and Mac type.
- **Idea:** [suggest a feature](https://github.com/monoone-dev/index-one-landing-page/issues/new?template=feature_request.yml).
- **Question:** [Discussions](https://github.com/monoone-dev/index-one-landing-page/discussions).
- **Security issue:** don't open a public issue — use
  [private vulnerability reporting](https://github.com/monoone-dev/index-one-landing-page/security/advisories/new).
  See [SECURITY.md](SECURITY.md).

> Issues and Discussions are public. Never paste transcripts, notes, meeting titles, attendee names,
> audio, API keys or your MCP token, and don't attach the diagnostics bundle — it can contain file
> paths that include your macOS user name. More in [SUPPORT.md](SUPPORT.md).

## Authors and license

IndexOne is made by **[MonoOne](https://github.com/monoone-dev)**. See [AUTHORS.md](AUTHORS.md) and
[CITATION.cff](CITATION.cff).

- Documentation, release notes and website text: [CC BY 4.0](LICENSE) — credit "MonoOne" and link to
  this repository.
- The app, the IndexOne name and logo, the screenshots and the promo video are © 2026 MonoOne, all
  rights reserved. The app is free to download and use.
- Fonts in `site/public/assets/fonts/` are under the SIL Open Font License 1.1; each family's licence
  sits next to it.
- Versions 2.8.0 and earlier were originally published under the GNU AGPL-3.0 while their source code
  was public; their release notes say so.

This section describes the licensing; it is not legal advice.
