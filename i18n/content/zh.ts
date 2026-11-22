import type { SiteContent } from './types'

const content: SiteContent = {
  meta: {
    home: {
      title: 'IndexOne — Mac 会议笔记与转写，内置 Ivy',
      description: '在 Mac 上录制并转写会议，向设备端 AI 助手 Ivy 提问，会中实时作答，也能跨越所有通话检索。个人或整个组织都能用，笔记始终是你的 Markdown。',
    },
    features: {
      breadcrumb: '功能',
      title: '功能一览 — IndexOne Mac 会议转写、Ivy 与笔记',
      description: 'Mac 上的双音轨会议转写、会中 Ivy、跨所有会议提问、出处凭证、项目、插件、本地 AI 服务器与 Markdown 导出——IndexOne 的全部功能。',
    },
    privacy: {
      breadcrumb: '隐私',
      title: 'IndexOne 隐私 — 设备端 AI，以及哪些数据会离开 Mac',
      description: '设备端转写与 AI、加密资料库、Touch ID 文件夹锁和脱敏防火墙。清楚看到每种 AI 选择会在何时发送什么，什么始终留在你的 Mac 上。',
    },
    pricing: {
      breadcrumb: '价格',
      title: 'IndexOne 价格，以及与 Obsidian、Notion 等的对比',
      description: 'IndexOne 在 Mac 上免费；可选云端套餐每月 49 PLN 起。从录音、转写、设备端 AI 和 Markdown 等方面，将它与 Obsidian、Notion、Evernote、Bear 和 Amie 逐项对比。',
    },
    changelog: {
      breadcrumb: '更新日志',
      title: '更新日志 — IndexOne Mac 版发布说明',
      description: 'IndexOne Mac 版每个版本的发布说明，最新的在前：Ivy、组织与隐私方面的新功能、修复和下载，并注明每个版本的发布日期。',
    },
    meetingBot: {
      breadcrumb: "会议机器人",
      title: "IndexOne 会议机器人 — 致会议参与者",
      description: "你参加的会议正在由 IndexOne 机器人录制。谁对数据负责、录制什么以及为何录制、保存多久，以及如何行使你的权利。",
    },
    ogImageAlt: 'IndexOne — Mac 会议笔记与转写，内置 Ivy',
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
    subHtml: 'IndexOne 录制你的通话，并<b>在你的 Mac 上</b>完成转写。会议进行中就能实时向 Ivy 提问，也能跨越你录下的所有内容检索。AI 可以在 Mac 上或你自己的本地 AI 服务器上运行，也可以由你明确选择启用<b>经过脱敏的云端 AI</b>。在 On this Mac 空间中，你的会议档案始终留在你的 Mac 上。',
    download: '下载 macOS 版',
    privacyCta: '了解隐私机制',
    note: '已签名并通过公证 · macOS 13.4+ · 支持 Apple Silicon（M1 及更新机型）· 笔记始终是属于你的 Markdown',
    videoLabel: 'IndexOne 90 秒导览：一边录制会议一边在旁记笔记；会后整理的笔记及从中提取的要点；发言人时间线；向 Ivy 提出跨整个知识库的问题并获得附带出处的回答；知识图谱；Workspaces 侧栏与设备端搜索；项目；People；以及一个因已加密封存而拒绝打开的 Workspace',
    play: '观看 90 秒导览',
  },
  home: {
    announce: { badge: '新版本', text: 'IndexOne {version} 已发布，看看有哪些变化' },
    pillars: {
      eyebrow: '为什么选择 IndexOne',
      title: '会议被记住，主动权在你的 Mac。',
      lead: 'IndexOne 对每次通话做的三件事，以及每件事在哪里运行。',
      items: {
        capture: {
          title: '听到通话双方',
          body: '你的麦克风和其他参与者的音频作为两路分别录制，并由 Whisper 在你的 Mac 上转写。',
          link: '录制与转写',
        },
        ivy: {
          title: '随时询问 Ivy',
          body: '在会议中提问而不中断录制，或跨越数月的通话提问。每个回答都会注明来源会议。',
          link: 'Ivy 如何工作',
        },
        privacy: {
          title: '用 Touch ID 封存',
          body: '加密的资料库，外加可用于任何工作区或文件夹的 AES-256 锁。锁定的文件夹对搜索、图谱和 MCP 不可见。',
          link: '隐私如何运作',
        },
      },
      mock: {
        question: '关于发布日期我们是怎么决定的？',
        answer: '发布推迟到 3 月 3 日，待 QA 通过后进行。',
        sources: '2 个来源',
        folders: ['董事会', '招聘', '1:1'],
      },
    },
    stats: {
      aria: 'IndexOne 数据一览',
      labels: [
        '每次通话的音频流：你和其他所有人',
        '录制和转写所需的账户',
        '可用于任何文件夹的 Touch ID 锁',
        '笔记编辑器中的 Ivy 操作',
        '每次会议一键生成的文档',
        '导入来源，完全离线',
      ],
    },
    showcase: {
      eyebrow: '在应用中查看',
      title: '从通话到答案，一个应用搞定。',
      lead: '录制会议、就会议提问、以 Markdown 保存。选择一个步骤查看。',
      tabsLabel: '产品导览',
      tabs: { record: '录制', ask: '提问', export: '保存' },
    },
    security: { more: '阅读隐私模型' },
    news: {
      eyebrow: '最新动态',
      title: '最近发布。',
      lead: 'IndexOne 更新频繁。以下是最新版本；发布说明为英文。',
      read: '阅读说明',
      all: '全部版本',
    },
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
        body: '通话中输入或说出问题，即可获得基于你录制过的所有会议的回答，并附上可直接打开的来源；录音全程不中断。选择 Ivy on this Mac，会议文本不会离开你的 Mac；在你首次同意之前，Claude Code 和 Codex 始终保持关闭。',
        link: 'Ivy 如何工作',
      },
      'capture': {
        title: '通话双方，都在你的 Mac 上转写',
        body: '你的麦克风和其他参会者的系统音频分作两路音轨采集，再由设备端 Whisper 合并为 Me / Others 对照文字稿。在 On this Mac 空间中，没有任何云端转写。',
        link: '采集与转写',
      },
      'receipts': {
        title: '每条结论都有凭证',
        body: '笔记中每一行有据可查的内容，都链接到它所对应的那一秒音频，并标明发言人。缺乏证据的内容不会获得凭证，哪些已经核实一目了然。',
        link: '出处凭证',
      },
      'security': {
        title: '在你的 Mac 上加密',
        body: '你的整个资料库在 Mac 上使用 SQLCipher 加密。Personal 以及你所属的每个组织也会在这台 Mac 上保留一份加密副本，因此无需联网也能打开。',
        link: '安全与隐私',
      },
      'locks': {
        title: '用 Touch ID 封存文件夹',
        body: '锁定一个 Workspace 或文件夹后，其中的笔记、文字稿和音频都会以 AES-256-GCM 加密封存。锁定期间，搜索、知识图谱、MCP 和音频播放器都看不到它。',
        link: '锁定机制',
      },
      'markdown': {
        title: '纯 Markdown，外加本地 MCP 服务器',
        body: '笔记以带 wikilink 的纯 Markdown 写入你的 Obsidian 知识库；运行在 127.0.0.1 上的只读 MCP 服务器，让 Claude 和其他智能体也能查询它们。由你决定它能读取哪些空间；组织默认关闭，直到你开启。',
        link: 'Markdown 与 MCP',
      },
    },
    seeAll: '查看全部功能',
  },
  privacy: {
    lifecycle: {
      "title": "数据生命周期 · 云端方案",
      "items": [
        {
          "title": "数据会保留多久？",
          "body": "云端音频默认保留30天，Personal和Team计划提供存储限额内最长90天的选项。笔记、转录和普通文件在存储限额内保留，直到所有者删除。"
        },
        {
          "title": "降级方案后会怎样？",
          "body": "取消在已付费周期结束时生效。有访问权限时仍可读取、导出和删除。"
        },
        {
          "title": "离开组织后谁保留数据？",
          "body": "组织内容留在组织内。离开或被撤销访问权限后，你将无法读取或导出这些内容。"
        }
      ]
    },
    eyebrow: '安全与隐私',
    title: '隐私不是一个开关，而是整个架构。',
    leadHtml: '在 On this Mac 空间中，转写、搜索和 Ivy on this Mac 可以<b>完全不联网</b>运行——只要关掉默认会主动联网的两项功能：启动时检查新版本，以及每天一次的使用统计。如果你选择 Claude Code 或 Codex，数据外发之前还有同意确认和脱敏防火墙两道关卡。',
    cards: {
      'offline': {
        title: '数据不出设备',
        body: '使用 Ivy on this Mac 和只需下载一次的模型，你的音频和文字稿都不会接触网络。推理全程在你的 Mac 上进行。',
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
        title: '我们默认发起的两项请求',
        body: '启动时，IndexOne 会向 GitHub 询问是否有新版本；请求中只带上你当前运行的版本号，别无其他。此外，它每天会发送一条很小的使用统计消息：随机安装 ID、应用和 macOS 版本、芯片类型、语言，以及你是否已登录——没有会议、笔记、录音或姓名。仅在你未登录时它才是匿名的；登录后，它会随你的账号一起发送。两者都可以在 <b>Settings → Privacy</b>（设置 → 隐私）中关闭。这是本页仅有的两件未经你要求就会发生的事，也正因如此，我们把它们写在这里。',
      },
    },
    tableCaption: '各 AI 服务商在哪里运行，以及会议文本是否会离开你的 Mac',
    tableHeaders: ['Ivy / 服务商', '运行位置', '会议文本会离开你的 Mac 吗？'],
    providers: {
      'on-device': { name: 'Ivy on this Mac', note: 'Bielik / Qwen', where: '完全本地' },
      'ivy-web': { name: 'Ivy on the web', note: 'Personal 和组织', where: '网页版 IndexOne', leaves: '会——该空间本身就在网页端' },
      'claude-code': { name: 'Claude Code', where: '本地 CLI → 云端' },
      'codex': { name: 'Codex', note: 'OpenAI 的 CLI，以无工具模式运行', where: '本地 CLI → 云端' },
      'local-server': { name: 'Local AI server', note: 'Ollama、LM Studio、oMLX 等', where: '你的 Mac 或你的网络', leaves: '服务器在本机时不会。网络中其他位置的服务器，须你确认其地址后才使用，且会先遮蔽人名' },
    },
    leavesYes: '仅在你同意后，且经过脱敏防火墙处理',
    leavesNo: '不会',
    shotAlt: 'IndexOne 隐私设置：用平实的语言说明文本外发前会移除哪些内容、哪些服务商属于云端，以及云端处理是否已获允许',
    footnote: 'IndexOne 用平实的语言告诉你，究竟有什么会离开你的 Mac——每一次云端 AI 调用都会被记录并展示给你。每个空间只有一项 AI 选择：Ivy on this Mac、Ivy on the web、Claude Code、Codex，或你自己的本地 AI 服务器。在 On this Mac 空间中，除非你选择 Claude Code、Codex 或网络中其他位置的本地 AI 服务器，会议始终留在你的 Mac 上。',
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
          '使用你自己的模型：笔记和回答可以来自 Ollama、LM Studio、oMLX、llama.cpp 或任何兼容 OpenAI 的服务器',
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
          'Plugins 页面中的 Ivy skills 可引导云端 Ivy 生成的笔记和回答——在 Ivy 窗口、笔记或录音栏中选择',
        ],
        alt: '笔记编辑器中选中了一段文字，Ivy 命令菜单已打开，显示 Refine、Shorten、Change tone 等操作',
      },
    },
  },
  offer: {
    "web": "打开网页版",
    "status": "云端方案现已开售。登录网页版即可购买方案或管理订阅。Mac 本地功能仍可使用。",
    "monthly": "按月，以 PLN 计价",
    "tax": "Personal 含税。Team 不含税：至少 2 个席位，每月共 150 PLN（税前）。按 23% 增值税计算，总计 184.50 PLN（每席位 92.25）。实际税率可能不同；购买前应用必须显示最终总额。",
    "trialTitle": "每月免费",
    "trial": "每个免费个人账户每个日历月（UTC）可获得 200,000 Ivy 单位和基础云端转写，无需绑卡。Mac 本地功能没有方案限制。",
    "meterTitle": "转写不限量",
    "meter": "付费方案没有转写上限。转写量很大时，部分录音可能需要几个小时才能完成；适用合理使用原则。Mac 本地转写始终即时完成。",
    "privacyTitle": "本地与云端",
    "privacy": "Mac 本地处理留在 Mac 上。标准账户云端在运营方可读取的服务器上存储和处理内容，并非端到端加密。模式遮蔽不等于完全匿名化。付费方案不会授予私人空间访问权。",
    "after": "Free 包含 1 GB 内的基础笔记、编辑、普通搜索、同步、阅读和导出，以及每月云端额度。付费方案提供更多云端 AI、转写和存储空间。",
    "team": "Personal 与每个组织的订阅和余额独立。Team 每席位含 225 万交互 Ivy 单位和 25 万自动化单位；自动化共用单位池。存储由组织共享。席位不改变权限。最多 2 个免费组织，每个 5 名成员，共享创建者账户存储。",
    "lifecycle": "云端音频默认保留 30 天；Free 可选 7/14/30 天，付费还可选 90 天。回收站保留 30 天。取消不删除内容；付费权限持续至周期结束。降级后超额仍可读取和导出，并有 90 天保护期。请在音频保留期结束前导出。",
    "docs": "方案与计费 · 英文文档",
    "comparison": "比较方案",
    "local": "Mac 本地工具",
    "basics": "基础云端笔记与同步",
    "ivy": "云端 Ivy 单位 / 月",
    "asr": "云端转写",
    "asrUnlimited": "不限量",
    "asrBasic": "包含",
    "storage": "云端存储",
    "included": "包含",
    "once": "一次试用",
    "seat": "每席位",
    "unit": "Ivy 单位是处理预算，不是原始模型 token，也不保证回答次数。GB = 十亿字节。"
},
  pricing: {
    "eyebrow": "按月，以 PLN 计价",
    "title": "选择工作内容存放的位置。",
    "lead": "Mac 上的 Free。可选云端，限额清晰。",
    "plans": {
        "free": {
            "name": "Free",
            "badge": "Mac 上可用",
            "price": "0 PLN",
            "per": "按月，以 PLN 计价",
            "tagline": "本地工作不受方案配额限制，仍受硬件限制。",
            "points": [
                "Mac 本地工具",
                "基础云端笔记与同步",
                "1 GB",
                "200k Ivy"
            ],
            "cta": ""
        },
        "personal": {
            "name": "Personal",
            "badge": "现已推出",
            "price": "49 PLN",
            "per": "含税 / 月",
            "tagline": "适用于个人云端空间。",
            "points": [
                "Mac 本地工具",
                "基础云端笔记与同步",
                "20 GB",
                "1.2M Ivy · 转写不限量",
                "云端录屏"
            ],
            "cta": "在网页版购买"
        },
        "team": {
            "name": "Team",
            "badge": "现已推出",
            "price": "75 PLN",
            "per": "税前 / 席位 / 月",
            "tagline": "适用于组织，至少两个席位。",
            "points": [
                "Mac 本地工具",
                "基础云端笔记与同步",
                "50 GB · 每席位",
                "2.5M Ivy · 转写不限量",
                "Google Meet 机器人",
                "云端录屏"
            ],
            "cta": "在网页版购买"
        }
    }
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
        cells: ['On this Mac 空间中使用设备端 Whisper', '无内置转写', '云端', '云端', '不支持转写', '云端'],
      },
      'local-ai': {
        criterion: 'AI 可完全在设备上运行',
        cells: ['Ivy on this Mac 或你自己的本地 AI 服务器', '无内置 AI；依赖社区插件', '仅限云端', '仅限云端', '无内置 AI', '仅限云端'],
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
        cells: ['加密数据库、Touch ID 文件夹锁，以及每个网页空间的加密本地副本', '付费 Sync 服务提供端到端加密', '在 Notion 服务器上加密；非端到端', '仅可用密码短语加密选定文本', 'Pro 版可加密单条笔记', ''],
      },
      'platforms': {
        criterion: '平台',
        cells: ['macOS', 'macOS、Windows、Linux、iOS、Android', 'macOS、Windows、网页版、iOS、Android', 'macOS、Windows、网页版、iOS、Android', 'macOS、iOS、iPadOS、网页版（测试版）', 'macOS、Windows、iOS'],
      },
      'price': {
        criterion: '价格',
        cells: ['Mac 上免费；云端 Personal 每月 49 PLN，Team 每席位 75 PLN（不含税）', '免费；Sync 按年付费 $4/月起', '免费；AI 与会议笔记需 Business 套餐，按年付费 $20/月', '免费版最多 50 条笔记；Starter 版 $99/年', '免费；Pro 版 $29.99/年', '免费版含 25 次笔记额度；Pro 版按年付费 €20/月起'],
      },
    },
  },
  faq: {
    eyebrow: '常见问题',
    title: '大家最先会问的问题。',
    leadHtml: '这里是简短回答；详细内容请查看<a href="/docs/">文档</a>。',
    items: [
      {
        question: 'IndexOne 免费吗？',
        answer: '是的，在 Mac 上免费。本地录音、转写、笔记和导出，无需账号，也无需付费。可选云端套餐（Personal 每月 49 PLN，Team 每席位 75 PLN 不含税）提供云端转写、云端 Ivy 和更多存储空间。',
      },
      {
        question: '我的音频会上传到云端吗？',
        answer: '在 On this Mac 空间中不会：转写通过 Whisper 在你的 Mac 上进行。只有文本可能外发：经过脱敏、在你同意后发送给 Claude Code 或 Codex；或在遮蔽人名、经你确认地址后，发送给你网络中的本地 AI 服务器。Personal 空间和组织空间位于网页版 IndexOne，因此它们的录音也存储在那里。',
      },
      {
        question: 'Ivy 是什么？',
        answer: 'Ivy 是 IndexOne 内置的 AI。你可以在会议中向它提问而无需停止录音，也可以在会后针对你录制和写下的全部内容提问。每个回答都会注明它所依据的会议和笔记。每个空间选择一种 AI：Ivy on this Mac、面向 Personal 和组织的 Ivy on the web、你自己的本地 AI 服务器，或在你明确同意后使用 Claude Code 或 Codex。',
      },
      {
        question: '需要联网吗？',
        answer: '只需联网一次，用来下载 Whisper 模型。此后，录音、转写、搜索和 Ivy on this Mac 都可离线使用。Personal 空间和组织空间可以从加密副本离线打开，并在你重新联网后发送你的修改。Ivy on the web、Claude Code、Codex 和连接器需要联网。',
      },
      {
        question: '我需要 Claude Code 吗？',
        answer: '不需要。每个空间只有一项 AI 选择：Ivy on this Mac、Ivy on the web（Personal 和组织）、Claude Code、Codex，或你自己的本地 AI 服务器，如 Ollama、LM Studio、oMLX 或 llama.cpp。',
      },
      {
        question: '支持哪些语言？',
        answer: 'Whisper 可以转写多种语言。设备端 AI 方面，你可以选择支持多语言的 Qwen3 模型，或以波兰语为母语训练的 Bielik 模型。Languages 插件会用你选择的语言撰写每条笔记，可添加第二语言，也能事后翻译会议，并维护人名和术语词汇表。',
      },
      {
        question: '为什么 macOS 会请求“屏幕与系统录音”权限？',
        answer: 'macOS 正是通过这项权限，允许一个应用听到其他应用的音频——也就是通话中其他人的声音。IndexOne 只保存音频。',
      },
      {
        question: '戴耳机能用吗？Intel Mac 上能用吗？',
        answer: '戴耳机可以用：对方的音频是从系统中采集的，而不是从扬声器录制。Intel Mac 不支持：IndexOne 需要搭载 Apple Silicon（M1 及更新机型）的 Mac。',
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
    versions: '版本',
    filterLabel: '显示版本',
    filters: { all: '全部', features: '新功能', fixes: '修复' },
    kinds: { major: '重大版本', minor: '新功能', patch: '修复' },
    count: { other: '{count} 个版本' },
    showOlder: '显示更早的版本',
    empty: '没有此类版本。',
  },
  meetingBot: {
    eyebrow: "致会议参与者",
    title: "IndexOne 机器人正在录制你的会议。",
    lead: "你来到这里，是因为 IndexOne 笔记机器人加入了你所在的 Google Meet 通话。本页说明谁在录制会议、录音会如何处理，以及你可以怎么做。",
    noticeLabel: "机器人在会议聊天中发送的消息",
    noticeNote: "机器人在被允许进入通话后，会用英文发送这条消息。消息发出之前，它不会录制任何内容。",
    cards: {
      bot: { title: "这是什么机器人", body: "一个以参与者身份加入 Google Meet 的笔记机器人，因此会出现在通话的参与者列表中。它的名称由派出它的组织设定，通常是该组织的名称，后面跟着“· IndexOne”，例如“Northwind · IndexOne”。" },
      controller: { title: "谁对你的数据负责", body: "派出机器人的组织，也就是机器人名称中显示的组织。它是你个人数据的控制者：由它决定是否录制会议、出于什么目的，以及之后如何处理录音。" },
      processor: { title: "IndexOne 做什么", body: "IndexOne 是处理者。它代表该组织、并且只按照该组织的指示录制、转写和保存会议。IndexOne 的服务提供方见 IndexOne 隐私政策。" },
      recorded: { title: "录制哪些内容", body: "会议的声音，以及据此生成的文字转写。机器人在通话中期间，你说的所有内容都会进入录音和转写。" },
      purpose: { title: "为什么录制", body: "为了让该组织获得会议笔记和摘要。录音保存在该组织的 IndexOne 工作区中，只有它允许的人才能打开。" },
      storage: { title: "保存多久", body: "录音在工作区中保留多久，由该组织决定。IndexOne 保存数据的期限，见 IndexOne 隐私政策。" },
    },
    policyLink: "IndexOne 隐私政策（波兰语）",
    rights: {
      eyebrow: "你的权利",
      title: "你可以提出反对、查看你的数据，并要求删除。",
      lead: "这些权利来自 GDPR。请先向派出机器人的组织行使，因为由它决定如何处理录音。",
      items: {
        object: { title: "反对", body: "你可以反对被录制。通话中，可以请主持人移除机器人，或者离开通话。会后，可以告诉该组织你反对使用这份录音。" },
        access: { title: "查阅", body: "你可以询问该组织是否持有包含你的录音或转写，并索取副本。" },
        erasure: { title: "删除", body: "你可以要求该组织删除录音，或删除转写中与你有关的部分。" },
        complaint: { title: "投诉", body: "你可以向数据保护监管机构投诉，例如你居住或工作所在的欧盟国家的监管机构。在波兰，该机构是个人数据保护局（UODO）局长。" },
      },
    },
    steps: {
      title: "如何行使你的权利",
      items: [
        { title: "会议进行中", body: "请主持人移除机器人，或者离开通话。你无需说明理由。" },
        { title: "会议结束后", body: "联系会议组织者，或机器人名称中显示的组织。由它负责答复你的请求。" },
        { title: "如果联系不上他们", body: "通过 IndexOne 隐私政策中的联系方式写信给 IndexOne，并说明是哪一场会议。IndexOne 会把你的请求转交给该组织。" },
      ],
    },
    note: "本页对 IndexOne 机器人作一般性说明。派出机器人的组织可能有自己更详细的隐私声明，你可以向它索取。",
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
    legalNav: '法律信息',
    terms: '服务条款（PL）',
    privacyPolicy: '隐私政策（PL）',
    withdrawal: '撤回权（PL）',
    dpa: '数据处理协议（PL）',
    meetingBot: '会议机器人：参会者须知',
    contact: '联系我们',
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
content.faq.items[0] = { question: "Free 包含哪些内容？", answer: content.offer.after }
content.faq.items.push(
  { question: content.offer.trialTitle, answer: content.offer.trial },
  { question: content.offer.meterTitle, answer: content.offer.meter },
  { question: content.offer.privacyTitle, answer: content.offer.privacy },
  { question: "谁为Team付费？", answer: content.offer.team },
  ...content.privacy.lifecycle.items.map(item => ({ question: item.title, answer: item.body })),
)
content.compare.rows.price.cells[0] = 'Free · Personal 49 PLN · Team 75 PLN'

export default content
