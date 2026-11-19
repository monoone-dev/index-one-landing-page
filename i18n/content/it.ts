import type { SiteContent } from './types'

const content: SiteContent = {
  meta: {
    home: {
      title: 'IndexOne — note e trascrizione di riunioni su Mac, con Ivy',
      description: 'Registra e trascrivi le riunioni sul tuo Mac, poi chiedi a Ivy, l’AI sul dispositivo, in diretta o su tutte le call. Per te o per la tua organizzazione.',
    },
    features: {
      breadcrumb: 'Funzionalità',
      title: 'Funzioni — trascrizione, Ivy e note delle riunioni su Mac',
      description: 'Trascrizione a doppio flusso sul Mac, Ivy durante le call, domande su tutte le riunioni, prove, progetti, plugin, server AI locali ed export Markdown.',
    },
    privacy: {
      breadcrumb: 'Privacy',
      title: 'Privacy di IndexOne — AI locale e cosa lascia il tuo Mac',
      description: 'Trascrizione e AI sul dispositivo, libreria cifrata, cartelle bloccate con Touch ID e firewall di anonimizzazione. Scopri cosa invia ogni AI, e quando.',
    },
    pricing: {
      breadcrumb: 'Prezzi',
      title: 'Prezzi di IndexOne e confronto con Obsidian, Notion e altri',
      description: 'IndexOne è gratuito su Mac; i piani cloud opzionali partono da 49 PLN/mese. Confrontalo con Obsidian, Notion, Evernote, Bear e Amie su registrazione, trascrizione, AI locale e Markdown.',
    },
    changelog: {
      breadcrumb: 'Novità',
      title: 'Novità di IndexOne — note di rilascio dell’app per Mac',
      description: 'Le note di ogni versione di IndexOne per Mac, dalla più recente: novità per Ivy, organizzazioni e privacy, correzioni, download e date di uscita.',
    },
    ogImageAlt: 'IndexOne — note e trascrizione di riunioni su Mac, con Ivy',
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
    changelog: 'Novità',
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
    subHtml: 'IndexOne registra le tue call e le trascrive <b>sul tuo Mac</b>. Chiedi a Ivy in diretta, a riunione in corso, e su tutto ciò che hai registrato. Usa l’AI sul Mac o sul tuo server AI locale, oppure scegli esplicitamente l’<b>AI cloud con anonimizzazione</b>. Nello spazio On this Mac l’archivio delle tue riunioni resta sul tuo Mac.',
    download: 'Scarica per macOS',
    privacyCta: 'Scopri come funziona la privacy',
    note: 'Firmata e notarizzata · macOS 13.4+ · Apple Silicon (M1 o successivi) · le tue note restano in Markdown, e sono tue',
    videoLabel: 'Un tour di 90 secondi di IndexOne: una riunione registrata mentre accanto si scrive una nota, la nota redatta dopo e gli elementi che ne estrae, la timeline degli interlocutori, una domanda posta a Ivy su tutto il vault e la risposta con le fonti, il grafo della conoscenza, la barra dei Workspace e la ricerca sul dispositivo, un progetto, People, e un Workspace che si rifiuta di aprirsi perché è sigillato',
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
        body: 'Scrivi o pronuncia una domanda durante la call e ricevi una risposta basata su tutte le riunioni che hai registrato, con fonti che puoi aprire: la registrazione non si interrompe mai. Scegli Ivy on this Mac e nessun testo delle riunioni lascia il tuo Mac; Claude Code e Codex restano disattivati finché non dai il consenso una volta.',
        link: 'Come funziona Ivy',
      },
      'capture': {
        title: 'Entrambi i lati della call, trascritti sul tuo Mac',
        body: 'Il tuo microfono e l’audio di sistema degli altri partecipanti vengono acquisiti come due flussi e uniti in una trascrizione Me / Others da Whisper sul dispositivo. Nello spazio On this Mac non c’è trascrizione nel cloud.',
        link: 'Acquisizione e trascrizione',
      },
      'receipts': {
        title: 'Ogni affermazione ha la sua prova',
        body: 'Ogni riga fondata di una nota rimanda al secondo esatto dell’audio da cui proviene, con l’interlocutore. Le righe senza riscontro non hanno prova, così vedi cosa è verificato.',
        link: 'Le prove',
      },
      'security': {
        title: 'Cifrato sul tuo Mac',
        body: 'L’intera libreria è cifrata con SQLCipher sul Mac. Personal e ogni organizzazione di cui fai parte tengono qui anche una copia cifrata, così si aprono senza connessione di rete.',
        link: 'Sicurezza e privacy',
      },
      'locks': {
        title: 'Cartelle sigillate con Touch ID',
        body: 'Blocca un Workspace o una cartella e le sue note, trascrizioni e registrazioni audio vengono sigillate con AES-256-GCM. Finché è bloccato, è invisibile a ricerca, grafo, MCP e lettore audio.',
        link: 'Il modello di blocco',
      },
      'markdown': {
        title: 'Markdown semplice e un server MCP locale',
        body: 'Le note finiscono nel tuo vault Obsidian come Markdown semplice con wikilink, e un server MCP in sola lettura su 127.0.0.1 permette a Claude e ad altri agenti di interrogarle. Scegli tu quali spazi può leggere; le organizzazioni restano spente finché non le attivi.',
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
    lifecycle: {
      "title": "Ciclo di vita dei dati · piani cloud",
      "items": [
        {
          "title": "Per quanto tempo vengono conservati i dati?",
          "body": "L’audio nel cloud viene conservato per 30 giorni per impostazione predefinita, con un massimo di 90 giorni previsto per Personal e Team entro i limiti di spazio. Note, trascrizioni e file ordinari restano finché il proprietario non li elimina, entro i limiti di spazio."
        },
        {
          "title": "Cosa succede passando a un piano inferiore?",
          "body": "L’annullamento ha effetto alla fine del periodo pagato. Lettura, esportazione ed eliminazione restano disponibili con il permesso di accesso."
        },
        {
          "title": "Chi conserva i dati quando lascio l’organizzazione?",
          "body": "I contenuti dell’organizzazione restano all’organizzazione. Uscendo o perdendo l’accesso non puoi più leggerli o esportarli."
        }
      ]
    },
    eyebrow: 'Sicurezza e privacy',
    title: 'La privacy non è un’impostazione. È l’architettura.',
    leadHtml: 'Nello spazio On this Mac, trascrizione, ricerca e Ivy on this Mac possono funzionare <b>senza alcuna rete</b>, una volta disattivate le due cose che si collegano all’esterno di default: il controllo di una nuova versione all’avvio e un messaggio giornaliero sull’uso. Se scegli Claude Code o Codex, davanti a quell’uscita ci sono il consenso e un firewall di anonimizzazione.',
    cards: {
      'offline': {
        title: 'Niente lascia il dispositivo',
        body: 'Con Ivy on this Mac e un modello che scarichi una volta sola, audio e trascrizioni non toccano mai la rete. Il ragionamento avviene sul tuo Mac.',
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
        title: 'Le due chiamate che facciamo di default',
        body: 'All’avvio IndexOne chiede a GitHub se esiste una versione più recente; la richiesta indica quale versione stai usando, e nient’altro. Una volta al giorno invia anche un piccolo messaggio sull’uso: un ID di installazione casuale, le versioni dell’app e di macOS, il tipo di chip, la lingua e se hai effettuato l’accesso — niente riunioni, note, registrazioni o nomi. È anonimo solo quando non hai effettuato l’accesso; se hai effettuato l’accesso, viene inviato con il tuo account. Puoi disattivare l’una e l’altro in <b>Settings → Privacy</b>. Sono le uniche cose in questa pagina che succedono senza che tu le chieda, ed è proprio per questo che sono in questa pagina.',
      },
    },
    tableCaption: 'Dove gira ogni provider di AI e se il testo delle riunioni lascia il tuo Mac',
    tableHeaders: ['Ivy / provider', 'Dove gira', 'Il testo delle riunioni lascia il Mac?'],
    providers: {
      'on-device': { name: 'Ivy on this Mac', note: 'Bielik / Qwen', where: 'Completamente in locale' },
      'ivy-web': { name: 'Ivy on the web', note: 'Personal e organizzazioni', where: 'IndexOne sul web', leaves: 'Sì: lo spazio stesso è sul web' },
      'claude-code': { name: 'Claude Code', where: 'CLI locale → cloud' },
      'codex': { name: 'Codex', note: 'la CLI di OpenAI, eseguita senza strumenti', where: 'CLI locale → cloud' },
      'local-server': { name: 'Local AI server', note: 'Ollama, LM Studio, oMLX e altri', where: 'Il tuo Mac o la tua rete', leaves: 'No con un server su questo Mac. Verso un server altrove nella tua rete solo dopo che ne confermi l’indirizzo; i nomi vengono prima mascherati' },
    },
    leavesYes: 'Solo dopo il consenso, con firewall di anonimizzazione',
    leavesNo: 'No',
    shotAlt: 'Le impostazioni privacy di IndexOne, che spiegano in parole semplici cosa viene rimosso prima che un testo esca, quali provider sono cloud e se l’elaborazione cloud è stata autorizzata',
    footnote: 'IndexOne ti dice in parole semplici esattamente cosa lascia il tuo Mac, e ogni chiamata all’AI cloud viene registrata e mostrata a te. Ogni spazio ha una sola scelta di AI: Ivy on this Mac, Ivy on the web, Claude Code, Codex o il tuo server AI locale. Nello spazio On this Mac le riunioni restano sul tuo Mac, a meno che tu non scelga Claude Code, Codex o un server AI locale altrove nella tua rete.',
  },
  features: {
    eyebrow: 'Cosa ottieni',
    title: 'Uno strumento per le riunioni che ricorda davvero.',
    lead: 'Un unico archivio cifrato, tre modi per usarlo: l’app, un server MCP locale e i tuoi file Markdown esportati. Un solo albero contiene tutto, i progetti ci stanno sopra e Ivy legge ogni cosa.',
    items: {
      'workspaces': {
        eyebrow: 'Workspace',
        title: 'Un solo albero per tutto',
        body: 'Un unico albero — <b>Workspace › cartelle › registrazioni e note</b> — in una sola barra laterale che si riduce a una striscia quando ti serve spazio. Blocca un Workspace e tutto ciò che contiene viene sigillato insieme a lui.',
        points: [
          'Registrazioni, note, attività e progetti finiscono nello stesso posto',
          'Un Workspace sigillato mostra il suo nome e nient’altro: niente conteggi, niente contenuti',
          'Chiedi a Ivy di archiviare al posto tuo una registrazione rimasta in giro',
          'Eliminato per sbaglio? Il cestino lo conserva 30 giorni, o quanto imposti tu, fino a un anno',
        ],
        alt: 'La barra laterale dei Workspace: un albero di Workspace e cartelle con registrazioni, note e progetti, con un Workspace bloccato in fondo',
      },
      'dashboards': {
        eyebrow: 'Progetti',
        title: 'Progetti che componi tu',
        body: 'Raccogli in un progetto note, registrazioni, documenti, persone, registri degli impegni e promemoria, poi leggilo attraverso le lenti <b>Brief / Overview / Commitments / Sources / People</b>. Fissa una <b>risposta viva</b>: una domanda salvata la cui ultima risposta viene conservata con la sua data, aggiornata quando lo chiedi e nascosta nel momento in cui le sue fonti non sono più leggibili. Puoi interrogare direttamente un progetto, con risposte basate solo su ciò che contiene.',
        points: [
          'Sette tipi di riquadro: una nota, una registrazione, un documento, una persona, un registro degli impegni, un elenco di promemoria o una risposta viva',
          'Cinque lenti sugli stessi riquadri, senza alcuna copia',
          'Un progetto dichiara i propri confini: cosa può leggere e cosa ne ha ricavato',
        ],
        alt: 'Un progetto nella lente Brief: la risposta salvata a una domanda fissata, ciò che richiede attenzione e le prove recenti che la sostengono',
      },
      'imports': {
        eyebrow: 'Importazioni',
        title: 'Porta con te le note che hai già',
        body: 'Settings → Imports importa un <b>export di Notion</b>, un <b>vault di Obsidian</b>, <b>Apple Notes</b>, una cartella di <b>file Markdown</b> o un <b>backup di IndexOne</b>. Tutto offline: niente account, niente chiave, nessuna chiamata di rete. Ogni importazione parte da una simulazione, così vedi cosa scriverebbe prima che scriva qualsiasi cosa.',
        points: [
          'Cinque sorgenti: un export di Notion, un vault di Obsidian, Apple Notes, una cartella di file Markdown, un backup di IndexOne',
          'Prima la simulazione: non viene scritto nulla finché non lo dici tu',
          'Le note importate finiscono in una cartella dedicata e Ivy le legge come tutto il resto',
        ],
        alt: 'Settings → Imports: Notion, Obsidian, Apple Notes, file Markdown e backup di IndexOne, con l’avviso che tutto avviene su questo Mac e nulla viene caricato',
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
          'Il tuo modello: note e risposte possono arrivare da Ollama, LM Studio, oMLX, llama.cpp o qualsiasi server compatibile con OpenAI',
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
        body: 'Le note di IndexOne non ti chiedono di fidarti. Ogni riga basata su ciò che è stato detto davvero porta con sé una prova: cliccala per saltare a quel secondo esatto dell’audio, con l’interlocutore. Le righe parafrasate o senza riscontro non ne hanno, così vedi a colpo d’occhio cosa è verificato.',
        points: [
          'Clicca un’affermazione e ascolta esattamente da dove viene',
          'Interlocutore e secondo esatto su ogni prova',
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
          'Le Ivy skills della schermata Plugins guidano note e risposte di Ivy nel cloud: sceglile dalla finestra di Ivy, da una nota o dalla barra di registrazione',
        ],
        alt: 'L’editor di note con un testo selezionato e il menu dei comandi di Ivy aperto, con Refine, Shorten, Change tone e altre azioni',
      },
    },
  },
  offer: {
    "web": "Apri app web",
    "status": "I piani cloud sono disponibili. Accedi all’app web per acquistare un piano, attivare la prova o gestire l’abbonamento. Le funzioni locali su Mac restano disponibili.",
    "monthly": "Mensile, in PLN",
    "tax": "Personal include le imposte. Team al netto: minimo 2 posti = 150 PLN netti/mese. Con IVA al 23%: 184,50 PLN totali (92,25 per posto). Le imposte possono variare; l’app deve mostrare il totale prima dell’acquisto.",
    "trialTitle": "Una prova cloud",
    "trial": "Attiva esplicitamente una sola prova senza carta per account personale verificato: 60 minuti fatturati di trascrizione cloud e 100.000 unità Ivy, validi per 30 giorni. Ogni registrazione può durare fino a 30 minuti.",
    "meterTitle": "Calcolo della trascrizione",
    "meter": "La trascrizione cloud conta almeno 20 minuti per registrazione, quindi quindici registrazioni da 2 minuti consumano tutte le cinque ore di Personal. La trascrizione locale e le trascrizioni esistenti non consumano questa quota.",
    "privacyTitle": "Locale e cloud",
    "privacy": "L’elaborazione locale Mac resta sul Mac. Il cloud standard memorizza ed elabora contenuti su server leggibili dall’operatore, senza crittografia end-to-end. Mascherare schemi non è anonimizzazione completa. Un piano non concede accesso a spazi privati.",
    "after": "Dopo la prova, note, modifica, ricerca ordinaria, sync, lettura ed esportazione restano Free entro lo spazio disponibile. Solo nuove attività costose IA e ASR cloud richiedono budget.",
    "team": "Personal e ogni organizzazione hanno abbonamenti e saldi separati. Team: 2,25 milioni di unità Ivy interattive e 250.000 per automazioni a posto; le seconde in un fondo comune. ASR per posto, spazio condiviso. Un posto non cambia i permessi. Fino a 2 organizzazioni gratuite da 5 membri condividono lo spazio dell’account fondatore, senza altra prova.",
    "lifecycle": "Audio cloud: 30 giorni predefiniti; Free 7/14/30, a pagamento anche 90. Cestino: 30 giorni. Disdire non elimina contenuti; diritti pagati fino a fine periodo. Dopo riduzione oltre quota: lettura/export e 90 giorni di protezione. Esporta l’audio prima della scadenza.",
    "docs": "Piani e fatturazione · documentazione inglese",
    "comparison": "Confronta i piani",
    "local": "Strumenti Mac locali",
    "basics": "Note cloud e sincronizzazione",
    "ivy": "Unità Ivy cloud / mese",
    "asr": "ASR cloud fatturato / mese",
    "storage": "Spazio cloud",
    "included": "Incluso",
    "once": "Una prova",
    "seat": "per posto",
    "unit": "Le unità Ivy sono un budget di elaborazione, non token grezzi o un numero garantito di risposte. GB = un miliardo di byte."
},
  pricing: {
    "eyebrow": "Mensile, in PLN",
    "title": "Scegli dove lavorare.",
    "lead": "Free sul Mac. Cloud opzionale con limiti chiari.",
    "plans": {
        "free": {
            "name": "Free",
            "badge": "Disponibile su Mac",
            "price": "0 PLN",
            "per": "Mensile, in PLN",
            "tagline": "Lavoro locale senza limiti di piano; restano i limiti hardware.",
            "points": [
                "Strumenti Mac locali",
                "Note cloud e sincronizzazione",
                "1 GB",
                "Una prova"
            ],
            "cta": ""
        },
        "personal": {
            "name": "Personal",
            "badge": "Disponibile",
            "price": "49 PLN",
            "per": "imposte incluse / mese",
            "tagline": "Per il tuo spazio cloud personale.",
            "points": [
                "Strumenti Mac locali",
                "Note cloud e sincronizzazione",
                "20 GB",
                "1.2M Ivy · 5 h ASR"
            ],
            "cta": "Acquista nell’app web"
        },
        "team": {
            "name": "Team",
            "badge": "Disponibile",
            "price": "75 PLN",
            "per": "netti / posto / mese",
            "tagline": "Per organizzazioni, da due posti.",
            "points": [
                "Strumenti Mac locali",
                "Note cloud e sincronizzazione",
                "50 GB · per posto",
                "2.5M Ivy · 10 h ASR"
            ],
            "cta": "Acquista nell’app web"
        }
    }
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
        cells: ['Whisper sul dispositivo nello spazio On this Mac', 'Nessuna trascrizione integrata', 'Cloud', 'Cloud', 'Nessuna trascrizione', 'Cloud'],
      },
      'local-ai': {
        criterion: 'AI che può girare interamente sul tuo dispositivo',
        cells: ['Ivy on this Mac o il tuo server AI locale', 'Nessuna AI integrata; plugin della community', 'Solo cloud', 'Solo cloud', 'Nessuna AI integrata', 'Solo cloud'],
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
        cells: ['Database cifrato, cartelle bloccate con Touch ID, una copia locale cifrata di ogni spazio web', 'Crittografia end-to-end per Sync a pagamento', 'Cifrato sui server di Notion; non end-to-end', 'Passphrase solo per il testo selezionato', 'Singole note, con Pro', ''],
      },
      'platforms': {
        criterion: 'Piattaforme',
        cells: ['macOS', 'macOS, Windows, Linux, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, iOS, iPadOS, web (beta)', 'macOS, Windows, iOS'],
      },
      'price': {
        criterion: 'Prezzo',
        cells: ['Gratis su Mac; cloud Personal 49 PLN/mese, Team 75 PLN netti per posto', 'Gratis; Sync da $4/mese con fatturazione annuale', 'Gratis; AI e note delle riunioni richiedono Business, $20/mese con fatturazione annuale', 'Gratis fino a 50 note; Starter $99/anno', 'Gratis; Pro $29.99/anno', 'Gratis con 25 crediti nota; Pro da €20/mese con fatturazione annuale'],
      },
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Le prime domande che ci fanno.',
    leadHtml: 'Qui trovi risposte brevi; la <a href="/docs/">documentazione</a> contiene i dettagli.',
    items: [
      {
        question: 'IndexOne è gratuito?',
        answer: 'Sì, su Mac. Registrazione locale, trascrizione, note ed export non richiedono account né pagamenti. I piani cloud opzionali (Personal 49 PLN/mese, Team 75 PLN netti per posto) aggiungono trascrizione nel cloud, Ivy nel cloud e più spazio.',
      },
      {
        question: 'Il mio audio finisce nel cloud?',
        answer: 'Non nello spazio On this Mac: lì la trascrizione avviene sul tuo Mac con Whisper. Può uscire solo testo: anonimizzato, verso Claude Code o Codex dopo il tuo consenso, oppure con i nomi mascherati, verso un server AI locale nella tua rete dopo che ne hai confermato l’indirizzo. Gli spazi Personal e delle organizzazioni stanno su IndexOne sul web, quindi le loro registrazioni sono conservate lì.',
      },
      {
        question: 'Cos’è Ivy?',
        answer: 'Ivy è l’AI dentro IndexOne. Interrogala durante una riunione senza fermare la registrazione, oppure dopo, su tutto ciò che hai registrato e scritto. Ogni risposta cita le riunioni e le note da cui proviene. Ogni spazio sceglie una AI: Ivy on this Mac, Ivy on the web per Personal e le organizzazioni, il tuo server AI locale, oppure Claude Code o Codex dopo un consenso esplicito.',
      },
      {
        question: 'Mi serve una connessione a internet?',
        answer: 'Una volta, per scaricare un modello Whisper. Dopo, registrazione, trascrizione, ricerca e Ivy on this Mac funzionano offline. Gli spazi Personal e delle organizzazioni si aprono offline dalla loro copia cifrata e inviano le tue modifiche quando torni online. Ivy on the web, Claude Code, Codex e i connettori richiedono una connessione.',
      },
      {
        question: 'Mi serve Claude Code?',
        answer: 'No. Ogni spazio ha una sola scelta di AI: Ivy on this Mac, Ivy on the web (Personal e organizzazioni), Claude Code, Codex o il tuo server AI locale, come Ollama, LM Studio, oMLX o llama.cpp.',
      },
      {
        question: 'Quali lingue supporta?',
        answer: 'Whisper trascrive moltissime lingue. Per l’AI sul dispositivo puoi scegliere i modelli multilingue Qwen3 o i modelli Bielik, nativi in polacco. Il plugin Languages scrive ogni nota nella lingua che scegli, può aggiungere una seconda lingua, traduce le riunioni in seguito e tiene un glossario di nomi e termini.',
      },
      {
        question: 'Perché macOS chiede l’accesso a Registrazione schermo e audio di sistema?',
        answer: 'Con quel permesso macOS consente a un’app di sentire l’audio di altre app, cioè le altre persone nella call. IndexOne salva solo l’audio.',
      },
      {
        question: 'Funziona con le cuffie e sui Mac Intel?',
        answer: 'Con le cuffie sì: l’audio dell’altra parte viene acquisito dal sistema, non dagli altoparlanti. Sui Mac Intel no: IndexOne richiede un Mac con Apple Silicon (M1 o successivi).',
      },
      {
        question: 'IndexOne è open source?',
        answer: 'No. L’app è gratuita da scaricare e usare, ma il suo codice sorgente non è pubblico. Le versioni 2.8.0 e precedenti erano state pubblicate originariamente con licenza GNU AGPL-3.0, quando il loro codice sorgente era pubblico.',
      },
    ],
  },
  changelog: {
    eyebrow: 'Novità',
    title: 'Novità di IndexOne',
    lead: 'Ogni versione dell\'app per macOS, dalla più recente. Scarica l\'ultima versione o consulta tutte le build e i checksum su GitHub.',
    download: 'Scarica l\'ultima',
    github: 'Tutte le versioni su GitHub',
    latest: 'Ultima',
    englishNote: 'Le note di rilascio sono pubblicate in inglese.',
    versions: 'Versioni',
    filterLabel: 'Mostra versioni',
    filters: { all: 'Tutte', features: 'Novità', fixes: 'Correzioni' },
    kinds: { major: 'Versione principale', minor: 'Novità', patch: 'Correzioni' },
    count: { one: '{count} versione', other: '{count} versioni' },
    showOlder: 'Mostra versioni precedenti',
    empty: 'Nessuna versione di questo tipo.',
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
content.faq.items[0] = { question: "Cosa resta incluso in Free dopo la prova?", answer: content.offer.after }
content.faq.items.push(
  { question: content.offer.trialTitle, answer: content.offer.trial },
  { question: content.offer.meterTitle, answer: content.offer.meter },
  { question: content.offer.privacyTitle, answer: content.offer.privacy },
  { question: "Chi paga Team?", answer: content.offer.team },
  ...content.privacy.lifecycle.items.map(item => ({ question: item.title, answer: item.body })),
)
content.compare.rows.price.cells[0] = 'Free · Personal 49 PLN · Team 75 PLN'

export default content
