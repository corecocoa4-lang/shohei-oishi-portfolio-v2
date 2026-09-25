import Image from "next/image";
import Link from "next/link";
import { videoWorks } from "@/data/works";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const gift = videoWorks.find((work) => work.slug === "gift-promotion")!;
const katikuri = videoWorks.find((work) => work.slug === "katikuri-service")!;

export default function FeaturedWork() {
  return (
    <section id="works" className="section section--featured" aria-labelledby="featured-title">
      <div className="site-container">
        <Reveal><div id="featured-title"><SectionTitle title="SELECTED WORKS" jp="代表的な制作実績" index="01" /></div></Reveal>
        <div className="selected-grid">
          <Reveal className="selected-grid__lead">
            <Link className="selected-work selected-work--lead" href={`/works/${gift.slug}`}>
              <span className="selected-work__image">
                <Image src={gift.thumbnail} alt={`${gift.title}のサムネイル`} fill sizes="(max-width: 767px) 100vw, 62vw" />
                <span className="image-shade" />
                <span className="play-button">▶</span>
              </span>
              <span className="selected-work__copy">
                <span className="eyebrow">01 / VIDEO / PROMOTION</span>
                <strong>{gift.title}</strong>
                <span>{gift.description}</span>
                <span className="selected-work__link">VIEW DETAIL ↗</span>
              </span>
            </Link>
          </Reveal>
          <div className="selected-grid__side">
            <Reveal>
              <a className="selected-work selected-work--compact" href="#web">
                <span className="selected-work__image"><Image src="/images/roast-note/first-view.png" alt="ROAST NOTEのファーストビュー" fill sizes="(max-width: 767px) 100vw, 34vw" /></span>
                <span className="selected-work__copy">
                  <span className="eyebrow">02 / WEB DESIGN / AI CREATIVE</span>
                  <strong>ROAST NOTE</strong>
                  <span>Coffee Subscription LP。企画からUI設計、AI画像活用、実装まで。</span>
                  <span className="selected-work__link">VIEW DETAIL ↗</span>
                </span>
              </a>
            </Reveal>
            <Reveal>
              <Link className="selected-work selected-work--compact" href={`/works/${katikuri.slug}`}>
                <span className="selected-work__image"><Image src={katikuri.thumbnail} alt={`${katikuri.title}のサムネイル`} fill sizes="(max-width: 767px) 100vw, 34vw" /></span>
                <span className="selected-work__copy">
                  <span className="eyebrow">03 / MOTION / VIDEO</span>
                  <strong>カチクリ</strong>
                  <span>サービス内容をイラストとモーションで伝える紹介映像。</span>
                  <span className="selected-work__link">VIEW DETAIL ↗</span>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
