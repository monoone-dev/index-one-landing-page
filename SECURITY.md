# Security policy

IndexOne's privacy promise depends on its security, so we take reports seriously and are grateful for
them.

## Reporting a vulnerability

**Please do not open a public issue, discussion or pull request for a security problem.**

Report it privately through GitHub:

1. Go to the [Security tab](https://github.com/monoone-dev/index-one-landing-page/security) of this repository.
2. Choose **Report a vulnerability**
   ([direct link](https://github.com/monoone-dev/index-one-landing-page/security/advisories/new)).
3. Describe the issue. Only you and the maintainers can see the report.

Please include:

- the IndexOne version (Settings → About) and macOS version, and whether the Mac is Apple Silicon or Intel;
- what an attacker can do, and what they need first (local access, a shared screen, a malicious link…);
- steps to reproduce, ideally with a minimal proof of concept;
- whether you have told anyone else.

**Use test data only.** Do not send real meeting audio, transcripts, notes, account passwords, API
keys or MCP tokens — yours or anyone else's. If the app's diagnostics bundle helps, attach it to the
private report only: it holds no note text, but it can contain file paths that include your macOS
user name.

## What to expect

- We acknowledge a report within **5 business days**.
- We keep you updated while we investigate, and tell you when a fix ships.
- We credit you in the release notes and the advisory, unless you ask us not to.
- Please give us a reasonable time to release a fix before you disclose publicly. We aim to fix
  critical issues within **30 days**.

We will not take legal action against research done in good faith that follows this policy, avoids
harming users and their data, and stops at proving the issue.

## Supported versions

Security fixes go into the **latest release** only. Please update before reporting, and check whether
the problem still reproduces.

## Scope

In scope:

- **The IndexOne macOS app** — for example: content from a locked Workspace or folder becoming readable
  without unlocking (in the app, search, the graph, the MCP server, exports or the audio player);
  meeting text reaching a cloud provider without consent or without redaction; the local MCP server
  being reachable from another machine or without its token; key material in logs; signature or
  notarization problems with a published DMG.
- **Sharing** — the end-to-end encryption of shared notes, share links and Shared Ivy, and the
  account sign-in; for example, the relay or a third party being able to read shared content.
- **This repository and [index-one.io](https://index-one.io)** — for example, a way to change what
  a visitor downloads.

Out of scope:

- anything that requires an already unlocked, logged-in Mac under the attacker's control;
- data a user deliberately sends to a cloud provider they enabled;
- denial of service against the sharing relay, spam and social engineering;
- findings from automated scanners without a demonstrated impact.

## Verifying a download

Every release is signed with an Apple Developer ID and notarized by Apple. To check a DMG before
installing:

```bash
spctl -a -vvv -t open --context context:primary-signature ~/Downloads/IndexOne-<version>.dmg
xcrun stapler validate ~/Downloads/IndexOne-<version>.dmg
```

`spctl` should report `accepted` and `source=Notarized Developer ID`. Only download IndexOne from this
repository's [Releases page](https://github.com/monoone-dev/index-one-landing-page/releases) or from
[index-one.io](https://index-one.io).
