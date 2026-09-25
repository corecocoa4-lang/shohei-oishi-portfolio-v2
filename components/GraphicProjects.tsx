import Image from "next/image";
import { graphicWorks } from "@/data/works";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function GraphicProjects() {
  return (
    <section id="ads" className="section section--graphic" aria-labelledby="graphic-title">
      <div className="site-container">
        <Reveal>
          <div id="graphic-title"><SectionTitle title="AD CREATIVE" jp="広告バナー・SNSクリエイティブ" index="04" /></div>
          <p className="section-intro">広告運用経験を活かし、ターゲット・訴求・媒体特性を意識して制作。Meta広告、Google広告、SNS、セミナー告知などの静止画クリエイティブです。</p>
        </Reveal>
        <div className="graphic-grid">
          {graphicWorks.map((work) => (
            <Reveal key={work.id}>
              <article className="graphic-card">
                <div className="graphic-art">
                  <Image src={work.image!} alt={`${work.title}のデザイン`} fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                  <span className="graphic-art__label">AD CREATIVE / {work.id}</span>
                </div>
                <p className="eyebrow">{work.category}</p>
                <h3>{work.title}</h3>
                <p className="graphic-card__meta">{work.tool} / {work.target}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
