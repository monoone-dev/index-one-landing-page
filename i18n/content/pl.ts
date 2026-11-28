import type { SiteContent } from './types'

const content: SiteContent = {
  meta: {
    home: {
      title: 'IndexOne — prywatne notatki ze spotkań z AI na Twoim Macu',
      description: 'Nagrywaj obie strony rozmowy na Macu bez bota, transkrybuj je na urządzeniu, pytaj Ivy i sprawdzaj notatki z nagraniem. Za darmo na Macu; przestrzenie w chmurze otworzysz w każdej przeglądarce.',
    },
    features: {
      breadcrumb: 'Funkcje',
      title: 'Funkcje — transkrypcja spotkań, Ivy i notatki na Maca',
      description: 'Transkrypcja dwóch strumieni na Macu, Ivy w trakcie rozmów, pytania o wszystkie spotkania, dowody, projekty, wtyczki, lokalne serwery AI i eksport do Markdown.',
    },
    privacy: {
      breadcrumb: 'Prywatność',
      title: 'Prywatność IndexOne — AI na urządzeniu i co opuszcza Maca',
      description: 'Transkrypcja i AI na urządzeniu, zaszyfrowane notatki i transkrypcje, blokady folderów Touch ID i firewall redakcyjny. Zobacz, co i kiedy wysyła każdy wybór AI.',
    },
    pricing: {
      breadcrumb: 'Cennik',
      title: 'Cennik IndexOne — Free, Personal i Team',
      description: 'IndexOne jest darmowy na Macu. Plany w chmurze: Personal 49 zł miesięcznie, Team 75 zł netto za miejsce, oba z transkrypcją w chmurze w ramach limitów. Plany kupisz w aplikacji web.',
    },
    changelog: {
      breadcrumb: 'Lista zmian',
      title: 'Lista zmian IndexOne — wydania aplikacji na Maca',
      description: 'Informacje o każdej wersji IndexOne na Maca, od najnowszej: nowe funkcje dla Ivy, organizacji i prywatności, poprawki, pliki do pobrania i daty wydań.',
    },
    meetingBot: {
      breadcrumb: "Bot spotkań",
      title: "Bot spotkań IndexOne — informacja dla uczestników spotkań",
      description: "Spotkanie, w którym bierzesz udział, nagrywa bot IndexOne. Kto odpowiada za dane, co i po co jest nagrywane, jak długo jest przechowywane i jak skorzystać ze swoich praw.",
    },
    ogImageAlt: 'IndexOne — prywatne notatki ze spotkań z AI na Twoim Macu',
  },
  common: {
    skipToContent: 'Przejdź do treści',
    homeAria: 'IndexOne — strona główna',
    primaryNav: 'Główna',
    footerNav: 'Stopka',
    language: 'Język',
  },
  nav: {
    features: 'Funkcje',
    privacy: 'Prywatność',
    pricing: 'Cennik',
    compare: 'Porównanie',
    faq: 'FAQ',
    docs: 'Dokumentacja',
    github: 'GitHub',
    changelog: 'Lista zmian',
    download: 'Pobierz',
  },
  theme: {
    label: 'Motyw',
    skinsGroup: 'Motyw',
    modesGroup: 'Tryb',
    skins: {
      studio: { label: 'Studio', description: 'Błękit na mgle, miękki gradient' },
      paper: { label: 'Paper', description: 'Ciepły pergamin, stworzony do czytania' },
      minimalist: { label: 'Minimalist', description: 'Czysty shadcn/ui, neutralny' },
    },
    modes: { light: 'Jasny', dark: 'Ciemny', system: 'Systemowy' },
  },
  hero: {
    githubAria: 'IndexOne na GitHubie',
    titleStrong: 'Każde spotkanie zapamiętane.',
    titleSoft: 'Każde zdanie z dowodem.',
    subHtml: 'IndexOne nagrywa obie strony rozmowy <b>na Macu bez bota</b>, transkrybuje je <b>na urządzeniu</b> i pozwala zapytać Ivy — w trakcie spotkania albo pół roku później — z odnośnikiem do sekundy, w której to padło. Za darmo na Macu, bez limitu minut i historii. Przestrzenie w chmurze otworzysz w każdej przeglądarce.',
    download: 'Pobierz na Maca za darmo',
    signup: 'Załóż darmowe konto',
    note: 'Apple Silicon (M1 lub nowszy) · macOS 13.4+ · podpisany i notaryzowany · na Macu bez zakładania konta',
    videoLabel: '47-sekundowa prezentacja IndexOne w przeglądarce: nagrywane spotkanie i notatki pisane obok, notatka od Ivy ze streszczeniem, decyzjami i zadaniami, transkrypcja pokazująca, kto co powiedział, wyszukiwanie dokładnego fragmentu, pytanie do Ivy i odpowiedź ze źródłami, Space udostępniony całemu zespołowi oraz zaproszenie nowej osoby do zespołu',
    play: 'Obejrzyj prezentację',
  },
  home: {
    announce: { badge: 'Nowość', text: 'Wyszło IndexOne {version} — zobacz, co się zmieniło' },
    pillars: {
      eyebrow: 'Dlaczego IndexOne',
      title: 'Twoje spotkania zapamiętane. Twój Mac decyduje.',
      lead: 'Trzy rzeczy, które IndexOne robi z każdą rozmową — i gdzie każda z nich się dzieje.',
      items: {
        capture: {
          title: 'Słyszy obie strony rozmowy',
          body: 'Twój mikrofon i dźwięk pozostałych uczestników są nagrywane jako dwa strumienie i transkrybowane na Twoim Macu przez Whisper.',
          link: 'Nagrywanie i transkrypcja',
        },
        ivy: {
          title: 'Zapytaj Ivy — teraz albo później',
          body: 'Pytaj w trakcie spotkania bez zatrzymywania nagrania albo w poprzek miesięcy rozmów. Każda odpowiedź wskazuje spotkania, z których pochodzi.',
          link: 'Jak działa Ivy',
        },
        privacy: {
          title: 'Zapieczętowane Touch ID',
          body: 'Zaszyfrowane notatki i transkrypcje oraz blokady AES-256 dla dowolnej przestrzeni roboczej lub folderu, otwierane Touch ID. Zablokowany folder jest niewidoczny dla wyszukiwania, grafu i MCP.',
          link: 'Jak działa prywatność',
        },
      },
      mock: {
        question: 'Co ustaliliśmy w sprawie daty premiery?',
        answer: 'Premiera przesuwa się na 3 marca, po akceptacji QA.',
        sources: '2 źródła',
        folders: ['Zarząd', 'Rekrutacja', '1:1'],
      },
    },
    stats: {
      aria: 'IndexOne w liczbach',
      labels: [
        'strumienie audio na rozmowę: Ty i wszyscy pozostali',
        'kont potrzebnych do nagrywania i transkrypcji',
        'blokady Touch ID dla dowolnego folderu',
        'akcji Ivy w edytorze notatek',
        'gotowych dokumentów z każdego spotkania jednym kliknięciem',
        'źródeł importu, w pełni offline',
      ],
    },
    showcase: {
      eyebrow: 'Zobacz w aplikacji',
      title: 'Od rozmowy do odpowiedzi — w jednej aplikacji.',
      lead: 'Nagraj spotkanie, zapytaj o nie, wyeksportuj je do Markdown. Wybierz krok, aby go zobaczyć.',
      tabsLabel: 'Przegląd produktu',
      tabs: { record: 'Nagraj', ask: 'Zapytaj', export: 'Zachowaj' },
      iphone: {
        eyebrow: 'iPhone',
        title: 'Twoje spotkania także na iPhonie.',
        body: 'Nagraj spotkanie telefonem albo dodaj nagranie z aplikacji Pliki. Nagranie zostaje na telefonie, dopóki go nie zatrzymasz, potem trafia do Twojej przestrzeni i jest transkrybowane w chmurze. Notatka od Ivy i pełna transkrypcja otwierają się w telefonie. Aplikacja na iPhone wkrótce trafi do App Store.',
        videoLabel: '49-sekundowa prezentacja IndexOne na iPhonie: ekran główny z ostatnimi notatkami i nagraniami, lista nagrań, notatka od Ivy z decyzjami i zadaniami, transkrypcja z podziałem na mówców, spotkanie nagrywane telefonem oraz plik audio dodany z aplikacji Pliki',
      },
    },
    security: { more: 'Poznaj model prywatności' },
    news: {
      eyebrow: 'Co nowego',
      title: 'Ostatnio wydane.',
      lead: 'IndexOne wychodzi często. Oto najnowsze wydania; informacje o wydaniach są po angielsku.',
      read: 'Czytaj informacje',
      all: 'Wszystkie wydania',
    },
  },
  trust: {
    aria: 'W skrócie',
    items: ['Na Macu bez bota', 'Transkrypcja na urządzeniu', 'Blokady folderów Touch ID', 'Mac i przeglądarka · wkrótce iPhone'],
  },
  unique: {
    eyebrow: 'Funkcje',
    title: 'Narzędzie do spotkań, które naprawdę pamięta.',
    lead: 'Wiele aplikacji przechowuje notatki albo transkrybuje rozmowy. IndexOne nagrywa obie strony rozmowy na Twoim Macu, pozwala pytać Ivy w trakcie spotkania i tam, gdzie się da, łączy twierdzenia z notatki z momentem w nagraniu.',
    items: {
      'live': {
        title: 'Pytaj Ivy w trakcie spotkania — wszystko zostaje na Macu',
        body: 'Wpisz pytanie w trakcie rozmowy — albo powiedz je, gdy asystent głosowy jest włączony — i dostań odpowiedź opartą na wszystkich nagranych spotkaniach, ze źródłami, które możesz otworzyć — nagrywanie nie zatrzymuje się ani na chwilę. Wybierz Ivy on this Mac, a żaden tekst ze spotkań nie opuści Twojego Maca; Claude Code i Codex pozostają wyłączone, dopóki raz nie wyrazisz zgody.',
        link: 'Jak działa Ivy',
      },
      'capture': {
        title: 'Obie strony rozmowy, transkrybowane na Twoim Macu',
        body: 'Twój mikrofon i dźwięk systemowy pozostałych uczestników są nagrywane jako dwa strumienie, a Whisper na urządzeniu łączy je w transkrypcję Me / Others. W przestrzeni On this Mac nie ma transkrypcji w chmurze.',
        link: 'Nagrywanie i transkrypcja',
      },
      'receipts': {
        title: 'Dowód prowadzi do nagrania',
        body: 'Każda poparta linijka notatki prowadzi do sekundy nagrania, z której pochodzi, razem z mówcą. Linijki bez pokrycia nie dostają dowodu, więc widzisz, które linijki mają prawdopodobne źródło w nagraniu.',
        link: 'Dowody',
      },
      'security': {
        title: 'Zaszyfrowane na Twoim Macu',
        body: 'Notatki, transkrypcje i indeks wyszukiwania są na Macu zaszyfrowane SQLCipher; zablokuj przestrzeń lub folder, a nagrania, wideo i pliki też zostaną zapieczętowane. Personal i każda organizacja, do której należysz, mają tu zaszyfrowaną kopię, więc otwierają się bez połączenia z siecią.',
        link: 'Bezpieczeństwo i prywatność',
      },
      'locks': {
        title: 'Foldery zapieczętowane Touch ID',
        body: 'Zablokuj Workspace lub folder, a jego notatki, transkrypcje i nagrania zostaną zapieczętowane AES-256-GCM i otworzysz je tylko Touch ID lub hasłem Maca. Po zablokowaniu jest niewidoczny dla wyszukiwania, grafu, MCP i odtwarzacza.',
        link: 'Jak działają blokady',
      },
      'markdown': {
        title: 'Eksport do Markdown i lokalny serwer MCP',
        body: 'Wyeksportuj dowolną notatkę do Markdown albo zrób kopię biblioteki jako zwykłe pliki .md, a serwer MCP tylko do odczytu na 127.0.0.1 pozwala Claude i innym agentom przeszukiwać Twoje notatki. Ty wybierasz, które przestrzenie może czytać; organizacje są wyłączone, dopóki ich nie włączysz.',
        link: 'Markdown i MCP',
      },
    },
    seeAll: 'Zobacz wszystkie funkcje',
  },
  privacy: {
    hosting: {
      title: 'Serwery i baza danych',
      body: 'Serwery i bazę danych IndexOne utrzymujemy w Unii Europejskiej (AWS, Szwecja). W domyślnym trybie Ivy w chmurze tekst potrzebny do wykonania zadania trafia do Anthropic, który może przetwarzać go poza EOG. Szczegóły znajdziesz w polityce prywatności.',
      policyLink: 'Polityka prywatności',
    },
    lifecycle: {
      "title": "Cykl życia danych · plany chmurowe",
      "items": [
        {
          "title": "Jak długo przechowywane są dane?",
          "body": "Audio w chmurze jest domyślnie przechowywane przez 30 dni; w Free możesz wybrać 7, 14 lub 30 dni, w Personal i Team także 90. Notatki, transkrypcje i zwykłe pliki pozostają do usunięcia przez właściciela, w ramach limitu miejsca."
        },
        {
          "title": "Co dzieje się po obniżeniu planu?",
          "body": "Anulowanie działa na koniec opłaconego okresu. Odczyt, eksport i usuwanie pozostają dostępne przy zachowanym uprawnieniu dostępu."
        },
        {
          "title": "Kto zachowuje dane organizacji po moim odejściu?",
          "body": "Treści organizacji pozostają w organizacji. Odejście lub odebranie dostępu oznacza utratę możliwości odczytu i eksportu."
        }
      ]
    },
    eyebrow: 'Bezpieczeństwo i prywatność',
    title: 'Prywatność to nie ustawienie. To architektura.',
    leadHtml: 'W przestrzeni On this Mac transkrypcja, wyszukiwanie i Ivy on this Mac mogą działać <b>całkowicie bez sieci</b>, gdy modele mowy są już pobrane. To, co IndexOne wysyła sam z siebie, nie zawiera treści spotkań, a każdą z tych rzeczy opisujemy niżej. Jeśli wybierzesz Claude Code albo Codex, przed każdym wyjściem danych stoją zgoda i firewall redakcyjny.',
    cards: {
      'offline': {
        title: 'Spotkania zostają na urządzeniu',
        body: 'Z Ivy on this Mac i modelami, które pobierasz raz, Twoje nagrania i transkrypcje nigdy nie trafiają do sieci. Całe rozumowanie dzieje się na Twoim Macu.',
      },
      'at-rest': {
        title: 'Dwie warstwy szyfrowania w spoczynku',
        body: 'Notatki, transkrypcje i indeks wyszukiwania są szyfrowane SQLCipher. Do tego blokada <b>AES-256-GCM</b> dla każdego folderu pieczętuje też nagrania, wideo i pliki, a klucze treści są opakowane kluczem głównym, który zwalnia wyłącznie <b>Touch ID</b> lub hasło Maca.',
      },
      'gated': {
        title: 'Każdy odczyt jest pilnowany',
        body: 'Zapieczętowany, zablokowany folder nie zdradza niczego — ani w aplikacji, ani w wyszukiwaniu, grafie, MCP, ani nawet w ścieżce audio. Zablokowane spotkania widać po prostu jako <b>Locked</b>.',
      },
      'seals': {
        title: 'Pieczęć najpierw sprawdza, potem usuwa',
        body: 'IndexOne sprawdza, że szyfrogram da się odszyfrować, <b>zanim</b> wyczyści tekst jawny — treść nigdy nie ginie, a blokadę zawsze można w pełni cofnąć.',
      },
      'screen-share': {
        title: 'Wie, kiedy udostępniasz ekran',
        body: 'Strażnik może automatycznie ponownie zablokować zapieczętowane foldery i usunąć klucz z pamięci w chwili wykrycia udostępniania ekranu — więc udostępniony ekran nie zdradzi prywatnych notatek.',
      },
      'firewall': {
        title: 'Firewall redakcyjny',
        body: 'Jeśli kiedykolwiek włączysz chmurowe podsumowania, adresy e-mail, numery przypominające karty i numery telefonów zostaną najpierw usunięte — a wyjście do chmury jest <b>domyślnie zablokowane</b> i wymaga jednorazowej zgody. Pobierz opcjonalny model maskowania imion, a zastąpione zostaną także imiona i nazwiska.',
      },
      'update-check': {
        title: 'Co IndexOne wysyła bez Twojej prośby',
        body: 'Przy uruchomieniu IndexOne pyta GitHub, czy jest nowsza wersja; zapytanie zawiera numer wersji, której używasz, i nic więcej. Gdy sprawdzanie aktualizacji jest włączone (domyślnie jest) albo jeśli na tym Macu kiedykolwiek zalogowano konto, pyta też serwer IndexOne przy uruchomieniu i co godzinę, czy Twoja wersja jest nadal wspierana, bez żadnej treści. Raz dziennie wysyła jedną małą wiadomość o użyciu: losowy identyfikator instalacji, wersję aplikacji i macOS, architekturę procesora, język i to, czy jesteś zalogowany — żadnych spotkań, notatek, nagrań ani nazwisk. Jest anonimowa tylko, gdy jesteś wylogowany; gdy jesteś zalogowany, jest wysyłana z Twoim kontem. Przy pierwszej transkrypcji pobiera z Hugging Face dwa małe modele mowy: do wykrywania głosu i rozdzielania mówców. Sprawdzanie aktualizacji i wiadomość o użyciu wyłączysz w <b>Settings → Privacy & Security</b>. Po wyłączeniu sprawdzania aktualizacji ustaje też pytanie o wersję, chyba że na tym Macu kiedykolwiek zalogowano konto. To jedyne rzeczy na tej stronie, które dzieją się bez Twojej prośby — i właśnie dlatego się tu znalazły.',
      },
    },
    tableCaption: 'Gdzie działa każdy dostawca AI i czy tekst ze spotkań opuszcza Twojego Maca',
    tableHeaders: ['Ivy / dostawca', 'Gdzie działa', 'Czy tekst ze spotkań opuszcza Twojego Maca?'],
    providers: {
      'on-device': { name: 'Ivy on this Mac', note: 'Bielik / Qwen', where: 'W pełni lokalnie' },
      'ivy-web': { name: 'Ivy on the web', note: 'Personal i organizacje', where: 'Chmura IndexOne, z modelami Anthropic Claude', leaves: 'Tak — sama przestrzeń jest w sieci' },
      'claude-code': { name: 'Claude Code', where: 'Lokalne CLI → chmura' },
      'codex': { name: 'Codex', note: 'CLI od OpenAI, uruchamiane bez narzędzi', where: 'Lokalne CLI → chmura' },
      'local-server': { name: 'Local AI server', note: 'Ollama, LM Studio, oMLX i inne', where: 'Twój Mac lub Twoja sieć', leaves: 'Nie z serwerem na tym Macu. Do serwera w innym miejscu sieci tylko po potwierdzeniu jego adresu; najpierw usuwane są e-maile, numery kart i telefonów, a imiona i nazwiska, jeśli pobierzesz model maskowania' },
    },
    leavesYes: 'Tylko po zgodzie, po przejściu przez firewall redakcyjny',
    leavesNo: 'Nie',
    shotAlt: 'Ustawienia prywatności IndexOne, które prostym językiem mówią, co zostaje usunięte, zanim jakikolwiek tekst wyjdzie, którzy dostawcy działają w chmurze i czy przetwarzanie w chmurze zostało dozwolone',
    footnote: 'IndexOne mówi prostym językiem, co dokładnie opuszcza Twojego Maca — a każde wywołanie chmurowego AI wykonane z Twojego Maca jest zapisywane i pokazywane Ci z powrotem. Każda przestrzeń ma jeden wybór AI: Ivy on this Mac, Ivy on the web, Claude Code, Codex albo własny lokalny serwer AI. W przestrzeni On this Mac spotkania zostają na Twoim Macu, chyba że wybierzesz Claude Code, Codex albo lokalny serwer AI w innym miejscu Twojej sieci.',
  },
  features: {
    eyebrow: 'Co dostajesz',
    title: 'Narzędzie do spotkań, które naprawdę pamięta.',
    lead: 'Jedna zaszyfrowana biblioteka, trzy sposoby korzystania — aplikacja, lokalny serwer MCP i eksport do Markdown. Jedno drzewo mieści wszystko, projekty są zbudowane na nim, a Ivy czyta to wszystko.',
    items: {
      'workspaces': {
        eyebrow: 'Workspaces',
        title: 'Jedno drzewo na wszystko',
        body: 'Jedno drzewo — <b>Workspaces › foldery › Twoje nagrania i notatki</b> — w jednym pasku bocznym, który zwija się do wąskiej szyny, gdy potrzebujesz miejsca. Zablokuj Workspace, a wszystko w środku zostanie zapieczętowane razem z nim.',
        points: [
          'Nagrania, notatki, zadania i projekty trafiają w to samo miejsce',
          'Zapieczętowany Workspace pokazuje tylko swoją nazwę — żadnych liczników, żadnej zawartości',
          'Poproś Ivy, żeby odłożyła zabłąkane nagranie na miejsce',
          'Usunięte przez pomyłkę? Na Macu kosz trzyma je przez 30 dni — albo tak długo, jak ustawisz, maksymalnie rok',
        ],
        alt: 'Pasek boczny Workspaces: jedno drzewo Workspaces i folderów z nagraniami, notatkami i projektami, z zablokowanym Workspace na dole',
      },
      'dashboards': {
        eyebrow: 'Projekty',
        title: 'Projekty, które składasz sam',
        body: 'Zbierz w projekcie notatki, nagrania, dokumenty, osoby, rejestry obietnic i przypomnienia, a potem czytaj go przez soczewki <b>Brief / Overview / Commitments / Sources / People</b>. Przypnij <b>żywą odpowiedź</b> — zapisane pytanie, którego ostatnia odpowiedź jest przechowywana z datą jej udzielenia, odświeżana na Twoje żądanie i ukrywana w chwili, gdy jej źródła przestają być dostępne. Możesz też zapytać sam projekt — odpowiedź opiera się wyłącznie na tym, co w nim jest.',
        points: [
          'Siedem rodzajów kafelków — notatka, nagranie, dokument, osoba, rejestr obietnic, lista przypomnień lub żywa odpowiedź',
          'Pięć soczewek na tych samych kafelkach — bez żadnych kopii',
          'Projekt sam określa swoje granice: co może czytać i co z tego wywnioskował',
        ],
        alt: 'Projekt w soczewce Brief: zapisana odpowiedź na przypięte pytanie, to, co wymaga uwagi, i najnowsze dowody, które za tym stoją',
      },
      'imports': {
        eyebrow: 'Importy',
        title: 'Przenieś swoje dotychczasowe notatki',
        body: 'Settings → Imports wczytuje <b>eksport z Notion</b>, <b>sejf Obsidian</b>, <b>Apple Notes</b>, folder <b>plików Markdown</b> albo <b>kopię zapasową IndexOne</b>. Całkowicie offline — bez konta, bez klucza, bez połączenia z siecią. Każdy import zaczyna się od próby na sucho, więc widzisz, co zostanie zapisane, zanim cokolwiek się zapisze.',
        points: [
          'Pięć źródeł: eksport z Notion, sejf Obsidian, Apple Notes, folder plików Markdown, kopia zapasowa IndexOne',
          'Najpierw próba na sucho — nic nie jest zapisywane, dopóki nie dasz znaku',
          'Zaimportowane notatki trafiają do osobnego, nazwanego folderu, a Ivy czyta je jak wszystko inne',
        ],
        alt: 'Settings → Imports: Notion, Obsidian, Apple Notes, pliki Markdown i kopia zapasowa IndexOne, z informacją, że wszystko dzieje się na tym Macu i nic nie jest wysyłane',
      },
      'ivy': {
        eyebrow: 'Ivy',
        title: 'Rozmawiaj z Ivy — w trakcie spotkania.',
        body: 'Tego większość aplikacji do notatek nie ma. Zapytaj Ivy jednym kliknięciem albo włącz asystenta głosowego w Ustawieniach i pytaj na głos; odpowie na żywo z pamięci Twoich spotkań, z cytatami, które możesz otworzyć — a nagrywanie nigdy się nie zatrzymuje.',
        points: [
          'Model rozumujący na urządzeniu (Bielik-11B, Qwen) przez Metal',
          'Oparte na faktach, nie zmyślone — wyszukane w Twoich własnych transkrypcjach',
          'Opcjonalny dostęp do sieci za zgodą — domyślnie wyłączony',
        ],
        alt: 'Trwające nagranie z pytaniem zadanym w trakcie spotkania, na które Ivy odpowiada na żywo, podając wykorzystane źródła',
      },
      'ask': {
        eyebrow: 'Pytaj swój sejf',
        title: 'Pytaj o miesiące rozmów.',
        body: 'Znowu Ivy, tym razem skierowana na wszystko, co kiedykolwiek nagrałeś i napisałeś. Każda odpowiedź przychodzi ze spotkaniami i notatkami, z których powstała, więc możesz otworzyć źródło, zamiast wierzyć na słowo.',
        points: [
          'Zawęź pytanie do jednego Workspace lub folderu — całe poddrzewo i nic poza nim',
          'Rozmowy są zapamiętywane — wątki sejfu, notatek i spotkań zostają, z przeglądarką historii w każdym miejscu',
          'Rozmowa znika w chwili, gdy którykolwiek folder, z którego korzystała, przestaje być dostępny',
          'Własny model: notatki i odpowiedzi mogą pochodzić z Ollama, LM Studio, oMLX, llama.cpp lub dowolnego serwera zgodnego z OpenAI',
        ],
        alt: 'Pytanie do Ivy o miesiące spotkań i jedna odpowiedź, a pod nią lista spotkań, z których powstała',
      },
      'transcription': {
        eyebrow: 'Nagrywanie i transkrypcja',
        title: 'Słyszy obie strony rozmowy.',
        body: 'Nagrywanie dwóch strumieni rejestruje Twój mikrofon i dźwięk systemowy drugiej strony, każdy transkrybuje osobno na urządzeniu i łączy je według czasu w czytelną transkrypcję Me / Others, z napisami na żywo, gdy mówisz.',
        points: [
          'Whisper na urządzeniu — od tiny po large-v3, w tym szybsza wersja turbo, plus warianty kwantyzowane',
          'Przypisanie z dwóch strumieni: Ty i wszyscy pozostali, plus wykrywanie aktywności głosowej',
          'Pływający pasek nagrywania — nagrywaj z dowolnego miejsca (⌘⇧R)',
          'Głos + ekran: nagrywaj ekran razem ze spotkaniem (macOS 14+), za darmo na Macu',
        ],
        alt: 'Połączona transkrypcja Me / Others z indeksem czasu, obok osi czasu mówców i tematów',
      },
      'memory': {
        eyebrow: 'Notatki i pamięć',
        title: 'Uporządkowane notatki i graf, który buduje się sam.',
        body: 'Każda rozmowa staje się czytelną notatką — podsumowanie, decyzje, zadania, cytaty. Nagrania i notatki leżą obok siebie w tym samym Workspace. Osoby i projekty są automatycznie wyodrębniane do grafu wiedzy, a zapieczętowane Workspaces pozostają przed nim ukryte.',
        points: [
          'Pytaj o każde spotkanie dzięki hybrydowemu wyszukiwaniu semantycznemu',
          'Dossier osób i tematów, powiązane spotkania, cotygodniowe podsumowania',
          'Prywatne przypomnienia, które nigdy nie opuszczają Maca, każde powiązane z nagraniem lub notatką, z której pochodzi — Ivy proponuje, Ty akceptujesz',
          'Zadania można też wysyłać do Apple Reminders',
          'Dodawaj PDF-y, dokumenty Office, zapisane strony internetowe (.html) i obrazy — indeksowane dla Ivy, na urządzeniu',
        ],
        alt: 'Graf wiedzy — spotkania, notatki, dokumenty i osoby na jednej mapie, z typowanymi powiązaniami między nimi',
      },
      'receipts': {
        eyebrow: 'Dowody',
        title: 'Twierdzenia oparte na rozmowie prowadzą do nagrania.',
        body: 'Notatki IndexOne nie wymagają ślepego zaufania. Każda linijka oparta na tym, co faktycznie padło, ma swój dowód — kliknij, a przeskoczysz dokładnie do tej sekundy nagrania, z mówcą. Parafrazy i linijki bez pokrycia go nie dostają, więc od razu widzisz, które linijki mają prawdopodobne źródło w nagraniu.',
        points: [
          'Kliknij twierdzenie i usłysz, skąd dokładnie pochodzi',
          'Przy każdym dowodzie: kto mówił i w której dokładnie sekundzie',
          'Siedem gotowych dokumentów z każdego spotkania jednym kliknięciem — e-mail z podsumowaniem, rejestr decyzji, zgłoszenie, podsumowanie 1:1, standup, podsumowanie sprzedażowe, notatki z rekrutacji',
          'Zapieczętowane foldery nigdy nie zdradzają czasu ani mówcy',
        ],
        alt: 'Dowody wygenerowanej notatki: jeden wiersz na każde poparte twierdzenie, z mówcą i sekundą nagrania, z której pochodzi',
      },
      'markdown': {
        eyebrow: 'Na własność',
        title: 'Markdown na wejściu i na wyjściu. Bez uzależnienia od dostawcy.',
        body: 'Wyeksportuj dowolną notatkę do Markdown albo zrób kopię całej biblioteki jako zwykłe pliki <code>.md</code>, które otworzysz w każdym edytorze. Przechodzisz z Obsidiana? Sejf zaimportujesz jednym krokiem.',
        points: [
          'Zaszyfrowana baza SQLite jest jedynym źródłem prawdy',
          'Lokalny serwer MCP tylko do odczytu dla Claude Desktop i Claude Code',
          'Eksport każdej notatki do Markdown i kopia całej biblioteki w zwykłym Markdown',
        ],
        alt: 'Uporządkowana notatka — podsumowanie, decyzje, zadania i cytaty — obok nagrań i notatek, do których linkuje',
      },
      'notes': {
        eyebrow: 'Notatki',
        title: 'Nie tylko notatki ze spotkań. Wszystkie Twoje notatki.',
        body: 'Pełny edytor Markdown, w tych samych Workspaces co Twoje nagrania — na wszystko, co piszesz, a nie tylko na to, co transkrybuje IndexOne. Zaznacz dowolny fragment, a pojawi się menu Ivy: dopracuj, skróć, zmień ton, przetłumacz, sprawdź fakty albo po prostu wpisz, co ma zrobić.',
        points: [
          'Dziewiętnaście akcji Ivy na jedno naciśnięcie klawisza',
          'Oparte na Twoich spotkaniach i notatkach, a nie na domysłach modelu',
          'Wklejaj zrzuty ekranu do notatek; zostają lokalnie i podlegają blokadzie Workspace',
          'Ivy skills z ekranu Plugins kierują notatkami i odpowiedziami Ivy w chmurze — wybierasz je w oknie Ivy, w notatce lub na pasku nagrywania',
        ],
        alt: 'Edytor notatek z zaznaczonym tekstem i otwartym menu poleceń Ivy, z akcjami Refine, Shorten, Change tone i innymi',
      },
    },
  },
  offer: {
    eyebrow: "Za darmo na start",
    title: "Zamień spotkania w odpowiedzi.",
    lead: "Zacznij za darmo na Macu. Chmurę dodaj dopiero wtedy, gdy potrzebujesz więcej.",
    benefits: {
      local: {
        title: "Za darmo na Macu",
        body: "Nagrywaj, transkrybuj i pytaj Ivy na Macu. Praca lokalna nie wymaga konta ani karty.",
      },
      sync: {
        title: "Otwórz w przeglądarce",
        body: "Zaloguj się w aplikacji web, a notatki będą zsynchronizowane. Notatki w chmurze są w planie Free.",
      },
      grow: {
        title: "Więcej miejsca, gdy go potrzebujesz",
        body: "Płatne plany dają więcej transkrypcji w chmurze, więcej Ivy i więcej miejsca. Team dodaje wspólną przestrzeń.",
      },
    },
    download: "Pobierz za darmo",
    forMac: "Na Maca z Apple Silicon",
    plans: "Zobacz plany",
    web: "Otwórz web",
    status: "Plany chmurowe są w sprzedaży. Zaloguj się w aplikacji web, aby kupić plan lub zarządzać subskrypcją. Lokalne funkcje Mac pozostają dostępne.",
    trialTitle: "Free co miesiąc",
    trial: "Każde darmowe konto dostaje co miesiąc kalendarzowy (UTC) 200 000 jednostek Ivy i przydział transkrypcji w chmurze, bez karty. Lokalne funkcje Mac nie mają limitu planu.",
    meterTitle: "Transkrypcja w chmurze w płatnych planach",
    meter: "Plany Personal i Team obejmują transkrypcję w chmurze. Przy intensywnym użyciu kolejne nagrania mogą trafić do wolniejszej kolejki. Obowiązują limity i zasady uczciwego korzystania opisane w regulaminie. Transkrypcja wykonywana lokalnie na Macu nie podlega limitom planu.",
    fairUse: "Plany Personal i Team obejmują transkrypcję w chmurze. Przy intensywnym użyciu kolejne nagrania mogą trafić do wolniejszej kolejki. Obowiązują limity i zasady uczciwego korzystania opisane w regulaminie. Transkrypcja wykonywana lokalnie na Macu nie podlega limitom planu.",
    fairUseLink: "Przeczytaj regulamin",
    privacyTitle: "Lokalnie i w chmurze",
    privacy: "Lokalne przetwarzanie Mac zostaje na Macu. Standardowa chmura konta zapisuje i przetwarza treść na serwerach dostępnych operatorowi; nie jest szyfrowana end-to-end. Maskowanie wzorców nie oznacza pełnej anonimizacji. Plan nie daje dostępu do prywatnych przestrzeni.",
    detailsTitle: "Szczegóły planów",
    details: "Pula Free odnawia się z początkiem miesiąca kalendarzowego w UTC. W planach Personal i Team pule odnawiają się z początkiem okresu rozliczeniowego. Nagranie, które nie mieści się w pozostałej puli szybkiej planu płatnego, może trafić do trybu ekonomicznego. Jeśli zabraknie miejsca również w tej puli, nowe nagranie można zgłosić do transkrypcji po odnowieniu puli. Szczegóły naliczania i wartości pul podaje regulamin. Standardowa chmura konta nie jest szyfrowana end-to-end: operator może odczytać przechowywane i przetwarzane treści. Maskowanie wzorców nie jest pełną anonimizacją. Lokalne przetwarzanie na Macu pozostaje na Macu. Płatny plan nigdy nie daje dostępu do prywatnych przestrzeni.",
    more: "Więcej o rozliczeniach",
    after: "Free obejmuje podstawowe notatki, edycję, zwykłe wyszukiwanie, synchronizację, odczyt i eksport w ramach 1 GB oraz miesięczny limit w chmurze. Płatne plany dają więcej transkrypcji oraz więcej AI i miejsca w chmurze.",
    team: "Personal i każda organizacja mają osobne abonamenty i salda. Team: 2,25 mln interaktywnych jednostek Ivy i 250 tys. jednostek automatów na miejsce; automaty mają wspólną pulę. Przestrzeń dyskowa jest wspólna dla organizacji. Miejsce nie zmienia praw dostępu. Do 2 darmowych organizacji po 5 członków dzieli storage konta założyciela.",
    lifecycle: "Audio w chmurze: domyślnie 30 dni; Free: 7/14/30 dni, płatne także 90. Kosz w chmurze: do czasu opróżnienia. Anulowanie nie kasuje treści; uprawnienia płatne do końca okresu. Eksportuj audio przed końcem retencji.",
    docs: "Plany i rozliczenia · dokumentacja po angielsku",
    comparison: "Porównaj plany",
    feature: "Funkcja planu",
    local: "Lokalne narzędzia Mac",
    basics: "Notatki i synchronizacja w przeglądarce",
    ivy: "Jednostki Ivy w chmurze / mies.",
    asr: "Transkrypcja w chmurze",
    asrPaid: "W cenie · obowiązują limity",
    asrBasic: "Miesięczny przydział",
    storage: "Miejsce w chmurze",
    gb: "GB",
    meetBot: "Bot Google Meet",
    included: "W cenie",
    notIncluded: "Brak",
    seat: "na miejsce",
    unit: "Jednostki Ivy to budżet przetwarzania, nie surowe tokeny modelu ani gwarantowana liczba odpowiedzi. GB = miliard bajtów.",
  },
  pricing: {
    eyebrow: "Cennik",
    title: "Zacznij za darmo. Zyskaj więcej możliwości.",
    lead: "Lokalne narzędzia na Macu są darmowe. Wybierz plan chmurowy, gdy potrzebujesz więcej.",
    recommended: "Polecany",
    note: "Personal zawiera VAT. Team od {seats} miejsc: łącznie {total} netto miesięcznie. Podatki i końcową cenę zobaczysz w aplikacji web przed zakupem.",
    compareLink: "Porównaj wszystkie szczegóły",
    peek: { benefit: "Więcej transkrypcji w chmurze", link: "Zobacz plan Personal" },
    plans: {
      free: {
        name: "Free",
        audience: "Twoje pierwsze notatki ze spotkań.",
        period: "miesięcznie",
        points: [
          "Lokalne narzędzia na Macu",
          "Notatki w chmurze i synchronizacja",
          "{ivy} jednostek Ivy miesięcznie",
          "{storage} GB w chmurze",
        ],
        cta: "Pobierz za darmo",
        trust: "Bez karty płatniczej",
      },
      personal: {
        name: "Personal",
        audience: "Więcej miejsca na Twoją pracę.",
        period: "miesięcznie, z VAT",
        points: [
          "Wszystko z Free",
          "Więcej transkrypcji w chmurze",
          "{ivy} jednostek Ivy miesięcznie",
          "{storage} GB w chmurze",
        ],
        cta: "Wybierz Personal",
        trust: "Anuluj w dowolnej chwili",
      },
      team: {
        name: "Team",
        audience: "Wspólna przestrzeń dla zespołu.",
        period: "netto za miejsce miesięcznie, od {seats} miejsc",
        points: [
          "Wspólne notatki i przestrzeń zespołu",
          "Transkrypcja w chmurze dla każdego miejsca",
          "{ivy} jednostek Ivy na miejsce miesięcznie",
          "{storage} GB w chmurze na miejsce",
          "Bot Google Meet",
        ],
        cta: "Wybierz Team",
        trust: "Zarządzaj planem w aplikacji web",
      },
    },
  },
  compare: {
    eyebrow: 'Konkurencja',
    title: 'Jak IndexOne wypada na tle innych.',
    lead: 'Obsidian, Notion, Evernote, Bear i Amie są dobre w tym, co robią. IndexOne powstał z myślą o tym, co dzieje się na spotkaniu — żeby je nagrać, przetranskrybować na Twoim Macu i móc o nie zapytać — a sejf Obsidian zaimportuje jednym krokiem.',
    capability: 'Funkcja',
    caption: 'IndexOne w porównaniu z innymi aplikacjami do notatek',
    labels: { yes: 'Tak', partial: 'Częściowo', no: 'Nie', unknown: 'Brak danych' },
    notStated: 'Nie podano',
    footnote: 'Na podstawie publicznych stron z cennikami i funkcjami poszczególnych producentów, sprawdzonych w październiku 2026. Plany i funkcje się zmieniają — przed decyzją sprawdź stronę producenta. Nazwy produktów są znakami towarowymi ich właścicieli; IndexOne nie jest z nimi powiązany.',
    rows: {
      'capture': {
        criterion: 'Nagrywa obie strony rozmowy',
        cells: ['Mikrofon i dźwięk systemowy, jako dwa strumienie', 'Tylko mikrofon (podstawowy rejestrator audio)', 'Aplikacja desktopowa; w przeglądarce tylko mikrofon', 'Desktopowy rejestrator spotkań', 'Brak nagrywania', 'Desktop, bez bota'],
      },
      'local-transcription': {
        criterion: 'Transkrypcja na Twoim urządzeniu',
        cells: ['Whisper na urządzeniu w przestrzeni On this Mac', 'Brak wbudowanej transkrypcji', 'Chmura', 'Chmura', 'Brak transkrypcji', 'Chmura'],
      },
      'local-ai': {
        criterion: 'AI, które może działać w całości na Twoim urządzeniu',
        cells: ['Ivy on this Mac lub własny lokalny serwer AI', 'Brak wbudowanego AI; wtyczki społeczności', 'Tylko chmura', 'Tylko chmura', 'Brak wbudowanego AI', 'Tylko chmura'],
      },
      'ask-all': {
        criterion: 'Pytania o wszystkie wcześniejsze spotkania i notatki',
        cells: ['Odpowiedzi podają źródła', 'Tylko wtyczki społeczności', 'Plan Business; podaje źródła', 'AI Assistant dla notatek; AI spotkań dla pojedynczego nagrania', '', 'Czat o wcześniejszych nagraniach w Pro; cytowania nie podano'],
      },
      'local-data': {
        criterion: 'Dane domyślnie zostają na Twoim urządzeniu',
        cells: ['W przestrzeni On this Mac; przestrzenie w chmurze są w sieci', 'Pliki lokalne', 'Chmura Notion', 'Chmura Evernote', 'Lokalna baza danych; synchronizacja iCloud w Pro', 'Chmura Amie'],
      },
      'markdown': {
        criterion: 'Notatki jako zwykłe pliki Markdown na własność',
        cells: ['Eksport i kopia w Markdown; źródłem jest zaszyfrowana baza danych', '', 'Tylko eksport do Markdown', 'Eksport do ENEX, HTML lub PDF', 'Baza danych; eksport do Markdown', ''],
      },
      'encryption': {
        criterion: 'Szyfrowanie pod Twoją kontrolą',
        cells: ['Zaszyfrowana baza danych, blokady folderów Touch ID, zaszyfrowana lokalna kopia każdej przestrzeni z sieci', 'Szyfrowanie end-to-end w płatnym Sync', 'Szyfrowane na serwerach Notion; nie end-to-end', 'Hasło tylko dla zaznaczonego tekstu', 'Pojedyncze notatki, w Pro', ''],
      },
      'platforms': {
        criterion: 'Platformy',
        cells: ['macOS, web; wkrótce aplikacja na iPhone', 'macOS, Windows, Linux, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, iOS, iPadOS, web (beta)', 'macOS, Windows, iOS'],
      },
      'price': {
        criterion: 'Cena',
        cells: ['Free · Personal 49 PLN · Team 75 PLN', 'Za darmo; Sync od $4/mies. przy płatności rocznej', 'Za darmo; AI i notatki ze spotkań wymagają planu Business, $20/mies. przy płatności rocznej', 'Za darmo do 50 notatek; Starter $99/rok', 'Za darmo; Pro $29.99/rok', 'Za darmo z 25 kredytami na notatki; Pro od €20/mies. przy płatności rocznej'],
      },
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Pytania, które padają najczęściej.',
    leadHtml: 'Tu krótkie odpowiedzi; szczegóły znajdziesz w <a href="/docs/">dokumentacji</a>.',
    items: [
      {
        question: 'Co obejmuje plan Free?',
        answer: 'Na Macu wszystko: nagrywanie, transkrypcję, notatki, Ivy on this Mac i eksport, bez konta i bez limitu planu. Darmowe konto dodaje notatki, edycję, wyszukiwanie, synchronizację, odczyt i eksport w przeglądarce w ramach 1 GB oraz miesięczny przydział jednostek Ivy i transkrypcji w chmurze. Płatne plany dają więcej transkrypcji w chmurze, więcej jednostek Ivy i więcej przestrzeni. Przy intensywnym użyciu kolejne nagrania mogą trafić do wolniejszej kolejki; limity i zasady uczciwego korzystania opisuje regulamin.',
      },
      {
        question: 'Czy moje nagrania trafiają do chmury?',
        answer: 'Nie w przestrzeni On this Mac: tam transkrypcja odbywa się na Twoim Macu przez Whisper. Wyjść może tylko tekst: po redakcji do Claude Code albo Codex, gdy wyrazisz zgodę, albo po usunięciu e-maili, numerów kart i telefonów do lokalnego serwera AI w Twojej sieci, gdy potwierdzisz jego adres. Przestrzenie Personal i organizacji są w IndexOne w sieci, więc ich nagrania też są tam przechowywane.',
      },
      {
        question: 'Czym jest Ivy?',
        answer: 'Ivy to AI wbudowane w IndexOne. Zapytaj ją w trakcie spotkania bez zatrzymywania nagrania albo później — o wszystko, co nagrałeś i napisałeś. Każda odpowiedź wskazuje spotkania i notatki, z których pochodzi. Każda przestrzeń wybiera jedno AI: Ivy on this Mac, Ivy on the web dla Personal i organizacji, własny lokalny serwer AI albo — po wyraźnej zgodzie — Claude Code lub Codex.',
      },
      {
        question: 'Czy potrzebuję połączenia z internetem?',
        answer: 'Raz, żeby pobrać modele mowy. Potem nagrywanie, transkrypcja, wyszukiwanie i Ivy on this Mac działają offline. Przestrzenie Personal i organizacji otwierają się offline z zaszyfrowanej kopii i wysyłają Twoje zmiany, gdy wrócisz do sieci. Ivy on the web, Claude Code, Codex i konektory wymagają internetu.',
      },
      {
        question: 'Czy potrzebuję Claude Code?',
        answer: 'Nie. Każda przestrzeń ma jeden wybór AI: Ivy on this Mac, Ivy on the web (Personal i organizacje), Claude Code, Codex albo własny lokalny serwer AI, np. Ollama, LM Studio, oMLX lub llama.cpp.',
      },
      {
        question: 'Jakie języki są obsługiwane?',
        answer: 'Whisper transkrybuje wiele języków. Do AI na urządzeniu możesz wybrać wielojęzyczne modele Qwen3 albo modele Bielik, stworzone z myślą o języku polskim. Wtyczka Languages pisze każdą notatkę w wybranym języku, może dodać drugi język, tłumaczy spotkania później i prowadzi glosariusz nazw i terminów.',
      },
      {
        question: 'Dlaczego macOS prosi o uprawnienie Screen & System Audio Recording?',
        answer: 'To uprawnienie pozwala aplikacji słyszeć dźwięk z innych aplikacji — czyli pozostałych uczestników rozmowy. IndexOne zapisuje tylko ich dźwięk, chyba że włączysz plugin Screen recording i wybierzesz Voice + screen.',
      },
      {
        question: 'Czy działa ze słuchawkami i na Macach z procesorem Intel?',
        answer: 'Ze słuchawkami tak: dźwięk drugiej strony jest pobierany z systemu, a nie z głośników. Na Macach z procesorem Intel nie: aplikacja na Maca wymaga Apple Silicon (M1 lub nowszy). Na każdym innym komputerze korzystaj z IndexOne w przeglądarce.',
      },
      {
        question: 'Czy jest aplikacja na iPhone albo Windows?',
        answer: 'Aplikacja na iPhone wkrótce trafi do App Store. Na Windows, Linuksie albo Macu z procesorem Intel otwórz IndexOne w przeglądarce pod adresem app.index-one.io; nagrania z przeglądarki są transkrybowane w chmurze i liczą się do Twojego planu.',
      },
      {
        question: 'Czy IndexOne jest open source?',
        answer: 'Nie. Aplikację można bezpłatnie pobrać i używać, ale jej kod źródłowy nie jest publiczny. Wersje 2.8.0 i starsze zostały pierwotnie opublikowane na licencji GNU AGPL-3.0, gdy ich kod źródłowy był publiczny.',
      },
    ],
  },
  changelog: {
    eyebrow: 'Lista zmian',
    title: 'Co nowego w IndexOne',
    lead: 'Każde wydanie aplikacji na macOS, od najnowszego. Pobierz najnowszą wersję albo zobacz wszystkie kompilacje i sumy kontrolne na GitHubie.',
    download: 'Pobierz najnowszą wersję',
    github: 'Wszystkie wydania na GitHubie',
    latest: 'Najnowsza',
    englishNote: 'Informacje o wydaniach publikujemy po angielsku.',
    versions: 'Wersje',
    filterLabel: 'Pokaż wydania',
    filters: { all: 'Wszystkie', features: 'Nowości', fixes: 'Poprawki' },
    kinds: { major: 'Duże wydanie', minor: 'Nowe funkcje', patch: 'Poprawki' },
    count: { one: '{count} wydanie', few: '{count} wydania', many: '{count} wydań', other: '{count} wydania' },
    showOlder: 'Pokaż starsze wydania',
    empty: 'Brak wydań tego rodzaju.',
  },
  meetingBot: {
    eyebrow: "Dla uczestników spotkań",
    title: "Bot IndexOne nagrywa Twoje spotkanie.",
    lead: "Jesteś tutaj, bo do rozmowy w Google Meet, w której bierzesz udział, dołączył bot IndexOne do notatek. Ta strona wyjaśnia, kto nagrywa spotkanie, co dzieje się z nagraniem i co możesz z tym zrobić.",
    noticeLabel: "Wiadomość, którą bot wysyła na czacie spotkania",
    noticeNote: "Bot wysyła tę wiadomość po angielsku zaraz po wpuszczeniu do rozmowy. Zanim ją wyśle, nic nie nagrywa.",
    cards: {
      bot: { title: "Co to za bot", body: "Bot do notatek, który dołącza do Google Meet jako uczestnik, więc widać go na liście osób w rozmowie. Jego nazwa to nazwa wybrana przez organizację, która go wysłała, zwykle nazwa tej organizacji, a po niej „· IndexOne”, np. „Northwind · IndexOne”." },
      controller: { title: "Kto odpowiada za Twoje dane", body: "Organizacja, która wysłała bota, czyli ta z jego nazwy. Jest administratorem Twoich danych osobowych: decyduje o nagraniu spotkania, o jego celu i o tym, co dzieje się z nagraniem potem." },
      processor: { title: "Co robi IndexOne", body: "IndexOne jest podmiotem przetwarzającym. Nagrywa, transkrybuje i przechowuje spotkanie w imieniu tej organizacji i tylko na jej polecenie. Usługodawca IndexOne jest wskazany w polityce prywatności IndexOne." },
      recorded: { title: "Co jest nagrywane", body: "Dźwięk spotkania i zrobiona z niego transkrypcja, czyli zapis tekstowy. Wszystko, co mówisz, gdy bot jest w rozmowie, trafia do nagrania i do transkrypcji." },
      purpose: { title: "Po co", body: "Żeby organizacja miała notatki i podsumowania swojego spotkania. Nagranie trafia do przestrzeni roboczej tej organizacji w IndexOne, gdzie mogą je otworzyć osoby, którym na to pozwoli." },
      storage: { title: "Jak długo jest przechowywane", body: "O tym, jak długo nagranie zostaje w przestrzeni roboczej, decyduje organizacja. Jak długo dane przechowuje IndexOne, opisuje polityka prywatności IndexOne." },
    },
    policyLink: "Polityka prywatności IndexOne",
    rights: {
      eyebrow: "Twoje prawa",
      title: "Możesz się sprzeciwić, zobaczyć swoje dane i poprosić o ich usunięcie.",
      lead: "Te prawa daje Ci RODO. Korzystaj z nich najpierw u organizacji, która wysłała bota, bo to ona decyduje o nagraniu.",
      items: {
        object: { title: "Sprzeciw", body: "Możesz sprzeciwić się nagrywaniu. W trakcie rozmowy poproś gospodarza o usunięcie bota albo opuść rozmowę. Po spotkaniu napisz organizacji, że sprzeciwiasz się wykorzystaniu nagrania." },
        access: { title: "Dostęp", body: "Możesz zapytać organizację, czy ma nagranie lub transkrypcję z Twoim udziałem, i poprosić o kopię." },
        erasure: { title: "Usunięcie", body: "Możesz poprosić organizację o usunięcie nagrania albo tych części transkrypcji, które Cię dotyczą." },
        complaint: { title: "Skarga", body: "Możesz złożyć skargę do organu nadzorczego ds. ochrony danych, np. w kraju UE, w którym mieszkasz lub pracujesz. W Polsce jest to Prezes Urzędu Ochrony Danych Osobowych (UODO)." },
      },
    },
    steps: {
      title: "Jak skorzystać ze swoich praw",
      items: [
        { title: "W trakcie spotkania", body: "Poproś gospodarza o usunięcie bota albo opuść rozmowę. Nie musisz podawać powodu." },
        { title: "Po spotkaniu", body: "Napisz do osoby, która zorganizowała spotkanie, albo do organizacji z nazwy bota. To ona odpowiada na Twój wniosek." },
        { title: "Jeśli nie możesz się z nimi skontaktować", body: "Napisz do IndexOne na dane kontaktowe z polityki prywatności IndexOne i podaj, o które spotkanie chodzi. IndexOne przekaże Twój wniosek organizacji." },
      ],
    },
    note: "Ta strona opisuje bota IndexOne ogólnie. Organizacja, która go wysłała, może mieć własną informację o prywatności z większą liczbą szczegółów; poproś ją o nią.",
  },
  cta: {
    title: 'Wypróbuj na najbliższej rozmowie.',
    lead: 'Pobierz IndexOne za darmo i nagraj najbliższe spotkanie: bez bota, bez konta, bez karty. Chcesz mieć notatki także w przeglądarce? Załóż darmowe konto.',
    compare: 'Porównaj plany',
    download: 'Pobierz na Maca za darmo',
    brew: 'Wolisz Homebrew?',
    brewCopy: 'Skopiuj polecenie',
    signup: 'Załóż darmowe konto',
    legacyHtml: 'Masz wersję 2.8.0 lub starszą? Jej sprawdzanie aktualizacji już do nas nie dociera. Pobierz raz <a href="{download}">najnowsze wydanie</a> i przeciągnij je do folderu Aplikacje, zastępując starą kopię; Twoja biblioteka, nagrania i ustawienia zostaną na miejscu. Od wersji 2.9.0 aplikacja sama znajduje nowe wersje.',
  },
  footer: {
    legalHtml: 'Aplikacja na Maca i w przeglądarce · wkrótce aplikacja na iPhone · Ivy na urządzeniu · zbudowane w Tauri, Angular i Rust · za darmo na Macu · © {year} <a href="{authors}">MonoOne</a> · tekst na licencji <a href="{license}">CC BY 4.0</a>',
    legalNav: 'Informacje prawne',
    terms: 'Regulamin',
    privacyPolicy: 'Polityka prywatności',
    withdrawal: 'Prawo odstąpienia',
    dpa: 'Umowa powierzenia (DPA)',
    meetingBot: 'Bot Meet: informacja dla uczestników',
    contact: 'Kontakt',
  },
}

// The FAQ ends with the offer details shown on the pricing page.
content.faq.items.push(
  { question: content.offer.trialTitle, answer: content.offer.trial },
  { question: content.offer.meterTitle, answer: content.offer.meter },
  { question: content.offer.privacyTitle, answer: content.offer.privacy },
  { question: "Kto płaci za Team?", answer: content.offer.team },
  ...content.privacy.lifecycle.items.map(item => ({ question: item.title, answer: item.body })),
)

export default content
