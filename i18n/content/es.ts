import type { SiteContent } from './types'

const content: SiteContent = {
  meta: {
    home: {
      title: 'IndexOne — notas de reuniones con IA privada para Mac y la web, sin bot',
      description: 'Graba ambos lados de una llamada sin bot, transcríbela en tu Mac y pregúntale a Ivy, con un recibo para cada línea. Gratis en el Mac; tus espacios en la nube se abren en cualquier navegador.',
    },
    features: {
      breadcrumb: 'Funciones',
      title: 'Funciones — transcripción de reuniones, Ivy y notas en Mac',
      description: 'Transcripción de doble canal en tu Mac, Ivy en las llamadas, preguntas sobre cada reunión, recibos, proyectos, plugins, servidores de IA locales y exportación a Markdown.',
    },
    privacy: {
      breadcrumb: 'Privacidad',
      title: 'Privacidad en IndexOne: IA local y lo que sale de tu Mac',
      description: 'Transcripción e IA en el dispositivo, notas y transcripciones cifradas, bloqueo de carpetas con Touch ID y cortafuegos de anonimización. Mira qué envía cada IA y cuándo.',
    },
    pricing: {
      breadcrumb: 'Precios',
      title: 'Precios de IndexOne — Free, Personal y Team',
      description: 'IndexOne es gratis en el Mac. Planes en la nube: Personal 49 PLN al mes, Team 75 PLN netos por plaza, ambos con transcripción en la nube ilimitada bajo uso razonable. Los planes en la nube se venden en la app web.',
    },
    changelog: {
      breadcrumb: 'Novedades',
      title: 'Novedades de IndexOne — notas de versión de la app para Mac',
      description: 'Las notas de cada versión de IndexOne para Mac, de la más reciente a la más antigua: novedades de Ivy, organizaciones y privacidad, correcciones y descargas.',
    },
    meetingBot: {
      breadcrumb: "Bot de reuniones",
      title: "Bot de reuniones de IndexOne — información para los participantes",
      description: "El bot de IndexOne está grabando una reunión en la que participas. Quién es responsable, qué se graba y para qué, cuánto tiempo se guarda y cómo ejercer tus derechos.",
    },
    ogImageAlt: 'IndexOne — notas de reuniones con IA privada para Mac y la web, sin bot',
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
    githubAria: 'IndexOne en GitHub',
    titleStrong: 'Notas de reuniones que se quedan en tu Mac.',
    titleSoft: 'Sin bot. Un recibo para cada línea.',
    subHtml: 'IndexOne graba ambos lados de la llamada <b>sin bot</b>, la transcribe <b>en tu Mac</b> y te deja preguntarle a Ivy —en plena reunión o meses después— con un enlace al segundo en que se dijo. Gratis en el Mac, sin límite de minutos ni de historial. Tus espacios en la nube se abren en cualquier navegador.',
    download: 'Descargar para Mac — gratis',
    signup: 'Crear una cuenta gratuita',
    note: 'Apple Silicon (M1 o posterior) · macOS 13.4+ · firmada y notarizada · sin necesidad de cuenta en el Mac',
    videoLabel: 'Un recorrido de 47 segundos por IndexOne en el navegador: una reunión grabándose mientras se escriben notas al lado, la nota que redacta Ivy con resumen, decisiones y tareas, la transcripción con quién dijo qué, la búsqueda de un fragmento exacto, una pregunta a Ivy respondida con fuentes, un Space compartido con todo el equipo y la invitación a una persona más del equipo',
    play: 'Ver el recorrido',
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
          body: 'Notas y transcripciones cifradas, y bloqueos AES-256 para cualquier espacio de trabajo o carpeta, que se abren con Touch ID. Una carpeta bloqueada es invisible para la búsqueda, el grafo y MCP.',
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
      lead: 'Graba la reunión, pregunta sobre ella y expórtala a Markdown. Elige un paso para verlo.',
      tabsLabel: 'Recorrido del producto',
      tabs: { record: 'Grabar', ask: 'Preguntar', export: 'Conservar' },
      iphone: {
        eyebrow: 'iPhone',
        title: 'Tus reuniones, también en el iPhone.',
        body: 'Graba una reunión con el teléfono o trae una grabación desde la app Archivos. Se queda en el teléfono hasta que la detienes; entonces se sube a tu espacio y se transcribe en la nube. La nota de Ivy y la transcripción completa se abren ahí mismo. Una app para iPhone llegará pronto a la App Store.',
        videoLabel: 'Un recorrido de 49 segundos por IndexOne en el iPhone: la pantalla de inicio con notas y grabaciones recientes, la lista de grabaciones, la nota de Ivy con decisiones y tareas, la transcripción separada por participante, una reunión grabada con el teléfono y un archivo de audio importado desde Archivos',
      },
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
    items: ['Sin bot de reuniones', 'Transcripción en el dispositivo', 'Bloqueo de carpetas con Touch ID', 'Mac y web · app para iPhone muy pronto'],
  },
  unique: {
    eyebrow: 'Funciones',
    title: 'Una herramienta de reuniones que de verdad recuerda.',
    lead: 'Muchas apps guardan notas o transcriben llamadas. IndexOne graba ambos lados de la llamada en tu Mac, te deja preguntarle a Ivy durante la reunión y muestra de dónde procede cada línea que escribe.',
    items: {
      'live': {
        title: 'Pregúntale a Ivy en plena reunión, sin que nada salga de tu Mac',
        body: 'Escribe una pregunta en plena llamada —o dila en voz alta, con el asistente de voz activado— y recibe una respuesta basada en todas las reuniones que has grabado, con fuentes que puedes abrir; la grabación nunca se detiene. Elige Ivy on this Mac y ningún texto de tus reuniones saldrá de tu Mac; Claude Code y Codex siguen desactivados hasta que des tu consentimiento una vez.',
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
        body: 'Tus notas, transcripciones e índice de búsqueda están cifrados con SQLCipher en el Mac; bloquea un Workspace o una carpeta y su audio, vídeo y archivos también quedan sellados. Personal y cada organización a la que perteneces guardan aquí una copia cifrada, así que se abren sin conexión de red.',
        link: 'Seguridad y privacidad',
      },
      'locks': {
        title: 'Carpetas selladas con Touch ID',
        body: 'Bloquea un Workspace o una carpeta y sus notas, transcripciones y audio quedan sellados con AES-256-GCM, y solo se abren con Touch ID o la contraseña de tu Mac. Mientras está bloqueado, es invisible para la búsqueda, el grafo, MCP y el reproductor de audio.',
        link: 'El modelo de bloqueo',
      },
      'markdown': {
        title: 'Exportación a Markdown y un servidor MCP local',
        body: 'Exporta cualquier nota a Markdown o haz una copia de seguridad de tu biblioteca como archivos .md planos, y un servidor MCP de solo lectura en 127.0.0.1 permite que Claude y otros agentes consulten tus notas. Tú eliges qué espacios puede leer; las organizaciones están desactivadas hasta que las actives.',
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
          "body": "El audio en la nube se conserva 30 días por defecto; Free puede elegir 7, 14 o 30 días, y Personal y Team también 90. Las notas, transcripciones y archivos normales permanecen hasta que su propietario los elimine, dentro del límite de almacenamiento."
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
    leadHtml: 'En el espacio On this Mac, la transcripción, la búsqueda e Ivy on this Mac pueden funcionar <b>sin ninguna conexión de red</b> una vez descargados los modelos de voz. Lo poco que IndexOne envía por su cuenta no contiene nada de tus reuniones, y cada envío se detalla más abajo. Si eliges Claude Code o Codex, el consentimiento y un cortafuegos de anonimización se interponen antes de que salga nada.',
    cards: {
      'offline': {
        title: 'Tus reuniones se quedan en el dispositivo',
        body: 'Con Ivy on this Mac y modelos que descargas una sola vez, tu audio y tus transcripciones nunca tocan la red. El razonamiento ocurre en tu Mac.',
      },
      'at-rest': {
        title: 'Dos capas de cifrado en reposo',
        body: 'Las notas, las transcripciones y el índice de búsqueda están cifrados con SQLCipher. Además, un bloqueo <b>AES-256-GCM</b> por carpeta sella también el audio, el vídeo y los archivos, con claves de contenido protegidas por una clave maestra que solo liberan <b>Touch ID</b> o la contraseña de tu Mac.',
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
        title: 'Lo que IndexOne envía sin que lo pidas',
        body: 'Al iniciarse, IndexOne pregunta a GitHub si hay una versión más reciente; la solicitud indica qué versión usas, y nada más. Si alguna vez se ha iniciado sesión con una cuenta en este Mac, también pregunta al servidor de IndexOne, al iniciarse y cada hora, si tu versión sigue siendo compatible, sin enviar contenido. Una vez al día envía un pequeño mensaje de uso: un identificador de instalación aleatorio, las versiones de la app y de macOS, la arquitectura del procesador, el idioma y si has iniciado sesión; ni reuniones, ni notas, ni grabaciones, ni nombres. Solo es anónimo mientras no has iniciado sesión; si has iniciado sesión, se envía con tu cuenta. La primera vez que transcribes, descarga de Hugging Face dos pequeños modelos de voz, para la detección de voz y la separación de hablantes. Puedes desactivar la comprobación de actualizaciones y el mensaje de uso en <b>Settings → Privacy</b>. Son lo único de esta página que ocurre sin que lo pidas, y precisamente por eso están en esta página.',
      },
    },
    tableCaption: 'Dónde se ejecuta cada proveedor de IA y si el texto de las reuniones sale de tu Mac',
    tableHeaders: ['Ivy / proveedor', 'Dónde se ejecuta', '¿Sale el texto de las reuniones de tu Mac?'],
    providers: {
      'on-device': { name: 'Ivy on this Mac', note: 'Bielik / Qwen', where: 'Totalmente local' },
      'ivy-web': { name: 'Ivy on the web', note: 'Personal y organizaciones', where: 'Nube de IndexOne, con modelos Claude de Anthropic', leaves: 'Sí: el propio espacio está en la web' },
      'claude-code': { name: 'Claude Code', where: 'CLI local → nube' },
      'codex': { name: 'Codex', note: 'la CLI de OpenAI, sin herramientas', where: 'CLI local → nube' },
      'local-server': { name: 'Local AI server', note: 'Ollama, LM Studio, oMLX y otros', where: 'Tu Mac o tu red', leaves: 'No con un servidor en este Mac. A un servidor en otro equipo de tu red, solo tras confirmar su dirección; antes se eliminan los correos electrónicos y los números de tarjeta y de teléfono, y también los nombres si descargas el modelo de enmascarado de nombres' },
    },
    leavesYes: 'Solo con tu consentimiento y tras el cortafuegos de anonimización',
    leavesNo: 'No',
    shotAlt: 'Los ajustes de privacidad de IndexOne, que explican en lenguaje claro qué se elimina antes de que salga cualquier texto, qué proveedores están en la nube y si se ha permitido el procesamiento en la nube',
    footnote: 'IndexOne te dice, en lenguaje claro, exactamente qué sale de tu Mac, y cada llamada a una IA en la nube hecha desde tu Mac queda registrada y se te muestra. Cada espacio tiene una única elección de IA: Ivy on this Mac, Ivy on the web, Claude Code, Codex o tu propio servidor de IA local. En el espacio On this Mac, las reuniones se quedan en tu Mac salvo que elijas Claude Code, Codex o un servidor de IA local en otro equipo de tu red.',
  },
  features: {
    eyebrow: 'Lo que obtienes',
    title: 'Una herramienta de reuniones que de verdad recuerda.',
    lead: 'Una única biblioteca cifrada y tres formas de usarla: la app, un servidor MCP local y la exportación a Markdown. Un solo árbol lo contiene todo, los proyectos se apoyan en él e Ivy lo lee entero.',
    items: {
      'workspaces': {
        eyebrow: 'Workspaces',
        title: 'Un solo árbol para todo',
        body: 'Un único árbol — <b>Workspaces › carpetas › tus grabaciones y notas</b> — en una barra lateral que se reduce a una franja cuando necesitas espacio. Bloquea un Workspace y todo lo que contiene queda sellado con él.',
        points: [
          'Grabaciones, notas, tareas y proyectos se archivan en el mismo lugar',
          'Un Workspace sellado muestra su nombre y nada más: ni recuentos ni contenido',
          'Pídele a Ivy que archive por ti una grabación suelta',
          '¿Lo borraste sin querer? En tu Mac, la papelera lo guarda 30 días, o el tiempo que elijas, hasta un año',
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
        body: 'Esto es lo que la mayoría de las apps de notas no tiene. Pregúntale a Ivy con un solo toque, o activa el asistente de voz en Settings y pregunta en voz alta: responde a partir de la memoria de tus reuniones, en directo, con citas que puedes abrir, y la grabación nunca se detiene.',
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
          'Voice + screen: graba tu pantalla junto con la reunión (macOS 14+), gratis en el Mac',
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
          'Añade PDF, documentos de Office, páginas web guardadas (.html) e imágenes: se indexan para Ivy en el dispositivo',
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
        title: 'Markdown de entrada y de salida. Sin ataduras.',
        body: 'Exporta cualquier nota a Markdown o haz una copia de seguridad de toda tu biblioteca como archivos <code>.md</code> planos que puedes abrir en cualquier editor. ¿Vienes de Obsidian? Importa tu bóveda en un solo paso.',
        points: [
          'Una base de datos SQLite cifrada es la única fuente de verdad',
          'Un servidor MCP local de solo lectura para Claude Desktop y Claude Code',
          'Exportación a Markdown de cualquier nota y copia de seguridad en Markdown plano de toda tu biblioteca',
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
    eyebrow: "Gratis para empezar",
    title: "Convierte tus reuniones en respuestas.",
    lead: "Empieza gratis en tu Mac. Añade la nube solo cuando necesites más.",
    benefits: {
      local: {
        title: "Gratis en tu Mac",
        body: "Graba, transcribe y pregunta a Ivy en tu Mac. El trabajo local no necesita cuenta ni tarjeta.",
      },
      sync: {
        title: "Ábrelo en tu navegador",
        body: "Inicia sesión en la app web para tener tus notas sincronizadas. Las notas en la nube están incluidas en Free.",
      },
      grow: {
        title: "Más espacio cuando lo necesites",
        body: "Los planes de pago añaden transcripción en la nube sin límite, más Ivy y más almacenamiento. Team añade un espacio compartido.",
      },
    },
    download: "Descargar gratis",
    forMac: "Para Mac con Apple Silicon",
    plans: "Ver planes",
    web: "Abrir aplicación web",
    status: "Los planes en la nube ya están a la venta. Inicia sesión en la app web para comprar un plan o gestionar tu suscripción. Las funciones locales de Mac siguen disponibles.",
    trialTitle: "Gratis cada mes",
    trial: "Cada cuenta gratuita recibe cada mes natural (UTC) 200.000 unidades Ivy y una cuota de transcripción en la nube, sin tarjeta. Las funciones locales de Mac no tienen límite de plan.",
    meterTitle: "Transcripción en la nube ilimitada",
    meter: "Los planes de pago no tienen tope de transcripción en la nube. Si transcribes mucho, algunas grabaciones pueden tardar unas horas en estar listas. Se aplica un uso razonable. La transcripción en tu Mac es siempre inmediata e ilimitada.",
    fairUse: "Los planes de pago incluyen transcripción en la nube ilimitada bajo uso razonable; la cuota de Free y las reglas de uso razonable figuran en los Términos del servicio.",
    fairUseLink: "Leer los Términos del servicio (en polaco)",
    privacyTitle: "Local y nube",
    privacy: "El procesamiento local de Mac permanece en el Mac. La nube estándar almacena y procesa contenido en servidores legibles por el operador, sin cifrado de extremo a extremo. Enmascarar patrones no es anonimización completa. Un plan no concede acceso a espacios privados.",
    detailsTitle: "Detalles de los planes",
    details: "La transcripción de pago no tiene límite de plan; se aplica un uso razonable y el uso intensivo puede tardar más. Los cupos mensuales en la nube se renuevan por mes natural en UTC. La nube estándar de la cuenta no tiene cifrado de extremo a extremo: el operador puede leer el contenido almacenado y procesado. El enmascaramiento de patrones no es una anonimización completa. El procesamiento local en tu Mac se queda en tu Mac. Los planes de pago nunca dan acceso a espacios privados.",
    more: "Más detalles de facturación",
    after: "Free incluye notas básicas, edición, búsqueda normal, sincronización, lectura y exportación dentro de 1 GB, además de la cuota mensual en la nube. Los planes de pago añaden más IA, transcripción y almacenamiento en la nube.",
    team: "Personal y cada organización tienen suscripciones y saldos separados. Team: 2,25 millones de unidades Ivy interactivas y 250.000 de automatización por plaza, estas últimas en un fondo común. Almacenamiento compartido por la organización. La plaza no cambia permisos. Hasta 2 organizaciones gratuitas de 5 miembros comparten el almacenamiento de la cuenta fundadora.",
    lifecycle: "Audio en nube: 30 días por defecto; Free 7/14/30, planes de pago también 90. Papelera en la nube: se conserva hasta que la vacíes. Cancelar no borra contenido; derechos de pago hasta fin del período. Exporta audio antes de vencer.",
    docs: "Planes y facturación · documentación en inglés",
    comparison: "Comparar planes",
    feature: "Función del plan",
    local: "Herramientas locales de Mac",
    basics: "Notas y sincronización en la nube, en el navegador",
    ivy: "Unidades Ivy en nube / mes",
    asr: "Transcripción en la nube",
    asrUnlimited: "Ilimitada · uso razonable",
    asrBasic: "Cuota mensual",
    storage: "Almacenamiento en nube",
    gb: "GB",
    meetBot: "Bot de Google Meet",
    included: "Incluido",
    notIncluded: "No incluido",
    seat: "por plaza",
    unit: "Las unidades Ivy son un presupuesto de procesamiento, no tokens del modelo ni un número garantizado de respuestas. GB = mil millones de bytes.",
  },
  pricing: {
    eyebrow: "Precios",
    title: "Empieza gratis. Crece cuando quieras.",
    lead: "Las herramientas locales en Mac son gratis. Elige un plan en la nube cuando necesites más.",
    recommended: "Recomendado",
    note: "Personal incluye IVA. Team desde {seats} plazas: {total} netos al mes en total. Los impuestos y el precio final se muestran en la app web antes de comprar.",
    compareLink: "Comparar todos los detalles",
    peek: { benefit: "Transcripción en la nube sin límite", link: "Ver el plan Personal" },
    plans: {
      free: {
        name: "Free",
        audience: "Tus primeras notas de reuniones.",
        period: "al mes",
        points: [
          "Herramientas locales en Mac",
          "Notas en la nube y sincronización",
          "{ivy} unidades Ivy al mes",
          "{storage} GB en la nube",
        ],
        cta: "Descargar gratis",
        trust: "Sin tarjeta",
      },
      personal: {
        name: "Personal",
        audience: "Más espacio para tu trabajo.",
        period: "al mes, IVA incluido",
        points: [
          "Todo lo de Free",
          "Transcripción en la nube sin límite",
          "{ivy} unidades Ivy al mes",
          "{storage} GB en la nube",
        ],
        cta: "Elegir Personal",
        trust: "Cancela cuando quieras",
      },
      team: {
        name: "Team",
        audience: "Un espacio compartido para tu equipo.",
        period: "netos por plaza al mes, desde {seats} plazas",
        points: [
          "Notas y espacio de equipo compartidos",
          "Transcripción en la nube sin límite",
          "{ivy} unidades Ivy por plaza al mes",
          "{storage} GB en la nube por plaza",
          "Bot de Google Meet",
        ],
        cta: "Elegir Team",
        trust: "Gestiona tu plan en la app web",
      },
    },
  },
  compare: {
    eyebrow: 'Competencia',
    title: 'Cómo se compara IndexOne.',
    lead: 'Obsidian, Notion, Evernote, Bear y Amie hacen bien lo suyo. IndexOne está pensado para lo que ocurre en una reunión: grabarla, transcribirla en tu Mac y hacer preguntas sobre ella. Y además importa tu bóveda de Obsidian en un solo paso.',
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
        cells: ['En el espacio On this Mac; los espacios en la nube están en la web', 'Archivos locales', 'La nube de Notion', 'La nube de Evernote', 'Base de datos local; sincronización con iCloud en Pro', 'La nube de Amie'],
      },
      'markdown': {
        criterion: 'Notas como archivos Markdown planos y tuyos',
        cells: ['Exportación y copia de seguridad en Markdown; la base de datos cifrada es la fuente', '', 'Solo exportación a Markdown', 'Exportación a ENEX, HTML o PDF', 'Base de datos; exportación a Markdown', ''],
      },
      'encryption': {
        criterion: 'Cifrado bajo tu control',
        cells: ['Base de datos cifrada, bloqueo de carpetas con Touch ID y una copia local cifrada de cada espacio web', 'Cifrado de extremo a extremo con Sync de pago', 'Cifrado en los servidores de Notion; no de extremo a extremo', 'Frase de contraseña solo para el texto seleccionado', 'Notas individuales, con Pro', ''],
      },
      'platforms': {
        criterion: 'Plataformas',
        cells: ['macOS, web; app para iPhone muy pronto', 'macOS, Windows, Linux, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, iOS, iPadOS, web (beta)', 'macOS, Windows, iOS'],
      },
      'price': {
        criterion: 'Precio',
        cells: ['Free · Personal 49 PLN · Team 75 PLN', 'Gratis; Sync desde $4/mes con facturación anual', 'Gratis; la IA y las notas de reuniones requieren Business, $20/mes con facturación anual', 'Gratis hasta 50 notas; Starter $99/año', 'Gratis; Pro $29.99/año', 'Gratis con 25 créditos de notas; Pro desde €20/mes con facturación anual'],
      },
    },
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Lo primero que suele preguntarse.',
    leadHtml: 'Aquí van respuestas breves; la <a href="/docs/">documentación</a> tiene los detalles.',
    items: [
      {
        question: '¿Qué incluye Free?',
        answer: 'En el Mac, todo: grabación, transcripción, notas, Ivy on this Mac y exportaciones, sin cuenta y sin límite de plan. Una cuenta gratuita añade notas, edición, búsqueda, sincronización, lectura y exportación en la nube desde el navegador dentro de 1 GB, además de una cuota mensual de unidades Ivy y de transcripción en la nube. Los planes de pago añaden transcripción en la nube ilimitada bajo uso razonable, más unidades Ivy y más almacenamiento.',
      },
      {
        question: '¿Mi audio va a la nube?',
        answer: 'No en el espacio On this Mac: allí la transcripción se ejecuta en tu Mac con Whisper. Solo puede salir texto: anonimizado, hacia Claude Code o Codex una vez que des tu consentimiento, o, tras eliminar los correos electrónicos y los números de tarjeta y de teléfono, hacia un servidor de IA local de tu red una vez que confirmes su dirección. Los espacios Personal y de organización están en IndexOne en la web, así que sus grabaciones se guardan allí.',
      },
      {
        question: '¿Qué es Ivy?',
        answer: 'Ivy es la IA de IndexOne. Pregúntale durante una reunión sin detener la grabación, o después, sobre todo lo que has grabado y escrito. Cada respuesta cita las reuniones y notas de las que procede. Cada espacio elige una IA: Ivy on this Mac, Ivy on the web para Personal y organizaciones, tu propio servidor de IA local, o Claude Code o Codex tras tu consentimiento explícito.',
      },
      {
        question: '¿Necesito conexión a internet?',
        answer: 'Una vez, para descargar los modelos de voz. A partir de ahí, la grabación, la transcripción, la búsqueda e Ivy on this Mac funcionan sin conexión. Los espacios Personal y de organización se abren sin conexión desde su copia cifrada y envían tus cambios cuando vuelves a estar en línea. Ivy on the web, Claude Code, Codex y los conectores necesitan conexión.',
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
        answer: 'Ese permiso es la forma en que macOS deja que una app escuche el audio de otras apps, es decir, a las demás personas de la llamada. IndexOne solo guarda su audio, salvo que actives el plugin Screen recording y elijas Voice + screen.',
      },
      {
        question: '¿Funciona con auriculares y en Mac con Intel?',
        answer: 'Con auriculares, sí: el audio del otro lado se captura del sistema, no de tus altavoces. En Mac con Intel, no: la app para Mac necesita Apple Silicon (M1 o posterior). En cualquier otro ordenador, usa IndexOne en el navegador.',
      },
      {
        question: '¿Hay una app para iPhone o Windows?',
        answer: 'Una app para iPhone llegará pronto a la App Store. En Windows, Linux o un Mac con Intel, abre IndexOne en el navegador en app.index-one.io; las grabaciones hechas allí se transcriben en la nube y cuentan para tu plan.',
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
  meetingBot: {
    eyebrow: "Para participantes en reuniones",
    title: "El bot de IndexOne está grabando tu reunión.",
    lead: "Estás aquí porque el bot de notas de IndexOne se ha unido a una llamada de Google Meet en la que participas. Esta página explica quién graba la reunión, qué pasa con la grabación y qué puedes hacer al respecto.",
    noticeLabel: "El mensaje que el bot publica en el chat de la reunión",
    noticeNote: "El bot publica este mensaje en inglés en cuanto se le admite en la llamada. No graba nada antes de publicarlo.",
    cards: {
      bot: { title: "Qué es el bot", body: "Un asistente de notas que se une a Google Meet como participante, así que aparece en la lista de personas de la llamada. Su nombre es el que eligió la organización que lo envió, normalmente el nombre de esa organización, seguido de «· IndexOne», por ejemplo «Northwind · IndexOne»." },
      controller: { title: "Quién es responsable de tus datos", body: "La organización que envió el bot, la que aparece en su nombre. Es la responsable del tratamiento de tus datos personales: decide grabar la reunión, con qué finalidad y qué pasa después con la grabación." },
      processor: { title: "Qué hace IndexOne", body: "IndexOne es el encargado del tratamiento. Graba, transcribe y guarda la reunión por cuenta de esa organización y solo siguiendo sus instrucciones. El proveedor de IndexOne figura en la política de privacidad de IndexOne." },
      recorded: { title: "Qué se graba", body: "El sonido de la reunión y una transcripción escrita hecha a partir de él. Todo lo que digas mientras el bot está en la llamada queda en la grabación y en la transcripción." },
      purpose: { title: "Para qué se graba", body: "Para que la organización tenga notas y resúmenes de su reunión. La grabación se guarda en el espacio de trabajo de IndexOne de esa organización, donde pueden abrirla las personas a las que ella lo permita." },
      storage: { title: "Cuánto tiempo se guarda", body: "La organización decide cuánto tiempo conserva la grabación en su espacio de trabajo. Cuánto tiempo guarda IndexOne los datos se explica en la política de privacidad de IndexOne." },
    },
    policyLink: "Política de privacidad de IndexOne (en polaco)",
    rights: {
      eyebrow: "Tus derechos",
      title: "Puedes oponerte, ver tus datos y pedir que se borren.",
      lead: "Estos derechos te los da el RGPD. Ejércelos primero ante la organización que envió el bot, porque es ella quien decide sobre la grabación.",
      items: {
        object: { title: "Oposición", body: "Puedes oponerte a que te graben. Durante la llamada, pide al anfitrión que quite el bot o sal de la llamada. Después, dile a la organización que te opones al uso de la grabación." },
        access: { title: "Acceso", body: "Puedes preguntar a la organización si tiene una grabación o transcripción en la que aparezcas y pedir una copia." },
        erasure: { title: "Supresión", body: "Puedes pedir a la organización que borre la grabación o las partes de la transcripción que te afectan." },
        complaint: { title: "Reclamación", body: "Puedes presentar una reclamación ante una autoridad de control de protección de datos, por ejemplo la del país de la UE donde vives o trabajas. En Polonia es el Presidente de la Oficina de Protección de Datos Personales (UODO)." },
      },
    },
    steps: {
      title: "Cómo ejercer tus derechos",
      items: [
        { title: "Durante la reunión", body: "Pide al anfitrión que quite el bot o sal de la llamada. No tienes que dar ningún motivo." },
        { title: "Después de la reunión", body: "Escribe a la persona que organizó la reunión o a la organización que aparece en el nombre del bot. Es ella quien debe responder a tu solicitud." },
        { title: "Si no consigues contactar con ellos", body: "Escribe a IndexOne con los datos de contacto de la política de privacidad de IndexOne e indica de qué reunión se trata. IndexOne trasladará tu solicitud a la organización." },
      ],
    },
    note: "Esta página describe el bot de IndexOne en términos generales. La organización que lo envió puede tener su propio aviso de privacidad con más detalles; pídeselo.",
  },
  cta: {
    title: 'Pruébalo en tu próxima llamada.',
    lead: 'Descarga IndexOne gratis y graba tu próxima reunión: sin bot, sin cuenta y sin tarjeta. ¿Quieres tus notas también en el navegador? Crea una cuenta gratuita.',
    compare: 'Comparar planes',
    download: 'Descargar para Mac — gratis',
    signup: 'Crear una cuenta gratuita',
    legacyHtml: '¿Usas la versión 2.8.0 o anterior? Su comprobación de actualizaciones ya no puede llegar a nosotros. Descarga una vez la <a href="{download}">última versión</a> y arrástrala a Aplicaciones para sustituir la copia antigua; tu biblioteca, tus grabaciones y tus ajustes se quedan donde están. A partir de la 2.9.0, la app encuentra las nuevas versiones por sí sola.',
  },
  footer: {
    legalHtml: 'App para Mac y app web · app para iPhone muy pronto · Ivy en el dispositivo · creado con Tauri, Angular y Rust · gratis en el Mac · © {year} <a href="{authors}">MonoOne</a> · texto <a href="{license}">CC BY 4.0</a>',
    legalNav: 'Información legal',
    terms: 'Términos del servicio (PL)',
    privacyPolicy: 'Política de privacidad (PL)',
    withdrawal: 'Derecho de desistimiento (PL)',
    dpa: 'Acuerdo de tratamiento de datos (PL)',
    meetingBot: 'Bot de reuniones: información para participantes',
    contact: 'Contacto',
  },
}

// The FAQ ends with the offer details shown on the pricing page.
content.faq.items.push(
  { question: content.offer.trialTitle, answer: content.offer.trial },
  { question: content.offer.meterTitle, answer: content.offer.meter },
  { question: content.offer.privacyTitle, answer: content.offer.privacy },
  { question: "¿Quién paga Team?", answer: content.offer.team },
  ...content.privacy.lifecycle.items.map(item => ({ question: item.title, answer: item.body })),
)

export default content
