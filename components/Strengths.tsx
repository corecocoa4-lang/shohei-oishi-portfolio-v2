import Reveal from "./Reveal";

const strengths = [
  {
    number: "01", label: "ADVERTISING", title: "広告運用 × 訴求設計",
    text: "広告運用経験を活かし、ターゲット・訴求・媒体特性から逆算してクリエイティブを設計します。",
  },
  {
    number: "02", label: "CREATIVE", title: "領域を横断する制作",
    text: "映像・デザイン・Webを横断し、企画から編集、UI設計、実装まで目的に合う形へまとめます。",
  },
  {
    number: "03", label: "AI WORKFLOW", title: "AIを組み込んだ制作フロー",
    text: "生成AIを取り入れ、制作効率化と表現の拡張につなげます。生成した素材も編集・デザインで仕上げます。",
  },
];

export default function Strengths() {
  return (
    <article id="strengths" className="info-column strengths-panel">
      <Reveal>
        <header className="info-heading"><span>＋</span><h2>STRENGTHS</h2><p>強み</p></header>
        <div className="strength-list">
          {strengths.map((item) => (
            <div className="strength-item" key={item.number}>
              <span className="strength-number">{item.number}</span>
              <div><p className="strength-label">{item.label}</p><h3>{item.title}</h3><p>{item.text}</p></div>
            </div>
          ))}
        </div>
      </Reveal>
    </article>
  );
}
