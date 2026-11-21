import type { SiteContent } from './types'

const content: SiteContent = {
  meta: {
    home: {
      title: 'IndexOne — Ivy搭載、Mac向け議事録・文字起こしアプリ',
      description: 'Mac上で会議を録音・文字起こしし、デバイス上のAI、Ivyに会議中でも過去の通話全体についても質問できます。個人でも組織でも使え、ノートはMarkdownで残ります。',
    },
    features: {
      breadcrumb: '機能',
      title: '機能 — Mac向け会議の文字起こし、Ivy、ノート',
      description: 'Mac上での2系統の文字起こし、会議中のIvy、すべての会議への質問、根拠リンク、プロジェクト、プラグイン、ローカルAIサーバー、Markdownエクスポート。',
    },
    privacy: {
      breadcrumb: 'プライバシー',
      title: 'IndexOneのプライバシー — デバイス上のAIとMacから出るもの',
      description: 'デバイス上の文字起こしとAI、暗号化されたライブラリ、Touch IDのフォルダーロック、墨消しファイアウォール。どのAIを選ぶと何がいつ送られるかを明示します。',
    },
    pricing: {
      breadcrumb: '料金',
      title: 'IndexOneの料金とObsidian・Notionなどとの比較',
      description: 'IndexOneはMacでは無料です。オプションのクラウドプランは月額49 PLNから。録音、文字起こし、デバイス上のAI、Markdownの観点で、Obsidian、Notion、Evernote、Bear、Amieと比較できます。',
    },
    changelog: {
      breadcrumb: '更新履歴',
      title: '更新履歴 — Mac版IndexOneのリリースノート',
      description: 'Mac版IndexOneの全リリースのノートを新しい順に。Ivy、組織、プライバシーの新機能、修正、ダウンロード、各バージョンのリリース日を掲載しています。',
    },
    ogImageAlt: 'IndexOne — Ivy搭載、Mac向け議事録・文字起こしアプリ',
  },
  common: {
    skipToContent: '本文へスキップ',
    homeAria: 'IndexOne ホーム',
    primaryNav: 'メインナビゲーション',
    footerNav: 'フッター',
    language: '言語',
  },
  nav: {
    features: '機能',
    privacy: 'プライバシー',
    pricing: '料金',
    compare: '比較',
    faq: 'よくある質問',
    docs: 'ドキュメント',
    github: 'GitHub',
    changelog: '更新履歴',
    download: 'ダウンロード',
  },
  theme: {
    label: 'テーマ',
    skinsGroup: 'テーマ',
    modesGroup: 'モード',
    skins: {
      studio: { label: 'Studio', description: '霞に溶ける空色、やわらかなグラデーション' },
      paper: { label: 'Paper', description: '温かみのある羊皮紙、読むためのデザイン' },
      minimalist: { label: 'Minimalist', description: '純粋なshadcn/ui、ニュートラル' },
    },
    modes: { light: 'ライト', dark: 'ダーク', system: 'システム' },
  },
  hero: {
    badgeLocal: 'ローカルファースト · macOS',
    badgeIvy: 'デバイス上で動くIvy',
    badgeStar: 'GitHubでスターする',
    githubAria: 'GitHub上のIndexOne',
    titleStrong: 'Ivyと一緒に議事録を——',
    titleSoft: 'どこで動かすかはあなたが決める。',
    subHtml: 'IndexOneは通話を録音し、<b>あなたのMac上で</b>文字起こしします。会議の最中にもIvyへ質問でき、これまでに録音したすべての内容についても尋ねられます。AIはMac上や自分のローカルAIサーバーで動かすことも、明示的に選んで<b>墨消し済みのクラウドAI</b>を使うこともできます。On this Macスペースでは、会議のアーカイブはずっとあなたのMacに残ります。',
    download: 'macOS版をダウンロード',
    privacyCta: 'プライバシーの仕組みを見る',
    note: '署名・公証済み · macOS 13.4以降 · Apple Silicon（M1以降）に対応 · ノートはあなたのものであるMarkdownのまま',
    videoLabel: 'IndexOneの90秒ツアー：ノートを横で入力しながら会議を録音する様子、会議後に書かれたノートとそこから抽出された項目、話者タイムライン、保管庫全体に対してIvyに質問し出典付きで回答を得る場面、ナレッジグラフ、Workspacesレールとデバイス上の検索、プロジェクト、People、そして封印されているため開くことを拒むWorkspace',
    play: '90秒ツアーを見る',
  },
  home: {
    announce: { badge: '新着', text: 'IndexOne {version} をリリースしました。変更点を見る' },
    pillars: {
      eyebrow: 'IndexOne を選ぶ理由',
      title: '会議は記憶され、主導権はあなたの Mac に。',
      lead: 'IndexOne がすべての通話で行う三つのこと、そしてそれぞれがどこで動くのか。',
      items: {
        capture: {
          title: '通話の両側を聞き取る',
          body: 'あなたのマイクと他の参加者の音声を二つのストリームとして録音し、Whisper があなたの Mac 上で文字起こしします。',
          link: '録音と文字起こし',
        },
        ivy: {
          title: 'Ivy に、今でも後でも',
          body: '録音を止めずに会議中に質問したり、数か月分の通話をまとめて質問したりできます。どの回答も出典の会議を示します。',
          link: 'Ivy のしくみ',
        },
        privacy: {
          title: 'Touch ID で封印',
          body: '暗号化されたライブラリに加え、任意のワークスペースやフォルダに AES-256 のロック。ロックされたフォルダは検索、グラフ、MCP から見えません。',
          link: 'プライバシーのしくみ',
        },
      },
      mock: {
        question: 'リリース日について何を決めましたか？',
        answer: 'QA の承認後、リリースは 3 月 3 日に変更です。',
        sources: '出典 2 件',
        folders: ['役員会', '採用', '1on1'],
      },
    },
    stats: {
      aria: '数字で見る IndexOne',
      labels: [
        '通話ごとの音声ストリーム：あなたと他の全員',
        '録音と文字起こしに必要なアカウント',
        '任意のフォルダに使える Touch ID ロック',
        'ノートエディタの Ivy アクション',
        'どの会議からもワンクリックで作れるドキュメント',
        'インポート元、すべてオフライン',
      ],
    },
    showcase: {
      eyebrow: 'アプリで見る',
      title: '通話から答えまで、ひとつのアプリで。',
      lead: '会議を録音し、質問し、Markdown として残す。ステップを選んで確認できます。',
      tabsLabel: '製品ツアー',
      tabs: { record: '録音', ask: '質問', export: '保存' },
    },
    security: { more: 'プライバシーモデルを読む' },
    news: {
      eyebrow: '新着情報',
      title: '最近のリリース。',
      lead: 'IndexOne は頻繁にリリースされます。最新のリリースはこちら。リリースノートは英語です。',
      read: 'ノートを読む',
      all: 'すべてのリリース',
    },
  },
  trust: {
    aria: 'ひと目でわかるポイント',
    items: ['デバイス上で文字起こし', '保存データをTouch IDでロック', 'クラウド不要', 'あなたのものであるプレーンなMarkdown'],
  },
  unique: {
    eyebrow: 'IndexOneだけの機能',
    title: '他のノートアプリにはできない、会議のための機能。',
    lead: 'ノートを保存するアプリも、通話を文字起こしするアプリも数多くあります。IndexOneは通話の双方の音声をMac上で録音し、会議中にIvyへ質問でき、書き出すすべての行に根拠を示します。',
    items: {
      'live': {
        title: '会議中にIvyに質問。データはすべてMacの中に',
        body: '通話中に質問を入力するか話しかけるだけで、これまで録音したすべての会議に基づく回答が、開ける出典付きで返ってきます。録音は止まりません。Ivy on this Macを選べば、会議のテキストがMacの外に出ることはありません。Claude CodeとCodexは、一度同意するまでオフのままです。',
        link: 'Ivyの仕組み',
      },
      'capture': {
        title: '通話の双方を、Mac上で文字起こし',
        body: 'あなたのマイクと、他の参加者のシステム音声を2つのストリームとして取り込み、デバイス上のWhisperがMe / Othersの文字起こしにまとめます。On this Macスペースでは、クラウドでの文字起こしは一切ありません。',
        link: '録音と文字起こし',
      },
      'receipts': {
        title: 'すべての記述に根拠がある',
        body: 'ノート内の根拠のある各行は、話者とともに、元になった音声の該当秒へリンクしています。証拠のない行には根拠リンクが付かないため、どこが検証済みかがひと目でわかります。',
        link: '根拠リンク（Receipts）',
      },
      'security': {
        title: 'Mac上で暗号化',
        body: 'ライブラリ全体はMac上でSQLCipherにより暗号化されています。Personalと、あなたが所属するすべての組織も、このMacに暗号化されたコピーを保持するため、ネットワークに接続しなくても開けます。',
        link: 'セキュリティとプライバシー',
      },
      'locks': {
        title: 'Touch IDで封印するフォルダー',
        body: 'Workspaceやフォルダーをロックすると、その中のノート、文字起こし、音声はAES-256-GCMで封印されます。ロック中は検索、グラフ、MCP、オーディオプレーヤーのいずれからも見えなくなります。',
        link: 'ロックの仕組み',
      },
      'markdown': {
        title: 'プレーンなMarkdownとローカルMCPサーバー',
        body: 'ノートはウィキリンク付きのプレーンなMarkdownとしてObsidianの保管庫に保存されます。127.0.0.1で動く読み取り専用のMCPサーバーを通じて、Claudeなどのエージェントがノートを参照できます。どのスペースを読めるかはあなたが選びます。組織はオンにするまでオフのままです。',
        link: 'MarkdownとMCP',
      },
    },
    seeAll: 'すべての機能を見る',
  },
  privacy: {
    lifecycle: {
      "title": "データのライフサイクル · クラウドプラン",
      "items": [
        {
          "title": "データはいつまで保存されますか？",
          "body": "クラウド音声は標準で30日間保存され、PersonalとTeamではストレージ上限内で最大90日間の保存を予定しています。ノート、文字起こし、通常のファイルは、ストレージ上限内で所有者が削除するまで保持されます。"
        },
        {
          "title": "プランを下げるとどうなりますか？",
          "body": "解約は支払い済み期間の終了時に適用されます。アクセス権があれば閲覧、エクスポート、削除は引き続き利用できます。"
        },
        {
          "title": "組織を離れた後、データは誰が保持しますか？",
          "body": "組織のコンテンツは組織に残ります。脱退やアクセス権の取り消し後は閲覧もエクスポートもできません。"
        }
      ]
    },
    eyebrow: 'セキュリティとプライバシー',
    title: 'プライバシーは設定ではなく、設計そのものです。',
    leadHtml: 'On this Macスペースでは、文字起こし、検索、Ivy on this Macが<b>ネットワークに一切つながらずに</b>動作します。必要なのは、初期設定で外部と通信する2つの機能、つまり起動時の新バージョン確認と1日1回の利用状況メッセージをオフにすることだけです。Claude CodeやCodexを選んだ場合も、その送信の手前には同意と墨消しファイアウォールが置かれます。',
    cards: {
      'offline': {
        title: 'デバイスの外には何も出ない',
        body: 'Ivy on this Macと一度ダウンロードするだけのモデルを使えば、音声も文字起こしもネットワークに触れることはありません。推論はあなたのMacの中で行われます。',
      },
      'at-rest': {
        title: '保存データを二重に暗号化',
        body: 'データベース全体がSQLCipherで暗号化されています。さらにフォルダーごとの<b>AES-256-GCM</b>ロックが、<b>Touch ID</b>でのみ解放されるマスターキーで保護されたコンテンツキーを追加します。',
      },
      'gated': {
        title: 'すべての読み取りを制御',
        body: '封印されロックされたフォルダーからは、アプリ、検索、グラフ、MCP、さらには音声の経路に至るまで、何ひとつ漏れません。ロックされた会議は単に<b>Locked</b>と表示されます。',
      },
      'seals': {
        title: '消去する前に、封印を検証',
        body: 'IndexOneは平文を消去する<b>前に</b>、暗号文が正しく復号できることを確認します。内容が失われることはなく、ロックはいつでも完全に元に戻せます。',
      },
      'screen-share': {
        title: '画面共有を検知',
        body: '監視機能が画面共有を検知した瞬間、封印済みフォルダーを自動で再ロックし、キャッシュされたキーを消去できます。共有中の画面からプライベートなノートが漏れることはありません。',
      },
      'firewall': {
        title: '墨消しファイアウォール',
        body: 'クラウドの要約機能を使う場合でも、メールアドレス、カード番号のような数字、電話番号が先に取り除かれます。クラウドへの送信は一度きりの同意の後ろで<b>フェイルクローズ</b>されます。オプションの名前マスキングモデルをダウンロードすれば、人名も置き換えられます。',
      },
      'update-check': {
        title: '初期設定で行う2つの通信',
        body: 'IndexOneは起動時に、新しいバージョンがあるかどうかをGitHubに問い合わせます。そのリクエストに含まれるのは現在のバージョンだけです。また1日に1回、小さな利用状況メッセージを送ります。内容はランダムなインストールID、アプリとmacOSのバージョン、チップの種類、言語、サインインしているかどうかだけで、会議、ノート、録音、名前は含まれません。匿名になるのはサインアウトしているときだけで、サインイン中はあなたのアカウントとともに送信されます。どちらも<b>Settings → Privacy</b>（設定 → プライバシー）でオフにできます。このページの中で、あなたが求めなくても行われるのはこの2つだけです。だからこそ、このページに記載しています。',
      },
    },
    tableCaption: '各AIプロバイダーの実行場所と、会議のテキストがMacの外に出るかどうか',
    tableHeaders: ['Ivy / プロバイダー', '実行場所', '会議のテキストはMacの外に出るか'],
    providers: {
      'on-device': { name: 'Ivy on this Mac', note: 'Bielik / Qwen', where: '完全にローカル' },
      'ivy-web': { name: 'Ivy on the web', note: 'Personalと組織', where: 'Web版IndexOne', leaves: 'はい。スペース自体がWeb上にあります' },
      'claude-code': { name: 'Claude Code', where: 'ローカルCLI → クラウド' },
      'codex': { name: 'Codex', note: 'OpenAIのCLI、ツールなしで実行', where: 'ローカルCLI → クラウド' },
      'local-server': { name: 'Local AI server', note: 'Ollama、LM Studio、oMLXなど', where: 'あなたのMacまたはネットワーク', leaves: 'このMac上のサーバーなら出ません。ネットワーク上の別の場所のサーバーへは、そのアドレスを確認した後にのみ、人名を伏せて送ります' },
    },
    leavesYes: '同意後のみ。墨消しファイアウォールを適用',
    leavesNo: 'いいえ',
    shotAlt: 'IndexOneのプライバシー設定。テキストが外に出る前に何が取り除かれるか、どのプロバイダーがクラウドか、そしてクラウド処理が許可されているかどうかを、わかりやすい言葉で示しています',
    footnote: 'IndexOneは、Macから何が出ていくのかをわかりやすい言葉で正確にお伝えします。クラウドAIへの呼び出しはすべて記録され、あなたに表示されます。各スペースで選べるAIは1つで、Ivy on this Mac、Ivy on the web、Claude Code、Codex、または自分のローカルAIサーバーから選びます。On this Macスペースでは、Claude Code、Codex、またはネットワーク上の別の場所にあるローカルAIサーバーを選ばない限り、会議はMacの中にとどまります。',
  },
  features: {
    eyebrow: '機能',
    title: 'ちゃんと覚えている、会議のためのツール。',
    lead: '暗号化された1つの保存先を、アプリ、ローカルMCPサーバー、エクスポートしたMarkdownファイルの3つの方法で使えます。1つのツリーにすべてが収まり、その上にプロジェクトが載り、Ivyはそのすべてを読み取ります。',
    items: {
      'workspaces': {
        eyebrow: 'Workspaces',
        title: 'すべてを1つのツリーに',
        body: '<b>Workspaces › フォルダー › 録音とノート</b>という1つのツリーを、1つのサイドバーにまとめました。広く使いたいときはレール表示に折りたためます。Workspaceをロックすれば、中身もすべて一緒に封印されます。',
        points: [
          '録音、ノート、タスク、プロジェクトを同じ場所に整理',
          '封印されたWorkspaceは名前だけを表示し、件数も中身も見せません',
          '行き場のない録音の整理をIvyに任せられます',
          '誤って削除しても、ゴミ箱に30日間（設定により最長1年）保管されます',
        ],
        alt: 'Workspacesサイドバー：録音、ノート、プロジェクトを収めたWorkspacesとフォルダーの1つのツリー。最下部にロックされたWorkspaceがあります',
      },
      'dashboards': {
        eyebrow: 'プロジェクト',
        title: '自分で組み立てるプロジェクト',
        body: 'ノート、録音、ドキュメント、人物、約束の台帳、リマインダーをプロジェクトに集め、<b>Brief / Overview / Commitments / Sources / People</b>のレンズで読み解けます。保存した質問、<b>リビングアンサー</b>をピン留めできます。最後の回答は回答日とともに保存され、求めればいつでも回答し直し、出典が読めなくなった瞬間に表示を控えます。プロジェクトに含まれる内容だけを根拠に、プロジェクトへ直接質問することもできます。',
        points: [
          'ノート、録音、ドキュメント、人物、約束の台帳、リマインダーリスト、リビングアンサーの7種類のタイル',
          '同じタイルを5つのレンズで表示。何も複製されません',
          'プロジェクトは自らの範囲を明示します。何を読めるのか、何を導き出したのか',
        ],
        alt: 'Briefレンズで表示したプロジェクト：ピン留めした質問への保存済みの回答、対応が必要な事項、その裏付けとなる最近の証拠',
      },
      'imports': {
        eyebrow: 'インポート',
        title: '今あるノートをそのまま持ち込む',
        body: 'Settings → Imports（設定 → インポート）から、<b>Notionのエクスポート</b>、<b>Obsidianの保管庫</b>、<b>Apple Notes</b>、<b>Markdownファイル</b>のフォルダー、<b>IndexOneのバックアップ</b>を取り込めます。すべてオフラインで完結し、アカウントもキーもネットワーク通信も不要です。どのインポートも最初にドライランを行うため、実際に書き込む前に何が書き込まれるかを確認できます。',
        points: [
          '5つのソース：Notionのエクスポート、Obsidianの保管庫、Apple Notes、Markdownファイルのフォルダー、IndexOneのバックアップ',
          'まずはドライラン。あなたが指示するまで何も書き込まれません',
          'インポートしたノートは専用の名前付きフォルダーに入り、Ivyは他の内容と同じように読み取ります',
        ],
        alt: 'Settings → Imports：Notion、Obsidian、Apple Notes、Markdownファイル、IndexOneのバックアップと、すべてこのMac上で行われ何もアップロードされないという説明',
      },
      'ivy': {
        eyebrow: 'Ivy',
        title: '会議の最中に、Ivyと話す。',
        body: 'ほとんどの議事録ツールにはない部分です。ウェイクフレーズかワンタップでIvyを呼び出すと、会議の記憶をもとに、開いて確認できる引用付きでその場で答えます。録音は止まりません。',
        points: [
          'Metalで動くデバイス上の推論モデル（Bielik-11B、Qwen）',
          'ハルシネーションではなく根拠のある回答。あなた自身の文字起こしから取得',
          '同意制のWeb検索もオプションで利用可能（初期設定はオフ）',
        ],
        alt: '録音中に会議の途中で質問し、Ivyが参照した出典とともにその場で答えている様子',
      },
      'ask': {
        eyebrow: '保管庫に質問',
        title: '何か月分もの通話を横断して質問。',
        body: 'こちらもIvyです。これまでに録音し書いてきたすべてを対象に質問できます。どの回答にも、元になった会議やノートが添えられるので、言葉をうのみにせず出典を開いて確かめられます。',
        points: [
          '質問の範囲を1つのWorkspaceやフォルダーに絞り込めます。そのサブツリー全体が対象となり、外側は含まれません',
          '会話は記憶されます。保管庫、ノート、会議ごとのスレッドが保持され、それぞれの画面に履歴ブラウザーがあります',
          '参照したフォルダーのいずれかが読めなくなった瞬間、その会話は消えます',
          '自分のモデルも使えます。ノートや回答をOllama、LM Studio、oMLX、llama.cpp、またはOpenAI互換の任意のサーバーで生成できます',
        ],
        alt: '何か月分もの会議を横断してIvyに質問し、1つの回答とその元になった会議の一覧が下に表示されている様子',
      },
      'transcription': {
        eyebrow: '録音と文字起こし',
        title: '通話の双方の声を聞き取ります。',
        body: '2系統の録音で、あなたのマイクと相手側のシステム音声を取り込み、それぞれをデバイス上で個別に文字起こしします。実時間に沿って統合し、すっきりとしたMe / Othersの文字起こしにまとめ、話している最中にはライブ字幕も表示します。',
        points: [
          'デバイス上のWhisper：tinyからlarge-v3まで、高速なturboビルドや量子化版も対応',
          '2ストリームによる話者の区別（あなたとそれ以外）と音声区間検出',
          'フローティング録音バーで、どこからでも録音（⌘⇧R）',
        ],
        alt: '時刻付きで統合されたMe / Othersの文字起こしと、その横の話者・トピックのタイムライン',
      },
      'memory': {
        eyebrow: 'ノートと記憶',
        title: '構造化されたノートと、自ら育つグラフ。',
        body: 'すべての通話が、要約、決定事項、アクションアイテム、引用を含むすっきりとしたノートになります。録音とノートは同じWorkspaceに並んで保存されます。人物やプロジェクトは自動で抽出されてナレッジグラフになり、封印されたWorkspaceはグラフからも隠されます。',
        points: [
          'ハイブリッドなセマンティック検索で、すべての会議を横断して質問',
          '人物・項目ごとの資料、関連する会議、週次ダイジェスト',
          'Macから出ることのないプライベートなリマインダー。それぞれ元の録音やノートにリンクし、Ivyが提案してあなたが承認します',
          'アクションアイテムはApple Remindersにも送れます',
          'PDF、Officeドキュメント、Webページ、画像を取り込み、デバイス上でIvy用にインデックス化',
        ],
        alt: 'ナレッジグラフ：会議、ノート、ドキュメント、人物を、種類付きのリンクで結んだ1枚の地図',
      },
      'receipts': {
        eyebrow: '根拠リンク',
        title: 'すべての記述を、録音までさかのぼれる。',
        body: 'IndexOneのノートは、信じてくださいとは言いません。実際に話された内容に基づく各行には根拠リンクが付き、クリックすれば話者とともに、その音声の該当秒へ直接ジャンプします。言い換えた行や裏付けのない行には付かないため、何が検証済みかがひと目でわかります。',
        points: [
          '記述をクリックすれば、どこで話されたかをそのまま聞けます',
          'すべての根拠リンクに話者と正確な秒数',
          'どの会議からもワンクリックで7種類の成果物：フォローアップメール、決定ログ、作業チケット、1on1のまとめ、スタンドアップ、営業のまとめ、面接メモ',
          '封印されたフォルダーからは、タイミングも話者も一切漏れません',
        ],
        alt: '生成されたノートの根拠リンク：根拠のある記述ごとに1行で、それぞれに話者と元の音声の秒数が付いています',
      },
      'markdown': {
        eyebrow: 'あなたのもの',
        title: 'プレーンなMarkdown。ロックインなし。',
        body: 'すべてのノートは、YAMLフロントマター、<code>[[wikilinks]]</code>、ブロック単位のディープリンク、キャンバスボードのオプションを備えた、粒度の細かいMarkdownとしてもエクスポートされます。あなたが所有する普通のファイルなので、どのエディターでも開けます。',
        points: [
          '暗号化されたSQLiteデータベースが唯一の信頼できる情報源',
          'Claude DesktopとClaude Code向けの、読み取り専用ローカルMCPサーバー',
          'どのエディターでも開けるプレーンなMarkdownエクスポート',
        ],
        alt: '要約、決定事項、アクションアイテム、引用を含む構造化されたノートと、そのリンク先の録音やノート',
      },
      'notes': {
        eyebrow: 'ノート',
        title: '議事録だけじゃない。あらゆるノートを。',
        body: '本格的なMarkdownエディターを、録音と同じWorkspacesに。IndexOneが文字起こしした内容だけでなく、あなたが書くあらゆるもののために。文章を選択するとIvyメニューが現れ、推敲、短縮、トーンの変更、翻訳、ファクトチェックができるほか、やりたいことをそのまま入力することもできます。',
        points: [
          'キー操作ひとつで使える19種類のIvyアクション',
          'モデルの推測ではなく、あなた自身の会議やノートに基づく結果',
          'スクリーンショットをノートに貼り付け可能。ローカルに保存され、Workspaceのロックにも従います',
          'PluginsのIvy skillsが、クラウドのIvyによるノートと回答を導きます。Ivyウィンドウ、ノート、録音バーから選べます',
        ],
        alt: 'テキストを選択し、Refine、Shorten、Change toneなどのアクションを表示したIvyコマンドメニューを開いたノートエディター',
      },
    },
  },
  offer: {
    "web": "Web アプリを開く",
    "status": "クラウドプランを販売中です。プランの購入やサブスクリプションの管理はWebアプリにサインインして行えます。Macのローカル機能は引き続き利用できます。",
    "monthly": "月額・PLN 表示",
    "tax": "Personal は税込。Team は税別で最低 2 席、月額合計 150 PLN（税別）。VAT 23% の場合は合計 184.50 PLN（1 席 92.25）。税率は異なる場合があり、購入前にアプリで最終金額を表示する必要があります。",
    "trialTitle": "毎月無料",
    "trial": "無料の個人アカウントには、毎暦月（UTC）200,000 Ivyユニットと基本的なクラウド文字起こしがカード不要で付与されます。Macのローカル機能にはプランの上限がありません。",
    "meterTitle": "文字起こし無制限",
    "meter": "有料プランには文字起こしの上限がありません。大量に文字起こしすると、一部の録音は完了まで数時間かかる場合があります。フェアユースが適用されます。Mac上のローカル文字起こしは常にすぐ完了します。",
    "privacyTitle": "ローカルとクラウド",
    "privacy": "Mac のローカル処理は Mac 内で完結。標準クラウドでは運営者が読めるサーバーで内容を保存・処理し、エンドツーエンド暗号化ではありません。パターンのマスキングは完全な匿名化ではありません。有料プランでも非公開スペースへの権限は付与されません。",
    "after": "Freeには、1 GBの範囲での基本的なノート、編集、通常の検索、同期、閲覧、エクスポートと、毎月のクラウド枠が含まれます。有料プランではクラウドAI、文字起こし、ストレージが増えます。",
    "team": "Personal と各組織の契約・残高は別です。Team は 1 席あたり対話用 Ivy 225 万単位と自動処理用 25 万単位を含み、自動処理分を共同プールにします。容量は共有。席はアクセス権を変えません。無料組織は最大 2、各 5 人で作成者のアカウント容量を共有します。",
    "lifecycle": "クラウド音声は既定で 30 日。Free は 7/14/30 日、有料は 90 日も選択可能。ごみ箱は 30 日。解約で内容は削除されず、有料権限は期間末まで有効。ダウングレード後の容量超過でも閲覧・書き出しと 90 日の保護期間があります。保持期限前に音声を書き出してください。",
    "docs": "プランと請求 · 英語の文書",
    "comparison": "プラン比較",
    "local": "Mac のローカルツール",
    "basics": "基本クラウドノートと同期",
    "ivy": "クラウド Ivy 単位 / 月",
    "asr": "クラウド文字起こし",
    "asrUnlimited": "無制限",
    "asrBasic": "含まれます",
    "storage": "クラウド容量",
    "included": "含まれます",
    "once": "一度の試用",
    "seat": "1 席あたり",
    "unit": "Ivy 単位は処理予算で、モデルの生トークンや回答回数の保証ではありません。GB は 10 億バイトです。"
},
  pricing: {
    "eyebrow": "月額・PLN 表示",
    "title": "作業場所を選びましょう。",
    "lead": "Mac で Free。明確な上限のオプションクラウド。",
    "plans": {
        "free": {
            "name": "Free",
            "badge": "Mac で利用可能",
            "price": "0 PLN",
            "per": "月額・PLN 表示",
            "tagline": "ローカル作業にプラン上限はありません。ハードウェアの制約はあります。",
            "points": [
                "Mac のローカルツール",
                "基本クラウドノートと同期",
                "1 GB",
                "200k Ivy"
            ],
            "cta": ""
        },
        "personal": {
            "name": "Personal",
            "badge": "提供中",
            "price": "49 PLN",
            "per": "税込 / 月",
            "tagline": "個人のクラウドスペース向け。",
            "points": [
                "Mac のローカルツール",
                "基本クラウドノートと同期",
                "20 GB",
                "1.2M Ivy · 文字起こし無制限",
                "クラウドの画面録画"
            ],
            "cta": "Webアプリで購入"
        },
        "team": {
            "name": "Team",
            "badge": "提供中",
            "price": "75 PLN",
            "per": "税別 / 席 / 月",
            "tagline": "組織向け、最低 2 席から。",
            "points": [
                "Mac のローカルツール",
                "基本クラウドノートと同期",
                "50 GB · 1 席あたり",
                "2.5M Ivy · 文字起こし無制限",
                "Google Meetボット",
                "クラウドの画面録画"
            ],
            "cta": "Webアプリで購入"
        }
    }
},
  compare: {
    eyebrow: '他社との比較',
    title: 'IndexOneと他のアプリの比較。',
    lead: 'Obsidian、Notion、Evernote、Bear、Amieは、それぞれの分野で優れたアプリです。IndexOneは、会議で起きることのために作られています。録音し、Mac上で文字起こしし、その内容について質問する。さらにObsidianの保管庫に書き込むこともできます。',
    capability: '機能',
    caption: 'IndexOneと他のノートアプリの比較',
    labels: { yes: 'あり', partial: '一部', no: 'なし', unknown: '不明' },
    notStated: '記載なし',
    footnote: '各社が公開している料金ページと機能ページに基づき、2026年10月に確認した内容です。プランや機能は変更される場合があるため、判断の前に各社のサイトをご確認ください。製品名は各社の商標であり、IndexOneはそれらの企業と提携していません。',
    rows: {
      'capture': {
        criterion: '通話の双方を録音',
        cells: ['マイクとシステム音声を2つのストリームで', 'マイクのみ（コアの音声レコーダー）', 'デスクトップアプリ。ブラウザーではマイクのみ', 'デスクトップの会議レコーダー', '録音なし', 'デスクトップ、ボットなし'],
      },
      'local-transcription': {
        criterion: 'デバイス上での文字起こし',
        cells: ['On this Macスペースではデバイス上のWhisper', '文字起こし機能は内蔵なし', 'クラウド', 'クラウド', '文字起こしなし', 'クラウド'],
      },
      'local-ai': {
        criterion: '完全にデバイス上で動かせるAI',
        cells: ['Ivy on this Mac、または自分のローカルAIサーバー', 'AIは内蔵なし。コミュニティプラグイン', 'クラウドのみ', 'クラウドのみ', 'AIは内蔵なし', 'クラウドのみ'],
      },
      'ask-all': {
        criterion: '過去のすべての会議とノートを横断して質問',
        cells: ['回答に出典を明示', 'コミュニティプラグインのみ', 'Businessプラン。出典を明示', 'ノート横断のAI Assistant。会議AIは録音ごと', '', 'Proで過去の録音とチャット。引用は記載なし'],
      },
      'local-data': {
        criterion: 'データは初期設定でデバイス上に保存',
        cells: ['', 'ローカルファイル', 'Notionのクラウド', 'Evernoteのクラウド', 'ローカルデータベース。ProでiCloud同期', 'Amieのクラウド'],
      },
      'markdown': {
        criterion: 'ノートを自分のものとしてプレーンなMarkdownファイルで所有',
        cells: ['保管庫に書き込み。暗号化データベースが情報源', '', 'Markdownエクスポートのみ', 'ENEX、HTML、PDFでエクスポート', 'データベース。Markdownエクスポート', ''],
      },
      'encryption': {
        criterion: '自分で管理できる暗号化',
        cells: ['暗号化データベース、Touch IDのフォルダーロック、各Webスペースの暗号化されたローカルコピー', '有料のSyncでエンドツーエンド暗号化', 'Notionのサーバー上で暗号化。エンドツーエンドではない', '選択したテキストのみパスフレーズ', 'Proで個別のノートのみ', ''],
      },
      'platforms': {
        criterion: '対応プラットフォーム',
        cells: ['macOS', 'macOS、Windows、Linux、iOS、Android', 'macOS、Windows、Web、iOS、Android', 'macOS、Windows、Web、iOS、Android', 'macOS、iOS、iPadOS、Web（ベータ）', 'macOS、Windows、iOS'],
      },
      'price': {
        criterion: '料金',
        cells: ['Macでは無料。クラウドPersonalは月額49 PLN、Teamは1席あたり税抜75 PLN', '無料。Syncは年払いで月額$4から', '無料。AIと会議メモにはBusinessが必要（年払いで月額$20）', '50ノートまで無料。Starterは年額$99', '無料。Proは年額$29.99', '25ノートクレジット付きで無料。Proは年払いで月額€20から'],
      },
    },
  },
  faq: {
    eyebrow: 'よくある質問',
    title: 'まず多く寄せられる質問。',
    leadHtml: 'ここでは簡潔にお答えします。詳しくは<a href="/docs/">ドキュメント</a>をご覧ください。',
    items: [
      {
        question: 'IndexOneは無料ですか？',
        answer: 'はい、Macでは無料です。ローカルでの録音、文字起こし、ノート、エクスポートには、アカウントも支払いも必要ありません。オプションのクラウドプラン（Personal 月額49 PLN、Team 1席あたり税抜75 PLN）で、クラウド文字起こし、クラウドのIvy、追加ストレージを利用できます。',
      },
      {
        question: '音声はクラウドに送られますか？',
        answer: 'On this Macスペースでは出ません。そこでは文字起こしはWhisperでMac上で行われます。外に出る可能性があるのはテキストだけです。墨消ししたうえで、同意後にClaude CodeかCodexへ。または人名を伏せたうえで、アドレスを確認した後にネットワーク上のローカルAIサーバーへ。PersonalスペースとWeb組織スペースはWeb版IndexOne上にあるため、その録音もWeb上に保存されます。',
      },
      {
        question: 'Ivyとは何ですか？',
        answer: 'IvyはIndexOneに組み込まれたAIです。録音を止めずに会議中に質問することも、会議の後にこれまで録音し書いてきたすべてを対象に質問することもできます。どの回答にも、元になった会議やノートが示されます。各スペースでAIを1つ選びます。Ivy on this Mac、PersonalとWeb組織向けのIvy on the web、自分のローカルAIサーバー、または明示的な同意のうえでClaude CodeかCodexです。',
      },
      {
        question: 'インターネット接続は必要ですか？',
        answer: 'Whisperモデルをダウンロードする最初の1回だけ必要です。その後は、録音、文字起こし、検索、Ivy on this Macがオフラインで動作します。Personalスペースと組織スペースは暗号化されたコピーからオフラインで開き、オンラインに戻ったときに編集内容を送信します。Ivy on the web、Claude Code、Codex、コネクターにはインターネット接続が必要です。',
      },
      {
        question: 'Claude Codeは必要ですか？',
        answer: 'いいえ。各スペースで選べるAIは1つです。Ivy on this Mac、Ivy on the web（Personalと組織）、Claude Code、Codex、またはOllama、LM Studio、oMLX、llama.cppなど自分のローカルAIサーバーのいずれかです。',
      },
      {
        question: 'どの言語に対応していますか？',
        answer: 'Whisperは多くの言語を文字起こしできます。デバイス上のAIには、多言語対応のQwen3モデルか、ポーランド語ネイティブのBielikモデルを選べます。Languagesプラグインは、選んだ言語ですべてのノートを書き、2つ目の言語を追加でき、会議を後から翻訳し、名前や用語の用語集を管理します。',
      },
      {
        question: 'macOSが「画面とシステムオーディオの録音」の許可を求めるのはなぜですか？',
        answer: 'この許可は、アプリが他のアプリの音声、つまり通話相手の声を聞くためにmacOSが用意している仕組みです。IndexOneが保存するのは音声だけです。',
      },
      {
        question: 'ヘッドフォンやIntel Macでも使えますか？',
        answer: 'ヘッドフォンは使えます。相手側の音声はスピーカーからではなくシステムから取り込まれます。Intel Macには対応していません。IndexOneにはApple Silicon（M1以降）を搭載したMacが必要です。',
      },
      {
        question: 'IndexOneはオープンソースですか？',
        answer: 'いいえ。アプリは無料でダウンロードして使えますが、ソースコードは公開していません。バージョン2.8.0以前は、ソースコードが公開されていた当時、GNU AGPL-3.0のもとで公開されていました。',
      },
    ],
  },
  changelog: {
    eyebrow: '更新履歴',
    title: 'IndexOne の新機能',
    lead: 'macOS アプリのすべてのリリースを新しい順に掲載しています。最新版をダウンロードするか、GitHub ですべてのビルドとチェックサムを確認できます。',
    download: '最新版をダウンロード',
    github: 'GitHub のすべてのリリース',
    latest: '最新',
    englishNote: 'リリースノートは英語で公開しています。',
    versions: 'バージョン',
    filterLabel: 'リリースを表示',
    filters: { all: 'すべて', features: '新機能', fixes: '修正' },
    kinds: { major: 'メジャーリリース', minor: '新機能', patch: '修正' },
    count: { other: '{count} 件のリリース' },
    showOlder: '以前のリリースを表示',
    empty: 'この種類のリリースはありません。',
  },
  cta: {
    title: '会議にIvyを。主導権はあなたのMacに。',
    lead: 'macOS向けのローカルファースト。AIをローカルにとどめることも、必要なときに明示的に選んで墨消し済みのクラウドAIを使うこともできます。',
    compare: 'Obsidian、Notion、Evernote、Bear、Amieとの比較を見る。',
    download: 'macOS版をダウンロード',
    github: 'GitHubで見る',
    legacyHtml: 'バージョン2.8.0以前をお使いですか？そのバージョンのアップデート確認は、もう私たちに届きません。<a href="{download}">最新リリース</a>を一度ダウンロードし、アプリケーションフォルダーにドラッグして古いものと置き換えてください。ライブラリ、録音、設定はそのまま残ります。2.9.0以降は、アプリが自動で新しいバージョンを見つけます。',
  },
  footer: {
    legalHtml: 'macOSファースト · デバイス上のIvy · ローカルファースト · Tauri、Angular、Rustで開発 · macOS版は無料 · © {year} <a href="{authors}">MonoOne</a> · テキストは<a href="{license}">CC BY 4.0</a>',
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
content.faq.items[0] = { question: "Freeには何が含まれますか？", answer: content.offer.after }
content.faq.items.push(
  { question: content.offer.trialTitle, answer: content.offer.trial },
  { question: content.offer.meterTitle, answer: content.offer.meter },
  { question: content.offer.privacyTitle, answer: content.offer.privacy },
  { question: "Teamの料金は誰が支払いますか？", answer: content.offer.team },
  ...content.privacy.lifecycle.items.map(item => ({ question: item.title, answer: item.body })),
)
content.compare.rows.price.cells[0] = 'Free · Personal 49 PLN · Team 75 PLN'

export default content
