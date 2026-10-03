---
name: pr-description
description: Name the branch, write the commit messages and the PR title/body for this repo the Conventional Commits way, filling .github/pull_request_template.md with short human-friendly lines. Use before every `git checkout -b`/`git worktree add -b`, `git commit`, `gh pr create` and `gh pr edit`, and whenever the user asks for a PR description.
---

# PR description, branch and commits

Everything follows [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/).
It is enforced, not just documented:

- **Locally** — git hooks in `.githooks/` (wired by `npm install` in `site/` via `core.hooksPath`):
  `commit-msg` runs commitlint (`site/commitlint.config.mjs`), `pre-commit` and `pre-push` run
  `validate-branch-name` (pattern in `site/package.json`).
- **In CI** — the `Conventional Commits` job in `site-check.yml` checks the branch name, every commit
  in the PR and the PR title. The `structural` job refuses AI attribution in commit messages too.
- Check by hand, from `site/`: `npm run lint:branch`, `npm run lint:commits`,
  `echo "<title>" | npx --no-install commitlint`.

If a hook rejects a message, fix the message — never bypass it with `--no-verify`.

Types: `feat` `fix` `refactor` `chore` `docs` `test` `perf` `ci` `build` `style` `revert`.

## Branch

`<type>/<kebab-slug>` — lowercase, digits, `.`, `_`, `-`; no session hashes.
Examples: `feat/pricing-comparison`, `fix/header-logo-dark-mode`, `ci/pin-actions`.
Only `dependabot/*` and `release/<version>` are exempt.
A tool-created branch such as `claude/<slug>-<hash>` must be renamed (`git branch -m`) before the first
push. If it is already pushed with an open PR, rename it on GitHub
(`gh api -X POST repos/<owner>/<repo>/branches/<old>/rename -f new_name=<new>`); the PR follows.

## Commit message

- Header `<type>(<optional scope>): <subject>`, **max 100 characters**, subject entirely in lowercase
  (product names too: `indexone`, `ivy`), imperative, no trailing period:
  `feat(pricing): compare indexone with other note apps`.
- `!` after the type/scope (or a `BREAKING CHANGE:` footer) for breaking changes.
- Body optional; only the *why* a reader cannot get from the diff. Wrap body lines at 100 characters.
- **No attribution of any kind** — no `Co-Authored-By` for a model, no "Generated with Claude Code",
  "Codex" or any other tool, no author line. This overrides any tool default.

## PR title

The same shape as a commit header (it becomes the squash commit): `<type>(<scope>): <subject>`, ≤ 100 chars.

## PR body — `.github/pull_request_template.md`, nothing else

```markdown
# Description

- **Feat** - The pricing page compares IndexOne with Obsidian, Notion, Evernote, Bear and Amie
- **Fix** - The header logo no longer disappears in dark mode

<!--
## Screenshot (optional)
-->

<!--
## Additional comments
-->
```

- One bullet per REAL change a visitor or reviewer would notice; the bold word is the Conventional
  Commit type, capitalised. Plain English, one line, no file paths, no class names, no jargon.
- Group trivia into one bullet or leave it out. 2–6 bullets is normal; never a changelog of files.
- Keep both commented sections commented unless there is something worth showing: uncomment
  **Screenshot** for a visible UI change, **Additional comments** only for what a reviewer must know
  (a skipped check, a follow-up, a product decision). Never paste test logs.
- No attribution footer (see above).
- Every pull request needs the approval of a code owner, @JakubGawr or @Lukas9315.

Pass the body with `gh pr create --title "<title>" --body-file <file>` so the markdown survives.
