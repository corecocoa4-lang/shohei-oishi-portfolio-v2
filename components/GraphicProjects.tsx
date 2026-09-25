import Image from "next/image";
import Link from "next/link";
import { graphicWorks, landingPageWorks } from "@/data/works";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function GraphicProjects() {
  const visibleGraphicWorks = graphicWorks.filter((work) => work.visible !== false);

  return (
    <section className="section section--graphic" aria-labelledby="graphic-title">
      <div className="site-container">
        <Reveal><div id="graphic-title"><SectionTitle title="AD CREATIVE / WEB DESIGN" jp="LP・広告・SNSクリエイティブ" index="04" /></div></Reveal>
        <Reveal><div className="graphic-subheading graphic-subheading--lp"><span>LP DESIGN</span><small>Web design / Full page</small></div></Reveal>
        <div className="lp-grid">
          {landingPageWorks.map((work) => (
            <Reveal key={work.id}>
              <article className="lp-card">
                <Link className="lp-preview" href={`/lp/${work.slug}`} aria-label={`${work.title}を全体表示`}>
                  <div className="lp-browser-bar"><span /><span /><span /><small>LANDING PAGE / {work.id}</small></div>
                  <div className="lp-preview__canvas">
                    <div className="lp-preview__viewport">
                      <Image className="lp-preview__main" src={work.image} alt={`${work.title}の上部から中盤のデザインカンプ`} width={work.width} height={work.height} sizes="(max-width: 767px) 70vw, 34vw" />
                      <span className="lp-preview__continuation">CONTINUES BELOW</span>
                    </div>
                    <div className="lp-preview__overview" aria-hidden="true">
                      <span>FULL PAGE</span>
                      <Image src={work.image} alt="" width={work.width} height={work.height} sizes="44px" />
                      <i />
                    </div>
                  </div>
                  <span className="lp-preview__open">FULL VIEW ↗</span>
                </Link>
                <div className="lp-card__body">
                  <p className="eyebrow">{work.type}</p>
                  <h3>{work.title}</h3>
                  <dl>
                    <div><dt>TOOLS</dt><dd>{work.tools.join(" / ")}</dd></div>
                    <div><dt>SCOPE</dt><dd>{work.scope.join(" / ")}</dd></div>
                  </dl>
                  <Link className="text-link" href={`/lp/${work.slug}`}>VIEW PROJECT <b>→</b></Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal><div className="graphic-subheading"><span>BANNER CREATIVE</span><small>Web ad / SNS ad / Video CTA</small></div></Reveal>
        <div className="graphic-grid">
          {visibleGraphicWorks.map((work) => (
            <Reveal key={work.id}>
              <article className={`graphic-card${work.format === "video-cta" ? " graphic-card--wide" : ""}`}>
                <div className="graphic-art">
                  <Image src={work.image!} alt={`${work.title}のデザイン`} fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 33vw, 25vw" />
                  <span className="graphic-art__label">CREATIVE / {work.id}</span>
                </div>
                <p className="eyebrow">{work.category}</p>
                <h3>{work.title}</h3>
                <p className="graphic-card__meta">{work.category} / {work.tool}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
