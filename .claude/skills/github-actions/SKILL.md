---
name: github-actions
description: Author and maintain GitHub Actions workflows for this repo (Nuxt 4 + npm static site in site/) — ubuntu runner, Node from site/.nvmrc with the npm cache, SHA-pinned actions resolved live, least-privilege permissions, concurrency, timeouts and secrets by name. Use whenever the user wants to write or change a workflow, tune CI runtime/caching, pin or bump actions, or change the GitHub Pages deploy.
---

# /github-actions — workflow best practices for this repo

Three workflows:

- `.github/workflows/site-check.yml` — the PR gate (conventions, structural, build). To change *what*
  is checked, see `/ci-maintenance`.
- `.github/workflows/pages.yml` — on every push to `main` that touches `site/`, reruns `site-check`,
  generates the site and deploys `site/.output/public` to GitHub Pages at `index-one.io`.
- `.github/workflows/monitor.yml` — daily: the live pages, `og-image.png`, `robots.txt`,
  `sitemap.xml` and the latest public release answer.

## Non-negotiables

1. **`runs-on: ubuntu-latest`.**
2. **Least privilege.** `permissions: contents: read` at the top (`{}` when nothing is read). Only the
   deploy job gets `pages: write` + `id-token: write`; never `write-all`.
3. **`concurrency`** on deploys (`pages`, no cancel, so a deploy is never cut off).
4. **`timeout-minutes` on every job.**
5. **Pin every action to a full commit SHA** with a `# vX.Y.Z` comment. Resolve it live (below) — a
   guessed SHA fails the run.
6. **No new third-party action without the user's approval.**
7. **Secrets by name only** (`${{ secrets.NAME }}`). Never echo them. Untrusted values (PR title,
   branch name) go through `env:`, never straight into `run:`.
8. **Toolchain from the repo:** Node from `site/.nvmrc` (`node-version-file`), `cache: npm` with
   `cache-dependency-path: site/package-lock.json`, always `npm ci`.
9. **`persist-credentials: false`** on every checkout.

## Pin an action to a real SHA

```bash
tag=$(gh api repos/actions/checkout/releases/latest --jq .tag_name)
gh api repos/actions/checkout/git/ref/tags/$tag --jq '.object.type + " " + .object.sha'
# type "commit" → pin that sha
# type "tag"    → annotated tag; deref it and pin the COMMIT sha:
gh api repos/actions/checkout/git/tags/<tag-object-sha> --jq .object.sha
```

## Verify before you push

```bash
ruby -ryaml -e 'Dir[".github/workflows/*.yml"].each { |f| YAML.load_file(f) }; puts "yaml ok"'
command -v actionlint >/dev/null && actionlint || echo "(install actionlint to lint)"
```

## Deploy — GitHub Pages

- The site is fully static: every page in every language is prerendered, plus `/sitemap.xml`.
  Anything new must be static too — no request-time server routes.
- `site/public/CNAME` must stay exactly `index-one.io` (the structural check enforces it).
- Reproduce the deploy build locally: `cd site && npm ci && npm run generate`, then serve
  `.output/public` with a server that maps `/path/` to `path/index.html`.
