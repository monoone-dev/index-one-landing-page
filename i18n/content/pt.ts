import type { SiteContent } from './types'

const content: SiteContent = {
  meta: {
    home: {
      title: 'IndexOne — notas e transcrição de reuniões no Mac, com Ivy',
      description: 'Grave e transcreva reuniões no seu Mac e pergunte à Ivy, a IA no dispositivo, ao vivo ou sobre todas as chamadas. Para você ou para a sua organização.',
    },
    features: {
      breadcrumb: 'Recursos',
      title: 'Recursos — transcrição de reuniões, Ivy e notas no Mac',
      description: 'Transcrição em dois canais no Mac, Ivy durante as chamadas, perguntas sobre todas as reuniões, recibos, projetos, plugins, servidores de IA locais e Markdown.',
    },
    privacy: {
      breadcrumb: 'Privacidade',
      title: 'Privacidade no IndexOne — IA local e o que sai do seu Mac',
      description: 'Transcrição e IA no dispositivo, biblioteca criptografada, pastas bloqueadas com Touch ID e firewall de anonimização. Veja o que cada IA envia, e quando.',
    },
    pricing: {
      breadcrumb: 'Preços',
      title: 'Preços do IndexOne comparados a Obsidian, Notion e outros',
      description: 'O IndexOne é gratuito no Mac; planos na nuvem opcionais a partir de 49 PLN/mês. Compare com Obsidian, Notion, Evernote, Bear e Amie em gravação, transcrição, IA no dispositivo e Markdown.',
    },
    changelog: {
      breadcrumb: 'Novidades',
      title: 'Novidades do IndexOne — notas de versão do app para Mac',
      description: 'As notas de cada versão do IndexOne para Mac, da mais recente para a mais antiga: novidades da Ivy, organizações e privacidade, correções e downloads.',
    },
    ogImageAlt: 'IndexOne — notas e transcrição de reuniões no Mac, com Ivy',
  },
  common: {
    skipToContent: 'Pular para o conteúdo',
    homeAria: 'Página inicial do IndexOne',
    primaryNav: 'Principal',
    footerNav: 'Rodapé',
    language: 'Idioma',
  },
  nav: {
    features: 'Recursos',
    privacy: 'Privacidade',
    pricing: 'Preços',
    compare: 'Comparar',
    faq: 'Perguntas frequentes',
    docs: 'Documentação',
    github: 'GitHub',
    changelog: 'Novidades',
    download: 'Baixar',
  },
  theme: {
    label: 'Tema',
    skinsGroup: 'Tema',
    modesGroup: 'Modo',
    skins: {
      studio: { label: 'Studio', description: 'Céu sobre névoa, gradiente suave' },
      paper: { label: 'Paper', description: 'Pergaminho quente, feito para leitura' },
      minimalist: { label: 'Minimalist', description: 'shadcn/ui puro, neutro' },
    },
    modes: { light: 'Claro', dark: 'Escuro', system: 'Sistema' },
  },
  hero: {
    badgeLocal: 'Local-first · macOS',
    badgeIvy: 'Ivy no dispositivo',
    badgeStar: 'Dê uma estrela no GitHub',
    githubAria: 'IndexOne no GitHub',
    titleStrong: 'Notas de reunião com a Ivy —',
    titleSoft: 'e você decide onde ela roda.',
    subHtml: 'O IndexOne grava suas chamadas e as transcreve <b>no seu Mac</b>. Pergunte à Ivy ao vivo, no meio da reunião, e sobre tudo o que você já gravou. Rode a IA no Mac ou no seu próprio servidor de IA local, ou ative de forma explícita a <b>IA na nuvem com anonimização</b>. No espaço On this Mac, seu arquivo de reuniões continua no seu Mac.',
    download: 'Baixar para macOS',
    privacyCta: 'Veja como funciona a privacidade',
    note: 'Assinado e notarizado · macOS 13.4+ · Apple Silicon (M1 ou posterior) · suas notas continuam em Markdown, e são suas',
    videoLabel: 'Um tour de 90 segundos pelo IndexOne: uma reunião sendo gravada enquanto uma nota é digitada ao lado, a nota escrita depois e os itens que ela extrai, a linha do tempo de quem fala, uma pergunta feita à Ivy sobre todo o acervo e respondida com fontes, o grafo de conhecimento, a barra de Workspaces e a busca no dispositivo, um projeto, Pessoas, e um Workspace que se recusa a abrir porque está selado',
    play: 'Assista ao tour de 90 segundos',
  },
  trust: {
    aria: 'Em resumo',
    items: ['Transcrição no dispositivo', 'Bloqueio com Touch ID em repouso', 'Sem nuvem obrigatória', 'Markdown simples que é seu'],
  },
  unique: {
    eyebrow: 'Só no IndexOne',
    title: 'O que nenhum outro app de notas faz pelas suas reuniões.',
    lead: 'Muitos apps guardam notas ou transcrevem chamadas. O IndexOne grava os dois lados da chamada no seu Mac, deixa você perguntar à Ivy durante a reunião e comprova cada linha que escreve.',
    items: {
      'live': {
        title: 'Pergunte à Ivy no meio da reunião — e mantenha tudo no seu Mac',
        body: 'Digite ou fale uma pergunta no meio da chamada e receba uma resposta baseada em todas as reuniões que você gravou, com fontes que você pode abrir; a gravação nunca pausa. Escolha Ivy on this Mac e nenhum texto de reunião sai do seu Mac; o Claude Code e o Codex ficam desligados até você consentir uma vez.',
        link: 'Como a Ivy funciona',
      },
      'capture': {
        title: 'Os dois lados da chamada, transcritos no seu Mac',
        body: 'Seu microfone e o áudio do sistema dos outros participantes são capturados como dois canais e unidos pelo Whisper no dispositivo em uma transcrição Me / Others. No espaço On this Mac não existe transcrição na nuvem.',
        link: 'Captura e transcrição',
      },
      'receipts': {
        title: 'Toda afirmação tem um recibo',
        body: 'Cada linha embasada de uma nota leva ao segundo exato do áudio de onde veio, com quem falou. Linhas sem evidência ficam sem recibo, então você vê o que está verificado.',
        link: 'Recibos',
      },
      'security': {
        title: 'Criptografado no seu Mac',
        body: 'Toda a sua biblioteca é criptografada com SQLCipher no Mac. Personal e cada organização de que você faz parte também guardam aqui uma cópia criptografada, então abrem sem conexão de rede.',
        link: 'Segurança e privacidade',
      },
      'locks': {
        title: 'Pastas seladas com Touch ID',
        body: 'Bloqueie um Workspace ou uma pasta e as notas, transcrições e áudios dentro dela são selados com AES-256-GCM. Enquanto estiver bloqueada, ela fica invisível para a busca, o grafo, o MCP e o player de áudio.',
        link: 'O modelo de bloqueio',
      },
      'markdown': {
        title: 'Markdown simples e um servidor MCP local',
        body: 'As notas vão para o seu vault do Obsidian em Markdown simples com wikilinks, e um servidor MCP somente leitura em 127.0.0.1 permite que o Claude e outros agentes as consultem. Você escolhe quais espaços ele pode ler; as organizações ficam desligadas até você ativá-las.',
        link: 'Markdown e MCP',
      },
    },
    seeAll: 'Ver todos os recursos',
  },
  how: {
    eyebrow: 'Como funciona',
    title: 'Gravar → entender → perguntar. Local-first desde a concepção.',
    lead: 'Um único pipeline local-first transforma uma chamada ao vivo em memória pesquisável. A transcrição fica no seu Mac; a Ivy pode rodar localmente ou, com seu consentimento explícito, usar processamento na nuvem com anonimização.',
    steps: [
      {
        label: '01 · Gravar',
        title: 'Ouve a chamada inteira',
        body: 'Seu microfone <b>e</b> o áudio do sistema do outro lado, capturados e transcritos separadamente, depois unidos pelo Whisper no dispositivo em uma transcrição limpa <b>Me / Others</b>.',
      },
      {
        label: '02 · Entender',
        title: 'A Ivy, no seu Mac',
        body: 'Um modelo de raciocínio roda localmente sobre um índice semântico de tudo o que você gravou — escrevendo uma nota estruturada e mantendo a memória pesquisável para sempre.',
      },
      {
        label: '03 · Perguntar',
        title: 'Respostas ao vivo, com fontes',
        body: 'Pergunte à Ivy no meio da reunião e receba uma resposta embasada, com <b>fontes</b> — ou pergunte depois sobre meses de chamadas. A gravação nunca para.',
      },
    ],
  },
  privacy: {
    lifecycle: {
      "title": "Ciclo de vida dos dados · planos na nuvem",
      "items": [
        {
          "title": "Durante quanto tempo são guardados os dados?",
          "body": "O áudio na nuvem é mantido por 30 dias por padrão, com até 90 dias previstos para Personal e Team dentro do limite de armazenamento. Notas, transcrições e arquivos comuns permanecem até que o proprietário os exclua, dentro do limite de armazenamento."
        },
        {
          "title": "O que acontece ao mudar para um plano inferior?",
          "body": "O cancelamento entra em vigor no fim do período pago. Leitura, exportação e eliminação continuam disponíveis com permissão de acesso."
        },
        {
          "title": "Quem guarda os dados quando saio da organização?",
          "body": "O conteúdo da organização permanece na organização. Sair ou perder acesso impede a leitura e a exportação."
        }
      ]
    },
    eyebrow: 'Segurança e privacidade',
    title: 'Privacidade não é uma configuração. É a arquitetura.',
    leadHtml: 'No espaço On this Mac, a transcrição, a busca e a Ivy on this Mac podem funcionar <b>sem nenhuma rede</b> — depois que você desligar as duas coisas que se conectam para fora por padrão: uma verificação de nova versão ao abrir o app e uma mensagem diária de uso. Se você escolher o Claude Code ou o Codex, o consentimento e um firewall de anonimização ficam na frente dessa saída de dados.',
    cards: {
      'offline': {
        title: 'Nada sai do dispositivo',
        body: 'Com a Ivy on this Mac e um modelo baixado uma única vez, seus áudios e transcrições nunca tocam a rede. O raciocínio acontece no seu Mac.',
      },
      'at-rest': {
        title: 'Duas camadas de criptografia em repouso',
        body: 'Todo o banco de dados é criptografado com SQLCipher. Por cima, um bloqueio <b>AES-256-GCM</b> por pasta adiciona chaves de conteúdo protegidas por uma chave mestra liberada apenas pelo <b>Touch ID</b>.',
      },
      'gated': {
        title: 'Toda leitura passa por um controle',
        body: 'Uma pasta selada e bloqueada não vaza nada — nem no app, nem na busca, no grafo, no MCP ou mesmo no caminho do áudio. Reuniões bloqueadas aparecem simplesmente como <b>Locked</b> (bloqueada).',
      },
      'seals': {
        title: 'Os selos verificam antes de apagar',
        body: 'O IndexOne comprova que o texto cifrado volta a ser decifrado <b>antes</b> de apagar o texto original — o conteúdo nunca se perde, e o bloqueio é totalmente reversível.',
      },
      'screen-share': {
        title: 'Atento ao compartilhamento de tela',
        body: 'Um monitor pode rebloquear automaticamente as pastas seladas e apagar a chave em cache assim que detecta um compartilhamento de tela — para que uma tela compartilhada não exponha notas privadas.',
      },
      'firewall': {
        title: 'Firewall de anonimização',
        body: 'Se um dia você ativar um resumidor na nuvem, e-mails, números parecidos com cartões e números de telefone são removidos antes — e a saída para a nuvem é <b>fail-closed</b> (bloqueada por padrão), protegida por um consentimento único. Baixe o modelo opcional de mascaramento de nomes e os nomes das pessoas também são substituídos.',
      },
      'update-check': {
        title: 'As duas chamadas que fazemos por padrão',
        body: 'Ao abrir, o IndexOne pergunta ao GitHub se existe uma versão mais nova; a requisição informa qual versão você está usando, e nada mais. Uma vez por dia, ele também envia uma pequena mensagem de uso: um ID de instalação aleatório, as versões do app e do macOS, o tipo de chip, o idioma e se você está conectado — nada de reuniões, notas, gravações ou nomes. Ela só é anônima enquanto você não está conectado; quando você está conectado, é enviada com a sua conta. Você pode desligar qualquer uma delas em <b>Settings → Privacy</b>. São as únicas coisas nesta página que acontecem sem você pedir, e é exatamente por isso que elas estão nesta página.',
      },
    },
    tableCaption: 'Onde cada provedor de IA roda e se o texto das reuniões sai do seu Mac',
    tableHeaders: ['Ivy / provedor', 'Onde roda', 'O texto das reuniões sai do seu Mac?'],
    providers: {
      'on-device': { name: 'Ivy on this Mac', note: 'Bielik / Qwen', where: 'Totalmente local' },
      'ivy-web': { name: 'Ivy on the web', note: 'Personal e organizações', where: 'IndexOne na web', leaves: 'Sim — o próprio espaço fica na web' },
      'claude-code': { name: 'Claude Code', where: 'CLI local → nuvem' },
      'codex': { name: 'Codex', note: 'a CLI da OpenAI, rodando sem ferramentas', where: 'CLI local → nuvem' },
      'local-server': { name: 'Local AI server', note: 'Ollama, LM Studio, oMLX e outros', where: 'Seu Mac ou sua rede', leaves: 'Não com um servidor neste Mac. Para um servidor em outro lugar da sua rede, só depois de você confirmar o endereço; os nomes são mascarados antes' },
    },
    leavesYes: 'Só após consentimento, com o firewall de anonimização aplicado',
    leavesNo: 'Não',
    shotAlt: 'Configurações de privacidade do IndexOne, explicando em linguagem simples o que é removido antes de qualquer texto sair, quais provedores são na nuvem e se o processamento na nuvem foi permitido',
    footnote: 'O IndexOne diz, em linguagem simples, exatamente o que sai do seu Mac — e cada chamada de IA na nuvem é registrada e mostrada para você. Cada espaço tem uma única escolha de IA: Ivy on this Mac, Ivy on the web, Claude Code, Codex ou seu próprio servidor de IA local. No espaço On this Mac, as reuniões ficam no seu Mac, a menos que você escolha o Claude Code, o Codex ou um servidor de IA local em outro lugar da sua rede.',
  },
  features: {
    eyebrow: 'O que você ganha',
    title: 'Uma ferramenta de reuniões que realmente lembra.',
    lead: 'Um armazenamento criptografado, três formas de usar — o app, um servidor MCP local e seus arquivos Markdown exportados. Uma árvore guarda tudo, os projetos ficam por cima dela, e a Ivy lê tudo.',
    items: {
      'workspaces': {
        eyebrow: 'Workspaces',
        title: 'Uma árvore para tudo',
        body: 'Uma única árvore — <b>Workspaces › pastas › suas gravações e notas</b> — em uma barra lateral que se recolhe em uma faixa estreita quando você quer mais espaço. Bloqueie um Workspace e tudo o que está dentro dele é selado junto.',
        points: [
          'Gravações, notas, tarefas e projetos ficam guardados no mesmo lugar',
          'Um Workspace selado mostra o nome e mais nada — sem contagens, sem conteúdo',
          'Peça à Ivy para arquivar uma gravação perdida para você',
          'Apagou sem querer? A lixeira guarda por 30 dias — ou pelo tempo que você definir, até um ano',
        ],
        alt: 'A barra lateral de Workspaces: uma árvore de Workspaces e pastas com gravações, notas e projetos, e um Workspace bloqueado no final',
      },
      'dashboards': {
        eyebrow: 'Projetos',
        title: 'Projetos que você monta',
        body: 'Traga notas, gravações, documentos, pessoas, registros de compromissos e lembretes para um projeto e leia tudo pelas lentes <b>Brief / Overview / Commitments / Sources / People</b>. Fixe uma <b>resposta viva</b> — uma pergunta salva cuja última resposta fica guardada com a data, é respondida de novo quando você pede e é ocultada assim que as fontes deixam de ser legíveis. Você pode fazer perguntas diretamente a um projeto, com respostas baseadas só no que está nele.',
        points: [
          'Sete tipos de bloco — uma nota, uma gravação, um documento, uma pessoa, um registro de compromissos, uma lista de lembretes ou uma resposta viva',
          'Cinco lentes sobre os mesmos blocos — sem cópia de nada',
          'Um projeto declara os próprios limites: o que ele pode ler e o que ele deduziu',
        ],
        alt: 'Um projeto na lente Brief: a resposta salva a uma pergunta fixada, o que precisa de atenção e as evidências recentes por trás disso',
      },
      'imports': {
        eyebrow: 'Importações',
        title: 'Traga as notas que você já tem',
        body: 'Settings → Imports traz uma <b>exportação do Notion</b>, um <b>vault do Obsidian</b>, o <b>Apple Notes</b>, uma pasta de <b>arquivos Markdown</b> ou um <b>backup do IndexOne</b>. Tudo offline — sem conta, sem chave, sem chamada de rede. Toda importação começa como simulação, para você ver o que ela gravaria antes de gravar qualquer coisa.',
        points: [
          'Cinco fontes: uma exportação do Notion, um vault do Obsidian, o Apple Notes, uma pasta de arquivos Markdown e um backup do IndexOne',
          'Simulação primeiro — nada é gravado até você confirmar',
          'As notas importadas ficam em uma pasta própria com nome, e a Ivy as lê como todo o resto',
        ],
        alt: 'Settings → Imports: Notion, Obsidian, Apple Notes, arquivos Markdown e backup do IndexOne, com o aviso de que tudo acontece neste Mac e nada é enviado',
      },
      'ivy': {
        eyebrow: 'Ivy',
        title: 'Converse com a Ivy — durante a reunião.',
        body: 'É isso que a maioria dos apps de anotações não tem. Chame a Ivy com uma frase de ativação ou um único toque; ela responde a partir da memória das suas reuniões, ao vivo, com citações que você pode abrir — e a gravação nunca para.',
        points: [
          'Modelo de raciocínio no dispositivo (Bielik-11B, Qwen) via Metal',
          'Embasada, não inventada — buscada nas suas próprias transcrições',
          'Web opcional, só com consentimento — desligada por padrão',
        ],
        alt: 'Uma gravação em andamento com uma pergunta feita no meio da reunião, respondida ao vivo pela Ivy com as fontes que ela usou',
      },
      'ask': {
        eyebrow: 'Pergunte ao seu acervo',
        title: 'Pergunte sobre meses de chamadas.',
        body: 'A Ivy de novo, agora apontada para tudo o que você já gravou e escreveu. Cada resposta vem com as reuniões e notas de onde saiu, para você abrir a fonte em vez de confiar cegamente.',
        points: [
          'Restrinja uma pergunta a um Workspace ou pasta — toda a subárvore, e nada fora dela',
          'As conversas ficam guardadas — threads do acervo, das notas e das reuniões persistem, com um histórico navegável em cada tela',
          'Uma conversa some no instante em que qualquer pasta usada por ela deixa de ser legível',
          'Seu próprio modelo: notas e respostas podem vir do Ollama, LM Studio, oMLX, llama.cpp ou de qualquer servidor compatível com OpenAI',
        ],
        alt: 'Uma pergunta à Ivy sobre meses de reuniões, com uma única resposta e a lista das reuniões de onde ela saiu logo abaixo',
      },
      'transcription': {
        eyebrow: 'Captura e transcrição',
        title: 'Ele ouve os dois lados da chamada.',
        body: 'A gravação em dois canais captura seu microfone e o áudio do sistema do outro lado, transcreve cada um de forma independente no dispositivo e os une pelo horário real em uma transcrição limpa Me / Others, com legendas ao vivo enquanto você fala.',
        points: [
          'Whisper no dispositivo — do tiny ao large-v3, incluindo a versão turbo mais rápida, além de variantes quantizadas',
          'Atribuição em dois canais: você e todos os outros, mais detecção de atividade de voz',
          'Uma barra de gravação flutuante — grave de qualquer lugar (⌘⇧R)',
        ],
        alt: 'A transcrição unificada Me / Others, indexada por tempo, ao lado da linha do tempo de quem fala e dos assuntos',
      },
      'memory': {
        eyebrow: 'Notas e memória',
        title: 'Notas estruturadas e um grafo que se monta sozinho.',
        body: 'Cada chamada vira uma nota limpa — resumo, decisões, próximos passos, citações. Gravações e notas ficam lado a lado no mesmo Workspace. Pessoas e projetos são extraídos automaticamente para um grafo de conhecimento, e os Workspaces selados ficam ocultos dele.',
        points: [
          'Pergunte sobre todas as reuniões com busca semântica híbrida',
          'Dossiês de entidades, reuniões relacionadas, resumos semanais',
          'Lembretes privados que nunca saem do Mac, cada um ligado à gravação ou nota de onde veio — a Ivy sugere, você aceita',
          'Os próximos passos também podem ir para o Apple Reminders',
          'Alimente com PDFs, documentos do Office, páginas web e imagens — indexados para a Ivy, no dispositivo',
        ],
        alt: 'O grafo de conhecimento — reuniões, notas, documentos e pessoas em um único mapa, com ligações tipadas entre eles',
      },
      'receipts': {
        eyebrow: 'Recibos',
        title: 'Toda afirmação leva de volta à gravação.',
        body: 'As notas do IndexOne não pedem que você confie nelas. Cada linha baseada no que foi realmente dito traz um recibo — clique nele para ir direto àquele segundo do áudio, com quem falou. Linhas parafraseadas ou sem embasamento ficam sem recibo, então você vê de relance o que está verificado.',
        points: [
          'Clique em uma afirmação e ouça exatamente de onde ela veio',
          'Quem falou e o segundo exato em cada recibo',
          'Sete documentos com um clique a partir de qualquer reunião — e-mail de follow-up, registro de decisões, ticket de trabalho, resumo de 1:1, standup, resumo de vendas, notas de entrevista',
          'Pastas seladas nunca vazam horários nem quem falou',
        ],
        alt: 'Os recibos de uma nota gerada: uma linha por afirmação embasada, cada uma com quem falou e o segundo do áudio de onde veio',
      },
      'markdown': {
        eyebrow: 'Seu para sempre',
        title: 'Markdown simples. Sem aprisionamento.',
        body: 'Cada nota também é exportada como Markdown atômico — front-matter em YAML, <code>[[wikilinks]]</code>, links diretos para blocos e uma opção de quadro canvas. São só arquivos comuns que são seus e abrem em qualquer editor.',
        points: [
          'Um banco de dados SQLite criptografado é a única fonte da verdade',
          'Um servidor MCP local somente leitura para o Claude Desktop e o Claude Code',
          'Exportações em Markdown simples que abrem em qualquer editor',
        ],
        alt: 'Uma nota estruturada — resumo, decisões, próximos passos e citações — ao lado das gravações e notas às quais ela se liga',
      },
      'notes': {
        eyebrow: 'Notas',
        title: 'Não só notas de reunião. Todas as suas notas.',
        body: 'Um editor Markdown completo, guardado nos mesmos Workspaces das suas gravações — para tudo o que você escreve, não só o que o IndexOne transcreve. Selecione qualquer trecho e o menu da Ivy aparece: refinar, encurtar, mudar o tom, traduzir, checar fatos ou simplesmente digitar o que você quer.',
        points: [
          'Dezenove ações da Ivy, a um atalho de distância',
          'Baseadas nas suas próprias reuniões e notas, não em palpites do modelo',
          'Cole capturas de tela nas notas; elas ficam locais e seguem o bloqueio do Workspace',
          'As Ivy skills da tela Plugins orientam as notas e respostas da Ivy na nuvem — escolha-as na janela da Ivy, numa nota ou na barra de gravação',
        ],
        alt: 'O editor de notas com um trecho selecionado e o menu de comandos da Ivy aberto, mostrando Refine, Shorten, Change tone e outras ações',
      },
    },
  },
  offer: {
    "web": "Abrir aplicação web",
    "status": "Os planos na nuvem estão à venda. Entre no app web para comprar um plano ou gerenciar sua assinatura. Os recursos locais do Mac continuam disponíveis.",
    "monthly": "Mensal, em PLN",
    "tax": "Personal inclui impostos. Team sem impostos: mínimo 2 lugares = 150 PLN líquidos/mês. Com IVA de 23%: 184,50 PLN no total (92,25 por lugar). O imposto pode variar; a aplicação deve mostrar o total antes da compra.",
    "trialTitle": "Grátis todo mês",
    "trial": "Cada conta pessoal gratuita recebe a cada mês civil (UTC) 200.000 unidades Ivy e 2 horas de transcrição na nuvem, sem cartão. Os recursos locais do Mac não têm limite de plano.",
    "meterTitle": "Como a transcrição é contada",
    "meter": "A transcrição na nuvem conta pelo menos 20 minutos por gravação, pelo que trinta gravações de 2 minutos consomem as dez horas de Personal. A transcrição local e as transcrições existentes não consomem esta quota.",
    "privacyTitle": "Local e nuvem",
    "privacy": "O processamento local do Mac fica no Mac. A nuvem padrão armazena e processa conteúdo em servidores legíveis pelo operador, sem criptografia de ponta a ponta. Mascarar padrões não é anonimização completa. Um plano não concede acesso a espaços privados.",
    "after": "O Free inclui notas básicas, edição, pesquisa comum, sincronização, leitura e exportação até 1 GB, além da cota mensal na nuvem. Os planos pagos acrescentam mais IA, transcrição e armazenamento na nuvem.",
    "team": "Personal e cada organização têm assinaturas e saldos separados. Team: 2,25 milhões de unidades Ivy interativas e 250.000 de automação por lugar; automações usam um fundo comum. ASR por lugar, armazenamento compartilhado. Lugares não alteram permissões. Até 2 organizações gratuitas de 5 membros compartilham o armazenamento da conta fundadora.",
    "lifecycle": "Áudio na nuvem: padrão de 30 dias; Free 7/14/30, pagos também 90. Lixeira: 30 dias. Cancelar não apaga conteúdo; direitos pagos até o fim do período. Redução acima da cota: leitura/exportação e 90 dias de proteção. Exporte áudio antes de expirar.",
    "docs": "Planos e cobrança · documentação em inglês",
    "comparison": "Comparar planos",
    "local": "Ferramentas locais do Mac",
    "basics": "Notas básicas e sincronização na nuvem",
    "ivy": "Unidades Ivy na nuvem / mês",
    "asr": "ASR faturado na nuvem / mês",
    "storage": "Armazenamento na nuvem",
    "included": "Incluído",
    "once": "Uma avaliação",
    "seat": "por lugar",
    "unit": "Unidades Ivy são um orçamento de processamento, não tokens brutos nem um número garantido de respostas. GB = um bilhão de bytes."
},
  pricing: {
    "eyebrow": "Mensal, em PLN",
    "title": "Escolha onde trabalhar.",
    "lead": "Free no Mac. Nuvem opcional com limites claros.",
    "plans": {
        "free": {
            "name": "Free",
            "badge": "Disponível no Mac",
            "price": "0 PLN",
            "per": "Mensal, em PLN",
            "tagline": "Trabalho local sem limite de plano; limites do hardware se aplicam.",
            "points": [
                "Ferramentas locais do Mac",
                "Notas básicas e sincronização na nuvem",
                "1 GB",
                "200k Ivy · 2 h ASR"
            ],
            "cta": ""
        },
        "personal": {
            "name": "Personal",
            "badge": "Disponível",
            "price": "49 PLN",
            "per": "impostos incluídos / mês",
            "tagline": "Para seu espaço pessoal na nuvem.",
            "points": [
                "Ferramentas locais do Mac",
                "Notas básicas e sincronização na nuvem",
                "20 GB",
                "1.2M Ivy · 10 h ASR",
                "Gravações de tela na nuvem"
            ],
            "cta": "Comprar no app web"
        },
        "team": {
            "name": "Team",
            "badge": "Disponível",
            "price": "75 PLN",
            "per": "líquidos / lugar / mês",
            "tagline": "Para organizações, a partir de dois lugares.",
            "points": [
                "Ferramentas locais do Mac",
                "Notas básicas e sincronização na nuvem",
                "50 GB · por lugar",
                "2.5M Ivy · 15 h ASR",
                "Bot do Google Meet",
                "Gravações de tela na nuvem"
            ],
            "cta": "Comprar no app web"
        }
    }
},
  compare: {
    eyebrow: 'Concorrência',
    title: 'Como o IndexOne se compara.',
    lead: 'Obsidian, Notion, Evernote, Bear e Amie são ótimos no que fazem. O IndexOne foi feito para o que acontece em uma reunião — gravar, transcrever no seu Mac e fazer perguntas sobre ela — e também pode escrever no seu vault do Obsidian.',
    capability: 'Recurso',
    caption: 'IndexOne comparado com outros apps de notas',
    labels: { yes: 'Sim', partial: 'Em parte', no: 'Não', unknown: 'Desconhecido' },
    notStated: 'Não informado',
    footnote: 'Com base nas páginas públicas de preços e recursos de cada fornecedor, verificadas em outubro de 2026. Planos e recursos mudam — confira o site do fornecedor antes de decidir. Os nomes dos produtos são marcas de seus respectivos donos; o IndexOne não tem vínculo com eles.',
    rows: {
      'capture': {
        criterion: 'Grava os dois lados de uma chamada',
        cells: ['Microfone e áudio do sistema, em dois canais', 'Só microfone (gravador de áudio nativo)', 'App desktop; só microfone no navegador', 'Gravador de reuniões no desktop', 'Sem gravação', 'Desktop, sem bot'],
      },
      'local-transcription': {
        criterion: 'Transcrição no seu dispositivo',
        cells: ['Whisper no dispositivo no espaço On this Mac', 'Sem transcrição integrada', 'Nuvem', 'Nuvem', 'Sem transcrição', 'Nuvem'],
      },
      'local-ai': {
        criterion: 'IA que pode rodar totalmente no seu dispositivo',
        cells: ['Ivy on this Mac ou seu próprio servidor de IA local', 'Sem IA integrada; plugins da comunidade', 'Só na nuvem', 'Só na nuvem', 'Sem IA integrada', 'Só na nuvem'],
      },
      'ask-all': {
        criterion: 'Perguntas sobre todas as reuniões e notas anteriores',
        cells: ['As respostas citam as fontes', 'Só plugins da comunidade', 'Plano Business; cita as fontes', 'AI Assistant nas notas; IA de reunião por gravação', '', 'Chat sobre gravações anteriores no Pro; citações não informadas'],
      },
      'local-data': {
        criterion: 'Dados ficam no seu dispositivo por padrão',
        cells: ['', 'Arquivos locais', 'Nuvem do Notion', 'Nuvem do Evernote', 'Banco de dados local; sincronização via iCloud com Pro', 'Nuvem da Amie'],
      },
      'markdown': {
        criterion: 'Notas como arquivos Markdown simples que são seus',
        cells: ['Escritas no seu vault; a fonte é o banco de dados criptografado', '', 'Só exportação em Markdown', 'Exportação em ENEX, HTML ou PDF', 'Banco de dados; exportação em Markdown', ''],
      },
      'encryption': {
        criterion: 'Criptografia sob seu controle',
        cells: ['Banco de dados criptografado, pastas bloqueadas com Touch ID, uma cópia local criptografada de cada espaço da web', 'Criptografia de ponta a ponta no Sync pago', 'Criptografado nos servidores do Notion; não é de ponta a ponta', 'Senha só para trechos de texto selecionados', 'Notas individuais, com Pro', ''],
      },
      'platforms': {
        criterion: 'Plataformas',
        cells: ['macOS', 'macOS, Windows, Linux, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, iOS, iPadOS, web (beta)', 'macOS, Windows, iOS'],
      },
      'price': {
        criterion: 'Preço',
        cells: ['Grátis no Mac; nuvem Personal 49 PLN/mês, Team 75 PLN líquidos por lugar', 'Grátis; Sync a partir de $4/mês no plano anual', 'Grátis; IA e notas de reunião exigem o Business, $20/mês no plano anual', 'Grátis até 50 notas; Starter $99/ano', 'Grátis; Pro $29.99/ano', 'Grátis com 25 créditos de notas; Pro a partir de €20/mês no plano anual'],
      },
    },
  },
  faq: {
    eyebrow: 'Perguntas frequentes',
    title: 'O que as pessoas perguntam primeiro.',
    leadHtml: 'Respostas curtas aqui; a <a href="/docs/">documentação</a> tem os detalhes.',
    items: [
      {
        question: 'O IndexOne é gratuito?',
        answer: 'Sim, no Mac. Gravação local, transcrição, notas e exportações não exigem conta nem pagamento. Planos na nuvem opcionais (Personal 49 PLN/mês, Team 75 PLN líquidos por lugar) adicionam transcrição na nuvem, Ivy na nuvem e mais armazenamento.',
      },
      {
        question: 'Meu áudio vai para a nuvem?',
        answer: 'Não no espaço On this Mac: lá a transcrição roda no seu Mac com o Whisper. Só texto pode sair: anonimizado, para o Claude Code ou o Codex depois que você consentir, ou com os nomes mascarados, para um servidor de IA local na sua rede depois que você confirmar o endereço. Os espaços Personal e de organizações ficam no IndexOne na web, então as gravações deles são guardadas lá.',
      },
      {
        question: 'O que é a Ivy?',
        answer: 'A Ivy é a IA do IndexOne. Pergunte a ela durante uma reunião sem parar a gravação, ou depois, sobre tudo o que você gravou e escreveu. Cada resposta cita as reuniões e notas de onde veio. Cada espaço escolhe uma IA: Ivy on this Mac, Ivy on the web para Personal e organizações, seu próprio servidor de IA local, ou o Claude Code ou o Codex após consentimento explícito.',
      },
      {
        question: 'Preciso de conexão com a internet?',
        answer: 'Uma vez, para baixar um modelo do Whisper. Depois disso, gravação, transcrição, busca e a Ivy on this Mac funcionam offline. Os espaços Personal e de organizações abrem offline a partir da cópia criptografada e enviam suas edições quando você volta a ficar online. Ivy on the web, Claude Code, Codex e conectores precisam de internet.',
      },
      {
        question: 'Preciso do Claude Code?',
        answer: 'Não. Cada espaço tem uma única escolha de IA: Ivy on this Mac, Ivy on the web (Personal e organizações), Claude Code, Codex ou seu próprio servidor de IA local, como Ollama, LM Studio, oMLX ou llama.cpp.',
      },
      {
        question: 'Quais idiomas são suportados?',
        answer: 'O Whisper transcreve muitos idiomas. Para IA no dispositivo, você pode escolher modelos Qwen3 multilíngues ou modelos Bielik nativos em polonês. O plugin Languages escreve cada nota no idioma que você escolher, pode adicionar um segundo idioma, traduz reuniões depois e mantém um glossário de nomes e termos.',
      },
      {
        question: 'Por que o macOS pede permissão de Gravação de Tela e Áudio do Sistema?',
        answer: 'É com essa permissão que o macOS deixa um app ouvir o áudio de outros apps — as outras pessoas na chamada. O IndexOne salva apenas o áudio.',
      },
      {
        question: 'Funciona com fones de ouvido e em Macs Intel?',
        answer: 'Com fones de ouvido, sim: o áudio do outro lado é capturado do sistema, não dos seus alto-falantes. Em Macs Intel, não: o IndexOne precisa de um Mac com Apple Silicon (M1 ou posterior).',
      },
      {
        question: 'O IndexOne é open source?',
        answer: 'Não. O app é gratuito para baixar e usar, mas o código-fonte não é público. As versões 2.8.0 e anteriores foram publicadas originalmente sob a GNU AGPL-3.0, enquanto o código-fonte delas era público.',
      },
    ],
  },
  changelog: {
    eyebrow: 'Novidades',
    title: 'Novidades do IndexOne',
    lead: 'Cada versão do app para macOS, da mais recente para a mais antiga. Baixe a versão mais recente ou veja todas as compilações e checksums no GitHub.',
    download: 'Baixar a mais recente',
    github: 'Todas as versões no GitHub',
    latest: 'Mais recente',
    englishNote: 'As notas de versão são publicadas em inglês.',
    versions: 'Versões',
    filterLabel: 'Mostrar versões',
    filters: { all: 'Todas', features: 'Novidades', fixes: 'Correções' },
    kinds: { major: 'Versão principal', minor: 'Novidades', patch: 'Correções' },
    count: { one: '{count} versão', other: '{count} versões' },
    showOlder: 'Ver versões anteriores',
    empty: 'Nenhuma versão deste tipo.',
  },
  cta: {
    title: 'Leve a Ivy às suas reuniões — e mantenha o controle no seu Mac.',
    lead: 'Local-first para macOS. Mantenha a IA local ou ative de forma explícita a IA na nuvem com anonimização, quando quiser.',
    compare: 'Veja como ele se compara com Obsidian, Notion, Evernote, Bear e Amie.',
    download: 'Baixar para macOS',
    github: 'Ver no GitHub',
    legacyHtml: 'Usa a versão 2.8.0 ou anterior? A verificação de atualizações dela não consegue mais nos alcançar. Baixe a <a href="{download}">versão mais recente</a> uma vez e arraste para Aplicativos, substituindo a cópia antiga; sua biblioteca, gravações e configurações continuam onde estão. A partir da 2.9.0, o app encontra novas versões sozinho.',
  },
  footer: {
    legalHtml: 'macOS em primeiro lugar · Ivy no dispositivo · local-first · feito com Tauri, Angular e Rust · grátis para macOS · © {year} <a href="{authors}">MonoOne</a> · textos <a href="{license}">CC BY 4.0</a>',
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
content.faq.items[0] = { question: "O que o Free inclui?", answer: content.offer.after }
content.faq.items.push(
  { question: content.offer.trialTitle, answer: content.offer.trial },
  { question: content.offer.meterTitle, answer: content.offer.meter },
  { question: content.offer.privacyTitle, answer: content.offer.privacy },
  { question: "Quem paga Team?", answer: content.offer.team },
  ...content.privacy.lifecycle.items.map(item => ({ question: item.title, answer: item.body })),
)
content.compare.rows.price.cells[0] = 'Free · Personal 49 PLN · Team 75 PLN'

export default content
