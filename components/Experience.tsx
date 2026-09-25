import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const items = [
  { title: "VIDEO EDITING", lead: "目的に合わせて伝わる構成へ", list: ["広告", "PR", "講義", "SNS"] },
  { title: "AD CREATIVE", lead: "映像とつながる広告表現", list: ["広告バナー", "動画サムネイル", "SNSクリエイティブ"] },
  { title: "MARKETING", lead: "広告運用で培った視点", list: ["Meta Ads", "Google Ads", "ターゲット設計", "効果分析"] },
];

export default function Experience() {
  return (
    <section className="section section--experience" aria-labelledby="experience-title">
      <div className="site-container">
        <Reveal><div id="experience-title"><SectionTitle title="EXPERIENCE" jp="対応領域" index="08" /></div></Reveal>
        <div className="experience-grid">
          {items.map((item, index) => <Reveal key={item.title}><article><span>0{index + 1}</span><p>{item.lead}</p><h3>{item.title}</h3><ul>{item.list.map((entry) => <li key={entry}>{entry}</li>)}</ul></article></Reveal>)}
        </div>
      </div>
    </section>
  );
}
