import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-visual" aria-hidden="true">
        <Image src="/images/hero-editor.png" alt="" fill priority sizes="(max-width: 768px) 100vw, 62vw" />
      </div>
      <div className="site-container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow hero-role">VISUAL CREATOR <span>/</span> CREATIVE DESIGNER</p>
          <h1>SHOHEI<br className="mobile-only" /> OISHI</h1>
          <p className="hero-tagline"><span>映像・デザイン・AIで、</span><wbr />伝わる形をつくる。</p>
          <p className="hero-capabilities">VIDEO / DESIGN / AI CREATIVE / ADVERTISING</p>
          <div className="hero-description">
            <p>広告・プロモーション映像を中心に、動画編集、バナー・Webデザイン、生成AIを活用したクリエイティブ制作に取り組んでいます。</p>
            <p>Meta広告・Google広告の運用経験を活かし、ターゲットや訴求を意識した、目的に合うクリエイティブ設計・制作を大切にしています。</p>
          </div>
          <div className="hero-actions">
            <Link className="button button--solid" href="/works/gift-promotion"><span className="play-small">▶</span> SHOWREELを見る</Link>
            <Link className="text-link" href="#works">作品を見る <span>↘</span></Link>
          </div>
        </div>
        <div className="hero-side-label" aria-hidden="true"><span>SCROLL</span><i /></div>
      </div>
      <div className="hero-credit">VISUAL / CONCEPT PLACEHOLDER</div>
    </section>
  );
}
