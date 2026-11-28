import type { SiteContent } from './types'

const content: SiteContent = {
  meta: {
    home: {
      title: 'IndexOne — private AI meeting notes on your Mac',
      description: 'Record both sides of a call on your Mac without a bot, transcribe it on-device, ask Ivy and check notes against the recording. Free on the Mac; your cloud spaces open in any browser.',
    },
    features: {
      breadcrumb: 'Features',
      title: 'Features — meeting transcription, Ivy and notes for Mac',
      description: 'Two-stream meeting transcription on your Mac, Ivy during calls, Ask across every meeting, receipts, projects, plugins, local AI servers and Markdown export.',
    },
    privacy: {
      breadcrumb: 'Privacy',
      title: 'IndexOne privacy — on-device AI and what leaves your Mac',
      description: 'On-device transcription and AI, encrypted notes and transcripts, Touch ID folder locks and a redaction firewall. See what each AI choice sends, and when.',
    },
    pricing: {
      breadcrumb: 'Pricing',
      title: 'IndexOne pricing — Free, Personal and Team',
      description: 'IndexOne is free on the Mac. Cloud plans: Personal 49 PLN a month, Team 75 PLN net per seat, both with unlimited cloud transcription under fair use. Cloud plans are on sale in the web app.',
    },
    changelog: {
      breadcrumb: 'Changelog',
      title: 'IndexOne changelog — release notes for the Mac app',
      description: 'Release notes for every IndexOne version for Mac, newest first: new features for Ivy, organizations and privacy, fixes, downloads and release dates.',
    },
    meetingBot: {
      breadcrumb: "Meeting bot",
      title: "IndexOne meeting bot — information for meeting participants",
      description: "A meeting you are in is being recorded by the IndexOne bot. Who is responsible, what is recorded and why, how long it is kept and how to use your rights.",
    },
    ogImageAlt: 'IndexOne — private AI meeting notes on your Mac',
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
    githubAria: 'IndexOne on GitHub',
    titleStrong: 'Every meeting remembered.',
    titleSoft: 'Every line with proof.',
    subHtml: 'IndexOne records both sides of the call <b>on your Mac without a bot</b>, transcribes it <b>on-device</b> and lets you ask Ivy — mid-meeting or months later — with a link to the second it was said. Free on the Mac, with no minute or history limit. Your cloud spaces open in any browser.',
    download: 'Download for Mac — free',
    signup: 'Create a free account',
    note: 'Apple Silicon (M1 or later) · macOS 13.4+ · signed and notarized · no account needed on the Mac',
    videoLabel: 'A 47-second tour of IndexOne in the browser: a meeting recorded while notes are typed beside it, the note Ivy writes with a summary, decisions and action items, the transcript showing who said what, a search for an exact passage, a question to Ivy answered with sources, a Space shared with the whole team, and a teammate being invited',
    play: 'Watch the tour',
  },
  home: {
    announce: { badge: 'New', text: 'IndexOne {version} is out — see what changed' },
    pillars: {
      eyebrow: 'Why IndexOne',
      title: 'Your meetings, remembered. Your Mac, in charge.',
      lead: 'Three things IndexOne does with every call, and where each of them runs.',
      items: {
        capture: {
          title: 'Hears both sides of the call',
          body: 'Your mic and the other participants\' audio are recorded as two streams and transcribed on your Mac by Whisper.',
          link: 'Capture and transcription',
        },
        ivy: {
          title: 'Ask Ivy, live or later',
          body: 'Ask mid-meeting without stopping the recording, or across months of calls. Every answer cites the meetings it came from.',
          link: 'How Ivy works',
        },
        privacy: {
          title: 'Sealed with Touch ID',
          body: 'Encrypted notes and transcripts, plus AES-256 locks for any Workspace or folder, opened with Touch ID. A locked folder is invisible to search, the graph and MCP.',
          link: 'How privacy works',
        },
      },
      mock: {
        question: 'What did we decide about the launch date?',
        answer: 'Launch moves to 3 March, once QA signs off.',
        sources: '2 sources',
        folders: ['Board', 'Hiring', '1:1s'],
      },
    },
    stats: {
      aria: 'IndexOne in numbers',
      labels: [
        'audio streams per call: you and everyone else',
        'accounts needed to record and transcribe',
        'Touch ID locks for any folder',
        'Ivy actions in the note editor',
        'one-click artifacts from any meeting',
        'import sources, entirely offline',
      ],
    },
    showcase: {
      eyebrow: 'See it in the app',
      title: 'From the call to the answer, in one app.',
      lead: 'Record the meeting, ask about it, export it as Markdown. Pick a step to see it.',
      tabsLabel: 'Product tour',
      tabs: { record: 'Record', ask: 'Ask', export: 'Keep' },
      iphone: {
        eyebrow: 'iPhone',
        title: 'Your meetings, on your iPhone too.',
        body: 'Record a meeting on the phone, or bring a recording in from Files. It stays on the phone until you stop, then it is uploaded to your space and transcribed in the cloud. Ivy\'s note and the full transcript open right there. The iPhone app is coming to the App Store.',
        videoLabel: 'A 49-second tour of IndexOne on iPhone: the home screen with recent notes and recordings, the list of recordings, Ivy\'s note with decisions and action items, the transcript split by speaker, a meeting recorded on the phone, and an audio file imported from Files',
      },
    },
    security: { more: 'Read the privacy model' },
    news: {
      eyebrow: 'What\'s new',
      title: 'Shipped lately.',
      lead: 'IndexOne ships often. These are the latest releases; release notes are in English.',
      read: 'Read the notes',
      all: 'All releases',
    },
  },
  trust: {
    aria: 'At a glance',
    items: ['No bot on the Mac', 'On-device transcription', 'Touch ID folder locks', 'Mac and web · iPhone app coming soon'],
  },
  unique: {
    eyebrow: 'Features',
    title: 'A meeting tool that actually remembers.',
    lead: 'Plenty of apps store notes or transcribe calls. IndexOne records both sides of the call on your Mac, lets you ask Ivy during the meeting, and links claims in its notes back to the moment in the recording, wherever it can match them.',
    items: {
      'live': {
        title: 'Ask Ivy mid-meeting — and keep it on your Mac',
        body: 'Type a question mid-call — or say it, with the voice assistant on — and get an answer grounded in every meeting you have recorded, with sources you can open; the recording never pauses. Choose Ivy on this Mac and no meeting text leaves your Mac; Claude Code and Codex stay off until you consent once.',
        link: 'How Ivy works',
      },
      'capture': {
        title: 'Both sides of the call, transcribed on your Mac',
        body: 'Your mic and the other participants\' system audio are captured as two streams and merged into a Me / Others transcript by on-device Whisper. In the On this Mac space there is no cloud transcription.',
        link: 'Capture and transcription',
      },
      'receipts': {
        title: 'Receipts point back to the audio',
        body: 'Each grounded line in a note links to the second of audio it came from, with the speaker. Lines without evidence get no receipt, so you can see which lines have a likely source in the recording.',
        link: 'Receipts',
      },
      'security': {
        title: 'Encrypted on your Mac',
        body: 'Your notes, transcripts and search index are SQLCipher-encrypted on the Mac; lock a Workspace or folder and its audio, video and files are sealed too. Personal and every organization you belong to keep an encrypted copy here, so they open without a network connection.',
        link: 'Security and privacy',
      },
      'locks': {
        title: 'Folders sealed with Touch ID',
        body: 'Lock a Workspace or folder and its notes, transcripts and audio are sealed with AES-256-GCM, opened only with Touch ID or your Mac password. While locked it is invisible to search, the graph, MCP and the audio player.',
        link: 'The lock model',
      },
      'markdown': {
        title: 'Markdown export and a local MCP server',
        body: 'Export any note as Markdown or back up your library as plain .md files, and a read-only MCP server on 127.0.0.1 lets Claude and other agents query your notes. You choose which workspaces it can read; organizations are off until you turn them on.',
        link: 'Markdown and MCP',
      },
    },
    seeAll: 'See every feature',
  },
  privacy: {
    lifecycle: {
      "title": "Data lifecycle · cloud plans",
      "items": [
        {
          "title": "How long is data kept?",
          "body": "Cloud audio is kept for 30 days by default; Free can choose 7, 14 or 30 days, Personal and Team also 90. Notes, transcripts and ordinary files stay until their owner deletes them, within storage limits."
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
    leadHtml: 'In the On this Mac space, transcription, search and Ivy on this Mac can run <b>with no network at all</b> once the speech models are downloaded. The few things IndexOne sends on its own carry no meeting content, and each one is listed below. If you choose Claude Code or Codex, consent and a redaction firewall sit in front of that egress.',
    cards: {
      'offline': {
        title: 'Your meetings stay on the device',
        body: 'With Ivy on this Mac and models you download once, your audio and transcripts never touch a network. The reasoning happens on your Mac.',
      },
      'at-rest': {
        title: 'Two encryption layers at rest',
        body: 'Notes, transcripts and the search index are SQLCipher-encrypted. On top, a per-folder <b>AES-256-GCM</b> lock seals audio, video and files too, with content keys wrapped by a master key released only by <b>Touch ID</b> or your Mac password.',
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
        title: 'What IndexOne sends without you asking',
        body: 'At launch IndexOne asks GitHub whether a newer version exists; the request says which version you are running, and nothing else. While the update check is on (it is by default), or if an account has ever been signed in on this Mac, it also asks the IndexOne server at launch and every hour whether your version is still supported, with no content. Once a day it sends one small usage message: a random install ID, the app and macOS versions, the processor architecture, the language and whether you are signed in — no meetings, notes, recordings or names. It is anonymous only while you are signed out; when you are signed in, it is sent with your account. The first time you transcribe, it downloads two small speech models, for voice detection and speaker separation, from Hugging Face. Switch off the update check and the usage message in <b>Settings → Privacy & Security</b>. With the update check off, the version question stops too, unless an account has ever been signed in on this Mac. These are the only things on this page that happen without you asking, which is exactly why they are on this page.',
      },
    },
    tableCaption: 'Where each AI provider runs, and whether meeting text leaves your Mac',
    tableHeaders: ['Ivy / provider', 'Where it runs', 'Does meeting text leave your Mac?'],
    providers: {
      'on-device': { name: 'Ivy on this Mac', note: 'Bielik / Qwen', where: 'Fully local' },
      'ivy-web': { name: 'Ivy on the web', note: 'Personal and organizations', where: 'IndexOne cloud, with Anthropic Claude models', leaves: 'Yes — the space itself lives on the web' },
      'claude-code': { name: 'Claude Code', where: 'Local CLI → cloud' },
      'codex': { name: 'Codex', note: 'OpenAI\'s CLI, run tool-free', where: 'Local CLI → cloud' },
      'local-server': { name: 'Local AI server', note: 'Ollama, LM Studio, oMLX and others', where: 'Your Mac or your network', leaves: 'Not with a server on this Mac. A server elsewhere on your network only after you confirm its address; emails, card and phone numbers are removed first, and names too if you download the name-masking model' },
    },
    leavesYes: 'Only after consent; redaction firewall applied',
    leavesNo: 'No',
    shotAlt: 'IndexOne privacy settings, stating in plain language what is removed before any text leaves, which providers are cloud, and whether cloud processing has been allowed',
    footnote: 'IndexOne tells you, in plain language, exactly what leaves your Mac — and every cloud AI call made from your Mac is logged and shown back to you. Each space has one AI choice: Ivy on this Mac, Ivy on the web, Claude Code, Codex or your own local AI server. In the On this Mac space, meetings stay on your Mac unless you choose Claude Code, Codex or a local AI server elsewhere on your network.',
  },
  features: {
    eyebrow: 'What you get',
    title: 'A meeting tool that actually remembers.',
    lead: 'One encrypted library, three ways to use it — the app, a local MCP server and Markdown export. One tree holds everything, projects sit on top of it, and Ivy reads all of it.',
    items: {
      'workspaces': {
        eyebrow: 'Workspaces',
        title: 'One tree for everything',
        body: 'A single tree — <b>Workspaces › folders › your recordings and notes</b> — in one sidebar that collapses to a rail when you want the room. Lock a Workspace and everything inside it is sealed with it.',
        points: [
          'Recordings, notes, tasks and projects file into the same place',
          'A sealed Workspace shows its name and nothing else — no counts, no contents',
          'Ask Ivy to file a stray recording for you',
          'Deleted by mistake? On your Mac, Trash keeps it for 30 days — or however long you set, up to a year',
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
        body: 'This is the part most note-takers don\'t have. Ask Ivy with a single tap, or turn on the voice assistant in Settings and ask out loud; it answers out of your meeting memory, live, with citations you can open — and the recording never stops.',
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
          'Voice + screen: record your screen with the meeting (macOS 14+), free on the Mac',
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
          'Feed it PDFs, Office docs, saved web pages (.html) and images — indexed for Ivy, on-device',
        ],
        alt: 'The knowledge graph — meetings, notes, documents and people as one map, with typed links between them',
      },
      'receipts': {
        eyebrow: 'Receipts',
        title: 'Grounded claims trace back to the tape.',
        body: 'IndexOne\'s notes don\'t ask you to trust them. Each line that\'s grounded in what was actually said carries a receipt — click it to jump straight to that second of audio, with the speaker. Paraphrased or unsupported lines get none, so you can see at a glance which lines have a likely source in the recording.',
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
        title: 'Markdown in, Markdown out. No lock-in.',
        body: 'Export any note as Markdown, or back up your whole library as plain <code>.md</code> files you can open in any editor. Coming from Obsidian? Import your vault in one step.',
        points: [
          'An encrypted SQLite database is the single source of truth',
          'A read-only local MCP server for Claude Desktop and Claude Code',
          'Markdown export of any note, and a plain-Markdown backup of your whole library',
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
    eyebrow: "Free to start",
    title: "Turn meetings into answers.",
    lead: "Start free on your Mac. Add the cloud only when you need more.",
    benefits: {
      local: {
        title: "Free on your Mac",
        body: "Record, transcribe and ask Ivy on your Mac. Local work needs no account and no card.",
      },
      sync: {
        title: "Open it in your browser",
        body: "Sign in to the web app to keep your notes in sync. Cloud notes are included in Free.",
      },
      grow: {
        title: "More room when you need it",
        body: "Paid plans add unlimited cloud transcription, more Ivy and more storage. Team adds a shared workspace.",
      },
    },
    download: "Download free",
    forMac: "For Macs with Apple Silicon",
    plans: "See plans",
    web: "Open web app",
    status: "Cloud plans are on sale. Sign in to the web app to buy a plan or manage your subscription. Local Mac features remain available.",
    trialTitle: "Free every month",
    trial: "Every free account gets 200,000 Ivy units and a cloud transcription allowance each calendar month (UTC), without a card. Local Mac features have no plan limit.",
    meterTitle: "Unlimited cloud transcription",
    meter: "Paid plans have no cap on cloud transcription. When you transcribe a lot, some recordings may take a few hours to be ready. Fair use applies. Transcription on your Mac is always immediate and unlimited.",
    fairUse: "Paid plans include unlimited cloud transcription under fair use; the Free allowance and the fair use rules are set out in the Terms of service.",
    fairUseLink: "Read the Terms of service",
    privacyTitle: "Local and cloud are different",
    privacy: "Local Mac processing stays on your Mac. Standard account cloud stores and processes content on servers readable by the operator; it is not end-to-end encrypted. Pattern masking is not full anonymization. Paid plans never grant access to private spaces.",
    detailsTitle: "Plan details",
    details: "Paid transcription has no plan limit; fair use applies and heavy use may take longer. Monthly cloud allowances renew by calendar month in UTC. Standard account cloud is not end-to-end encrypted: the operator can read stored and processed content. Pattern masking is not full anonymization. Local processing on your Mac stays on your Mac. Paid plans never grant access to private spaces.",
    more: "More billing details",
    after: "Free includes basic notes, editing, ordinary search, sync, reading and export within 1 GB, plus the monthly cloud allowance. Paid plans add unlimited transcription, more cloud AI and more storage.",
    team: "Personal and each organization have separate subscriptions and balances. Team has 2.25 million interactive Ivy units plus 250,000 automation units per seat; automation units form a shared pool. Storage is shared by the organization. A seat does not change access rights. Free organizations: up to 2 with 5 members each, sharing the founder’s account storage.",
    lifecycle: "Cloud audio: 30 days by default; Free can choose 7/14/30 days, paid plans also 90. Cloud trash: kept until you empty it. Canceling does not delete content; paid rights last to period end. Export audio before its retention expires.",
    docs: "Plans and billing · English docs",
    comparison: "Compare the plans",
    feature: "Plan feature",
    local: "Local Mac tools",
    basics: "Cloud notes and sync in the browser",
    ivy: "Cloud Ivy units / month",
    asr: "Cloud transcription",
    asrUnlimited: "Unlimited · fair use",
    asrBasic: "Monthly allowance",
    storage: "Cloud storage",
    gb: "GB",
    meetBot: "Google Meet bot",
    included: "Included",
    notIncluded: "Not included",
    seat: "per seat",
    unit: "Ivy units are a processing budget, not raw model tokens or a guaranteed number of answers. GB = 1 billion bytes.",
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Start free. Make room for more.",
    lead: "Local Mac tools are free. Choose a cloud plan when you need more.",
    recommended: "Recommended",
    note: "Personal includes VAT. Team starts at {seats} seats: {total} net per month in total. Taxes and the final price are shown in the web app before you buy.",
    compareLink: "Compare every plan detail",
    peek: { benefit: "Unlimited cloud transcription", link: "See the Personal plan" },
    plans: {
      free: {
        name: "Free",
        audience: "Your first meeting notes.",
        period: "per month",
        points: [
          "Local Mac tools",
          "Cloud notes and sync",
          "{ivy} Ivy units per month",
          "{storage} GB cloud storage",
        ],
        cta: "Download free",
        trust: "No card required",
      },
      personal: {
        name: "Personal",
        audience: "More room for your work.",
        period: "per month, VAT included",
        points: [
          "Everything in Free",
          "Unlimited cloud transcription",
          "{ivy} Ivy units per month",
          "{storage} GB cloud storage",
        ],
        cta: "Choose Personal",
        trust: "Cancel anytime",
      },
      team: {
        name: "Team",
        audience: "A shared space for your team.",
        period: "net per seat per month, from {seats} seats",
        points: [
          "Shared notes and workspace",
          "Unlimited cloud transcription",
          "{ivy} Ivy units per seat per month",
          "{storage} GB cloud storage per seat",
          "Google Meet bot",
        ],
        cta: "Choose Team",
        trust: "Manage your plan in the web app",
      },
    },
  },
  compare: {
    eyebrow: 'Competition',
    title: 'How IndexOne compares.',
    lead: 'Obsidian, Notion, Evernote, Bear and Amie are good at what they do. IndexOne is built for what happens in a meeting — recording it, transcribing it on your Mac and asking about it — and it imports your Obsidian vault in one step.',
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
        cells: ['In the On this Mac space; cloud spaces live on the web', 'Local files', 'Notion\'s cloud', 'Evernote\'s cloud', 'Local database; iCloud sync with Pro', 'Amie\'s cloud'],
      },
      'markdown': {
        criterion: 'Notes as plain Markdown files you own',
        cells: ['Markdown export and backup; encrypted database is the source', '', 'Markdown export only', 'ENEX, HTML or PDF export', 'Database; Markdown export', ''],
      },
      'encryption': {
        criterion: 'Encryption you control',
        cells: ['Encrypted database, Touch ID folder locks, an encrypted local copy of every web space', 'End-to-end encryption for the paid Sync', 'Encrypted on Notion\'s servers; not end-to-end', 'Passphrase for selected text only', 'Single notes, with Pro', ''],
      },
      'platforms': {
        criterion: 'Platforms',
        cells: ['macOS, web; iPhone app coming soon', 'macOS, Windows, Linux, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, iOS, iPadOS, web (beta)', 'macOS, Windows, iOS'],
      },
      'price': {
        criterion: 'Price',
        cells: ['Free · Personal 49 PLN · Team 75 PLN', 'Free; Sync from $4/month billed yearly', 'Free; AI and meeting notes need Business, $20/month billed yearly', 'Free up to 50 notes; Starter $99/year', 'Free; Pro $29.99/year', 'Free with 25 note credits; Pro from €20/month billed yearly'],
      },
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions people ask first.',
    leadHtml: 'Short answers here; the <a href="/docs/">documentation</a> has the details.',
    items: [
      {
        question: 'What does Free include?',
        answer: 'On the Mac, everything: recording, transcription, notes, Ivy on this Mac and exports, with no account and no plan limit. A free account adds cloud notes, editing, search, sync, reading and export in the browser within 1 GB, plus a monthly allowance of Ivy units and cloud transcription. Paid plans add unlimited cloud transcription under fair use, more Ivy units and more storage.',
      },
      {
        question: 'Does my audio go to the cloud?',
        answer: 'Not in the On this Mac space: there, transcription runs on your Mac with Whisper. Only text can leave: redacted, to Claude Code or Codex once you consent, or with emails, card and phone numbers removed, to a local AI server elsewhere on your network once you confirm its address. Personal and organization spaces live on IndexOne on the web, so their recordings are stored there.',
      },
      {
        question: 'What is Ivy?',
        answer: 'Ivy is the AI inside IndexOne. Ask it during a meeting without stopping the recording, or afterwards across everything you have recorded and written. Every answer cites the meetings and notes it came from. Each space picks one AI: Ivy on this Mac, Ivy on the web for Personal and organizations, your own local AI server, or Claude Code or Codex after explicit consent.',
      },
      {
        question: 'Do I need an internet connection?',
        answer: 'Once, to download the speech models. After that, recording, transcription, search and Ivy on this Mac work offline. Personal and organization spaces open offline from their encrypted copy and send your edits when you are back online. Ivy on the web, Claude Code, Codex and connectors need a connection.',
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
        answer: 'That permission is how macOS lets an app hear other apps\' audio — the other people on the call. IndexOne saves only their audio, unless you turn on the Screen recording plugin and choose Voice + screen.',
      },
      {
        question: 'Does it work with headphones and on Intel Macs?',
        answer: 'Headphones, yes: the other side\'s audio is captured from the system, not from your speakers. Intel Macs, no: the Mac app needs Apple Silicon (M1 or later). On any other computer, use IndexOne in the browser.',
      },
      {
        question: 'Is there an app for iPhone or Windows?',
        answer: 'An iPhone app is coming to the App Store. On Windows, Linux or an Intel Mac, open IndexOne in the browser at app.index-one.io; recordings made there are transcribed in the cloud and count towards your plan.',
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
  meetingBot: {
    eyebrow: "For meeting participants",
    title: "The IndexOne bot is recording your meeting.",
    lead: "You are here because the IndexOne notetaker bot joined a Google Meet call you are in. This page explains who records the meeting, what happens to the recording and what you can do about it.",
    noticeLabel: "The message the bot posts in the meeting chat",
    noticeNote: "The bot posts this message in English once it is let into the call. It does not record before the message is posted.",
    cards: {
      bot: { title: "What the bot is", body: "A notetaker that joins Google Meet as a participant, so it appears in the list of people in the call. Its name is the one chosen by the organization that sent it, usually that organization’s name, followed by “· IndexOne”, for example “Northwind · IndexOne”." },
      controller: { title: "Who is responsible for your data", body: "The organization that sent the bot, the one shown in its name. It is the controller of your personal data. It decides to record the meeting, for what purpose, and what happens to the recording afterwards." },
      processor: { title: "What IndexOne does", body: "IndexOne is the processor. It records, transcribes and stores the meeting on behalf of that organization and only on its instructions. The provider of IndexOne is named in the IndexOne privacy policy." },
      recorded: { title: "What is recorded", body: "The sound of the meeting and a written transcript made from it. Whatever you say while the bot is in the call ends up in the recording and in the transcript." },
      purpose: { title: "Why it is recorded", body: "So that the organization has notes and summaries of its meeting. The recording is kept in that organization’s IndexOne workspace, where the people it allows can open it." },
      storage: { title: "How long it is kept", body: "The organization decides how long it keeps the recording in its workspace. How long IndexOne keeps data is set out in the IndexOne privacy policy." },
    },
    policyLink: "IndexOne privacy policy",
    rights: {
      eyebrow: "Your rights",
      title: "You can object, see your data and ask for it to be deleted.",
      lead: "These rights come from the GDPR. Use them first with the organization that sent the bot, because it decides about the recording.",
      items: {
        object: { title: "Object", body: "You can object to being recorded. During the call, ask the host to remove the bot, or leave the call. Afterwards, tell the organization that you object to the use of the recording." },
        access: { title: "Access", body: "You can ask the organization whether it holds a recording or transcript that includes you, and for a copy." },
        erasure: { title: "Deletion", body: "You can ask the organization to delete the recording or the parts of the transcript that concern you." },
        complaint: { title: "Complaint", body: "You can lodge a complaint with a data protection supervisory authority, for example in the EU country where you live or work. In Poland, this is the President of the Personal Data Protection Office (UODO)." },
      },
    },
    steps: {
      title: "How to use your rights",
      items: [
        { title: "During the meeting", body: "Ask the host to remove the bot, or leave the call. You do not have to give a reason." },
        { title: "After the meeting", body: "Write to the person who organized the meeting or to the organization shown in the bot’s name. It is responsible for answering your request." },
        { title: "If you cannot reach them", body: "Write to IndexOne using the contact details in the IndexOne privacy policy and say which meeting it was. IndexOne will pass your request on to the organization." },
      ],
    },
    note: "This page describes the IndexOne bot in general terms. The organization that sent it may have its own privacy notice with more detail; ask it for one.",
  },
  cta: {
    title: 'Try it on your next call.',
    lead: 'Download IndexOne for free and record your next meeting: no bot, no account, no card. Want your notes in the browser too? Create a free account.',
    compare: 'Compare the plans',
    download: 'Download for Mac — free',
    brew: 'Prefer Homebrew?',
    brewCopy: 'Copy the command',
    signup: 'Create a free account',
    legacyHtml: 'Running version 2.8.0 or earlier? Its update check can no longer reach us. Download the <a href="{download}">latest release</a> once and drag it into Applications, replacing the old copy; your library, recordings and settings stay where they are. From 2.9.0 on, the app finds new versions by itself.',
  },
  footer: {
    legalHtml: 'Mac app and web app · iPhone app coming soon · on-device Ivy · built with Tauri, Angular and Rust · free on the Mac · © {year} <a href="{authors}">MonoOne</a> · text <a href="{license}">CC BY 4.0</a>',
    legalNav: 'Legal information',
    terms: 'Terms of service',
    privacyPolicy: 'Privacy policy',
    withdrawal: 'Right of withdrawal',
    dpa: 'Data processing agreement',
    meetingBot: 'Meeting bot: information for participants',
    contact: 'Contact',
  },
}

// The FAQ ends with the offer details shown on the pricing page.
content.faq.items.push(
  { question: content.offer.trialTitle, answer: content.offer.trial },
  { question: content.offer.meterTitle, answer: content.offer.meter },
  { question: content.offer.privacyTitle, answer: content.offer.privacy },
  { question: "Who pays for Team?", answer: content.offer.team },
  ...content.privacy.lifecycle.items.map(item => ({ question: item.title, answer: item.body })),
)

export default content
