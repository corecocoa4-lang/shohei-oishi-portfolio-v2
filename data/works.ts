export type VideoWork = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  thumbnail: string;
  tone: string;
  video?: string;
  duration?: string;
  role?: string[];
  objective?: string;
  productionPoint?: string;
  featured?: boolean;
};

export type AiWork = Omit<VideoWork, "featured"> & {
  process: string[];
};

export type GraphicWork = {
  id: string;
  slug: string;
  title: string;
  category: string;
  target: string;
  tool: string;
  image?: string;
  tone?: string;
  keyword?: string;
  format?: "square" | "video-cta";
  visible?: boolean;
};

export type LandingPageWork = {
  id: string;
  slug: string;
  title: string;
  purpose: string;
  target: string;
  scope: string[];
  image: string;
  width: number;
  height: number;
  tools: string[];
  type: string;
};

// 実案件の公開情報。担当範囲や制作背景は、必要に応じて本人確認後に追記してください。
export const videoWorks: VideoWork[] = [
  {
    id: "F1",
    slug: "gift-promotion",
    title: "GIFT｜プロモーション動画",
    category: "PROMOTION",
    description: "住宅の空間や暮らしの魅力を伝えるプロモーション動画。映像の見やすさとテンポを意識して編集しました。",
    tools: ["Premiere Pro"],
    role: ["動画編集", "構成", "テロップ", "BGM / SE", "広告クリエイティブ"],
    duration: "00:51",
    thumbnail: "/images/works/gift.jpg",
    video: "/videos/gift.mp4",
    tone: "tone-studio",
    objective: "住宅の特徴と暮らしのイメージを、短い時間で分かりやすく伝えること。",
    productionPoint: "室内外の映像を組み合わせ、空間の魅力が自然に伝わる流れを意識しました。",
    featured: true,
  },
  {
    id: "01",
    slug: "katikuri-service",
    title: "サービス紹介アニメーション",
    category: "PROMOTION",
    description: "企業が抱える課題をイラストとテキストで整理し、サービス内容を分かりやすく伝える紹介動画。",
    tools: ["Premiere Pro", "After Effects"], role: ["動画編集", "構成", "テロップ", "簡単なアニメーション"], duration: "01:13", thumbnail: "/images/works/katikuri.jpg", video: "/videos/katikuri.mp4", tone: "tone-motion",
    objective: "サービスの必要性と特徴を、視覚的に理解しやすい構成で伝えること。",
    productionPoint: "説明の流れに合わせてイラストとテキストを展開し、情報量を整理しました。",
  },
  {
    id: "02",
    slug: "tokuten-course",
    title: "講座プロモーション動画",
    category: "SEMINAR / EDUCATION",
    description: "講座の内容と魅力を、出演映像・テロップ・画面構成で伝えるプロモーション動画。",
    tools: ["Premiere Pro"], role: ["動画編集", "テロップ"], duration: "01:09", thumbnail: "/images/works/tokuten.jpg", video: "/videos/tokuten.mp4", tone: "tone-interview",
    objective: "講座の対象者と学べる内容を短時間で分かりやすく伝えること。",
    productionPoint: "話の要点が追いやすいテロップと、視線を整理するレイアウトを意識しました。",
  },
  {
    id: "03",
    slug: "dmm-aquarium-01",
    title: "DMMかりゆし水族館｜キャンペーン動画 01",
    category: "ADVERTISEMENT",
    description: "沖縄県民限定キャンペーンの内容を、印象的なグラフィックとテンポで伝える広告動画。",
    tools: ["Premiere Pro", "Canva"], role: ["動画編集", "構成", "テロップ", "広告クリエイティブ"], duration: "01:00", thumbnail: "/images/works/dmm_1.jpg", video: "/videos/dmm_1.mp4", tone: "tone-product",
    objective: "キャンペーン情報を視聴者へ端的かつ印象的に届けること。",
    productionPoint: "大胆な文字組みと切り替えで、広告としての視認性を高めました。",
  },
  {
    id: "04",
    slug: "dmm-aquarium-02",
    title: "DMMかりゆし水族館｜キャンペーン動画 02",
    category: "ADVERTISEMENT",
    description: "水族館の映像とキャンペーン訴求を組み合わせたプロモーション動画。",
    tools: ["Premiere Pro", "Canva"], role: ["動画編集", "構成", "テロップ", "広告クリエイティブ"], duration: "01:01", thumbnail: "/images/works/dmm_2.jpg", video: "/videos/dmm_2.mp4", tone: "tone-social",
    objective: "施設の魅力とキャンペーン内容を一つの映像として伝えること。",
    productionPoint: "水中映像の世界観を活かしながら、訴求テキストの読みやすさを整えました。",
  },
  {
    id: "05",
    slug: "business-social-video",
    title: "ビジネス講座｜SNS動画",
    category: "SOCIAL MEDIA / EDUCATION",
    description: "出演者の解説を中心に、重要なメッセージを大きなテロップで伝えるスクエア動画。",
    tools: ["Premiere Pro"], role: ["動画編集", "テロップ"], duration: "01:12", thumbnail: "/images/works/business.jpg", video: "/videos/business.mp4", tone: "tone-interview",
    objective: "SNS上で内容の要点を素早く理解できるようにすること。",
    productionPoint: "スマートフォンでも読みやすい文字サイズと、発話に合わせたテンポを意識しました。",
  },
  {
    id: "06",
    slug: "kokyou-event",
    title: "公共工事研究会 総会｜イベント映像",
    category: "SEMINAR / EDUCATION",
    description: "総会・講演会の会場風景や登壇シーンをまとめたイベント映像。",
    tools: ["Premiere Pro"], role: ["動画編集"], duration: "00:50", thumbnail: "/images/works/kokyou.jpg", video: "/videos/kokyou.mp4", tone: "tone-seminar",
    objective: "イベントの雰囲気と内容を短いダイジェストとして伝えること。",
    productionPoint: "会場の規模感と登壇者の様子が伝わるカット構成を意識しました。",
  },
];

export const aiWorks: AiWork[] = [
  {
    id: "A1", slug: "volt-concept", title: "VOLT｜Concept CM", category: "PRODUCT CONCEPT",
    description: "雨の都市を舞台に、スピード感と機能性を表現したシューズブランドのコンセプトCM。",
    tools: ["Kling 3.0", "Premiere Pro"], process: ["Planning", "AI Video", "Editing"], role: ["企画", "AI動画生成", "動画編集"],
    duration: "00:15", thumbnail: "/images/works/volt_ai.jpg", video: "/videos/volt_ai.mp4", tone: "tone-sneaker",
    objective: "架空ブランドの印象と商品のアクティブな価値を短時間で伝えること。",
    productionPoint: "雨、水しぶき、夜の街を共通モチーフにし、疾走感のある広告表現へまとめました。",
  },
  {
    id: "A2", slug: "mogu-concept", title: "MOGU｜Concept CM", category: "FOOD DELIVERY / CONCEPT CM",
    description: "フードデリバリーサービスを題材に、注文から配達までの体験をテンポよく描いたコンセプトCM。生成AIによる映像制作に加え、Premiere ProとAfter Effectsを使用して編集・演出を行い、実際のWeb広告を想定して制作しています。",
    tools: ["Premiere Pro", "After Effects"], process: ["Planning", "AI Video", "Premiere Pro", "After Effects"], role: ["Planning", "AI Video", "Premiere Pro", "After Effects"],
    duration: "00:15", thumbnail: "/images/works/mogu_ai.jpg", video: "/videos/mogu_ai.mp4", tone: "tone-music",
    objective: "フードデリバリーの注文から配達までの便利さと楽しさを、短いWeb広告として印象的に伝えること。",
    productionPoint: "注文、配達、受け取りの流れをテンポよくつなぎ、Premiere ProとAfter Effectsで広告らしい編集・演出に整えました。",
  },
  {
    id: "A3", slug: "aura-concept", title: "AURA｜Concept Movie", category: "CONCEPT MOVIE",
    description: "人物の感情と光の変化を軸に、静かな余韻を表現した短尺コンセプトムービー。",
    tools: ["Seedance 2.0", "Premiere Pro"], process: ["Planning", "AI Video", "Editing"], role: ["企画", "AI動画生成", "動画編集"],
    duration: "00:15", thumbnail: "/images/works/aura_ai.jpg", video: "/videos/aura_ai.mp4", tone: "tone-aura",
    objective: "短い映像の中で、人物の心情とシネマティックな世界観を印象的に伝えること。",
    productionPoint: "自然光のような温かい光と繊細な表情をつなぎ、感情の余韻が残るテンポに整えました。",
  },
  {
    id: "A4", slug: "etoile-concept", title: "ÉTOILE｜Concept CM", category: "BEAUTY CONCEPT",
    description: "香りの広がりと上質感を、光・花びら・質感で描いたフレグランスのコンセプトCM。",
    tools: ["Kling 3.0", "Veo 3.1", "Premiere Pro"], process: ["Planning", "AI Video", "Editing"], role: ["企画", "AI動画生成", "動画編集"],
    duration: "00:16", thumbnail: "/images/works/etoile_ai.jpg", video: "/videos/etoile_ai.mp4", tone: "tone-earphones",
    objective: "香水の華やかさと繊細な香りのイメージを、視覚表現として印象に残すこと。",
    productionPoint: "暖色の光と舞う花びらを一貫したモチーフにし、商品カットへ自然につながる構成にしました。",
  },
];

export const graphicWorks: GraphicWork[] = [
  { id: "G1", slug: "housing-loan-ad", category: "BANNER / WEB AD", title: "住宅ローン｜Web広告バナー", target: "30〜50代", tool: "Photoshop", image: "/images/banners/hataraku-01.webp" },
  { id: "G2", slug: "power-stone-course-ad", category: "BANNER / SNS AD", title: "パワーストーン講座｜広告バナー", target: "30〜50代女性", tool: "Photoshop", image: "/images/banners/power-stone.webp", visible: false },
  { id: "G3", slug: "subconscious-coaching-ad", category: "BANNER / SNS AD", title: "コーチ養成講座｜SNS広告バナー", target: "20〜40代女性", tool: "Photoshop", image: "/images/banners/senzai-01.webp" },
  { id: "G4", slug: "zone-meditation-ad", category: "BANNER / SNS AD", title: "潜在意識講座｜広告バナー", target: "20〜40代女性", tool: "Photoshop", image: "/images/banners/zone-meditation.webp", visible: false },
  { id: "G5", slug: "zone-program-ad", category: "BANNER / SNS AD", title: "自己覚醒プログラム｜広告バナー", target: "20〜40代女性", tool: "Photoshop", image: "/images/banners/zone-01.webp" },
  { id: "G6", slug: "global-business-ad", category: "BANNER / WEB AD", title: "ビジネス講座｜広告バナー", target: "30〜50代", tool: "Photoshop", image: "/images/banners/business-01.webp" },
];

export const landingPageWorks: LandingPageWork[] = [
  {
    id: "LP 01",
    slug: "publishing-campaign",
    title: "出版記念キャンペーンLP",
    purpose: "申込・購入促進",
    target: "個人ユーザー / 見込み顧客",
    scope: ["構成整理", "デザイン", "CTA設計"],
    image: "/images/lp/shupankinen.jpg",
    width: 900,
    height: 30344,
    tools: ["Photoshop"],
    type: "LP DESIGN / WEB DESIGN",
  },
  {
    id: "LP 02",
    slug: "human-capital-iso30414",
    title: "人的資本・ISO30414紹介LP",
    purpose: "サービス理解 / 問い合わせ獲得",
    target: "法人 / 人事担当者",
    scope: ["構成整理", "デザイン", "情報設計"],
    image: "/images/lp/jinteki.jpg",
    width: 900,
    height: 21379,
    tools: ["Photoshop"],
    type: "LP DESIGN / WEB DESIGN",
  },
];

export const getLandingPageBySlug = (slug: string) => landingPageWorks.find((work) => work.slug === slug);

export const toolGroups = [
  { category: "MAIN TOOLS", tools: ["Premiere Pro", "Photoshop", "Canva"] },
  { category: "OTHER SKILLS", tools: ["After Effects", "HTML", "CSS"] },
];

export const allVideoWorks: VideoWork[] = [
  ...videoWorks,
  ...aiWorks.map(({ process: _process, ...work }) => work),
];

export const getWorkBySlug = (slug: string) => allVideoWorks.find((work) => work.slug === slug);
