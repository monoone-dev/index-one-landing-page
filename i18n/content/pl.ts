import type { SiteContent } from './types'

const content: SiteContent = {
  meta: {
    home: {
      title: 'IndexOne — notatki ze spotkań na macOS, lokalnie, z Ivy',
      description: 'Nagrywaj i transkrybuj spotkania na Macu, potem pytaj Ivy, swoje AI — na żywo lub o wszystkie rozmowy. AI lokalne lub chmurowe po redakcji, notatki w Markdown.',
    },
    features: {
      breadcrumb: 'Funkcje',
      title: 'Funkcje — IndexOne, notatki ze spotkań na macOS',
      description: 'Workspaces, dashboardy, importy, Ivy na spotkaniach, pytania do całego sejfu, transkrypcja dwóch strumieni, dowody, eksport do Markdown i Shared Ivy.',
    },
    privacy: {
      breadcrumb: 'Prywatność',
      title: 'Prywatność i bezpieczeństwo w IndexOne — co zostaje na Macu',
      description: 'Transkrypcja na urządzeniu, SQLCipher, blokady folderów Touch ID, firewall redakcyjny i zgoda przed chmurowym AI. Zobacz, co dokładnie może opuścić Maca.',
    },
    pricing: {
      breadcrumb: 'Cennik',
      title: 'Cennik IndexOne — porównanie z Obsidian, Notion i innymi',
      description: 'IndexOne jest darmowy we wczesnym dostępie. Porównaj go z Obsidian, Notion, Evernote, Bear i Amie: nagrywanie, AI na urządzeniu, szyfrowanie i Markdown.',
    },
    changelog: {
      breadcrumb: 'Lista zmian',
      title: 'Lista zmian — co nowego w każdym wydaniu IndexOne',
      description: 'Każde wydanie IndexOne na macOS, od najnowszego: nowe funkcje, poprawki i pliki do pobrania, z datą każdej wersji.',
    },
    ogImageAlt: 'IndexOne — notatki ze spotkań na macOS, lokalnie, z Ivy',
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
    subHtml: 'IndexOne nagrywa Twoje rozmowy i transkrybuje je <b>na Twoim Macu</b>. Pytaj Ivy na żywo, w trakcie spotkania, i o wszystko, co do tej pory nagrałeś. Uruchamiaj AI lokalnie albo świadomie włącz <b>chmurowe AI po redakcji</b> — archiwum spotkań i tak zostaje na Twoim Macu.',
    download: 'Pobierz na macOS',
    privacyCta: 'Zobacz, jak działa prywatność',
    note: 'Podpisany i notaryzowany · macOS 13.4+ · Apple Silicon i Intel · Twoje notatki zostają w Markdown, na własność',
    videoLabel: '90-sekundowa prezentacja IndexOne: nagrywane spotkanie i notatka pisana równolegle, notatka utworzona po spotkaniu i wyciągnięte z niej punkty, oś czasu mówców, pytanie zadane Ivy o cały sejf i odpowiedź ze źródłami, graf wiedzy, pasek Workspaces i wyszukiwanie na urządzeniu, tablica na żywo, People oraz Workspace, który nie chce się otworzyć, bo jest zapieczętowany',
    play: 'Obejrzyj 90-sekundową prezentację',
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
        body: 'Wpisz lub powiedz pytanie w trakcie rozmowy i dostań odpowiedź opartą na wszystkich nagranych spotkaniach, ze źródłami, które możesz otworzyć — nagrywanie nie zatrzymuje się ani na chwilę. Uruchom Ivy na urządzeniu lub przez lokalną Ollamę, a żaden tekst ze spotkań nie opuści Twojego Maca; chmurowe AI pozostaje wyłączone, dopóki raz nie wyrazisz zgody.',
        link: 'Jak działa Ivy',
      },
      'capture': {
        title: 'Obie strony rozmowy, transkrybowane na Twoim Macu',
        body: 'Twój mikrofon i dźwięk systemowy pozostałych uczestników są nagrywane jako dwa strumienie, a Whisper na urządzeniu łączy je w transkrypcję Me / Others. Żadnej transkrypcji w chmurze.',
        link: 'Nagrywanie i transkrypcja',
      },
      'receipts': {
        title: 'Każde twierdzenie ma swój dowód',
        body: 'Każda poparta linijka notatki prowadzi do sekundy nagrania, z której pochodzi, razem z mówcą i poziomem pewności. Linijki bez pokrycia nie dostają dowodu, więc widzisz, co jest zweryfikowane.',
        link: 'Dowody',
      },
      'security': {
        title: 'Zaszyfrowane wszędzie, gdzie są zapisane',
        body: 'Cała Twoja biblioteka jest na Macu zaszyfrowana SQLCipher. Wszystko, co udostępniasz, jest pieczętowane AES-256-GCM przed wysłaniem, więc serwer przechowuje wyłącznie szyfrogram — a logowanie korzysta z OPAQUE, więc serwer nigdy nie poznaje Twojego hasła.',
        link: 'Bezpieczeństwo i prywatność',
      },
      'locks': {
        title: 'Foldery zapieczętowane Touch ID',
        body: 'Zablokuj Workspace lub folder, a jego notatki, transkrypcje i nagrania zostaną zapieczętowane AES-256-GCM. Po zablokowaniu jest niewidoczny dla wyszukiwania, grafu, MCP i odtwarzacza.',
        link: 'Jak działają blokady',
      },
      'markdown': {
        title: 'Zwykły Markdown i lokalny serwer MCP',
        body: 'Notatki trafiają do Twojego sejfu Obsidian jako zwykły Markdown z wikilinkami, a serwer MCP tylko do odczytu na 127.0.0.1 pozwala Claude i innym agentom je przeszukiwać.',
        link: 'Markdown i MCP',
      },
    },
    seeAll: 'Zobacz wszystkie funkcje',
  },
  how: {
    eyebrow: 'Jak to działa',
    title: 'Nagraj → zrozum → zapytaj. Lokalnie z założenia.',
    lead: 'Jeden lokalny proces zamienia rozmowę na żywo w przeszukiwalną pamięć. Transkrypcja zostaje na Twoim Macu; Ivy może działać lokalnie albo — za Twoją wyraźną zgodą — korzystać z chmury po redakcji.',
    steps: [
      {
        label: '01 · Nagraj',
        title: 'Słyszy całą rozmowę',
        body: 'Twój mikrofon <b>i</b> dźwięk systemowy drugiej strony, nagrywane i transkrybowane osobno, a potem łączone przez Whisper na urządzeniu w czytelną transkrypcję <b>Me / Others</b>.',
      },
      {
        label: '02 · Zrozum',
        title: 'Ivy, na Twoim Macu',
        body: 'Model rozumujący działa lokalnie na indeksie semantycznym wszystkiego, co nagrałeś — pisze uporządkowaną notatkę i na zawsze utrzymuje pamięć gotową do przeszukania.',
      },
      {
        label: '03 · Zapytaj',
        title: 'Odpowiedzi na żywo, ze źródłami',
        body: 'Zapytaj Ivy w trakcie spotkania i dostań rzetelną odpowiedź ze <b>źródłami</b> — albo później pytaj o miesiące rozmów. Nagrywanie nigdy się nie zatrzymuje.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Bezpieczeństwo i prywatność',
    title: 'Prywatność to nie ustawienie. To architektura.',
    leadHtml: 'IndexOne jest zaprojektowany tak, by transkrypcja, wyszukiwanie i Ivy na urządzeniu działały <b>całkowicie bez sieci</b> — gdy tylko wyłączysz jedyną rzecz, która łączy się z zewnątrz: sprawdzanie nowej wersji przy uruchomieniu. Jeśli wybierzesz chmurowe AI, przed każdym wyjściem danych stoją zgoda i firewall redakcyjny.',
    cards: {
      'offline': {
        title: 'Nic nie opuszcza urządzenia',
        body: 'Z modelem na urządzeniu, który pobierasz raz, albo z Ollamą Twoje nagrania i transkrypcje nigdy nie trafiają do sieci. Całe rozumowanie dzieje się na Twoim Macu.',
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
        title: 'Jedyne połączenie, które robimy domyślnie',
        body: 'Przy uruchomieniu IndexOne pyta GitHub, czy jest nowsza wersja. Zapytanie zawiera numer wersji, której używasz, bo tylko tak da się o to zapytać — i nic więcej: żadnych spotkań, notatek ani konta. Możesz to wyłączyć w <b>Settings → Privacy</b>. To jedyna rzecz na tej stronie, która dzieje się bez Twojej prośby — i właśnie dlatego się tu znalazła.',
      },
    },
    tableCaption: 'Gdzie działa każdy dostawca AI i czy tekst ze spotkań opuszcza Twojego Maca',
    tableHeaders: ['Ivy / dostawca', 'Gdzie działa', 'Czy tekst ze spotkań opuszcza Twojego Maca?'],
    providers: {
      'on-device': { name: 'Ivy na urządzeniu', note: 'Bielik / Qwen', where: 'W pełni lokalnie' },
      'ollama': { name: 'Ollama', where: 'W pełni lokalnie' },
      'claude-code': { name: 'Claude Code', note: 'domyślny autor podsumowań', where: 'Lokalne CLI → chmura' },
      'codex': { name: 'Codex', note: 'CLI od OpenAI, uruchamiane bez narzędzi', where: 'Lokalne CLI → chmura' },
      'anthropic': { name: 'Anthropic API', note: 'z własnym kluczem', where: 'Bezpośrednio przez HTTPS' },
      'gateway': { name: 'AI Gateway', note: 'dowolny endpoint zgodny z OpenAI — LiteLLM, Kong, Portkey, vLLM…', where: 'Bezpośrednio przez HTTPS' },
    },
    leavesYes: 'Tylko po zgodzie, po przejściu przez firewall redakcyjny',
    leavesNo: 'Nie',
    shotAlt: 'Ustawienia prywatności IndexOne, które prostym językiem mówią, co zostaje usunięte, zanim jakikolwiek tekst wyjdzie, którzy dostawcy działają w chmurze i że przetwarzanie w chmurze jest wyłączone, dopóki raz na nie nie pozwolisz',
    footnote: 'IndexOne mówi prostym językiem, co dokładnie opuszcza Twojego Maca — a każde wywołanie chmurowego AI jest zapisywane i pokazywane Ci z powrotem. Twoje spotkania zostają na urządzeniu, chyba że sam to zmienisz. Jeden wybór modelu obowiązuje we wszystkich miejscach z AI i zawsze przyjmuje wpisany ręcznie identyfikator modelu — więc zadziała nawet model wydany po tej wersji aplikacji.',
  },
  features: {
    eyebrow: 'Co dostajesz',
    title: 'Narzędzie do spotkań, które naprawdę pamięta.',
    lead: 'Jeden zaszyfrowany magazyn, trzy sposoby korzystania — aplikacja, lokalny serwer MCP i wyeksportowane pliki Markdown. Jedno drzewo mieści wszystko, tablice są zbudowane na nim, a Ivy czyta to wszystko.',
    items: {
      'workspaces': {
        eyebrow: 'Workspaces',
        title: 'Jedno drzewo na wszystko',
        body: 'Jedno drzewo — <b>Workspaces › foldery › Twoje nagrania i notatki</b> — w jednym pasku bocznym, który zwija się do wąskiej szyny, gdy potrzebujesz miejsca. Zablokuj Workspace, a wszystko w środku zostanie zapieczętowane razem z nim.',
        points: [
          'Nagrania, notatki, zadania i tablice trafiają w to samo miejsce',
          'Zapieczętowany Workspace pokazuje tylko swoją nazwę — żadnych liczników, żadnej zawartości',
          'Poproś Ivy, żeby odłożyła zabłąkane nagranie na miejsce',
          'Usunięte przez pomyłkę? Kosz trzyma je przez 30 dni — albo tak długo, jak ustawisz, maksymalnie rok',
        ],
        alt: 'Pasek boczny Workspaces: jedno drzewo Workspaces i folderów z nagraniami, notatkami i tablicami, z zablokowanym Workspace na dole',
      },
      'dashboards': {
        eyebrow: 'Dashboardy',
        title: 'Tablice, które składasz sam',
        body: 'Przeciągnij na tablicę notatki, nagrania, dokumenty, osoby, rejestry obietnic i przypomnienia, a potem czytaj ją przez soczewki <b>Brief / Overview / Commitments / Sources / People</b>. Przypnij <b>żywą odpowiedź</b> — pytanie, które aplikacja stale aktualizuje i ukrywa w chwili, gdy jej źródła przestają być dostępne. Możesz też zapytać samą tablicę — odpowiedź opiera się wyłącznie na tym, co na niej jest.',
        points: [
          'Siedem rodzajów kafelków — notatka, nagranie, dokument, osoba, rejestr obietnic, lista przypomnień lub żywa odpowiedź',
          'Pięć soczewek na tych samych kafelkach — bez żadnych kopii',
          'Tablica sama określa swoje granice: co może czytać i co z tego wywnioskowała',
        ],
        alt: 'Tablica w soczewce Brief: przypięta żywa odpowiedź, to, co wymaga uwagi, i najnowsze dowody, które za tym stoją',
      },
      'imports': {
        eyebrow: 'Importy',
        title: 'Przenieś swoje dotychczasowe notatki',
        body: 'Settings → Imports wczytuje <b>eksport z Notion</b>, <b>sejf Obsidian</b> albo <b>Apple Notes</b>. Całkowicie offline — bez konta, bez klucza, bez połączenia z siecią. Każdy import zaczyna się od próby na sucho, więc widzisz, co zostanie zapisane, zanim cokolwiek się zapisze.',
        points: [
          'Trzy źródła: eksport z Notion, sejf Obsidian, Apple Notes',
          'Najpierw próba na sucho — nic nie jest zapisywane, dopóki nie dasz znaku',
          'Zaimportowane notatki trafiają do osobnego, nazwanego folderu, a Ivy czyta je jak wszystko inne',
        ],
        alt: 'Settings → Imports: Notion, Obsidian i Apple Notes, z informacją, że wszystko dzieje się na tym Macu i nic nie jest wysyłane',
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
        body: 'Notatki IndexOne nie wymagają ślepego zaufania. Każda linijka oparta na tym, co faktycznie padło, ma swój dowód — kliknij, a przeskoczysz dokładnie do tej sekundy nagrania, z mówcą i poziomem pewności. Parafrazy i linijki bez pokrycia go nie dostają, więc od razu widzisz, co jest zweryfikowane.',
        points: [
          'Kliknij twierdzenie i usłysz, skąd dokładnie pochodzi',
          'Mówca i pewność rozpoznawania mowy (ASR) przy każdym dowodzie',
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
        ],
        alt: 'Edytor notatek z zaznaczonym tekstem i otwartym menu poleceń Ivy, z akcjami Refine, Shorten, Change tone i innymi',
      },
      'shared-ivy': {
        eyebrow: 'Shared Ivy',
        title: 'Pracuj zespołowo, wciąż z szyfrowaniem end-to-end.',
        body: 'Opublikuj notatkę lub podsumowanie spotkania w Shared Ivy swojej organizacji, a podczas edycji pozostanie zsynchronizowane u wszystkich członków. Wszystko jest pieczętowane na Twoim Macu, zanim w ogóle go opuści — serwer przechowuje wyłącznie szyfrogramy, opakowane klucze i klucze publiczne.',
        points: [
          'Pieczętowanie AES-256-GCM kluczem treści organizacji przed wysłaniem',
          'Weryfikacja przed publikacją — ta sama dyscyplina co przy blokowaniu folderu',
          'Uprawnienia dla każdego dokumentu — autor ustawia <b>View only</b> albo <b>Can edit</b> dla każdego udostępnionego dokumentu',
          'Należysz do kilku organizacji? Każda ma własny zaszyfrowany kanał',
          'Wspólne <b>Tasks</b> — osoby przypisane, terminy, podzadania i te same uprawnienia; zadania należą do organizacji, więc wymagają zalogowanego konta',
        ],
        alt: 'Widok Shared Ivy: spotkania i notatki udostępnione Ci przez Twoje organizacje, każde z autorem i organizacją',
      },
    },
  },
  pricing: {
    eyebrow: 'Cennik',
    title: 'Za darmo we wczesnym dostępie.',
    lead: 'Lokalne nagrywanie, transkrypcja, notatki i eksport do Markdown nie wymagają konta ani płatności. Ceny i dostępność po zakończeniu wczesnego dostępu ogłosimy osobno.',
    plans: {
      free: {
        name: 'Free',
        badge: 'Dostępny teraz',
        price: '$0',
        per: '/ wczesny dostęp',
        tagline: 'Lokalne nagrywanie, transkrypcja, notatki i eksport.',
        points: [
          'Nielimitowane nagrywanie i transkrypcja na urządzeniu',
          'Ivy na spotkaniach i pytania do całego sejfu',
          'Wyszukiwanie semantyczne i automatyczny graf wiedzy',
          'Samodzielne notatki z edytorem wspieranym przez Ivy',
          'Udostępnianie z szyfrowaniem end-to-end, z uprawnieniami View only / Can edit dla każdego dokumentu (wymaga konta)',
          'Workspaces, konfigurowalne dashboardy i import offline z Notion / Obsidian / Apple Notes',
          'Zaszyfrowane linki do udostępniania z datą wygaśnięcia, opcjonalnym hasłem i limitem otwarć',
          'Blokada Touch ID dla każdego Workspace i folderu, z szyfrowaniem AES-256',
          'Automatyczne ponowne blokowanie przy udostępnianiu ekranu',
          'Lokalny serwer MCP i eksport do Markdown',
        ],
        cta: 'Pobierz na macOS',
      },
      pro: {
        name: 'Pro',
        badge: 'Wkrótce',
        price: 'W planach',
        tagline: 'Ceny i dostępność zostaną ogłoszone.',
        points: [
          'Wszystko z planu Free',
          'Synchronizacja z szyfrowaniem end-to-end między Twoimi Macami i iPhone’em',
          'Zaszyfrowana kopia zapasowa w chmurze typu zero-knowledge',
          'Opcjonalna zarządzana Ivy o niskich opóźnieniach (po redakcji)',
          'Własne przepisy i automatyzacje',
        ],
        cta: 'Obserwuj na GitHubie',
      },
      team: {
        name: 'Team',
        badge: 'Wkrótce',
        price: 'W planach',
        tagline: 'Ceny i dostępność zostaną ogłoszone.',
        points: [
          'Wszystko z planu Pro',
          'SSO i provisioning SCIM',
          'Polityki bezpieczeństwa, retencja i dziennik audytu',
          'Priorytetowe wsparcie i SLA',
        ],
        cta: 'Porozmawiaj z nami',
      },
    },
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
        cells: ['Whisper na urządzeniu; bez transkrypcji w chmurze', 'Brak wbudowanej transkrypcji', 'Chmura', 'Chmura', 'Brak transkrypcji', 'Chmura'],
      },
      'local-ai': {
        criterion: 'AI, które może działać w całości na Twoim urządzeniu',
        cells: ['Ivy na urządzeniu lub lokalna Ollama', 'Brak wbudowanego AI; wtyczki społeczności', 'Tylko chmura', 'Tylko chmura', 'Brak wbudowanego AI', 'Tylko chmura'],
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
        cells: ['Zaszyfrowana baza danych, blokady folderów Touch ID, udostępnianie z szyfrowaniem end-to-end', 'Szyfrowanie end-to-end w płatnym Sync', 'Szyfrowane na serwerach Notion; nie end-to-end', 'Hasło tylko dla zaznaczonego tekstu', 'Pojedyncze notatki, w Pro', ''],
      },
      'platforms': {
        criterion: 'Platformy',
        cells: ['macOS', 'macOS, Windows, Linux, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, iOS, iPadOS, web (beta)', 'macOS, Windows, iOS'],
      },
      'price': {
        criterion: 'Cena',
        cells: ['Za darmo we wczesnym dostępie', 'Za darmo; Sync od $4/mies. przy płatności rocznej', 'Za darmo; AI i notatki ze spotkań wymagają planu Business, $20/mies. przy płatności rocznej', 'Za darmo do 50 notatek; Starter $99/rok', 'Za darmo; Pro $29.99/rok', 'Za darmo z 25 kredytami na notatki; Pro od €20/mies. przy płatności rocznej'],
      },
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Pytania, które padają najczęściej.',
    leadHtml: 'Tu krótkie odpowiedzi; szczegóły znajdziesz w <a href="/docs.html">dokumentacji</a>.',
    items: [
      {
        question: 'Czy IndexOne jest darmowy?',
        answer: 'Tak, we wczesnym dostępie. Lokalne nagrywanie, transkrypcja, notatki i eksport nie wymagają konta ani płatności. Ceny po zakończeniu wczesnego dostępu ogłosimy osobno.',
      },
      {
        question: 'Czy moje nagrania trafiają do chmury?',
        answer: 'Nie. Transkrypcja zawsze odbywa się na Twoim Macu. Wyjść może tylko tekst po redakcji — i tylko do chmurowego AI, które sam wybrałeś i na które wyraziłeś zgodę.',
      },
      {
        question: 'Czym jest Ivy?',
        answer: 'Ivy to AI wbudowane w IndexOne. Zapytaj ją w trakcie spotkania bez zatrzymywania nagrania albo później — o wszystko, co nagrałeś i napisałeś. Każda odpowiedź wskazuje spotkania i notatki, z których pochodzi. Ivy może działać w całości na Twoim Macu, przez lokalną Ollamę albo — po wyraźnej zgodzie — przez chmurowego dostawcę, z redakcją danych.',
      },
      {
        question: 'Czy potrzebuję połączenia z internetem?',
        answer: 'Raz, żeby pobrać model Whisper. Potem nagrywanie, transkrypcja, wyszukiwanie i Ivy na urządzeniu działają offline. Połączenia z chmurowym AI, konektory i udostępnianie wymagają internetu.',
      },
      {
        question: 'Czy potrzebuję Claude Code?',
        answer: 'Tylko jeśli zostawisz go jako autora notatek. Zamiast niego możesz wybrać Codex, Anthropic API, bramkę AI zgodną z OpenAI, lokalną Ollamę albo model na urządzeniu.',
      },
      {
        question: 'Jakie języki są obsługiwane?',
        answer: 'Whisper transkrybuje wiele języków. Do AI na urządzeniu możesz wybrać wielojęzyczne modele Qwen3 albo modele Bielik, stworzone z myślą o języku polskim.',
      },
      {
        question: 'Dlaczego macOS prosi o uprawnienie Screen & System Audio Recording?',
        answer: 'To uprawnienie pozwala aplikacji słyszeć dźwięk z innych aplikacji — czyli pozostałych uczestników rozmowy. IndexOne zapisuje wyłącznie dźwięk.',
      },
      {
        question: 'Czy działa ze słuchawkami i na Macach z procesorem Intel?',
        answer: 'Tak i tak. Dźwięk drugiej strony jest pobierany z systemu, a nie z głośników, a aplikacja jest kompilacją uniwersalną. Duże modele na urządzeniu działają najlepiej na Apple Silicon.',
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
  },
}

export default content
