import Reveal from "./Reveal";

const strengths = [
  {
    number: "01", label: "VIDEO EDITING", title: "動画編集",
    text: "広告・PR・講義動画を中心に、カット、テロップ、BGM・SE、テンポ設計まで対応。内容の伝わりやすさを重視します。",
  },
  {
    number: "02", label: "ADVERTISING / MARKETING", title: "広告運用・マーケティング視点",
    text: "Meta広告・Google広告の運用経験を活かし、ターゲットと訴求から逆算してクリエイティブを設計します。",
  },
  {
    number: "03", label: "AI PRODUCTION", title: "AI活用制作",
    text: "画像・動画・音声生成を、制作スピードと表現の幅を広げる補助ツールとして活用します。",
  },
];

export default function Strengths() {
  return (
    <article id="strengths" className="info-column strengths-panel">
      <Reveal>
        <header className="info-heading"><span>06</span><h2>STRENGTHS</h2><p>強み</p></header>
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
