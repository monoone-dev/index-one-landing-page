# Contributing to this repository

This repository holds IndexOne's website, documentation, release notes and downloads. The source code
of the IndexOne app is not public, so changes to the app itself can't be proposed here — open an
[issue](https://github.com/monoone-dev/index-one-landing-page/issues/new/choose) instead.

What you can change with a pull request:

| Path | What it is |
| --- | --- |
| `site/` | The website at [index-one.io](https://index-one.io): a Nuxt app for the home page (`site/app/`) and static files in `site/public/`, including `docs.html`. |
| `docs/` | Guides in Markdown. |
| `README.md`, `SUPPORT.md`, `SECURITY.md` | The repository's own pages. |
| `release-notes/` | The text of each release. Maintainers write these when they publish a version. |

[Using IndexOne with your own agent](docs/use-with-your-agent.md) and the [skill pack](vault-skills/README.md)
document the tools of the shipped app, so they are copied here from the app's own source with each
release, and a pull request against them would be overwritten. Open an
[issue](https://github.com/monoone-dev/index-one-landing-page/issues/new/choose) for those instead.

## How to propose a change

1. Fork the repository and create a branch named `<type>/<short-description>`, for example
   `docs/fix-mcp-snippet` or `fix/site-footer-link`.
2. Make the change. To preview the website, run `npm ci` and `npm run dev` in `site/` and open
   <http://localhost:3000>; `npm run generate` builds the static site that gets deployed.
3. Run `npm install` in `site/` once; it wires the git hooks that check branch names and commit
   messages. Commit using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):
   `<type>(<scope>): <subject>`, at most 100 characters, for example
   `docs(site): correct the ollama setup steps` (the subject is all lowercase). Common types: `docs`, `fix`, `feat`, `chore`, `ci`.
4. Open a pull request against `main` and fill in `.github/pull_request_template.md`: one short
   line per real change. Keep it to one change.
   A branch is public the moment it is pushed, so check it before you push.

The **Site check** workflow runs on every pull request. It refuses links to private repositories,
secret-shaped strings (keys and tokens), symlinks, files over 50 MB, a broken MCP example in
`site/public/docs.html` and AI co-author or "generated with" lines in commit messages. It also
builds the site and refuses third-party assets, `data:` URIs and missing SEO tags in the output. Every pull request
needs the approval of [@JakubGawr](https://github.com/JakubGawr), who also runs an additional
privacy and secret check before approving; if it flags your change, we'll tell you what to change.

## Rules that keep the site trustworthy

- **No real meeting content**, names, email addresses or file paths from your own Mac — in text,
  screenshots or commit messages. Use made-up examples.
- **No tracking and no third-party requests.** The website loads nothing from other servers: no
  analytics, no web fonts from a CDN, no external scripts, no `fetch` calls. Fonts are self-hosted in
  `site/public/assets/fonts/`, and icons are bundled at build time.
- **Claims must be true of the shipped app.** If you describe a feature, say which version has it.
  IndexOne is free to use but it is not open source, so please don't describe it that way.
- **Commit identity.** Commits are public forever. Use your GitHub noreply address
  (`<id>+<login>@users.noreply.github.com`) rather than a personal or work email; GitHub shows it
  under *Settings → Emails*.

## Licence of contributions

Documentation and website text in this repository are published under [CC BY 4.0](LICENSE). By
opening a pull request you agree that your contribution is published under the same licence. The
IndexOne name, logo, screenshots and video are not covered by CC BY 4.0; please don't add
third-party images or fonts unless their licence allows it and the licence travels with them.
