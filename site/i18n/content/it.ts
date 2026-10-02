import type { SiteContent } from './types'

const content: SiteContent = {
  meta: {
    home: {
      title: 'IndexOne — note delle riunioni local-first per macOS, con Ivy',
      description: 'Registra e trascrivi le riunioni sul tuo Mac, poi chiedi a Ivy, la tua AI, in diretta o su tutte le call. AI locale o cloud anonimizzato; note in Markdown tue.',
    },
    features: {
      breadcrumb: 'Funzionalità',
      title: 'Funzionalità — IndexOne, note delle riunioni per macOS',
      description: 'Workspace, dashboard, importazioni, Ivy in riunione, domande al vault, trascrizione a doppio flusso, prove, export Markdown e Shared Ivy: tutto IndexOne.',
    },
    privacy: {
      breadcrumb: 'Privacy',
      title: 'Privacy e sicurezza: cosa non lascia mai il Mac — IndexOne',
      description: 'Trascrizione sul dispositivo, SQLCipher, cartelle bloccate con Touch ID, firewall di anonimizzazione e consenso prima del cloud. Ecco cosa può lasciare il Mac.',
    },
    pricing: {
      breadcrumb: 'Prezzi',
      title: 'Prezzi di IndexOne e confronto con Obsidian, Notion e altri',
      description: 'IndexOne è gratuito durante l’accesso anticipato. Confrontalo con Obsidian, Notion, Evernote, Bear e Amie su registrazione, AI locale, crittografia e Markdown.',
    },
    ogImageAlt: 'IndexOne — note delle riunioni local-first per macOS, con Ivy',
  },
  common: {
    skipToContent: 'Vai al contenuto',
    homeAria: 'Home di IndexOne',
    primaryNav: 'Principale',
    footerNav: 'Piè di pagina',
    language: 'Lingua',
  },
  nav: {
    features: 'Funzionalità',
    privacy: 'Privacy',
    pricing: 'Prezzi',
    compare: 'Confronto',
    faq: 'FAQ',
    docs: 'Documentazione',
    github: 'GitHub',
    releaseNotes: 'Note di rilascio',
    download: 'Scarica',
  },
  theme: {
    label: 'Tema',
    skinsGroup: 'Tema',
    modesGroup: 'Modalità',
    skins: {
      studio: { label: 'Studio', description: 'Cielo sulla nebbia, gradiente morbido' },
      paper: { label: 'Paper', description: 'Pergamena calda, pensata per la lettura' },
      minimalist: { label: 'Minimalist', description: 'shadcn/ui puro, neutro' },
    },
    modes: { light: 'Chiaro', dark: 'Scuro', system: 'Sistema' },
  },
  hero: {
    badgeLocal: 'Local-first · macOS',
    badgeIvy: 'Ivy sul dispositivo',
    badgeStar: 'Una stella su GitHub',
    githubAria: 'IndexOne su GitHub',
    titleStrong: 'Note delle riunioni con Ivy —',
    titleSoft: 'e decidi tu dove gira.',
    subHtml: 'IndexOne registra le tue call e le trascrive <b>sul tuo Mac</b>. Chiedi a Ivy in diretta, a riunione in corso, e su tutto ciò che hai registrato. Usa l’AI in locale oppure scegli esplicitamente l’<b>AI cloud con anonimizzazione</b>: l’archivio delle tue riunioni resta sul tuo Mac.',
    download: 'Scarica per macOS',
    privacyCta: 'Scopri come funziona la privacy',
    note: 'Firmata e notarizzata · macOS 13.4+ · Apple Silicon e Intel · le tue note restano in Markdown, e sono tue',
    videoLabel: 'Un tour di 90 secondi di IndexOne: una riunione registrata mentre accanto si scrive una nota, la nota redatta dopo e gli elementi che ne estrae, la timeline degli interlocutori, una domanda posta a Ivy su tutto il vault e la risposta con le fonti, il grafo della conoscenza, la barra dei Workspace e la ricerca sul dispositivo, una board in tempo reale, People, e un Workspace che si rifiuta di aprirsi perché è sigillato',
    play: 'Guarda il tour di 90 secondi',
  },
  trust: {
    aria: 'In breve',
    items: ['Trascrizione sul dispositivo', 'Blocco con Touch ID a riposo', 'Nessun cloud necessario', 'Markdown semplice, tuo'],
  },
  unique: {
    eyebrow: 'Solo in IndexOne',
    title: 'Quello che nessun’altra app di note fa per le tue riunioni.',
    lead: 'Tante app archiviano note o trascrivono call. IndexOne registra entrambi i lati della call sul tuo Mac, ti permette di interrogare Ivy durante la riunione e dimostra ogni riga che scrive.',
    items: {
      'live': {
        title: 'Chiedi a Ivy durante la riunione, e tieni tutto sul Mac',
        body: 'Scrivi o pronuncia una domanda durante la call e ricevi una risposta basata su tutte le riunioni che hai registrato, con fonti che puoi aprire: la registrazione non si interrompe mai. Esegui Ivy sul dispositivo o tramite Ollama in locale e nessun testo delle riunioni lascia il tuo Mac; l’AI cloud resta disattivata finché non dai il consenso una volta.',
        link: 'Come funziona Ivy',
      },
      'capture': {
        title: 'Entrambi i lati della call, trascritti sul tuo Mac',
        body: 'Il tuo microfono e l’audio di sistema degli altri partecipanti vengono acquisiti come due flussi e uniti in una trascrizione Me / Others da Whisper sul dispositivo. Nessuna trascrizione nel cloud.',
        link: 'Acquisizione e trascrizione',
      },
      'receipts': {
        title: 'Ogni affermazione ha la sua prova',
        body: 'Ogni riga fondata di una nota rimanda al secondo esatto dell’audio da cui proviene, con interlocutore e livello di confidenza. Le righe senza riscontro non hanno prova, così vedi cosa è verificato.',
        link: 'Le prove',
      },
      'security': {
        title: 'Cifrato ovunque sia salvato',
        body: 'L’intera libreria è cifrata con SQLCipher sul Mac. Tutto ciò che condividi viene sigillato con AES-256-GCM prima del caricamento, quindi il server conserva solo testo cifrato; e l’accesso usa OPAQUE, così il server non conosce mai la tua password.',
        link: 'Sicurezza e privacy',
      },
      'locks': {
        title: 'Cartelle sigillate con Touch ID',
        body: 'Blocca un Workspace o una cartella e le sue note, trascrizioni e registrazioni audio vengono sigillate con AES-256-GCM. Finché è bloccato, è invisibile a ricerca, grafo, MCP e lettore audio.',
        link: 'Il modello di blocco',
      },
      'markdown': {
        title: 'Markdown semplice e un server MCP locale',
        body: 'Le note finiscono nel tuo vault Obsidian come Markdown semplice con wikilink, e un server MCP in sola lettura su 127.0.0.1 permette a Claude e ad altri agenti di interrogarle.',
        link: 'Markdown e MCP',
      },
    },
    seeAll: 'Vedi tutte le funzionalità',
  },
  how: {
    eyebrow: 'Come funziona',
    title: 'Registra → comprendi → chiedi. Local-first per scelta.',
    lead: 'Un’unica pipeline local-first trasforma una call dal vivo in una memoria ricercabile. La trascrizione resta sul tuo Mac; Ivy può girare in locale oppure, con consenso esplicito, usare un’elaborazione cloud anonimizzata.',
    steps: [
      {
        label: '01 · Registra',
        title: 'Sente tutta la call',
        body: 'Il tuo microfono <b>e</b> l’audio di sistema dell’altra parte, acquisiti e trascritti separatamente, poi uniti da Whisper sul dispositivo in una trascrizione <b>Me / Others</b> pulita.',
      },
      {
        label: '02 · Comprendi',
        title: 'Ivy, sul tuo Mac',
        body: 'Un modello di ragionamento gira in locale su un indice semantico di tutto ciò che hai registrato: scrive una nota strutturata e mantiene la memoria ricercabile per sempre.',
      },
      {
        label: '03 · Chiedi',
        title: 'Risposte in diretta, con le fonti',
        body: 'Chiedi a Ivy durante la riunione e ottieni una risposta fondata con le <b>fonti</b>, oppure interroga mesi di call in seguito. La registrazione non si ferma mai.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Sicurezza e privacy',
    title: 'La privacy non è un’impostazione. È l’architettura.',
    leadHtml: 'IndexOne è progettato perché trascrizione, ricerca e Ivy sul dispositivo possano funzionare <b>senza alcuna rete</b>, una volta disattivata l’unica cosa che si collega all’esterno: il controllo di una nuova versione all’avvio. Se scegli l’AI cloud, davanti a quell’uscita ci sono il consenso e un firewall di anonimizzazione.',
    cards: {
      'offline': {
        title: 'Niente lascia il dispositivo',
        body: 'Con un modello sul dispositivo che scarichi una volta sola, oppure con Ollama, audio e trascrizioni non toccano mai la rete. Il ragionamento avviene sul tuo Mac.',
      },
      'at-rest': {
        title: 'Due livelli di crittografia a riposo',
        body: 'L’intero database è cifrato con SQLCipher. In più, un blocco <b>AES-256-GCM</b> per cartella aggiunge chiavi di contenuto avvolte da una chiave master rilasciata solo con <b>Touch ID</b>.',
      },
      'gated': {
        title: 'Ogni lettura è controllata',
        body: 'Una cartella sigillata e bloccata non lascia trapelare nulla: né nell’app, né nella ricerca, nel grafo, in MCP e neppure nel percorso audio. Le riunioni bloccate appaiono semplicemente come <b>Locked</b>.',
      },
      'seals': {
        title: 'I sigilli verificano prima di cancellare',
        body: 'IndexOne dimostra che il testo cifrato si decifra correttamente <b>prima</b> di cancellare il testo in chiaro: il contenuto non va mai perso e il blocco è del tutto reversibile.',
      },
      'screen-share': {
        title: 'Attento alla condivisione schermo',
        body: 'Un controllo può ribloccare automaticamente le cartelle sigillate e cancellare la chiave in cache nel momento in cui rileva una condivisione schermo: così uno schermo condiviso non può rivelare note private.',
      },
      'firewall': {
        title: 'Firewall di anonimizzazione',
        body: 'Se scegli un riassuntore cloud, email, numeri simili a quelli di carte e numeri di telefono vengono rimossi prima, e l’uscita verso il cloud è <b>fail-closed</b> dietro un consenso dato una volta sola. Scarica il modello opzionale di mascheramento dei nomi e verranno sostituiti anche i nomi delle persone.',
      },
      'update-check': {
        title: 'L’unica chiamata che facciamo di default',
        body: 'All’avvio IndexOne chiede a GitHub se esiste una versione più recente. La richiesta indica quale versione stai usando, perché è così che pone la domanda, e nient’altro: niente riunioni, niente note, niente account. Puoi disattivarla in <b>Settings → Privacy</b>. È l’unica cosa in questa pagina che succede senza che tu la chieda, ed è proprio per questo che è in questa pagina.',
      },
    },
    tableCaption: 'Dove gira ogni provider di AI e se il testo delle riunioni lascia il tuo Mac',
    tableHeaders: ['Ivy / provider', 'Dove gira', 'Il testo delle riunioni lascia il Mac?'],
    providers: {
      'on-device': { name: 'Ivy sul dispositivo', note: 'Bielik / Qwen', where: 'Completamente in locale' },
      'ollama': { name: 'Ollama', where: 'Completamente in locale' },
      'claude-code': { name: 'Claude Code', note: 'riassuntore predefinito', where: 'CLI locale → cloud' },
      'codex': { name: 'Codex', note: 'la CLI di OpenAI, eseguita senza strumenti', where: 'CLI locale → cloud' },
      'anthropic': { name: 'Anthropic API', note: 'con la tua chiave', where: 'HTTPS diretto' },
      'gateway': { name: 'AI Gateway', note: 'qualsiasi endpoint compatibile con OpenAI — LiteLLM, Kong, Portkey, vLLM…', where: 'HTTPS diretto' },
    },
    leavesYes: 'Solo dopo il consenso, con firewall di anonimizzazione',
    leavesNo: 'No',
    shotAlt: 'Le impostazioni privacy di IndexOne, che spiegano in parole semplici cosa viene rimosso prima che un testo esca, quali provider sono cloud e che l’elaborazione cloud resta disattivata finché non la autorizzi una volta',
    footnote: 'IndexOne ti dice in parole semplici esattamente cosa lascia il tuo Mac, e ogni chiamata all’AI cloud viene registrata e mostrata a te. Le tue riunioni restano sul dispositivo, a meno che tu non scelga diversamente. Un unico selettore di modello vale per tutte le funzioni AI e accetta sempre un ID di modello digitato a mano: così funziona anche un modello uscito dopo questa build.',
  },
  features: {
    eyebrow: 'Cosa ottieni',
    title: 'Uno strumento per le riunioni che ricorda davvero.',
    lead: 'Un unico archivio cifrato, tre modi per usarlo: l’app, un server MCP locale e i tuoi file Markdown esportati. Un solo albero contiene tutto, le board ci stanno sopra e Ivy legge ogni cosa.',
    items: {
      'workspaces': {
        eyebrow: 'Workspace',
        title: 'Un solo albero per tutto',
        body: 'Un unico albero — <b>Workspace › cartelle › registrazioni e note</b> — in una sola barra laterale che si riduce a una striscia quando ti serve spazio. Blocca un Workspace e tutto ciò che contiene viene sigillato insieme a lui.',
        points: [
          'Registrazioni, note, attività e board finiscono nello stesso posto',
          'Un Workspace sigillato mostra il suo nome e nient’altro: niente conteggi, niente contenuti',
          'Chiedi a Ivy di archiviare al posto tuo una registrazione rimasta in giro',
          'Eliminato per sbaglio? Il cestino lo conserva 30 giorni, o quanto imposti tu, fino a un anno',
        ],
        alt: 'La barra laterale dei Workspace: un albero di Workspace e cartelle con registrazioni, note e board, con un Workspace bloccato in fondo',
      },
      'dashboards': {
        eyebrow: 'Dashboard',
        title: 'Board che componi tu',
        body: 'Porta su una board note, registrazioni, documenti, persone, registri degli impegni e promemoria, poi leggila attraverso le lenti <b>Brief / Overview / Commitments / Sources / People</b>. Fissa una <b>risposta viva</b>: una domanda che l’app tiene aggiornata e che nasconde nel momento in cui le sue fonti non sono più leggibili. Puoi interrogare direttamente una board, con risposte basate solo su ciò che contiene.',
        points: [
          'Sette tipi di riquadro: una nota, una registrazione, un documento, una persona, un registro degli impegni, un elenco di promemoria o una risposta viva',
          'Cinque lenti sugli stessi riquadri, senza alcuna copia',
          'Una board dichiara i propri confini: cosa può leggere e cosa ne ha ricavato',
        ],
        alt: 'Una board nella lente Brief: una risposta viva fissata, ciò che richiede attenzione e le prove recenti che la sostengono',
      },
      'imports': {
        eyebrow: 'Importazioni',
        title: 'Porta con te le note che hai già',
        body: 'Settings → Imports importa un <b>export di Notion</b>, un <b>vault di Obsidian</b> o <b>Apple Notes</b>. Tutto offline: niente account, niente chiave, nessuna chiamata di rete. Ogni importazione parte da una simulazione, così vedi cosa scriverebbe prima che scriva qualsiasi cosa.',
        points: [
          'Tre sorgenti: un export di Notion, un vault di Obsidian, Apple Notes',
          'Prima la simulazione: non viene scritto nulla finché non lo dici tu',
          'Le note importate finiscono in una cartella dedicata e Ivy le legge come tutto il resto',
        ],
        alt: 'Settings → Imports: Notion, Obsidian e Apple Notes, con l’avviso che tutto avviene su questo Mac e nulla viene caricato',
      },
      'ivy': {
        eyebrow: 'Ivy',
        title: 'Parla con Ivy, durante la riunione.',
        body: 'È la parte che manca alla maggior parte delle app per prendere appunti. Attiva Ivy con una frase di attivazione o un solo tocco: risponde attingendo alla memoria delle tue riunioni, in diretta, con citazioni che puoi aprire, e la registrazione non si ferma mai.',
        points: [
          'Modello di ragionamento sul dispositivo (Bielik-11B, Qwen) tramite Metal',
          'Risposte fondate, non inventate: recuperate dalle tue trascrizioni',
          'Ricerca web opzionale, soggetta a consenso e disattivata di default',
        ],
        alt: 'Una registrazione in corso con una domanda posta a metà riunione, a cui Ivy risponde in diretta indicando le fonti usate',
      },
      'ask': {
        eyebrow: 'Interroga il vault',
        title: 'Fai domande su mesi di call.',
        body: 'Sempre Ivy, puntata su tutto ciò che hai mai registrato e scritto. Ogni risposta arriva con le riunioni e le note da cui è tratta, così puoi aprire la fonte invece di fidarti sulla parola.',
        points: [
          'Limita una domanda a un Workspace o a una cartella: tutto il sottoalbero, e niente al di fuori',
          'Le conversazioni vengono ricordate: i thread su vault, note e riunioni restano, con una cronologia consultabile in ciascuna sezione',
          'Una conversazione sparisce nell’istante in cui una cartella da cui ha attinto non è più leggibile',
        ],
        alt: 'Una domanda a Ivy su mesi di riunioni con un’unica risposta, e sotto l’elenco delle riunioni da cui è tratta',
      },
      'transcription': {
        eyebrow: 'Acquisisci e trascrivi',
        title: 'Sente entrambi i lati della call.',
        body: 'La registrazione a doppio flusso acquisisce il tuo microfono e l’audio di sistema dell’altra parte, li trascrive separatamente sul dispositivo e li unisce in base all’orario in una trascrizione Me / Others pulita, con sottotitoli in diretta mentre parli.',
        points: [
          'Whisper sul dispositivo, da tiny a large-v3, compresa la versione turbo più veloce, più le varianti quantizzate',
          'Attribuzione a due flussi: tu e tutti gli altri, più il rilevamento dell’attività vocale',
          'Una barra di registrazione flottante: registra da qualsiasi punto (⌘⇧R)',
        ],
        alt: 'La trascrizione unificata Me / Others, indicizzata nel tempo, accanto alla timeline di interlocutori e argomenti',
      },
      'memory': {
        eyebrow: 'Note e memoria',
        title: 'Note strutturate e un grafo che si costruisce da solo.',
        body: 'Ogni call diventa una nota pulita: riepilogo, decisioni, azioni da fare, citazioni. Registrazioni e note convivono nello stesso Workspace. Persone e progetti vengono estratti automaticamente in un grafo della conoscenza, e i Workspace sigillati restano nascosti.',
        points: [
          'Fai domande su tutte le riunioni con la ricerca semantica ibrida',
          'Schede delle entità, riunioni correlate, riepiloghi settimanali',
          'Promemoria privati che non lasciano mai il Mac, ciascuno collegato alla registrazione o alla nota da cui nasce: Ivy propone, tu accetti',
          'Le azioni da fare possono finire anche in Apple Reminders',
          'Dagli in pasto PDF, documenti Office, pagine web e immagini: indicizzati per Ivy, sul dispositivo',
        ],
        alt: 'Il grafo della conoscenza: riunioni, note, documenti e persone in un’unica mappa, con collegamenti tipizzati tra loro',
      },
      'receipts': {
        eyebrow: 'Prove',
        title: 'Ogni affermazione risale alla registrazione.',
        body: 'Le note di IndexOne non ti chiedono di fidarti. Ogni riga basata su ciò che è stato detto davvero porta con sé una prova: cliccala per saltare a quel secondo esatto dell’audio, con interlocutore e confidenza. Le righe parafrasate o senza riscontro non ne hanno, così vedi a colpo d’occhio cosa è verificato.',
        points: [
          'Clicca un’affermazione e ascolta esattamente da dove viene',
          'Interlocutore e confidenza ASR su ogni prova',
          'Sette documenti con un clic da qualsiasi riunione: email di follow-up, registro delle decisioni, ticket di lavoro, riepilogo 1:1, standup, riepilogo commerciale, note di colloquio',
          'Le cartelle sigillate non rivelano mai tempi né interlocutori',
        ],
        alt: 'Le prove di una nota generata: una riga per ogni affermazione fondata, ciascuna con l’interlocutore e il secondo di audio da cui proviene',
      },
      'markdown': {
        eyebrow: 'Tuo per sempre',
        title: 'Markdown semplice. Nessun vincolo.',
        body: 'Ogni nota viene anche esportata come Markdown atomico: front-matter YAML, <code>[[wikilinks]]</code>, link diretti ai blocchi e un’opzione per board canvas. Sono semplici file tuoi, apribili con qualsiasi editor.',
        points: [
          'Un database SQLite cifrato è l’unica fonte di verità',
          'Un server MCP locale in sola lettura per Claude Desktop e Claude Code',
          'Export in Markdown semplice che puoi aprire con qualsiasi editor',
        ],
        alt: 'Una nota strutturata (riepilogo, decisioni, azioni da fare e citazioni) accanto alle registrazioni e alle note a cui rimanda',
      },
      'notes': {
        eyebrow: 'Note',
        title: 'Non solo note delle riunioni. Tutte le tue note.',
        body: 'Un editor Markdown completo, archiviato negli stessi Workspace delle tue registrazioni: per tutto ciò che scrivi, non solo per quello che IndexOne trascrive. Seleziona un passaggio e compare il menu di Ivy: rifinisci, accorcia, cambia tono, traduci, verifica i fatti, o scrivi semplicemente cosa vuoi fare.',
        points: [
          'Diciannove azioni di Ivy, a un tasto di distanza',
          'Basate sulle tue riunioni e note, non sulle supposizioni del modello',
          'Incolla screenshot nelle note: restano in locale e seguono il blocco del Workspace',
        ],
        alt: 'L’editor di note con un testo selezionato e il menu dei comandi di Ivy aperto, con Refine, Shorten, Change tone e altre azioni',
      },
      'shared-ivy': {
        eyebrow: 'Shared Ivy',
        title: 'Lavora in team, sempre con crittografia end-to-end.',
        body: 'Pubblica una nota o il riepilogo di una riunione nello Shared Ivy della tua organizzazione e resterà sincronizzato per tutti i membri mentre lo modifichi. Tutto viene sigillato sul tuo Mac prima di uscire: il server conserva solo testo cifrato, chiavi avvolte e chiavi pubbliche.',
        points: [
          'Sigillato con AES-256-GCM sotto una chiave di contenuto dell’organizzazione prima del caricamento',
          'Verifica prima di pubblicare: la stessa disciplina del blocco di una cartella',
          'Permessi per documento: l’autore imposta <b>View only</b> o <b>Can edit</b> su ogni documento condiviso',
          'Fai parte di più organizzazioni: ognuna ha il proprio feed cifrato',
          '<b>Tasks</b> condivise: assegnatari, scadenze, sotto-attività e gli stessi permessi; le attività vivono dentro un’organizzazione, quindi serve un account con accesso effettuato',
        ],
        alt: 'La vista Shared Ivy: riunioni e note che le tue organizzazioni hanno condiviso con te, ciascuna con autore e organizzazione',
      },
    },
  },
  pricing: {
    eyebrow: 'Prezzi',
    title: 'Gratis durante l’accesso anticipato.',
    lead: 'Registrazione locale, trascrizione, note ed export in Markdown non richiedono account né pagamenti. Prezzi e disponibilità dopo l’accesso anticipato saranno annunciati separatamente.',
    plans: {
      free: {
        name: 'Free',
        badge: 'Disponibile ora',
        price: '$0',
        per: '/ accesso anticipato',
        tagline: 'Registrazione locale, trascrizione, note ed export.',
        points: [
          'Registrazione e trascrizione illimitate sul dispositivo',
          'Ivy nelle riunioni, più le domande al vault',
          'Ricerca semantica e grafo della conoscenza automatico',
          'Note autonome con un editor assistito da Ivy',
          'Condivisione con crittografia end-to-end e permessi View only / Can edit per documento (account richiesto)',
          'Workspace, dashboard componibili e importazione offline da Notion / Obsidian / Apple Notes',
          'Link di condivisione cifrati con scadenza, password opzionale e limite di aperture',
          'Blocco con Touch ID per Workspace e per cartella, con crittografia AES-256',
          'Riblocco automatico durante la condivisione schermo',
          'Server MCP locale ed export in Markdown',
        ],
        cta: 'Scarica per macOS',
      },
      pro: {
        name: 'Pro',
        badge: 'In arrivo',
        price: 'In programma',
        tagline: 'Prezzi e disponibilità da annunciare.',
        points: [
          'Tutto ciò che c’è in Free',
          'Sincronizzazione con crittografia end-to-end tra i tuoi Mac e iPhone',
          'Backup cloud cifrato a conoscenza zero',
          'Ivy gestita a bassa latenza, opzionale (anonimizzata)',
          'Ricette e automazioni personalizzate',
        ],
        cta: 'Seguici su GitHub',
      },
      team: {
        name: 'Team',
        badge: 'In arrivo',
        price: 'In programma',
        tagline: 'Prezzi e disponibilità da annunciare.',
        points: [
          'Tutto ciò che c’è in Pro',
          'SSO e provisioning SCIM',
          'Policy di sicurezza, conservazione dei dati e registro di audit',
          'Supporto prioritario e SLA',
        ],
        cta: 'Parliamone',
      },
    },
  },
  compare: {
    eyebrow: 'Concorrenza',
    title: 'Come si confronta IndexOne.',
    lead: 'Obsidian, Notion, Evernote, Bear e Amie sono ottimi in quello che fanno. IndexOne è pensato per ciò che succede in una riunione (registrarla, trascriverla sul tuo Mac e farci domande) e può scrivere anche nel tuo vault Obsidian.',
    capability: 'Funzionalità',
    caption: 'IndexOne a confronto con altre app di note',
    labels: { yes: 'Sì', partial: 'In parte', no: 'No', unknown: 'Non noto' },
    notStated: 'Non dichiarato',
    footnote: 'Basato sulle pagine pubbliche di prezzi e funzionalità di ciascun fornitore, verificate a ottobre 2026. Piani e funzionalità cambiano: controlla il sito del fornitore prima di decidere. I nomi dei prodotti sono marchi dei rispettivi proprietari; IndexOne non è affiliato con loro.',
    rows: {
      'capture': {
        criterion: 'Registra entrambi i lati di una call',
        cells: ['Microfono e audio di sistema, come due flussi', 'Solo microfono (plugin core Audio recorder)', 'App desktop; solo microfono nel browser', 'Registratore di riunioni desktop', 'Nessuna registrazione', 'Desktop, senza bot'],
      },
      'local-transcription': {
        criterion: 'Trascrizione sul tuo dispositivo',
        cells: ['Whisper sul dispositivo; nessuna trascrizione cloud', 'Nessuna trascrizione integrata', 'Cloud', 'Cloud', 'Nessuna trascrizione', 'Cloud'],
      },
      'local-ai': {
        criterion: 'AI che può girare interamente sul tuo dispositivo',
        cells: ['Ivy sul dispositivo o Ollama in locale', 'Nessuna AI integrata; plugin della community', 'Solo cloud', 'Solo cloud', 'Nessuna AI integrata', 'Solo cloud'],
      },
      'ask-all': {
        criterion: 'Domande su tutte le riunioni e note passate',
        cells: ['Le risposte citano le fonti', 'Solo plugin della community', 'Piano Business; cita le fonti', 'AI Assistant su tutte le note; AI per riunioni sulla singola registrazione', '', 'Chat sulle registrazioni passate con Pro; citazioni non dichiarate'],
      },
      'local-data': {
        criterion: 'Dati sul tuo dispositivo per impostazione predefinita',
        cells: ['', 'File locali', 'Il cloud di Notion', 'Il cloud di Evernote', 'Database locale; sincronizzazione iCloud con Pro', 'Il cloud di Amie'],
      },
      'markdown': {
        criterion: 'Note come file Markdown semplici e tuoi',
        cells: ['Scritte nel tuo vault; la fonte è il database cifrato', '', 'Solo export in Markdown', 'Export in ENEX, HTML o PDF', 'Database; export in Markdown', ''],
      },
      'encryption': {
        criterion: 'Crittografia sotto il tuo controllo',
        cells: ['Database cifrato, cartelle bloccate con Touch ID, condivisione con crittografia end-to-end', 'Crittografia end-to-end per Sync a pagamento', 'Cifrato sui server di Notion; non end-to-end', 'Passphrase solo per il testo selezionato', 'Singole note, con Pro', ''],
      },
      'platforms': {
        criterion: 'Piattaforme',
        cells: ['macOS', 'macOS, Windows, Linux, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, iOS, iPadOS, web (beta)', 'macOS, Windows, iOS'],
      },
      'price': {
        criterion: 'Prezzo',
        cells: ['Gratis durante l’accesso anticipato', 'Gratis; Sync da $4/mese con fatturazione annuale', 'Gratis; AI e note delle riunioni richiedono Business, $20/mese con fatturazione annuale', 'Gratis fino a 50 note; Starter $99/anno', 'Gratis; Pro $29.99/anno', 'Gratis con 25 crediti nota; Pro da €20/mese con fatturazione annuale'],
      },
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Le prime domande che ci fanno.',
    leadHtml: 'Qui trovi risposte brevi; la <a href="/docs.html">documentazione</a> contiene i dettagli.',
    items: [
      {
        question: 'IndexOne è gratuito?',
        answer: 'Sì, durante l’accesso anticipato. Registrazione locale, trascrizione, note ed export non richiedono account né pagamenti. I prezzi dopo l’accesso anticipato saranno annunciati separatamente.',
      },
      {
        question: 'Il mio audio finisce nel cloud?',
        answer: 'No. La trascrizione avviene sempre sul tuo Mac. Può uscire solo testo anonimizzato, e solo verso un’AI cloud che hai scelto tu e a cui hai dato il consenso.',
      },
      {
        question: 'Cos’è Ivy?',
        answer: 'Ivy è l’AI dentro IndexOne. Interrogala durante una riunione senza fermare la registrazione, oppure dopo, su tutto ciò che hai registrato e scritto. Ogni risposta cita le riunioni e le note da cui proviene. Ivy può girare interamente sul tuo Mac, tramite Ollama in locale oppure, dopo un consenso esplicito, tramite un provider cloud con anonimizzazione.',
      },
      {
        question: 'Mi serve una connessione a internet?',
        answer: 'Una volta, per scaricare un modello Whisper. Dopo, registrazione, trascrizione, ricerca e Ivy sul dispositivo funzionano offline. Le connessioni all’AI cloud, i connettori e la condivisione richiedono una connessione.',
      },
      {
        question: 'Mi serve Claude Code?',
        answer: 'Solo se lo tieni come autore delle note. In alternativa puoi scegliere Codex, l’Anthropic API, un AI gateway compatibile con OpenAI, Ollama in locale o un modello sul dispositivo.',
      },
      {
        question: 'Quali lingue supporta?',
        answer: 'Whisper trascrive moltissime lingue. Per l’AI sul dispositivo puoi scegliere i modelli multilingue Qwen3 o i modelli Bielik, nativi in polacco.',
      },
      {
        question: 'Perché macOS chiede l’accesso a Registrazione schermo e audio di sistema?',
        answer: 'Con quel permesso macOS consente a un’app di sentire l’audio di altre app, cioè le altre persone nella call. IndexOne salva solo l’audio.',
      },
      {
        question: 'Funziona con le cuffie e sui Mac Intel?',
        answer: 'Sì, in entrambi i casi. L’audio dell’altra parte viene acquisito dal sistema, non dagli altoparlanti, e l’app è una build universale. I modelli grandi sul dispositivo funzionano meglio su Apple Silicon.',
      },
      {
        question: 'IndexOne è open source?',
        answer: 'No. L’app è gratuita da scaricare e usare, ma il suo codice sorgente non è pubblico. Le versioni 2.8.0 e precedenti erano state pubblicate originariamente con licenza GNU AGPL-3.0, quando il loro codice sorgente era pubblico.',
      },
    ],
  },
  cta: {
    title: 'Porta Ivy nelle tue riunioni, e tieni il controllo sul tuo Mac.',
    lead: 'Local-first per macOS. Tieni l’AI in locale, oppure scegli esplicitamente l’AI cloud anonimizzata quando vuoi tu.',
    compare: 'Guarda il confronto con Obsidian, Notion, Evernote, Bear e Amie.',
    download: 'Scarica per macOS',
    github: 'Vedi su GitHub',
    legacyHtml: 'Usi la versione 2.8.0 o precedente? Il suo controllo degli aggiornamenti non riesce più a raggiungerci. Scarica una volta l’<a href="{download}">ultima versione</a> e trascinala in Applicazioni, sostituendo la vecchia copia; libreria, registrazioni e impostazioni restano dove sono. Dalla 2.9.0 in poi, l’app trova da sola le nuove versioni.',
  },
  footer: {
    legalHtml: 'Pensato per macOS · Ivy sul dispositivo · local-first · realizzato con Tauri, Angular e Rust · gratuito per macOS · © {year} <a href="{authors}">MonoOne</a> · testi <a href="{license}">CC BY 4.0</a>',
  },
}

export default content
