import type { SiteContent } from './types'

const content: SiteContent = {
  meta: {
    home: {
      title: 'IndexOne — notatki i transkrypcja spotkań na Maca, z Ivy',
      description: 'Nagrywaj i transkrybuj spotkania na Macu, potem pytaj Ivy, AI na urządzeniu, na żywo lub o wszystkie rozmowy. Dla Ciebie albo dla całej organizacji.',
    },
    features: {
      breadcrumb: 'Funkcje',
      title: 'Funkcje — transkrypcja spotkań, Ivy i notatki na Maca',
      description: 'Transkrypcja dwóch strumieni na Macu, Ivy w trakcie rozmów, pytania o wszystkie spotkania, dowody, projekty, wtyczki, lokalne serwery AI i Markdown.',
    },
    privacy: {
      breadcrumb: 'Prywatność',
      title: 'Prywatność IndexOne — AI na urządzeniu i co opuszcza Maca',
      description: 'Transkrypcja i AI na urządzeniu, zaszyfrowana biblioteka, blokady folderów Touch ID i firewall redakcyjny. Zobacz, co i kiedy wysyła każdy wybór AI.',
    },
    pricing: {
      breadcrumb: 'Cennik',
      title: 'Cennik IndexOne — porównanie z Obsidian, Notion i innymi',
      description: 'IndexOne jest darmowy na Macu; opcjonalne plany chmurowe od 49 PLN/mies. Porównaj go z Obsidian, Notion, Evernote, Bear i Amie: nagrywanie, transkrypcja, AI na urządzeniu i Markdown.',
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
    ogImageAlt: 'IndexOne — notatki i transkrypcja spotkań na Maca, z Ivy',
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
    badgeLocal: 'Local-first · macOS',
    badgeIvy: 'Ivy na urządzeniu',
    badgeStar: 'Daj gwiazdkę na GitHubie',
    githubAria: 'IndexOne na GitHubie',
    titleStrong: 'Notatki ze spotkań z Ivy —',
    titleSoft: 'a Ty decydujesz, gdzie to działa.',
    subHtml: 'IndexOne nagrywa Twoje rozmowy i transkrybuje je <b>na Twoim Macu</b>. Pytaj Ivy na żywo, w trakcie spotkania, i o wszystko, co do tej pory nagrałeś. Uruchamiaj AI na Macu lub na własnym lokalnym serwerze AI albo świadomie włącz <b>chmurowe AI po redakcji</b>. W przestrzeni On this Mac archiwum spotkań zostaje na Twoim Macu.',
    download: 'Pobierz na macOS',
    privacyCta: 'Zobacz, jak działa prywatność',
    note: 'Podpisany i notaryzowany · macOS 13.4+ · Apple Silicon (M1 lub nowszy) · Twoje notatki zostają w Markdown, na własność',
    videoLabel: '90-sekundowa prezentacja IndexOne: nagrywane spotkanie i notatka pisana równolegle, notatka utworzona po spotkaniu i wyciągnięte z niej punkty, oś czasu mówców, pytanie zadane Ivy o cały sejf i odpowiedź ze źródłami, graf wiedzy, pasek Workspaces i wyszukiwanie na urządzeniu, projekt, People oraz Workspace, który nie chce się otworzyć, bo jest zapieczętowany',
    play: 'Obejrzyj 90-sekundową prezentację',
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
          body: 'Zaszyfrowana biblioteka i blokady AES-256 dla dowolnej przestrzeni roboczej lub folderu. Zablokowany folder jest niewidoczny dla wyszukiwania, grafu i MCP.',
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
      lead: 'Nagraj spotkanie, zapytaj o nie, zachowaj je jako Markdown. Wybierz krok, aby go zobaczyć.',
      tabsLabel: 'Przegląd produktu',
      tabs: { record: 'Nagraj', ask: 'Zapytaj', export: 'Zachowaj' },
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
    items: ['Transkrypcja na urządzeniu', 'Blokada Touch ID w spoczynku', 'Bez potrzeby chmury', 'Zwykły Markdown, na własność'],
  },
  unique: {
    eyebrow: 'Tylko w IndexOne',
    title: 'Czego żadna inna aplikacja do notatek nie robi dla Twoich spotkań.',
    lead: 'Wiele aplikacji przechowuje notatki albo transkrybuje rozmowy. IndexOne nagrywa obie strony rozmowy na Twoim Macu, pozwala pytać Ivy w trakcie spotkania i udowadnia każdą linijkę, którą napisze.',
    items: {
      'live': {
        title: 'Pytaj Ivy w trakcie spotkania — wszystko zostaje na Macu',
        body: 'Wpisz lub powiedz pytanie w trakcie rozmowy i dostań odpowiedź opartą na wszystkich nagranych spotkaniach, ze źródłami, które możesz otworzyć — nagrywanie nie zatrzymuje się ani na chwilę. Wybierz Ivy on this Mac, a żaden tekst ze spotkań nie opuści Twojego Maca; Claude Code i Codex pozostają wyłączone, dopóki raz nie wyrazisz zgody.',
        link: 'Jak działa Ivy',
      },
      'capture': {
        title: 'Obie strony rozmowy, transkrybowane na Twoim Macu',
        body: 'Twój mikrofon i dźwięk systemowy pozostałych uczestników są nagrywane jako dwa strumienie, a Whisper na urządzeniu łączy je w transkrypcję Me / Others. W przestrzeni On this Mac nie ma transkrypcji w chmurze.',
        link: 'Nagrywanie i transkrypcja',
      },
      'receipts': {
        title: 'Każde twierdzenie ma swój dowód',
        body: 'Każda poparta linijka notatki prowadzi do sekundy nagrania, z której pochodzi, razem z mówcą. Linijki bez pokrycia nie dostają dowodu, więc widzisz, co jest zweryfikowane.',
        link: 'Dowody',
      },
      'security': {
        title: 'Zaszyfrowane na Twoim Macu',
        body: 'Cała Twoja biblioteka jest na Macu zaszyfrowana SQLCipher. Personal i każda organizacja, do której należysz, też mają tu zaszyfrowaną kopię, więc otwierają się bez połączenia z siecią.',
        link: 'Bezpieczeństwo i prywatność',
      },
      'locks': {
        title: 'Foldery zapieczętowane Touch ID',
        body: 'Zablokuj Workspace lub folder, a jego notatki, transkrypcje i nagrania zostaną zapieczętowane AES-256-GCM. Po zablokowaniu jest niewidoczny dla wyszukiwania, grafu, MCP i odtwarzacza.',
        link: 'Jak działają blokady',
      },
      'markdown': {
        title: 'Zwykły Markdown i lokalny serwer MCP',
        body: 'Notatki trafiają do Twojego sejfu Obsidian jako zwykły Markdown z wikilinkami, a serwer MCP tylko do odczytu na 127.0.0.1 pozwala Claude i innym agentom je przeszukiwać. Ty wybierasz, które przestrzenie może czytać; organizacje są wyłączone, dopóki ich nie włączysz.',
        link: 'Markdown i MCP',
      },
    },
    seeAll: 'Zobacz wszystkie funkcje',
  },
  privacy: {
    lifecycle: {
      "title": "Cykl życia danych · plany chmurowe",
      "items": [
        {
          "title": "Jak długo przechowywane są dane?",
          "body": "Audio w chmurze jest domyślnie przechowywane przez 30 dni, a w Personal i Team planujemy do 90 dni w ramach limitu miejsca. Notatki, transkrypcje i zwykłe pliki pozostają do usunięcia przez właściciela, w ramach limitu miejsca."
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
    leadHtml: 'W przestrzeni On this Mac transkrypcja, wyszukiwanie i Ivy on this Mac mogą działać <b>całkowicie bez sieci</b> — gdy tylko wyłączysz dwie rzeczy, które domyślnie łączą się z zewnątrz: sprawdzanie nowej wersji przy uruchomieniu i codzienną wiadomość o użyciu. Jeśli wybierzesz Claude Code albo Codex, przed każdym wyjściem danych stoją zgoda i firewall redakcyjny.',
    cards: {
      'offline': {
        title: 'Nic nie opuszcza urządzenia',
        body: 'Z Ivy on this Mac i modelem, który pobierasz raz, Twoje nagrania i transkrypcje nigdy nie trafiają do sieci. Całe rozumowanie dzieje się na Twoim Macu.',
      },
      'at-rest': {
        title: 'Dwie warstwy szyfrowania w spoczynku',
        body: 'Cała baza danych jest szyfrowana SQLCipher. Do tego blokada <b>AES-256-GCM</b> dla każdego folderu dodaje klucze treści, opakowane kluczem głównym, który zwalnia wyłącznie <b>Touch ID</b>.',
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
        title: 'Dwa połączenia, które robimy domyślnie',
        body: 'Przy uruchomieniu IndexOne pyta GitHub, czy jest nowsza wersja; zapytanie zawiera numer wersji, której używasz, i nic więcej. Raz dziennie wysyła też jedną małą wiadomość o użyciu: losowy identyfikator instalacji, wersję aplikacji i macOS, typ procesora, język i to, czy jesteś zalogowany — żadnych spotkań, notatek, nagrań ani nazwisk. Jest anonimowa tylko, gdy jesteś wylogowany; gdy jesteś zalogowany, jest wysyłana z Twoim kontem. Każde z nich wyłączysz w <b>Settings → Privacy</b>. To jedyne rzeczy na tej stronie, które dzieją się bez Twojej prośby — i właśnie dlatego się tu znalazły.',
      },
    },
    tableCaption: 'Gdzie działa każdy dostawca AI i czy tekst ze spotkań opuszcza Twojego Maca',
    tableHeaders: ['Ivy / dostawca', 'Gdzie działa', 'Czy tekst ze spotkań opuszcza Twojego Maca?'],
    providers: {
      'on-device': { name: 'Ivy on this Mac', note: 'Bielik / Qwen', where: 'W pełni lokalnie' },
      'ivy-web': { name: 'Ivy on the web', note: 'Personal i organizacje', where: 'IndexOne w sieci', leaves: 'Tak — sama przestrzeń jest w sieci' },
      'claude-code': { name: 'Claude Code', where: 'Lokalne CLI → chmura' },
      'codex': { name: 'Codex', note: 'CLI od OpenAI, uruchamiane bez narzędzi', where: 'Lokalne CLI → chmura' },
      'local-server': { name: 'Local AI server', note: 'Ollama, LM Studio, oMLX i inne', where: 'Twój Mac lub Twoja sieć', leaves: 'Nie z serwerem na tym Macu. Do serwera w innym miejscu sieci tylko po potwierdzeniu jego adresu; nazwiska są najpierw maskowane' },
    },
    leavesYes: 'Tylko po zgodzie, po przejściu przez firewall redakcyjny',
    leavesNo: 'Nie',
    shotAlt: 'Ustawienia prywatności IndexOne, które prostym językiem mówią, co zostaje usunięte, zanim jakikolwiek tekst wyjdzie, którzy dostawcy działają w chmurze i czy przetwarzanie w chmurze zostało dozwolone',
    footnote: 'IndexOne mówi prostym językiem, co dokładnie opuszcza Twojego Maca — a każde wywołanie chmurowego AI jest zapisywane i pokazywane Ci z powrotem. Każda przestrzeń ma jeden wybór AI: Ivy on this Mac, Ivy on the web, Claude Code, Codex albo własny lokalny serwer AI. W przestrzeni On this Mac spotkania zostają na Twoim Macu, chyba że wybierzesz Claude Code, Codex albo lokalny serwer AI w innym miejscu Twojej sieci.',
  },
  features: {
    eyebrow: 'Co dostajesz',
    title: 'Narzędzie do spotkań, które naprawdę pamięta.',
    lead: 'Jeden zaszyfrowany magazyn, trzy sposoby korzystania — aplikacja, lokalny serwer MCP i wyeksportowane pliki Markdown. Jedno drzewo mieści wszystko, projekty są zbudowane na nim, a Ivy czyta to wszystko.',
    items: {
      'workspaces': {
        eyebrow: 'Workspaces',
        title: 'Jedno drzewo na wszystko',
        body: 'Jedno drzewo — <b>Workspaces › foldery › Twoje nagrania i notatki</b> — w jednym pasku bocznym, który zwija się do wąskiej szyny, gdy potrzebujesz miejsca. Zablokuj Workspace, a wszystko w środku zostanie zapieczętowane razem z nim.',
        points: [
          'Nagrania, notatki, zadania i projekty trafiają w to samo miejsce',
          'Zapieczętowany Workspace pokazuje tylko swoją nazwę — żadnych liczników, żadnej zawartości',
          'Poproś Ivy, żeby odłożyła zabłąkane nagranie na miejsce',
          'Usunięte przez pomyłkę? Kosz trzyma je przez 30 dni — albo tak długo, jak ustawisz, maksymalnie rok',
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
        body: 'Tego większość aplikacji do notatek nie ma. Wywołaj Ivy frazą aktywującą albo jednym kliknięciem; odpowie na żywo z pamięci Twoich spotkań, z cytatami, które możesz otworzyć — a nagrywanie nigdy się nie zatrzymuje.',
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
          'Dodawaj PDF-y, dokumenty Office, strony internetowe i obrazy — indeksowane dla Ivy, na urządzeniu',
        ],
        alt: 'Graf wiedzy — spotkania, notatki, dokumenty i osoby na jednej mapie, z typowanymi powiązaniami między nimi',
      },
      'receipts': {
        eyebrow: 'Dowody',
        title: 'Każde twierdzenie prowadzi do nagrania.',
        body: 'Notatki IndexOne nie wymagają ślepego zaufania. Każda linijka oparta na tym, co faktycznie padło, ma swój dowód — kliknij, a przeskoczysz dokładnie do tej sekundy nagrania, z mówcą. Parafrazy i linijki bez pokrycia go nie dostają, więc od razu widzisz, co jest zweryfikowane.',
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
        title: 'Zwykły Markdown. Bez uzależnienia od dostawcy.',
        body: 'Każda notatka jest też eksportowana jako atomowy Markdown — front-matter YAML, <code>[[wikilinks]]</code>, głębokie linki do bloków i opcjonalna tablica canvas. To zwykłe pliki, które należą do Ciebie i otworzysz je w dowolnym edytorze.',
        points: [
          'Zaszyfrowana baza SQLite jest jedynym źródłem prawdy',
          'Lokalny serwer MCP tylko do odczytu dla Claude Desktop i Claude Code',
          'Eksport do zwykłego Markdown, który otworzysz w dowolnym edytorze',
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
    "web": "Otwórz web",
    "status": "Plany chmurowe są w sprzedaży. Zaloguj się w aplikacji web, aby kupić plan lub zarządzać subskrypcją. Lokalne funkcje Mac pozostają dostępne.",
    "monthly": "Miesięcznie, w PLN",
    "tax": "Personal zawiera podatek. Team: cena netto, minimum 2 miejsca = 150 PLN netto/mies. Przy VAT 23%: 184,50 PLN razem (92,25 za miejsce). Podatek może być inny; aplikacja musi pokazać końcową kwotę przed zakupem.",
    "trialTitle": "Free co miesiąc",
    "trial": "Każde darmowe konto osobiste dostaje co miesiąc kalendarzowy (UTC) 200 000 jednostek Ivy i podstawową transkrypcję w chmurze, bez karty. Lokalne funkcje Mac nie mają limitu planu.",
    "meterTitle": "Transkrypcja bez limitu",
    "meter": "Płatne plany nie mają limitu transkrypcji. Przy dużej liczbie nagrań część z nich może być gotowa dopiero po kilku godzinach; obowiązują zasady uczciwego korzystania. Transkrypcja lokalna na Macu jest zawsze od razu.",
    "privacyTitle": "Lokalnie i w chmurze",
    "privacy": "Lokalne przetwarzanie Mac zostaje na Macu. Standardowa chmura konta zapisuje i przetwarza treść na serwerach dostępnych operatorowi; nie jest szyfrowana end-to-end. Maskowanie wzorców nie oznacza pełnej anonimizacji. Plan nie daje dostępu do prywatnych przestrzeni.",
    "after": "Free obejmuje podstawowe notatki, edycję, zwykłe wyszukiwanie, synchronizację, odczyt i eksport w ramach 1 GB oraz miesięczny limit w chmurze. Płatne plany dają transkrypcję bez limitu oraz więcej AI i miejsca w chmurze.",
    "team": "Personal i każda organizacja mają osobne abonamenty i salda. Team: 2,25 mln interaktywnych jednostek Ivy i 250 tys. jednostek automatów na miejsce; automaty mają wspólną pulę. Storage wspólny. Miejsce nie zmienia praw dostępu. Do 2 darmowych organizacji po 5 członków dzieli storage konta założyciela.",
    "lifecycle": "Audio w chmurze: domyślnie 30 dni; Free: 7/14/30 dni, płatne także 90. Kosz: 30 dni. Anulowanie nie kasuje treści; uprawnienia płatne do końca okresu. Po obniżeniu planu i przekroczeniu kwoty: odczyt/eksport i 90 dni ochrony. Eksportuj audio przed końcem retencji.",
    "docs": "Plany i rozliczenia · dokumentacja po angielsku",
    "comparison": "Porównaj plany",
    "local": "Lokalne narzędzia Mac",
    "basics": "Podstawowe notatki i sync w chmurze",
    "ivy": "Jednostki Ivy w chmurze / mies.",
    "asr": "Transkrypcja w chmurze",
    "asrUnlimited": "Bez limitu",
    "asrBasic": "W cenie",
    "storage": "Miejsce w chmurze",
    "included": "W cenie",
    "once": "Jedna próba",
    "seat": "na miejsce",
    "unit": "Jednostki Ivy to budżet przetwarzania, nie surowe tokeny modelu ani gwarantowana liczba odpowiedzi. GB = miliard bajtów."
},
  pricing: {
    "eyebrow": "Miesięcznie, w PLN",
    "title": "Wybierz miejsce dla swojej pracy.",
    "lead": "Free na Macu. Opcjonalna chmura z jasnymi limitami.",
    "plans": {
        "free": {
            "name": "Free",
            "badge": "Dostępny na Macu",
            "price": "0 PLN",
            "per": "Miesięcznie, w PLN",
            "tagline": "Praca lokalna bez limitu planu; ograniczenia sprzętu pozostają.",
            "points": [
                "Lokalne narzędzia Mac",
                "Podstawowe notatki i sync w chmurze",
                "1 GB",
                "200k Ivy"
            ],
            "cta": ""
        },
        "personal": {
            "name": "Personal",
            "badge": "Dostępny",
            "price": "49 PLN",
            "per": "brutto / miesiąc",
            "tagline": "Dla osobistej przestrzeni w chmurze.",
            "points": [
                "Lokalne narzędzia Mac",
                "Podstawowe notatki i sync w chmurze",
                "20 GB",
                "1.2M Ivy · transkrypcja bez limitu",
                "Nagrania ekranu w chmurze"
            ],
            "cta": "Kup w aplikacji web"
        },
        "team": {
            "name": "Team",
            "badge": "Dostępny",
            "price": "75 PLN",
            "per": "netto / miejsce / miesiąc",
            "tagline": "Dla organizacji, od dwóch miejsc.",
            "points": [
                "Lokalne narzędzia Mac",
                "Podstawowe notatki i sync w chmurze",
                "50 GB · na miejsce",
                "2.5M Ivy · transkrypcja bez limitu",
                "Bot Google Meet",
                "Nagrania ekranu w chmurze"
            ],
            "cta": "Kup w aplikacji web"
        }
    }
},
  compare: {
    eyebrow: 'Konkurencja',
    title: 'Jak IndexOne wypada na tle innych.',
    lead: 'Obsidian, Notion, Evernote, Bear i Amie są dobre w tym, co robią. IndexOne powstał z myślą o tym, co dzieje się na spotkaniu — żeby je nagrać, przetranskrybować na Twoim Macu i móc o nie zapytać — a przy okazji potrafi też zapisywać do Twojego sejfu Obsidian.',
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
        cells: ['', 'Pliki lokalne', 'Chmura Notion', 'Chmura Evernote', 'Lokalna baza danych; synchronizacja iCloud w Pro', 'Chmura Amie'],
      },
      'markdown': {
        criterion: 'Notatki jako zwykłe pliki Markdown na własność',
        cells: ['Zapisywane do Twojego sejfu; źródłem jest zaszyfrowana baza danych', '', 'Tylko eksport do Markdown', 'Eksport do ENEX, HTML lub PDF', 'Baza danych; eksport do Markdown', ''],
      },
      'encryption': {
        criterion: 'Szyfrowanie pod Twoją kontrolą',
        cells: ['Zaszyfrowana baza danych, blokady folderów Touch ID, zaszyfrowana lokalna kopia każdej przestrzeni z sieci', 'Szyfrowanie end-to-end w płatnym Sync', 'Szyfrowane na serwerach Notion; nie end-to-end', 'Hasło tylko dla zaznaczonego tekstu', 'Pojedyncze notatki, w Pro', ''],
      },
      'platforms': {
        criterion: 'Platformy',
        cells: ['macOS', 'macOS, Windows, Linux, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, iOS, iPadOS, web (beta)', 'macOS, Windows, iOS'],
      },
      'price': {
        criterion: 'Cena',
        cells: ['Za darmo na Macu; chmura Personal 49 PLN/mies., Team 75 PLN netto za miejsce', 'Za darmo; Sync od $4/mies. przy płatności rocznej', 'Za darmo; AI i notatki ze spotkań wymagają planu Business, $20/mies. przy płatności rocznej', 'Za darmo do 50 notatek; Starter $99/rok', 'Za darmo; Pro $29.99/rok', 'Za darmo z 25 kredytami na notatki; Pro od €20/mies. przy płatności rocznej'],
      },
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Pytania, które padają najczęściej.',
    leadHtml: 'Tu krótkie odpowiedzi; szczegóły znajdziesz w <a href="/docs/">dokumentacji</a>.',
    items: [
      {
        question: 'Czy IndexOne jest darmowy?',
        answer: 'Tak, na Macu. Lokalne nagrywanie, transkrypcja, notatki i eksport nie wymagają konta ani płatności. Opcjonalne plany chmurowe (Personal 49 PLN/mies., Team 75 PLN netto za miejsce) dodają transkrypcję w chmurze, Ivy w chmurze i więcej miejsca.',
      },
      {
        question: 'Czy moje nagrania trafiają do chmury?',
        answer: 'Nie w przestrzeni On this Mac: tam transkrypcja odbywa się na Twoim Macu przez Whisper. Wyjść może tylko tekst: po redakcji do Claude Code albo Codex, gdy wyrazisz zgodę, albo z zamaskowanymi nazwiskami do lokalnego serwera AI w Twojej sieci, gdy potwierdzisz jego adres. Przestrzenie Personal i organizacji są w IndexOne w sieci, więc ich nagrania też są tam przechowywane.',
      },
      {
        question: 'Czym jest Ivy?',
        answer: 'Ivy to AI wbudowane w IndexOne. Zapytaj ją w trakcie spotkania bez zatrzymywania nagrania albo później — o wszystko, co nagrałeś i napisałeś. Każda odpowiedź wskazuje spotkania i notatki, z których pochodzi. Każda przestrzeń wybiera jedno AI: Ivy on this Mac, Ivy on the web dla Personal i organizacji, własny lokalny serwer AI albo — po wyraźnej zgodzie — Claude Code lub Codex.',
      },
      {
        question: 'Czy potrzebuję połączenia z internetem?',
        answer: 'Raz, żeby pobrać model Whisper. Potem nagrywanie, transkrypcja, wyszukiwanie i Ivy on this Mac działają offline. Przestrzenie Personal i organizacji otwierają się offline z zaszyfrowanej kopii i wysyłają Twoje zmiany, gdy wrócisz do sieci. Ivy on the web, Claude Code, Codex i konektory wymagają internetu.',
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
        answer: 'To uprawnienie pozwala aplikacji słyszeć dźwięk z innych aplikacji — czyli pozostałych uczestników rozmowy. IndexOne zapisuje wyłącznie dźwięk.',
      },
      {
        question: 'Czy działa ze słuchawkami i na Macach z procesorem Intel?',
        answer: 'Ze słuchawkami tak: dźwięk drugiej strony jest pobierany z systemu, a nie z głośników. Na Macach z procesorem Intel nie: IndexOne wymaga Maca z Apple Silicon (M1 lub nowszy).',
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
    title: 'Zabierz Ivy na swoje spotkania — a kontrolę zostaw na Macu.',
    lead: 'Local-first na macOS. Zostań przy lokalnym AI albo świadomie włącz chmurowe AI z redakcją, kiedy zechcesz.',
    compare: 'Zobacz porównanie z Obsidian, Notion, Evernote, Bear i Amie.',
    download: 'Pobierz na macOS',
    github: 'Zobacz na GitHubie',
    legacyHtml: 'Masz wersję 2.8.0 lub starszą? Jej sprawdzanie aktualizacji już do nas nie dociera. Pobierz raz <a href="{download}">najnowsze wydanie</a> i przeciągnij je do folderu Aplikacje, zastępując starą kopię; Twoja biblioteka, nagrania i ustawienia zostaną na miejscu. Od wersji 2.9.0 aplikacja sama znajduje nowe wersje.',
  },
  footer: {
    legalHtml: 'Najpierw macOS · Ivy na urządzeniu · local-first · zbudowane w Tauri, Angular i Rust · za darmo na macOS · © {year} <a href="{authors}">MonoOne</a> · tekst na licencji <a href="{license}">CC BY 4.0</a>',
    legalNav: 'Informacje prawne',
    terms: 'Regulamin',
    privacyPolicy: 'Polityka prywatności',
    withdrawal: 'Prawo odstąpienia',
    dpa: 'Umowa powierzenia (DPA)',
    meetingBot: 'Bot Meet: informacja dla uczestników',
    contact: 'Kontakt',
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
content.faq.items[0] = { question: "Co obejmuje plan Free?", answer: content.offer.after }
content.faq.items.push(
  { question: content.offer.trialTitle, answer: content.offer.trial },
  { question: content.offer.meterTitle, answer: content.offer.meter },
  { question: content.offer.privacyTitle, answer: content.offer.privacy },
  { question: "Kto płaci za Team?", answer: content.offer.team },
  ...content.privacy.lifecycle.items.map(item => ({ question: item.title, answer: item.body })),
)
content.compare.rows.price.cells[0] = 'Free · Personal 49 PLN · Team 75 PLN'

export default content
