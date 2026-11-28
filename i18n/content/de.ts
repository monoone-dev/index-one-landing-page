import type { SiteContent } from './types'

const content: SiteContent = {
  meta: {
    home: {
      title: 'IndexOne — private KI-Meeting-Notizen auf deinem Mac',
      description: 'Nimm auf deinem Mac beide Seiten eines Calls ohne Bot auf, transkribiere ihn auf deinem Mac, frag Ivy und prüf Notizen direkt an der Aufnahme. Auf dem Mac kostenlos; deine Cloud-Bereiche öffnen sich in jedem Browser.',
    },
    features: {
      breadcrumb: 'Funktionen',
      title: 'Funktionen — Meeting-Transkription, Ivy und Notizen am Mac',
      description: 'Zwei-Spur-Transkription auf dem Mac, Ivy im Call, Fragen über alle Meetings, Belege, Projekte, Plugins, lokale KI-Server und Markdown-Export.',
    },
    privacy: {
      breadcrumb: 'Datenschutz',
      title: 'Datenschutz bei IndexOne — lokale KI, was den Mac verlässt',
      description: 'Transkription und KI auf dem Gerät, verschlüsselte Notizen und Transkripte, Ordnersperren per Touch ID und Schwärzungs-Firewall. Sieh, was jede KI-Wahl wann sendet.',
    },
    pricing: {
      breadcrumb: 'Preise',
      title: 'IndexOne-Preise — Free, Personal und Team',
      description: 'IndexOne ist auf dem Mac kostenlos. Cloud-Pläne: Personal 49 PLN im Monat, Team 75 PLN netto pro Platz, beide mit Cloud-Transkription innerhalb der Limits. Cloud-Pläne gibt es in der Web-App zu kaufen.',
    },
    changelog: {
      breadcrumb: 'Änderungen',
      title: 'IndexOne-Changelog — Versionshinweise der Mac-App',
      description: 'Versionshinweise zu jeder IndexOne-Version für den Mac, die neueste zuerst: Neues für Ivy, Organisationen und Datenschutz, Korrekturen und Downloads.',
    },
    meetingBot: {
      breadcrumb: "Meeting-Bot",
      title: "IndexOne Meeting-Bot — Informationen für Meeting-Teilnehmende",
      description: "Ein Meeting, an dem du teilnimmst, wird vom IndexOne-Bot aufgezeichnet. Wer verantwortlich ist, was und wozu aufgezeichnet wird, wie lange es gespeichert wird und wie du deine Rechte nutzt.",
    },
    ogImageAlt: 'IndexOne — private KI-Meeting-Notizen auf deinem Mac',
  },
  common: {
    skipToContent: 'Zum Inhalt springen',
    homeAria: 'IndexOne – Startseite',
    primaryNav: 'Hauptnavigation',
    footerNav: 'Fußzeile',
    language: 'Sprache',
  },
  nav: {
    features: 'Funktionen',
    privacy: 'Datenschutz',
    pricing: 'Preise',
    compare: 'Vergleich',
    faq: 'FAQ',
    docs: 'Doku',
    github: 'GitHub',
    changelog: 'Änderungen',
    download: 'Download',
  },
  theme: {
    label: 'Design',
    skinsGroup: 'Design',
    modesGroup: 'Modus',
    skins: {
      studio: { label: 'Studio', description: 'Himmelblau auf Nebel, sanfter Verlauf' },
      paper: { label: 'Paper', description: 'Warmes Pergament, gemacht zum Lesen' },
      minimalist: { label: 'Minimalist', description: 'Reines shadcn/ui, neutral' },
    },
    modes: { light: 'Hell', dark: 'Dunkel', system: 'System' },
  },
  hero: {
    githubAria: 'IndexOne auf GitHub',
    titleStrong: 'Jedes Meeting im Gedächtnis.',
    titleSoft: 'Jeder Satz mit Beleg.',
    subHtml: 'Nimm <b>ohne Bot</b> auf und transkribiere <b>auf deinem Mac</b>. Um die anderen Teilnehmenden aufzunehmen, aktiviere die Systemaudio-Erfassung und erteile die macOS-Berechtigung. Kostenlos auf dem Mac. Im Bereich „Auf diesem Mac“ kann eine Aufnahme bis zu vier Stunden dauern.',
    download: 'Für Mac laden – kostenlos',
    signup: 'Kostenloses Konto erstellen',
    note: 'Apple Silicon (M1 oder neuer) · macOS 13.4+ · signiert und notarisiert · auf dem Mac kein Konto nötig',
    videoLabel: 'Eine 47-Sekunden-Tour durch IndexOne im Browser: ein Meeting wird aufgenommen, während daneben Notizen entstehen, die Notiz von Ivy mit Zusammenfassung, Entscheidungen und Aufgaben, das Transkript, das zeigt, wer was gesagt hat, die Suche nach einer genauen Textstelle, eine Frage an Ivy mit Antwort samt Quellen, ein Space für das ganze Team und die Einladung einer weiteren Person ins Team',
    play: 'Die Tour ansehen',
  },
  home: {
    announce: { badge: 'Neu', text: 'IndexOne {version} ist da — sieh dir die Änderungen an' },
    pillars: {
      eyebrow: 'Warum IndexOne',
      title: 'Deine Meetings, festgehalten. Dein Mac hat die Kontrolle.',
      lead: 'Drei Dinge, die IndexOne mit jedem Anruf macht, und wo jedes davon läuft.',
      items: {
        capture: {
          title: 'Hört beide Seiten des Anrufs',
          body: 'Dein Mikrofon und der Ton der anderen Teilnehmenden werden als zwei Spuren aufgenommen und von Whisper auf deinem Mac transkribiert.',
          link: 'Aufnahme und Transkription',
        },
        ivy: {
          title: 'Frag Ivy, live oder später',
          body: 'Frag mitten im Meeting, ohne die Aufnahme zu stoppen, oder über Monate von Anrufen hinweg. Jede Antwort nennt die Meetings, aus denen sie stammt.',
          link: 'So funktioniert Ivy',
        },
        privacy: {
          title: 'Versiegelt mit Touch ID',
          body: 'Verschlüsselte Notizen und Transkripte und AES-256-Sperren für jeden Workspace und jeden Ordner, geöffnet per Touch ID. Ein gesperrter Ordner ist für Suche, Graph und MCP unsichtbar.',
          link: 'So funktioniert Datenschutz',
        },
      },
      mock: {
        question: 'Was haben wir zum Starttermin entschieden?',
        answer: 'Der Start verschiebt sich auf den 3. März, nach der Freigabe durch QA.',
        sources: '2 Quellen',
        folders: ['Vorstand', 'Recruiting', '1:1s'],
      },
    },
    stats: {
      aria: 'IndexOne in Zahlen',
      labels: [
        'Audiospuren pro Anruf: du und alle anderen',
        'Konten nötig zum Aufnehmen und Transkribieren',
        'Touch-ID-Sperren für jeden Ordner',
        'Ivy-Aktionen im Notizeditor',
        'Ein-Klick-Dokumente aus jedem Meeting',
        'Importquellen, komplett offline',
      ],
    },
    showcase: {
      eyebrow: 'In der App ansehen',
      title: 'Vom Anruf zur Antwort, in einer App.',
      lead: 'Nimm das Meeting auf, frag danach, exportiere es als Markdown. Wähle einen Schritt, um ihn zu sehen.',
      tabsLabel: 'Produkttour',
      tabs: { record: 'Aufnehmen', ask: 'Fragen', export: 'Behalten' },
      iphone: {
        eyebrow: 'iPhone',
        title: 'Deine Meetings, auch auf dem iPhone.',
        body: 'Nimm ein Meeting mit dem iPhone auf oder hol eine Aufnahme aus der Dateien-App. Sie bleibt auf dem Telefon, bis du stoppst; dann wird sie in deinen Space hochgeladen und in der Cloud transkribiert. Ivys Notiz und das vollständige Transkript öffnest du direkt auf dem iPhone. Die iPhone-App kommt in den App Store.',
        videoLabel: 'Eine 49-Sekunden-Tour durch IndexOne auf dem iPhone: der Startbildschirm mit den letzten Notizen und Aufnahmen, die Liste der Aufnahmen, Ivys Notiz mit Entscheidungen und Aufgaben, das Transkript nach Sprechern getrennt, ein Meeting, das mit dem iPhone aufgenommen wird, und eine Audiodatei aus der Dateien-App',
      },
    },
    security: { more: 'Zum Datenschutzmodell' },
    news: {
      eyebrow: 'Neuigkeiten',
      title: 'Zuletzt erschienen.',
      lead: 'IndexOne erscheint oft. Das sind die neuesten Versionen; die Versionshinweise sind auf Englisch.',
      read: 'Hinweise lesen',
      all: 'Alle Versionen',
    },
  },
  trust: {
    aria: 'Auf einen Blick',
    items: ['Auf dem Mac ohne Bot', 'Transkription auf dem Gerät', 'Ordnersperren per Touch ID', 'Mac und Web · iPhone-App folgt bald'],
  },
  unique: {
    eyebrow: 'Funktionen',
    title: 'Ein Meeting-Tool, das sich wirklich erinnert.',
    lead: 'Viele Apps speichern Notizen oder transkribieren Calls. IndexOne nimmt beide Seiten des Calls auf deinem Mac auf, lässt dich Ivy schon während des Meetings fragen und verknüpft Aussagen in seinen Notizen, wo immer möglich, mit der Stelle in der Aufnahme.',
    items: {
      'live': {
        title: 'Frag Ivy mitten im Meeting – alles bleibt auf deinem Mac',
        body: 'Tippe eine Frage mitten im Call – oder sprich sie bei eingeschaltetem Sprachassistenten – und erhalte eine Antwort, die auf allen aufgenommenen Meetings beruht, mit Quellen zum Öffnen; die Aufnahme läuft dabei weiter. Wähle Ivy on this Mac, und kein Meeting-Text verlässt deinen Mac; Claude Code und Codex bleiben aus, bis du einmal zustimmst.',
        link: 'So funktioniert Ivy',
      },
      'capture': {
        title: 'Beide Seiten des Calls, transkribiert auf deinem Mac',
        body: 'Dein Mikrofon und das Systemaudio der anderen Teilnehmenden werden als zwei Spuren aufgenommen und von Whisper auf dem Gerät zu einem Me / Others-Transkript zusammengeführt. Im Bereich On this Mac gibt es keine Cloud-Transkription.',
        link: 'Aufnahme und Transkription',
      },
      'receipts': {
        title: 'Belege führen zurück zur Aufnahme',
        body: 'Jede belegte Zeile einer Notiz verlinkt auf die Sekunde Audio, aus der sie stammt – mit Sprecher. Zeilen ohne Beleg bekommen keinen, so siehst du, welche Zeilen eine wahrscheinliche Quelle in der Aufnahme haben.',
        link: 'Belege',
      },
      'security': {
        title: 'Verschlüsselt auf deinem Mac',
        body: 'Deine Notizen, Transkripte und dein Suchindex sind auf dem Mac mit SQLCipher verschlüsselt; sperrst du einen Workspace oder Ordner, werden auch seine Audio-, Video- und sonstigen Dateien versiegelt. Personal und jede Organisation, zu der du gehörst, haben hier eine verschlüsselte Kopie und öffnen sich daher auch ohne Netzwerk.',
        link: 'Sicherheit und Datenschutz',
      },
      'locks': {
        title: 'Ordner, versiegelt mit Touch ID',
        body: 'Sperr einen Workspace oder Ordner, und seine Notizen, Transkripte und Audiodateien werden mit AES-256-GCM versiegelt und lassen sich nur per Touch ID oder mit deinem Mac-Passwort öffnen. Solange er gesperrt ist, ist er für Suche, Graph, MCP und Audioplayer unsichtbar.',
        link: 'Das Sperrmodell',
      },
      'markdown': {
        title: 'Markdown-Export und ein lokaler MCP-Server',
        body: 'Exportiere jede Notiz als Markdown oder sichere deine Bibliothek als reine .md-Dateien, und ein schreibgeschützter MCP-Server auf 127.0.0.1 lässt Claude und andere Agents deine Notizen abfragen. Du wählst, welche Bereiche er lesen darf; Organisationen bleiben aus, bis du sie einschaltest.',
        link: 'Markdown und MCP',
      },
    },
    seeAll: 'Alle Funktionen ansehen',
  },
  privacy: {
    hosting: {
      title: 'Server und Datenbank',
      body: 'Die Server und die Datenbank von IndexOne betreiben wir in der Europäischen Union (AWS, Schweden). Im Standardmodus von Ivy in der Cloud geht der für die Aufgabe nötige Text an Anthropic, das ihn außerhalb des EWR verarbeiten kann. Details stehen in der Datenschutzerklärung.',
      policyLink: 'Datenschutzerklärung (auf Englisch)',
    },
    lifecycle: {
      "title": "Datenlebenszyklus · Cloud-Pläne",
      "items": [
        {
          "title": "Wie lange bleiben Daten gespeichert?",
          "body": "Cloud-Audio bleibt standardmäßig 30 Tage gespeichert; bei Free sind 7, 14 oder 30 Tage wählbar, bei Personal und Team auch 90. Notizen, Transkripte und gewöhnliche Dateien bleiben innerhalb des Speicherlimits, bis ihr Eigentümer sie löscht."
        },
        {
          "title": "Was passiert bei einem Downgrade?",
          "body": "Eine Kündigung wirkt zum Ende des bezahlten Zeitraums. Lesen, Exportieren und Löschen bleiben mit Zugriffsberechtigung verfügbar."
        },
        {
          "title": "Wer behält Organisationsdaten, wenn ich gehe?",
          "body": "Organisationsinhalte bleiben bei der Organisation. Nach Austritt oder Entzug des Zugriffs kannst du sie nicht mehr lesen oder exportieren."
        }
      ]
    },
    eyebrow: 'Sicherheit & Datenschutz',
    title: 'Datenschutz ist keine Einstellung. Er ist die Architektur.',
    leadHtml: 'Im Bereich On this Mac können Transkription, Suche und Ivy on this Mac <b>ganz ohne Netzwerk</b> laufen, sobald die Sprachmodelle heruntergeladen sind. Das Wenige, was IndexOne von sich aus sendet, enthält keine Meeting-Inhalte, und jedes davon ist unten aufgeführt. Wenn du Claude Code oder Codex wählst, stehen Zustimmung und eine Schwärzungs-Firewall vor diesem Datenabfluss.',
    cards: {
      'offline': {
        title: 'Deine Meetings bleiben auf dem Gerät',
        body: 'Mit Ivy on this Mac und einmal geladenen Modellen berühren dein Audio und deine Transkripte nie ein Netzwerk. Das Reasoning passiert auf deinem Mac.',
      },
      'at-rest': {
        title: 'Zwei Verschlüsselungsebenen im Ruhezustand',
        body: 'Notizen, Transkripte und der Suchindex sind mit SQLCipher verschlüsselt. Darüber versiegelt eine <b>AES-256-GCM</b>-Sperre pro Ordner auch Audio, Video und Dateien, mit Inhaltsschlüsseln, umhüllt von einem Hauptschlüssel, den nur <b>Touch ID</b> oder dein Mac-Passwort freigibt.',
      },
      'gated': {
        title: 'Jeder Lesezugriff wird geprüft',
        body: 'Ein versiegelter, gesperrter Ordner gibt nichts preis – weder in der App noch in Suche, Graph, MCP oder sogar im Audiopfad. Gesperrte Meetings erscheinen einfach als <b>Locked</b>.',
      },
      'seals': {
        title: 'Siegel prüfen, bevor sie löschen',
        body: 'IndexOne weist nach, dass sich der Chiffretext wieder entschlüsseln lässt, <b>bevor</b> es den Klartext überhaupt leert – Inhalte gehen nie verloren, und das Sperren ist vollständig umkehrbar.',
      },
      'screen-share': {
        title: 'Merkt, wenn du deinen Bildschirm teilst',
        body: 'Ein Wächter kann versiegelte Ordner automatisch wieder sperren und den zwischengespeicherten Schlüssel löschen, sobald Bildschirmfreigabe erkannt wird – so landen keine privaten Notizen auf einem geteilten Bildschirm.',
      },
      'firewall': {
        title: 'Schwärzungs-Firewall',
        body: 'Falls du dich je für eine Cloud-Zusammenfassung entscheidest, werden E-Mail-Adressen, kartenähnliche Nummern und Telefonnummern vorher entfernt – und der Cloud-Datenabfluss ist hinter einer einmaligen Zustimmung <b>standardmäßig gesperrt</b>. Lädst du das optionale Modell zur Namensmaskierung, werden auch Personennamen ersetzt.',
      },
      'update-check': {
        title: 'Was IndexOne sendet, ohne dass du darum bittest',
        body: 'Beim Start fragt IndexOne bei GitHub nach, ob es eine neuere Version gibt; die Anfrage nennt die Version, die du nutzt, und sonst nichts. Solange die Update-Prüfung an ist (standardmäßig der Fall) oder wenn auf diesem Mac schon einmal ein Konto angemeldet war, fragt es außerdem beim Start und jede Stunde beim IndexOne-Server nach, ob deine Version noch unterstützt wird – ohne Inhalte. Einmal am Tag sendet es eine kleine Nutzungsmeldung: eine zufällige Installations-ID, die App- und macOS-Version, die Prozessorarchitektur, die Sprache und ob du angemeldet bist – keine Meetings, Notizen, Aufnahmen oder Namen. Anonym ist sie nur, solange du abgemeldet bist; bist du angemeldet, wird sie mit deinem Konto gesendet. Beim ersten Transkribieren lädt es zwei kleine Sprachmodelle von Hugging Face herunter, für die Spracherkennung und die Sprechertrennung. Die Update-Prüfung und die Nutzungsmeldung kannst du unter <b>Settings → Privacy & Security</b> abschalten. Ohne Update-Prüfung entfällt auch die Versionsabfrage, außer auf diesem Mac war schon einmal ein Konto angemeldet. Es sind die einzigen Dinge auf dieser Seite, die passieren, ohne dass du darum bittest – und genau deshalb stehen sie hier.',
      },
    },
    tableCaption: 'Wo jeder KI-Anbieter läuft und ob Meeting-Text deinen Mac verlässt',
    tableHeaders: ['Ivy / Anbieter', 'Wo es läuft', 'Verlässt Meeting-Text deinen Mac?'],
    providers: {
      'on-device': { name: 'Ivy on this Mac', note: 'Bielik / Qwen', where: 'Vollständig lokal' },
      'ivy-web': { name: 'Ivy on the web', note: 'Personal und Organisationen', where: 'IndexOne-Cloud, mit Anthropic-Claude-Modellen', leaves: 'Ja – der Bereich selbst liegt im Web' },
      'claude-code': { name: 'Claude Code', where: 'Lokale CLI → Cloud' },
      'codex': { name: 'Codex', note: 'die CLI von OpenAI, ohne Tools ausgeführt', where: 'Lokale CLI → Cloud' },
      'local-server': { name: 'Local AI server', note: 'Ollama, LM Studio, oMLX und andere', where: 'Dein Mac oder dein Netzwerk', leaves: 'Nicht mit einem Server auf diesem Mac. An einen Server anderswo im Netzwerk erst, wenn du seine Adresse bestätigst; E-Mail-Adressen, Karten- und Telefonnummern werden vorher entfernt, und auch Namen, wenn du das Modell zur Namensmaskierung lädst' },
    },
    leavesYes: 'Nur nach Zustimmung; mit Schwärzungs-Firewall',
    leavesNo: 'Nein',
    shotAlt: 'Die Datenschutzeinstellungen von IndexOne: in klarer Sprache, was entfernt wird, bevor Text das Gerät verlässt, welche Anbieter Cloud sind und ob Cloud-Verarbeitung erlaubt wurde',
    footnote: 'IndexOne sagt dir in klarer Sprache, was genau deinen Mac verlässt – und jeder Cloud-KI-Aufruf von deinem Mac wird protokolliert und dir angezeigt. Jeder Bereich hat genau eine KI-Auswahl: Ivy on this Mac, Ivy on the web, Claude Code, Codex oder dein eigener lokaler KI-Server. Im Bereich On this Mac bleiben Meetings auf deinem Mac, solange du nicht Claude Code, Codex oder einen lokalen KI-Server an anderer Stelle in deinem Netzwerk wählst.',
  },
  features: {
    eyebrow: 'Was du bekommst',
    title: 'Ein Meeting-Tool, das sich wirklich erinnert.',
    lead: 'Eine verschlüsselte Bibliothek, drei Wege, sie zu nutzen – die App, ein lokaler MCP-Server und Markdown-Export. Ein Baum hält alles zusammen, Projekte sitzen darauf, und Ivy liest alles davon.',
    items: {
      'workspaces': {
        eyebrow: 'Workspaces',
        title: 'Ein Baum für alles',
        body: 'Ein einziger Baum – <b>Workspaces › Ordner › deine Aufnahmen und Notizen</b> – in einer Seitenleiste, die sich zu einer schmalen Leiste einklappt, wenn du Platz brauchst. Sperr einen Workspace, und alles darin wird mit ihm versiegelt.',
        points: [
          'Aufnahmen, Notizen, Aufgaben und Projekte landen am selben Ort',
          'Ein versiegelter Workspace zeigt seinen Namen und sonst nichts – keine Zahlen, keine Inhalte',
          'Lass Ivy eine verirrte Aufnahme für dich einsortieren',
          'Versehentlich gelöscht? Auf deinem Mac hebt der Papierkorb es 30 Tage auf – oder so lange du willst, bis zu einem Jahr',
        ],
        alt: 'Die Workspaces-Seitenleiste: ein Baum aus Workspaces und Ordnern mit Aufnahmen, Notizen und Projekten, unten ein gesperrter Workspace',
      },
      'dashboards': {
        eyebrow: 'Projekte',
        title: 'Projekte, die du selbst zusammenstellst',
        body: 'Zieh Notizen, Aufnahmen, Dokumente, Personen, Zusagenlisten und Erinnerungen in ein Projekt und lies es durch die Linsen <b>Brief / Overview / Commitments / Sources / People</b>. Pinne eine <b>lebendige Antwort</b> an – eine gespeicherte Frage, deren letzte Antwort mit ihrem Datum aufbewahrt, auf Wunsch neu beantwortet und zurückgezogen wird, sobald ihre Quellen nicht mehr lesbar sind. Du kannst ein Projekt auch direkt fragen, gestützt nur auf das, was darin liegt.',
        points: [
          'Sieben Kachelarten – eine Notiz, eine Aufnahme, ein Dokument, eine Person, eine Zusagenliste, eine Erinnerungsliste oder eine lebendige Antwort',
          'Fünf Linsen auf dieselben Kacheln – von nichts gibt es eine zweite Kopie',
          'Ein Projekt benennt seine eigene Grenze: was es lesen kann und was es abgeleitet hat',
        ],
        alt: 'Ein Projekt in der Brief-Linse: die gespeicherte Antwort auf eine angepinnte Frage, was Aufmerksamkeit braucht, und die aktuellen Belege dahinter',
      },
      'imports': {
        eyebrow: 'Importe',
        title: 'Bring deine bestehenden Notizen mit',
        body: 'Settings → Imports holt einen <b>Notion-Export</b>, einen <b>Obsidian-Vault</b>, <b>Apple Notes</b>, einen Ordner mit <b>Markdown-Dateien</b> oder ein <b>IndexOne-Backup</b> herein. Komplett offline – kein Konto, kein Schlüssel, keine Netzwerkanfrage. Jeder Import läuft zuerst als Probelauf, damit du siehst, was er schreiben würde, bevor er irgendetwas schreibt.',
        points: [
          'Fünf Quellen: ein Notion-Export, ein Obsidian-Vault, Apple Notes, ein Ordner mit Markdown-Dateien, ein IndexOne-Backup',
          'Erst der Probelauf – geschrieben wird erst, wenn du es sagst',
          'Importierte Notizen landen in einem eigenen benannten Ordner, und Ivy liest sie wie alles andere',
        ],
        alt: 'Settings → Imports: Notion, Obsidian, Apple Notes, Markdown-Dateien und IndexOne-Backup, mit dem Hinweis, dass alles auf diesem Mac passiert und nichts hochgeladen wird',
      },
      'ivy': {
        eyebrow: 'Ivy',
        title: 'Sprich mit Ivy – mitten im Meeting.',
        body: 'Genau das fehlt den meisten Notiz-Tools. Frag Ivy mit einem einzigen Tippen, oder schalte in den Einstellungen den Sprachassistenten ein und frag laut; sie antwortet live aus deinem Meeting-Gedächtnis, mit Quellen, die du öffnen kannst – und die Aufnahme stoppt nie.',
        points: [
          'Reasoning-Modell auf dem Gerät (Bielik-11B, Qwen) über Metal',
          'Fundiert statt halluziniert – abgerufen aus deinen eigenen Transkripten',
          'Optionale Websuche nur mit Zustimmung – standardmäßig aus',
        ],
        alt: 'Eine laufende Aufnahme mit einer Frage mitten im Meeting, die Ivy live beantwortet, samt den Quellen, auf die sie sich stützt',
      },
      'ask': {
        eyebrow: 'Frag deinen Vault',
        title: 'Frag über Monate von Calls hinweg.',
        body: 'Wieder Ivy, diesmal gerichtet auf alles, was du je aufgenommen und geschrieben hast. Jede Antwort kommt mit den Meetings und Notizen, aus denen sie stammt – so öffnest du die Quelle, statt ihr einfach zu glauben.',
        points: [
          'Grenz eine Frage auf einen Workspace oder Ordner ein – den ganzen Unterbaum und nichts außerhalb',
          'Unterhaltungen werden gespeichert – Threads zu Vault, Notiz und Meeting bleiben erhalten, mit einem Verlauf auf jeder Ansicht',
          'Eine Unterhaltung verschwindet sofort, wenn ein Ordner, auf den sie sich stützt, nicht mehr lesbar ist',
          'Eigenes Modell: Notizen und Antworten können von Ollama, LM Studio, oMLX, llama.cpp oder einem anderen OpenAI-kompatiblen Server kommen',
        ],
        alt: 'Eine Frage an Ivy über Monate von Meetings und eine einzige Antwort, darunter die Meetings, aus denen sie stammt',
      },
      'transcription': {
        eyebrow: 'Aufnehmen & transkribieren',
        title: 'Es hört beide Seiten des Calls.',
        body: 'Die Zwei-Spur-Aufnahme erfasst dein Mikrofon und das Systemaudio der Gegenseite, transkribiert beides getrennt auf dem Gerät und führt sie nach Uhrzeit zu einem sauberen Me / Others-Transkript zusammen – mit Live-Untertiteln, während du sprichst.',
        points: [
          'Whisper auf dem Gerät – von tiny bis large-v3, inklusive des schnelleren turbo-Builds und quantisierter Varianten',
          'Zuordnung über zwei Spuren: du und alle anderen, dazu Sprachaktivitätserkennung',
          'Eine schwebende Aufnahmeleiste – nimm von überall auf (⌘⇧R)',
          'Voice + screen: nimm deinen Bildschirm mit dem Meeting auf (macOS 14+), kostenlos auf dem Mac',
        ],
        alt: 'Das zusammengeführte Me / Others-Transkript mit Zeitindex, neben der Zeitleiste für Sprecher und Themen',
      },
      'memory': {
        eyebrow: 'Notizen & Gedächtnis',
        title: 'Strukturierte Notizen und ein Graph, der sich selbst aufbaut.',
        body: 'Aus jedem Call wird eine saubere Notiz – Zusammenfassung, Entscheidungen, To-dos, Zitate. Aufnahmen und Notizen liegen nebeneinander im selben Workspace. Personen und Projekte werden automatisch in einen Wissensgraphen übernommen, und versiegelte Workspaces bleiben darin verborgen.',
        points: [
          'Frag über alle Meetings hinweg mit hybrider semantischer Suche',
          'Dossiers zu Personen und Themen, verwandte Meetings, Wochenübersichten',
          'Private Erinnerungen, die den Mac nie verlassen, jeweils verknüpft mit der Aufnahme oder Notiz, aus der sie stammen – Ivy schlägt vor, du entscheidest',
          'To-dos lassen sich auch an Apple Reminders schicken',
          'Füttere es mit PDFs, Office-Dokumenten, gespeicherten Webseiten (.html) und Bildern – auf dem Gerät für Ivy indexiert',
        ],
        alt: 'Der Wissensgraph – Meetings, Notizen, Dokumente und Personen auf einer Karte, mit typisierten Verbindungen dazwischen',
      },
      'receipts': {
        eyebrow: 'Belege',
        title: 'Belegte Aussagen führen zurück zur Aufnahme.',
        body: 'Die Notizen von IndexOne verlangen kein blindes Vertrauen. Jede Zeile, die sich auf tatsächlich Gesagtes stützt, trägt einen Beleg – ein Klick springt direkt zu dieser Sekunde Audio, mit Sprecher. Umschriebene oder unbelegte Zeilen bekommen keinen, so siehst du auf einen Blick, welche Zeilen eine wahrscheinliche Quelle in der Aufnahme haben.',
        points: [
          'Klick auf eine Aussage und hör genau, woher sie kommt',
          'Sprecher und genaue Sekunde auf jedem Beleg',
          'Sieben Ein-Klick-Ergebnisse aus jedem Meeting – Follow-up-Mail, Entscheidungsprotokoll, Ticket, 1:1-Rückblick, Standup, Sales-Rückblick, Interview-Notizen',
          'Versiegelte Ordner verraten nie Zeitpunkte oder Sprecher',
        ],
        alt: 'Die Belege einer generierten Notiz: eine Zeile pro belegter Aussage, jeweils mit Sprecher und der Sekunde Audio, aus der sie stammt',
      },
      'markdown': {
        eyebrow: 'Gehört dir',
        title: 'Markdown rein, Markdown raus. Kein Lock-in.',
        body: 'Exportiere jede Notiz als Markdown oder sichere deine ganze Bibliothek als reine <code>.md</code>-Dateien, die sich in jedem Editor öffnen lassen. Du kommst von Obsidian? Importiere deinen Vault in einem Schritt.',
        points: [
          'Eine verschlüsselte SQLite-Datenbank ist die einzige Quelle der Wahrheit',
          'Ein schreibgeschützter lokaler MCP-Server für Claude Desktop und Claude Code',
          'Markdown-Export jeder Notiz und ein Backup deiner ganzen Bibliothek als reines Markdown',
        ],
        alt: 'Eine strukturierte Notiz – Zusammenfassung, Entscheidungen, To-dos und Zitate – neben den Aufnahmen und Notizen, auf die sie verlinkt',
      },
      'notes': {
        eyebrow: 'Notizen',
        title: 'Nicht nur Meeting-Notizen. Alle deine Notizen.',
        body: 'Ein vollwertiger Markdown-Editor, abgelegt in denselben Workspaces wie deine Aufnahmen – für alles, was du schreibst, nicht nur für das, was IndexOne transkribiert. Markier eine beliebige Passage, und das Ivy-Menü erscheint: verfeinern, kürzen, Ton ändern, übersetzen, Fakten prüfen oder einfach eintippen, was passieren soll.',
        points: [
          'Neunzehn Ivy-Aktionen, nur einen Tastendruck entfernt',
          'Gestützt auf deine eigenen Meetings und Notizen, nicht auf Vermutungen des Modells',
          'Füge Screenshots in Notizen ein; sie bleiben lokal und folgen der Sperre des Workspace',
          'Ivy skills aus dem Bildschirm Plugins steuern Notizen und Antworten von Ivy in der Cloud – wähle sie im Ivy-Fenster, in einer Notiz oder in der Aufnahmeleiste',
        ],
        alt: 'Der Notiz-Editor mit markiertem Text und geöffnetem Ivy-Befehlsmenü mit Refine, Shorten, Change tone und weiteren Aktionen',
      },
    },
  },
  offer: {
    eyebrow: "Kostenlos starten",
    title: "Mach aus Meetings Antworten.",
    lead: "Starte kostenlos auf deinem Mac. Die Cloud nimmst du erst dazu, wenn du mehr brauchst.",
    benefits: {
      local: {
        title: "Kostenlos auf dem Mac",
        body: "Nimm auf, transkribiere und frag Ivy auf deinem Mac. Lokal brauchst du weder Konto noch Karte.",
      },
      sync: {
        title: "Im Browser öffnen",
        body: "Melde dich in der Web-App an und halte deine Notizen synchron. Cloud-Notizen sind in Free enthalten.",
      },
      grow: {
        title: "Mehr Platz, wenn du ihn brauchst",
        body: "Bezahlte Pläne bringen mehr Cloud-Transkription, mehr Ivy und mehr Speicher. Team bringt einen gemeinsamen Arbeitsbereich.",
      },
    },
    download: "Kostenlos laden",
    forMac: "Für Macs mit Apple Silicon",
    plans: "Pläne ansehen",
    web: "Web-App öffnen",
    status: "Cloud-Pläne sind erhältlich. Melde dich in der Web-App an, um einen Plan zu kaufen oder dein Abo zu verwalten. Lokale Mac-Funktionen bleiben verfügbar.",
    trialTitle: "Jeden Monat kostenlos",
    trial: "Jedes kostenlose Konto erhält pro Kalendermonat (UTC) 200.000 Ivy-Einheiten und ein Kontingent für Cloud-Transkription, ohne Karte. Lokale Mac-Funktionen haben kein Planlimit.",
    meterTitle: "Cloud-Transkription in bezahlten Plänen",
    meter: "Personal und Team enthalten Cloud-Transkription. Bei intensiver Nutzung können neue Aufnahmen in eine langsamere Warteschlange kommen. Limits und Fair-Use-Regeln stehen in den Nutzungsbedingungen. Die lokale Transkription auf deinem Mac unterliegt keinen Kontingenten deines Tarifs.",
    fairUse: "Personal und Team enthalten Cloud-Transkription. Bei intensiver Nutzung können neue Aufnahmen in eine langsamere Warteschlange kommen. Limits und Fair-Use-Regeln stehen in den Nutzungsbedingungen. Die lokale Transkription auf deinem Mac unterliegt keinen Kontingenten deines Tarifs.",
    fairUseLink: "Nutzungsbedingungen lesen (auf Polnisch)",
    privacyTitle: "Lokal und Cloud",
    privacy: "Lokale Mac-Verarbeitung bleibt auf dem Mac. Standard-Cloud speichert und verarbeitet Inhalte auf für den Betreiber lesbaren Servern, ohne Ende-zu-Ende-Verschlüsselung. Mustermaskierung ist keine vollständige Anonymisierung. Ein Plan gewährt keinen Zugriff auf private Bereiche.",
    detailsTitle: "Details zu den Plänen",
    details: "Das Free-Kontingent erneuert sich zu Beginn jedes Kalendermonats (UTC). Die Kontingente von Personal und Team erneuern sich zu Beginn jedes Abrechnungszeitraums. Aufnahmen, die nicht mehr in das verbleibende Schnellkontingent passen, können in die langsamere Spar-Warteschlange kommen. Passt eine Aufnahme nicht in das verbleibende Sparkontingent, nimmt der Dienst sie nicht zur Transkription an. Du kannst sie nach der Erneuerung des Kontingents erneut einreichen. Wie gezählt wird und wie groß die Kontingente sind, steht in den Nutzungsbedingungen. Die Standard-Cloud des Kontos ist nicht Ende-zu-Ende-verschlüsselt: Der Betreiber kann gespeicherte und verarbeitete Inhalte lesen. Musterbasiertes Maskieren ist keine vollständige Anonymisierung. Lokale Verarbeitung auf deinem Mac bleibt auf deinem Mac. Bezahlte Pläne geben nie Zugriff auf private Bereiche.",
    more: "Mehr zur Abrechnung",
    after: "Free umfasst einfache Notizen, Bearbeitung, normale Suche, Synchronisierung, Lesen und Export innerhalb von 1 GB sowie das monatliche Cloud-Kontingent. Bezahlte Pläne bieten mehr Cloud-KI, Transkription und Speicher.",
    team: "Personal und jede Organisation haben eigene Abos und Guthaben. Team: 2,25 Mio. interaktive Ivy-Einheiten und 250.000 Automationseinheiten pro Platz; Automationen teilen einen Pool. Den Speicher teilt sich die Organisation. Plätze ändern keine Zugriffsrechte. Bis zu 2 kostenlose Organisationen mit je 5 Mitgliedern teilen den Kontospeicher des Gründers.",
    lifecycle: "Cloud-Audio: standardmäßig 30 Tage; Free 7/14/30, bezahlt auch 90. Cloud-Papierkorb: bleibt, bis du ihn leerst. Kündigung löscht keine Inhalte; bezahlte Rechte bis Periodenende. Audio vor Ablauf exportieren.",
    docs: "Pläne und Abrechnung · englische Dokumentation",
    comparison: "Pläne vergleichen",
    feature: "Planfunktion",
    local: "Lokale Mac-Werkzeuge",
    basics: "Cloud-Notizen und Sync im Browser",
    ivy: "Cloud-Ivy-Einheiten / Monat",
    asr: "Cloud-Transkription",
    asrPaid: "Enthalten · mit Limits",
    asrBasic: "Monatliches Kontingent",
    storage: "Cloud-Speicher",
    gb: "GB",
    meetBot: "Google-Meet-Bot",
    included: "Enthalten",
    notIncluded: "Nicht enthalten",
    seat: "pro Platz",
    unit: "Ivy-Einheiten sind ein Verarbeitungsbudget, keine rohen Modelltoken oder garantierte Antwortzahl. GB = eine Milliarde Bytes.",
  },
  pricing: {
    eyebrow: "Preise",
    title: "Kostenlos starten. Bei Bedarf mehr Platz.",
    lead: "Lokale Mac-Werkzeuge sind kostenlos. Wähle einen Cloud-Plan, wenn du mehr brauchst.",
    recommended: "Empfohlen",
    note: "Personal enthält die MwSt. Team ab {seats} Plätzen: insgesamt {total} netto pro Monat. Steuern und Endpreis siehst du vor dem Kauf in der Web-App.",
    compareLink: "Alle Details vergleichen",
    peek: { benefit: "Mehr Cloud-Transkription", link: "Personal-Plan ansehen" },
    plans: {
      free: {
        name: "Free",
        audience: "Deine ersten Meeting-Notizen.",
        period: "pro Monat",
        points: [
          "Lokale Mac-Werkzeuge",
          "Cloud-Notizen und Sync",
          "{ivy} Ivy-Einheiten pro Monat",
          "{storage} GB Cloud-Speicher",
        ],
        cta: "Kostenlos laden",
        trust: "Keine Karte nötig",
      },
      personal: {
        name: "Personal",
        audience: "Mehr Platz für deine Arbeit.",
        period: "pro Monat, inkl. MwSt.",
        points: [
          "Alles aus Free",
          "Mehr Cloud-Transkription",
          "{ivy} Ivy-Einheiten pro Monat",
          "{storage} GB Cloud-Speicher",
        ],
        cta: "Personal wählen",
        trust: "Jederzeit kündbar",
      },
      team: {
        name: "Team",
        audience: "Ein gemeinsamer Ort für dein Team.",
        period: "netto pro Platz und Monat, ab {seats} Plätzen",
        points: [
          "Gemeinsame Notizen und Arbeitsbereich",
          "Cloud-Transkription für jeden Platz",
          "{ivy} Ivy-Einheiten pro Platz und Monat",
          "{storage} GB Cloud-Speicher pro Platz",
          "Google-Meet-Bot",
        ],
        cta: "Team wählen",
        trust: "Plan in der Web-App verwalten",
      },
    },
  },
  compare: {
    eyebrow: 'Wettbewerb',
    title: 'IndexOne im Vergleich.',
    lead: 'Obsidian, Notion, Evernote, Bear und Amie sind gut in dem, was sie tun. IndexOne ist für das gebaut, was im Meeting passiert – es aufzunehmen, auf deinem Mac zu transkribieren und Fragen dazu zu stellen – und es importiert deinen Obsidian-Vault in einem Schritt.',
    capability: 'Funktion',
    caption: 'IndexOne im Vergleich mit anderen Notiz-Apps',
    labels: { yes: 'Ja', partial: 'Teilweise', no: 'Nein', unknown: 'Unbekannt' },
    notStated: 'Keine Angabe',
    footnote: 'Basierend auf den öffentlichen Preis- und Funktionsseiten der Anbieter, geprüft im Oktober 2026. Pläne und Funktionen ändern sich – prüfe vor deiner Entscheidung die Website des Anbieters. Produktnamen sind Marken ihrer Inhaber; IndexOne steht in keiner Verbindung zu ihnen.',
    rows: {
      'capture': {
        criterion: 'Nimmt beide Seiten eines Calls auf',
        cells: ['Mikrofon und Systemaudio, als zwei Spuren', 'Nur Mikrofon (Kern-Plugin Audio recorder)', 'Desktop-App; im Browser nur Mikrofon', 'Meeting-Recorder am Desktop', 'Keine Aufnahme', 'Desktop, ohne Bot'],
      },
      'local-transcription': {
        criterion: 'Transkription auf deinem Gerät',
        cells: ['Whisper auf dem Gerät im Bereich On this Mac', 'Keine integrierte Transkription', 'Cloud', 'Cloud', 'Keine Transkription', 'Cloud'],
      },
      'local-ai': {
        criterion: 'KI, die komplett auf deinem Gerät laufen kann',
        cells: ['Ivy on this Mac oder dein eigener lokaler KI-Server', 'Keine integrierte KI; Community-Plugins', 'Nur Cloud', 'Nur Cloud', 'Keine integrierte KI', 'Nur Cloud'],
      },
      'ask-all': {
        criterion: 'Fragen über alle bisherigen Meetings und Notizen',
        cells: ['Antworten nennen ihre Quellen', 'Nur über Community-Plugins', 'Business-Plan; nennt Quellen', 'AI Assistant über alle Notizen; Meeting-KI pro Aufnahme', '', 'Chat über frühere Aufnahmen mit Pro; Quellenangaben nicht genannt'],
      },
      'local-data': {
        criterion: 'Daten bleiben standardmäßig auf deinem Gerät',
        cells: ['Im Bereich On this Mac; Cloud-Bereiche liegen im Web', 'Lokale Dateien', 'Cloud von Notion', 'Cloud von Evernote', 'Lokale Datenbank; iCloud-Sync mit Pro', 'Cloud von Amie'],
      },
      'markdown': {
        criterion: 'Notizen als reine Markdown-Dateien, die dir gehören',
        cells: ['Markdown-Export und Backup; die verschlüsselte Datenbank ist die Quelle', '', 'Nur Markdown-Export', 'Export als ENEX, HTML oder PDF', 'Datenbank; Markdown-Export', ''],
      },
      'encryption': {
        criterion: 'Verschlüsselung unter deiner Kontrolle',
        cells: ['Verschlüsselte Datenbank, Ordnersperren per Touch ID, eine verschlüsselte lokale Kopie jedes Web-Bereichs', 'Ende-zu-Ende-Verschlüsselung für das kostenpflichtige Sync', 'Verschlüsselt auf den Servern von Notion; nicht Ende-zu-Ende', 'Passphrase nur für ausgewählten Text', 'Einzelne Notizen, mit Pro', ''],
      },
      'platforms': {
        criterion: 'Plattformen',
        cells: ['macOS, Web; iPhone-App folgt bald', 'macOS, Windows, Linux, iOS, Android', 'macOS, Windows, Web, iOS, Android', 'macOS, Windows, Web, iOS, Android', 'macOS, iOS, iPadOS, Web (Beta)', 'macOS, Windows, iOS'],
      },
      'price': {
        criterion: 'Preis',
        cells: ['Free · Personal 49 PLN · Team 75 PLN', 'Kostenlos; Sync ab $4/Monat bei jährlicher Zahlung', 'Kostenlos; KI und Meeting-Notizen erfordern Business, $20/Monat bei jährlicher Zahlung', 'Kostenlos bis 50 Notizen; Starter $99/Jahr', 'Kostenlos; Pro $29.99/Jahr', 'Kostenlos mit 25 Notiz-Credits; Pro ab €20/Monat bei jährlicher Zahlung'],
      },
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Was zuerst gefragt wird.',
    leadHtml: 'Hier kurze Antworten; die <a href="/docs/">Dokumentation</a> hat die Details.',
    items: [
      {
        question: 'Was ist in Free enthalten?',
        answer: 'Auf dem Mac alles: Aufnahme, Transkription, Notizen, Ivy on this Mac und Exporte, ohne Konto und ohne Planlimit. Ein kostenloses Konto bringt Cloud-Notizen, Bearbeitung, Suche, Sync, Lesen und Export im Browser innerhalb von 1 GB, dazu ein monatliches Kontingent an Ivy-Einheiten und Cloud-Transkription. Bezahlte Pläne bieten mehr Cloud-Transkription, mehr Ivy-Einheiten und mehr Speicher. Bei intensiver Nutzung können neue Aufnahmen in eine langsamere Warteschlange kommen; Limits und Fair-Use-Regeln stehen in den Nutzungsbedingungen.',
      },
      {
        question: 'Geht mein Audio in die Cloud?',
        answer: 'Nicht im Bereich On this Mac: Dort läuft die Transkription mit Whisper auf deinem Mac. Nur Text kann das Gerät verlassen: geschwärzt zu Claude Code oder Codex, nachdem du zugestimmt hast, oder ohne E-Mail-Adressen, Karten- und Telefonnummern zu einem lokalen KI-Server in deinem Netzwerk, nachdem du seine Adresse bestätigt hast. Personal- und Organisationsbereiche liegen bei IndexOne im Web, ihre Aufnahmen werden also dort gespeichert.',
      },
      {
        question: 'Was ist Ivy?',
        answer: 'Ivy ist die KI in IndexOne. Frag sie während eines Meetings, ohne die Aufnahme zu stoppen, oder danach über alles, was du aufgenommen und geschrieben hast. Jede Antwort nennt die Meetings und Notizen, aus denen sie stammt. Jeder Bereich wählt eine KI: Ivy on this Mac, Ivy on the web für Personal und Organisationen, deinen eigenen lokalen KI-Server oder – nach ausdrücklicher Zustimmung – Claude Code oder Codex.',
      },
      {
        question: 'Brauche ich eine Internetverbindung?',
        answer: 'Einmal, um die Sprachmodelle zu laden. Danach funktionieren Aufnahme, Transkription, Suche und Ivy on this Mac offline. Personal- und Organisationsbereiche öffnen sich offline aus ihrer verschlüsselten Kopie und senden deine Änderungen, sobald du wieder online bist. Ivy on the web, Claude Code, Codex und Connectors brauchen eine Verbindung.',
      },
      {
        question: 'Brauche ich Claude Code?',
        answer: 'Nein. Jeder Bereich hat genau eine KI-Auswahl: Ivy on this Mac, Ivy on the web (Personal und Organisationen), Claude Code, Codex oder dein eigener lokaler KI-Server wie Ollama, LM Studio, oMLX oder llama.cpp.',
      },
      {
        question: 'Welche Sprachen werden unterstützt?',
        answer: 'Whisper transkribiert viele Sprachen. Für KI auf dem Gerät kannst du mehrsprachige Qwen3-Modelle oder die polnischsprachigen Bielik-Modelle wählen. Das Plugin Languages schreibt jede Notiz in der Sprache deiner Wahl, kann eine zweite Sprache hinzufügen, übersetzt Meetings nachträglich und führt ein Glossar für Namen und Begriffe.',
      },
      {
        question: 'Warum fragt macOS nach „Bildschirm- und Systemaudioaufnahme“?',
        answer: 'Über diese Berechtigung lässt macOS eine App den Ton anderer Apps hören – also die anderen Personen im Call. IndexOne speichert nur ihren Ton, es sei denn, du schaltest das Plugin Screen recording ein und wählst Voice + screen.',
      },
      {
        question: 'Funktioniert es mit Kopfhörern und auf Intel-Macs?',
        answer: 'Kopfhörer ja: Der Ton der Gegenseite wird vom System abgegriffen, nicht von deinen Lautsprechern. Intel-Macs nein: Die Mac-App braucht Apple Silicon (M1 oder neuer). Auf jedem anderen Computer nutzt du IndexOne im Browser.',
      },
      {
        question: 'Gibt es eine App für iPhone oder Windows?',
        answer: 'Eine iPhone-App kommt bald in den App Store. Unter Windows, Linux oder auf einem Intel-Mac öffnest du IndexOne im Browser unter app.index-one.io; dort gemachte Aufnahmen werden in der Cloud transkribiert und zählen zu deinem Plan.',
      },
      {
        question: 'Ist IndexOne Open Source?',
        answer: 'Nein. Die App ist kostenlos zum Herunterladen und Nutzen, aber ihr Quellcode ist nicht öffentlich. Die Versionen 2.8.0 und älter wurden ursprünglich unter der GNU AGPL-3.0 veröffentlicht, solange ihr Quellcode öffentlich war.',
      },
    ],
  },
  changelog: {
    eyebrow: 'Änderungen',
    title: 'Neu in IndexOne',
    lead: 'Jede Version der macOS-App, die neueste zuerst. Lade die aktuelle Version oder sieh dir alle Builds und Prüfsummen auf GitHub an.',
    download: 'Neueste Version laden',
    github: 'Alle Versionen auf GitHub',
    latest: 'Aktuell',
    englishNote: 'Die Versionshinweise erscheinen auf Englisch.',
    versions: 'Versionen',
    filterLabel: 'Versionen anzeigen',
    filters: { all: 'Alle', features: 'Neuerungen', fixes: 'Fehlerbehebungen' },
    kinds: { major: 'Hauptversion', minor: 'Neuerungen', patch: 'Fehlerbehebungen' },
    count: { one: '{count} Version', other: '{count} Versionen' },
    showOlder: 'Ältere Versionen anzeigen',
    empty: 'Keine Versionen dieser Art.',
  },
  meetingBot: {
    eyebrow: "Für Meeting-Teilnehmende",
    title: "Der IndexOne-Bot zeichnet dein Meeting auf.",
    lead: "Du bist hier, weil der IndexOne-Notizbot einem Google-Meet-Anruf beigetreten ist, an dem du teilnimmst. Diese Seite erklärt, wer das Meeting aufzeichnet, was mit der Aufnahme passiert und was du dagegen tun kannst.",
    noticeLabel: "Die Nachricht, die der Bot im Meeting-Chat postet",
    noticeNote: "Der Bot postet diese Nachricht auf Englisch, sobald er in den Anruf gelassen wird. Bevor sie gepostet ist, nimmt er nichts auf.",
    cards: {
      bot: { title: "Was der Bot ist", body: "Ein Notizbot, der Google Meet als Teilnehmer beitritt und deshalb in der Liste der Personen im Anruf erscheint. Sein Name ist der, den die Organisation gewählt hat, die ihn geschickt hat, meist ihr eigener Name, gefolgt von „· IndexOne“, zum Beispiel „Northwind · IndexOne“." },
      controller: { title: "Wer für deine Daten verantwortlich ist", body: "Die Organisation, die den Bot geschickt hat, also die in seinem Namen. Sie ist Verantwortliche für deine personenbezogenen Daten: Sie entscheidet, das Meeting aufzuzeichnen, zu welchem Zweck und was danach mit der Aufnahme geschieht." },
      processor: { title: "Was IndexOne tut", body: "IndexOne ist Auftragsverarbeiter. Es zeichnet das Meeting im Auftrag dieser Organisation auf, transkribiert und speichert es, und zwar nur nach ihren Weisungen. Der Anbieter von IndexOne ist in der IndexOne-Datenschutzerklärung genannt." },
      recorded: { title: "Was aufgezeichnet wird", body: "Der Ton des Meetings und ein daraus erstelltes schriftliches Transkript. Alles, was du sagst, während der Bot im Anruf ist, landet in der Aufnahme und im Transkript." },
      purpose: { title: "Wozu", body: "Damit die Organisation Notizen und Zusammenfassungen ihres Meetings hat. Die Aufnahme liegt im IndexOne-Arbeitsbereich dieser Organisation, wo die Personen sie öffnen können, denen sie es erlaubt." },
      storage: { title: "Wie lange es gespeichert wird", body: "Wie lange die Aufnahme in ihrem Arbeitsbereich bleibt, entscheidet die Organisation. Wie lange IndexOne Daten speichert, steht in der IndexOne-Datenschutzerklärung." },
    },
    policyLink: "IndexOne-Datenschutzerklärung (auf Polnisch)",
    rights: {
      eyebrow: "Deine Rechte",
      title: "Du kannst widersprechen, deine Daten einsehen und ihre Löschung verlangen.",
      lead: "Diese Rechte gibt dir die DSGVO. Mach sie zuerst bei der Organisation geltend, die den Bot geschickt hat, denn sie entscheidet über die Aufnahme.",
      items: {
        object: { title: "Widerspruch", body: "Du kannst der Aufzeichnung widersprechen. Bitte während des Anrufs den Host, den Bot zu entfernen, oder verlasse den Anruf. Teile der Organisation danach mit, dass du der Nutzung der Aufnahme widersprichst." },
        access: { title: "Auskunft", body: "Du kannst die Organisation fragen, ob sie eine Aufnahme oder ein Transkript mit dir hat, und eine Kopie verlangen." },
        erasure: { title: "Löschung", body: "Du kannst die Organisation bitten, die Aufnahme oder die Teile des Transkripts zu löschen, die dich betreffen." },
        complaint: { title: "Beschwerde", body: "Du kannst dich bei einer Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel in dem EU-Land, in dem du lebst oder arbeitest. In Polen ist das der Präsident des Amtes für den Schutz personenbezogener Daten (UODO)." },
      },
    },
    steps: {
      title: "So nutzt du deine Rechte",
      items: [
        { title: "Während des Meetings", body: "Bitte den Host, den Bot zu entfernen, oder verlasse den Anruf. Du musst keinen Grund nennen." },
        { title: "Nach dem Meeting", body: "Schreib der Person, die das Meeting organisiert hat, oder der Organisation aus dem Namen des Bots. Sie ist dafür zuständig, deine Anfrage zu beantworten." },
        { title: "Wenn du sie nicht erreichst", body: "Schreib IndexOne über die Kontaktdaten in der IndexOne-Datenschutzerklärung und nenne das Meeting. IndexOne leitet deine Anfrage an die Organisation weiter." },
      ],
    },
    note: "Diese Seite beschreibt den IndexOne-Bot allgemein. Die Organisation, die ihn geschickt hat, hat vielleicht eigene Datenschutzhinweise mit mehr Details; frag sie danach.",
  },
  cta: {
    title: 'Probier es bei deinem nächsten Call aus.',
    lead: 'Lade IndexOne kostenlos herunter und nimm dein nächstes Meeting auf: kein Bot, kein Konto, keine Karte. Du willst deine Notizen auch im Browser? Erstelle ein kostenloses Konto.',
    compare: 'Pläne vergleichen',
    download: 'Für Mac laden – kostenlos',
    brew: 'Lieber mit Homebrew?',
    brewCopy: 'Befehl kopieren',
    signup: 'Kostenloses Konto erstellen',
    legacyHtml: 'Du nutzt Version 2.8.0 oder älter? Deren Update-Prüfung erreicht uns nicht mehr. Lade einmal die <a href="{download}">neueste Version</a> herunter und zieh sie in den Ordner „Programme“, um die alte Kopie zu ersetzen; deine Bibliothek, Aufnahmen und Einstellungen bleiben, wo sie sind. Ab 2.9.0 findet die App neue Versionen von selbst.',
  },
  footer: {
    legalHtml: 'Mac-App und Web-App · iPhone-App folgt bald · Ivy auf dem Gerät · gebaut mit Tauri, Angular und Rust · kostenlos auf dem Mac · © {year} <a href="{authors}">MonoOne</a> · Text <a href="{license}">CC BY 4.0</a>',
    legalNav: 'Rechtliche Hinweise',
    terms: 'Nutzungsbedingungen (PL)',
    privacyPolicy: 'Datenschutzerklärung (PL)',
    withdrawal: 'Widerrufsrecht (PL)',
    dpa: 'Auftragsverarbeitungsvertrag (PL)',
    meetingBot: 'Meeting-Bot: Hinweise für Teilnehmende',
    contact: 'Kontakt',
  },
}

// The FAQ ends with the offer details shown on the pricing page.
content.faq.items.push(
  { question: content.offer.trialTitle, answer: content.offer.trial },
  { question: content.offer.meterTitle, answer: content.offer.meter },
  { question: content.offer.privacyTitle, answer: content.offer.privacy },
  { question: "Wer bezahlt Team?", answer: content.offer.team },
  ...content.privacy.lifecycle.items.map(item => ({ question: item.title, answer: item.body })),
)

export default content
