import type { SiteContent } from './types'

const content: SiteContent = {
  meta: {
    home: {
      title: 'IndexOne — meeting notes and transcription for Mac, with Ivy',
      description: 'Record and transcribe meetings on your Mac, then ask Ivy, its on-device AI, live or across every call. For you alone or your whole organization.',
    },
    features: {
      breadcrumb: 'Features',
      title: 'Features — meeting transcription, Ivy and notes for Mac',
      description: 'Two-stream meeting transcription on your Mac, Ivy during calls, Ask across every meeting, receipts, projects, plugins, local AI servers and Markdown.',
    },
    privacy: {
      breadcrumb: 'Privacy',
      title: 'IndexOne privacy — on-device AI and what leaves your Mac',
      description: 'On-device transcription and AI, an encrypted library, Touch ID folder locks and a redaction firewall. See what each AI choice sends, and when.',
    },
    pricing: {
      breadcrumb: 'Pricing',
      title: 'IndexOne pricing — compared with Obsidian, Notion and others',
      description: 'IndexOne is free on the Mac; optional cloud plans start at 49 PLN/month. Compare it with Obsidian, Notion, Evernote, Bear and Amie on recording, transcription, on-device AI and Markdown.',
    },
    changelog: {
      breadcrumb: 'Changelog',
      title: 'IndexOne changelog — release notes for the Mac app',
      description: 'Release notes for every IndexOne version for Mac, newest first: new features for Ivy, organizations and privacy, fixes, downloads and release dates.',
    },
    ogImageAlt: 'IndexOne — meeting notes and transcription for Mac, with Ivy',
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
    subHtml: 'IndexOne records your calls and transcribes them <b>on your Mac</b>. Ask Ivy live, mid-meeting, and across everything you have recorded. Run AI on your Mac or your own local AI server, or explicitly opt into <b>redacted cloud AI</b>. In the On this Mac space, your meeting archive stays on your Mac.',
    download: 'Download for macOS',
    privacyCta: 'See how privacy works',
    note: 'Signed and notarized · macOS 13.4+ · Apple Silicon (M1 or later) · your notes stay Markdown you own',
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
        body: 'Type or say a question mid-call and get an answer grounded in every meeting you have recorded, with sources you can open — the recording never pauses. Choose Ivy on this Mac and no meeting text leaves your Mac; Claude Code and Codex stay off until you consent once.',
        link: 'How Ivy works',
      },
      'capture': {
        title: 'Both sides of the call, transcribed on your Mac',
        body: 'Your mic and the other participants\' system audio are captured as two streams and merged into a Me / Others transcript by on-device Whisper. In the On this Mac space there is no cloud transcription.',
        link: 'Capture and transcription',
      },
      'receipts': {
        title: 'Every claim has a receipt',
        body: 'Each grounded line in a note links to the second of audio it came from, with the speaker. Lines without evidence get no receipt, so you see what is verified.',
        link: 'Receipts',
      },
      'security': {
        title: 'Encrypted on your Mac',
        body: 'Your whole library is SQLCipher-encrypted on the Mac. Personal and every organization you belong to keep an encrypted copy here too, so they open without a network connection.',
        link: 'Security and privacy',
      },
      'locks': {
        title: 'Folders sealed with Touch ID',
        body: 'Lock a Workspace or folder and its notes, transcripts and audio are sealed with AES-256-GCM. While locked it is invisible to search, the graph, MCP and the audio player.',
        link: 'The lock model',
      },
      'markdown': {
        title: 'Plain Markdown and a local MCP server',
        body: 'Notes land in your Obsidian vault as plain Markdown with wikilinks, and a read-only MCP server on 127.0.0.1 lets Claude and other agents query them. You choose which workspaces it can read; organizations are off until you turn them on.',
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
    lifecycle: {
      "title": "Data lifecycle · cloud plans",
      "items": [
        {
          "title": "How long is data kept?",
          "body": "Cloud audio defaults to 30 days, with up to 90 days planned for Personal and Team within storage limits. Notes, transcripts and ordinary files stay until their owner deletes them, within storage limits."
        },
        {
          "title": "What happens after a downgrade?",
          "body": "Cancellation takes effect at the end of the paid period. Read, export and delete remain available for content you can access."
        },
        {
          "title": "Who keeps organization data when I leave?",
          "body": "Organization content stays with the organization. Leaving or losing access removes your ability to read or export it."
        }
      ]
    },
    eyebrow: 'Security & Privacy',
    title: 'Privacy isn\'t a setting. It\'s the architecture.',
    leadHtml: 'In the On this Mac space, transcription, search and Ivy on this Mac can run <b>with no network at all</b> — once you switch off the two things that reach out by default: a launch-time check for a new version and a daily usage message. If you choose Claude Code or Codex, consent and a redaction firewall sit in front of that egress.',
    cards: {
      'offline': {
        title: 'Nothing leaves the device',
        body: 'With Ivy on this Mac and a model you download once, your audio and transcripts never touch a network. The reasoning happens on your Mac.',
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
        title: 'The two calls we make by default',
        body: 'At launch IndexOne asks GitHub whether a newer version exists; the request says which version you are running, and nothing else. Once a day it also sends one small usage message: a random install ID, the app and macOS versions, the chip type, the language and whether you are signed in — no meetings, notes, recordings or names. It is anonymous only while you are signed out; when you are signed in, it is sent with your account. Switch off either one in <b>Settings → Privacy</b>. They are the only things on this page that happen without you asking, which is exactly why they are on this page.',
      },
    },
    tableCaption: 'Where each AI provider runs, and whether meeting text leaves your Mac',
    tableHeaders: ['Ivy / provider', 'Where it runs', 'Does meeting text leave your Mac?'],
    providers: {
      'on-device': { name: 'Ivy on this Mac', note: 'Bielik / Qwen', where: 'Fully local' },
      'ivy-web': { name: 'Ivy on the web', note: 'Personal and organizations', where: 'IndexOne on the web', leaves: 'Yes — the space itself lives on the web' },
      'claude-code': { name: 'Claude Code', where: 'Local CLI → cloud' },
      'codex': { name: 'Codex', note: 'OpenAI\'s CLI, run tool-free', where: 'Local CLI → cloud' },
      'local-server': { name: 'Local AI server', note: 'Ollama, LM Studio, oMLX and others', where: 'Your Mac or your network', leaves: 'Not with a server on this Mac. A server elsewhere on your network only after you confirm its address; names are masked first' },
    },
    leavesYes: 'Only after consent; redaction firewall applied',
    leavesNo: 'No',
    shotAlt: 'IndexOne privacy settings, stating in plain language what is removed before any text leaves, which providers are cloud, and whether cloud processing has been allowed',
    footnote: 'IndexOne tells you, in plain language, exactly what leaves your Mac — and every cloud AI call is logged and shown back to you. Each space has one AI choice: Ivy on this Mac, Ivy on the web, Claude Code, Codex or your own local AI server. In the On this Mac space, meetings stay on your Mac unless you choose Claude Code, Codex or a local AI server elsewhere on your network.',
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
          'Bring your own model: notes and answers can come from Ollama, LM Studio, oMLX, llama.cpp or any OpenAI-compatible server',
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
          'Ivy skills from the Plugins screen guide notes and answers written by Ivy in the cloud — pick them in the Ivy window, a note or the recording bar',
        ],
        alt: 'The note editor with a text selection and the Ivy command menu open, showing Refine, Shorten, Change tone and more actions',
      },
    },
  },
  offer: {
    "web": "Open web app",
    "status": "Cloud plans are on sale. Sign in to the web app to buy a plan or manage your subscription. Local Mac features remain available.",
    "monthly": "Monthly, in PLN",
    "tax": "Personal includes tax. Team excludes tax: minimum 2 seats = 150 PLN net/month. At 23% VAT: 184.50 PLN total (92.25 per seat). Your tax may differ; the app must show the final total before purchase.",
    "trialTitle": "Free every month",
    "trial": "Every free personal account gets 200,000 Ivy units and 2 hours of cloud transcription each calendar month (UTC), without a card. Local Mac features have no plan limit.",
    "meterTitle": "How transcription is counted",
    "meter": "Cloud transcription counts at least 20 minutes per recording, so thirty 2-minute recordings use all ten hours of Personal. Local transcription and existing transcripts use none of this allowance.",
    "privacyTitle": "Local and cloud are different",
    "privacy": "Local Mac processing stays on your Mac. Standard account cloud stores and processes content on servers readable by the operator; it is not end-to-end encrypted. Pattern masking is not full anonymization. Paid plans never grant access to private spaces.",
    "after": "Free includes basic notes, editing, ordinary search, sync, reading and export within 1 GB, plus the monthly cloud allowance. Paid plans add more cloud AI, transcription and storage.",
    "team": "Personal and each organization have separate subscriptions and balances. Team has 2.25 million interactive Ivy units plus 250,000 automation units per seat; automation units form a shared pool. ASR is per seat; storage is shared. A seat does not change access rights. Free organizations: up to 2 with 5 members each, sharing the founder’s account storage.",
    "lifecycle": "Cloud audio: 30 days by default; Free can choose 7/14/30 days, paid plans also 90. Trash: 30 days. Canceling does not delete content; paid rights last to period end. Over-quota downgrades preserve reading/export with 90 days of protection. Export audio before its retention expires.",
    "docs": "Plans and billing · English docs",
    "comparison": "Compare the plans",
    "local": "Local Mac tools",
    "basics": "Basic cloud notes and sync",
    "ivy": "Cloud Ivy units / month",
    "asr": "Billed cloud ASR / month",
    "storage": "Cloud storage",
    "included": "Included",
    "once": "One trial",
    "seat": "per seat",
    "unit": "Ivy units are a processing budget, not raw model tokens or a guaranteed number of answers. GB = 1 billion bytes."
},
  pricing: {
    "eyebrow": "Monthly, in PLN",
    "title": "Choose where your work lives.",
    "lead": "Free on your Mac. Optional cloud with clear limits.",
    "plans": {
        "free": {
            "name": "Free",
            "badge": "Available on Mac",
            "price": "0 PLN",
            "per": "Monthly, in PLN",
            "tagline": "Local work without a plan limit; hardware limits still apply.",
            "points": [
                "Local Mac tools",
                "Basic cloud notes and sync",
                "1 GB",
                "200k Ivy · 2 h ASR"
            ],
            "cta": ""
        },
        "personal": {
            "name": "Personal",
            "badge": "Available",
            "price": "49 PLN",
            "per": "tax included / month",
            "tagline": "For your personal cloud workspace.",
            "points": [
                "Local Mac tools",
                "Basic cloud notes and sync",
                "20 GB",
                "1.2M Ivy · 10 h ASR"
            ],
            "cta": "Buy in the web app"
        },
        "team": {
            "name": "Team",
            "badge": "Available",
            "price": "75 PLN",
            "per": "net / seat / month",
            "tagline": "For an organization, from two seats.",
            "points": [
                "Local Mac tools",
                "Basic cloud notes and sync",
                "50 GB · per seat",
                "2.5M Ivy · 15 h ASR"
            ],
            "cta": "Buy in the web app"
        }
    }
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
        cells: ['On-device Whisper in the On this Mac space', 'No built-in transcription', 'Cloud', 'Cloud', 'No transcription', 'Cloud'],
      },
      'local-ai': {
        criterion: 'AI that can run fully on your device',
        cells: ['Ivy on this Mac, or your own local AI server', 'No built-in AI; community plugins', 'Cloud only', 'Cloud only', 'No built-in AI', 'Cloud only'],
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
        cells: ['Encrypted database, Touch ID folder locks, an encrypted local copy of every web space', 'End-to-end encryption for the paid Sync', 'Encrypted on Notion\'s servers; not end-to-end', 'Passphrase for selected text only', 'Single notes, with Pro', ''],
      },
      'platforms': {
        criterion: 'Platforms',
        cells: ['macOS', 'macOS, Windows, Linux, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, iOS, iPadOS, web (beta)', 'macOS, Windows, iOS'],
      },
      'price': {
        criterion: 'Price',
        cells: ['Free on the Mac; cloud Personal 49 PLN/month, Team 75 PLN net per seat', 'Free; Sync from $4/month billed yearly', 'Free; AI and meeting notes need Business, $20/month billed yearly', 'Free up to 50 notes; Starter $99/year', 'Free; Pro $29.99/year', 'Free with 25 note credits; Pro from €20/month billed yearly'],
      },
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions people ask first.',
    leadHtml: 'Short answers here; the <a href="/docs/">documentation</a> has the details.',
    items: [
      {
        question: 'Is IndexOne free?',
        answer: 'Yes, on the Mac. Local recording, transcription, notes and exports need no account and no payment. Optional cloud plans (Personal 49 PLN/month, Team 75 PLN net per seat) add cloud transcription, Ivy in the cloud and more storage.',
      },
      {
        question: 'Does my audio go to the cloud?',
        answer: 'Not in the On this Mac space: there, transcription runs on your Mac with Whisper. Only text can leave: redacted, to Claude Code or Codex once you consent, or with names masked, to a local AI server elsewhere on your network once you confirm its address. Personal and organization spaces live on IndexOne on the web, so their recordings are stored there.',
      },
      {
        question: 'What is Ivy?',
        answer: 'Ivy is the AI inside IndexOne. Ask it during a meeting without stopping the recording, or afterwards across everything you have recorded and written. Every answer cites the meetings and notes it came from. Each space picks one AI: Ivy on this Mac, Ivy on the web for Personal and organizations, your own local AI server, or Claude Code or Codex after explicit consent.',
      },
      {
        question: 'Do I need an internet connection?',
        answer: 'Once, to download a Whisper model. After that, recording, transcription, search and Ivy on this Mac work offline. Personal and organization spaces open offline from their encrypted copy and send your edits when you are back online. Ivy on the web, Claude Code, Codex and connectors need a connection.',
      },
      {
        question: 'Do I need Claude Code?',
        answer: 'No. Each space has one AI choice: Ivy on this Mac, Ivy on the web (Personal and organizations), Claude Code, Codex, or your own local AI server such as Ollama, LM Studio, oMLX or llama.cpp.',
      },
      {
        question: 'Which languages does it support?',
        answer: 'Whisper transcribes many languages. For on-device AI you can choose multilingual Qwen3 models or Polish-native Bielik models. The Languages plugin writes every note in the language you choose, can add a second language, translates meetings later and keeps a glossary of names and terms.',
      },
      {
        question: 'Why does macOS ask for Screen & System Audio Recording?',
        answer: 'That permission is how macOS lets an app hear other apps\' audio — the other people on the call. IndexOne saves audio only.',
      },
      {
        question: 'Does it work with headphones and on Intel Macs?',
        answer: 'Headphones, yes: the other side\'s audio is captured from the system, not from your speakers. Intel Macs, no: IndexOne needs a Mac with Apple Silicon (M1 or later).',
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
    versions: 'Versions',
    filterLabel: 'Show releases',
    filters: { all: 'All', features: 'Features', fixes: 'Fixes' },
    kinds: { major: 'Major release', minor: 'Feature release', patch: 'Fix release' },
    count: { one: '{count} release', other: '{count} releases' },
    showOlder: 'Show older releases',
    empty: 'No releases of this kind.',
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

// The published offer is a preview; release history remains unchanged.
content.pricing.plans.free.cta = content.hero.download
content.hero.subHtml = content.pricing.lead + ' ' + content.pricing.plans.free.tagline
content.unique.eyebrow = content.nav.features
content.unique.title = content.features.title
content.unique.lead = content.pricing.lead
content.features.lead = content.pricing.lead
content.cta.compare = content.offer.comparison
content.cta.lead = content.pricing.lead
content.meta.home.description = content.pricing.lead
content.meta.features.description = content.pricing.lead + ' ' + content.offer.local
content.meta.privacy.description = content.offer.privacy
content.meta.pricing.title = 'IndexOne — Free / Personal / Team'
content.meta.pricing.description = content.pricing.lead + ' 49 PLN / 75 PLN. ' + content.offer.status
content.faq.items[0] = { question: "What does Free include?", answer: content.offer.after }
content.faq.items.push(
  { question: content.offer.trialTitle, answer: content.offer.trial },
  { question: content.offer.meterTitle, answer: content.offer.meter },
  { question: content.offer.privacyTitle, answer: content.offer.privacy },
  { question: "Who pays for Team?", answer: content.offer.team },
  ...content.privacy.lifecycle.items.map(item => ({ question: item.title, answer: item.body })),
)
content.compare.rows.price.cells[0] = 'Free · Personal 49 PLN · Team 75 PLN'

export default content
