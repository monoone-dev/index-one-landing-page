# Contributing to this repository

This repository holds Murmur's website, documentation, release notes and downloads. The source code
of the Murmur app is not public, so changes to the app itself can't be proposed here — open an
[issue](https://github.com/murmur-io/murmur-notes/issues/new/choose) instead.

What you can change with a pull request:

| Path | What it is |
| --- | --- |
| `site/` | The website at [murmurnotes.io](https://murmurnotes.io): `index.html`, `docs.html` and their assets. |
| `docs/` | Guides in Markdown. |
| `README.md`, `SUPPORT.md`, `SECURITY.md` | The repository's own pages. |
| `release-notes/` | The text of each release. Maintainers write these when they publish a version. |

[Using Murmur with your own agent](docs/use-with-your-agent.md) and the [skill pack](vault-skills/README.md)
document the tools of the shipped app, so they are copied here from the app's own source with each
release, and a pull request against them would be overwritten. Open an
[issue](https://github.com/murmur-io/murmur-notes/issues/new/choose) for those instead.

## How to propose a change

1. Fork the repository and create a branch named `<type>/<short-description>`, for example
   `docs/fix-mcp-snippet` or `fix/site-footer-link`.
2. Make the change. To preview the website, serve the `site/` folder locally, for example
   `python3 -m http.server --directory site 8000`, and open <http://localhost:8000>.
3. Commit using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):
   `<type>(<scope>): <subject>`, at most 100 characters, for example
   `docs(site): correct the Ollama setup steps`. Common types: `docs`, `fix`, `feat`, `chore`, `ci`.
4. Open a pull request against `main`. Keep it to one change, and say in one line what it changes.
   A branch is public the moment it is pushed, so check it before you push.

The **Site check** workflow runs on every pull request. It refuses links to private repositories,
secret-shaped strings (keys and tokens), symlinks, files over 50 MB, a broken MCP example in
`site/docs.html` and AI co-author or "generated with" lines in commit messages. Every pull request
needs the approval of [@JakubGawr](https://github.com/JakubGawr), who also runs an additional
privacy and secret check before approving; if it flags your change, we'll tell you what to change.

## Rules that keep the site trustworthy

- **No real meeting content**, names, email addresses or file paths from your own Mac — in text,
  screenshots or commit messages. Use made-up examples.
- **No tracking and no third-party requests.** The website loads nothing from other servers: no
  analytics, no web fonts from a CDN, no external scripts, no `fetch` calls. Fonts are self-hosted in
  `site/assets/fonts/`.
- **Claims must be true of the shipped app.** If you describe a feature, say which version has it.
  Murmur is free to use but it is not open source, so please don't describe it that way.
- **Commit identity.** Commits are public forever. Use your GitHub noreply address
  (`<id>+<login>@users.noreply.github.com`) rather than a personal or work email; GitHub shows it
  under *Settings → Emails*.

## Licence of contributions

Documentation and website text in this repository are published under [CC BY 4.0](LICENSE). By
opening a pull request you agree that your contribution is published under the same licence. The
Murmur name, logo, screenshots and video are not covered by CC BY 4.0; please don't add
third-party images or fonts unless their licence allows it and the licence travels with them.
