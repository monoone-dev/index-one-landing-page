// Conventional Commits for commit messages and PR titles (see .agents/skills/pr-description in the repo root).
const TYPES = ['feat', 'fix', 'refactor', 'chore', 'docs', 'test', 'perf', 'ci', 'build', 'style', 'revert']

// No AI attribution of any kind: co-author trailers, "generated with" footers, tool names as authors.
const AI_ATTRIBUTION = /co-authored-by:.*(claude|anthropic|codex|openai|copilot|gpt|gemini)|generated (with|by) .*(claude|codex|copilot|chatgpt|ai)/i

export default {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        'no-ai-attribution': ({ raw }) => [
          !AI_ATTRIBUTION.test(raw ?? ''),
          'remove the AI attribution (co-author trailer or "generated with" footer)'
        ]
      }
    }
  ],
  rules: {
    'type-enum': [2, 'always', TYPES],
    'header-max-length': [2, 'always', 100],
    'subject-case': [2, 'always', 'lower-case'],
    'no-ai-attribution': [2, 'always']
  }
}
