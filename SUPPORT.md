# Getting help with Murmur

## Start with the docs

- [Documentation](https://murmurnotes.io/docs.html) — setup, every feature, settings and shortcuts.
- [Your first recording](https://murmurnotes.io/docs.html#first-recording)
- [What never leaves your Mac](https://murmurnotes.io/docs.html#data-flow)
- [Known limitations](https://murmurnotes.io/docs.html#known-limitations) — what is not shipped yet,
  or only works on a signed build.
- [Use Murmur with your own AI agent](docs/use-with-your-agent.md)
- [FAQ in the README](README.md#faq)

## Where to ask

| You want to… | Go to |
| --- | --- |
| Report something that is broken | [Bug report](https://github.com/murmur-io/murmur-notes/issues/new?template=bug_report.yml) |
| Suggest a feature or an improvement | [Feature request](https://github.com/murmur-io/murmur-notes/issues/new?template=feature_request.yml) |
| Ask how to do something | [Discussions → Q&A](https://github.com/murmur-io/murmur-notes/discussions/categories/q-a) |
| Report a security problem | [Private vulnerability report](https://github.com/murmur-io/murmur-notes/security/advisories/new) — never a public issue. See [SECURITY.md](SECURITY.md). |
| Fix a typo on the website or in the docs | A pull request — see [CONTRIBUTING.md](CONTRIBUTING.md). |

Before opening an issue, search the [existing issues](https://github.com/murmur-io/murmur-notes/issues?q=is%3Aissue)
— someone may have reported it already. A thumbs-up on an existing issue helps us prioritize.

## Keep your meetings out of public issues

Everything in issues and discussions is **public**. Do not paste:

- transcripts, notes, meeting titles or attendee names;
- audio files, or screenshots that show real content;
- API keys, account passwords, share-link passwords or your MCP token;
- the diagnostics bundle (see below).

Describe the problem with made-up content instead. If we need something sensitive to fix a bug, we will
ask for a private channel.

## Information that helps

- **Murmur version** — Settings → About.
- **macOS version** — Apple menu → About This Mac.
- **Your Mac** — Apple Silicon (M1 or later) or Intel.
- **The AI connection** you use for notes (Murmur Brain on-device, Ollama, Claude Code, Codex,
  Anthropic API or Kong AI Gateway), if the problem involves notes or answers.
- **The exact text** of any error message.

### The diagnostics bundle — keep it private

For crashes and hangs, Murmur can export its log as one file: Settings → Developer → turn on
**Developer mode**, open **Logs**, choose **Save diagnostics bundle**. The file,
`murmur-diagnostics.txt`, is saved in `~/Library/Application Support/MeetNotes/`.

The log holds stage names, counts and errors — never note text, transcripts, titles or keys — but it
**can contain file paths from your Mac, and those include your macOS user name**. So:

- **do not attach it to an issue or a discussion**;
- say in your bug report that you have one; if we need it, we will ask for it through a private
  channel;
- read it before you send it anywhere.

## Deleting a sharing account

Uninstalling Murmur does not delete a sharing account, and the app has no button for it yet. Start a
[Q&A discussion](https://github.com/murmur-io/murmur-notes/discussions/categories/q-a) titled
"Account deletion" with no personal details in it, and we will reply with a private way to confirm the
account is yours.

## Response times

Murmur is made by a small team. We read every issue, but we can't promise a response time or support
for anything other than the latest release.
