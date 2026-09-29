import Image from "next/image";
import Reveal from "./Reveal";

const roastNoteUrl = "https://roast-note-coffee.vercel.app/";

const thumbnails = [
  {
    src: "/images/shift-camp/first-view.png",
    alt: "SHIFT CAMP ファーストビュー",
    label: "ファーストビュー",
    width: 1885,
    height: 892,
  },
  {
    src: "/images/shift-camp/learning-flow.png",
    alt: "SHIFT CAMP 学習導線",
    label: "学習導線",
    width: 1807,
    height: 789,
  },
  {
    src: "/images/shift-camp/voice.png",
    alt: "SHIFT CAMP 受講生のリアルな声",
    label: "受講生のリアルな声",
    width: 1852,
    height: 802,
  },
  {
    src: "/images/shift-camp/price.png",
    alt: "SHIFT CAMP 料金プラン",
    label: "料金プラン",
    width: 1870,
    height: 834,
  },
];

export default function ShiftCampProject() {
  return (
    <section id="web" className="section section--shift" aria-labelledby="shift-title">
      <div className="site-container">
        <Reveal>
          <div id="shift-title" className="section-title shift-section-title">
            <div className="section-title__main">
              <span className="section-index">05</span>
              <h2>WEB DESIGN / SPECIAL PROJECTS</h2>
              <span className="section-title__jp">Web制作・特設プロジェクト</span>
            </div>
            <span className="section-title__line" />
          </div>
        </Reveal>

        <Reveal>
          <article className="shift-project roast-project">
            <div className="shift-project__gallery">
              <div className="shift-browser">
                <div className="shift-browser__bar" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <Image
                  src="/images/roast-note/roast_note_fv01.png"
                  alt="ROAST NOTE ランディングページのファーストビュー"
                  width={1900}
                  height={870}
                  style={{ aspectRatio: "1900 / 874", objectFit: "contain" }}
                  sizes="(max-width: 900px) calc(100vw - 84px), 61vw"
                />
              </div>

              <div className="shift-thumbnails">
                <figure>
                  <div className="shift-thumbnail__image">
                    <Image
                      src="/images/roast-note/quiz.png"
                      alt="3分で好みのコーヒーを見つける診断セクション"
                      width={1587}
                      height={859}
                      sizes="(max-width: 900px) 42vw, 15vw"
                    />
                  </div>
                  <figcaption>コーヒー診断</figcaption>
                </figure>
                <figure>
                  <div className="shift-thumbnail__image">
                    <Image
                      src="/images/roast-note/collection.png"
                      alt="今日の気分から選ぶ4種類のコーヒー商品ラインナップ"
                      width={1492}
                      height={790}
                      sizes="(max-width: 900px) 42vw, 15vw"
                    />
                  </div>
                  <figcaption>コーヒー商品ラインナップ</figcaption>
                </figure>
                <figure>
                  <div className="shift-thumbnail__image">
                    <Image
                      src="/images/roast-note/cta.png"
                      alt="毎月届くコーヒー定期便への導線"
                      width={1612}
                      height={577}
                      sizes="(max-width: 900px) 42vw, 15vw"
                    />
                  </div>
                  <figcaption>定期便への導線</figcaption>
                </figure>
                <figure>
                  <div className="shift-thumbnail__image">
                    <Image
                      src="/images/roast-note/plans.png"
                      alt="LIGHT・STANDARD・RICHの3つの定期便プラン"
                      width={1458}
                      height={748}
                      sizes="(max-width: 900px) 42vw, 15vw"
                    />
                  </div>
                  <figcaption>定期便プラン</figcaption>
                </figure>
              </div>
            </div>

            <div className="shift-project__info">
              <div className="shift-project__labels">
                <p className="eyebrow">01 / LP / WEB DESIGN</p>
                <span>PERSONAL PROJECT / CONCEPT SITE</span>
              </div>
              <p className="shift-project__field-label">PROJECT NAME</p>
              <h3>ROAST NOTE</h3>
              <p className="shift-project__subtitle">コーヒー定期便サービス LP</p>

              <div className="shift-project__description">
                <p>
                  コーヒーのある豊かな暮らしをテーマにした、
                  <br className="shift-desktop-break" />
                  コーヒー定期便サービス「ROAST NOTE」の
                  <br className="shift-desktop-break" />
                  コンセプトLPを自主制作しました。
                </p>
                <p>
                  ブランドの世界観設計からサイト構成、
                  <br className="shift-desktop-break" />
                  商品選択・コーヒー診断・料金プラン・
                  <br className="shift-desktop-break" />
                  申込みまでの導線を設計。
                </p>
                <p>
                  生成AIをビジュアル制作やデザイン検討に活用し、
                  <br className="shift-desktop-break" />
                  企画・デザイン・実装まで一連の制作を行っています。
                </p>
                <p className="shift-project__note">
                  ※本サイトは実在する企業・サービスではなく、
                  <br className="shift-desktop-break" />
                  ポートフォリオ用に制作した架空のコンセプトサイトです。
                </p>
              </div>

              <dl className="shift-meta">
                <div>
                  <dt>OVERVIEW</dt>
                  <dd>Coffee Subscription LP / 架空ブランドの企画から申込み導線までを設計</dd>
                </div>
                <div>
                  <dt>ROLE</dt>
                  <dd>Planning / UI Design / AI Creative / Next.js実装</dd>
                </div>
                <div>
                  <dt>TOOLS</dt>
                  <dd>ChatGPT / Images2.5 / Codex / Next.js</dd>
                </div>
                <div><dt>POINT</dt><dd>架空ブランド企画 / LP構成設計 / UIデザイン / AI画像生成 / Next.js実装 / レスポンシブ対応</dd></div>
              </dl>

              <a
                className="button shift-project__button"
                href={roastNoteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW DETAIL <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        </Reveal>

        <Reveal>
          <article className="shift-project">
            <div className="shift-project__gallery">
              <div className="shift-browser">
                <div className="shift-browser__bar" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <Image
                  src="/images/shift-camp/first-view.png"
                  alt="SHIFT CAMP ランディングページのファーストビュー"
                  width={1885}
                  height={892}
                  sizes="(max-width: 900px) calc(100vw - 84px), 61vw"
                />
              </div>

              <div className="shift-thumbnails">
                {thumbnails.map((thumbnail) => (
                  <figure key={thumbnail.label}>
                    <div className="shift-thumbnail__image">
                      <Image
                        src={thumbnail.src}
                        alt={thumbnail.alt}
                        width={thumbnail.width}
                        height={thumbnail.height}
                        sizes="(max-width: 900px) 42vw, 15vw"
                      />
                    </div>
                    <figcaption>{thumbnail.label}</figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="shift-project__info">
              <div className="shift-project__labels">
                <p className="eyebrow">02 / LP / WEB DESIGN</p>
                <span>PERSONAL PROJECT / CONCEPT SITE</span>
              </div>
              <p className="shift-project__field-label">PROJECT NAME</p>
              <h3>SHIFT CAMP</h3>
              <p className="shift-project__subtitle">オンラインキャリアスクールLP</p>

              <div className="shift-project__description">
                <p>
                  生成AIを活用し、オンラインキャリアスクールを想定した
                  <br className="shift-desktop-break" />
                  架空ブランド「SHIFT CAMP」のランディングページを自主制作しました。
                </p>
                <p>
                  企画・構成・デザイン・画像生成・コーディングまで、
                  <br className="shift-desktop-break" />
                  一連の制作工程をAIを活用しながら制作しています。
                </p>
                <p>
                  未経験者向けサービスを想定し、
                  <br className="shift-desktop-break" />
                  安心感・信頼感・前向きな印象が伝わるよう、
                  <br className="shift-desktop-break" />
                  白とブルーを基調に設計しています。
                </p>
                <p className="shift-project__note">
                  ※本サイトは実在する企業・サービスの案件ではなく、
                  <br className="shift-desktop-break" />
                  ポートフォリオ用に制作した架空のコンセプトサイトです。
                </p>
              </div>

              <dl className="shift-meta">
                <div><dt>OVERVIEW</dt><dd>Online Career School LP / 未経験者向けサービスのCV導線設計</dd></div>
                <div>
                  <dt>ROLE</dt>
                  <dd>Planning / UI Design / AI Creative / Next.js実装</dd>
                </div>
                <div>
                  <dt>TOOLS</dt>
                  <dd>Figma / ChatGPT / Image Generation / Codex</dd>
                </div>
                <div><dt>POINT</dt><dd>キャリアスクールLP / CV導線設計 / UIデザイン / AI画像活用 / Next.js実装</dd></div>
              </dl>

              <a
                className="button shift-project__button"
                href="https://shift-camp.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW DETAIL <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
