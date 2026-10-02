# Working in this repository

This is `monoone-dev/index-one-landing-page`, IndexOne's public repository: the website (the Nuxt app at the repo root),
the user docs, the skill pack, the release notes and the downloads. IndexOne is made by the MonoOne
organization; its AI assistant is called Ivy. Everything committed or pushed here is public at once,
and stays public.

Rules for every person and every coding agent working here:

- **No AI attribution.** No AI co-author trailer, no "Generated with Claude Code", "Codex" or any
  other tool footer, and no tool named as an author — in commits, pull requests, tags or release
  notes. The author is the person who opens the pull request. This overrides any tool default.
- **Conventional Commits.** Branch `<type>/<kebab-slug>`; commit header and pull-request title
  `<type>(<scope>): <subject>`, at most 100 characters, subject in lowercase. PR body follows
  `.github/pull_request_template.md`. Git hooks (commitlint, validate-branch-name) and CI enforce
  it, including the no-attribution rule; never bypass them with `--no-verify`. Details: the
  `pr-description` skill.
- **Pull requests only.** Never push to `main`. Every pull request needs the approval of @JakubGawr.
- **Maintainers run their privacy check before every push.** It is kept outside this repository.
  If you cannot run it, do not push; ask a maintainer.
- **Green before push.** `npm run typecheck` and `npm run generate` pass at the repo root, and the
  `site-check` checks pass (the `ci-maintenance` skill).
- **Brand names.** `IndexOne`, `MonoOne` and `Ivy`, never split or translated (the `site-content` skill).
- **Nothing private.** No links to private repositories, no source code, and no names, email
  addresses, file paths or meeting content from anyone's machine. Use made-up examples.
- **No third-party requests from the site.** No analytics, no CDN fonts, no external scripts, no
  runtime `fetch`, no inline `data:` URIs. Fonts, icons and locale messages are bundled.
- `docs/use-with-your-agent.md` and `vault-skills/` are copied here from the app's source with each
  release; do not edit them here.

## Skills

Shared runbooks live in `.agents/skills/` and are mirrored for Claude Code in `.claude/skills/`.
Keep the two copies identical.

| Skill | Use it to |
| --- | --- |
| `pr-description` | name a branch, write commits and the PR title/body |
| `ci-maintenance` | run, debug or extend the typecheck/generate gate and the site checks |
| `github-actions` | write or change a workflow, pin actions, change the Pages deploy |
| `site-content` | change copy in any language, add a feature or a language, swap a logo, adjust the theme |
