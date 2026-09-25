import Link from "next/link";
import Image from "next/image";
import { aiWorks } from "@/data/works";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function AiProjects() {
  return (
    <section className="section section--ai" aria-labelledby="ai-title">
      <div className="site-container">
        <Reveal>
          <div id="ai-title"><SectionTitle title="AI VIDEO / EXPERIMENTS" jp="AIを活用した映像表現・自主制作" index="03" /></div>
          <p className="section-intro">生成AIを制作工程の一部に取り入れた自主制作作品です。企画・構成・ビジュアル生成・動画生成・編集まで行い、広告・映像制作における新しい表現方法を研究しています。</p>
        </Reveal>
        <div className="ai-grid">
          {aiWorks.map((work) => (
            <Reveal key={work.id}>
              <Link className="ai-card" href={`/works/${work.slug}`}>
                <div className={`media-placeholder media-placeholder--ai ${work.tone}`}>
                  <Image src={work.thumbnail} alt={`${work.title}のサムネイル`} fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                  <span className="image-shade" />
                  <span className="ai-marker">EXPERIMENT / {work.id}</span>
                  <span className="play-button play-button--small">▶</span>
                </div>
                <p className="eyebrow">{work.category}</p>
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                <span className="process">{work.process.join(" / ")}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
