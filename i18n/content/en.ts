import type { SiteContent } from './types'

const content: SiteContent = {
  meta: {
    home: {
      title: 'IndexOne — local-first meeting notes for macOS, with Ivy',
      description: 'Record and transcribe meetings on your Mac, then ask Ivy, your AI, live or across every call. Local or redacted cloud AI; notes stay Markdown you own.',
    },
    features: {
      breadcrumb: 'Features',
      title: 'Features — IndexOne meeting notes for macOS',
      description: 'Workspaces, projects, imports, Ivy in meetings, Ask your vault, dual-stream transcription, receipts, Markdown export and Shared Ivy — every IndexOne feature.',
    },
    privacy: {
      breadcrumb: 'Privacy',
      title: 'Privacy and security — what never leaves your Mac | IndexOne',
      description: 'On-device transcription, SQLCipher at rest, Touch ID folder locks, a redaction firewall and consent before any cloud AI. See exactly what can leave your Mac.',
    },
    pricing: {
      breadcrumb: 'Pricing',
      title: 'IndexOne pricing — and how it compares with Obsidian, Notion and others',
      description: 'IndexOne is free during early access. Compare it with Obsidian, Notion, Evernote, Bear and Amie on recording, on-device AI, encryption and Markdown.',
    },
    changelog: {
      breadcrumb: 'Changelog',
      title: 'Changelog — what\'s new in each IndexOne release',
      description: 'Every IndexOne release for macOS, newest first: new features, fixes and downloads, with the date each version shipped.',
    },
    ogImageAlt: 'IndexOne — local-first meeting notes for macOS, with Ivy',
  },
  common: {
    skipToContent: 'Skip to content',
    homeAria: 'IndexOne home',
    primaryNav: 'Primary',
    footerNav: 'Footer',
    language: 'Language',
  },
  nav: {
    features: 'Features',
    privacy: 'Privacy',
    pricing: 'Pricing',
    compare: 'Compare',
    faq: 'FAQ',
    docs: 'Docs',
    github: 'GitHub',
    changelog: 'Changelog',
    download: 'Download',
  },
  theme: {
    label: 'Theme',
    skinsGroup: 'Theme',
    modesGroup: 'Mode',
    skins: {
      studio: { label: 'Studio', description: 'Sky on mist, soft gradient' },
      paper: { label: 'Paper', description: 'Warm parchment, built for reading' },
      minimalist: { label: 'Minimalist', description: 'Pure shadcn/ui, neutral' },
    },
    modes: { light: 'Light', dark: 'Dark', system: 'System' },
  },
  hero: {
    badgeLocal: 'Local-first · macOS',
    badgeIvy: 'On-device Ivy',
    badgeStar: 'Star on GitHub',
    githubAria: 'IndexOne on GitHub',
    titleStrong: 'Meeting notes with Ivy —',
    titleSoft: 'and you decide where it runs.',
    subHtml: 'IndexOne records your calls and transcribes them <b>on your Mac</b>. Ask Ivy live, mid-meeting, and across everything you have recorded. Run AI locally, or explicitly opt into <b>redacted cloud AI</b> — your meeting archive stays on your Mac.',
    download: 'Download for macOS',
    privacyCta: 'See how privacy works',
    note: 'Signed and notarized · macOS 13.4+ · Apple Silicon and Intel · your notes stay Markdown you own',
    videoLabel: 'A 90-second tour of IndexOne: a meeting being recorded while a note is typed alongside it, the note written afterwards and the items it pulls out, the speaker timeline, a question asked of Ivy across the whole vault and answered with sources, the knowledge graph, the Workspaces rail and on-device search, a project, People, and a Workspace refusing to open because it is sealed',
    play: 'Watch the 90-second tour',
  },
  trust: {
    aria: 'At a glance',
    items: ['On-device transcription', 'Touch ID lock at rest', 'No cloud required', 'Plain Markdown you own'],
  },
  unique: {
    eyebrow: 'Only in IndexOne',
    title: 'What no other notes app does for your meetings.',
    lead: 'Plenty of apps store notes or transcribe calls. IndexOne records both sides of the call on your Mac, lets you ask Ivy during the meeting, and proves every line it writes.',
    items: {
      'live': {
        title: 'Ask Ivy mid-meeting — and keep it on your Mac',
        body: 'Type or say a question mid-call and get an answer grounded in every meeting you have recorded, with sources you can open — the recording never pauses. Run Ivy on-device or through a local Ollama and no meeting text leaves your Mac; cloud AI stays off until you consent once.',
        link: 'How Ivy works',
      },
      'capture': {
        title: 'Both sides of the call, transcribed on your Mac',
        body: 'Your mic and the other participants\' system audio are captured as two streams and merged into a Me / Others transcript by on-device Whisper. There is no cloud transcription.',
        link: 'Capture and transcription',
      },
      'receipts': {
        title: 'Every claim has a receipt',
        body: 'Each grounded line in a note links to the second of audio it came from, with the speaker. Lines without evidence get no receipt, so you see what is verified.',
        link: 'Receipts',
      },
      'security': {
        title: 'Encrypted wherever it is stored',
        body: 'Your whole library is SQLCipher-encrypted on the Mac. Anything you share is sealed with AES-256-GCM before upload, so the server only ever holds ciphertext — and sign-in uses OPAQUE, so it never learns your password.',
        link: 'Security and privacy',
      },
      'locks': {
        title: 'Folders sealed with Touch ID',
        body: 'Lock a Workspace or folder and its notes, transcripts and audio are sealed with AES-256-GCM. While locked it is invisible to search, the graph, MCP and the audio player.',
        link: 'The lock model',
      },
      'markdown': {
        title: 'Plain Markdown and a local MCP server',
        body: 'Notes land in your Obsidian vault as plain Markdown with wikilinks, and a read-only MCP server on 127.0.0.1 lets Claude and other agents query them.',
        link: 'Markdown and MCP',
      },
    },
    seeAll: 'See every feature',
  },
  how: {
    eyebrow: 'How it works',
    title: 'Record → understand → ask. Local-first by design.',
    lead: 'One local-first pipeline turns a live call into searchable memory. Transcription stays on your Mac; Ivy can run locally or, with explicit consent, use redacted cloud processing.',
    steps: [
      {
        label: '01 · Record',
        title: 'Hears the whole call',
        body: 'Your mic <b>and</b> the other side\'s system audio, captured and transcribed separately, then merged into a clean <b>Me / Others</b> transcript by on-device Whisper.',
      },
      {
        label: '02 · Understand',
        title: 'Ivy, on your Mac',
        body: 'A reasoning model runs locally over a semantic index of everything you\'ve recorded — writing a structured note and keeping the memory searchable forever.',
      },
      {
        label: '03 · Ask',
        title: 'Answers, live and cited',
        body: 'Ask Ivy mid-meeting and get a grounded answer with <b>sources</b> — or ask across months of calls afterwards. The recording never stops.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Security & Privacy',
    title: 'Privacy isn\'t a setting. It\'s the architecture.',
    leadHtml: 'IndexOne is designed so transcription, search and on-device Ivy can run <b>with no network at all</b> — once you switch off the one thing that does reach out: a launch-time check for a new version. If you choose cloud AI, consent and a redaction firewall sit in front of that egress.',
    cards: {
      'offline': {
        title: 'Nothing leaves the device',
        body: 'With an on-device model you download once, or Ollama, your audio and transcripts never touch a network. The reasoning happens on your Mac.',
      },
      'at-rest': {
        title: 'Two encryption layers at rest',
        body: 'The whole database is SQLCipher-encrypted. On top, a per-folder <b>AES-256-GCM</b> lock adds content keys wrapped by a master key released only by <b>Touch ID</b>.',
      },
      'gated': {
        title: 'Every read is gated',
        body: 'A sealed, locked folder leaks nothing — across the app, search, the graph, MCP, even the audio path. Locked meetings simply show as <b>Locked</b>.',
      },
      'seals': {
        title: 'Seals verify before they destroy',
        body: 'IndexOne proves the ciphertext decrypts back <b>before</b> it ever blanks the plaintext — content is never lost, and locking is fully reversible.',
      },
      'screen-share': {
        title: 'Screen-share aware',
        body: 'A watcher can auto-relock sealed folders and wipe the cached key the moment screen sharing is detected — so a shared screen can\'t spill private notes.',
      },
      'firewall': {
        title: 'Redaction firewall',
        body: 'If you ever opt into a cloud summarizer, emails, card-like numbers and phone numbers are scrubbed first — and cloud egress is <b>fail-closed</b> behind a one-time consent. Download the optional name-masking model and people\'s names are replaced too.',
      },
      'update-check': {
        title: 'The one call we make by default',
        body: 'At launch IndexOne asks GitHub whether a newer version exists. The request says which version you are running, because that is how it asks the question — and nothing else: no meetings, no notes, no account. You can switch it off in <b>Settings → Privacy</b>. It is the only thing on this page that happens without you asking for it, which is exactly why it is on this page.',
      },
    },
    tableCaption: 'Where each AI provider runs, and whether meeting text leaves your Mac',
    tableHeaders: ['Ivy / provider', 'Where it runs', 'Does meeting text leave your Mac?'],
    providers: {
      'on-device': { name: 'On-device Ivy', note: 'Bielik / Qwen', where: 'Fully local' },
      'ollama': { name: 'Ollama', where: 'Fully local' },
      'claude-code': { name: 'Claude Code', note: 'default summarizer', where: 'Local CLI → cloud' },
      'codex': { name: 'Codex', note: 'OpenAI\'s CLI, run tool-free', where: 'Local CLI → cloud' },
      'anthropic': { name: 'Anthropic API', note: 'bring your own key', where: 'Direct HTTPS' },
      'gateway': { name: 'AI Gateway', note: 'any OpenAI-compatible endpoint — LiteLLM, Kong, Portkey, vLLM…', where: 'Direct HTTPS' },
    },
    leavesYes: 'Only after consent; redaction firewall applied',
    leavesNo: 'No',
    shotAlt: 'IndexOne privacy settings, stating in plain language what is removed before any text leaves, which providers are cloud, and whether cloud processing has been allowed',
    footnote: 'IndexOne tells you, in plain language, exactly what leaves your Mac — and every cloud AI call is logged and shown back to you. Your meetings stay on-device unless you opt in. One model picker is used across every AI surface, and it always accepts a model id you type yourself — so a model released after this build still works.',
  },
  features: {
    eyebrow: 'What you get',
    title: 'A meeting tool that actually remembers.',
    lead: 'One encrypted store, three ways to use it — the app, a local MCP server, and your exported Markdown files. One tree holds everything, projects sit on top of it, and Ivy reads all of it.',
    items: {
      'workspaces': {
        eyebrow: 'Workspaces',
        title: 'One tree for everything',
        body: 'A single tree — <b>Workspaces › folders › your recordings and notes</b> — in one sidebar that collapses to a rail when you want the room. Lock a Workspace and everything inside it is sealed with it.',
        points: [
          'Recordings, notes, tasks and projects file into the same place',
          'A sealed Workspace shows its name and nothing else — no counts, no contents',
          'Ask Ivy to file a stray recording for you',
          'Deleted by mistake? Trash keeps it for 30 days — or however long you set, up to a year',
        ],
        alt: 'The Workspaces sidebar: one tree of Workspaces and folders holding recordings, notes and projects, with a locked Workspace at the bottom',
      },
      'dashboards': {
        eyebrow: 'Projects',
        title: 'Projects you compose',
        body: 'Pull notes, recordings, documents, people, promise ledgers and reminders into a project, then read it through <b>Brief / Overview / Commitments / Sources / People</b> lenses. Pin a <b>living answer</b> — a saved question whose last answer is kept with the date it was given, re-answered when you ask, and withheld the moment its sources stop being readable. You can ask a project directly, grounded only in what\'s in it.',
        points: [
          'Seven kinds of tile — a note, a recording, a document, a person, a promise ledger, a reminders list, or a living answer',
          'Five lenses over the same tiles — no second copy of anything',
          'A project states its own boundary: what it can read, and what it derived',
        ],
        alt: 'A project in its Brief lens: the saved answer to a pinned question, what needs attention, and the recent evidence behind it',
      },
      'imports': {
        eyebrow: 'Imports',
        title: 'Bring your existing notes',
        body: 'Settings → Imports pulls in a <b>Notion export</b>, an <b>Obsidian vault</b>, <b>Apple Notes</b>, a folder of <b>Markdown files</b>, or an <b>IndexOne backup</b>. Entirely offline — no account, no key, no network call. Every import is a dry run first, so you see what it would write before it writes anything.',
        points: [
          'Five sources: a Notion export, an Obsidian vault, Apple Notes, a folder of Markdown files, an IndexOne backup',
          'Dry run first — nothing is written until you say so',
          'Imported notes land in their own named folder, and Ivy reads them like everything else',
        ],
        alt: 'Settings → Imports: Notion, Obsidian, Apple Notes, Markdown files and IndexOne backup, with the note that everything happens on this Mac and nothing is uploaded',
      },
      'ivy': {
        eyebrow: 'Ivy',
        title: 'Talk to Ivy — during the meeting.',
        body: 'This is the part most note-takers don\'t have. Trigger Ivy with a wake phrase or a single tap; it answers out of your meeting memory, live, with citations you can open — and the recording never stops.',
        points: [
          'On-device reasoner (Bielik-11B, Qwen) via Metal',
          'Grounded, not hallucinated — retrieved from your own transcripts',
          'Optional consent-gated web — off by default',
        ],
        alt: 'A recording in progress with a question asked mid-meeting, answered live by Ivy with the sources it drew on',
      },
      'ask': {
        eyebrow: 'Ask your vault',
        title: 'Ask across months of calls.',
        body: 'Ivy again, pointed at everything you have ever recorded and written. Every answer arrives with the meetings and notes it was drawn from, so you can open the source instead of taking its word.',
        points: [
          'Narrow a question to one Workspace or folder — the whole subtree, and nothing outside it',
          'Conversations are remembered — vault, note and meeting threads persist, with a history browser on each surface',
          'A conversation disappears the instant any folder it drew on stops being readable',
        ],
        alt: 'Asking Ivy across months of meetings and getting one answer, with the meetings it was drawn from listed underneath',
      },
      'transcription': {
        eyebrow: 'Capture & transcribe',
        title: 'It hears both sides of the call.',
        body: 'Dual-stream recording captures your mic and the other side\'s system audio, transcribes each independently on-device, and merges them by wall-clock into a clean Me / Others transcript with live captions as you speak.',
        points: [
          'On-device Whisper — tiny through large-v3, including the faster turbo build, plus quantized variants',
          'Two-stream attribution: you and everyone else, plus voice-activity detection',
          'A floating recorder bar — record from anywhere (⌘⇧R)',
        ],
        alt: 'The merged Me / Others transcript, time-indexed, beside the speaker and topic timeline',
      },
      'memory': {
        eyebrow: 'Notes & memory',
        title: 'Structured notes and a graph that builds itself.',
        body: 'Every call becomes a clean note — summary, decisions, action items, quotes. Recordings and notes live side by side in the same Workspace. People and projects are extracted automatically into a knowledge graph, and sealed Workspaces stay hidden from it.',
        points: [
          'Ask across every meeting with hybrid semantic search',
          'Entity dossiers, related meetings, weekly digests',
          'Private reminders that never leave the Mac, each linked back to the recording or note it came from — Ivy proposes, you accept',
          'Action items can also push to Apple Reminders',
          'Feed it PDFs, Office docs, web pages and images — indexed for Ivy, on-device',
        ],
        alt: 'The knowledge graph — meetings, notes, documents and people as one map, with typed links between them',
      },
      'receipts': {
        eyebrow: 'Receipts',
        title: 'Every claim traces back to the tape.',
        body: 'IndexOne\'s notes don\'t ask you to trust them. Each line that\'s grounded in what was actually said carries a receipt — click it to jump straight to that second of audio, with the speaker. Paraphrased or unsupported lines get none, so you can see at a glance what\'s verified.',
        points: [
          'Click a claim, hear exactly where it came from',
          'The speaker and the exact second on every receipt',
          'Seven one-click artifacts from any meeting — follow-up email, decision log, work ticket, 1:1 recap, standup, sales recap, interview notes',
          'Sealed folders leak no timing or speaker, ever',
        ],
        alt: 'A generated note\'s receipts: one row per grounded claim, each carrying the speaker and the second of audio it came from',
      },
      'markdown': {
        eyebrow: 'Yours to keep',
        title: 'Plain Markdown. No lock-in.',
        body: 'Every note is also exported as atomic Markdown — YAML front-matter, <code>[[wikilinks]]</code>, block deep-links, and a canvas board option. They\'re just plain files you own, openable in any editor.',
        points: [
          'An encrypted SQLite database is the single source of truth',
          'A read-only local MCP server for Claude Desktop and Claude Code',
          'Plain Markdown exports you can open in any editor',
        ],
        alt: 'A structured note — summary, decisions, action items and quotes — beside the recordings and notes it links to',
      },
      'notes': {
        eyebrow: 'Notes',
        title: 'Not just meeting notes. All your notes.',
        body: 'A full Markdown editor, filed in the same Workspaces as your recordings — for anything you write, not just what IndexOne transcribes. Select any passage and the Ivy menu appears: refine, shorten, change tone, translate, fact-check, or just type what you want done.',
        points: [
          'Nineteen Ivy actions, one keystroke away',
          'Grounded in your own meetings and notes, not the model\'s guesses',
          'Paste screenshots into notes; they stay local and follow the Workspace\'s lock',
        ],
        alt: 'The note editor with a text selection and the Ivy command menu open, showing Refine, Shorten, Change tone and more actions',
      },
      'shared-ivy': {
        eyebrow: 'Shared Ivy',
        title: 'Work as a team, still end-to-end encrypted.',
        body: 'Publish a note or meeting summary into your organization\'s Shared Ivy and it stays in sync for every member as you edit. Everything is sealed on your Mac before it ever leaves — the server only ever stores ciphertext, wrapped keys and public keys.',
        points: [
          'AES-256-GCM sealed under an organization content key before upload',
          'Verify before publish — the same discipline as locking a folder',
          'Per-document permissions — the author sets <b>View only</b> or <b>Can edit</b> on each shared document',
          'Belong to more than one organization — each gets its own encrypted feed',
          'Shared <b>Tasks</b> — assignees, due dates, subtasks and the same permissions; tasks live inside an organization, so they need a signed-in account',
        ],
        alt: 'The Shared Ivy view: meetings and notes your organizations have shared with you, each with its author and organization',
      },
    },
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'Free during early access.',
    lead: 'Local recording, transcription, notes and Markdown exports need no account or payment. Pricing and availability beyond early access will be announced separately.',
    plans: {
      free: {
        name: 'Free',
        badge: 'Available now',
        price: '$0',
        per: '/ early access',
        tagline: 'Local recording, transcription, notes and exports.',
        points: [
          'Unlimited on-device recording and transcription',
          'Ivy in meetings, plus Ask your vault',
          'Semantic search and the automatic knowledge graph',
          'Standalone notes with an Ivy-assisted editor',
          'End-to-end encrypted sharing with per-document View only / Can edit (account required)',
          'Workspaces, composable projects, and offline Notion / Obsidian / Apple Notes / Markdown import',
          'Encrypted share links with an expiry, an optional password and an open-count cap',
          'Per-Workspace and per-folder Touch ID lock with AES-256 encryption',
          'Screen-share auto-relock',
          'Local MCP server and Markdown export',
        ],
        cta: 'Download for macOS',
      },
      pro: {
        name: 'Pro',
        badge: 'Coming soon',
        price: 'Planned',
        tagline: 'Pricing and availability to be announced.',
        points: [
          'Everything in Free',
          'End-to-end encrypted sync across your Macs and iPhone',
          'Zero-knowledge encrypted cloud backup',
          'Optional low-latency managed Ivy (redacted)',
          'Custom recipes and automations',
        ],
        cta: 'Follow on GitHub',
      },
      team: {
        name: 'Team',
        badge: 'Coming soon',
        price: 'Planned',
        tagline: 'Pricing and availability to be announced.',
        points: [
          'Everything in Pro',
          'SSO and SCIM provisioning',
          'Security policy, retention and audit log',
          'Priority support and SLA',
        ],
        cta: 'Talk to us',
      },
    },
  },
  compare: {
    eyebrow: 'Competition',
    title: 'How IndexOne compares.',
    lead: 'Obsidian, Notion, Evernote, Bear and Amie are good at what they do. IndexOne is built for what happens in a meeting — recording it, transcribing it on your Mac and asking about it — and it can write into your Obsidian vault too.',
    capability: 'Capability',
    caption: 'IndexOne compared with other note apps',
    labels: { yes: 'Yes', partial: 'Partly', no: 'No', unknown: 'Unknown' },
    notStated: 'Not stated',
    footnote: 'Based on each vendor\'s public pricing and feature pages, checked in October 2026. Plans and features change — check the vendor\'s site before you decide. Product names are trademarks of their owners; IndexOne is not affiliated with them.',
    rows: {
      'capture': {
        criterion: 'Records both sides of a call',
        cells: ['Mic and system audio, as two streams', 'Microphone only (core Audio recorder)', 'Desktop app; mic only in the browser', 'Desktop meeting recorder', 'No recording', 'Desktop, without a bot'],
      },
      'local-transcription': {
        criterion: 'Transcription on your device',
        cells: ['On-device Whisper; no cloud transcription', 'No built-in transcription', 'Cloud', 'Cloud', 'No transcription', 'Cloud'],
      },
      'local-ai': {
        criterion: 'AI that can run fully on your device',
        cells: ['On-device Ivy or a local Ollama', 'No built-in AI; community plugins', 'Cloud only', 'Cloud only', 'No built-in AI', 'Cloud only'],
      },
      'ask-all': {
        criterion: 'Ask across every past meeting and note',
        cells: ['Answers cite their sources', 'Community plugins only', 'Business plan; cites sources', 'AI Assistant across notes; meeting AI per recording', '', 'Past-recording chat on Pro; citations not stated'],
      },
      'local-data': {
        criterion: 'Data stays on your device by default',
        cells: ['', 'Local files', 'Notion\'s cloud', 'Evernote\'s cloud', 'Local database; iCloud sync with Pro', 'Amie\'s cloud'],
      },
      'markdown': {
        criterion: 'Notes as plain Markdown files you own',
        cells: ['Written to your vault; encrypted database is the source', '', 'Markdown export only', 'ENEX, HTML or PDF export', 'Database; Markdown export', ''],
      },
      'encryption': {
        criterion: 'Encryption you control',
        cells: ['Encrypted database, Touch ID folder locks, end-to-end encrypted sharing', 'End-to-end encryption for the paid Sync', 'Encrypted on Notion\'s servers; not end-to-end', 'Passphrase for selected text only', 'Single notes, with Pro', ''],
      },
      'platforms': {
        criterion: 'Platforms',
        cells: ['macOS', 'macOS, Windows, Linux, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, iOS, iPadOS, web (beta)', 'macOS, Windows, iOS'],
      },
      'price': {
        criterion: 'Price',
        cells: ['Free during early access', 'Free; Sync from $4/month billed yearly', 'Free; AI and meeting notes need Business, $20/month billed yearly', 'Free up to 50 notes; Starter $99/year', 'Free; Pro $29.99/year', 'Free with 25 note credits; Pro from €20/month billed yearly'],
      },
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions people ask first.',
    leadHtml: 'Short answers here; the <a href="/docs.html">documentation</a> has the details.',
    items: [
      {
        question: 'Is IndexOne free?',
        answer: 'Yes, during early access. Local recording, transcription, notes and exports need no account and no payment. Pricing beyond early access will be announced separately.',
      },
      {
        question: 'Does my audio go to the cloud?',
        answer: 'No. Transcription always runs on your Mac. Only redacted text can leave, and only to a cloud AI you chose and consented to.',
      },
      {
        question: 'What is Ivy?',
        answer: 'Ivy is the AI inside IndexOne. Ask it during a meeting without stopping the recording, or afterwards across everything you have recorded and written. Every answer cites the meetings and notes it came from. Ivy can run fully on your Mac, through a local Ollama, or — after explicit consent — through a redacted cloud provider.',
      },
      {
        question: 'Do I need an internet connection?',
        answer: 'Once, to download a Whisper model. After that, recording, transcription, search and on-device Ivy work offline. Cloud AI connections, connectors and sharing need a connection.',
      },
      {
        question: 'Do I need Claude Code?',
        answer: 'Only if you keep it as the note writer. You can pick Codex, the Anthropic API, an OpenAI-compatible AI gateway, a local Ollama, or an on-device model instead.',
      },
      {
        question: 'Which languages does it support?',
        answer: 'Whisper transcribes many languages. For on-device AI you can choose multilingual Qwen3 models or Polish-native Bielik models.',
      },
      {
        question: 'Why does macOS ask for Screen & System Audio Recording?',
        answer: 'That permission is how macOS lets an app hear other apps\' audio — the other people on the call. IndexOne saves audio only.',
      },
      {
        question: 'Does it work with headphones and on Intel Macs?',
        answer: 'Yes to both. The other side\'s audio is captured from the system, not from your speakers, and the app is a universal build. Large on-device models run best on Apple Silicon.',
      },
      {
        question: 'Is IndexOne open source?',
        answer: 'No. The app is free to download and use, but its source code is not public. Versions 2.8.0 and earlier were originally published under the GNU AGPL-3.0 while their source code was public.',
      },
    ],
  },
  changelog: {
    eyebrow: 'Changelog',
    title: 'What\'s new in IndexOne',
    lead: 'Every release of the macOS app, newest first. Download the latest version, or see all builds and checksums on GitHub.',
    download: 'Download the latest',
    github: 'All releases on GitHub',
    latest: 'Latest',
    englishNote: 'Release notes are published in English.',
  },
  cta: {
    title: 'Bring Ivy to your meetings — keep control on your Mac.',
    lead: 'Local-first for macOS. Keep AI local, or explicitly opt into redacted cloud AI when you choose.',
    compare: 'See how it compares with Obsidian, Notion, Evernote, Bear and Amie.',
    download: 'Download for macOS',
    github: 'View on GitHub',
    legacyHtml: 'Running version 2.8.0 or earlier? Its update check can no longer reach us. Download the <a href="{download}">latest release</a> once and drag it into Applications, replacing the old copy; your library, recordings and settings stay where they are. From 2.9.0 on, the app finds new versions by itself.',
  },
  footer: {
    legalHtml: 'macOS-first · on-device Ivy · local-first · built with Tauri, Angular and Rust · free for macOS · © {year} <a href="{authors}">MonoOne</a> · text <a href="{license}">CC BY 4.0</a>',
  },
}

export default content
