import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLandingPageBySlug, landingPageWorks } from "@/data/works";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return landingPageWorks.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const work = getLandingPageBySlug((await params).slug);
  if (!work) return { title: "LP NOT FOUND | SHOHEI OISHI" };
  const description = `${work.title}。目的：${work.purpose}。担当：${work.scope.join("、")}。`;
  return {
    title: `${work.title} | SHOHEI OISHI`,
    description,
    openGraph: { title: `${work.title} | SHOHEI OISHI`, description, images: [] },
    twitter: { card: "summary", title: `${work.title} | SHOHEI OISHI`, description, images: [] },
  };
}

export default async function LandingPageDetail({ params }: Props) {
  const work = getLandingPageBySlug((await params).slug);
  if (!work) notFound();

  return (
    <>
      <Header />
      <main className="lp-detail-page">
        <div className="site-container">
          <Link href="/#graphic-title" className="back-link">← BACK TO AD CREATIVE</Link>
          <header className="lp-detail-header">
            <p className="eyebrow">LANDING PAGE / {work.id}</p>
            <h1>{work.title}</h1>
            <dl>
              <div><dt>PURPOSE</dt><dd>{work.purpose}</dd></div>
              <div><dt>TARGET</dt><dd>{work.target}</dd></div>
              <div><dt>SCOPE</dt><dd>{work.scope.join(" / ")}</dd></div>
            </dl>
          </header>
          <div className="lp-full-browser">
            <div className="lp-browser-bar"><span /><span /><span /><small>{work.title}</small></div>
            <Image src={work.image} alt={`${work.title}の全体デザイン`} width={work.width} height={work.height} priority />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
