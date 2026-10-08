import type { SiteContent } from './types'

const content: SiteContent = {
  meta: {
    home: {
      title: 'IndexOne — 本地优先的 macOS 会议笔记，内置 Ivy',
      description: '在 Mac 上录制并转写会议，随时向你的 AI 助手 Ivy 提问，会中实时作答，也能跨越所有通话检索。可选本地 AI 或脱敏后的云端 AI，笔记始终是属于你的 Markdown。',
    },
    features: {
      breadcrumb: '功能',
      title: '功能一览 — IndexOne macOS 会议笔记',
      description: 'Workspaces、项目、导入、会中 Ivy、向整个知识库提问、双音轨转写、出处凭证、Markdown 导出与 Shared Ivy——IndexOne 的全部功能都在这里。',
    },
    privacy: {
      breadcrumb: '隐私',
      title: '隐私与安全：哪些数据绝不离开你的 Mac — IndexOne',
      description: '设备端转写、SQLCipher 静态加密、Touch ID 文件夹锁、脱敏防火墙，任何云端 AI 调用前都须经你同意。清楚看到究竟有什么可能离开你的 Mac。',
    },
    pricing: {
      breadcrumb: '价格',
      title: 'IndexOne 价格，以及与 Obsidian、Notion 等的对比',
      description: 'IndexOne 在抢先体验期间免费。从录音、设备端 AI、加密和 Markdown 等方面，将它与 Obsidian、Notion、Evernote、Bear 和 Amie 逐项对比。',
    },
    changelog: {
      breadcrumb: '更新日志',
      title: '更新日志 — IndexOne 每个版本的新变化',
      description: 'IndexOne macOS 版的每个版本，最新的在前：新功能、修复和下载，并注明每个版本的发布日期。',
    },
    ogImageAlt: 'IndexOne — 本地优先的 macOS 会议笔记，内置 Ivy',
  },
  common: {
    skipToContent: '跳到正文',
    homeAria: 'IndexOne 首页',
    primaryNav: '主导航',
    footerNav: '页脚导航',
    language: '语言',
  },
  nav: {
    features: '功能',
    privacy: '隐私',
    pricing: '价格',
    compare: '对比',
    faq: '常见问题',
    docs: '文档',
    github: 'GitHub',
    changelog: '更新日志',
    download: '下载',
  },
  theme: {
    label: '主题',
    skinsGroup: '主题',
    modesGroup: '模式',
    skins: {
      studio: { label: 'Studio', description: '雾中天蓝，柔和渐变' },
      paper: { label: 'Paper', description: '温暖羊皮纸，专为阅读而设计' },
      minimalist: { label: 'Minimalist', description: '纯正 shadcn/ui 风格，素雅中性' },
    },
    modes: { light: '浅色', dark: '深色', system: '跟随系统' },
  },
  hero: {
    badgeLocal: '本地优先 · macOS',
    badgeIvy: '设备端 Ivy',
    badgeStar: '在 GitHub 上加星',
    githubAria: 'GitHub 上的 IndexOne',
    titleStrong: '有 Ivy 相伴的会议笔记——',
    titleSoft: '在哪里运行，由你决定。',
    subHtml: 'IndexOne 录制你的通话，并<b>在你的 Mac 上</b>完成转写。会议进行中就能实时向 Ivy 提问，也能跨越你录下的所有内容检索。AI 可以在本地运行，也可以由你明确选择启用<b>经过脱敏的云端 AI</b>——你的会议档案始终留在你的 Mac 上。',
    download: '下载 macOS 版',
    privacyCta: '了解隐私机制',
    note: '已签名并通过公证 · macOS 13.4+ · 支持 Apple Silicon 和 Intel · 笔记始终是属于你的 Markdown',
    videoLabel: 'IndexOne 90 秒导览：一边录制会议一边在旁记笔记；会后整理的笔记及从中提取的要点；发言人时间线；向 Ivy 提出跨整个知识库的问题并获得附带出处的回答；知识图谱；Workspaces 侧栏与设备端搜索；项目；People；以及一个因已加密封存而拒绝打开的 Workspace',
    play: '观看 90 秒导览',
  },
  trust: {
    aria: '一览',
    items: ['设备端转写', 'Touch ID 静态加密锁', '无需云端', '属于你的纯 Markdown'],
  },
  unique: {
    eyebrow: 'IndexOne 独有',
    title: '其他笔记应用都做不到的会议能力。',
    lead: '能存笔记、能转写通话的应用很多。IndexOne 在你的 Mac 上同时录下通话双方，让你在会议中向 Ivy 提问，并为它写下的每一行提供证据。',
    items: {
      'live': {
        title: '会议进行中即可询问 Ivy，一切都留在你的 Mac 上',
        body: '通话中输入或说出问题，即可获得基于你录制过的所有会议的回答，并附上可直接打开的来源；录音全程不中断。在设备上或通过本地 Ollama 运行 Ivy，会议文本不会离开你的 Mac；在你首次同意之前，云端 AI 始终保持关闭。',
        link: 'Ivy 如何工作',
      },
      'capture': {
        title: '通话双方，都在你的 Mac 上转写',
        body: '你的麦克风和其他参会者的系统音频分作两路音轨采集，再由设备端 Whisper 合并为 Me / Others 对照文字稿。全程没有任何云端转写。',
        link: '采集与转写',
      },
      'receipts': {
        title: '每条结论都有凭证',
        body: '笔记中每一行有据可查的内容，都链接到它所对应的那一秒音频，并标明发言人。缺乏证据的内容不会获得凭证，哪些已经核实一目了然。',
        link: '出处凭证',
      },
      'security': {
        title: '无论存储在哪里，都已加密',
        body: '你的整个资料库在 Mac 上使用 SQLCipher 加密。你分享的所有内容在上传前都会用 AES-256-GCM 封存，因此服务器只保存密文；登录采用 OPAQUE 协议，服务器永远不会知道你的密码。',
        link: '安全与隐私',
      },
      'locks': {
        title: '用 Touch ID 封存文件夹',
        body: '锁定一个 Workspace 或文件夹后，其中的笔记、文字稿和音频都会以 AES-256-GCM 加密封存。锁定期间，搜索、知识图谱、MCP 和音频播放器都看不到它。',
        link: '锁定机制',
      },
      'markdown': {
        title: '纯 Markdown，外加本地 MCP 服务器',
        body: '笔记以带 wikilink 的纯 Markdown 写入你的 Obsidian 知识库；运行在 127.0.0.1 上的只读 MCP 服务器，让 Claude 和其他智能体也能查询它们。',
        link: 'Markdown 与 MCP',
      },
    },
    seeAll: '查看全部功能',
  },
  how: {
    eyebrow: '工作原理',
    title: '录制 → 理解 → 提问。生来本地优先。',
    lead: '一条本地优先的处理流程，把一场实时通话变成可检索的记忆。转写始终在你的 Mac 上完成；Ivy 可以在本地运行，也可以在你明确同意后使用经过脱敏的云端处理。',
    steps: [
      {
        label: '01 · 录制',
        title: '完整听见整场通话',
        body: '你的麦克风<b>和</b>对方的系统音频分别采集、分别转写，再由设备端 Whisper 合并为清晰的 <b>Me / Others</b> 文字稿。',
      },
      {
        label: '02 · 理解',
        title: 'Ivy，就在你的 Mac 上',
        body: '推理模型在本地运行，基于你录下的全部内容建立语义索引——撰写结构化笔记，让记忆永久可检索。',
      },
      {
        label: '03 · 提问',
        title: '实时作答，附带出处',
        body: '会议中向 Ivy 提问，得到有据可依、附带<b>出处</b>的回答；会后也能跨越数月的通话发问。录音始终不会停止。',
      },
    ],
  },
  privacy: {
    eyebrow: '安全与隐私',
    title: '隐私不是一个开关，而是整个架构。',
    leadHtml: 'IndexOne 的设计让转写、搜索和设备端 Ivy 可以<b>完全不联网</b>运行——只要关掉唯一一项会主动联网的功能：启动时检查新版本。如果你选择云端 AI，数据外发之前还有同意确认和脱敏防火墙两道关卡。',
    cards: {
      'offline': {
        title: '数据不出设备',
        body: '使用只需下载一次的设备端模型，或使用 Ollama，你的音频和文字稿都不会接触网络。推理全程在你的 Mac 上进行。',
      },
      'at-rest': {
        title: '双层静态加密',
        body: '整个数据库均经 SQLCipher 加密。在此之上，每个文件夹还可加一把 <b>AES-256-GCM</b> 锁：内容密钥由主密钥包裹，而主密钥只有通过 <b>Touch ID</b> 才能释放。',
      },
      'gated': {
        title: '每次读取都要过关',
        body: '已封存锁定的文件夹不会泄露任何信息——无论是应用界面、搜索、知识图谱、MCP，还是音频通路。锁定的会议只会显示为 <b>Locked</b>（已锁定）。',
      },
      'seals': {
        title: '先验证，再清除',
        body: 'IndexOne 会<b>先</b>证明密文能够解密还原，然后才清除明文——内容绝不会丢失，锁定也随时可以完全撤销。',
      },
      'screen-share': {
        title: '感知屏幕共享',
        body: '一旦检测到屏幕共享，监视程序可自动重新锁定已封存的文件夹，并清除缓存的密钥——共享屏幕时，私密笔记不会意外曝光。',
      },
      'firewall': {
        title: '脱敏防火墙',
        body: '如果你选择启用云端摘要服务，邮箱地址、类似银行卡号的数字和电话号码都会先被清除——而且云端外发采用<b>默认拒绝（fail-closed）</b>机制，须经一次性同意才会放行。下载可选的姓名遮蔽模型后，人名也会被替换。',
      },
      'update-check': {
        title: '我们默认发起的唯一一次请求',
        body: '启动时，IndexOne 会向 GitHub 询问是否有新版本。请求中会带上你当前运行的版本号，因为只有这样才能提出这个问题——除此之外别无其他：没有会议，没有笔记，没有账号。你可以在 <b>Settings → Privacy</b>（设置 → 隐私）中关闭它。这是本页唯一一件未经你要求就会发生的事，也正因如此，我们把它写在这里。',
      },
    },
    tableCaption: '各 AI 服务商在哪里运行，以及会议文本是否会离开你的 Mac',
    tableHeaders: ['Ivy / 服务商', '运行位置', '会议文本会离开你的 Mac 吗？'],
    providers: {
      'on-device': { name: '设备端 Ivy', note: 'Bielik / Qwen', where: '完全本地' },
      'ollama': { name: 'Ollama', where: '完全本地' },
      'claude-code': { name: 'Claude Code', note: '默认摘要工具', where: '本地 CLI → 云端' },
      'codex': { name: 'Codex', note: 'OpenAI 的 CLI，以无工具模式运行', where: '本地 CLI → 云端' },
      'anthropic': { name: 'Anthropic API', note: '使用你自己的密钥', where: '直连 HTTPS' },
      'gateway': { name: 'AI 网关', note: '任何兼容 OpenAI 的端点——LiteLLM、Kong、Portkey、vLLM 等', where: '直连 HTTPS' },
    },
    leavesYes: '仅在你同意后，且经过脱敏防火墙处理',
    leavesNo: '不会',
    shotAlt: 'IndexOne 隐私设置：用平实的语言说明文本外发前会移除哪些内容、哪些服务商属于云端，以及云端处理是否已获允许',
    footnote: 'IndexOne 用平实的语言告诉你，究竟有什么会离开你的 Mac——每一次云端 AI 调用都会被记录并展示给你。除非你主动选择，你的会议始终留在设备上。所有 AI 功能共用同一个模型选择器，而且它始终接受你手动输入的模型 ID——即使是在本版本之后发布的模型，也照样可用。',
  },
  features: {
    eyebrow: '你将获得',
    title: '真正记得住的会议工具。',
    lead: '一个加密存储，三种使用方式——应用本身、本地 MCP 服务器，以及你导出的 Markdown 文件。一棵树容纳一切，项目建立在它之上，而 Ivy 能读懂其中的全部内容。',
    items: {
      'workspaces': {
        eyebrow: 'Workspaces',
        title: '一棵树，装下一切',
        body: '一棵完整的树——<b>Workspaces › 文件夹 › 你的录音与笔记</b>——尽在一个侧边栏中，需要更多空间时可收起为窄栏。锁定一个 Workspace，其中的一切都会随之封存。',
        points: [
          '录音、笔记、任务和项目都归档在同一个地方',
          '已封存的 Workspace 只显示名称——没有数量，也没有内容',
          '让 Ivy 帮你把零散的录音归档',
          '误删了？回收站会保留 30 天——也可以自行设置，最长一年',
        ],
        alt: 'Workspaces 侧边栏：由 Workspaces 和文件夹组成的一棵树，收纳着录音、笔记和项目，底部是一个已锁定的 Workspace',
      },
      'dashboards': {
        eyebrow: '项目',
        title: '由你组合的项目',
        body: '把笔记、录音、文档、人员、承诺台账和提醒事项汇集到项目中，再通过 <b>Brief / Overview / Commitments / Sources / People</b> 视角来查看。还可以固定一个<b>实时答案</b>——一个已保存的问题，其最近一次回答连同回答日期一起保留，可按你的要求重新回答，一旦其出处变得不可读取，便会立即隐藏。你也可以直接向项目提问，回答只依据项目中的内容。',
        points: [
          '七种卡片——笔记、录音、文档、人员、承诺台账、提醒列表或实时答案',
          '同一组卡片，五种视角——任何内容都无需复制第二份',
          '项目会标明自身边界：它能读取什么，又推导出了什么',
        ],
        alt: 'Brief 视角下的项目：一个已固定问题的已保存答案、需要关注的事项，以及背后的最新证据',
      },
      'imports': {
        eyebrow: '导入',
        title: '带上你已有的笔记',
        body: '在 Settings → Imports（设置 → 导入）中，可导入 <b>Notion 导出文件</b>、<b>Obsidian 知识库</b>、<b>Apple Notes</b>、<b>Markdown 文件</b>文件夹或 <b>IndexOne 备份</b>。全程离线——无需账号，无需密钥，不发起任何网络请求。每次导入都会先进行一次试运行，让你在写入任何内容之前就看到它将写入什么。',
        points: [
          '五种来源：Notion 导出文件、Obsidian 知识库、Apple Notes、Markdown 文件夹、IndexOne 备份',
          '先试运行——在你确认之前，不会写入任何内容',
          '导入的笔记会放进各自命名的文件夹，Ivy 会像读取其他内容一样读取它们',
        ],
        alt: 'Settings → Imports：Notion、Obsidian、Apple Notes、Markdown 文件和 IndexOne 备份，并注明一切都在这台 Mac 上完成，不会上传任何内容',
      },
      'ivy': {
        eyebrow: 'Ivy',
        title: '会议进行中，与 Ivy 对话。',
        body: '这正是大多数笔记工具所欠缺的。用唤醒词或轻点一下即可唤起 Ivy；它会基于你的会议记忆实时作答，并附上可直接打开的引用——录音始终不会停止。',
        points: [
          '通过 Metal 运行的设备端推理模型（Bielik-11B、Qwen）',
          '有据可依，而非凭空捏造——答案检索自你自己的文字稿',
          '可选的联网搜索须经同意——默认关闭',
        ],
        alt: '正在进行的录音：会议中提出一个问题，Ivy 实时作答，并列出所依据的出处',
      },
      'ask': {
        eyebrow: '向知识库提问',
        title: '跨越数月的通话发问。',
        body: '还是 Ivy，只不过这次面向你录制和写下的全部内容。每个回答都附带它所依据的会议和笔记，你可以直接打开出处查证，而不必只听它一面之词。',
        points: [
          '可将问题限定在某个 Workspace 或文件夹——涵盖整个子树，范围之外一概不涉及',
          '对话会被记住——知识库、笔记和会议的对话线程都会保留，每处都有历史记录浏览器',
          '一旦对话所依据的任何文件夹变得不可读取，该对话会立即消失',
        ],
        alt: '向 Ivy 提出跨越数月会议的问题并得到一个答案，下方列出其所依据的会议',
      },
      'transcription': {
        eyebrow: '采集与转写',
        title: '通话双方，都听得见。',
        body: '双音轨录制同时采集你的麦克风和对方的系统音频，在设备端分别独立转写，再按实际时间合并为清晰的 Me / Others 文字稿，你说话时还会显示实时字幕。',
        points: [
          '设备端 Whisper——从 tiny 到 large-v3，包括更快的 turbo 版本及量化版本',
          '双音轨区分说话人：你和其他所有人，并配有语音活动检测',
          '悬浮录音条——随处都能开始录制（⌘⇧R）',
        ],
        alt: '合并后的 Me / Others 文字稿，带时间索引，旁边是发言人与话题时间线',
      },
      'memory': {
        eyebrow: '笔记与记忆',
        title: '结构化笔记，外加自动生长的知识图谱。',
        body: '每次通话都会变成一份清晰的笔记——摘要、决策、待办事项、原话引用。录音和笔记并排存放在同一个 Workspace 中。人员和项目会被自动提取到知识图谱中，而已封存的 Workspace 对图谱始终不可见。',
        points: [
          '借助混合语义搜索，跨所有会议提问',
          '实体档案、相关会议、每周摘要',
          '私密提醒绝不离开 Mac，每条都链接回其来源录音或笔记——Ivy 提出建议，由你决定是否采纳',
          '待办事项也可推送到 Apple 提醒事项',
          '可导入 PDF、Office 文档、网页和图片——在设备端建立索引，供 Ivy 使用',
        ],
        alt: '知识图谱——会议、笔记、文档和人员汇成一张图，彼此之间以带类型的链接相连',
      },
      'receipts': {
        eyebrow: '出处凭证',
        title: '每条结论都能追溯到原始录音。',
        body: 'IndexOne 的笔记不要求你盲目信任。凡是基于实际发言内容的每一行，都带有一条凭证——点击即可直接跳到那一秒的音频，并显示发言人。转述或缺乏依据的内容不会获得凭证，哪些已经核实一眼便知。',
        points: [
          '点击一条结论，就能听到它的确切出处',
          '每条凭证都标有发言人和精确到秒的时间',
          '任何会议都可一键生成七种成果——跟进邮件、决策日志、工作工单、一对一回顾、站会纪要、销售回顾、面试记录',
          '已封存的文件夹绝不会泄露任何时间或发言人信息',
        ],
        alt: '生成笔记的出处凭证：每条有据可查的结论占一行，各自标明发言人和对应的音频时刻',
      },
      'markdown': {
        eyebrow: '永久归你',
        title: '纯 Markdown，不被锁定。',
        body: '每条笔记都会同时导出为原子化的 Markdown——包含 YAML front-matter、<code>[[wikilinks]]</code>、块级深层链接，还可选择导出为画布看板。它们就是归你所有的普通文件，任何编辑器都能打开。',
        points: [
          '加密的 SQLite 数据库是唯一的数据来源',
          '为 Claude Desktop 和 Claude Code 提供只读的本地 MCP 服务器',
          '导出为纯 Markdown，任何编辑器都能打开',
        ],
        alt: '一份结构化笔记——摘要、决策、待办事项和原话引用——旁边是它所链接的录音和笔记',
      },
      'notes': {
        eyebrow: '笔记',
        title: '不止会议笔记，而是你的全部笔记。',
        body: '一个功能完整的 Markdown 编辑器，与录音归档在同一批 Workspaces 中——适用于你写下的任何内容，而不仅仅是 IndexOne 转写的内容。选中任意段落，Ivy 菜单就会出现：润色、精简、调整语气、翻译、事实核查，或者直接输入你想做的事。',
        points: [
          '十九种 Ivy 操作，一键即达',
          '依据你自己的会议和笔记，而不是模型的猜测',
          '可将截图粘贴进笔记；截图保存在本地，并遵循所在 Workspace 的锁定状态',
        ],
        alt: '笔记编辑器中选中了一段文字，Ivy 命令菜单已打开，显示 Refine、Shorten、Change tone 等操作',
      },
      'shared-ivy': {
        eyebrow: 'Shared Ivy',
        title: '团队协作，依然端到端加密。',
        body: '把一份笔记或会议摘要发布到你所在组织的 Shared Ivy，你编辑时，它会为每位成员保持同步。所有内容在离开之前都已在你的 Mac 上加密封存——服务器上只存放密文、被包裹的密钥和公钥。',
        points: [
          '上传前使用组织内容密钥以 AES-256-GCM 加密封存',
          '发布前先验证——与锁定文件夹遵循同样的严格流程',
          '按文档设置权限——作者可为每份共享文档设为 <b>View only</b>（仅查看）或 <b>Can edit</b>（可编辑）',
          '可同时加入多个组织——每个组织都有各自独立的加密信息流',
          '共享<b>任务</b>——支持负责人、截止日期、子任务及同样的权限设置；任务存在于组织之内，因此需要登录账号',
        ],
        alt: 'Shared Ivy 视图：你所在组织与你共享的会议和笔记，每条都标明作者和所属组织',
      },
    },
  },
  pricing: {
    eyebrow: '价格',
    title: '抢先体验期间免费。',
    lead: '本地录音、转写、笔记和 Markdown 导出，无需账号，也无需付费。抢先体验期结束后的价格与供应情况将另行公布。',
    plans: {
      free: {
        name: 'Free',
        badge: '现已推出',
        price: '$0',
        per: '/ 抢先体验期',
        tagline: '本地录音、转写、笔记与导出。',
        points: [
          '不限次数的设备端录音与转写',
          '会中 Ivy，以及向知识库提问',
          '语义搜索与自动生成的知识图谱',
          '独立笔记，配备 Ivy 辅助编辑器',
          '端到端加密共享，可按文档设置 View only / Can edit（需要账号）',
          'Workspaces、可组合的项目，以及离线导入 Notion / Obsidian / Apple Notes / Markdown',
          '加密分享链接，可设置有效期、可选密码和打开次数上限',
          '按 Workspace 和文件夹设置 Touch ID 锁，采用 AES-256 加密',
          '屏幕共享时自动重新锁定',
          '本地 MCP 服务器与 Markdown 导出',
        ],
        cta: '下载 macOS 版',
      },
      pro: {
        name: 'Pro',
        badge: '即将推出',
        price: '规划中',
        tagline: '价格与供应情况待公布。',
        points: [
          '包含 Free 版的全部功能',
          '在你的多台 Mac 和 iPhone 之间端到端加密同步',
          '零知识加密云备份',
          '可选的低延迟托管 Ivy（经脱敏）',
          '自定义配方与自动化',
        ],
        cta: '在 GitHub 上关注',
      },
      team: {
        name: 'Team',
        badge: '即将推出',
        price: '规划中',
        tagline: '价格与供应情况待公布。',
        points: [
          '包含 Pro 版的全部功能',
          'SSO 与 SCIM 用户配置',
          '安全策略、数据保留与审计日志',
          '优先支持与 SLA',
        ],
        cta: '联系我们',
      },
    },
  },
  compare: {
    eyebrow: '竞品对比',
    title: 'IndexOne 与其他产品的对比。',
    lead: 'Obsidian、Notion、Evernote、Bear 和 Amie 在各自的领域都很出色。IndexOne 则专为会议中发生的一切而打造——录制会议、在你的 Mac 上转写，并就会议内容提问——它还能把笔记写入你的 Obsidian 知识库。',
    capability: '功能',
    caption: 'IndexOne 与其他笔记应用的对比',
    labels: { yes: '支持', partial: '部分支持', no: '不支持', unknown: '未知' },
    notStated: '未说明',
    footnote: '依据各厂商公开的价格与功能页面，核对于 2026 年 10 月。套餐和功能可能变化——做决定前请查看厂商官网。产品名称均为其各自所有者的商标；IndexOne 与它们并无关联。',
    rows: {
      'capture': {
        criterion: '录制通话双方',
        cells: ['麦克风与系统音频，分作两路音轨', '仅麦克风（核心插件“录音机”）', '桌面应用；浏览器中仅支持麦克风', '桌面端会议录制', '不支持录音', '桌面端，无需机器人入会'],
      },
      'local-transcription': {
        criterion: '在设备上转写',
        cells: ['设备端 Whisper；无云端转写', '无内置转写', '云端', '云端', '不支持转写', '云端'],
      },
      'local-ai': {
        criterion: 'AI 可完全在设备上运行',
        cells: ['设备端 Ivy 或本地 Ollama', '无内置 AI；依赖社区插件', '仅限云端', '仅限云端', '无内置 AI', '仅限云端'],
      },
      'ask-all': {
        criterion: '跨所有历史会议和笔记提问',
        cells: ['回答附带出处', '仅限社区插件', 'Business 套餐；附带出处', 'AI Assistant 可跨笔记使用；会议 AI 仅针对单次录音', '', 'Pro 版可与历史录音对话；未说明是否附带引用'],
      },
      'local-data': {
        criterion: '数据默认留在设备上',
        cells: ['', '本地文件', 'Notion 云端', 'Evernote 云端', '本地数据库；Pro 版可通过 iCloud 同步', 'Amie 云端'],
      },
      'markdown': {
        criterion: '笔记为归你所有的纯 Markdown 文件',
        cells: ['写入你的知识库；以加密数据库为数据源', '', '仅支持导出 Markdown', '导出为 ENEX、HTML 或 PDF', '数据库存储；支持导出 Markdown', ''],
      },
      'encryption': {
        criterion: '由你掌控的加密',
        cells: ['加密数据库、Touch ID 文件夹锁、端到端加密共享', '付费 Sync 服务提供端到端加密', '在 Notion 服务器上加密；非端到端', '仅可用密码短语加密选定文本', 'Pro 版可加密单条笔记', ''],
      },
      'platforms': {
        criterion: '平台',
        cells: ['macOS', 'macOS、Windows、Linux、iOS、Android', 'macOS、Windows、网页版、iOS、Android', 'macOS、Windows、网页版、iOS、Android', 'macOS、iOS、iPadOS、网页版（测试版）', 'macOS、Windows、iOS'],
      },
      'price': {
        criterion: '价格',
        cells: ['抢先体验期间免费', '免费；Sync 按年付费 $4/月起', '免费；AI 与会议笔记需 Business 套餐，按年付费 $20/月', '免费版最多 50 条笔记；Starter 版 $99/年', '免费；Pro 版 $29.99/年', '免费版含 25 次笔记额度；Pro 版按年付费 €20/月起'],
      },
    },
  },
  faq: {
    eyebrow: '常见问题',
    title: '大家最先会问的问题。',
    leadHtml: '这里是简短回答；详细内容请查看<a href="/docs.html">文档</a>。',
    items: [
      {
        question: 'IndexOne 免费吗？',
        answer: '是的，在抢先体验期间免费。本地录音、转写、笔记和导出，无需账号，也无需付费。抢先体验期结束后的价格将另行公布。',
      },
      {
        question: '我的音频会上传到云端吗？',
        answer: '不会。转写始终在你的 Mac 上进行。只有经过脱敏的文本才可能外发，而且只会发送给你亲自选择并同意使用的云端 AI。',
      },
      {
        question: 'Ivy 是什么？',
        answer: 'Ivy 是 IndexOne 内置的 AI。你可以在会议中向它提问而无需停止录音，也可以在会后针对你录制和写下的全部内容提问。每个回答都会注明它所依据的会议和笔记。Ivy 可以完全在你的 Mac 上运行，也可以通过本地 Ollama 运行，或者在你明确同意后，通过经过脱敏的云端服务商运行。',
      },
      {
        question: '需要联网吗？',
        answer: '只需联网一次，用来下载 Whisper 模型。此后，录音、转写、搜索和设备端 Ivy 都可离线使用。云端 AI 连接、连接器和共享功能则需要联网。',
      },
      {
        question: '我需要 Claude Code 吗？',
        answer: '只有当你保留它作为笔记撰写工具时才需要。你也可以改用 Codex、Anthropic API、兼容 OpenAI 的 AI 网关、本地 Ollama 或设备端模型。',
      },
      {
        question: '支持哪些语言？',
        answer: 'Whisper 可以转写多种语言。设备端 AI 方面，你可以选择支持多语言的 Qwen3 模型，或以波兰语为母语训练的 Bielik 模型。',
      },
      {
        question: '为什么 macOS 会请求“屏幕与系统录音”权限？',
        answer: 'macOS 正是通过这项权限，允许一个应用听到其他应用的音频——也就是通话中其他人的声音。IndexOne 只保存音频。',
      },
      {
        question: '戴耳机能用吗？Intel Mac 上能用吗？',
        answer: '都可以。对方的音频是从系统中采集的，而不是从扬声器录制，而且本应用是通用版本。大型设备端模型在 Apple Silicon 上运行效果最佳。',
      },
      {
        question: 'IndexOne 开源吗？',
        answer: '不开源。本应用可免费下载和使用，但源代码并未公开。2.8.0 及更早的版本在源代码公开期间，最初是以 GNU AGPL-3.0 许可证发布的。',
      },
    ],
  },
  changelog: {
    eyebrow: '更新日志',
    title: 'IndexOne 有哪些新变化',
    lead: 'macOS 应用的每个版本，最新的在前。下载最新版本，或在 GitHub 上查看所有构建和校验和。',
    download: '下载最新版本',
    github: 'GitHub 上的所有版本',
    latest: '最新',
    englishNote: '更新说明以英文发布。',
  },
  cta: {
    title: '让 Ivy 走进你的会议——掌控权留在你的 Mac 上。',
    lead: '本地优先的 macOS 应用。AI 可以留在本地，也可以在你选择时明确启用经过脱敏的云端 AI。',
    compare: '看看它与 Obsidian、Notion、Evernote、Bear 和 Amie 相比如何。',
    download: '下载 macOS 版',
    github: '在 GitHub 上查看',
    legacyHtml: '还在使用 2.8.0 或更早的版本？它的更新检查已经无法连接到我们。请手动下载一次<a href="{download}">最新版本</a>，将其拖入“应用程序”文件夹替换旧版本；你的资料库、录音和设置都会原样保留。从 2.9.0 起，应用会自动发现新版本。',
  },
  footer: {
    legalHtml: 'macOS 优先 · 设备端 Ivy · 本地优先 · 基于 Tauri、Angular 和 Rust 构建 · macOS 版免费 · © {year} <a href="{authors}">MonoOne</a> · 文字内容采用 <a href="{license}">CC BY 4.0</a> 许可',
  },
}

export default content
