import type { SiteContent } from './types'

const content: SiteContent = {
  meta: {
    home: {
      title: 'IndexOne — notas de reunião privadas com IA no seu Mac',
      description: 'Grave os dois lados de uma chamada no seu Mac sem bot, transcreva no seu Mac, pergunte à Ivy e confira as notas com a gravação. Grátis no Mac; seus espaços na nuvem abrem em qualquer navegador.',
    },
    features: {
      breadcrumb: 'Recursos',
      title: 'Recursos — transcrição de reuniões, Ivy e notas no Mac',
      description: 'Transcrição em dois canais no Mac, Ivy durante as chamadas, perguntas sobre todas as reuniões, recibos, projetos, plugins, servidores de IA locais e exportação em Markdown.',
    },
    privacy: {
      breadcrumb: 'Privacidade',
      title: 'Privacidade no IndexOne — IA local e o que sai do seu Mac',
      description: 'Transcrição e IA no dispositivo, notas e transcrições criptografadas, pastas bloqueadas com Touch ID e firewall de anonimização. Veja o que cada IA envia, e quando.',
    },
    pricing: {
      breadcrumb: 'Preços',
      title: 'Preços do IndexOne — Free, Personal e Team',
      description: 'O IndexOne é gratuito no Mac. Planos na nuvem: Personal 49 PLN por mês, Team 75 PLN líquidos por lugar, ambos com transcrição na nuvem sujeita a limites. Os planos na nuvem estão à venda no app web.',
    },
    changelog: {
      breadcrumb: 'Novidades',
      title: 'Novidades do IndexOne — notas de versão do app para Mac',
      description: 'As notas de cada versão do IndexOne para Mac, da mais recente para a mais antiga: novidades da Ivy, organizações e privacidade, correções e downloads.',
    },
    meetingBot: {
      breadcrumb: "Bot de reuniões",
      title: "Bot de reuniões do IndexOne — informações para participantes",
      description: "O bot do IndexOne está gravando uma reunião da qual você participa. Quem é responsável, o que é gravado e para quê, por quanto tempo fica guardado e como exercer seus direitos.",
    },
    ogImageAlt: 'IndexOne — notas de reunião privadas com IA no seu Mac',
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
    githubAria: 'IndexOne no GitHub',
    titleStrong: 'Cada reunião lembrada.',
    titleSoft: 'Cada frase com uma prova.',
    subHtml: 'O IndexOne grava os dois lados da chamada <b>no seu Mac sem bot</b>, transcreve <b>no seu Mac</b> e deixa você perguntar à Ivy — no meio da reunião ou meses depois — com um link para o segundo exato em que aquilo foi dito. Grátis no Mac, sem limite de minutos nem de histórico. Seus espaços na nuvem abrem em qualquer navegador.',
    download: 'Baixar para Mac — grátis',
    signup: 'Criar uma conta gratuita',
    note: 'Apple Silicon (M1 ou posterior) · macOS 13.4+ · assinado e notarizado · sem necessidade de conta no Mac',
    videoLabel: 'Um tour de 47 segundos pelo IndexOne no navegador: uma reunião sendo gravada enquanto notas são digitadas ao lado, a nota que a Ivy escreve com resumo, decisões e tarefas, a transcrição com quem disse o quê, a busca por um trecho exato, uma pergunta feita à Ivy e respondida com fontes, um Space compartilhado com toda a equipe e o convite a mais uma pessoa da equipe',
    play: 'Assista ao tour',
  },
  home: {
    announce: { badge: 'Novo', text: 'Chegou o IndexOne {version}: veja o que mudou' },
    pillars: {
      eyebrow: 'Por que IndexOne',
      title: 'Suas reuniões, lembradas. Seu Mac, no comando.',
      lead: 'Três coisas que o IndexOne faz com cada chamada, e onde cada uma é executada.',
      items: {
        capture: {
          title: 'Ouve os dois lados da chamada',
          body: 'Seu microfone e o áudio dos outros participantes são gravados como dois fluxos e transcritos no seu Mac pelo Whisper.',
          link: 'Captura e transcrição',
        },
        ivy: {
          title: 'Pergunte à Ivy, agora ou depois',
          body: 'Pergunte no meio da reunião sem parar a gravação, ou sobre meses de chamadas. Cada resposta cita as reuniões de onde veio.',
          link: 'Como a Ivy funciona',
        },
        privacy: {
          title: 'Selado com Touch ID',
          body: 'Notas e transcrições criptografadas, além de bloqueios AES-256 para qualquer Workspace ou pasta, abertos com Touch ID. Uma pasta bloqueada fica invisível para a busca, o grafo e o MCP.',
          link: 'Como a privacidade funciona',
        },
      },
      mock: {
        question: 'O que decidimos sobre a data de lançamento?',
        answer: 'O lançamento passa para 3 de março, depois da aprovação do QA.',
        sources: '2 fontes',
        folders: ['Diretoria', 'Contratação', '1:1'],
      },
    },
    stats: {
      aria: 'IndexOne em números',
      labels: [
        'fluxos de áudio por chamada: você e todos os outros',
        'contas necessárias para gravar e transcrever',
        'bloqueios com Touch ID para qualquer pasta',
        'ações da Ivy no editor de notas',
        'documentos com um clique de qualquer reunião',
        'fontes de importação, totalmente offline',
      ],
    },
    showcase: {
      eyebrow: 'Veja no app',
      title: 'Da chamada à resposta, em um só app.',
      lead: 'Grave a reunião, pergunte sobre ela e exporte-a em Markdown. Escolha uma etapa para vê-la.',
      tabsLabel: 'Tour do produto',
      tabs: { record: 'Gravar', ask: 'Perguntar', export: 'Guardar' },
      iphone: {
        eyebrow: 'iPhone',
        title: 'Suas reuniões, também no iPhone.',
        body: 'Grave uma reunião pelo celular ou traga uma gravação do app Arquivos. Ela fica no celular até você parar; depois é enviada ao seu espaço e transcrita na nuvem. A nota da Ivy e a transcrição completa abrem ali mesmo. Um app para iPhone está a caminho da App Store.',
        videoLabel: 'Um tour de 49 segundos pelo IndexOne no iPhone: a tela inicial com notas e gravações recentes, a lista de gravações, a nota da Ivy com decisões e tarefas, a transcrição separada por quem fala, uma reunião gravada pelo celular e um arquivo de áudio importado do app Arquivos',
      },
    },
    security: { more: 'Leia o modelo de privacidade' },
    news: {
      eyebrow: 'Novidades',
      title: 'Lançado recentemente.',
      lead: 'O IndexOne é atualizado com frequência. Estas são as versões mais recentes; as notas de versão estão em inglês.',
      read: 'Ler as notas',
      all: 'Todas as versões',
    },
  },
  trust: {
    aria: 'Em resumo',
    items: ['Sem bot no Mac', 'Transcrição no dispositivo', 'Pastas bloqueadas com Touch ID', 'Mac e web · app para iPhone em breve'],
  },
  unique: {
    eyebrow: 'Recursos',
    title: 'Uma ferramenta de reuniões que realmente lembra.',
    lead: 'Muitos apps guardam notas ou transcrevem chamadas. O IndexOne grava os dois lados da chamada no seu Mac, deixa você perguntar à Ivy durante a reunião e, sempre que possível, liga as afirmações das notas ao momento da gravação de onde vieram.',
    items: {
      'live': {
        title: 'Pergunte à Ivy no meio da reunião — e mantenha tudo no seu Mac',
        body: 'Digite uma pergunta no meio da chamada — ou fale, com o assistente de voz ligado — e receba uma resposta baseada em todas as reuniões que você gravou, com fontes que você pode abrir; a gravação nunca pausa. Escolha Ivy on this Mac e nenhum texto de reunião sai do seu Mac; o Claude Code e o Codex ficam desligados até você consentir uma vez.',
        link: 'Como a Ivy funciona',
      },
      'capture': {
        title: 'Os dois lados da chamada, transcritos no seu Mac',
        body: 'Seu microfone e o áudio do sistema dos outros participantes são capturados como dois canais e unidos pelo Whisper no dispositivo em uma transcrição Me / Others. No espaço On this Mac não existe transcrição na nuvem.',
        link: 'Captura e transcrição',
      },
      'receipts': {
        title: 'Os recibos levam ao áudio',
        body: 'Cada linha embasada de uma nota leva ao segundo exato do áudio de onde veio, com quem falou. Linhas sem evidência ficam sem recibo, então você vê quais linhas têm uma fonte provável na gravação.',
        link: 'Recibos',
      },
      'security': {
        title: 'Criptografado no seu Mac',
        body: 'Suas notas, transcrições e o índice de busca são criptografados com SQLCipher no Mac; bloqueie um Workspace ou uma pasta e os áudios, vídeos e arquivos dentro dele também são selados. Personal e cada organização de que você faz parte guardam aqui uma cópia criptografada, então abrem sem conexão de rede.',
        link: 'Segurança e privacidade',
      },
      'locks': {
        title: 'Pastas seladas com Touch ID',
        body: 'Bloqueie um Workspace ou uma pasta e as notas, transcrições e áudios dentro dela são selados com AES-256-GCM e só se abrem com o Touch ID ou a senha do seu Mac. Enquanto estiver bloqueada, ela fica invisível para a busca, o grafo, o MCP e o player de áudio.',
        link: 'O modelo de bloqueio',
      },
      'markdown': {
        title: 'Exportação em Markdown e um servidor MCP local',
        body: 'Exporte qualquer nota em Markdown ou faça backup da sua biblioteca como arquivos .md simples, e um servidor MCP somente leitura em 127.0.0.1 permite que o Claude e outros agentes consultem suas notas. Você escolhe quais espaços ele pode ler; as organizações ficam desligadas até você ativá-las.',
        link: 'Markdown e MCP',
      },
    },
    seeAll: 'Ver todos os recursos',
  },
  privacy: {
    hosting: {
      title: 'Servidores e banco de dados',
      body: 'Mantemos os servidores e o banco de dados do IndexOne na União Europeia (AWS, Suécia). No modo padrão da Ivy na nuvem, o texto necessário para a tarefa é enviado à Anthropic, que pode processá-lo fora do EEE. Os detalhes estão na política de privacidade.',
      policyLink: 'Política de privacidade (em inglês)',
    },
    lifecycle: {
      "title": "Ciclo de vida dos dados · planos na nuvem",
      "items": [
        {
          "title": "Durante quanto tempo são guardados os dados?",
          "body": "O áudio na nuvem é mantido por 30 dias por padrão; o Free pode escolher 7, 14 ou 30 dias, e Personal e Team também 90. Notas, transcrições e arquivos comuns permanecem até que o proprietário os exclua, dentro do limite de armazenamento."
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
    leadHtml: 'No espaço On this Mac, a transcrição, a busca e a Ivy on this Mac podem funcionar <b>sem nenhuma rede</b> depois que os modelos de fala forem baixados. As poucas coisas que o IndexOne envia por conta própria não levam nenhum conteúdo de reunião, e cada uma está listada abaixo. Se você escolher o Claude Code ou o Codex, o consentimento e um firewall de anonimização ficam na frente dessa saída de dados.',
    cards: {
      'offline': {
        title: 'Suas reuniões ficam no dispositivo',
        body: 'Com a Ivy on this Mac e modelos baixados uma única vez, seus áudios e transcrições nunca tocam a rede. O raciocínio acontece no seu Mac.',
      },
      'at-rest': {
        title: 'Duas camadas de criptografia em repouso',
        body: 'Notas, transcrições e o índice de busca são criptografados com SQLCipher. Por cima, um bloqueio <b>AES-256-GCM</b> por pasta também sela áudios, vídeos e arquivos, com chaves de conteúdo protegidas por uma chave mestra liberada apenas pelo <b>Touch ID</b> ou pela senha do seu Mac.',
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
        title: 'O que o IndexOne envia sem você pedir',
        body: 'Ao abrir, o IndexOne pergunta ao GitHub se existe uma versão mais nova; a requisição informa qual versão você está usando, e nada mais. Enquanto a verificação de atualizações estiver ligada (ela vem ligada por padrão), ou se alguma conta já foi conectada neste Mac, ele também pergunta ao servidor do IndexOne, ao abrir e a cada hora, se a sua versão ainda é suportada, sem nenhum conteúdo. Uma vez por dia, ele envia uma pequena mensagem de uso: um ID de instalação aleatório, as versões do app e do macOS, a arquitetura do processador, o idioma e se você está conectado — nada de reuniões, notas, gravações ou nomes. Ela só é anônima enquanto você não está conectado; quando você está conectado, é enviada com a sua conta. Na primeira vez que você transcreve, ele baixa do Hugging Face dois pequenos modelos de fala, para detecção de voz e separação de falantes. Você pode desligar a verificação de atualizações e a mensagem de uso em <b>Settings → Privacy & Security</b>. Sem a verificação de atualizações, a consulta de versão também para, a menos que alguma conta já tenha sido conectada neste Mac. São as únicas coisas nesta página que acontecem sem você pedir, e é exatamente por isso que elas estão nesta página.',
      },
    },
    tableCaption: 'Onde cada provedor de IA roda e se o texto das reuniões sai do seu Mac',
    tableHeaders: ['Ivy / provedor', 'Onde roda', 'O texto das reuniões sai do seu Mac?'],
    providers: {
      'on-device': { name: 'Ivy on this Mac', note: 'Bielik / Qwen', where: 'Totalmente local' },
      'ivy-web': { name: 'Ivy on the web', note: 'Personal e organizações', where: 'Nuvem do IndexOne, com modelos Claude da Anthropic', leaves: 'Sim — o próprio espaço fica na web' },
      'claude-code': { name: 'Claude Code', where: 'CLI local → nuvem' },
      'codex': { name: 'Codex', note: 'a CLI da OpenAI, rodando sem ferramentas', where: 'CLI local → nuvem' },
      'local-server': { name: 'Local AI server', note: 'Ollama, LM Studio, oMLX e outros', where: 'Seu Mac ou sua rede', leaves: 'Não com um servidor neste Mac. Para um servidor em outro lugar da sua rede, só depois de você confirmar o endereço; e-mails, números de cartão e de telefone são removidos antes, e também os nomes se você baixar o modelo de mascaramento de nomes' },
    },
    leavesYes: 'Só após consentimento, com o firewall de anonimização aplicado',
    leavesNo: 'Não',
    shotAlt: 'Configurações de privacidade do IndexOne, explicando em linguagem simples o que é removido antes de qualquer texto sair, quais provedores são na nuvem e se o processamento na nuvem foi permitido',
    footnote: 'O IndexOne diz, em linguagem simples, exatamente o que sai do seu Mac — e cada chamada de IA na nuvem feita a partir do seu Mac é registrada e mostrada para você. Cada espaço tem uma única escolha de IA: Ivy on this Mac, Ivy on the web, Claude Code, Codex ou seu próprio servidor de IA local. No espaço On this Mac, as reuniões ficam no seu Mac, a menos que você escolha o Claude Code, o Codex ou um servidor de IA local em outro lugar da sua rede.',
  },
  features: {
    eyebrow: 'O que você ganha',
    title: 'Uma ferramenta de reuniões que realmente lembra.',
    lead: 'Uma biblioteca criptografada, três formas de usar — o app, um servidor MCP local e a exportação em Markdown. Uma árvore guarda tudo, os projetos ficam por cima dela, e a Ivy lê tudo.',
    items: {
      'workspaces': {
        eyebrow: 'Workspaces',
        title: 'Uma árvore para tudo',
        body: 'Uma única árvore — <b>Workspaces › pastas › suas gravações e notas</b> — em uma barra lateral que se recolhe em uma faixa estreita quando você quer mais espaço. Bloqueie um Workspace e tudo o que está dentro dele é selado junto.',
        points: [
          'Gravações, notas, tarefas e projetos ficam guardados no mesmo lugar',
          'Um Workspace selado mostra o nome e mais nada — sem contagens, sem conteúdo',
          'Peça à Ivy para arquivar uma gravação perdida para você',
          'Apagou sem querer? No seu Mac, a lixeira guarda por 30 dias — ou pelo tempo que você definir, até um ano',
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
        body: 'É isso que a maioria dos apps de anotações não tem. Pergunte à Ivy com um único toque, ou ative o assistente de voz em Settings e pergunte em voz alta; ela responde a partir da memória das suas reuniões, ao vivo, com citações que você pode abrir — e a gravação nunca para.',
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
          'Voice + screen: grave sua tela junto com a reunião (macOS 14+), grátis no Mac',
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
          'Alimente com PDFs, documentos do Office, páginas web salvas (.html) e imagens — indexados para a Ivy, no dispositivo',
        ],
        alt: 'O grafo de conhecimento — reuniões, notas, documentos e pessoas em um único mapa, com ligações tipadas entre eles',
      },
      'receipts': {
        eyebrow: 'Recibos',
        title: 'Afirmações fundamentadas levam de volta à gravação.',
        body: 'As notas do IndexOne não pedem que você confie nelas. Cada linha baseada no que foi realmente dito traz um recibo — clique nele para ir direto àquele segundo do áudio, com quem falou. Linhas parafraseadas ou sem embasamento ficam sem recibo, então você vê de relance quais linhas têm uma fonte provável na gravação.',
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
        title: 'Markdown na entrada, Markdown na saída. Sem aprisionamento.',
        body: 'Exporte qualquer nota em Markdown ou faça backup de toda a sua biblioteca como arquivos <code>.md</code> simples que abrem em qualquer editor. Vem do Obsidian? Importe seu vault em uma única etapa.',
        points: [
          'Um banco de dados SQLite criptografado é a única fonte da verdade',
          'Um servidor MCP local somente leitura para o Claude Desktop e o Claude Code',
          'Exportação em Markdown de qualquer nota e um backup em Markdown simples de toda a sua biblioteca',
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
    eyebrow: "Grátis para começar",
    title: "Transforme reuniões em respostas.",
    lead: "Comece grátis no seu Mac. Adicione a nuvem só quando precisar de mais.",
    benefits: {
      local: {
        title: "Grátis no seu Mac",
        body: "Grave, transcreva e converse com Ivy no seu Mac. O trabalho local não exige conta nem cartão.",
      },
      sync: {
        title: "Abra no navegador",
        body: "Entre no app web para manter suas notas sincronizadas. As notas na nuvem estão incluídas no Free.",
      },
      grow: {
        title: "Mais espaço quando precisar",
        body: "Os planos pagos adicionam mais transcrição na nuvem, mais Ivy e mais armazenamento. O Team adiciona um espaço compartilhado.",
      },
    },
    download: "Baixar grátis",
    forMac: "Para Mac com Apple Silicon",
    plans: "Ver planos",
    web: "Abrir aplicação web",
    status: "Os planos na nuvem estão à venda. Entre no app web para comprar um plano ou gerenciar sua assinatura. Os recursos locais do Mac continuam disponíveis.",
    trialTitle: "Grátis todo mês",
    trial: "Cada conta gratuita recebe a cada mês civil (UTC) 200.000 unidades Ivy e uma cota de transcrição na nuvem, sem cartão. Os recursos locais do Mac não têm limite de plano.",
    meterTitle: "Transcrição na nuvem nos planos pagos",
    meter: "Personal e Team incluem transcrição na nuvem. Com uso intenso, novas gravações podem entrar em uma fila mais lenta. Os limites e as regras de uso razoável estão nos Termos de serviço. A transcrição feita no seu Mac não está sujeita às cotas do plano.",
    fairUse: "Personal e Team incluem transcrição na nuvem. Com uso intenso, novas gravações podem entrar em uma fila mais lenta. Os limites e as regras de uso razoável estão nos Termos de serviço. A transcrição feita no seu Mac não está sujeita às cotas do plano.",
    fairUseLink: "Leia os Termos de serviço (em polonês)",
    privacyTitle: "Local e nuvem",
    privacy: "O processamento local do Mac fica no Mac. A nuvem padrão armazena e processa conteúdo em servidores legíveis pelo operador, sem criptografia de ponta a ponta. Mascarar padrões não é anonimização completa. Um plano não concede acesso a espaços privados.",
    detailsTitle: "Detalhes dos planos",
    details: "A cota do Free é renovada no início de cada mês civil (UTC). As cotas de Personal e Team são renovadas no início de cada período de cobrança. Uma gravação que não caiba na cota rápida restante de um plano pago pode ir para o modo econômico. Se também não houver mais espaço na cota do modo econômico, uma nova gravação pode ser enviada para transcrição depois que a cota for renovada. Os Termos de serviço detalham como o uso é contado e o tamanho das cotas. A nuvem padrão da conta não tem criptografia de ponta a ponta: o operador pode ler o conteúdo armazenado e processado. O mascaramento de padrões não é anonimização completa. O processamento local no seu Mac fica no seu Mac. Planos pagos nunca dão acesso a espaços privados.",
    more: "Mais detalhes de cobrança",
    after: "O Free inclui notas básicas, edição, pesquisa comum, sincronização, leitura e exportação até 1 GB, além da cota mensal na nuvem. Os planos pagos acrescentam mais IA, transcrição e armazenamento na nuvem.",
    team: "Personal e cada organização têm assinaturas e saldos separados. Team: 2,25 milhões de unidades Ivy interativas e 250.000 de automação por lugar; automações usam um fundo comum. Armazenamento compartilhado pela organização. Lugares não alteram permissões. Até 2 organizações gratuitas de 5 membros compartilham o armazenamento da conta fundadora.",
    lifecycle: "Áudio na nuvem: padrão de 30 dias; Free 7/14/30, pagos também 90. Lixeira na nuvem: mantida até você esvaziá-la. Cancelar não apaga conteúdo; direitos pagos até o fim do período. Exporte áudio antes de expirar.",
    docs: "Planos e cobrança · documentação em inglês",
    comparison: "Comparar planos",
    feature: "Recurso do plano",
    local: "Ferramentas locais do Mac",
    basics: "Notas e sincronização na nuvem no navegador",
    ivy: "Unidades Ivy na nuvem / mês",
    asr: "Transcrição na nuvem",
    asrPaid: "Incluída · com limites",
    asrBasic: "Cota mensal",
    storage: "Armazenamento na nuvem",
    gb: "GB",
    meetBot: "Bot do Google Meet",
    included: "Incluído",
    notIncluded: "Não incluído",
    seat: "por lugar",
    unit: "Unidades Ivy são um orçamento de processamento, não tokens brutos nem um número garantido de respostas. GB = um bilhão de bytes.",
  },
  pricing: {
    eyebrow: "Preços",
    title: "Comece grátis. Cresça quando quiser.",
    lead: "As ferramentas locais no Mac são grátis. Escolha um plano na nuvem quando precisar de mais.",
    recommended: "Recomendado",
    note: "O Personal inclui impostos. O Team começa em {seats} lugares: {total} líquidos por mês no total. Os impostos e o preço final aparecem no app web antes da compra.",
    compareLink: "Comparar todos os detalhes",
    peek: { benefit: "Mais transcrição na nuvem", link: "Ver o plano Personal" },
    plans: {
      free: {
        name: "Free",
        audience: "Suas primeiras notas de reunião.",
        period: "por mês",
        points: [
          "Ferramentas locais no Mac",
          "Notas na nuvem e sincronização",
          "{ivy} unidades Ivy por mês",
          "{storage} GB na nuvem",
        ],
        cta: "Baixar grátis",
        trust: "Sem cartão",
      },
      personal: {
        name: "Personal",
        audience: "Mais espaço para o seu trabalho.",
        period: "por mês, impostos incluídos",
        points: [
          "Tudo do Free",
          "Mais transcrição na nuvem",
          "{ivy} unidades Ivy por mês",
          "{storage} GB na nuvem",
        ],
        cta: "Escolher Personal",
        trust: "Cancele quando quiser",
      },
      team: {
        name: "Team",
        audience: "Um espaço compartilhado para sua equipe.",
        period: "líquido por lugar ao mês, a partir de {seats} lugares",
        points: [
          "Notas e espaço de equipe compartilhados",
          "Transcrição na nuvem para cada lugar",
          "{ivy} unidades Ivy por lugar ao mês",
          "{storage} GB na nuvem por lugar",
          "Bot do Google Meet",
        ],
        cta: "Escolher Team",
        trust: "Gerencie o plano no app web",
      },
    },
  },
  compare: {
    eyebrow: 'Concorrência',
    title: 'Como o IndexOne se compara.',
    lead: 'Obsidian, Notion, Evernote, Bear e Amie são ótimos no que fazem. O IndexOne foi feito para o que acontece em uma reunião — gravar, transcrever no seu Mac e fazer perguntas sobre ela — e importa seu vault do Obsidian em uma única etapa.',
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
        cells: ['No espaço On this Mac; os espaços na nuvem ficam na web', 'Arquivos locais', 'Nuvem do Notion', 'Nuvem do Evernote', 'Banco de dados local; sincronização via iCloud com Pro', 'Nuvem da Amie'],
      },
      'markdown': {
        criterion: 'Notas como arquivos Markdown simples que são seus',
        cells: ['Exportação e backup em Markdown; a fonte é o banco de dados criptografado', '', 'Só exportação em Markdown', 'Exportação em ENEX, HTML ou PDF', 'Banco de dados; exportação em Markdown', ''],
      },
      'encryption': {
        criterion: 'Criptografia sob seu controle',
        cells: ['Banco de dados criptografado, pastas bloqueadas com Touch ID, uma cópia local criptografada de cada espaço da web', 'Criptografia de ponta a ponta no Sync pago', 'Criptografado nos servidores do Notion; não é de ponta a ponta', 'Senha só para trechos de texto selecionados', 'Notas individuais, com Pro', ''],
      },
      'platforms': {
        criterion: 'Plataformas',
        cells: ['macOS, web; app para iPhone em breve', 'macOS, Windows, Linux, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, iOS, iPadOS, web (beta)', 'macOS, Windows, iOS'],
      },
      'price': {
        criterion: 'Preço',
        cells: ['Free · Personal 49 PLN · Team 75 PLN', 'Grátis; Sync a partir de $4/mês no plano anual', 'Grátis; IA e notas de reunião exigem o Business, $20/mês no plano anual', 'Grátis até 50 notas; Starter $99/ano', 'Grátis; Pro $29.99/ano', 'Grátis com 25 créditos de notas; Pro a partir de €20/mês no plano anual'],
      },
    },
  },
  faq: {
    eyebrow: 'Perguntas frequentes',
    title: 'O que as pessoas perguntam primeiro.',
    leadHtml: 'Respostas curtas aqui; a <a href="/docs/">documentação</a> tem os detalhes.',
    items: [
      {
        question: 'O que o Free inclui?',
        answer: 'No Mac, tudo: gravação, transcrição, notas, Ivy on this Mac e exportações, sem conta e sem limite de plano. Uma conta gratuita adiciona notas, edição, busca, sincronização, leitura e exportação na nuvem pelo navegador até 1 GB, além de uma cota mensal de unidades Ivy e de transcrição na nuvem. Os planos pagos adicionam mais transcrição na nuvem, mais unidades Ivy e mais armazenamento. Com uso intenso, novas gravações podem entrar em uma fila mais lenta; os limites e as regras de uso razoável estão nos Termos de serviço.',
      },
      {
        question: 'Meu áudio vai para a nuvem?',
        answer: 'Não no espaço On this Mac: lá a transcrição roda no seu Mac com o Whisper. Só texto pode sair: anonimizado, para o Claude Code ou o Codex depois que você consentir, ou com e-mails, números de cartão e de telefone removidos, para um servidor de IA local na sua rede depois que você confirmar o endereço. Os espaços Personal e de organizações ficam no IndexOne na web, então as gravações deles são guardadas lá.',
      },
      {
        question: 'O que é a Ivy?',
        answer: 'A Ivy é a IA do IndexOne. Pergunte a ela durante uma reunião sem parar a gravação, ou depois, sobre tudo o que você gravou e escreveu. Cada resposta cita as reuniões e notas de onde veio. Cada espaço escolhe uma IA: Ivy on this Mac, Ivy on the web para Personal e organizações, seu próprio servidor de IA local, ou o Claude Code ou o Codex após consentimento explícito.',
      },
      {
        question: 'Preciso de conexão com a internet?',
        answer: 'Uma vez, para baixar os modelos de fala. Depois disso, gravação, transcrição, busca e a Ivy on this Mac funcionam offline. Os espaços Personal e de organizações abrem offline a partir da cópia criptografada e enviam suas edições quando você volta a ficar online. Ivy on the web, Claude Code, Codex e conectores precisam de internet.',
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
        answer: 'É com essa permissão que o macOS deixa um app ouvir o áudio de outros apps — as outras pessoas na chamada. O IndexOne salva apenas o áudio delas, a menos que você ative o plugin Screen recording e escolha Voice + screen.',
      },
      {
        question: 'Funciona com fones de ouvido e em Macs Intel?',
        answer: 'Com fones de ouvido, sim: o áudio do outro lado é capturado do sistema, não dos seus alto-falantes. Em Macs Intel, não: o app para Mac precisa de Apple Silicon (M1 ou posterior). Em qualquer outro computador, use o IndexOne no navegador.',
      },
      {
        question: 'Existe um app para iPhone ou Windows?',
        answer: 'Um app para iPhone está a caminho da App Store. No Windows, no Linux ou em um Mac Intel, abra o IndexOne no navegador em app.index-one.io; as gravações feitas lá são transcritas na nuvem e contam para o seu plano.',
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
  meetingBot: {
    eyebrow: "Para participantes de reuniões",
    title: "O bot do IndexOne está gravando sua reunião.",
    lead: "Você está aqui porque o bot de notas do IndexOne entrou em uma chamada do Google Meet da qual você participa. Esta página explica quem grava a reunião, o que acontece com a gravação e o que você pode fazer.",
    noticeLabel: "A mensagem que o bot publica no chat da reunião",
    noticeNote: "O bot publica esta mensagem em inglês assim que é admitido na chamada. Ele não grava nada antes de publicá-la.",
    cards: {
      bot: { title: "O que é o bot", body: "Um assistente de notas que entra no Google Meet como participante, por isso aparece na lista de pessoas da chamada. O nome dele é o escolhido pela organização que o enviou, normalmente o nome dessa organização, seguido de “· IndexOne”, por exemplo “Northwind · IndexOne”." },
      controller: { title: "Quem é responsável pelos seus dados", body: "A organização que enviou o bot, a que aparece no nome dele. Ela é a controladora dos seus dados pessoais: decide gravar a reunião, com que finalidade e o que acontece depois com a gravação." },
      processor: { title: "O que o IndexOne faz", body: "O IndexOne é o operador. Ele grava, transcreve e guarda a reunião em nome dessa organização e somente conforme as instruções dela. O fornecedor do IndexOne está indicado na política de privacidade do IndexOne." },
      recorded: { title: "O que é gravado", body: "O som da reunião e uma transcrição escrita feita a partir dele. Tudo o que você diz enquanto o bot está na chamada vai para a gravação e para a transcrição." },
      purpose: { title: "Para que é gravado", body: "Para que a organização tenha notas e resumos da reunião dela. A gravação fica no espaço de trabalho do IndexOne dessa organização, onde as pessoas que ela autorizar podem abri-la." },
      storage: { title: "Por quanto tempo fica guardado", body: "A organização decide por quanto tempo mantém a gravação no espaço de trabalho dela. Por quanto tempo o IndexOne guarda os dados está descrito na política de privacidade do IndexOne." },
    },
    policyLink: "Política de privacidade do IndexOne (em polonês)",
    rights: {
      eyebrow: "Seus direitos",
      title: "Você pode se opor, ver seus dados e pedir que sejam apagados.",
      lead: "Esses direitos vêm do RGPD. Exerça-os primeiro junto à organização que enviou o bot, porque é ela que decide sobre a gravação.",
      items: {
        object: { title: "Oposição", body: "Você pode se opor à gravação. Durante a chamada, peça ao anfitrião que remova o bot ou saia da chamada. Depois, diga à organização que você se opõe ao uso da gravação." },
        access: { title: "Acesso", body: "Você pode perguntar à organização se ela tem uma gravação ou transcrição com a sua participação e pedir uma cópia." },
        erasure: { title: "Eliminação", body: "Você pode pedir à organização que apague a gravação ou as partes da transcrição que dizem respeito a você." },
        complaint: { title: "Reclamação", body: "Você pode apresentar uma reclamação a uma autoridade de controle de proteção de dados, por exemplo no país da UE onde você mora ou trabalha. Na Polônia, é o Presidente do Escritório de Proteção de Dados Pessoais (UODO)." },
      },
    },
    steps: {
      title: "Como exercer seus direitos",
      items: [
        { title: "Durante a reunião", body: "Peça ao anfitrião que remova o bot ou saia da chamada. Você não precisa dar um motivo." },
        { title: "Depois da reunião", body: "Escreva para a pessoa que organizou a reunião ou para a organização que aparece no nome do bot. Cabe a ela responder ao seu pedido." },
        { title: "Se não conseguir falar com eles", body: "Escreva para o IndexOne usando os contatos da política de privacidade do IndexOne e diga de qual reunião se trata. O IndexOne encaminhará seu pedido à organização." },
      ],
    },
    note: "Esta página descreve o bot do IndexOne de forma geral. A organização que o enviou pode ter um aviso de privacidade próprio, com mais detalhes; peça a ela.",
  },
  cta: {
    title: 'Experimente na sua próxima chamada.',
    lead: 'Baixe o IndexOne de graça e grave sua próxima reunião: sem bot, sem conta, sem cartão. Quer suas notas também no navegador? Crie uma conta gratuita.',
    compare: 'Comparar planos',
    download: 'Baixar para Mac — grátis',
    brew: 'Prefere o Homebrew?',
    brewCopy: 'Copiar o comando',
    signup: 'Criar uma conta gratuita',
    legacyHtml: 'Usa a versão 2.8.0 ou anterior? A verificação de atualizações dela não consegue mais nos alcançar. Baixe a <a href="{download}">versão mais recente</a> uma vez e arraste para Aplicativos, substituindo a cópia antiga; sua biblioteca, gravações e configurações continuam onde estão. A partir da 2.9.0, o app encontra novas versões sozinho.',
  },
  footer: {
    legalHtml: 'App para Mac e app web · app para iPhone em breve · Ivy no dispositivo · feito com Tauri, Angular e Rust · grátis no Mac · © {year} <a href="{authors}">MonoOne</a> · textos <a href="{license}">CC BY 4.0</a>',
    legalNav: 'Informações legais',
    terms: 'Termos de serviço (PL)',
    privacyPolicy: 'Política de privacidade (PL)',
    withdrawal: 'Direito de arrependimento (PL)',
    dpa: 'Acordo de tratamento de dados (PL)',
    meetingBot: 'Bot de reuniões: informações para participantes',
    contact: 'Contato',
  },
}

// The FAQ ends with the offer details shown on the pricing page.
content.faq.items.push(
  { question: content.offer.trialTitle, answer: content.offer.trial },
  { question: content.offer.meterTitle, answer: content.offer.meter },
  { question: content.offer.privacyTitle, answer: content.offer.privacy },
  { question: "Quem paga Team?", answer: content.offer.team },
  ...content.privacy.lifecycle.items.map(item => ({ question: item.title, answer: item.body })),
)

export default content
