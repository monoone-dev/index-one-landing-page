import type { SiteContent } from './types'

const content: SiteContent = {
  meta: {
    home: {
      title: 'IndexOne — notas y transcripción de reuniones en Mac con Ivy',
      description: 'Graba y transcribe reuniones en tu Mac y pregúntale a Ivy, la IA en el dispositivo, en directo o sobre todas tus llamadas. Para ti o para tu organización.',
    },
    features: {
      breadcrumb: 'Funciones',
      title: 'Funciones — transcripción de reuniones, Ivy y notas en Mac',
      description: 'Transcripción de doble canal en tu Mac, Ivy en las llamadas, preguntas sobre cada reunión, recibos, proyectos, plugins, servidores de IA locales y Markdown.',
    },
    privacy: {
      breadcrumb: 'Privacidad',
      title: 'Privacidad en IndexOne: IA local y lo que sale de tu Mac',
      description: 'Transcripción e IA en el dispositivo, biblioteca cifrada, bloqueo de carpetas con Touch ID y cortafuegos de anonimización. Mira qué envía cada IA y cuándo.',
    },
    pricing: {
      breadcrumb: 'Precios',
      title: 'Precios de IndexOne y comparativa con Obsidian, Notion y más',
      description: 'IndexOne es gratis en el Mac; los planes en la nube opcionales empiezan en 49 PLN/mes. Compáralo con Obsidian, Notion, Evernote, Bear y Amie en grabación, transcripción, IA local y Markdown.',
    },
    changelog: {
      breadcrumb: 'Novedades',
      title: 'Novedades de IndexOne — notas de versión de la app para Mac',
      description: 'Las notas de cada versión de IndexOne para Mac, de la más reciente a la más antigua: novedades de Ivy, organizaciones y privacidad, correcciones y descargas.',
    },
    ogImageAlt: 'IndexOne — notas y transcripción de reuniones en Mac con Ivy',
  },
  common: {
    skipToContent: 'Saltar al contenido',
    homeAria: 'Inicio de IndexOne',
    primaryNav: 'Principal',
    footerNav: 'Pie de página',
    language: 'Idioma',
  },
  nav: {
    features: 'Funciones',
    privacy: 'Privacidad',
    pricing: 'Precios',
    compare: 'Comparativa',
    faq: 'Preguntas',
    docs: 'Documentación',
    github: 'GitHub',
    changelog: 'Novedades',
    download: 'Descargar',
  },
  theme: {
    label: 'Tema',
    skinsGroup: 'Tema',
    modesGroup: 'Modo',
    skins: {
      studio: { label: 'Studio', description: 'Cielo sobre bruma, degradado suave' },
      paper: { label: 'Paper', description: 'Pergamino cálido, pensado para leer' },
      minimalist: { label: 'Minimalist', description: 'shadcn/ui puro, neutro' },
    },
    modes: { light: 'Claro', dark: 'Oscuro', system: 'Sistema' },
  },
  hero: {
    badgeLocal: 'Local-first · macOS',
    badgeIvy: 'Ivy en el dispositivo',
    badgeStar: 'Danos una estrella en GitHub',
    githubAria: 'IndexOne en GitHub',
    titleStrong: 'Notas de reuniones con Ivy,',
    titleSoft: 'y tú decides dónde se ejecuta.',
    subHtml: 'IndexOne graba tus llamadas y las transcribe <b>en tu Mac</b>. Pregúntale a Ivy en directo, en plena reunión, y sobre todo lo que has grabado. Usa IA en tu Mac o en tu propio servidor de IA local, o activa de forma explícita la <b>IA en la nube con datos anonimizados</b>. En el espacio On this Mac, tu archivo de reuniones se queda en tu Mac.',
    download: 'Descargar para macOS',
    privacyCta: 'Descubre cómo funciona la privacidad',
    note: 'Firmada y notarizada · macOS 13.4+ · Apple Silicon (M1 o posterior) · tus notas siguen siendo Markdown y son tuyas',
    videoLabel: 'Un recorrido de 90 segundos por IndexOne: una reunión grabándose mientras se escribe una nota al lado, la nota redactada después y los puntos que extrae, la línea de tiempo de los participantes, una pregunta a Ivy sobre toda la bóveda respondida con fuentes, el grafo de conocimiento, la barra de Workspaces y la búsqueda en el dispositivo, un proyecto, Personas y un Workspace que se niega a abrirse porque está sellado',
    play: 'Ver el recorrido de 90 segundos',
  },
  home: {
    announce: { badge: 'Nuevo', text: 'Ya está aquí IndexOne {version}: mira qué ha cambiado' },
    pillars: {
      eyebrow: 'Por qué IndexOne',
      title: 'Tus reuniones, recordadas. Tu Mac, al mando.',
      lead: 'Tres cosas que IndexOne hace con cada llamada, y dónde se ejecuta cada una.',
      items: {
        capture: {
          title: 'Escucha a ambos lados de la llamada',
          body: 'Tu micrófono y el audio de los demás participantes se graban como dos pistas y Whisper los transcribe en tu Mac.',
          link: 'Captura y transcripción',
        },
        ivy: {
          title: 'Pregunta a Ivy, ahora o después',
          body: 'Pregunta en plena reunión sin detener la grabación, o sobre meses de llamadas. Cada respuesta cita las reuniones de las que sale.',
          link: 'Cómo funciona Ivy',
        },
        privacy: {
          title: 'Sellado con Touch ID',
          body: 'Una biblioteca cifrada y bloqueos AES-256 para cualquier espacio de trabajo o carpeta. Una carpeta bloqueada es invisible para la búsqueda, el grafo y MCP.',
          link: 'Cómo funciona la privacidad',
        },
      },
      mock: {
        question: '¿Qué decidimos sobre la fecha de lanzamiento?',
        answer: 'El lanzamiento pasa al 3 de marzo, cuando QA dé el visto bueno.',
        sources: '2 fuentes',
        folders: ['Dirección', 'Contratación', '1:1'],
      },
    },
    stats: {
      aria: 'IndexOne en cifras',
      labels: [
        'pistas de audio por llamada: tú y todos los demás',
        'cuentas necesarias para grabar y transcribir',
        'bloqueos con Touch ID para cualquier carpeta',
        'acciones de Ivy en el editor de notas',
        'documentos en un clic desde cualquier reunión',
        'fuentes de importación, totalmente sin conexión',
      ],
    },
    showcase: {
      eyebrow: 'Míralo en la app',
      title: 'De la llamada a la respuesta, en una sola app.',
      lead: 'Graba la reunión, pregunta sobre ella y consérvala en Markdown. Elige un paso para verlo.',
      tabsLabel: 'Recorrido del producto',
      tabs: { record: 'Grabar', ask: 'Preguntar', export: 'Conservar' },
    },
    security: { more: 'Lee el modelo de privacidad' },
    news: {
      eyebrow: 'Novedades',
      title: 'Lo último publicado.',
      lead: 'IndexOne se actualiza a menudo. Estas son las versiones más recientes; las notas de versión están en inglés.',
      read: 'Leer las notas',
      all: 'Todas las versiones',
    },
  },
  trust: {
    aria: 'De un vistazo',
    items: ['Transcripción en el dispositivo', 'Bloqueo con Touch ID en reposo', 'Sin necesidad de nube', 'Markdown plano y tuyo'],
  },
  unique: {
    eyebrow: 'Solo en IndexOne',
    title: 'Lo que ninguna otra app de notas hace por tus reuniones.',
    lead: 'Muchas apps guardan notas o transcriben llamadas. IndexOne graba ambos lados de la llamada en tu Mac, te deja preguntarle a Ivy durante la reunión y demuestra cada línea que escribe.',
    items: {
      'live': {
        title: 'Pregúntale a Ivy en plena reunión, sin que nada salga de tu Mac',
        body: 'Escribe o di una pregunta en plena llamada y recibe una respuesta basada en todas las reuniones que has grabado, con fuentes que puedes abrir; la grabación nunca se detiene. Elige Ivy on this Mac y ningún texto de tus reuniones saldrá de tu Mac; Claude Code y Codex siguen desactivados hasta que des tu consentimiento una vez.',
        link: 'Cómo funciona Ivy',
      },
      'capture': {
        title: 'Ambos lados de la llamada, transcritos en tu Mac',
        body: 'Tu micrófono y el audio del sistema de los demás participantes se capturan como dos canales y Whisper, en el propio dispositivo, los fusiona en una transcripción Me / Others. En el espacio On this Mac no hay transcripción en la nube.',
        link: 'Captura y transcripción',
      },
      'receipts': {
        title: 'Cada afirmación tiene su recibo',
        body: 'Cada línea fundamentada de una nota enlaza con el segundo exacto del audio del que procede, con el hablante. Las líneas sin pruebas no llevan recibo, así ves qué está verificado.',
        link: 'Recibos',
      },
      'security': {
        title: 'Cifrado en tu Mac',
        body: 'Toda tu biblioteca está cifrada con SQLCipher en el Mac. Personal y cada organización a la que perteneces también guardan aquí una copia cifrada, así que se abren sin conexión de red.',
        link: 'Seguridad y privacidad',
      },
      'locks': {
        title: 'Carpetas selladas con Touch ID',
        body: 'Bloquea un Workspace o una carpeta y sus notas, transcripciones y audio quedan sellados con AES-256-GCM. Mientras está bloqueado, es invisible para la búsqueda, el grafo, MCP y el reproductor de audio.',
        link: 'El modelo de bloqueo',
      },
      'markdown': {
        title: 'Markdown plano y un servidor MCP local',
        body: 'Las notas llegan a tu bóveda de Obsidian como Markdown plano con wikilinks, y un servidor MCP de solo lectura en 127.0.0.1 permite que Claude y otros agentes las consulten. Tú eliges qué espacios puede leer; las organizaciones están desactivadas hasta que las actives.',
        link: 'Markdown y MCP',
      },
    },
    seeAll: 'Ver todas las funciones',
  },
  privacy: {
    lifecycle: {
      "title": "Ciclo de vida de los datos · planes en la nube",
      "items": [
        {
          "title": "¿Cuánto tiempo se guardan los datos?",
          "body": "El audio en la nube se conserva 30 días por defecto, con hasta 90 días previstos para Personal y Team dentro del límite de almacenamiento. Las notas, transcripciones y archivos normales permanecen hasta que su propietario los elimine, dentro del límite de almacenamiento."
        },
        {
          "title": "¿Qué ocurre al bajar de plan?",
          "body": "La cancelación se aplica al final del período pagado. La lectura, exportación y eliminación siguen disponibles con permiso de acceso."
        },
        {
          "title": "¿Quién conserva los datos si dejo la organización?",
          "body": "El contenido de la organización permanece en ella. Al salir o perder el acceso ya no puedes leerlo ni exportarlo."
        }
      ]
    },
    eyebrow: 'Seguridad y privacidad',
    title: 'La privacidad no es un ajuste. Es la arquitectura.',
    leadHtml: 'En el espacio On this Mac, la transcripción, la búsqueda e Ivy on this Mac pueden funcionar <b>sin ninguna conexión de red</b>, en cuanto desactivas las dos cosas que salen a internet por defecto: la comprobación de nuevas versiones al iniciar y un mensaje diario de uso. Si eliges Claude Code o Codex, el consentimiento y un cortafuegos de anonimización se interponen antes de que salga nada.',
    cards: {
      'offline': {
        title: 'Nada sale del dispositivo',
        body: 'Con Ivy on this Mac y un modelo que descargas una sola vez, tu audio y tus transcripciones nunca tocan la red. El razonamiento ocurre en tu Mac.',
      },
      'at-rest': {
        title: 'Dos capas de cifrado en reposo',
        body: 'Toda la base de datos está cifrada con SQLCipher. Además, un bloqueo <b>AES-256-GCM</b> por carpeta añade claves de contenido protegidas por una clave maestra que solo libera <b>Touch ID</b>.',
      },
      'gated': {
        title: 'Cada lectura está controlada',
        body: 'Una carpeta sellada y bloqueada no filtra nada: ni en la app, ni en la búsqueda, ni en el grafo, ni en MCP, ni siquiera en la ruta de audio. Las reuniones bloqueadas aparecen simplemente como <b>Locked</b> (bloqueadas).',
      },
      'seals': {
        title: 'Los sellos verifican antes de destruir',
        body: 'IndexOne comprueba que el texto cifrado se descifra correctamente <b>antes</b> de borrar el texto plano: el contenido nunca se pierde y el bloqueo es totalmente reversible.',
      },
      'screen-share': {
        title: 'Atento a cuando compartes pantalla',
        body: 'Un vigilante puede volver a bloquear las carpetas selladas y borrar la clave en caché en cuanto detecta que compartes pantalla, para que una pantalla compartida no deje ver notas privadas.',
      },
      'firewall': {
        title: 'Cortafuegos de anonimización',
        body: 'Si alguna vez activas un resumidor en la nube, primero se eliminan los correos electrónicos, los números con aspecto de tarjeta y los teléfonos, y la salida a la nube queda <b>cerrada por defecto ante cualquier fallo</b> tras un consentimiento único. Descarga el modelo opcional de enmascarado de nombres y también se sustituirán los nombres de las personas.',
      },
      'update-check': {
        title: 'Las dos conexiones que hacemos por defecto',
        body: 'Al iniciarse, IndexOne pregunta a GitHub si hay una versión más reciente; la solicitud indica qué versión usas, y nada más. Una vez al día envía además un pequeño mensaje de uso: un identificador de instalación aleatorio, las versiones de la app y de macOS, el tipo de chip, el idioma y si has iniciado sesión; ni reuniones, ni notas, ni grabaciones, ni nombres. Solo es anónimo mientras no has iniciado sesión; si has iniciado sesión, se envía con tu cuenta. Puedes desactivar cualquiera de los dos en <b>Settings → Privacy</b>. Son lo único de esta página que ocurre sin que lo pidas, y precisamente por eso están en esta página.',
      },
    },
    tableCaption: 'Dónde se ejecuta cada proveedor de IA y si el texto de las reuniones sale de tu Mac',
    tableHeaders: ['Ivy / proveedor', 'Dónde se ejecuta', '¿Sale el texto de las reuniones de tu Mac?'],
    providers: {
      'on-device': { name: 'Ivy on this Mac', note: 'Bielik / Qwen', where: 'Totalmente local' },
      'ivy-web': { name: 'Ivy on the web', note: 'Personal y organizaciones', where: 'IndexOne en la web', leaves: 'Sí: el propio espacio está en la web' },
      'claude-code': { name: 'Claude Code', where: 'CLI local → nube' },
      'codex': { name: 'Codex', note: 'la CLI de OpenAI, sin herramientas', where: 'CLI local → nube' },
      'local-server': { name: 'Local AI server', note: 'Ollama, LM Studio, oMLX y otros', where: 'Tu Mac o tu red', leaves: 'No con un servidor en este Mac. A un servidor en otro equipo de tu red, solo tras confirmar su dirección y con los nombres enmascarados' },
    },
    leavesYes: 'Solo con tu consentimiento y tras el cortafuegos de anonimización',
    leavesNo: 'No',
    shotAlt: 'Los ajustes de privacidad de IndexOne, que explican en lenguaje claro qué se elimina antes de que salga cualquier texto, qué proveedores están en la nube y si se ha permitido el procesamiento en la nube',
    footnote: 'IndexOne te dice, en lenguaje claro, exactamente qué sale de tu Mac, y cada llamada a una IA en la nube queda registrada y se te muestra. Cada espacio tiene una única elección de IA: Ivy on this Mac, Ivy on the web, Claude Code, Codex o tu propio servidor de IA local. En el espacio On this Mac, las reuniones se quedan en tu Mac salvo que elijas Claude Code, Codex o un servidor de IA local en otro equipo de tu red.',
  },
  features: {
    eyebrow: 'Lo que obtienes',
    title: 'Una herramienta de reuniones que de verdad recuerda.',
    lead: 'Un único almacén cifrado y tres formas de usarlo: la app, un servidor MCP local y tus archivos Markdown exportados. Un solo árbol lo contiene todo, los proyectos se apoyan en él e Ivy lo lee entero.',
    items: {
      'workspaces': {
        eyebrow: 'Workspaces',
        title: 'Un solo árbol para todo',
        body: 'Un único árbol — <b>Workspaces › carpetas › tus grabaciones y notas</b> — en una barra lateral que se reduce a una franja cuando necesitas espacio. Bloquea un Workspace y todo lo que contiene queda sellado con él.',
        points: [
          'Grabaciones, notas, tareas y proyectos se archivan en el mismo lugar',
          'Un Workspace sellado muestra su nombre y nada más: ni recuentos ni contenido',
          'Pídele a Ivy que archive por ti una grabación suelta',
          '¿Lo borraste sin querer? La papelera lo guarda 30 días, o el tiempo que elijas, hasta un año',
        ],
        alt: 'La barra lateral de Workspaces: un único árbol de Workspaces y carpetas con grabaciones, notas y proyectos, y un Workspace bloqueado al final',
      },
      'dashboards': {
        eyebrow: 'Proyectos',
        title: 'Proyectos a tu medida',
        body: 'Reúne en un proyecto notas, grabaciones, documentos, personas, registros de compromisos y recordatorios, y léelo a través de las vistas <b>Brief / Overview / Commitments / Sources / People</b>. Fija una <b>respuesta viva</b>: una pregunta guardada cuya última respuesta se conserva con su fecha, se vuelve a responder cuando lo pides y se oculta en cuanto sus fuentes dejan de ser legibles. Puedes preguntarle directamente a un proyecto, con respuestas basadas solo en lo que contiene.',
        points: [
          'Siete tipos de mosaico: una nota, una grabación, un documento, una persona, un registro de compromisos, una lista de recordatorios o una respuesta viva',
          'Cinco vistas sobre los mismos mosaicos, sin duplicar nada',
          'Un proyecto declara sus propios límites: qué puede leer y qué ha deducido',
        ],
        alt: 'Un proyecto en la vista Brief: la respuesta guardada a una pregunta fijada, lo que requiere atención y las pruebas recientes que lo respaldan',
      },
      'imports': {
        eyebrow: 'Importación',
        title: 'Trae tus notas de siempre',
        body: 'Settings → Imports importa una <b>exportación de Notion</b>, una <b>bóveda de Obsidian</b>, <b>Apple Notes</b>, una carpeta de <b>archivos Markdown</b> o una <b>copia de seguridad de IndexOne</b>. Totalmente sin conexión: sin cuenta, sin clave y sin llamadas de red. Cada importación empieza con una simulación, para que veas lo que escribiría antes de que escriba nada.',
        points: [
          'Cinco orígenes: una exportación de Notion, una bóveda de Obsidian, Apple Notes, una carpeta de archivos Markdown y una copia de seguridad de IndexOne',
          'Primero una simulación: no se escribe nada hasta que tú lo digas',
          'Las notas importadas van a su propia carpeta con nombre, e Ivy las lee como todo lo demás',
        ],
        alt: 'Settings → Imports: Notion, Obsidian, Apple Notes, archivos Markdown y copia de seguridad de IndexOne, con el aviso de que todo ocurre en este Mac y no se sube nada',
      },
      'ivy': {
        eyebrow: 'Ivy',
        title: 'Habla con Ivy durante la reunión.',
        body: 'Esto es lo que la mayoría de las apps de notas no tiene. Activa Ivy con una frase de activación o con un solo toque: responde a partir de la memoria de tus reuniones, en directo, con citas que puedes abrir, y la grabación nunca se detiene.',
        points: [
          'Modelo de razonamiento en el dispositivo (Bielik-11B, Qwen) mediante Metal',
          'Respuestas fundamentadas, no inventadas: extraídas de tus propias transcripciones',
          'Búsqueda web opcional con consentimiento, desactivada por defecto',
        ],
        alt: 'Una grabación en curso con una pregunta hecha en plena reunión, respondida en directo por Ivy con las fuentes que utilizó',
      },
      'ask': {
        eyebrow: 'Pregunta a tu bóveda',
        title: 'Pregunta sobre meses de llamadas.',
        body: 'De nuevo Ivy, esta vez apuntando a todo lo que has grabado y escrito. Cada respuesta llega con las reuniones y notas de las que procede, para que abras la fuente en lugar de fiarte de su palabra.',
        points: [
          'Limita una pregunta a un Workspace o una carpeta: todo su subárbol y nada fuera de él',
          'Las conversaciones se recuerdan: los hilos de la bóveda, de cada nota y de cada reunión se conservan, con un historial en cada sección',
          'Una conversación desaparece en el instante en que cualquier carpeta en la que se basó deja de ser legible',
          'Tu propio modelo: las notas y respuestas pueden venir de Ollama, LM Studio, oMLX, llama.cpp o cualquier servidor compatible con OpenAI',
        ],
        alt: 'Una pregunta a Ivy sobre meses de reuniones con una única respuesta y, debajo, las reuniones de las que procede',
      },
      'transcription': {
        eyebrow: 'Captura y transcripción',
        title: 'Escucha ambos lados de la llamada.',
        body: 'La grabación de doble canal captura tu micrófono y el audio del sistema del otro lado, transcribe cada uno por separado en el dispositivo y los fusiona según la hora real en una transcripción limpia Me / Others, con subtítulos en directo mientras hablas.',
        points: [
          'Whisper en el dispositivo, de tiny a large-v3, incluida la versión turbo más rápida y variantes cuantizadas',
          'Atribución en dos canales: tú y todos los demás, con detección de actividad de voz',
          'Una barra de grabación flotante para grabar desde cualquier sitio (⌘⇧R)',
        ],
        alt: 'La transcripción fusionada Me / Others, con marcas de tiempo, junto a la línea de tiempo de hablantes y temas',
      },
      'memory': {
        eyebrow: 'Notas y memoria',
        title: 'Notas estructuradas y un grafo que se construye solo.',
        body: 'Cada llamada se convierte en una nota limpia: resumen, decisiones, tareas pendientes y citas. Grabaciones y notas conviven en el mismo Workspace. Las personas y los proyectos se extraen automáticamente a un grafo de conocimiento, y los Workspaces sellados permanecen ocultos en él.',
        points: [
          'Pregunta sobre todas tus reuniones con búsqueda semántica híbrida',
          'Fichas de entidades, reuniones relacionadas y resúmenes semanales',
          'Recordatorios privados que nunca salen del Mac, cada uno enlazado a la grabación o nota de la que surgió: Ivy propone y tú aceptas',
          'Las tareas pendientes también pueden enviarse a Apple Reminders',
          'Añade PDF, documentos de Office, páginas web e imágenes: se indexan para Ivy en el dispositivo',
        ],
        alt: 'El grafo de conocimiento: reuniones, notas, documentos y personas en un solo mapa, con enlaces tipados entre ellos',
      },
      'receipts': {
        eyebrow: 'Recibos',
        title: 'Cada afirmación se remonta a la grabación.',
        body: 'Las notas de IndexOne no te piden que confíes en ellas. Cada línea basada en lo que realmente se dijo lleva un recibo: haz clic y salta directamente a ese segundo del audio, con el hablante. Las líneas parafraseadas o sin respaldo no llevan ninguno, así ves de un vistazo qué está verificado.',
        points: [
          'Haz clic en una afirmación y escucha exactamente de dónde salió',
          'Hablante y segundo exacto en cada recibo',
          'Siete documentos en un clic a partir de cualquier reunión: correo de seguimiento, registro de decisiones, ticket de trabajo, resumen de 1:1, standup, resumen de ventas y notas de entrevista',
          'Las carpetas selladas nunca revelan tiempos ni hablantes',
        ],
        alt: 'Los recibos de una nota generada: una fila por cada afirmación fundamentada, cada una con el hablante y el segundo del audio del que procede',
      },
      'markdown': {
        eyebrow: 'Tuyo para siempre',
        title: 'Markdown plano. Sin ataduras.',
        body: 'Cada nota se exporta también como Markdown atómico: front-matter YAML, <code>[[wikilinks]]</code>, enlaces profundos a bloques y la opción de un tablero canvas. Son simples archivos de texto que te pertenecen y se abren en cualquier editor.',
        points: [
          'Una base de datos SQLite cifrada es la única fuente de verdad',
          'Un servidor MCP local de solo lectura para Claude Desktop y Claude Code',
          'Exportaciones en Markdown plano que puedes abrir en cualquier editor',
        ],
        alt: 'Una nota estructurada — resumen, decisiones, tareas pendientes y citas — junto a las grabaciones y notas que enlaza',
      },
      'notes': {
        eyebrow: 'Notas',
        title: 'No solo notas de reuniones. Todas tus notas.',
        body: 'Un editor Markdown completo, archivado en los mismos Workspaces que tus grabaciones, para todo lo que escribas y no solo para lo que transcribe IndexOne. Selecciona cualquier fragmento y aparecerá el menú de Ivy: mejorar, acortar, cambiar el tono, traducir, verificar datos o simplemente escribir lo que quieres que haga.',
        points: [
          'Diecinueve acciones de Ivy, a una pulsación de tecla',
          'Basadas en tus propias reuniones y notas, no en suposiciones del modelo',
          'Pega capturas de pantalla en tus notas: se quedan en local y siguen el bloqueo del Workspace',
          'Las Ivy skills de la pantalla Plugins guían las notas y respuestas de Ivy en la nube; elígelas en la ventana de Ivy, en una nota o en la barra de grabación',
        ],
        alt: 'El editor de notas con un texto seleccionado y el menú de comandos de Ivy abierto, con Refine, Shorten, Change tone y más acciones',
      },
    },
  },
  offer: {
    "web": "Abrir aplicación web",
    "status": "Los planes en la nube ya están a la venta. Inicia sesión en la app web para comprar un plan o gestionar tu suscripción. Las funciones locales de Mac siguen disponibles.",
    "monthly": "Mensual, en PLN",
    "tax": "Personal incluye impuestos. Team sin impuestos: mínimo 2 plazas = 150 PLN netos/mes. Con IVA del 23%: 184,50 PLN en total (92,25 por plaza). El impuesto puede variar; la aplicación debe mostrar el total antes de comprar.",
    "trialTitle": "Gratis cada mes",
    "trial": "Cada cuenta personal gratuita recibe cada mes natural (UTC) 200.000 unidades de Ivy y transcripción básica en la nube, sin tarjeta. Las funciones locales de Mac no tienen límite de plan.",
    "meterTitle": "Transcripción ilimitada",
    "meter": "Los planes de pago no tienen límite de transcripción. Si transcribes mucho, algunas grabaciones pueden tardar unas horas en estar listas; se aplica un uso razonable. La transcripción local en tu Mac es siempre inmediata.",
    "privacyTitle": "Local y nube",
    "privacy": "El procesamiento local de Mac permanece en el Mac. La nube estándar almacena y procesa contenido en servidores legibles por el operador, sin cifrado de extremo a extremo. Enmascarar patrones no es anonimización completa. Un plan no concede acceso a espacios privados.",
    "after": "Free incluye notas básicas, edición, búsqueda normal, sincronización, lectura y exportación dentro de 1 GB, además de la cuota mensual en la nube. Los planes de pago añaden más IA, transcripción y almacenamiento en la nube.",
    "team": "Personal y cada organización tienen suscripciones y saldos separados. Team: 2,25 millones de unidades Ivy interactivas y 250.000 de automatización por plaza, estas últimas en un fondo común. Almacenamiento compartido. La plaza no cambia permisos. Hasta 2 organizaciones gratuitas de 5 miembros comparten el almacenamiento de la cuenta fundadora.",
    "lifecycle": "Audio en nube: 30 días por defecto; Free 7/14/30, planes de pago también 90. Papelera: 30 días. Cancelar no borra contenido; derechos de pago hasta fin del período. Al bajar y exceder cuota: lectura/exportación y 90 días de protección. Exporta audio antes de vencer.",
    "docs": "Planes y facturación · documentación en inglés",
    "comparison": "Comparar planes",
    "local": "Herramientas locales de Mac",
    "basics": "Notas básicas y sincronización en nube",
    "ivy": "Unidades Ivy en nube / mes",
    "asr": "Transcripción en la nube",
    "asrUnlimited": "Ilimitada",
    "asrBasic": "Incluida",
    "storage": "Almacenamiento en nube",
    "included": "Incluido",
    "once": "Una prueba",
    "seat": "por plaza",
    "unit": "Las unidades Ivy son un presupuesto de procesamiento, no tokens del modelo ni un número garantizado de respuestas. GB = mil millones de bytes."
},
  pricing: {
    "eyebrow": "Mensual, en PLN",
    "title": "Elige dónde trabajar.",
    "lead": "Free en tu Mac. Nube opcional con límites claros.",
    "plans": {
        "free": {
            "name": "Free",
            "badge": "Disponible en Mac",
            "price": "0 PLN",
            "per": "Mensual, en PLN",
            "tagline": "Trabajo local sin límite de plan; sujeto al hardware.",
            "points": [
                "Herramientas locales de Mac",
                "Notas básicas y sincronización en nube",
                "1 GB",
                "200k Ivy"
            ],
            "cta": ""
        },
        "personal": {
            "name": "Personal",
            "badge": "Disponible",
            "price": "49 PLN",
            "per": "impuestos incluidos / mes",
            "tagline": "Para tu espacio personal en nube.",
            "points": [
                "Herramientas locales de Mac",
                "Notas básicas y sincronización en nube",
                "20 GB",
                "1.2M Ivy · transcripción ilimitada",
                "Grabaciones de pantalla en la nube"
            ],
            "cta": "Comprar en la app web"
        },
        "team": {
            "name": "Team",
            "badge": "Disponible",
            "price": "75 PLN",
            "per": "netos / plaza / mes",
            "tagline": "Para organizaciones, desde dos plazas.",
            "points": [
                "Herramientas locales de Mac",
                "Notas básicas y sincronización en nube",
                "50 GB · por plaza",
                "2.5M Ivy · transcripción ilimitada",
                "Bot de Google Meet",
                "Grabaciones de pantalla en la nube"
            ],
            "cta": "Comprar en la app web"
        }
    }
},
  compare: {
    eyebrow: 'Competencia',
    title: 'Cómo se compara IndexOne.',
    lead: 'Obsidian, Notion, Evernote, Bear y Amie hacen bien lo suyo. IndexOne está pensado para lo que ocurre en una reunión: grabarla, transcribirla en tu Mac y hacer preguntas sobre ella. Y además puede escribir en tu bóveda de Obsidian.',
    capability: 'Función',
    caption: 'IndexOne comparado con otras apps de notas',
    labels: { yes: 'Sí', partial: 'En parte', no: 'No', unknown: 'Desconocido' },
    notStated: 'No indicado',
    footnote: 'Basado en las páginas públicas de precios y funciones de cada proveedor, revisadas en octubre de 2026. Los planes y las funciones cambian: consulta el sitio del proveedor antes de decidir. Los nombres de los productos son marcas comerciales de sus propietarios; IndexOne no está afiliado a ellos.',
    rows: {
      'capture': {
        criterion: 'Graba ambos lados de una llamada',
        cells: ['Micrófono y audio del sistema, en dos canales', 'Solo micrófono (grabadora de audio básica)', 'App de escritorio; solo micrófono en el navegador', 'Grabadora de reuniones de escritorio', 'Sin grabación', 'Escritorio, sin bot'],
      },
      'local-transcription': {
        criterion: 'Transcripción en tu dispositivo',
        cells: ['Whisper en el dispositivo en el espacio On this Mac', 'Sin transcripción integrada', 'En la nube', 'En la nube', 'Sin transcripción', 'En la nube'],
      },
      'local-ai': {
        criterion: 'IA que puede ejecutarse por completo en tu dispositivo',
        cells: ['Ivy on this Mac o tu propio servidor de IA local', 'Sin IA integrada; plugins de la comunidad', 'Solo en la nube', 'Solo en la nube', 'Sin IA integrada', 'Solo en la nube'],
      },
      'ask-all': {
        criterion: 'Preguntar sobre todas las reuniones y notas anteriores',
        cells: ['Las respuestas citan sus fuentes', 'Solo con plugins de la comunidad', 'Plan Business; cita fuentes', 'AI Assistant sobre las notas; IA de reuniones por grabación', '', 'Chat sobre grabaciones anteriores en Pro; citas no indicadas'],
      },
      'local-data': {
        criterion: 'Los datos se quedan en tu dispositivo por defecto',
        cells: ['', 'Archivos locales', 'La nube de Notion', 'La nube de Evernote', 'Base de datos local; sincronización con iCloud en Pro', 'La nube de Amie'],
      },
      'markdown': {
        criterion: 'Notas como archivos Markdown planos y tuyos',
        cells: ['Escritas en tu bóveda; la base de datos cifrada es la fuente', '', 'Solo exportación a Markdown', 'Exportación a ENEX, HTML o PDF', 'Base de datos; exportación a Markdown', ''],
      },
      'encryption': {
        criterion: 'Cifrado bajo tu control',
        cells: ['Base de datos cifrada, bloqueo de carpetas con Touch ID y una copia local cifrada de cada espacio web', 'Cifrado de extremo a extremo con Sync de pago', 'Cifrado en los servidores de Notion; no de extremo a extremo', 'Frase de contraseña solo para el texto seleccionado', 'Notas individuales, con Pro', ''],
      },
      'platforms': {
        criterion: 'Plataformas',
        cells: ['macOS', 'macOS, Windows, Linux, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, iOS, iPadOS, web (beta)', 'macOS, Windows, iOS'],
      },
      'price': {
        criterion: 'Precio',
        cells: ['Gratis en el Mac; nube Personal 49 PLN/mes, Team 75 PLN netos por puesto', 'Gratis; Sync desde $4/mes con facturación anual', 'Gratis; la IA y las notas de reuniones requieren Business, $20/mes con facturación anual', 'Gratis hasta 50 notas; Starter $99/año', 'Gratis; Pro $29.99/año', 'Gratis con 25 créditos de notas; Pro desde €20/mes con facturación anual'],
      },
    },
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Lo primero que suele preguntarse.',
    leadHtml: 'Aquí van respuestas breves; la <a href="/docs/">documentación</a> tiene los detalles.',
    items: [
      {
        question: '¿IndexOne es gratis?',
        answer: 'Sí, en el Mac. La grabación local, la transcripción, las notas y las exportaciones no requieren cuenta ni pago. Los planes en la nube opcionales (Personal 49 PLN/mes, Team 75 PLN netos por puesto) añaden transcripción en la nube, Ivy en la nube y más almacenamiento.',
      },
      {
        question: '¿Mi audio va a la nube?',
        answer: 'No en el espacio On this Mac: allí la transcripción se ejecuta en tu Mac con Whisper. Solo puede salir texto: anonimizado, hacia Claude Code o Codex una vez que des tu consentimiento, o con los nombres enmascarados, hacia un servidor de IA local de tu red una vez que confirmes su dirección. Los espacios Personal y de organización están en IndexOne en la web, así que sus grabaciones se guardan allí.',
      },
      {
        question: '¿Qué es Ivy?',
        answer: 'Ivy es la IA de IndexOne. Pregúntale durante una reunión sin detener la grabación, o después, sobre todo lo que has grabado y escrito. Cada respuesta cita las reuniones y notas de las que procede. Cada espacio elige una IA: Ivy on this Mac, Ivy on the web para Personal y organizaciones, tu propio servidor de IA local, o Claude Code o Codex tras tu consentimiento explícito.',
      },
      {
        question: '¿Necesito conexión a internet?',
        answer: 'Una vez, para descargar un modelo de Whisper. A partir de ahí, la grabación, la transcripción, la búsqueda e Ivy on this Mac funcionan sin conexión. Los espacios Personal y de organización se abren sin conexión desde su copia cifrada y envían tus cambios cuando vuelves a estar en línea. Ivy on the web, Claude Code, Codex y los conectores necesitan conexión.',
      },
      {
        question: '¿Necesito Claude Code?',
        answer: 'No. Cada espacio tiene una única elección de IA: Ivy on this Mac, Ivy on the web (Personal y organizaciones), Claude Code, Codex o tu propio servidor de IA local, como Ollama, LM Studio, oMLX o llama.cpp.',
      },
      {
        question: '¿Qué idiomas admite?',
        answer: 'Whisper transcribe muchos idiomas. Para la IA en el dispositivo puedes elegir modelos multilingües Qwen3 o modelos Bielik, nativos en polaco. El plugin Languages escribe cada nota en el idioma que elijas, puede añadir un segundo idioma, traduce reuniones más tarde y mantiene un glosario de nombres y términos.',
      },
      {
        question: '¿Por qué macOS pide permiso de grabación de pantalla y audio del sistema?',
        answer: 'Ese permiso es la forma en que macOS deja que una app escuche el audio de otras apps, es decir, a las demás personas de la llamada. IndexOne solo guarda audio.',
      },
      {
        question: '¿Funciona con auriculares y en Mac con Intel?',
        answer: 'Con auriculares, sí: el audio del otro lado se captura del sistema, no de tus altavoces. En Mac con Intel, no: IndexOne necesita un Mac con Apple Silicon (M1 o posterior).',
      },
      {
        question: '¿IndexOne es de código abierto?',
        answer: 'No. La app se puede descargar y usar gratis, pero su código fuente no es público. Las versiones 2.8.0 y anteriores se publicaron originalmente bajo la licencia GNU AGPL-3.0 mientras su código fuente era público.',
      },
    ],
  },
  changelog: {
    eyebrow: 'Novedades',
    title: 'Novedades de IndexOne',
    lead: 'Cada versión de la app para macOS, de la más reciente a la más antigua. Descarga la última versión o consulta todas las compilaciones y sumas de verificación en GitHub.',
    download: 'Descargar la última',
    github: 'Todas las versiones en GitHub',
    latest: 'Última',
    englishNote: 'Las notas de versión se publican en inglés.',
    versions: 'Versiones',
    filterLabel: 'Mostrar versiones',
    filters: { all: 'Todas', features: 'Novedades', fixes: 'Correcciones' },
    kinds: { major: 'Versión mayor', minor: 'Novedades', patch: 'Correcciones' },
    count: { one: '{count} versión', other: '{count} versiones' },
    showOlder: 'Ver versiones anteriores',
    empty: 'No hay versiones de este tipo.',
  },
  cta: {
    title: 'Lleva Ivy a tus reuniones y mantén el control en tu Mac.',
    lead: 'Local-first para macOS. Mantén la IA en local o activa de forma explícita la IA en la nube con datos anonimizados cuando tú lo decidas.',
    compare: 'Mira cómo se compara con Obsidian, Notion, Evernote, Bear y Amie.',
    download: 'Descargar para macOS',
    github: 'Ver en GitHub',
    legacyHtml: '¿Usas la versión 2.8.0 o anterior? Su comprobación de actualizaciones ya no puede llegar a nosotros. Descarga una vez la <a href="{download}">última versión</a> y arrástrala a Aplicaciones para sustituir la copia antigua; tu biblioteca, tus grabaciones y tus ajustes se quedan donde están. A partir de la 2.9.0, la app encuentra las nuevas versiones por sí sola.',
  },
  footer: {
    legalHtml: 'Primero macOS · Ivy en el dispositivo · local-first · creado con Tauri, Angular y Rust · gratis para macOS · © {year} <a href="{authors}">MonoOne</a> · texto <a href="{license}">CC BY 4.0</a>',
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
content.faq.items[0] = { question: "¿Qué incluye Free?", answer: content.offer.after }
content.faq.items.push(
  { question: content.offer.trialTitle, answer: content.offer.trial },
  { question: content.offer.meterTitle, answer: content.offer.meter },
  { question: content.offer.privacyTitle, answer: content.offer.privacy },
  { question: "¿Quién paga Team?", answer: content.offer.team },
  ...content.privacy.lifecycle.items.map(item => ({ question: item.title, answer: item.body })),
)
content.compare.rows.price.cells[0] = 'Free · Personal 49 PLN · Team 75 PLN'

export default content
