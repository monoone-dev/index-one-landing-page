---
name: project-context
description: Use before planning, changing or verifying index-one-landing-page public website; explains domain, architecture, commands and verification boundaries.
---

# index-one-landing-page public website

Read this repository AGENTS.md first; workspace git policy and current owner instructions take precedence. Read the relevant project card, then confirm paths and commands in source.

Nuxt 4/Nuxt UI/Vue/TypeScript static website. app/pages, app/components, app/data, i18n and public assets. Use existing site-content, ci-maintenance and pr-description skills.

npm ci and npm run dev; package-lock.json, never pnpm. Public copy must describe observed released behavior; preserve brand names and translated locale keys.

Use npm test for existing locale checks, npm run typecheck and npm run generate for affected site changes. Read the existing ci-maintenance skill and Pages workflow for baseURL/static-output checks; inspect the changed routes at desktop and mobile widths.

Everything here is public immediately. No private history, source, paths, identities or links. Apply existing privacy checks before push. A task never edits release notes or release assets. Publication and app releases need their own authorized scope.

Add tests only when explicitly requested. Run narrow checks for the change; full gates, version bumps and releases belong only to an owner-requested release. Report exact revision and distinguish static checks, mocked runtime, native runtime and production evidence.
