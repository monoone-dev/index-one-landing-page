import type { SiteContent } from './types'

const content: SiteContent = {
  meta: {
    home: {
      title: 'IndexOne — notas de reuniones local-first para macOS, con Ivy',
      description: 'Graba y transcribe reuniones en tu Mac y pregúntale a Ivy, tu IA, en directo o sobre todas tus llamadas. IA local o en la nube anonimizada; notas en Markdown.',
    },
    features: {
      breadcrumb: 'Funciones',
      title: 'Funciones — IndexOne, notas de reuniones para macOS',
      description: 'Workspaces, paneles, importación, Ivy en reuniones, preguntas a tu bóveda, transcripción de doble canal, recibos, Markdown y Shared Ivy: todo IndexOne.',
    },
    privacy: {
      breadcrumb: 'Privacidad',
      title: 'Privacidad y seguridad: lo que nunca sale de tu Mac — IndexOne',
      description: 'Transcripción en el dispositivo, SQLCipher en reposo, bloqueo con Touch ID, cortafuegos de anonimización y consentimiento previo a la IA en la nube.',
    },
    pricing: {
      breadcrumb: 'Precios',
      title: 'Precios de IndexOne y comparativa con Obsidian, Notion y otros',
      description: 'IndexOne es gratis durante el acceso anticipado. Compáralo con Obsidian, Notion, Evernote, Bear y Amie en grabación, IA local, cifrado y Markdown.',
    },
    changelog: {
      breadcrumb: 'Novedades',
      title: 'Novedades — qué trae cada versión de IndexOne',
      description: 'Cada versión de IndexOne para macOS, de la más reciente a la más antigua: funciones nuevas, correcciones y descargas, con la fecha de cada versión.',
    },
    ogImageAlt: 'IndexOne — notas de reuniones local-first para macOS, con Ivy',
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
    subHtml: 'IndexOne graba tus llamadas y las transcribe <b>en tu Mac</b>. Pregúntale a Ivy en directo, en plena reunión, y sobre todo lo que has grabado. Usa IA local o activa de forma explícita la <b>IA en la nube con datos anonimizados</b>: tu archivo de reuniones se queda en tu Mac.',
    download: 'Descargar para macOS',
    privacyCta: 'Descubre cómo funciona la privacidad',
    note: 'Firmada y notarizada · macOS 13.4+ · Apple Silicon e Intel · tus notas siguen siendo Markdown y son tuyas',
    videoLabel: 'Un recorrido de 90 segundos por IndexOne: una reunión grabándose mientras se escribe una nota al lado, la nota redactada después y los puntos que extrae, la línea de tiempo de los participantes, una pregunta a Ivy sobre toda la bóveda respondida con fuentes, el grafo de conocimiento, la barra de Workspaces y la búsqueda en el dispositivo, un panel en vivo, Personas y un Workspace que se niega a abrirse porque está sellado',
    play: 'Ver el recorrido de 90 segundos',
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
        body: 'Escribe o di una pregunta en plena llamada y recibe una respuesta basada en todas las reuniones que has grabado, con fuentes que puedes abrir; la grabación nunca se detiene. Ejecuta Ivy en el dispositivo o con Ollama en local y ningún texto de tus reuniones saldrá de tu Mac; la IA en la nube sigue desactivada hasta que des tu consentimiento una vez.',
        link: 'Cómo funciona Ivy',
      },
      'capture': {
        title: 'Ambos lados de la llamada, transcritos en tu Mac',
        body: 'Tu micrófono y el audio del sistema de los demás participantes se capturan como dos canales y Whisper, en el propio dispositivo, los fusiona en una transcripción Me / Others. No hay transcripción en la nube.',
        link: 'Captura y transcripción',
      },
      'receipts': {
        title: 'Cada afirmación tiene su recibo',
        body: 'Cada línea fundamentada de una nota enlaza con el segundo exacto del audio del que procede, con el hablante y el nivel de confianza. Las líneas sin pruebas no llevan recibo, así ves qué está verificado.',
        link: 'Recibos',
      },
      'security': {
        title: 'Cifrado allí donde se guarde',
        body: 'Toda tu biblioteca está cifrada con SQLCipher en el Mac. Todo lo que compartes se sella con AES-256-GCM antes de subirlo, así que el servidor solo guarda texto cifrado; y el inicio de sesión usa OPAQUE, por lo que nunca conoce tu contraseña.',
        link: 'Seguridad y privacidad',
      },
      'locks': {
        title: 'Carpetas selladas con Touch ID',
        body: 'Bloquea un Workspace o una carpeta y sus notas, transcripciones y audio quedan sellados con AES-256-GCM. Mientras está bloqueado, es invisible para la búsqueda, el grafo, MCP y el reproductor de audio.',
        link: 'El modelo de bloqueo',
      },
      'markdown': {
        title: 'Markdown plano y un servidor MCP local',
        body: 'Las notas llegan a tu bóveda de Obsidian como Markdown plano con wikilinks, y un servidor MCP de solo lectura en 127.0.0.1 permite que Claude y otros agentes las consulten.',
        link: 'Markdown y MCP',
      },
    },
    seeAll: 'Ver todas las funciones',
  },
  how: {
    eyebrow: 'Cómo funciona',
    title: 'Graba → comprende → pregunta. Local-first por diseño.',
    lead: 'Un único flujo local-first convierte una llamada en directo en memoria consultable. La transcripción se queda en tu Mac; Ivy puede ejecutarse en local o, con tu consentimiento explícito, usar procesamiento en la nube con datos anonimizados.',
    steps: [
      {
        label: '01 · Grabar',
        title: 'Escucha toda la llamada',
        body: 'Tu micrófono <b>y</b> el audio del sistema del otro lado, capturados y transcritos por separado, y después fusionados por Whisper, en el dispositivo, en una transcripción limpia <b>Me / Others</b>.',
      },
      {
        label: '02 · Comprender',
        title: 'Ivy, en tu Mac',
        body: 'Un modelo de razonamiento se ejecuta en local sobre un índice semántico de todo lo que has grabado: redacta una nota estructurada y mantiene la memoria consultable para siempre.',
      },
      {
        label: '03 · Preguntar',
        title: 'Respuestas en directo y con fuentes',
        body: 'Pregúntale a Ivy en plena reunión y obtén una respuesta fundamentada con <b>fuentes</b>, o pregunta después sobre meses de llamadas. La grabación nunca se detiene.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Seguridad y privacidad',
    title: 'La privacidad no es un ajuste. Es la arquitectura.',
    leadHtml: 'IndexOne está diseñado para que la transcripción, la búsqueda e Ivy en el dispositivo funcionen <b>sin ninguna conexión de red</b>, en cuanto desactivas lo único que sí sale a internet: la comprobación de nuevas versiones al iniciar. Si eliges la IA en la nube, el consentimiento y un cortafuegos de anonimización se interponen antes de que salga nada.',
    cards: {
      'offline': {
        title: 'Nada sale del dispositivo',
        body: 'Con un modelo en el dispositivo que descargas una sola vez, o con Ollama, tu audio y tus transcripciones nunca tocan la red. El razonamiento ocurre en tu Mac.',
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
        title: 'La única conexión que hacemos por defecto',
        body: 'Al iniciarse, IndexOne pregunta a GitHub si hay una versión más reciente. La solicitud indica qué versión usas, porque así es como formula la pregunta, y nada más: ni reuniones, ni notas, ni cuenta. Puedes desactivarla en <b>Settings → Privacy</b>. Es lo único de esta página que ocurre sin que lo pidas, y precisamente por eso está en esta página.',
      },
    },
    tableCaption: 'Dónde se ejecuta cada proveedor de IA y si el texto de las reuniones sale de tu Mac',
    tableHeaders: ['Ivy / proveedor', 'Dónde se ejecuta', '¿Sale el texto de las reuniones de tu Mac?'],
    providers: {
      'on-device': { name: 'Ivy en el dispositivo', note: 'Bielik / Qwen', where: 'Totalmente local' },
      'ollama': { name: 'Ollama', where: 'Totalmente local' },
      'claude-code': { name: 'Claude Code', note: 'resumidor predeterminado', where: 'CLI local → nube' },
      'codex': { name: 'Codex', note: 'la CLI de OpenAI, sin herramientas', where: 'CLI local → nube' },
      'anthropic': { name: 'Anthropic API', note: 'con tu propia clave', where: 'HTTPS directo' },
      'gateway': { name: 'AI Gateway', note: 'cualquier endpoint compatible con OpenAI: LiteLLM, Kong, Portkey, vLLM…', where: 'HTTPS directo' },
    },
    leavesYes: 'Solo con tu consentimiento y tras el cortafuegos de anonimización',
    leavesNo: 'No',
    shotAlt: 'Los ajustes de privacidad de IndexOne, que explican en lenguaje claro qué se elimina antes de que salga cualquier texto, qué proveedores están en la nube y que el procesamiento en la nube está desactivado hasta que lo permitas una vez',
    footnote: 'IndexOne te dice, en lenguaje claro, exactamente qué sale de tu Mac, y cada llamada a una IA en la nube queda registrada y se te muestra. Tus reuniones se quedan en el dispositivo salvo que decidas lo contrario. Hay un único selector de modelos para todas las funciones de IA, y siempre acepta un identificador de modelo que escribas tú, así que incluso un modelo publicado después de esta versión funciona.',
  },
  features: {
    eyebrow: 'Lo que obtienes',
    title: 'Una herramienta de reuniones que de verdad recuerda.',
    lead: 'Un único almacén cifrado y tres formas de usarlo: la app, un servidor MCP local y tus archivos Markdown exportados. Un solo árbol lo contiene todo, los paneles se apoyan en él e Ivy lo lee entero.',
    items: {
      'workspaces': {
        eyebrow: 'Workspaces',
        title: 'Un solo árbol para todo',
        body: 'Un único árbol — <b>Workspaces › carpetas › tus grabaciones y notas</b> — en una barra lateral que se reduce a una franja cuando necesitas espacio. Bloquea un Workspace y todo lo que contiene queda sellado con él.',
        points: [
          'Grabaciones, notas, tareas y paneles se archivan en el mismo lugar',
          'Un Workspace sellado muestra su nombre y nada más: ni recuentos ni contenido',
          'Pídele a Ivy que archive por ti una grabación suelta',
          '¿Lo borraste sin querer? La papelera lo guarda 30 días, o el tiempo que elijas, hasta un año',
        ],
        alt: 'La barra lateral de Workspaces: un único árbol de Workspaces y carpetas con grabaciones, notas y paneles, y un Workspace bloqueado al final',
      },
      'dashboards': {
        eyebrow: 'Paneles',
        title: 'Paneles a tu medida',
        body: 'Lleva a un panel notas, grabaciones, documentos, personas, registros de compromisos y recordatorios, y léelo a través de las vistas <b>Brief / Overview / Commitments / Sources / People</b>. Fija una <b>respuesta viva</b>: una pregunta que la app mantiene al día y que oculta en cuanto sus fuentes dejan de ser legibles. Puedes preguntarle directamente a un panel, con respuestas basadas solo en lo que contiene.',
        points: [
          'Siete tipos de mosaico: una nota, una grabación, un documento, una persona, un registro de compromisos, una lista de recordatorios o una respuesta viva',
          'Cinco vistas sobre los mismos mosaicos, sin duplicar nada',
          'Un panel declara sus propios límites: qué puede leer y qué ha deducido',
        ],
        alt: 'Un panel en la vista Brief: una respuesta viva fijada, lo que requiere atención y las pruebas recientes que lo respaldan',
      },
      'imports': {
        eyebrow: 'Importación',
        title: 'Trae tus notas de siempre',
        body: 'Settings → Imports importa una <b>exportación de Notion</b>, una <b>bóveda de Obsidian</b> o <b>Apple Notes</b>. Totalmente sin conexión: sin cuenta, sin clave y sin llamadas de red. Cada importación empieza con una simulación, para que veas lo que escribiría antes de que escriba nada.',
        points: [
          'Tres orígenes: una exportación de Notion, una bóveda de Obsidian y Apple Notes',
          'Primero una simulación: no se escribe nada hasta que tú lo digas',
          'Las notas importadas van a su propia carpeta con nombre, e Ivy las lee como todo lo demás',
        ],
        alt: 'Settings → Imports: Notion, Obsidian y Apple Notes, con el aviso de que todo ocurre en este Mac y no se sube nada',
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
        body: 'Las notas de IndexOne no te piden que confíes en ellas. Cada línea basada en lo que realmente se dijo lleva un recibo: haz clic y salta directamente a ese segundo del audio, con el hablante y el nivel de confianza. Las líneas parafraseadas o sin respaldo no llevan ninguno, así ves de un vistazo qué está verificado.',
        points: [
          'Haz clic en una afirmación y escucha exactamente de dónde salió',
          'Hablante y confianza del reconocimiento de voz en cada recibo',
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
        ],
        alt: 'El editor de notas con un texto seleccionado y el menú de comandos de Ivy abierto, con Refine, Shorten, Change tone y más acciones',
      },
      'shared-ivy': {
        eyebrow: 'Shared Ivy',
        title: 'Trabaja en equipo, con cifrado de extremo a extremo.',
        body: 'Publica una nota o el resumen de una reunión en el Shared Ivy de tu organización y se mantendrá sincronizado para todos los miembros mientras editas. Todo se sella en tu Mac antes de salir: el servidor solo almacena texto cifrado, claves protegidas y claves públicas.',
        points: [
          'Sellado con AES-256-GCM bajo una clave de contenido de la organización antes de subirse',
          'Verificación antes de publicar, con el mismo rigor que al bloquear una carpeta',
          'Permisos por documento: el autor elige <b>View only</b> (solo lectura) o <b>Can edit</b> (puede editar) en cada documento compartido',
          'Forma parte de más de una organización: cada una tiene su propio canal cifrado',
          '<b>Tasks</b> compartidas: responsables, fechas límite, subtareas y los mismos permisos; las tareas viven dentro de una organización, así que requieren una cuenta con sesión iniciada',
        ],
        alt: 'La vista de Shared Ivy: reuniones y notas que tus organizaciones han compartido contigo, cada una con su autor y su organización',
      },
    },
  },
  pricing: {
    eyebrow: 'Precios',
    title: 'Gratis durante el acceso anticipado.',
    lead: 'La grabación local, la transcripción, las notas y las exportaciones en Markdown no requieren cuenta ni pago. Los precios y la disponibilidad después del acceso anticipado se anunciarán por separado.',
    plans: {
      free: {
        name: 'Free',
        badge: 'Disponible ya',
        price: '$0',
        per: '/ acceso anticipado',
        tagline: 'Grabación local, transcripción, notas y exportaciones.',
        points: [
          'Grabación y transcripción ilimitadas en el dispositivo',
          'Ivy en las reuniones y preguntas a tu bóveda',
          'Búsqueda semántica y grafo de conocimiento automático',
          'Notas independientes con un editor asistido por Ivy',
          'Uso compartido con cifrado de extremo a extremo y permisos View only / Can edit por documento (requiere cuenta)',
          'Workspaces, paneles componibles e importación sin conexión desde Notion, Obsidian y Apple Notes',
          'Enlaces compartidos cifrados con caducidad, contraseña opcional y límite de aperturas',
          'Bloqueo con Touch ID por Workspace y por carpeta, con cifrado AES-256',
          'Rebloqueo automático al compartir pantalla',
          'Servidor MCP local y exportación a Markdown',
        ],
        cta: 'Descargar para macOS',
      },
      pro: {
        name: 'Pro',
        badge: 'Próximamente',
        price: 'Previsto',
        tagline: 'Precio y disponibilidad por anunciar.',
        points: [
          'Todo lo incluido en Free',
          'Sincronización con cifrado de extremo a extremo entre tus Mac y tu iPhone',
          'Copia de seguridad cifrada en la nube de conocimiento cero',
          'Ivy gestionado de baja latencia, opcional (con anonimización)',
          'Recetas y automatizaciones personalizadas',
        ],
        cta: 'Síguenos en GitHub',
      },
      team: {
        name: 'Team',
        badge: 'Próximamente',
        price: 'Previsto',
        tagline: 'Precio y disponibilidad por anunciar.',
        points: [
          'Todo lo incluido en Pro',
          'SSO y aprovisionamiento SCIM',
          'Políticas de seguridad, retención y registro de auditoría',
          'Soporte prioritario y SLA',
        ],
        cta: 'Habla con nosotros',
      },
    },
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
        cells: ['Whisper en el dispositivo; sin transcripción en la nube', 'Sin transcripción integrada', 'En la nube', 'En la nube', 'Sin transcripción', 'En la nube'],
      },
      'local-ai': {
        criterion: 'IA que puede ejecutarse por completo en tu dispositivo',
        cells: ['Ivy en el dispositivo u Ollama en local', 'Sin IA integrada; plugins de la comunidad', 'Solo en la nube', 'Solo en la nube', 'Sin IA integrada', 'Solo en la nube'],
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
        cells: ['Base de datos cifrada, bloqueo de carpetas con Touch ID y uso compartido con cifrado de extremo a extremo', 'Cifrado de extremo a extremo con Sync de pago', 'Cifrado en los servidores de Notion; no de extremo a extremo', 'Frase de contraseña solo para el texto seleccionado', 'Notas individuales, con Pro', ''],
      },
      'platforms': {
        criterion: 'Plataformas',
        cells: ['macOS', 'macOS, Windows, Linux, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, iOS, iPadOS, web (beta)', 'macOS, Windows, iOS'],
      },
      'price': {
        criterion: 'Precio',
        cells: ['Gratis durante el acceso anticipado', 'Gratis; Sync desde $4/mes con facturación anual', 'Gratis; la IA y las notas de reuniones requieren Business, $20/mes con facturación anual', 'Gratis hasta 50 notas; Starter $99/año', 'Gratis; Pro $29.99/año', 'Gratis con 25 créditos de notas; Pro desde €20/mes con facturación anual'],
      },
    },
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Lo primero que suele preguntarse.',
    leadHtml: 'Aquí van respuestas breves; la <a href="/docs.html">documentación</a> tiene los detalles.',
    items: [
      {
        question: '¿IndexOne es gratis?',
        answer: 'Sí, durante el acceso anticipado. La grabación local, la transcripción, las notas y las exportaciones no requieren cuenta ni pago. Los precios después del acceso anticipado se anunciarán por separado.',
      },
      {
        question: '¿Mi audio va a la nube?',
        answer: 'No. La transcripción siempre se ejecuta en tu Mac. Solo puede salir texto anonimizado, y únicamente hacia una IA en la nube que hayas elegido y autorizado.',
      },
      {
        question: '¿Qué es Ivy?',
        answer: 'Ivy es la IA de IndexOne. Pregúntale durante una reunión sin detener la grabación, o después, sobre todo lo que has grabado y escrito. Cada respuesta cita las reuniones y notas de las que procede. Ivy puede ejecutarse por completo en tu Mac, mediante Ollama en local o, tras tu consentimiento explícito, a través de un proveedor en la nube con datos anonimizados.',
      },
      {
        question: '¿Necesito conexión a internet?',
        answer: 'Una vez, para descargar un modelo de Whisper. A partir de ahí, la grabación, la transcripción, la búsqueda e Ivy en el dispositivo funcionan sin conexión. Las conexiones con IA en la nube, los conectores y el uso compartido sí necesitan conexión.',
      },
      {
        question: '¿Necesito Claude Code?',
        answer: 'Solo si lo mantienes como redactor de notas. En su lugar puedes elegir Codex, la Anthropic API, un gateway de IA compatible con OpenAI, Ollama en local o un modelo en el dispositivo.',
      },
      {
        question: '¿Qué idiomas admite?',
        answer: 'Whisper transcribe muchos idiomas. Para la IA en el dispositivo puedes elegir modelos multilingües Qwen3 o modelos Bielik, nativos en polaco.',
      },
      {
        question: '¿Por qué macOS pide permiso de grabación de pantalla y audio del sistema?',
        answer: 'Ese permiso es la forma en que macOS deja que una app escuche el audio de otras apps, es decir, a las demás personas de la llamada. IndexOne solo guarda audio.',
      },
      {
        question: '¿Funciona con auriculares y en Mac con Intel?',
        answer: 'Sí, en ambos casos. El audio del otro lado se captura del sistema, no de tus altavoces, y la app es universal. Los modelos grandes en el dispositivo funcionan mejor en Apple Silicon.',
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

export default content
