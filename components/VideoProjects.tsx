import Link from "next/link";
import Image from "next/image";
import { videoWorks } from "@/data/works";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function VideoProjects() {
  const displayOrder = [
    "dmm-aquarium-01",
    "gift-promotion",
    "dmm-aquarium-02",
    "tokuten-course",
    "business-social-video",
    "kokyou-event",
  ];
  const orderBySlug = new Map(displayOrder.map((slug, index) => [slug, index]));
  const projectWorks = videoWorks
    .filter((work) => orderBySlug.has(work.slug))
    .sort((a, b) => (orderBySlug.get(a.slug) ?? Number.MAX_SAFE_INTEGER) - (orderBySlug.get(b.slug) ?? Number.MAX_SAFE_INTEGER));
  return (
    <section id="video" className="section section--projects" aria-labelledby="video-title">
      <div id="works" className="site-container">
        <Reveal><div id="video-title"><SectionTitle title="VIDEO WORKS" jp="映像制作実績" index="02" /></div></Reveal>
        <div className="video-grid">
          {projectWorks.map((work, index) => (
            <Reveal key={work.id} className={index < 2 ? "video-grid__featured" : ""}>
              <Link className="work-card" href={`/works/${work.slug}`}>
                <div className={`media-placeholder ${work.tone}`}>
                  <Image src={work.thumbnail} alt={`${work.title}のサムネイル`} fill sizes={`(max-width: 767px) 100vw, (max-width: 1100px) 50vw, ${index < 2 ? "50vw" : "25vw"}` } />
                  <span className="image-shade" />
                  <span className="media-number">{work.id}</span>
                  <span className="play-button play-button--small">▶</span>
                  <span className="media-word">{work.category.split(" /")[0]}</span>
                </div>
                <div className="work-card__body">
                  <div className="work-card__top"><span className="eyebrow">{work.category}</span><span>{work.duration}</span></div>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                  <div className="work-card__tools"><span>TOOLS</span>{work.tools.join(" / ")}</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal><div className="section-end"><span>各作品を選択すると動画を再生できます</span><Link className="text-link" href="#video">映像制作実績 <b>↑</b></Link></div></Reveal>
      </div>
    </section>
  );
}
