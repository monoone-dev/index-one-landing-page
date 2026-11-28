import type { SiteContent } from './types'

const content: SiteContent = {
  meta: {
    home: {
      title: 'IndexOne — note delle riunioni con AI privata sul tuo Mac',
      description: 'Registra entrambi i lati di una call sul tuo Mac senza bot, trascrivila sul tuo Mac, chiedi a Ivy e verifica le note sulla registrazione. Gratis sul Mac; i tuoi spazi cloud si aprono in qualsiasi browser.',
    },
    features: {
      breadcrumb: 'Funzionalità',
      title: 'Funzioni — trascrizione, Ivy e note delle riunioni su Mac',
      description: 'Trascrizione a doppio flusso sul Mac, Ivy durante le call, domande su tutte le riunioni, prove, progetti, plugin, server AI locali ed export Markdown.',
    },
    privacy: {
      breadcrumb: 'Privacy',
      title: 'Privacy di IndexOne — AI locale e cosa lascia il tuo Mac',
      description: 'Trascrizione e AI sul dispositivo, note e trascrizioni cifrate, cartelle bloccate con Touch ID e firewall di anonimizzazione. Scopri cosa invia ogni AI, e quando.',
    },
    pricing: {
      breadcrumb: 'Prezzi',
      title: 'Prezzi di IndexOne — Free, Personal e Team',
      description: 'IndexOne è gratuito su Mac. Piani cloud: Personal 49 PLN al mese, Team 75 PLN netti per posto, entrambi con trascrizione cloud illimitata secondo l’uso equo. I piani cloud si acquistano nell’app web.',
    },
    changelog: {
      breadcrumb: 'Novità',
      title: 'Novità di IndexOne — note di rilascio dell’app per Mac',
      description: 'Le note di ogni versione di IndexOne per Mac, dalla più recente: novità per Ivy, organizzazioni e privacy, correzioni, download e date di uscita.',
    },
    meetingBot: {
      breadcrumb: "Bot delle riunioni",
      title: "Bot delle riunioni IndexOne — informazioni per i partecipanti",
      description: "Il bot di IndexOne sta registrando una riunione a cui partecipi. Chi è responsabile, cosa viene registrato e perché, per quanto tempo viene conservato e come esercitare i tuoi diritti.",
    },
    ogImageAlt: 'IndexOne — note delle riunioni con AI privata sul tuo Mac',
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
    githubAria: 'IndexOne su GitHub',
    titleStrong: 'Ogni riunione ricordata.',
    titleSoft: 'Note che puoi verificare nella registrazione.',
    subHtml: 'Registra <b>senza bot</b> e trascrivi <b>sul tuo Mac</b>. Per registrare gli altri partecipanti, attiva la cattura dell’audio di sistema. Gratis sul Mac, fino a quattro ore per registrazione.',
    download: 'Scarica per Mac — gratis',
    signup: 'Crea un account gratuito',
    note: 'Apple Silicon (M1 o successivi) · macOS 13.4+ · firmata e notarizzata · nessun account necessario sul Mac',
    videoLabel: 'Un tour di 47 secondi di IndexOne nel browser: una riunione registrata mentre accanto si scrivono appunti, la nota di Ivy con riepilogo, decisioni e attività, la trascrizione con chi ha detto cosa, la ricerca di un passaggio esatto, una domanda a Ivy con risposta e fonti, uno Space condiviso con tutto il team e l’invito a una nuova persona del team',
    play: 'Guarda il tour',
  },
  home: {
    announce: { badge: 'Novità', text: 'È uscito IndexOne {version}: scopri cosa è cambiato' },
    pillars: {
      eyebrow: 'Perché IndexOne',
      title: 'Le tue riunioni, ricordate. Il tuo Mac, al comando.',
      lead: 'Tre cose che IndexOne fa con ogni chiamata, e dove viene eseguita ciascuna.',
      items: {
        capture: {
          title: 'Sente entrambi i lati della chiamata',
          body: 'Registra il tuo microfono e, con la cattura dell’audio di sistema attiva, anche gli altri partecipanti su Zoom, Teams, Google Meet e altre app. Richiede un Mac con Apple Silicon (macOS 13.4+). Dopo aver scaricato i modelli vocali, puoi registrare e trascrivere senza internet nello spazio «Su questo Mac».',
          link: 'Registrazione e trascrizione',
        },
        ivy: {
          title: 'Chiedi a Ivy, subito o dopo',
          body: 'Chiedi durante la riunione senza fermare la registrazione, oppure su mesi di chiamate. Ogni risposta cita le riunioni da cui proviene.',
          link: 'Come funziona Ivy',
        },
        privacy: {
          title: 'Sigillato con Touch ID',
          body: 'Note e trascrizioni cifrate, più blocchi AES-256 per qualsiasi Workspace o cartella, aperti con Touch ID. Una cartella bloccata è invisibile alla ricerca, al grafo e a MCP.',
          link: 'Come funziona la privacy',
        },
      },
      mock: {
        question: 'Cosa abbiamo deciso sulla data di lancio?',
        answer: 'Il lancio slitta al 3 marzo, dopo l\'approvazione del QA.',
        sources: '2 fonti',
        folders: ['Direzione', 'Selezione', '1:1'],
      },
    },
    stats: {
      aria: 'IndexOne in numeri',
      labels: [
        'flussi audio per chiamata: tu e tutti gli altri',
        'account necessari per registrare e trascrivere',
        'blocchi Touch ID per qualsiasi cartella',
        'azioni di Ivy nell\'editor di note',
        'documenti in un clic da ogni riunione',
        'fonti di importazione, completamente offline',
      ],
    },
    showcase: {
      eyebrow: 'Guardalo nell\'app',
      title: 'Dalla chiamata alla risposta, in un\'unica app.',
      lead: 'Registra la riunione, fai domande, esportala in Markdown. Scegli un passaggio per vederlo.',
      tabsLabel: 'Tour del prodotto',
      tabs: { record: 'Registra', ask: 'Chiedi', export: 'Conserva' },
      iphone: {
        eyebrow: 'iPhone',
        title: 'Le tue riunioni, anche su iPhone.',
        body: 'Registra una riunione con il telefono o importa una registrazione dall’app File. Resta sul telefono finché non la fermi, poi viene caricata nel tuo spazio e trascritta nel cloud. La nota di Ivy e la trascrizione completa si aprono direttamente sul telefono. Un’app per iPhone è in arrivo sull’App Store.',
        videoLabel: 'Un tour di 49 secondi di IndexOne su iPhone: la schermata iniziale con note e registrazioni recenti, l’elenco delle registrazioni, la nota di Ivy con decisioni e attività, la trascrizione divisa per interlocutore, una riunione registrata con il telefono e un file audio importato dall’app File',
      },
    },
    security: { more: 'Leggi il modello di privacy' },
    news: {
      eyebrow: 'Novità',
      title: 'Uscito di recente.',
      lead: 'IndexOne esce spesso. Queste sono le versioni più recenti; le note di rilascio sono in inglese.',
      read: 'Leggi le note',
      all: 'Tutte le versioni',
    },
  },
  trust: {
    aria: 'In breve',
    items: ['Nessun bot sul Mac', 'Trascrizione sul dispositivo', 'Cartelle bloccate con Touch ID', 'Mac e web · app per iPhone in arrivo'],
  },
  unique: {
    eyebrow: 'Funzionalità',
    title: 'Uno strumento per le riunioni che ricorda davvero.',
    lead: 'Tante app archiviano note o trascrivono call. IndexOne registra entrambi i lati della call sul tuo Mac, ti permette di interrogare Ivy durante la riunione e, quando può, collega le affermazioni delle note al momento della registrazione da cui vengono.',
    items: {
      'live': {
        title: 'Chiedi a Ivy durante la riunione, e tieni tutto sul Mac',
        body: 'Scrivi una domanda durante la call — o pronunciala, con l’assistente vocale attivo — e ricevi una risposta basata su tutte le riunioni che hai registrato, con fonti che puoi aprire; la registrazione non si interrompe mai. Scegli Ivy on this Mac e nessun testo delle riunioni lascia il tuo Mac; Claude Code e Codex restano disattivati finché non dai il consenso una volta.',
        link: 'Come funziona Ivy',
      },
      'capture': {
        title: 'Entrambi i lati della call, trascritti sul tuo Mac',
        body: 'Il tuo microfono e l’audio di sistema degli altri partecipanti vengono acquisiti come due flussi e uniti in una trascrizione Me / Others da Whisper sul dispositivo. Nello spazio On this Mac non c’è trascrizione nel cloud.',
        link: 'Acquisizione e trascrizione',
      },
      'receipts': {
        title: 'Le prove riportano all’audio',
        body: 'I punti della nota abbinati indicano la fonte probabile. Quando la registrazione è disponibile, seleziona una prova per vedere quel passaggio evidenziato nella trascrizione. L’etichetta dell’interlocutore compare quando è disponibile.',
        link: 'Le prove',
      },
      'security': {
        title: 'Cifrato sul tuo Mac',
        body: 'Note, trascrizioni e indice di ricerca sono cifrati con SQLCipher sul Mac; blocca un Workspace o una cartella e vengono sigillati anche i suoi audio, video e file. Personal e ogni organizzazione di cui fai parte tengono qui una copia cifrata, così si aprono senza connessione di rete.',
        link: 'Sicurezza e privacy',
      },
      'locks': {
        title: 'Cartelle sigillate con Touch ID',
        body: 'Blocca un Workspace o una cartella e le sue note, trascrizioni e registrazioni audio vengono sigillate con AES-256-GCM, e si aprono solo con Touch ID o la password del Mac. Finché è bloccato, è invisibile a ricerca, grafo, MCP e lettore audio.',
        link: 'Il modello di blocco',
      },
      'markdown': {
        title: 'Export Markdown e un server MCP locale',
        body: 'Esporta qualsiasi nota in Markdown o fai il backup della libreria come semplici file .md, e un server MCP in sola lettura su 127.0.0.1 permette a Claude e ad altri agenti di interrogare le tue note. Scegli tu quali spazi può leggere; le organizzazioni restano spente finché non le attivi.',
        link: 'Markdown e MCP',
      },
    },
    seeAll: 'Vedi tutte le funzionalità',
  },
  privacy: {
    lifecycle: {
      "title": "Ciclo di vita dei dati · piani cloud",
      "items": [
        {
          "title": "Per quanto tempo vengono conservati i dati?",
          "body": "L’audio nel cloud viene conservato per 30 giorni per impostazione predefinita; Free può scegliere 7, 14 o 30 giorni, Personal e Team anche 90. Note, trascrizioni e file ordinari restano finché il proprietario non li elimina, entro i limiti di spazio."
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
    leadHtml: 'Nello spazio On this Mac, trascrizione, ricerca e Ivy on this Mac possono funzionare <b>senza alcuna rete</b> una volta scaricati i modelli vocali. Le poche cose che IndexOne invia da solo non contengono nulla delle riunioni, e ciascuna è elencata qui sotto. Se scegli Claude Code o Codex, davanti a quell’uscita ci sono il consenso e un firewall di anonimizzazione.',
    cards: {
      'offline': {
        title: 'Le tue riunioni restano sul dispositivo',
        body: 'Con Ivy on this Mac e modelli che scarichi una volta sola, audio e trascrizioni non toccano mai la rete. Il ragionamento avviene sul tuo Mac.',
      },
      'at-rest': {
        title: 'Due livelli di crittografia a riposo',
        body: 'Note, trascrizioni e indice di ricerca sono cifrati con SQLCipher. In più, un blocco <b>AES-256-GCM</b> per cartella sigilla anche audio, video e file, con chiavi di contenuto avvolte da una chiave master rilasciata solo con <b>Touch ID</b> o la password del Mac.',
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
        title: 'Cosa invia IndexOne senza che tu lo chieda',
        body: 'All’avvio IndexOne chiede a GitHub se esiste una versione più recente; la richiesta indica quale versione stai usando, e nient’altro. Finché il controllo degli aggiornamenti è attivo (lo è per impostazione predefinita), o se su questo Mac è mai stato effettuato l’accesso con un account, all’avvio e ogni ora chiede anche al server di IndexOne se la tua versione è ancora supportata, senza alcun contenuto. Una volta al giorno invia un piccolo messaggio sull’uso: un ID di installazione casuale, le versioni dell’app e di macOS, l’architettura del processore, la lingua e se hai effettuato l’accesso — niente riunioni, note, registrazioni o nomi. È anonimo solo quando non hai effettuato l’accesso; se hai effettuato l’accesso, viene inviato con il tuo account. La prima volta che trascrivi, scarica da Hugging Face due piccoli modelli vocali, per il rilevamento della voce e la separazione degli interlocutori. Puoi disattivare il controllo degli aggiornamenti e il messaggio sull’uso in <b>Settings → Privacy & Security</b>. Senza il controllo degli aggiornamenti si ferma anche la domanda sulla versione, a meno che su questo Mac sia mai stato effettuato l’accesso con un account. Sono le uniche cose in questa pagina che succedono senza che tu le chieda, ed è proprio per questo che sono in questa pagina.',
      },
    },
    tableCaption: 'Dove gira ogni provider di AI e se il testo delle riunioni lascia il tuo Mac',
    tableHeaders: ['Ivy / provider', 'Dove gira', 'Il testo delle riunioni lascia il Mac?'],
    providers: {
      'on-device': { name: 'Ivy on this Mac', note: 'Bielik / Qwen', where: 'Completamente in locale' },
      'ivy-web': { name: 'Ivy on the web', note: 'Personal e organizzazioni', where: 'Cloud di IndexOne, con i modelli Claude di Anthropic', leaves: 'Sì: lo spazio stesso è sul web' },
      'claude-code': { name: 'Claude Code', where: 'CLI locale → cloud' },
      'codex': { name: 'Codex', note: 'la CLI di OpenAI, eseguita senza strumenti', where: 'CLI locale → cloud' },
      'local-server': { name: 'Local AI server', note: 'Ollama, LM Studio, oMLX e altri', where: 'Il tuo Mac o la tua rete', leaves: 'No con un server su questo Mac. Verso un server altrove nella tua rete solo dopo che ne confermi l’indirizzo; email, numeri di carte e di telefono vengono prima rimossi, e anche i nomi se scarichi il modello di mascheramento dei nomi' },
    },
    leavesYes: 'Solo dopo il consenso, con firewall di anonimizzazione',
    leavesNo: 'No',
    shotAlt: 'Le impostazioni privacy di IndexOne, che spiegano in parole semplici cosa viene rimosso prima che un testo esca, quali provider sono cloud e se l’elaborazione cloud è stata autorizzata',
    footnote: 'IndexOne ti dice in parole semplici esattamente cosa lascia il tuo Mac, e ogni chiamata all’AI cloud fatta dal tuo Mac viene registrata e mostrata a te. Ogni spazio ha una sola scelta di AI: Ivy on this Mac, Ivy on the web, Claude Code, Codex o il tuo server AI locale. Nello spazio On this Mac le riunioni restano sul tuo Mac, a meno che tu non scelga Claude Code, Codex o un server AI locale altrove nella tua rete.',
  },
  features: {
    eyebrow: 'Cosa ottieni',
    title: 'Uno strumento per le riunioni che ricorda davvero.',
    lead: 'Un’unica libreria cifrata, tre modi per usarla: l’app, un server MCP locale e l’export Markdown. Un solo albero contiene tutto, i progetti ci stanno sopra e Ivy legge ogni cosa.',
    items: {
      'workspaces': {
        eyebrow: 'Workspace',
        title: 'Un solo albero per tutto',
        body: 'Un unico albero — <b>Workspace › cartelle › registrazioni e note</b> — in una sola barra laterale che si riduce a una striscia quando ti serve spazio. Blocca un Workspace e tutto ciò che contiene viene sigillato insieme a lui.',
        points: [
          'Registrazioni, note, attività e progetti finiscono nello stesso posto',
          'Un Workspace sigillato mostra il suo nome e nient’altro: niente conteggi, niente contenuti',
          'Chiedi a Ivy di archiviare al posto tuo una registrazione rimasta in giro',
          'Eliminato per sbaglio? Sul tuo Mac il cestino lo conserva 30 giorni, o quanto imposti tu, fino a un anno',
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
        body: 'Settings → Imports importa un <b>export di Notion</b>, un <b>vault di Obsidian</b>, <b>Apple Notes</b>, una cartella di <b>file Markdown</b> o un <b>backup di IndexOne</b>. Tutto offline: niente account, niente chiave, nessuna chiamata di rete. L’importazione di queste note parte da una simulazione, così vedi cosa scriverebbe prima che scriva qualsiasi cosa.<br><br>Sul Mac puoi anche importare come nuova riunione un file di trascrizione supportato di Teams, Zoom o Google Meet. L’importazione può conservare gli orari e le etichette degli interlocutori presenti nel file. Se il file non ha orari, l’app li stima. Poi l’app prova a generare una nota. L’IA nel cloud richiede una connessione a internet. Formati: VTT, SRT, TXT ed esportazioni DOCX supportate.',
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
        body: 'È la parte che manca alla maggior parte delle app per prendere appunti. Chiedi a Ivy con un solo tocco, oppure attiva l’assistente vocale in Settings e chiedi a voce: risponde attingendo alla memoria delle tue riunioni, in diretta, con citazioni che puoi aprire, e la registrazione non si ferma mai.',
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
          'Voice + screen: registra lo schermo insieme alla riunione (macOS 14+), gratis sul Mac',
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
          'Dagli in pasto PDF, documenti Office, pagine web salvate (.html) e immagini: indicizzati per Ivy, sul dispositivo',
        ],
        alt: 'Il grafo della conoscenza: riunioni, note, documenti e persone in un’unica mappa, con collegamenti tipizzati tra loro',
      },
      'receipts': {
        eyebrow: 'Prove',
        title: 'I punti abbinati indicano la fonte probabile.',
        body: 'Quando la registrazione è disponibile, selezionando la prova di un punto della nota abbinato si apre la scheda della registrazione e si evidenzia il passaggio probabile nella trascrizione. L’etichetta dell’interlocutore compare quando è disponibile. Vale la pena controllare i punti senza prova.',
        points: [
          'La fonte probabile, evidenziata nella trascrizione',
          'Momento della fonte ed etichetta dell’interlocutore, quando disponibile',
          'Sette documenti con un clic da qualsiasi riunione: email di follow-up, registro delle decisioni, ticket di lavoro, riepilogo 1:1, standup, riepilogo commerciale, note di colloquio',
          'Le cartelle sigillate non rivelano mai tempi né interlocutori',
        ],
        alt: 'Elenco delle prove con i tempi della registrazione e le etichette degli interlocutori visibili',
      },
      'markdown': {
        eyebrow: 'Tuo per sempre',
        title: 'Markdown in entrata, Markdown in uscita. Nessun vincolo.',
        body: 'Esporta qualsiasi nota in Markdown, o fai il backup dell’intera libreria come semplici file <code>.md</code> che puoi aprire con qualsiasi editor. Arrivi da Obsidian? Importa il tuo vault in un solo passaggio.',
        points: [
          'Un database SQLite cifrato è l’unica fonte di verità',
          'Un server MCP locale in sola lettura per Claude Desktop e Claude Code',
          'Export Markdown di qualsiasi nota e backup in Markdown semplice dell’intera libreria',
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
    eyebrow: "Gratis per iniziare",
    title: "Trasforma le riunioni in risposte.",
    lead: "Inizia gratis sul tuo Mac. Aggiungi il cloud solo quando ti serve di più.",
    benefits: {
      local: {
        title: "Gratis sul tuo Mac",
        body: "Registra, trascrivi e chiedi a Ivy sul tuo Mac. Il lavoro in locale non richiede account né carta.",
      },
      sync: {
        title: "Aprilo nel browser",
        body: "Accedi all’app web per tenere sincronizzate le note. Le note nel cloud sono incluse in Free.",
      },
      grow: {
        title: "Più spazio quando serve",
        body: "I piani a pagamento aggiungono trascrizione cloud illimitata, più Ivy e più spazio. Team aggiunge uno spazio condiviso.",
      },
    },
    download: "Scarica gratis",
    forMac: "Per Mac con Apple Silicon",
    plans: "Vedi i piani",
    web: "Apri app web",
    status: "I piani cloud sono disponibili. Accedi all’app web per acquistare un piano o gestire l’abbonamento. Le funzioni locali su Mac restano disponibili.",
    trialTitle: "Gratis ogni mese",
    trial: "Ogni account gratuito riceve ogni mese di calendario (UTC) 200.000 unità Ivy e una quota di trascrizione cloud, senza carta. Le funzioni locali su Mac non hanno limiti di piano.",
    meterTitle: "Trascrizione cloud illimitata",
    meter: "I piani a pagamento non hanno limiti alla trascrizione cloud. Se trascrivi molto, alcune registrazioni possono essere pronte dopo qualche ora. Si applica l’uso equo. La trascrizione sul Mac è sempre immediata e illimitata.",
    fairUse: "I piani a pagamento includono la trascrizione cloud illimitata secondo l’uso equo; la quota Free e le regole di uso equo sono descritte nei Termini di servizio.",
    fairUseLink: "Leggi i Termini di servizio (in inglese)",
    privacyTitle: "Locale e cloud",
    privacy: "L’elaborazione locale Mac resta sul Mac. Il cloud standard memorizza ed elabora contenuti su server leggibili dall’operatore, senza crittografia end-to-end. Mascherare schemi non è anonimizzazione completa. Un piano non concede accesso a spazi privati.",
    detailsTitle: "Dettagli dei piani",
    details: "La trascrizione a pagamento non ha limiti di piano; vale l’uso corretto e un uso intenso può richiedere più tempo. Le quote cloud mensili si rinnovano per mese di calendario in UTC. Il cloud standard dell’account non è crittografato end-to-end: l’operatore può leggere i contenuti archiviati ed elaborati. Il mascheramento dei pattern non è un’anonimizzazione completa. L’elaborazione locale sul tuo Mac resta sul tuo Mac. I piani a pagamento non danno mai accesso agli spazi privati.",
    more: "Altri dettagli sulla fatturazione",
    after: "Free include note di base, modifica, ricerca ordinaria, sincronizzazione, lettura ed esportazione entro 1 GB, più la quota cloud mensile. I piani a pagamento aggiungono più IA, trascrizione e spazio nel cloud.",
    team: "Personal e ogni organizzazione hanno abbonamenti e saldi separati. Team: 2,25 milioni di unità Ivy interattive e 250.000 per automazioni a posto; le seconde in un fondo comune. Spazio condiviso dall’organizzazione. Un posto non cambia i permessi. Fino a 2 organizzazioni gratuite da 5 membri condividono lo spazio dell’account fondatore.",
    lifecycle: "Audio cloud: 30 giorni predefiniti; Free 7/14/30, a pagamento anche 90. Cestino cloud: conservato finché non lo svuoti. Disdire non elimina contenuti; diritti pagati fino a fine periodo. Esporta l’audio prima della scadenza.",
    docs: "Piani e fatturazione · documentazione inglese",
    comparison: "Confronta i piani",
    feature: "Funzione del piano",
    local: "Strumenti Mac locali",
    basics: "Note cloud e sincronizzazione nel browser",
    ivy: "Unità Ivy cloud / mese",
    asr: "Trascrizione cloud",
    asrUnlimited: "Illimitata · uso equo",
    asrBasic: "Quota mensile",
    storage: "Spazio cloud",
    gb: "GB",
    meetBot: "Bot Google Meet",
    included: "Incluso",
    notIncluded: "Non incluso",
    seat: "per posto",
    unit: "Le unità Ivy sono un budget di elaborazione, non token grezzi o un numero garantito di risposte. GB = un miliardo di byte.",
  },
  pricing: {
    eyebrow: "Prezzi",
    title: "Inizia gratis. Cresci quando vuoi.",
    lead: "Gli strumenti locali sul Mac sono gratuiti. Scegli un piano cloud quando ti serve di più.",
    recommended: "Consigliato",
    note: "Personal include l’IVA. Team da {seats} posti: in totale {total} netti al mese. Tasse e prezzo finale sono indicati nell’app web prima dell’acquisto.",
    compareLink: "Confronta tutti i dettagli",
    peek: { benefit: "Trascrizione cloud illimitata", link: "Vedi il piano Personal" },
    plans: {
      free: {
        name: "Free",
        audience: "Le tue prime note di riunione.",
        period: "al mese",
        points: [
          "Strumenti locali sul Mac",
          "Note nel cloud e sincronizzazione",
          "{ivy} unità Ivy al mese",
          "{storage} GB nel cloud",
        ],
        cta: "Scarica gratis",
        trust: "Nessuna carta richiesta",
      },
      personal: {
        name: "Personal",
        audience: "Più spazio per il tuo lavoro.",
        period: "al mese, IVA inclusa",
        points: [
          "Tutto di Free",
          "Trascrizione cloud illimitata",
          "{ivy} unità Ivy al mese",
          "{storage} GB nel cloud",
        ],
        cta: "Scegli Personal",
        trust: "Disdici quando vuoi",
      },
      team: {
        name: "Team",
        audience: "Uno spazio condiviso per il tuo team.",
        period: "netti per posto al mese, da {seats} posti",
        points: [
          "Note e spazio di team condivisi",
          "Trascrizione cloud illimitata",
          "{ivy} unità Ivy per posto al mese",
          "{storage} GB nel cloud per posto",
          "Bot Google Meet",
        ],
        cta: "Scegli Team",
        trust: "Gestisci il piano nell’app web",
      },
    },
  },
  compare: {
    eyebrow: 'Concorrenza',
    title: 'Come si confronta IndexOne.',
    lead: 'Obsidian, Notion, Evernote, Bear e Amie sono ottimi in quello che fanno. IndexOne è pensato per ciò che succede in una riunione (registrarla, trascriverla sul tuo Mac e farci domande) e importa il tuo vault Obsidian in un solo passaggio.',
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
        cells: ['Nello spazio On this Mac; gli spazi cloud stanno sul web', 'File locali', 'Il cloud di Notion', 'Il cloud di Evernote', 'Database locale; sincronizzazione iCloud con Pro', 'Il cloud di Amie'],
      },
      'markdown': {
        criterion: 'Note come file Markdown semplici e tuoi',
        cells: ['Export e backup in Markdown; la fonte è il database cifrato', '', 'Solo export in Markdown', 'Export in ENEX, HTML o PDF', 'Database; export in Markdown', ''],
      },
      'encryption': {
        criterion: 'Crittografia sotto il tuo controllo',
        cells: ['Database cifrato, cartelle bloccate con Touch ID, una copia locale cifrata di ogni spazio web', 'Crittografia end-to-end per Sync a pagamento', 'Cifrato sui server di Notion; non end-to-end', 'Passphrase solo per il testo selezionato', 'Singole note, con Pro', ''],
      },
      'platforms': {
        criterion: 'Piattaforme',
        cells: ['macOS, web; app per iPhone in arrivo', 'macOS, Windows, Linux, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, iOS, iPadOS, web (beta)', 'macOS, Windows, iOS'],
      },
      'price': {
        criterion: 'Prezzo',
        cells: ['Free · Personal 49 PLN · Team 75 PLN', 'Gratis; Sync da $4/mese con fatturazione annuale', 'Gratis; AI e note delle riunioni richiedono Business, $20/mese con fatturazione annuale', 'Gratis fino a 50 note; Starter $99/anno', 'Gratis; Pro $29.99/anno', 'Gratis con 25 crediti nota; Pro da €20/mese con fatturazione annuale'],
      },
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Le prime domande che ci fanno.',
    leadHtml: 'Qui trovi risposte brevi; la <a href="/docs/">documentazione</a> contiene i dettagli.',
    items: [
      {
        question: 'Cosa include Free?',
        answer: 'Sul Mac, tutto: registrazione, trascrizione, note, Ivy on this Mac ed export, senza account e senza limiti di piano. Un account gratuito aggiunge note cloud, modifica, ricerca, sincronizzazione, lettura ed export nel browser entro 1 GB, più una quota mensile di unità Ivy e di trascrizione cloud. I piani a pagamento aggiungono la trascrizione cloud illimitata secondo l’uso equo, più unità Ivy e più spazio.',
      },
      {
        question: 'Il mio audio finisce nel cloud?',
        answer: 'Non nello spazio On this Mac: lì la trascrizione avviene sul tuo Mac con Whisper. Può uscire solo testo: anonimizzato, verso Claude Code o Codex dopo il tuo consenso, oppure con email, numeri di carte e di telefono rimossi, verso un server AI locale nella tua rete dopo che ne hai confermato l’indirizzo. Gli spazi Personal e delle organizzazioni stanno su IndexOne sul web, quindi le loro registrazioni sono conservate lì.',
      },
      {
        question: 'Cos’è Ivy?',
        answer: 'Ivy è l’AI dentro IndexOne. Interrogala durante una riunione senza fermare la registrazione, oppure dopo, su tutto ciò che hai registrato e scritto. Ogni risposta cita le riunioni e le note da cui proviene. Ogni spazio sceglie una AI: Ivy on this Mac, Ivy on the web per Personal e le organizzazioni, il tuo server AI locale, oppure Claude Code o Codex dopo un consenso esplicito.',
      },
      {
        question: 'Mi serve una connessione a internet?',
        answer: 'Una volta, per scaricare i modelli vocali. Dopo, registrazione, trascrizione, ricerca e Ivy on this Mac funzionano offline. Gli spazi Personal e delle organizzazioni si aprono offline dalla loro copia cifrata e inviano le tue modifiche quando torni online. Ivy on the web, Claude Code, Codex e i connettori richiedono una connessione.',
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
        answer: 'Con quel permesso macOS consente a un’app di sentire l’audio di altre app, cioè le altre persone nella call. IndexOne salva solo il loro audio, a meno che tu non attivi il plugin Screen recording e scelga Voice + screen.',
      },
      {
        question: 'Funziona con le cuffie e sui Mac Intel?',
        answer: 'Con le cuffie sì: l’audio dell’altra parte viene acquisito dal sistema, non dagli altoparlanti. Sui Mac Intel no: l’app per Mac richiede Apple Silicon (M1 o successivi). Su qualsiasi altro computer, usa IndexOne nel browser.',
      },
      {
        question: 'Esiste un’app per iPhone o Windows?',
        answer: 'Un’app per iPhone è in arrivo sull’App Store. Su Windows, Linux o un Mac Intel, apri IndexOne nel browser su app.index-one.io; le registrazioni fatte lì vengono trascritte nel cloud e rientrano nel tuo piano.',
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
  meetingBot: {
    eyebrow: "Per chi partecipa alle riunioni",
    title: "Il bot di IndexOne sta registrando la tua riunione.",
    lead: "Sei qui perché il bot per le note di IndexOne è entrato in una chiamata Google Meet a cui partecipi. Questa pagina spiega chi registra la riunione, cosa succede alla registrazione e cosa puoi fare.",
    noticeLabel: "Il messaggio che il bot pubblica nella chat della riunione",
    noticeNote: "Il bot pubblica questo messaggio in inglese appena viene ammesso nella chiamata. Prima di pubblicarlo non registra nulla.",
    cards: {
      bot: { title: "Che cos’è il bot", body: "Un bot per le note che entra in Google Meet come partecipante, quindi compare nell’elenco delle persone nella chiamata. Il suo nome è quello scelto dall’organizzazione che l’ha inviato, di solito il nome dell’organizzazione stessa, seguito da «· IndexOne», per esempio «Northwind · IndexOne»." },
      controller: { title: "Chi è responsabile dei tuoi dati", body: "L’organizzazione che ha inviato il bot, quella indicata nel suo nome. È il titolare del trattamento dei tuoi dati personali: decide di registrare la riunione, per quale scopo e cosa succede poi alla registrazione." },
      processor: { title: "Cosa fa IndexOne", body: "IndexOne è il responsabile del trattamento. Registra, trascrive e conserva la riunione per conto di quell’organizzazione e solo secondo le sue istruzioni. Il fornitore di IndexOne è indicato nell’informativa sulla privacy di IndexOne." },
      recorded: { title: "Cosa viene registrato", body: "L’audio della riunione e una trascrizione scritta ricavata da esso. Tutto ciò che dici mentre il bot è nella chiamata finisce nella registrazione e nella trascrizione." },
      purpose: { title: "Perché", body: "Perché l’organizzazione abbia note e riepiloghi della sua riunione. La registrazione viene conservata nello spazio di lavoro IndexOne di quell’organizzazione, dove possono aprirla le persone che essa autorizza." },
      storage: { title: "Per quanto tempo viene conservato", body: "È l’organizzazione a decidere per quanto tempo tenere la registrazione nel suo spazio di lavoro. Per quanto tempo IndexOne conserva i dati è indicato nell’informativa sulla privacy di IndexOne." },
    },
    policyLink: "Informativa sulla privacy di IndexOne (in inglese)",
    rights: {
      eyebrow: "I tuoi diritti",
      title: "Puoi opporti, vedere i tuoi dati e chiederne la cancellazione.",
      lead: "Questi diritti te li dà il GDPR. Esercitali prima presso l’organizzazione che ha inviato il bot, perché è lei a decidere sulla registrazione.",
      items: {
        object: { title: "Opposizione", body: "Puoi opporti alla registrazione. Durante la chiamata, chiedi all’organizzatore di rimuovere il bot oppure esci dalla chiamata. Dopo, comunica all’organizzazione che ti opponi all’uso della registrazione." },
        access: { title: "Accesso", body: "Puoi chiedere all’organizzazione se ha una registrazione o una trascrizione in cui compari e chiederne una copia." },
        erasure: { title: "Cancellazione", body: "Puoi chiedere all’organizzazione di cancellare la registrazione o le parti della trascrizione che ti riguardano." },
        complaint: { title: "Reclamo", body: "Puoi presentare un reclamo a un’autorità di controllo per la protezione dei dati, per esempio nel Paese dell’UE in cui vivi o lavori. In Polonia è il Presidente dell’Ufficio per la protezione dei dati personali (UODO)." },
      },
    },
    steps: {
      title: "Come esercitare i tuoi diritti",
      items: [
        { title: "Durante la riunione", body: "Chiedi all’organizzatore di rimuovere il bot oppure esci dalla chiamata. Non devi dare spiegazioni." },
        { title: "Dopo la riunione", body: "Scrivi alla persona che ha organizzato la riunione o all’organizzazione indicata nel nome del bot. Spetta a lei rispondere alla tua richiesta." },
        { title: "Se non riesci a contattarli", body: "Scrivi a IndexOne usando i contatti dell’informativa sulla privacy di IndexOne e indica di quale riunione si tratta. IndexOne inoltrerà la tua richiesta all’organizzazione." },
      ],
    },
    note: "Questa pagina descrive il bot di IndexOne in termini generali. L’organizzazione che l’ha inviato può avere una propria informativa sulla privacy più dettagliata; chiedigliela.",
  },
  cta: {
    title: 'Provalo alla tua prossima call.',
    lead: 'Scarica IndexOne gratis e registra la tua prossima riunione: niente bot, niente account, niente carta. Vuoi le tue note anche nel browser? Crea un account gratuito.',
    compare: 'Confronta i piani',
    download: 'Scarica per Mac — gratis',
    brew: 'Preferisci Homebrew?',
    brewCopy: 'Copia il comando',
    signup: 'Crea un account gratuito',
    legacyHtml: 'Usi la versione 2.8.0 o precedente? Il suo controllo degli aggiornamenti non riesce più a raggiungerci. Scarica una volta l’<a href="{download}">ultima versione</a> e trascinala in Applicazioni, sostituendo la vecchia copia; libreria, registrazioni e impostazioni restano dove sono. Dalla 2.9.0 in poi, l’app trova da sola le nuove versioni.',
  },
  footer: {
    legalHtml: 'App per Mac e app web · app per iPhone in arrivo · Ivy sul dispositivo · realizzato con Tauri, Angular e Rust · gratuito sul Mac · © {year} <a href="{authors}">MonoOne</a> · testi <a href="{license}">CC BY 4.0</a>',
    legalNav: 'Informazioni legali',
    terms: 'Termini di servizio (EN)',
    privacyPolicy: 'Informativa sulla privacy (EN)',
    withdrawal: 'Diritto di recesso (EN)',
    dpa: 'Accordo sul trattamento dei dati (EN)',
    meetingBot: 'Bot delle riunioni: informazioni per i partecipanti',
    contact: 'Contatti',
  },
}

// The FAQ ends with the offer details shown on the pricing page.
content.faq.items.push(
  { question: content.offer.trialTitle, answer: content.offer.trial },
  { question: content.offer.meterTitle, answer: content.offer.meter },
  { question: content.offer.privacyTitle, answer: content.offer.privacy },
  { question: "Chi paga Team?", answer: content.offer.team },
  ...content.privacy.lifecycle.items.map(item => ({ question: item.title, answer: item.body })),
)

export default content
