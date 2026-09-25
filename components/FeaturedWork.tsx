import Image from "next/image";
import Link from "next/link";
import { videoWorks } from "@/data/works";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function FeaturedWork() {
  const work = videoWorks.find((item) => item.featured) ?? videoWorks[0];
  return (
    <section className="section section--featured" aria-labelledby="featured-title">
      <div className="site-container">
        <Reveal><div id="featured-title"><SectionTitle title="FEATURED WORK" jp="注目の制作実績" index="01" /></div></Reveal>
        <Reveal>
          <article className="featured-work">
            <div className="featured-copy">
              <p className="eyebrow">{work.category}</p>
              <h3>{work.title}</h3>
              <p className="featured-description">{work.description}</p>
              <dl className="meta-list">
                <div><dt>ROLE</dt><dd>{work.role?.join(" / ")}</dd></div>
                <div><dt>TOOLS</dt><dd>{work.tools.join(" / ")}</dd></div>
              </dl>
              <Link className="button" href={`/works/${work.slug}`}>VIEW PROJECT <span>↗</span></Link>
            </div>
            <Link href={`/works/${work.slug}`} className="featured-image" aria-label={`${work.title}の詳細を見る`}>
              <Image src={work.thumbnail} alt={`${work.title}のサムネイル`} fill sizes="(max-width: 768px) 100vw, 65vw" />
              <span className="image-shade" />
              <span className="play-button">▶</span>
              <span className="placeholder-label">PRODUCTION WORK / MOVIE</span>
            </Link>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
