import type { SiteContent } from './types'

const content: SiteContent = {
  meta: {
    home: {
      title: 'IndexOne — notes de réunion et transcription Mac, avec Ivy',
      description: 'Enregistrez et transcrivez vos réunions sur votre Mac, puis interrogez Ivy, l’IA sur l’appareil, en direct ou sur tous vos appels. Seul ou en organisation.',
    },
    features: {
      breadcrumb: 'Fonctionnalités',
      title: 'Fonctions — transcription de réunions, Ivy et notes sur Mac',
      description: 'Transcription double flux sur votre Mac, Ivy en appel, questions sur toutes vos réunions, preuves, projets, plugins, serveurs d’IA locaux et Markdown.',
    },
    privacy: {
      breadcrumb: 'Confidentialité',
      title: 'Confidentialité IndexOne — IA locale et ce qui quitte le Mac',
      description: 'Transcription et IA sur l’appareil, bibliothèque chiffrée, dossiers verrouillés par Touch ID, pare-feu d’anonymisation. Voyez ce que chaque IA envoie.',
    },
    pricing: {
      breadcrumb: 'Tarifs',
      title: 'Tarifs IndexOne — comparatif avec Obsidian, Notion et autres',
      description: 'IndexOne est gratuit sur Mac ; les offres cloud facultatives commencent à 49 PLN/mois. Comparez-le à Obsidian, Notion, Evernote, Bear et Amie : enregistrement, transcription, IA locale et Markdown.',
    },
    changelog: {
      breadcrumb: 'Nouveautés',
      title: 'Nouveautés IndexOne — notes de version de l’app Mac',
      description: 'Les notes de chaque version d’IndexOne pour Mac, de la plus récente à la plus ancienne : nouveautés pour Ivy, organisations et confidentialité, correctifs.',
    },
    ogImageAlt: 'IndexOne — notes de réunion et transcription Mac, avec Ivy',
  },
  common: {
    skipToContent: 'Aller au contenu',
    homeAria: 'Accueil IndexOne',
    primaryNav: 'Navigation principale',
    footerNav: 'Pied de page',
    language: 'Langue',
  },
  nav: {
    features: 'Fonctionnalités',
    privacy: 'Confidentialité',
    pricing: 'Tarifs',
    compare: 'Comparatif',
    faq: 'FAQ',
    docs: 'Documentation',
    github: 'GitHub',
    changelog: 'Nouveautés',
    download: 'Télécharger',
  },
  theme: {
    label: 'Thème',
    skinsGroup: 'Thème',
    modesGroup: 'Mode',
    skins: {
      studio: { label: 'Studio', description: 'Ciel sur brume, dégradé doux' },
      paper: { label: 'Paper', description: 'Parchemin chaleureux, pensé pour la lecture' },
      minimalist: { label: 'Minimalist', description: 'shadcn/ui pur, neutre' },
    },
    modes: { light: 'Clair', dark: 'Sombre', system: 'Système' },
  },
  hero: {
    badgeLocal: 'Local d’abord · macOS',
    badgeIvy: 'Ivy sur l’appareil',
    badgeStar: 'Une étoile sur GitHub',
    githubAria: 'IndexOne sur GitHub',
    titleStrong: 'Des notes de réunion avec Ivy —',
    titleSoft: 'et c’est vous qui choisissez où elle tourne.',
    subHtml: 'IndexOne enregistre vos appels et les transcrit <b>sur votre Mac</b>. Interrogez Ivy en direct, en pleine réunion, ou sur tout ce que vous avez enregistré. Faites tourner l’IA sur votre Mac ou sur votre propre serveur d’IA local, ou activez explicitement une <b>IA cloud anonymisée</b>. Dans l’espace On this Mac, vos archives de réunions restent sur votre Mac.',
    download: 'Télécharger pour macOS',
    privacyCta: 'Comprendre la confidentialité',
    note: 'Signée et notariée · macOS 13.4+ · Apple Silicon (M1 ou plus récent) · vos notes restent en Markdown, et elles vous appartiennent',
    videoLabel: 'Une visite de 90 secondes d’IndexOne : une réunion enregistrée pendant qu’une note est saisie à côté, la note rédigée ensuite et les éléments qu’elle en extrait, la chronologie des intervenants, une question posée à Ivy sur tout le coffre et sa réponse sourcée, le graphe de connaissances, la barre des Workspaces et la recherche sur l’appareil, un projet, la vue Personnes, et un Workspace qui refuse de s’ouvrir parce qu’il est scellé',
    play: 'Voir la visite de 90 secondes',
  },
  home: {
    announce: { badge: 'Nouveau', text: 'IndexOne {version} est disponible : découvrez ce qui change' },
    pillars: {
      eyebrow: 'Pourquoi IndexOne',
      title: 'Vos réunions, mémorisées. Votre Mac, aux commandes.',
      lead: 'Trois choses qu\'IndexOne fait de chaque appel, et où chacune s\'exécute.',
      items: {
        capture: {
          title: 'Entend les deux côtés de l\'appel',
          body: 'Votre micro et l\'audio des autres participants sont enregistrés en deux flux et transcrits sur votre Mac par Whisper.',
          link: 'Capture et transcription',
        },
        ivy: {
          title: 'Demandez à Ivy, en direct ou plus tard',
          body: 'Posez une question en pleine réunion sans arrêter l\'enregistrement, ou sur des mois d\'appels. Chaque réponse cite les réunions dont elle vient.',
          link: 'Comment fonctionne Ivy',
        },
        privacy: {
          title: 'Scellé par Touch ID',
          body: 'Une bibliothèque chiffrée et des verrous AES-256 pour n\'importe quel Workspace ou dossier. Un dossier verrouillé est invisible pour la recherche, le graphe et MCP.',
          link: 'Comment fonctionne la confidentialité',
        },
      },
      mock: {
        question: 'Qu\'avons-nous décidé pour la date de lancement ?',
        answer: 'Le lancement passe au 3 mars, après validation par la QA.',
        sources: '2 sources',
        folders: ['Direction', 'Recrutement', '1:1'],
      },
    },
    stats: {
      aria: 'IndexOne en chiffres',
      labels: [
        'flux audio par appel : vous et tous les autres',
        'compte nécessaire pour enregistrer et transcrire',
        'verrous Touch ID pour n\'importe quel dossier',
        'actions Ivy dans l\'éditeur de notes',
        'documents en un clic depuis chaque réunion',
        'sources d\'import, entièrement hors ligne',
      ],
    },
    showcase: {
      eyebrow: 'Voir dans l\'app',
      title: 'De l\'appel à la réponse, dans une seule app.',
      lead: 'Enregistrez la réunion, interrogez-la, gardez-la en Markdown. Choisissez une étape pour la voir.',
      tabsLabel: 'Visite du produit',
      tabs: { record: 'Enregistrer', ask: 'Demander', export: 'Garder' },
    },
    security: { more: 'Lire le modèle de confidentialité' },
    news: {
      eyebrow: 'Nouveautés',
      title: 'Sorti récemment.',
      lead: 'IndexOne sort souvent. Voici les dernières versions ; les notes de version sont en anglais.',
      read: 'Lire les notes',
      all: 'Toutes les versions',
    },
  },
  trust: {
    aria: 'En un coup d’œil',
    items: ['Transcription sur l’appareil', 'Verrouillage Touch ID au repos', 'Aucun cloud requis', 'Du Markdown brut, à vous'],
  },
  unique: {
    eyebrow: 'Seulement dans IndexOne',
    title: 'Ce qu’aucune autre app de notes ne fait pour vos réunions.',
    lead: 'Beaucoup d’apps stockent des notes ou transcrivent des appels. IndexOne enregistre les deux côtés de l’appel sur votre Mac, vous laisse interroger Ivy pendant la réunion et justifie chaque ligne qu’elle écrit.',
    items: {
      'live': {
        title: 'Interrogez Ivy en pleine réunion — tout reste sur votre Mac',
        body: 'Tapez ou dites une question en plein appel et obtenez une réponse fondée sur toutes les réunions que vous avez enregistrées, avec des sources à ouvrir ; l’enregistrement ne s’interrompt jamais. Choisissez Ivy on this Mac et aucun texte de réunion ne quitte votre Mac ; Claude Code et Codex restent désactivés tant que vous n’avez pas donné votre accord une fois.',
        link: 'Comment fonctionne Ivy',
      },
      'capture': {
        title: 'Les deux côtés de l’appel, transcrits sur votre Mac',
        body: 'Votre micro et l’audio système des autres participants sont captés en deux flux, puis fusionnés en une transcription Me / Others par Whisper, sur l’appareil. Dans l’espace On this Mac, aucune transcription dans le cloud.',
        link: 'Capture et transcription',
      },
      'receipts': {
        title: 'Chaque affirmation a sa preuve',
        body: 'Chaque ligne étayée d’une note renvoie à la seconde d’audio dont elle provient, avec l’intervenant. Les lignes sans preuve n’en reçoivent pas : vous voyez ce qui est vérifié.',
        link: 'Les preuves',
      },
      'security': {
        title: 'Chiffré sur votre Mac',
        body: 'Toute votre bibliothèque est chiffrée avec SQLCipher sur le Mac. Personal et chaque organisation dont vous êtes membre y gardent aussi une copie chiffrée : ils s’ouvrent sans connexion réseau.',
        link: 'Sécurité et confidentialité',
      },
      'locks': {
        title: 'Des dossiers scellés par Touch ID',
        body: 'Verrouillez un Workspace ou un dossier : ses notes, transcriptions et fichiers audio sont scellés en AES-256-GCM. Tant qu’il est verrouillé, il reste invisible pour la recherche, le graphe, MCP et le lecteur audio.',
        link: 'Le modèle de verrouillage',
      },
      'markdown': {
        title: 'Du Markdown brut et un serveur MCP local',
        body: 'Les notes arrivent dans votre coffre Obsidian en Markdown brut avec wikiliens, et un serveur MCP en lecture seule sur 127.0.0.1 permet à Claude et à d’autres agents de les interroger. Vous choisissez les espaces qu’il peut lire ; les organisations restent désactivées tant que vous ne les activez pas.',
        link: 'Markdown et MCP',
      },
    },
    seeAll: 'Voir toutes les fonctionnalités',
  },
  privacy: {
    lifecycle: {
      "title": "Cycle de vie des données · offres cloud",
      "items": [
        {
          "title": "Combien de temps les données sont-elles conservées ?",
          "body": "L’audio dans le cloud est conservé 30 jours par défaut, avec jusqu’à 90 jours prévus pour Personal et Team dans la limite du stockage. Les notes, transcriptions et fichiers ordinaires restent jusqu’à leur suppression par leur propriétaire, dans la limite du stockage."
        },
        {
          "title": "Que se passe-t-il après un changement vers un plan inférieur ?",
          "body": "L’annulation prend effet à la fin de la période payée. Lecture, export et suppression restent disponibles avec les droits d’accès."
        },
        {
          "title": "Qui garde les données si je quitte l’organisation ?",
          "body": "Le contenu de l’organisation reste dans l’organisation. Un départ ou un retrait d’accès empêche sa lecture et son export."
        }
      ]
    },
    eyebrow: 'Sécurité et confidentialité',
    title: 'La confidentialité n’est pas un réglage. C’est l’architecture.',
    leadHtml: 'Dans l’espace On this Mac, la transcription, la recherche et Ivy on this Mac peuvent fonctionner <b>sans aucun réseau</b> — dès que vous désactivez les deux choses qui se connectent par défaut : une vérification de nouvelle version au lancement et un message d’usage quotidien. Si vous choisissez Claude Code ou Codex, un consentement et un pare-feu d’anonymisation se placent devant cette sortie.',
    cards: {
      'offline': {
        title: 'Rien ne quitte l’appareil',
        body: 'Avec Ivy on this Mac et un modèle téléchargé une fois, votre audio et vos transcriptions ne touchent jamais le réseau. Le raisonnement se fait sur votre Mac.',
      },
      'at-rest': {
        title: 'Deux couches de chiffrement au repos',
        body: 'Toute la base de données est chiffrée avec SQLCipher. Par-dessus, un verrou <b>AES-256-GCM</b> par dossier ajoute des clés de contenu enveloppées par une clé maîtresse que seul <b>Touch ID</b> libère.',
      },
      'gated': {
        title: 'Chaque lecture est contrôlée',
        body: 'Un dossier scellé et verrouillé ne laisse rien fuiter — ni dans l’app, ni dans la recherche, le graphe, MCP, ni même dans le chemin audio. Les réunions verrouillées apparaissent simplement comme <b>Locked</b>.',
      },
      'seals': {
        title: 'Les sceaux vérifient avant d’effacer',
        body: 'IndexOne vérifie que le texte chiffré se déchiffre correctement <b>avant</b> d’effacer le texte en clair — le contenu n’est jamais perdu, et le verrouillage est entièrement réversible.',
      },
      'screen-share': {
        title: 'Attentif au partage d’écran',
        body: 'Un observateur peut reverrouiller automatiquement les dossiers scellés et effacer la clé en cache dès qu’un partage d’écran est détecté — un écran partagé ne peut donc pas dévoiler vos notes privées.',
      },
      'firewall': {
        title: 'Pare-feu d’anonymisation',
        body: 'Si vous activez un jour un résumeur cloud, les e-mails, les numéros ressemblant à des numéros de carte et les numéros de téléphone sont d’abord supprimés — et la sortie vers le cloud est <b>bloquée par défaut</b> derrière un consentement unique. Téléchargez le modèle optionnel de masquage des noms, et les noms des personnes sont remplacés eux aussi.',
      },
      'update-check': {
        title: 'Les deux appels que nous faisons par défaut',
        body: 'Au lancement, IndexOne demande à GitHub s’il existe une version plus récente ; la requête indique la version que vous utilisez, et rien d’autre. Une fois par jour, il envoie aussi un petit message d’usage : un identifiant d’installation aléatoire, les versions de l’app et de macOS, le type de puce, la langue et si vous êtes connecté — pas de réunions, de notes, d’enregistrements ni de noms. Il n’est anonyme que si vous êtes déconnecté ; si vous êtes connecté, il est envoyé avec votre compte. Vous pouvez désactiver l’un comme l’autre dans <b>Settings → Privacy</b>. Ce sont les seules choses sur cette page qui se produisent sans que vous le demandiez, et c’est justement pour ça qu’elles y figurent.',
      },
    },
    tableCaption: 'Où tourne chaque fournisseur d’IA, et si le texte des réunions quitte votre Mac',
    tableHeaders: ['Ivy / fournisseur', 'Où il tourne', 'Le texte des réunions quitte-t-il votre Mac ?'],
    providers: {
      'on-device': { name: 'Ivy on this Mac', note: 'Bielik / Qwen', where: 'Entièrement local' },
      'ivy-web': { name: 'Ivy on the web', note: 'Personal et organisations', where: 'IndexOne sur le web', leaves: 'Oui — l’espace lui-même est sur le web' },
      'claude-code': { name: 'Claude Code', where: 'CLI locale → cloud' },
      'codex': { name: 'Codex', note: 'la CLI d’OpenAI, exécutée sans outils', where: 'CLI locale → cloud' },
      'local-server': { name: 'Local AI server', note: 'Ollama, LM Studio, oMLX et autres', where: 'Votre Mac ou votre réseau', leaves: 'Non avec un serveur sur ce Mac. Vers un serveur ailleurs sur votre réseau seulement après confirmation de son adresse ; les noms sont masqués d’abord' },
    },
    leavesYes: 'Seulement après consentement, pare-feu d’anonymisation appliqué',
    leavesNo: 'Non',
    shotAlt: 'Les réglages de confidentialité d’IndexOne, qui indiquent en langage clair ce qui est retiré avant que le moindre texte ne sorte, quels fournisseurs sont dans le cloud, et si le traitement cloud a été autorisé',
    footnote: 'IndexOne vous dit, en langage clair, exactement ce qui quitte votre Mac — et chaque appel à une IA cloud est journalisé et vous est présenté. Chaque espace a un seul choix d’IA : Ivy on this Mac, Ivy on the web, Claude Code, Codex ou votre propre serveur d’IA local. Dans l’espace On this Mac, les réunions restent sur votre Mac, sauf si vous choisissez Claude Code, Codex ou un serveur d’IA local ailleurs sur votre réseau.',
  },
  features: {
    eyebrow: 'Ce que vous obtenez',
    title: 'Un outil de réunion qui se souvient vraiment.',
    lead: 'Un seul espace chiffré, trois façons de l’utiliser — l’app, un serveur MCP local et vos fichiers Markdown exportés. Une seule arborescence contient tout, les projets s’appuient dessus, et Ivy lit l’ensemble.',
    items: {
      'workspaces': {
        eyebrow: 'Workspaces',
        title: 'Une seule arborescence pour tout',
        body: 'Une arborescence unique — <b>Workspaces › dossiers › vos enregistrements et notes</b> — dans une barre latérale qui se replie en rail quand vous voulez de la place. Verrouillez un Workspace et tout ce qu’il contient est scellé avec lui.',
        points: [
          'Enregistrements, notes, tâches et projets se rangent au même endroit',
          'Un Workspace scellé affiche son nom et rien d’autre — ni compteurs, ni contenu',
          'Demandez à Ivy de ranger un enregistrement égaré à votre place',
          'Supprimé par erreur ? La corbeille le garde 30 jours — ou la durée de votre choix, jusqu’à un an',
        ],
        alt: 'La barre latérale des Workspaces : une arborescence de Workspaces et de dossiers contenant enregistrements, notes et projets, avec un Workspace verrouillé en bas',
      },
      'dashboards': {
        eyebrow: 'Projets',
        title: 'Des projets que vous composez',
        body: 'Rassemblez des notes, enregistrements, documents, personnes, registres d’engagements et rappels dans un projet, puis lisez-le à travers les vues <b>Brief / Overview / Commitments / Sources / People</b>. Épinglez une <b>réponse vivante</b> — une question enregistrée dont la dernière réponse est conservée avec sa date, mise à jour quand vous le demandez, et retirée dès que ses sources ne sont plus lisibles. Vous pouvez aussi interroger un projet directement, uniquement à partir de ce qu’il contient.',
        points: [
          'Sept types de tuiles — une note, un enregistrement, un document, une personne, un registre d’engagements, une liste de rappels ou une réponse vivante',
          'Cinq vues sur les mêmes tuiles — sans jamais rien dupliquer',
          'Un projet affiche ses propres limites : ce qu’il peut lire, et ce qu’il en a déduit',
        ],
        alt: 'Un projet dans sa vue Brief : la réponse enregistrée à une question épinglée, ce qui demande votre attention et les preuves récentes qui l’appuient',
      },
      'imports': {
        eyebrow: 'Imports',
        title: 'Apportez vos notes existantes',
        body: 'Settings → Imports récupère un <b>export Notion</b>, un <b>coffre Obsidian</b>, <b>Apple Notes</b>, un dossier de <b>fichiers Markdown</b> ou une <b>sauvegarde IndexOne</b>. Entièrement hors ligne — sans compte, sans clé, sans appel réseau. Chaque import commence par une simulation, pour voir ce qu’il écrirait avant qu’il n’écrive quoi que ce soit.',
        points: [
          'Cinq sources : un export Notion, un coffre Obsidian, Apple Notes, un dossier de fichiers Markdown, une sauvegarde IndexOne',
          'Simulation d’abord — rien n’est écrit tant que vous ne validez pas',
          'Les notes importées arrivent dans leur propre dossier nommé, et Ivy les lit comme tout le reste',
        ],
        alt: 'Settings → Imports : Notion, Obsidian, Apple Notes, fichiers Markdown et sauvegarde IndexOne, avec la mention que tout se passe sur ce Mac et que rien n’est envoyé',
      },
      'ivy': {
        eyebrow: 'Ivy',
        title: 'Parlez à Ivy — pendant la réunion.',
        body: 'C’est ce qui manque à la plupart des outils de prise de notes. Déclenchez Ivy avec une phrase d’activation ou d’un simple geste ; elle répond à partir de la mémoire de vos réunions, en direct, avec des citations à ouvrir — et l’enregistrement ne s’arrête jamais.',
        points: [
          'Modèle de raisonnement sur l’appareil (Bielik-11B, Qwen) via Metal',
          'Étayé, pas halluciné — tiré de vos propres transcriptions',
          'Accès web optionnel soumis à consentement — désactivé par défaut',
        ],
        alt: 'Un enregistrement en cours avec une question posée en pleine réunion, à laquelle Ivy répond en direct en citant ses sources',
      },
      'ask': {
        eyebrow: 'Interrogez votre coffre',
        title: 'Posez vos questions sur des mois d’appels.',
        body: 'Toujours Ivy, mais tournée vers tout ce que vous avez enregistré et écrit. Chaque réponse arrive avec les réunions et les notes dont elle est tirée : vous ouvrez la source au lieu de la croire sur parole.',
        points: [
          'Limitez une question à un Workspace ou à un dossier — toute sa sous-arborescence, et rien en dehors',
          'Les conversations sont mémorisées — les fils sur le coffre, une note ou une réunion sont conservés, avec un historique sur chaque surface',
          'Une conversation disparaît dès qu’un des dossiers qu’elle a utilisés n’est plus lisible',
          'Votre propre modèle : notes et réponses peuvent venir d’Ollama, LM Studio, oMLX, llama.cpp ou de tout serveur compatible OpenAI',
        ],
        alt: 'Une question posée à Ivy sur des mois de réunions et une réponse unique, avec la liste des réunions dont elle est tirée',
      },
      'transcription': {
        eyebrow: 'Capture et transcription',
        title: 'Elle entend les deux côtés de l’appel.',
        body: 'L’enregistrement double flux capte votre micro et l’audio système de l’autre côté, transcrit chacun séparément sur l’appareil, puis les fusionne selon l’heure réelle en une transcription Me / Others propre, avec des sous-titres en direct pendant que vous parlez.',
        points: [
          'Whisper sur l’appareil — de tiny à large-v3, y compris la version turbo plus rapide, plus des variantes quantifiées',
          'Attribution sur deux flux : vous et tous les autres, avec détection d’activité vocale',
          'Une barre d’enregistrement flottante — enregistrez de n’importe où (⌘⇧R)',
        ],
        alt: 'La transcription fusionnée Me / Others, horodatée, à côté de la chronologie des intervenants et des sujets',
      },
      'memory': {
        eyebrow: 'Notes et mémoire',
        title: 'Des notes structurées et un graphe qui se construit tout seul.',
        body: 'Chaque appel devient une note claire — résumé, décisions, actions à mener, citations. Enregistrements et notes vivent côte à côte dans le même Workspace. Les personnes et les projets sont extraits automatiquement dans un graphe de connaissances, et les Workspaces scellés y restent invisibles.',
        points: [
          'Interrogez toutes vos réunions grâce à la recherche sémantique hybride',
          'Fiches d’entités, réunions liées, synthèses hebdomadaires',
          'Des rappels privés qui ne quittent jamais le Mac, chacun relié à l’enregistrement ou à la note d’origine — Ivy propose, vous validez',
          'Les actions à mener peuvent aussi être envoyées vers Apple Reminders',
          'Ajoutez des PDF, des documents Office, des pages web et des images — indexés pour Ivy, sur l’appareil',
        ],
        alt: 'Le graphe de connaissances — réunions, notes, documents et personnes sur une seule carte, avec des liens typés entre eux',
      },
      'receipts': {
        eyebrow: 'Preuves',
        title: 'Chaque affirmation remonte à l’enregistrement.',
        body: 'Les notes d’IndexOne ne vous demandent pas de leur faire confiance. Chaque ligne fondée sur ce qui a réellement été dit porte une preuve — cliquez dessus pour aller directement à la seconde d’audio correspondante, avec l’intervenant. Les lignes paraphrasées ou non étayées n’en ont pas : vous voyez d’un coup d’œil ce qui est vérifié.',
        points: [
          'Cliquez sur une affirmation, écoutez exactement d’où elle vient',
          'Intervenant et seconde exacte sur chaque preuve',
          'Sept documents en un clic à partir de n’importe quelle réunion — e-mail de suivi, journal des décisions, ticket, compte rendu de 1:1, standup, récap commercial, notes d’entretien',
          'Les dossiers scellés ne laissent jamais fuiter ni horodatage ni intervenant',
        ],
        alt: 'Les preuves d’une note générée : une ligne par affirmation étayée, chacune avec l’intervenant et la seconde d’audio d’origine',
      },
      'markdown': {
        eyebrow: 'À vous pour de bon',
        title: 'Du Markdown brut. Aucune dépendance.',
        body: 'Chaque note est aussi exportée en Markdown atomique — front-matter YAML, <code>[[wikilinks]]</code>, liens profonds vers les blocs et une option de tableau canvas. Ce sont de simples fichiers qui vous appartiennent, lisibles dans n’importe quel éditeur.',
        points: [
          'Une base de données SQLite chiffrée est l’unique source de vérité',
          'Un serveur MCP local en lecture seule pour Claude Desktop et Claude Code',
          'Des exports Markdown bruts à ouvrir dans n’importe quel éditeur',
        ],
        alt: 'Une note structurée — résumé, décisions, actions à mener et citations — à côté des enregistrements et des notes vers lesquels elle renvoie',
      },
      'notes': {
        eyebrow: 'Notes',
        title: 'Pas seulement vos notes de réunion. Toutes vos notes.',
        body: 'Un éditeur Markdown complet, rangé dans les mêmes Workspaces que vos enregistrements — pour tout ce que vous écrivez, pas seulement ce qu’IndexOne transcrit. Sélectionnez un passage et le menu Ivy apparaît : affiner, raccourcir, changer de ton, traduire, vérifier les faits, ou simplement écrire ce que vous voulez.',
        points: [
          'Dix-neuf actions Ivy, à une touche',
          'Fondé sur vos propres réunions et notes, pas sur les suppositions du modèle',
          'Collez des captures d’écran dans vos notes : elles restent en local et suivent le verrouillage du Workspace',
          'Les Ivy skills de l’écran Plugins guident les notes et réponses d’Ivy dans le cloud — choisissez-les dans la fenêtre d’Ivy, une note ou la barre d’enregistrement',
        ],
        alt: 'L’éditeur de notes avec un texte sélectionné et le menu de commandes Ivy ouvert, montrant Refine, Shorten, Change tone et d’autres actions',
      },
    },
  },
  offer: {
    "web": "Ouvrir le web",
    "status": "Les offres cloud sont disponibles. Connectez-vous à l’app web pour acheter une offre ou gérer votre abonnement. Les fonctions locales sur Mac restent disponibles.",
    "monthly": "Par mois, en PLN",
    "tax": "Personal TTC. Team HT : minimum 2 places = 150 PLN HT/mois. Avec TVA à 23% : 184,50 PLN au total (92,25 par place). La taxe peut varier ; l’application doit afficher le total avant achat.",
    "trialTitle": "Gratuit chaque mois",
    "trial": "Chaque compte personnel gratuit reçoit chaque mois civil (UTC) 200 000 unités Ivy et une transcription cloud de base, sans carte. Les fonctions locales sur Mac n’ont pas de limite d’offre.",
    "meterTitle": "Transcription illimitée",
    "meter": "Les offres payantes n’ont pas de limite de transcription. Si vous transcrivez beaucoup, certains enregistrements peuvent être prêts après quelques heures ; une utilisation raisonnable s’applique. La transcription locale sur votre Mac est toujours immédiate.",
    "privacyTitle": "Local et cloud",
    "privacy": "Le traitement local Mac reste sur le Mac. Le cloud standard stocke et traite les contenus sur des serveurs lisibles par l’opérateur, sans chiffrement de bout en bout. Le masquage de motifs n’est pas une anonymisation complète. Un abonnement ne donne pas accès aux espaces privés.",
    "after": "Free comprend les notes de base, l’édition, la recherche ordinaire, la synchronisation, la lecture et l’export dans la limite de 1 Go, ainsi que le quota cloud mensuel. Les offres payantes ajoutent plus d’IA, de transcription et de stockage cloud.",
    "team": "Personal et chaque organisation ont des abonnements et soldes distincts. Team : 2,25 millions d’unités Ivy interactives et 250 000 d’automatisation par place, ces dernières dans un pool commun. Stockage partagé. Une place ne change pas les droits. Jusqu’à 2 organisations gratuites de 5 membres partagent le stockage du compte fondateur.",
    "lifecycle": "Audio cloud : 30 jours par défaut ; Free 7/14/30, payant aussi 90. Corbeille : 30 jours. Résilier ne supprime pas les contenus ; droits payants jusqu’à la fin de période. Dépassement après réduction : lecture/export et 90 jours de protection. Exportez l’audio avant expiration.",
    "docs": "Offre et facturation · documentation en anglais",
    "comparison": "Comparer les offres",
    "local": "Outils Mac locaux",
    "basics": "Notes cloud et synchronisation",
    "ivy": "Unités Ivy cloud / mois",
    "asr": "Transcription cloud",
    "asrUnlimited": "Illimitée",
    "asrBasic": "Incluse",
    "storage": "Stockage cloud",
    "included": "Inclus",
    "once": "Un essai",
    "seat": "par place",
    "unit": "Les unités Ivy sont un budget de traitement, pas des tokens bruts ni un nombre garanti de réponses. GB = un milliard d’octets."
},
  pricing: {
    "eyebrow": "Par mois, en PLN",
    "title": "Choisissez où travailler.",
    "lead": "Free sur Mac. Cloud facultatif aux limites claires.",
    "plans": {
        "free": {
            "name": "Free",
            "badge": "Disponible sur Mac",
            "price": "0 PLN",
            "per": "Par mois, en PLN",
            "tagline": "Travail local sans limite de plan ; limites matérielles applicables.",
            "points": [
                "Outils Mac locaux",
                "Notes cloud et synchronisation",
                "1 GB",
                "200k Ivy"
            ],
            "cta": ""
        },
        "personal": {
            "name": "Personal",
            "badge": "Disponible",
            "price": "49 PLN",
            "per": "TTC / mois",
            "tagline": "Pour votre espace cloud personnel.",
            "points": [
                "Outils Mac locaux",
                "Notes cloud et synchronisation",
                "20 GB",
                "1.2M Ivy · transcription illimitée",
                "Enregistrements d’écran dans le cloud"
            ],
            "cta": "Acheter dans l’app web"
        },
        "team": {
            "name": "Team",
            "badge": "Disponible",
            "price": "75 PLN",
            "per": "HT / place / mois",
            "tagline": "Pour une organisation, dès deux places.",
            "points": [
                "Outils Mac locaux",
                "Notes cloud et synchronisation",
                "50 GB · par place",
                "2.5M Ivy · transcription illimitée",
                "Bot Google Meet",
                "Enregistrements d’écran dans le cloud"
            ],
            "cta": "Acheter dans l’app web"
        }
    }
},
  compare: {
    eyebrow: 'Concurrence',
    title: 'IndexOne face aux autres.',
    lead: 'Obsidian, Notion, Evernote, Bear et Amie excellent dans leur domaine. IndexOne est conçu pour ce qui se passe en réunion — l’enregistrer, le transcrire sur votre Mac et vous permettre de l’interroger — et il peut aussi écrire dans votre coffre Obsidian.',
    capability: 'Fonctionnalité',
    caption: 'IndexOne comparé à d’autres apps de notes',
    labels: { yes: 'Oui', partial: 'En partie', no: 'Non', unknown: 'Inconnu' },
    notStated: 'Non précisé',
    footnote: 'D’après les pages publiques de tarifs et de fonctionnalités de chaque éditeur, consultées en octobre 2026. Les offres et les fonctionnalités évoluent — vérifiez sur le site de l’éditeur avant de décider. Les noms de produits sont des marques de leurs propriétaires ; IndexOne n’est affilié à aucun d’eux.',
    rows: {
      'capture': {
        criterion: 'Enregistre les deux côtés d’un appel',
        cells: ['Micro et audio système, en deux flux', 'Micro uniquement (plugin principal Audio recorder)', 'App de bureau ; micro uniquement dans le navigateur', 'Enregistreur de réunions sur ordinateur', 'Pas d’enregistrement', 'Sur ordinateur, sans bot'],
      },
      'local-transcription': {
        criterion: 'Transcription sur votre appareil',
        cells: ['Whisper sur l’appareil dans l’espace On this Mac', 'Pas de transcription intégrée', 'Cloud', 'Cloud', 'Pas de transcription', 'Cloud'],
      },
      'local-ai': {
        criterion: 'IA pouvant tourner entièrement sur votre appareil',
        cells: ['Ivy on this Mac ou votre propre serveur d’IA local', 'Pas d’IA intégrée ; plugins de la communauté', 'Cloud uniquement', 'Cloud uniquement', 'Pas d’IA intégrée', 'Cloud uniquement'],
      },
      'ask-all': {
        criterion: 'Interroger toutes les réunions et notes passées',
        cells: ['Les réponses citent leurs sources', 'Plugins de la communauté uniquement', 'Offre Business ; cite les sources', 'AI Assistant sur les notes ; IA de réunion par enregistrement', '', 'Chat sur les anciens enregistrements avec Pro ; citations non précisées'],
      },
      'local-data': {
        criterion: 'Données sur votre appareil par défaut',
        cells: ['', 'Fichiers locaux', 'Cloud de Notion', 'Cloud d’Evernote', 'Base locale ; synchro iCloud avec Pro', 'Cloud d’Amie'],
      },
      'markdown': {
        criterion: 'Notes en fichiers Markdown bruts qui vous appartiennent',
        cells: ['Écrites dans votre coffre ; la base chiffrée fait foi', '', 'Export Markdown uniquement', 'Export ENEX, HTML ou PDF', 'Base de données ; export Markdown', ''],
      },
      'encryption': {
        criterion: 'Un chiffrement que vous contrôlez',
        cells: ['Base chiffrée, dossiers verrouillés par Touch ID, une copie locale chiffrée de chaque espace web', 'Chiffrement de bout en bout pour la Sync payante', 'Chiffré sur les serveurs de Notion ; pas de bout en bout', 'Phrase secrète pour du texte sélectionné uniquement', 'Notes individuelles, avec Pro', ''],
      },
      'platforms': {
        criterion: 'Plateformes',
        cells: ['macOS', 'macOS, Windows, Linux, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, iOS, iPadOS, web (bêta)', 'macOS, Windows, iOS'],
      },
      'price': {
        criterion: 'Prix',
        cells: ['Gratuit sur Mac ; cloud Personal 49 PLN/mois, Team 75 PLN HT par siège', 'Gratuit ; Sync dès $4/mois, facturé annuellement', 'Gratuit ; l’IA et les notes de réunion nécessitent Business, $20/mois facturé annuellement', 'Gratuit jusqu’à 50 notes ; Starter $99/an', 'Gratuit ; Pro $29.99/an', 'Gratuit avec 25 crédits de notes ; Pro dès €20/mois, facturé annuellement'],
      },
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Les questions qu’on nous pose en premier.',
    leadHtml: 'Des réponses courtes ici ; la <a href="/docs/">documentation</a> donne tous les détails.',
    items: [
      {
        question: 'IndexOne est-il gratuit ?',
        answer: 'Oui, sur Mac. L’enregistrement local, la transcription, les notes et les exports ne nécessitent ni compte ni paiement. Les offres cloud facultatives (Personal 49 PLN/mois, Team 75 PLN HT par siège) ajoutent la transcription dans le cloud, Ivy dans le cloud et plus de stockage.',
      },
      {
        question: 'Mon audio part-il dans le cloud ?',
        answer: 'Pas dans l’espace On this Mac : la transcription s’y fait sur votre Mac avec Whisper. Seul du texte peut sortir : anonymisé, vers Claude Code ou Codex une fois votre accord donné, ou avec les noms masqués, vers un serveur d’IA local de votre réseau une fois son adresse confirmée. Les espaces Personal et d’organisation vivent sur IndexOne sur le web : leurs enregistrements y sont donc stockés.',
      },
      {
        question: 'Qu’est-ce qu’Ivy ?',
        answer: 'Ivy est l’IA intégrée à IndexOne. Interrogez-la pendant une réunion sans arrêter l’enregistrement, ou plus tard, sur tout ce que vous avez enregistré et écrit. Chaque réponse cite les réunions et les notes dont elle provient. Chaque espace choisit une IA : Ivy on this Mac, Ivy on the web pour Personal et les organisations, votre propre serveur d’IA local, ou Claude Code ou Codex après consentement explicite.',
      },
      {
        question: 'Ai-je besoin d’une connexion internet ?',
        answer: 'Une fois, pour télécharger un modèle Whisper. Ensuite, l’enregistrement, la transcription, la recherche et Ivy on this Mac fonctionnent hors ligne. Les espaces Personal et d’organisation s’ouvrent hors ligne depuis leur copie chiffrée et envoient vos modifications dès que vous êtes de nouveau en ligne. Ivy on the web, Claude Code, Codex et les connecteurs nécessitent une connexion.',
      },
      {
        question: 'Ai-je besoin de Claude Code ?',
        answer: 'Non. Chaque espace a un seul choix d’IA : Ivy on this Mac, Ivy on the web (Personal et organisations), Claude Code, Codex ou votre propre serveur d’IA local, comme Ollama, LM Studio, oMLX ou llama.cpp.',
      },
      {
        question: 'Quelles langues sont prises en charge ?',
        answer: 'Whisper transcrit de nombreuses langues. Pour l’IA sur l’appareil, vous pouvez choisir les modèles multilingues Qwen3 ou les modèles Bielik, nativement polonais. Le plugin Languages rédige chaque note dans la langue de votre choix, peut ajouter une deuxième langue, traduit les réunions après coup et tient un glossaire des noms et des termes.',
      },
      {
        question: 'Pourquoi macOS demande-t-il l’autorisation Enregistrement de l’écran et de l’audio système ?',
        answer: 'C’est par cette autorisation que macOS permet à une app d’entendre l’audio des autres apps — les autres participants à l’appel. IndexOne n’enregistre que l’audio.',
      },
      {
        question: 'Est-ce que ça marche avec un casque et sur les Mac Intel ?',
        answer: 'Avec un casque, oui : l’audio de l’autre côté est capté depuis le système, pas depuis vos haut-parleurs. Sur les Mac Intel, non : IndexOne nécessite un Mac Apple Silicon (M1 ou plus récent).',
      },
      {
        question: 'IndexOne est-il open source ?',
        answer: 'Non. L’app est gratuite à télécharger et à utiliser, mais son code source n’est pas public. Les versions 2.8.0 et antérieures ont été publiées à l’origine sous licence GNU AGPL-3.0, à l’époque où leur code source était public.',
      },
    ],
  },
  changelog: {
    eyebrow: 'Nouveautés',
    title: 'Nouveautés d\'IndexOne',
    lead: 'Chaque version de l\'app macOS, de la plus récente à la plus ancienne. Téléchargez la dernière version ou consultez toutes les versions et sommes de contrôle sur GitHub.',
    download: 'Télécharger la dernière',
    github: 'Toutes les versions sur GitHub',
    latest: 'Dernière',
    englishNote: 'Les notes de version sont publiées en anglais.',
    versions: 'Versions',
    filterLabel: 'Afficher les versions',
    filters: { all: 'Toutes', features: 'Nouveautés', fixes: 'Correctifs' },
    kinds: { major: 'Version majeure', minor: 'Nouveautés', patch: 'Correctifs' },
    count: { one: '{count} version', other: '{count} versions' },
    showOlder: 'Voir les versions précédentes',
    empty: 'Aucune version de ce type.',
  },
  cta: {
    title: 'Invitez Ivy dans vos réunions — gardez le contrôle sur votre Mac.',
    lead: 'Local d’abord, pour macOS. Gardez l’IA en local, ou activez explicitement une IA cloud anonymisée quand vous le décidez.',
    compare: 'Voir le comparatif avec Obsidian, Notion, Evernote, Bear et Amie.',
    download: 'Télécharger pour macOS',
    github: 'Voir sur GitHub',
    legacyHtml: 'Vous utilisez la version 2.8.0 ou antérieure ? Sa vérification des mises à jour ne peut plus nous joindre. Téléchargez une fois la <a href="{download}">dernière version</a> et faites-la glisser dans Applications pour remplacer l’ancienne copie ; votre bibliothèque, vos enregistrements et vos réglages restent en place. À partir de la 2.9.0, l’app trouve elle-même les nouvelles versions.',
  },
  footer: {
    legalHtml: 'macOS d’abord · Ivy sur l’appareil · local d’abord · conçu avec Tauri, Angular et Rust · gratuit pour macOS · © {year} <a href="{authors}">MonoOne</a> · texte <a href="{license}">CC BY 4.0</a>',
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
content.faq.items[0] = { question: "Que comprend Free ?", answer: content.offer.after }
content.faq.items.push(
  { question: content.offer.trialTitle, answer: content.offer.trial },
  { question: content.offer.meterTitle, answer: content.offer.meter },
  { question: content.offer.privacyTitle, answer: content.offer.privacy },
  { question: "Qui paie Team ?", answer: content.offer.team },
  ...content.privacy.lifecycle.items.map(item => ({ question: item.title, answer: item.body })),
)
content.compare.rows.price.cells[0] = 'Free · Personal 49 PLN · Team 75 PLN'

export default content
