import type { SiteContent } from './types'

const content: SiteContent = {
  meta: {
    home: {
      title: 'IndexOne — notas de reunião local-first para macOS, com Ivy',
      description: 'Grave e transcreva reuniões no seu Mac e pergunte à Ivy, sua IA, ao vivo ou em todas as chamadas. IA local ou na nuvem com anonimização; notas em Markdown.',
    },
    features: {
      breadcrumb: 'Recursos',
      title: 'Recursos — notas de reunião IndexOne para macOS',
      description: 'Workspaces, projetos, importações, Ivy nas reuniões, perguntas ao acervo, transcrição em dois canais, recibos, Markdown e Shared Ivy: tudo do IndexOne.',
    },
    privacy: {
      breadcrumb: 'Privacidade',
      title: 'Privacidade e segurança — o que nunca sai do seu Mac · IndexOne',
      description: 'Transcrição no dispositivo, SQLCipher em repouso, pastas bloqueadas com Touch ID, firewall de anonimização e consentimento antes de qualquer IA na nuvem.',
    },
    pricing: {
      breadcrumb: 'Preços',
      title: 'Preços do IndexOne e comparação com Obsidian, Notion e outros',
      description: 'O IndexOne é gratuito no acesso antecipado. Compare com Obsidian, Notion, Evernote, Bear e Amie em gravação, IA no dispositivo, criptografia e Markdown.',
    },
    changelog: {
      breadcrumb: 'Novidades',
      title: 'Novidades — o que muda em cada versão do IndexOne',
      description: 'Cada versão do IndexOne para macOS, da mais recente para a mais antiga: novos recursos, correções e downloads, com a data de cada versão.',
    },
    ogImageAlt: 'IndexOne — notas de reunião local-first para macOS, com Ivy',
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
    subHtml: 'O IndexOne grava suas chamadas e as transcreve <b>no seu Mac</b>. Pergunte à Ivy ao vivo, no meio da reunião, e sobre tudo o que você já gravou. Rode a IA localmente ou ative de forma explícita a <b>IA na nuvem com anonimização</b> — seu arquivo de reuniões continua no seu Mac.',
    download: 'Baixar para macOS',
    privacyCta: 'Veja como funciona a privacidade',
    note: 'Assinado e notarizado · macOS 13.4+ · Apple Silicon e Intel · suas notas continuam em Markdown, e são suas',
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
        body: 'Digite ou fale uma pergunta no meio da chamada e receba uma resposta baseada em todas as reuniões que você gravou, com fontes que você pode abrir; a gravação nunca pausa. Rode a Ivy no dispositivo ou por um Ollama local, e nenhum texto de reunião sai do seu Mac; a IA na nuvem fica desligada até você consentir uma vez.',
        link: 'Como a Ivy funciona',
      },
      'capture': {
        title: 'Os dois lados da chamada, transcritos no seu Mac',
        body: 'Seu microfone e o áudio do sistema dos outros participantes são capturados como dois canais e unidos pelo Whisper no dispositivo em uma transcrição Me / Others. Não existe transcrição na nuvem.',
        link: 'Captura e transcrição',
      },
      'receipts': {
        title: 'Toda afirmação tem um recibo',
        body: 'Cada linha embasada de uma nota leva ao segundo exato do áudio de onde veio, com quem falou. Linhas sem evidência ficam sem recibo, então você vê o que está verificado.',
        link: 'Recibos',
      },
      'security': {
        title: 'Criptografado onde quer que esteja guardado',
        body: 'Toda a sua biblioteca é criptografada com SQLCipher no Mac. Tudo o que você compartilha é selado com AES-256-GCM antes do envio, então o servidor só guarda texto cifrado — e o login usa OPAQUE, então ele nunca conhece a sua senha.',
        link: 'Segurança e privacidade',
      },
      'locks': {
        title: 'Pastas seladas com Touch ID',
        body: 'Bloqueie um Workspace ou uma pasta e as notas, transcrições e áudios dentro dela são selados com AES-256-GCM. Enquanto estiver bloqueada, ela fica invisível para a busca, o grafo, o MCP e o player de áudio.',
        link: 'O modelo de bloqueio',
      },
      'markdown': {
        title: 'Markdown simples e um servidor MCP local',
        body: 'As notas vão para o seu vault do Obsidian em Markdown simples com wikilinks, e um servidor MCP somente leitura em 127.0.0.1 permite que o Claude e outros agentes as consultem.',
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
    eyebrow: 'Segurança e privacidade',
    title: 'Privacidade não é uma configuração. É a arquitetura.',
    leadHtml: 'O IndexOne foi projetado para que a transcrição, a busca e a Ivy no dispositivo funcionem <b>sem nenhuma rede</b> — depois que você desligar a única coisa que se conecta para fora: uma verificação de nova versão ao abrir o app. Se você escolher IA na nuvem, o consentimento e um firewall de anonimização ficam na frente dessa saída de dados.',
    cards: {
      'offline': {
        title: 'Nada sai do dispositivo',
        body: 'Com um modelo no dispositivo, baixado uma única vez, ou com o Ollama, seus áudios e transcrições nunca tocam a rede. O raciocínio acontece no seu Mac.',
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
        title: 'A única chamada que fazemos por padrão',
        body: 'Ao abrir, o IndexOne pergunta ao GitHub se existe uma versão mais nova. A requisição informa qual versão você está usando, porque é assim que a pergunta é feita — e nada mais: nada de reuniões, notas ou conta. Você pode desligar isso em <b>Settings → Privacy</b>. É a única coisa nesta página que acontece sem você pedir, e é exatamente por isso que ela está nesta página.',
      },
    },
    tableCaption: 'Onde cada provedor de IA roda e se o texto das reuniões sai do seu Mac',
    tableHeaders: ['Ivy / provedor', 'Onde roda', 'O texto das reuniões sai do seu Mac?'],
    providers: {
      'on-device': { name: 'Ivy no dispositivo', note: 'Bielik / Qwen', where: 'Totalmente local' },
      'ollama': { name: 'Ollama', where: 'Totalmente local' },
      'claude-code': { name: 'Claude Code', note: 'resumidor padrão', where: 'CLI local → nuvem' },
      'codex': { name: 'Codex', note: 'a CLI da OpenAI, rodando sem ferramentas', where: 'CLI local → nuvem' },
      'anthropic': { name: 'Anthropic API', note: 'use sua própria chave', where: 'HTTPS direto' },
      'gateway': { name: 'AI Gateway', note: 'qualquer endpoint compatível com OpenAI — LiteLLM, Kong, Portkey, vLLM…', where: 'HTTPS direto' },
    },
    leavesYes: 'Só após consentimento, com o firewall de anonimização aplicado',
    leavesNo: 'Não',
    shotAlt: 'Configurações de privacidade do IndexOne, explicando em linguagem simples o que é removido antes de qualquer texto sair, quais provedores são na nuvem e se o processamento na nuvem foi permitido',
    footnote: 'O IndexOne diz, em linguagem simples, exatamente o que sai do seu Mac — e cada chamada de IA na nuvem é registrada e mostrada para você. Suas reuniões ficam no dispositivo, a menos que você ative a nuvem. Um único seletor de modelo é usado em todos os recursos de IA, e ele sempre aceita um ID de modelo digitado por você — então um modelo lançado depois desta versão continua funcionando.',
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
        ],
        alt: 'O editor de notas com um trecho selecionado e o menu de comandos da Ivy aberto, mostrando Refine, Shorten, Change tone e outras ações',
      },
      'shared-ivy': {
        eyebrow: 'Shared Ivy',
        title: 'Trabalhe em equipe, ainda com criptografia de ponta a ponta.',
        body: 'Publique uma nota ou um resumo de reunião no Shared Ivy da sua organização e ele fica sincronizado para todos os membros enquanto você edita. Tudo é selado no seu Mac antes de sair — o servidor só armazena texto cifrado, chaves protegidas e chaves públicas.',
        points: [
          'Selado com AES-256-GCM sob uma chave de conteúdo da organização antes do envio',
          'Verificação antes de publicar — a mesma disciplina do bloqueio de pastas',
          'Permissões por documento — o autor define <b>View only</b> (só visualização) ou <b>Can edit</b> (pode editar) em cada documento compartilhado',
          'Participe de mais de uma organização — cada uma tem seu próprio feed criptografado',
          '<b>Tarefas</b> compartilhadas — responsáveis, prazos, subtarefas e as mesmas permissões; as tarefas vivem dentro de uma organização, então exigem uma conta conectada',
        ],
        alt: 'A tela do Shared Ivy: reuniões e notas que suas organizações compartilharam com você, cada uma com o autor e a organização',
      },
    },
  },
  pricing: {
    eyebrow: 'Preços',
    title: 'Grátis durante o acesso antecipado.',
    lead: 'Gravação local, transcrição, notas e exportações em Markdown não exigem conta nem pagamento. Preços e disponibilidade após o acesso antecipado serão anunciados separadamente.',
    plans: {
      free: {
        name: 'Free',
        badge: 'Disponível agora',
        price: '$0',
        per: '/ acesso antecipado',
        tagline: 'Gravação local, transcrição, notas e exportações.',
        points: [
          'Gravação e transcrição ilimitadas no dispositivo',
          'Ivy nas reuniões, e perguntas ao seu acervo',
          'Busca semântica e grafo de conhecimento automático',
          'Notas avulsas com editor assistido pela Ivy',
          'Compartilhamento com criptografia de ponta a ponta e permissões View only / Can edit por documento (exige conta)',
          'Workspaces, projetos configuráveis e importação offline do Notion / Obsidian / Apple Notes / Markdown',
          'Links de compartilhamento criptografados com validade, senha opcional e limite de aberturas',
          'Bloqueio com Touch ID por Workspace e por pasta, com criptografia AES-256',
          'Rebloqueio automático ao compartilhar a tela',
          'Servidor MCP local e exportação em Markdown',
        ],
        cta: 'Baixar para macOS',
      },
      pro: {
        name: 'Pro',
        badge: 'Em breve',
        price: 'Planejado',
        tagline: 'Preços e disponibilidade a anunciar.',
        points: [
          'Tudo do Free',
          'Sincronização com criptografia de ponta a ponta entre seus Macs e o iPhone',
          'Backup na nuvem criptografado com conhecimento zero',
          'Ivy gerenciada de baixa latência, opcional (com anonimização)',
          'Receitas e automações personalizadas',
        ],
        cta: 'Acompanhe no GitHub',
      },
      team: {
        name: 'Team',
        badge: 'Em breve',
        price: 'Planejado',
        tagline: 'Preços e disponibilidade a anunciar.',
        points: [
          'Tudo do Pro',
          'SSO e provisionamento SCIM',
          'Políticas de segurança, retenção e log de auditoria',
          'Suporte prioritário e SLA',
        ],
        cta: 'Fale com a gente',
      },
    },
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
        cells: ['Whisper no dispositivo; sem transcrição na nuvem', 'Sem transcrição integrada', 'Nuvem', 'Nuvem', 'Sem transcrição', 'Nuvem'],
      },
      'local-ai': {
        criterion: 'IA que pode rodar totalmente no seu dispositivo',
        cells: ['Ivy no dispositivo ou um Ollama local', 'Sem IA integrada; plugins da comunidade', 'Só na nuvem', 'Só na nuvem', 'Sem IA integrada', 'Só na nuvem'],
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
        cells: ['Banco de dados criptografado, pastas bloqueadas com Touch ID, compartilhamento com criptografia de ponta a ponta', 'Criptografia de ponta a ponta no Sync pago', 'Criptografado nos servidores do Notion; não é de ponta a ponta', 'Senha só para trechos de texto selecionados', 'Notas individuais, com Pro', ''],
      },
      'platforms': {
        criterion: 'Plataformas',
        cells: ['macOS', 'macOS, Windows, Linux, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, Windows, web, iOS, Android', 'macOS, iOS, iPadOS, web (beta)', 'macOS, Windows, iOS'],
      },
      'price': {
        criterion: 'Preço',
        cells: ['Grátis durante o acesso antecipado', 'Grátis; Sync a partir de $4/mês no plano anual', 'Grátis; IA e notas de reunião exigem o Business, $20/mês no plano anual', 'Grátis até 50 notas; Starter $99/ano', 'Grátis; Pro $29.99/ano', 'Grátis com 25 créditos de notas; Pro a partir de €20/mês no plano anual'],
      },
    },
  },
  faq: {
    eyebrow: 'Perguntas frequentes',
    title: 'O que as pessoas perguntam primeiro.',
    leadHtml: 'Respostas curtas aqui; a <a href="/docs.html">documentação</a> tem os detalhes.',
    items: [
      {
        question: 'O IndexOne é gratuito?',
        answer: 'Sim, durante o acesso antecipado. Gravação local, transcrição, notas e exportações não exigem conta nem pagamento. Os preços após o acesso antecipado serão anunciados separadamente.',
      },
      {
        question: 'Meu áudio vai para a nuvem?',
        answer: 'Não. A transcrição sempre roda no seu Mac. Só texto anonimizado pode sair, e apenas para uma IA na nuvem que você escolheu e autorizou.',
      },
      {
        question: 'O que é a Ivy?',
        answer: 'A Ivy é a IA do IndexOne. Pergunte a ela durante uma reunião sem parar a gravação, ou depois, sobre tudo o que você gravou e escreveu. Cada resposta cita as reuniões e notas de onde veio. A Ivy pode rodar totalmente no seu Mac, por um Ollama local ou — após consentimento explícito — por um provedor na nuvem com anonimização.',
      },
      {
        question: 'Preciso de conexão com a internet?',
        answer: 'Uma vez, para baixar um modelo do Whisper. Depois disso, gravação, transcrição, busca e a Ivy no dispositivo funcionam offline. Conexões com IA na nuvem, conectores e compartilhamento precisam de internet.',
      },
      {
        question: 'Preciso do Claude Code?',
        answer: 'Só se você mantiver o Claude Code como redator das notas. Em vez dele, você pode escolher o Codex, a Anthropic API, um AI gateway compatível com OpenAI, um Ollama local ou um modelo no dispositivo.',
      },
      {
        question: 'Quais idiomas são suportados?',
        answer: 'O Whisper transcreve muitos idiomas. Para IA no dispositivo, você pode escolher modelos Qwen3 multilíngues ou modelos Bielik nativos em polonês.',
      },
      {
        question: 'Por que o macOS pede permissão de Gravação de Tela e Áudio do Sistema?',
        answer: 'É com essa permissão que o macOS deixa um app ouvir o áudio de outros apps — as outras pessoas na chamada. O IndexOne salva apenas o áudio.',
      },
      {
        question: 'Funciona com fones de ouvido e em Macs Intel?',
        answer: 'Sim, nos dois casos. O áudio do outro lado é capturado do sistema, não dos seus alto-falantes, e o app é uma build universal. Modelos grandes no dispositivo rodam melhor em Apple Silicon.',
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

export default content
