import type { SiteContent } from './types'

const content: SiteContent = {
  meta: {
    home: {
      title: 'IndexOne — lokale Meeting-Notizen für macOS, mit Ivy',
      description: 'Nimm Meetings auf dem Mac auf, transkribiere sie und frag Ivy, deine KI – live oder über alle Calls. Lokale oder geschwärzte Cloud-KI, Notizen in Markdown.',
    },
    features: {
      breadcrumb: 'Funktionen',
      title: 'Funktionen — IndexOne, Meeting-Notizen für macOS',
      description: 'Workspaces, Projekte, Importe, Ivy im Meeting, Fragen an deinen Vault, Zwei-Spur-Transkription, Belege, Markdown-Export und Shared Ivy – alle Funktionen.',
    },
    privacy: {
      breadcrumb: 'Datenschutz',
      title: 'Datenschutz bei IndexOne — was deinen Mac nie verlässt',
      description: 'Transkription auf dem Gerät, SQLCipher, Ordnersperren per Touch ID, Schwärzungs-Firewall und Zustimmung vor jeder Cloud-KI. Sieh genau, was rausgeht.',
    },
    pricing: {
      breadcrumb: 'Preise',
      title: 'IndexOne: Preise und Vergleich mit Obsidian, Notion & Co.',
      description: 'IndexOne ist im Early Access kostenlos. Vergleiche es mit Obsidian, Notion, Evernote, Bear und Amie: Aufnahme, lokale KI, Verschlüsselung, Markdown.',
    },
    changelog: {
      breadcrumb: 'Änderungen',
      title: 'Änderungen — was jede IndexOne-Version bringt',
      description: 'Jede IndexOne-Version für macOS, die neueste zuerst: neue Funktionen, Korrekturen und Downloads, mit dem Datum jeder Version.',
    },
    ogImageAlt: 'IndexOne — lokale Meeting-Notizen für macOS, mit Ivy',
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
    badgeLocal: 'Local-first · macOS',
    badgeIvy: 'Ivy auf dem Gerät',
    badgeStar: 'Auf GitHub mit Stern markieren',
    githubAria: 'IndexOne auf GitHub',
    titleStrong: 'Meeting-Notizen mit Ivy –',
    titleSoft: 'und du entscheidest, wo sie läuft.',
    subHtml: 'IndexOne nimmt deine Calls auf und transkribiert sie <b>auf deinem Mac</b>. Frag Ivy live, mitten im Meeting, und über alles, was du je aufgenommen hast. Lass die KI lokal laufen oder entscheide dich ausdrücklich für <b>geschwärzte Cloud-KI</b> – dein Meeting-Archiv bleibt auf deinem Mac.',
    download: 'Für macOS laden',
    privacyCta: 'So funktioniert der Datenschutz',
    note: 'Signiert und notarisiert · macOS 13.4+ · Apple Silicon und Intel · deine Notizen bleiben Markdown, das dir gehört',
    videoLabel: 'Eine 90-Sekunden-Tour durch IndexOne: ein Meeting wird aufgenommen, während daneben eine Notiz entsteht, die danach geschriebene Notiz und die Punkte, die sie herauszieht, die Sprecher-Zeitleiste, eine Frage an Ivy über den ganzen Vault mit Antwort samt Quellen, der Wissensgraph, die Workspaces-Leiste und die Suche auf dem Gerät, ein Projekt, People und ein Workspace, der sich nicht öffnet, weil er versiegelt ist',
    play: 'Die 90-Sekunden-Tour ansehen',
  },
  trust: {
    aria: 'Auf einen Blick',
    items: ['Transkription auf dem Gerät', 'Touch-ID-Sperre im Ruhezustand', 'Keine Cloud nötig', 'Reines Markdown, das dir gehört'],
  },
  unique: {
    eyebrow: 'Nur in IndexOne',
    title: 'Was keine andere Notiz-App für deine Meetings tut.',
    lead: 'Viele Apps speichern Notizen oder transkribieren Calls. IndexOne nimmt beide Seiten des Calls auf deinem Mac auf, lässt dich Ivy schon während des Meetings fragen und belegt jede Zeile, die es schreibt.',
    items: {
      'live': {
        title: 'Frag Ivy mitten im Meeting – alles bleibt auf deinem Mac',
        body: 'Tippe oder sprich eine Frage mitten im Call und erhalte eine Antwort, die auf allen aufgenommenen Meetings beruht, mit Quellen zum Öffnen – die Aufnahme läuft dabei weiter. Lass Ivy auf dem Gerät oder über ein lokales Ollama laufen, und kein Meeting-Text verlässt deinen Mac; Cloud-KI bleibt aus, bis du einmal zustimmst.',
        link: 'So funktioniert Ivy',
      },
      'capture': {
        title: 'Beide Seiten des Calls, transkribiert auf deinem Mac',
        body: 'Dein Mikrofon und das Systemaudio der anderen Teilnehmenden werden als zwei Spuren aufgenommen und von Whisper auf dem Gerät zu einem Me / Others-Transkript zusammengeführt. Eine Cloud-Transkription gibt es nicht.',
        link: 'Aufnahme und Transkription',
      },
      'receipts': {
        title: 'Für jede Aussage gibt es einen Beleg',
        body: 'Jede belegte Zeile einer Notiz verlinkt auf die Sekunde Audio, aus der sie stammt – mit Sprecher. Zeilen ohne Beleg bekommen keinen, so siehst du, was verifiziert ist.',
        link: 'Belege',
      },
      'security': {
        title: 'Verschlüsselt, wo immer es liegt',
        body: 'Deine gesamte Bibliothek ist auf dem Mac mit SQLCipher verschlüsselt. Alles, was du teilst, wird vor dem Upload mit AES-256-GCM versiegelt, der Server speichert also nur Chiffretext – und die Anmeldung nutzt OPAQUE, sodass er dein Passwort nie erfährt.',
        link: 'Sicherheit und Datenschutz',
      },
      'locks': {
        title: 'Ordner, versiegelt mit Touch ID',
        body: 'Sperr einen Workspace oder Ordner, und seine Notizen, Transkripte und Audiodateien werden mit AES-256-GCM versiegelt. Solange er gesperrt ist, ist er für Suche, Graph, MCP und Audioplayer unsichtbar.',
        link: 'Das Sperrmodell',
      },
      'markdown': {
        title: 'Reines Markdown und ein lokaler MCP-Server',
        body: 'Notizen landen als reines Markdown mit Wikilinks in deinem Obsidian-Vault, und ein schreibgeschützter MCP-Server auf 127.0.0.1 lässt Claude und andere Agents sie abfragen.',
        link: 'Markdown und MCP',
      },
    },
    seeAll: 'Alle Funktionen ansehen',
  },
  how: {
    eyebrow: 'So funktioniert es',
    title: 'Aufnehmen → verstehen → fragen. Local-first aus Prinzip.',
    lead: 'Eine lokale Pipeline macht aus einem Live-Call durchsuchbares Gedächtnis. Die Transkription bleibt auf deinem Mac; Ivy kann lokal laufen oder – mit deiner ausdrücklichen Zustimmung – geschwärzte Cloud-Verarbeitung nutzen.',
    steps: [
      {
        label: '01 · Aufnehmen',
        title: 'Hört den ganzen Call',
        body: 'Dein Mikrofon <b>und</b> das Systemaudio der Gegenseite, getrennt aufgenommen und transkribiert, dann von Whisper auf dem Gerät zu einem sauberen <b>Me / Others</b>-Transkript zusammengeführt.',
      },
      {
        label: '02 · Verstehen',
        title: 'Ivy, auf deinem Mac',
        body: 'Ein Reasoning-Modell läuft lokal über einem semantischen Index von allem, was du aufgenommen hast – es schreibt eine strukturierte Notiz und hält das Gedächtnis dauerhaft durchsuchbar.',
      },
      {
        label: '03 · Fragen',
        title: 'Antworten, live und mit Quellen',
        body: 'Frag Ivy mitten im Meeting und erhalte eine fundierte Antwort mit <b>Quellen</b> – oder frag später über Monate von Calls hinweg. Die Aufnahme stoppt nie.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Sicherheit & Datenschutz',
    title: 'Datenschutz ist keine Einstellung. Er ist die Architektur.',
    leadHtml: 'IndexOne ist so gebaut, dass Transkription, Suche und Ivy auf dem Gerät <b>ganz ohne Netzwerk</b> laufen können – sobald du das eine abschaltest, das doch nach außen geht: die Prüfung auf eine neue Version beim Start. Wenn du Cloud-KI wählst, stehen Zustimmung und eine Schwärzungs-Firewall vor diesem Datenabfluss.',
    cards: {
      'offline': {
        title: 'Nichts verlässt das Gerät',
        body: 'Mit einem einmal geladenen Modell auf dem Gerät oder mit Ollama berühren dein Audio und deine Transkripte nie ein Netzwerk. Das Reasoning passiert auf deinem Mac.',
      },
      'at-rest': {
        title: 'Zwei Verschlüsselungsebenen im Ruhezustand',
        body: 'Die gesamte Datenbank ist mit SQLCipher verschlüsselt. Darüber legt eine <b>AES-256-GCM</b>-Sperre pro Ordner Inhaltsschlüssel, umhüllt von einem Hauptschlüssel, den nur <b>Touch ID</b> freigibt.',
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
        title: 'Die eine Anfrage, die wir standardmäßig stellen',
        body: 'Beim Start fragt IndexOne bei GitHub nach, ob es eine neuere Version gibt. Die Anfrage nennt die Version, die du nutzt, denn genau so wird die Frage gestellt – und sonst nichts: keine Meetings, keine Notizen, kein Konto. Du kannst sie unter <b>Settings → Privacy</b> abschalten. Sie ist das Einzige auf dieser Seite, das passiert, ohne dass du darum bittest – und genau deshalb steht sie hier.',
      },
    },
    tableCaption: 'Wo jeder KI-Anbieter läuft und ob Meeting-Text deinen Mac verlässt',
    tableHeaders: ['Ivy / Anbieter', 'Wo es läuft', 'Verlässt Meeting-Text deinen Mac?'],
    providers: {
      'on-device': { name: 'Ivy auf dem Gerät', note: 'Bielik / Qwen', where: 'Vollständig lokal' },
      'ollama': { name: 'Ollama', where: 'Vollständig lokal' },
      'claude-code': { name: 'Claude Code', note: 'Standard für Zusammenfassungen', where: 'Lokale CLI → Cloud' },
      'codex': { name: 'Codex', note: 'die CLI von OpenAI, ohne Tools ausgeführt', where: 'Lokale CLI → Cloud' },
      'anthropic': { name: 'Anthropic API', note: 'mit eigenem Schlüssel', where: 'Direkt per HTTPS' },
      'gateway': { name: 'AI Gateway', note: 'jeder OpenAI-kompatible Endpunkt – LiteLLM, Kong, Portkey, vLLM …', where: 'Direkt per HTTPS' },
    },
    leavesYes: 'Nur nach Zustimmung; mit Schwärzungs-Firewall',
    leavesNo: 'Nein',
    shotAlt: 'Die Datenschutzeinstellungen von IndexOne: in klarer Sprache, was entfernt wird, bevor Text das Gerät verlässt, welche Anbieter Cloud sind und ob Cloud-Verarbeitung erlaubt wurde',
    footnote: 'IndexOne sagt dir in klarer Sprache, was genau deinen Mac verlässt – und jeder Cloud-KI-Aufruf wird protokolliert und dir angezeigt. Deine Meetings bleiben auf dem Gerät, solange du nicht zustimmst. Eine einzige Modellauswahl gilt für alle KI-Funktionen und akzeptiert immer auch eine selbst eingetippte Modell-ID – so funktioniert sogar ein Modell, das nach diesem Build erschienen ist.',
  },
  features: {
    eyebrow: 'Was du bekommst',
    title: 'Ein Meeting-Tool, das sich wirklich erinnert.',
    lead: 'Ein verschlüsselter Speicher, drei Wege, ihn zu nutzen – die App, ein lokaler MCP-Server und deine exportierten Markdown-Dateien. Ein Baum hält alles zusammen, Projekte sitzen darauf, und Ivy liest alles davon.',
    items: {
      'workspaces': {
        eyebrow: 'Workspaces',
        title: 'Ein Baum für alles',
        body: 'Ein einziger Baum – <b>Workspaces › Ordner › deine Aufnahmen und Notizen</b> – in einer Seitenleiste, die sich zu einer schmalen Leiste einklappt, wenn du Platz brauchst. Sperr einen Workspace, und alles darin wird mit ihm versiegelt.',
        points: [
          'Aufnahmen, Notizen, Aufgaben und Projekte landen am selben Ort',
          'Ein versiegelter Workspace zeigt seinen Namen und sonst nichts – keine Zahlen, keine Inhalte',
          'Lass Ivy eine verirrte Aufnahme für dich einsortieren',
          'Versehentlich gelöscht? Der Papierkorb hebt es 30 Tage auf – oder so lange du willst, bis zu einem Jahr',
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
        body: 'Genau das fehlt den meisten Notiz-Tools. Ruf Ivy mit einem Aktivierungswort oder einem einzigen Tippen auf; sie antwortet live aus deinem Meeting-Gedächtnis, mit Quellen, die du öffnen kannst – und die Aufnahme stoppt nie.',
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
          'Füttere es mit PDFs, Office-Dokumenten, Webseiten und Bildern – auf dem Gerät für Ivy indexiert',
        ],
        alt: 'Der Wissensgraph – Meetings, Notizen, Dokumente und Personen auf einer Karte, mit typisierten Verbindungen dazwischen',
      },
      'receipts': {
        eyebrow: 'Belege',
        title: 'Jede Aussage führt zurück zur Aufnahme.',
        body: 'Die Notizen von IndexOne verlangen kein blindes Vertrauen. Jede Zeile, die sich auf tatsächlich Gesagtes stützt, trägt einen Beleg – ein Klick springt direkt zu dieser Sekunde Audio, mit Sprecher. Umschriebene oder unbelegte Zeilen bekommen keinen, so siehst du auf einen Blick, was verifiziert ist.',
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
        title: 'Reines Markdown. Kein Lock-in.',
        body: 'Jede Notiz wird zusätzlich als atomares Markdown exportiert – YAML-Front-Matter, <code>[[wikilinks]]</code>, Deep-Links auf Blöcke und optional ein Canvas-Board. Es sind einfach normale Dateien, die dir gehören und sich in jedem Editor öffnen lassen.',
        points: [
          'Eine verschlüsselte SQLite-Datenbank ist die einzige Quelle der Wahrheit',
          'Ein schreibgeschützter lokaler MCP-Server für Claude Desktop und Claude Code',
          'Markdown-Exporte, die du in jedem Editor öffnen kannst',
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
        ],
        alt: 'Der Notiz-Editor mit markiertem Text und geöffnetem Ivy-Befehlsmenü mit Refine, Shorten, Change tone und weiteren Aktionen',
      },
      'shared-ivy': {
        eyebrow: 'Shared Ivy',
        title: 'Im Team arbeiten – weiterhin Ende-zu-Ende-verschlüsselt.',
        body: 'Veröffentliche eine Notiz oder Meeting-Zusammenfassung im Shared Ivy deiner Organisation, und sie bleibt für alle Mitglieder synchron, während du bearbeitest. Alles wird auf deinem Mac versiegelt, bevor es ihn verlässt – der Server speichert immer nur Chiffretext, umhüllte Schlüssel und öffentliche Schlüssel.',
        points: [
          'Vor dem Upload mit AES-256-GCM unter einem Inhaltsschlüssel der Organisation versiegelt',
          'Erst prüfen, dann veröffentlichen – dieselbe Disziplin wie beim Sperren eines Ordners',
          'Rechte pro Dokument – die Autorin oder der Autor setzt <b>View only</b> oder <b>Can edit</b> für jedes geteilte Dokument',
          'Gehör mehr als einer Organisation an – jede bekommt ihren eigenen verschlüsselten Feed',
          'Geteilte <b>Tasks</b> – Zuständige, Fälligkeiten, Unteraufgaben und dieselben Rechte; Aufgaben leben in einer Organisation und brauchen daher ein angemeldetes Konto',
        ],
        alt: 'Die Shared-Ivy-Ansicht: Meetings und Notizen, die deine Organisationen mit dir geteilt haben, jeweils mit Autor und Organisation',
      },
    },
  },
  pricing: {
    eyebrow: 'Preise',
    title: 'Kostenlos im Early Access.',
    lead: 'Lokale Aufnahme, Transkription, Notizen und Markdown-Exporte brauchen weder Konto noch Zahlung. Preise und Verfügbarkeit nach dem Early Access werden separat bekannt gegeben.',
    plans: {
      free: {
        name: 'Free',
        badge: 'Jetzt verfügbar',
        price: '$0',
        per: '/ Early Access',
        tagline: 'Lokale Aufnahme, Transkription, Notizen und Exporte.',
        points: [
          'Unbegrenzte Aufnahme und Transkription auf dem Gerät',
          'Ivy im Meeting, dazu Fragen an deinen Vault',
          'Semantische Suche und der automatische Wissensgraph',
          'Eigenständige Notizen mit einem Editor, den Ivy unterstützt',
          'Ende-zu-Ende-verschlüsseltes Teilen mit View only / Can edit pro Dokument (Konto erforderlich)',
          'Workspaces, frei kombinierbare Projekte und Offline-Import aus Notion / Obsidian / Apple Notes / Markdown',
          'Verschlüsselte Freigabelinks mit Ablaufdatum, optionalem Passwort und Begrenzung der Aufrufe',
          'Touch-ID-Sperre pro Workspace und pro Ordner mit AES-256-Verschlüsselung',
          'Automatisches Wiedersperren bei Bildschirmfreigabe',
          'Lokaler MCP-Server und Markdown-Export',
        ],
        cta: 'Für macOS laden',
      },
      pro: {
        name: 'Pro',
        badge: 'Demnächst',
        price: 'Geplant',
        tagline: 'Preise und Verfügbarkeit folgen.',
        points: [
          'Alles aus Free',
          'Ende-zu-Ende-verschlüsselter Sync zwischen deinen Macs und deinem iPhone',
          'Zero-Knowledge-verschlüsseltes Cloud-Backup',
          'Optional verwaltetes Ivy mit niedriger Latenz (geschwärzt)',
          'Eigene Rezepte und Automationen',
        ],
        cta: 'Auf GitHub folgen',
      },
      team: {
        name: 'Team',
        badge: 'Demnächst',
        price: 'Geplant',
        tagline: 'Preise und Verfügbarkeit folgen.',
        points: [
          'Alles aus Pro',
          'SSO und SCIM-Provisionierung',
          'Sicherheitsrichtlinien, Aufbewahrung und Audit-Log',
          'Priorisierter Support und SLA',
        ],
        cta: 'Sprich mit uns',
      },
    },
  },
  compare: {
    eyebrow: 'Wettbewerb',
    title: 'IndexOne im Vergleich.',
    lead: 'Obsidian, Notion, Evernote, Bear und Amie sind gut in dem, was sie tun. IndexOne ist für das gebaut, was im Meeting passiert – es aufzunehmen, auf deinem Mac zu transkribieren und Fragen dazu zu stellen – und es kann auch in deinen Obsidian-Vault schreiben.',
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
        cells: ['Whisper auf dem Gerät; keine Cloud-Transkription', 'Keine integrierte Transkription', 'Cloud', 'Cloud', 'Keine Transkription', 'Cloud'],
      },
      'local-ai': {
        criterion: 'KI, die komplett auf deinem Gerät laufen kann',
        cells: ['Ivy auf dem Gerät oder ein lokales Ollama', 'Keine integrierte KI; Community-Plugins', 'Nur Cloud', 'Nur Cloud', 'Keine integrierte KI', 'Nur Cloud'],
      },
      'ask-all': {
        criterion: 'Fragen über alle bisherigen Meetings und Notizen',
        cells: ['Antworten nennen ihre Quellen', 'Nur über Community-Plugins', 'Business-Plan; nennt Quellen', 'AI Assistant über alle Notizen; Meeting-KI pro Aufnahme', '', 'Chat über frühere Aufnahmen mit Pro; Quellenangaben nicht genannt'],
      },
      'local-data': {
        criterion: 'Daten bleiben standardmäßig auf deinem Gerät',
        cells: ['', 'Lokale Dateien', 'Cloud von Notion', 'Cloud von Evernote', 'Lokale Datenbank; iCloud-Sync mit Pro', 'Cloud von Amie'],
      },
      'markdown': {
        criterion: 'Notizen als reine Markdown-Dateien, die dir gehören',
        cells: ['In deinen Vault geschrieben; die verschlüsselte Datenbank ist die Quelle', '', 'Nur Markdown-Export', 'Export als ENEX, HTML oder PDF', 'Datenbank; Markdown-Export', ''],
      },
      'encryption': {
        criterion: 'Verschlüsselung unter deiner Kontrolle',
        cells: ['Verschlüsselte Datenbank, Ordnersperren per Touch ID, Ende-zu-Ende-verschlüsseltes Teilen', 'Ende-zu-Ende-Verschlüsselung für das kostenpflichtige Sync', 'Verschlüsselt auf den Servern von Notion; nicht Ende-zu-Ende', 'Passphrase nur für ausgewählten Text', 'Einzelne Notizen, mit Pro', ''],
      },
      'platforms': {
        criterion: 'Plattformen',
        cells: ['macOS', 'macOS, Windows, Linux, iOS, Android', 'macOS, Windows, Web, iOS, Android', 'macOS, Windows, Web, iOS, Android', 'macOS, iOS, iPadOS, Web (Beta)', 'macOS, Windows, iOS'],
      },
      'price': {
        criterion: 'Preis',
        cells: ['Kostenlos im Early Access', 'Kostenlos; Sync ab $4/Monat bei jährlicher Zahlung', 'Kostenlos; KI und Meeting-Notizen erfordern Business, $20/Monat bei jährlicher Zahlung', 'Kostenlos bis 50 Notizen; Starter $99/Jahr', 'Kostenlos; Pro $29.99/Jahr', 'Kostenlos mit 25 Notiz-Credits; Pro ab €20/Monat bei jährlicher Zahlung'],
      },
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Was zuerst gefragt wird.',
    leadHtml: 'Hier kurze Antworten; die <a href="/docs.html">Dokumentation</a> hat die Details.',
    items: [
      {
        question: 'Ist IndexOne kostenlos?',
        answer: 'Ja, während des Early Access. Lokale Aufnahme, Transkription, Notizen und Exporte brauchen weder Konto noch Zahlung. Preise nach dem Early Access werden separat bekannt gegeben.',
      },
      {
        question: 'Geht mein Audio in die Cloud?',
        answer: 'Nein. Die Transkription läuft immer auf deinem Mac. Nur geschwärzter Text kann das Gerät verlassen – und nur zu einer Cloud-KI, die du gewählt und der du zugestimmt hast.',
      },
      {
        question: 'Was ist Ivy?',
        answer: 'Ivy ist die KI in IndexOne. Frag sie während eines Meetings, ohne die Aufnahme zu stoppen, oder danach über alles, was du aufgenommen und geschrieben hast. Jede Antwort nennt die Meetings und Notizen, aus denen sie stammt. Ivy kann komplett auf deinem Mac laufen, über ein lokales Ollama oder – nach ausdrücklicher Zustimmung – über einen Cloud-Anbieter mit Schwärzung.',
      },
      {
        question: 'Brauche ich eine Internetverbindung?',
        answer: 'Einmal, um ein Whisper-Modell zu laden. Danach funktionieren Aufnahme, Transkription, Suche und Ivy auf dem Gerät offline. Verbindungen zu Cloud-KI, Connectors und das Teilen brauchen eine Verbindung.',
      },
      {
        question: 'Brauche ich Claude Code?',
        answer: 'Nur, wenn du es zum Schreiben der Notizen behältst. Stattdessen kannst du Codex, die Anthropic API, ein OpenAI-kompatibles AI Gateway, ein lokales Ollama oder ein Modell auf dem Gerät wählen.',
      },
      {
        question: 'Welche Sprachen werden unterstützt?',
        answer: 'Whisper transkribiert viele Sprachen. Für KI auf dem Gerät kannst du mehrsprachige Qwen3-Modelle oder die polnischsprachigen Bielik-Modelle wählen.',
      },
      {
        question: 'Warum fragt macOS nach „Bildschirm- und Systemaudioaufnahme“?',
        answer: 'Über diese Berechtigung lässt macOS eine App den Ton anderer Apps hören – also die anderen Personen im Call. IndexOne speichert nur Audio.',
      },
      {
        question: 'Funktioniert es mit Kopfhörern und auf Intel-Macs?',
        answer: 'Ja, beides. Der Ton der Gegenseite wird vom System abgegriffen, nicht von deinen Lautsprechern, und die App ist ein Universal-Build. Große Modelle auf dem Gerät laufen am besten auf Apple Silicon.',
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
  },
  cta: {
    title: 'Hol Ivy in deine Meetings – und behalte die Kontrolle auf deinem Mac.',
    lead: 'Local-first für macOS. Lass die KI lokal laufen oder entscheide dich ausdrücklich für geschwärzte Cloud-KI, wann immer du willst.',
    compare: 'Sieh dir den Vergleich mit Obsidian, Notion, Evernote, Bear und Amie an.',
    download: 'Für macOS laden',
    github: 'Auf GitHub ansehen',
    legacyHtml: 'Du nutzt Version 2.8.0 oder älter? Deren Update-Prüfung erreicht uns nicht mehr. Lade einmal die <a href="{download}">neueste Version</a> herunter und zieh sie in den Ordner „Programme“, um die alte Kopie zu ersetzen; deine Bibliothek, Aufnahmen und Einstellungen bleiben, wo sie sind. Ab 2.9.0 findet die App neue Versionen von selbst.',
  },
  footer: {
    legalHtml: 'macOS-first · Ivy auf dem Gerät · local-first · gebaut mit Tauri, Angular und Rust · kostenlos für macOS · © {year} <a href="{authors}">MonoOne</a> · Text <a href="{license}">CC BY 4.0</a>',
  },
}

export default content
