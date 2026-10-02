import type { SiteContent } from './types'

const content: SiteContent = {
  meta: {
    home: {
      title: 'IndexOne — notes de réunion locales pour macOS, avec Ivy',
      description: 'Enregistrez et transcrivez vos réunions sur votre Mac, puis interrogez votre IA Ivy en direct ou sur tous vos appels. IA locale ou cloud anonymisé, en Markdown.',
    },
    features: {
      breadcrumb: 'Fonctionnalités',
      title: 'Fonctionnalités — notes de réunion IndexOne pour macOS',
      description: 'Workspaces, tableaux de bord, imports, Ivy en réunion, questions à votre coffre, transcription double flux, preuves, export Markdown et Shared Ivy.',
    },
    privacy: {
      breadcrumb: 'Confidentialité',
      title: 'Confidentialité — ce qui ne quitte jamais votre Mac — IndexOne',
      description: 'Transcription sur l’appareil, SQLCipher au repos, dossiers verrouillés par Touch ID, pare-feu d’anonymisation et consentement avant toute IA cloud.',
    },
    pricing: {
      breadcrumb: 'Tarifs',
      title: 'Tarifs IndexOne — et comparatif avec Obsidian, Notion et autres',
      description: 'IndexOne est gratuit pendant l’accès anticipé. Comparez-le à Obsidian, Notion, Evernote, Bear et Amie : enregistrement, IA locale, chiffrement et Markdown.',
    },
    ogImageAlt: 'IndexOne — notes de réunion locales pour macOS, avec Ivy',
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
    releaseNotes: 'Notes de version',
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
    subHtml: 'IndexOne enregistre vos appels et les transcrit <b>sur votre Mac</b>. Interrogez Ivy en direct, en pleine réunion, ou sur tout ce que vous avez enregistré. Faites tourner l’IA en local, ou activez explicitement une <b>IA cloud anonymisée</b> — vos archives de réunions restent sur votre Mac.',
    download: 'Télécharger pour macOS',
    privacyCta: 'Comprendre la confidentialité',
    note: 'Signée et notariée · macOS 13.4+ · Apple Silicon et Intel · vos notes restent en Markdown, et elles vous appartiennent',
    videoLabel: 'Une visite de 90 secondes d’IndexOne : une réunion enregistrée pendant qu’une note est saisie à côté, la note rédigée ensuite et les éléments qu’elle en extrait, la chronologie des intervenants, une question posée à Ivy sur tout le coffre et sa réponse sourcée, le graphe de connaissances, la barre des Workspaces et la recherche sur l’appareil, un tableau en direct, la vue Personnes, et un Workspace qui refuse de s’ouvrir parce qu’il est scellé',
    play: 'Voir la visite de 90 secondes',
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
        body: 'Tapez ou dites une question en plein appel et obtenez une réponse fondée sur toutes les réunions que vous avez enregistrées, avec des sources à ouvrir ; l’enregistrement ne s’interrompt jamais. Faites tourner Ivy sur l’appareil ou via un Ollama local, et aucun texte de réunion ne quitte votre Mac ; l’IA cloud reste désactivée tant que vous n’avez pas donné votre accord une fois.',
        link: 'Comment fonctionne Ivy',
      },
      'capture': {
        title: 'Les deux côtés de l’appel, transcrits sur votre Mac',
        body: 'Votre micro et l’audio système des autres participants sont captés en deux flux, puis fusionnés en une transcription Me / Others par Whisper, sur l’appareil. Aucune transcription dans le cloud.',
        link: 'Capture et transcription',
      },
      'receipts': {
        title: 'Chaque affirmation a sa preuve',
        body: 'Chaque ligne étayée d’une note renvoie à la seconde d’audio dont elle provient, avec l’intervenant et le niveau de confiance. Les lignes sans preuve n’en reçoivent pas : vous voyez ce qui est vérifié.',
        link: 'Les preuves',
      },
      'security': {
        title: 'Chiffré partout où c’est stocké',
        body: 'Toute votre bibliothèque est chiffrée avec SQLCipher sur le Mac. Tout ce que vous partagez est scellé en AES-256-GCM avant l’envoi : le serveur ne détient que du texte chiffré. Et la connexion repose sur OPAQUE, si bien qu’il ne connaît jamais votre mot de passe.',
        link: 'Sécurité et confidentialité',
      },
      'locks': {
        title: 'Des dossiers scellés par Touch ID',
        body: 'Verrouillez un Workspace ou un dossier : ses notes, transcriptions et fichiers audio sont scellés en AES-256-GCM. Tant qu’il est verrouillé, il reste invisible pour la recherche, le graphe, MCP et le lecteur audio.',
        link: 'Le modèle de verrouillage',
      },
      'markdown': {
        title: 'Du Markdown brut et un serveur MCP local',
        body: 'Les notes arrivent dans votre coffre Obsidian en Markdown brut avec wikiliens, et un serveur MCP en lecture seule sur 127.0.0.1 permet à Claude et à d’autres agents de les interroger.',
        link: 'Markdown et MCP',
      },
    },
    seeAll: 'Voir toutes les fonctionnalités',
  },
  how: {
    eyebrow: 'Comment ça marche',
    title: 'Enregistrer → comprendre → demander. Local par conception.',
    lead: 'Un seul pipeline local transforme un appel en direct en mémoire consultable. La transcription reste sur votre Mac ; Ivy peut tourner en local ou, avec votre consentement explicite, passer par un traitement cloud anonymisé.',
    steps: [
      {
        label: '01 · Enregistrer',
        title: 'Entend tout l’appel',
        body: 'Votre micro <b>et</b> l’audio système de l’autre côté, captés et transcrits séparément, puis fusionnés en une transcription <b>Me / Others</b> propre par Whisper, sur l’appareil.',
      },
      {
        label: '02 · Comprendre',
        title: 'Ivy, sur votre Mac',
        body: 'Un modèle de raisonnement tourne en local sur un index sémantique de tout ce que vous avez enregistré — il rédige une note structurée et garde la mémoire consultable pour toujours.',
      },
      {
        label: '03 · Demander',
        title: 'Des réponses en direct, sourcées',
        body: 'Interrogez Ivy en pleine réunion et obtenez une réponse étayée par ses <b>sources</b> — ou posez vos questions plus tard, sur des mois d’appels. L’enregistrement ne s’arrête jamais.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Sécurité et confidentialité',
    title: 'La confidentialité n’est pas un réglage. C’est l’architecture.',
    leadHtml: 'IndexOne est conçu pour que la transcription, la recherche et Ivy sur l’appareil fonctionnent <b>sans aucun réseau</b> — dès que vous désactivez la seule chose qui se connecte : une vérification de nouvelle version au lancement. Si vous choisissez l’IA cloud, un consentement et un pare-feu d’anonymisation se placent devant cette sortie.',
    cards: {
      'offline': {
        title: 'Rien ne quitte l’appareil',
        body: 'Avec un modèle local téléchargé une fois, ou avec Ollama, votre audio et vos transcriptions ne touchent jamais le réseau. Le raisonnement se fait sur votre Mac.',
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
        title: 'Le seul appel que nous faisons par défaut',
        body: 'Au lancement, IndexOne demande à GitHub s’il existe une version plus récente. La requête indique la version que vous utilisez, car c’est ainsi qu’elle pose la question — et rien d’autre : pas de réunions, pas de notes, pas de compte. Vous pouvez la désactiver dans <b>Settings → Privacy</b>. C’est la seule chose sur cette page qui se produit sans que vous le demandiez, et c’est justement pour ça qu’elle y figure.',
      },
    },
    tableCaption: 'Où tourne chaque fournisseur d’IA, et si le texte des réunions quitte votre Mac',
    tableHeaders: ['Ivy / fournisseur', 'Où il tourne', 'Le texte des réunions quitte-t-il votre Mac ?'],
    providers: {
      'on-device': { name: 'Ivy sur l’appareil', note: 'Bielik / Qwen', where: 'Entièrement local' },
      'ollama': { name: 'Ollama', where: 'Entièrement local' },
      'claude-code': { name: 'Claude Code', note: 'résumeur par défaut', where: 'CLI locale → cloud' },
      'codex': { name: 'Codex', note: 'la CLI d’OpenAI, exécutée sans outils', where: 'CLI locale → cloud' },
      'anthropic': { name: 'Anthropic API', note: 'avec votre propre clé', where: 'HTTPS direct' },
      'gateway': { name: 'Passerelle IA', note: 'tout endpoint compatible OpenAI — LiteLLM, Kong, Portkey, vLLM…', where: 'HTTPS direct' },
    },
    leavesYes: 'Seulement après consentement, pare-feu d’anonymisation appliqué',
    leavesNo: 'Non',
    shotAlt: 'Les réglages de confidentialité d’IndexOne, qui indiquent en langage clair ce qui est retiré avant que le moindre texte ne sorte, quels fournisseurs sont dans le cloud, et que le traitement cloud reste désactivé jusqu’à votre accord',
    footnote: 'IndexOne vous dit, en langage clair, exactement ce qui quitte votre Mac — et chaque appel à une IA cloud est journalisé et vous est présenté. Vos réunions restent sur l’appareil, sauf si vous l’autorisez. Un seul sélecteur de modèle sert pour toutes les fonctions d’IA, et il accepte toujours un identifiant de modèle saisi à la main — un modèle sorti après cette version fonctionne donc aussi.',
  },
  features: {
    eyebrow: 'Ce que vous obtenez',
    title: 'Un outil de réunion qui se souvient vraiment.',
    lead: 'Un seul espace chiffré, trois façons de l’utiliser — l’app, un serveur MCP local et vos fichiers Markdown exportés. Une seule arborescence contient tout, les tableaux s’appuient dessus, et Ivy lit l’ensemble.',
    items: {
      'workspaces': {
        eyebrow: 'Workspaces',
        title: 'Une seule arborescence pour tout',
        body: 'Une arborescence unique — <b>Workspaces › dossiers › vos enregistrements et notes</b> — dans une barre latérale qui se replie en rail quand vous voulez de la place. Verrouillez un Workspace et tout ce qu’il contient est scellé avec lui.',
        points: [
          'Enregistrements, notes, tâches et tableaux se rangent au même endroit',
          'Un Workspace scellé affiche son nom et rien d’autre — ni compteurs, ni contenu',
          'Demandez à Ivy de ranger un enregistrement égaré à votre place',
          'Supprimé par erreur ? La corbeille le garde 30 jours — ou la durée de votre choix, jusqu’à un an',
        ],
        alt: 'La barre latérale des Workspaces : une arborescence de Workspaces et de dossiers contenant enregistrements, notes et tableaux, avec un Workspace verrouillé en bas',
      },
      'dashboards': {
        eyebrow: 'Tableaux de bord',
        title: 'Des tableaux que vous composez',
        body: 'Placez des notes, enregistrements, documents, personnes, registres d’engagements et rappels sur un tableau, puis lisez-le à travers les vues <b>Brief / Overview / Commitments / Sources / People</b>. Épinglez une <b>réponse vivante</b> — une question que l’app tient à jour, et qu’elle retire dès que ses sources ne sont plus lisibles. Vous pouvez aussi interroger un tableau directement, uniquement à partir de ce qu’il contient.',
        points: [
          'Sept types de tuiles — une note, un enregistrement, un document, une personne, un registre d’engagements, une liste de rappels ou une réponse vivante',
          'Cinq vues sur les mêmes tuiles — sans jamais rien dupliquer',
          'Un tableau affiche ses propres limites : ce qu’il peut lire, et ce qu’il en a déduit',
        ],
        alt: 'Un tableau dans sa vue Brief : une réponse vivante épinglée, ce qui demande votre attention et les preuves récentes qui l’appuient',
      },
      'imports': {
        eyebrow: 'Imports',
        title: 'Apportez vos notes existantes',
        body: 'Settings → Imports récupère un <b>export Notion</b>, un <b>coffre Obsidian</b> ou <b>Apple Notes</b>. Entièrement hors ligne — sans compte, sans clé, sans appel réseau. Chaque import commence par une simulation, pour voir ce qu’il écrirait avant qu’il n’écrive quoi que ce soit.',
        points: [
          'Trois sources : un export Notion, un coffre Obsidian, Apple Notes',
          'Simulation d’abord — rien n’est écrit tant que vous ne validez pas',
          'Les notes importées arrivent dans leur propre dossier nommé, et Ivy les lit comme tout le reste',
        ],
        alt: 'Settings → Imports : Notion, Obsidian et Apple Notes, avec la mention que tout se passe sur ce Mac et que rien n’est envoyé',
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
        body: 'Les notes d’IndexOne ne vous demandent pas de leur faire confiance. Chaque ligne fondée sur ce qui a réellement été dit porte une preuve — cliquez dessus pour aller directement à la seconde d’audio correspondante, avec l’intervenant et le niveau de confiance. Les lignes paraphrasées ou non étayées n’en ont pas : vous voyez d’un coup d’œil ce qui est vérifié.',
        points: [
          'Cliquez sur une affirmation, écoutez exactement d’où elle vient',
          'Intervenant et confiance de la reconnaissance vocale sur chaque preuve',
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
        ],
        alt: 'L’éditeur de notes avec un texte sélectionné et le menu de commandes Ivy ouvert, montrant Refine, Shorten, Change tone et d’autres actions',
      },
      'shared-ivy': {
        eyebrow: 'Shared Ivy',
        title: 'Travaillez en équipe, toujours chiffré de bout en bout.',
        body: 'Publiez une note ou un résumé de réunion dans le Shared Ivy de votre organisation : il reste synchronisé pour chaque membre pendant que vous le modifiez. Tout est scellé sur votre Mac avant de partir — le serveur ne stocke que du texte chiffré, des clés enveloppées et des clés publiques.',
        points: [
          'Scellé en AES-256-GCM sous une clé de contenu de l’organisation avant l’envoi',
          'Vérification avant publication — la même rigueur que pour verrouiller un dossier',
          'Permissions par document — l’auteur choisit <b>View only</b> ou <b>Can edit</b> pour chaque document partagé',
          'Membre de plusieurs organisations ? Chacune a son propre flux chiffré',
          '<b>Tasks</b> partagées — responsables, échéances, sous-tâches et les mêmes permissions ; les tâches vivent dans une organisation, elles nécessitent donc un compte connecté',
        ],
        alt: 'La vue Shared Ivy : les réunions et les notes que vos organisations ont partagées avec vous, chacune avec son auteur et son organisation',
      },
    },
  },
  pricing: {
    eyebrow: 'Tarifs',
    title: 'Gratuit pendant l’accès anticipé.',
    lead: 'L’enregistrement local, la transcription, les notes et les exports Markdown ne nécessitent ni compte ni paiement. Les tarifs et la disponibilité après l’accès anticipé seront annoncés séparément.',
    plans: {
      free: {
        name: 'Free',
        badge: 'Disponible',
        price: '$0',
        per: '/ accès anticipé',
        tagline: 'Enregistrement local, transcription, notes et exports.',
        points: [
          'Enregistrement et transcription illimités sur l’appareil',
          'Ivy en réunion, plus les questions à votre coffre',
          'Recherche sémantique et graphe de connaissances automatique',
          'Notes indépendantes avec un éditeur assisté par Ivy',
          'Partage chiffré de bout en bout avec View only / Can edit par document (compte requis)',
          'Workspaces, tableaux de bord composables et import hors ligne depuis Notion / Obsidian / Apple Notes',
          'Liens de partage chiffrés avec date d’expiration, mot de passe optionnel et nombre d’ouvertures limité',
          'Verrouillage Touch ID par Workspace et par dossier avec chiffrement AES-256',
          'Reverrouillage automatique lors d’un partage d’écran',
          'Serveur MCP local et export Markdown',
        ],
        cta: 'Télécharger pour macOS',
      },
      pro: {
        name: 'Pro',
        badge: 'Bientôt',
        price: 'Prévu',
        tagline: 'Tarifs et disponibilité à venir.',
        points: [
          'Tout ce qu’inclut Free',
          'Synchronisation chiffrée de bout en bout entre vos Mac et votre iPhone',
          'Sauvegarde cloud chiffrée à divulgation nulle',
          'Ivy gérée à faible latence, en option (anonymisée)',
          'Recettes et automatisations personnalisées',
        ],
        cta: 'Suivre sur GitHub',
      },
      team: {
        name: 'Team',
        badge: 'Bientôt',
        price: 'Prévu',
        tagline: 'Tarifs et disponibilité à venir.',
        points: [
          'Tout ce qu’inclut Pro',
          'SSO et provisionnement SCIM',
          'Politique de sécurité, rétention et journal d’audit',
          'Support prioritaire et SLA',
        ],
        cta: 'Contactez-nous',
      },
    },
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
        cells: ['Whisper sur l’appareil ; aucune transcription cloud', 'Pas de transcription intégrée', 'Cloud', 'Cloud', 'Pas de transcription', 'Cloud'],
      },
      'local-ai': {
        criterion: 'IA pouvant tourner entièrement sur votre appareil',
        cells: ['Ivy sur l’appareil ou un Ollama local', 'Pas d’IA intégrée ; plugins de la communauté', 'Cloud uniquement', 'Cloud uniquement', 'Pas d’IA intégrée', 'Cloud uniquement'],
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
        cells: ['Base chiffrée, dossiers verrouillés par Touch ID, partage chiffré de bout en bout', 'Chiffrement de bout en bout pour la Sync payante', 'Chiffré sur les serveurs de Notion ; pas de bout en bout', 'Phrase secrète pour du texte sélectionné uniquement', 'Notes individuelles, avec Pro', ''],
      },
      'platforms': {
        criterion: 'Plateformes',
        cells: ['macOS', 'macOS, Windows, Linux, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, iOS, iPadOS, web (bêta)', 'macOS, Windows, iOS'],
      },
      'price': {
        criterion: 'Prix',
        cells: ['Gratuit pendant l’accès anticipé', 'Gratuit ; Sync dès $4/mois, facturé annuellement', 'Gratuit ; l’IA et les notes de réunion nécessitent Business, $20/mois facturé annuellement', 'Gratuit jusqu’à 50 notes ; Starter $99/an', 'Gratuit ; Pro $29.99/an', 'Gratuit avec 25 crédits de notes ; Pro dès €20/mois, facturé annuellement'],
      },
    },
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Les questions qu’on nous pose en premier.',
    leadHtml: 'Des réponses courtes ici ; la <a href="/docs.html">documentation</a> donne tous les détails.',
    items: [
      {
        question: 'IndexOne est-il gratuit ?',
        answer: 'Oui, pendant l’accès anticipé. L’enregistrement local, la transcription, les notes et les exports ne nécessitent ni compte ni paiement. Les tarifs après l’accès anticipé seront annoncés séparément.',
      },
      {
        question: 'Mon audio part-il dans le cloud ?',
        answer: 'Non. La transcription se fait toujours sur votre Mac. Seul du texte anonymisé peut sortir, et uniquement vers une IA cloud que vous avez choisie et autorisée.',
      },
      {
        question: 'Qu’est-ce qu’Ivy ?',
        answer: 'Ivy est l’IA intégrée à IndexOne. Interrogez-la pendant une réunion sans arrêter l’enregistrement, ou plus tard, sur tout ce que vous avez enregistré et écrit. Chaque réponse cite les réunions et les notes dont elle provient. Ivy peut tourner entièrement sur votre Mac, via un Ollama local ou — après consentement explicite — via un fournisseur cloud, avec anonymisation.',
      },
      {
        question: 'Ai-je besoin d’une connexion internet ?',
        answer: 'Une fois, pour télécharger un modèle Whisper. Ensuite, l’enregistrement, la transcription, la recherche et Ivy sur l’appareil fonctionnent hors ligne. Les connexions à une IA cloud, les connecteurs et le partage nécessitent une connexion.',
      },
      {
        question: 'Ai-je besoin de Claude Code ?',
        answer: 'Seulement si vous le gardez pour rédiger les notes. Vous pouvez choisir à la place Codex, l’Anthropic API, une passerelle IA compatible OpenAI, un Ollama local ou un modèle sur l’appareil.',
      },
      {
        question: 'Quelles langues sont prises en charge ?',
        answer: 'Whisper transcrit de nombreuses langues. Pour l’IA sur l’appareil, vous pouvez choisir les modèles multilingues Qwen3 ou les modèles Bielik, nativement polonais.',
      },
      {
        question: 'Pourquoi macOS demande-t-il l’autorisation Enregistrement de l’écran et de l’audio système ?',
        answer: 'C’est par cette autorisation que macOS permet à une app d’entendre l’audio des autres apps — les autres participants à l’appel. IndexOne n’enregistre que l’audio.',
      },
      {
        question: 'Est-ce que ça marche avec un casque et sur les Mac Intel ?',
        answer: 'Oui dans les deux cas. L’audio de l’autre côté est capté depuis le système, pas depuis vos haut-parleurs, et l’app est une version universelle. Les grands modèles locaux tournent mieux sur Apple Silicon.',
      },
      {
        question: 'IndexOne est-il open source ?',
        answer: 'Non. L’app est gratuite à télécharger et à utiliser, mais son code source n’est pas public. Les versions 2.8.0 et antérieures ont été publiées à l’origine sous licence GNU AGPL-3.0, à l’époque où leur code source était public.',
      },
    ],
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

export default content
