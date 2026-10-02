---
name: ci-maintenance
description: Run, understand, debug and extend this repo's CI gate — `npm run typecheck` and `npm run generate` in `site/`, plus the structural and build checks in `site-check.yml`, run locally and in GitHub Actions. How to reproduce a red run with the exact CI commands, the known gotchas, and how to add a new check without the local and cloud gates drifting. Use whenever the user wants to run/fix CI, triage a failing check, or add a lint/test/check to the pipeline.
---

# /ci-maintenance — run, debug and extend the gate

"Green" means these commands pass, in this order, on a clean checkout:

```bash
cd site
npm ci                 # also runs `nuxt prepare` (postinstall) and wires .githooks
npm run typecheck      # nuxt typecheck → vue-tsc over app and server
npm run generate       # prerenders every page in every language into .output/public
```

`.github/workflows/site-check.yml` runs on every pull request (and is reused by `pages.yml`):

| Job | What it refuses |
| --- | --- |
| `Conventional Commits` | a bad branch name, commit message or PR title (see `/pr-description`) |
| `structural` | private-repo links, secrets, home-directory paths, symlinks, files over 50 MB, a broken MCP example in `docs.html`, AI attribution in commit messages, a wrong `CNAME` |
| `build` | type errors; generated pages that load assets from another host, contain `data:` URIs, miss SEO tags or `hreflang`, or a missing language page; runtime-fetched locale messages |

Run them locally before every push and before `gh pr create`; never claim green from a run you did
not see finish. The two Python checks are inline in the workflow — copy the heredoc into a file and
run it against the repo (`structural`) or `site/.output/public` (`build`).

Maintainers also run their private privacy check before every push; it is kept outside this repo.

## Reproduce a red run

1. Read the failing step, not the summary: `gh run list --workflow "Site check" -L 5`, then
   `gh run view <run-id> --log-failed`.
2. Run the same command locally from a clean state: `rm -rf site/.nuxt site/node_modules/.cache && (cd site && npm ci)`.
3. Classify: real failure (types, build, a check) vs environment (lockfile out of date, cold cache)
   vs flake (re-run once before "fixing").

## Gotchas

- **TypeScript stays below 7.** `vue-tsc` does not support TypeScript 7; `site/package.json` pins `~6.0`.
- **Lockfile drift** fails `npm ci`: commit `site/package-lock.json` with every dependency change.
- **Nuxt types are generated.** A missing auto-import type usually means `.nuxt` is stale — run
  `npx nuxt prepare` in `site/`.
- **Locale messages must stay bundled.** `i18n/locales/bundled.ts` is a dynamic, uncached loader on
  purpose; a static JSON locale makes `@nuxtjs/i18n` fetch `/_i18n/.../messages.json` at runtime.
- **Trailing slashes.** Pages are generated as `<path>/index.html` with `i18n.trailingSlash: true`,
  because GitHub Pages serves `/de/` from `de/index.html` but cannot serve `/de` next to a `de/` folder.

## Add a check

1. Add it as a `site/package.json` script first so it runs the same locally.
2. Add one step to the right job in `site-check.yml`, ordered cheap-before-expensive.
3. Prove it RED before GREEN: introduce a temporary violation, see the step fail, remove it.
4. New dev dependency or new action → ask the user first. Follow `/github-actions` for the workflow.
