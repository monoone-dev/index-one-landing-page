# Working in this repository

This is `murmur-io/murmur-notes`, Murmur's public repository: the website (`site/`), the user docs,
the skill pack, the release notes and the downloads. Everything committed or pushed here is public
at once, and stays public.

Rules for every person and every coding agent working here:

- **No AI attribution.** No AI co-author trailer, no "generated with" footer and no tool named as an
  author, in commits, pull requests, tags or release notes. The author is the person who opens the
  pull request.
- **Conventional Commits.** Branch `<type>/<kebab-slug>`; commit header and pull-request title
  `<type>(<scope>): <subject>`, at most 100 characters.
- **Pull requests only.** Never push to `main`. Push a branch and open a pull request; every pull
  request needs the approval of @JakubGawr.
- **Maintainers run their privacy check before every push.** It is kept outside this repository.
  If you cannot run it, do not push; ask a maintainer.
- **Nothing private.** No links to private repositories, no source code, and no names, email
  addresses, file paths or meeting content from anyone's machine. Use made-up examples.
- **No third-party requests from the site.** No analytics, no CDN fonts, no external scripts, no
  `fetch` calls, no inline `data:` URIs.
- `docs/use-with-your-agent.md` and `vault-skills/` are copied here from the app's source with each
  release; do not edit them here.
