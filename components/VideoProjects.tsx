import Link from "next/link";
import Image from "next/image";
import { videoWorks } from "@/data/works";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function VideoProjects() {
  const displayOrder = [
    "dmm-aquarium-01",
    "dmm-aquarium-02",
    "katikuri-service",
    "tokuten-course",
    "business-social-video",
    "kokyou-event",
  ];
  const orderBySlug = new Map(displayOrder.map((slug, index) => [slug, index]));
  const projectWorks = videoWorks
    .filter((work) => !work.featured)
    .sort((a, b) => (orderBySlug.get(a.slug) ?? Number.MAX_SAFE_INTEGER) - (orderBySlug.get(b.slug) ?? Number.MAX_SAFE_INTEGER));
  return (
    <section id="works" className="section section--projects" aria-labelledby="video-title">
      <div className="site-container">
        <Reveal><div id="video-title"><SectionTitle title="VIDEO PROJECTS" jp="映像制作実績" index="02" /></div></Reveal>
        <div className="video-grid">
          {projectWorks.map((work) => (
            <Reveal key={work.id}>
              <Link className="work-card" href={`/works/${work.slug}`}>
                <div className={`media-placeholder ${work.tone}`}>
                  <Image src={work.thumbnail} alt={`${work.title}のサムネイル`} fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 25vw" />
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
        <Reveal><div className="section-end"><span>各作品を選択すると動画を再生できます</span><Link className="text-link" href="#works">映像制作実績 <b>↑</b></Link></div></Reveal>
      </div>
    </section>
  );
}
