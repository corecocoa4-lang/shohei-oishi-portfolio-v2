import Link from "next/link";
import Image from "next/image";
import { aiWorks } from "@/data/works";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function AiProjects() {
  const order = ["mogu-concept", "aura-concept", "lumen-concept", "volt-concept", "etoile-concept", "claru-task-concept"];
  const works = [...aiWorks].sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));
  return (
    <section id="ai" className="section section--ai" aria-labelledby="ai-title">
      <div className="site-container">
        <Reveal>
          <div id="ai-title"><SectionTitle title="AI CREATIVE" jp="生成AIを活用した映像制作" index="03" /></div>
          <p className="section-intro">企画・生成から編集、モーション、デザイン、仕上げまで。生成AIを制作工程に組み込み、広告や映像として伝わる形に仕上げています。</p>
        </Reveal>
        <div className="ai-grid">
          {works.map((work, index) => (
            <Reveal key={work.id} className={index < 2 ? "ai-grid__featured" : ""}>
              <Link className="ai-card" href={`/works/${work.slug}`}>
                <div className={`media-placeholder media-placeholder--ai ${work.tone}`}>
                  <Image src={work.thumbnail} alt={`${work.title}のサムネイル`} fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                  <span className="image-shade" />
                  <span className="ai-marker">AI CREATIVE / {work.id}</span>
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
