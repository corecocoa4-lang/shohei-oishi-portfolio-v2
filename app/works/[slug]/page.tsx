import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allVideoWorks, getWorkBySlug } from "@/data/works";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allVideoWorks.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const work = getWorkBySlug((await params).slug);
  if (!work) return { title: "WORK NOT FOUND | SHOHEI OISHI" };
  return { title: `${work.title} | SHOHEI OISHI`, description: work.description, openGraph: { title: `${work.title} | SHOHEI OISHI`, description: work.description, images: [] }, twitter: { card: "summary", title: `${work.title} | SHOHEI OISHI`, description: work.description, images: [] } };
}

export default async function WorkDetailPage({ params }: Props) {
  const work = getWorkBySlug((await params).slug);
  if (!work) notFound();
  return (
    <>
      <Header />
      <main className="detail-page">
        <div className="site-container">
          <Link href="/#works" className="back-link">← BACK TO WORKS</Link>
          <header className="detail-header"><p className="eyebrow">{work.category}</p><h1>{work.title}</h1><p>{work.description}</p></header>
          {work.video ? (
            <div className="detail-video-wrap">
              <video className="detail-video" controls preload="metadata" poster={work.thumbnail} playsInline>
                <source src={work.video} type="video/mp4" />
                お使いのブラウザは動画再生に対応していません。
              </video>
            </div>
          ) : (
            <div className={`detail-movie media-placeholder ${work.tone}`}><span className="media-number">MOVIE</span><span className="play-button">▶</span><p>MOVIE COMING SOON</p></div>
          )}
          <div className="detail-content">
            <section><span>01</span><h2>OVERVIEW</h2><p>{work.description}</p></section>
            <section><span>02</span><h2>OBJECTIVE</h2><p>{work.objective ?? "制作目的の詳細をここに追加できます。"}</p></section>
            <section><span>03</span><h2>MY ROLE</h2><p>{work.role?.join(" / ") ?? "担当範囲をここに追加できます。"}</p></section>
            <section><span>04</span><h2>PRODUCTION POINT</h2><p>{work.productionPoint ?? "制作時の工夫や意図をここに追加できます。"}</p></section>
            <section><span>05</span><h2>TOOLS</h2><p>{work.tools.join(" / ")}</p></section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
