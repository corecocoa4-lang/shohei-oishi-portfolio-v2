import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const groups = [
  { label: "VIDEO", description: "映像編集・モーショングラフィックス", tools: ["Premiere Pro", "After Effects"] },
  { label: "DESIGN", description: "Web・LP・広告クリエイティブ", tools: ["Photoshop", "Illustrator", "Canva", "Figma"] },
  { label: "AI CREATIVE", description: "生成AIを活用した制作・実装支援", tools: ["ChatGPT", "Codex", "Kling", "Higgsfield", "Firefly", "Veo", "Seedance", "Suno", "ElevenLabs"] },
  { label: "WEB / PUBLISHING", description: "Web制作・公開", tools: ["HTML", "CSS", "GitHub", "Vercel"] },
];

export default function Tools() {
  return (
    <section id="tools" className="section section--tools" aria-labelledby="tools-title">
      <div className="site-container">
        <Reveal><div id="tools-skills"><div id="tools-title"><SectionTitle title="TOOLS / SKILLS" jp="制作領域・使用ツール" index="07" /></div></div></Reveal>
        <Reveal>
          <p className="section-intro">目的に合わせてツールを組み合わせ、企画・制作・実装・公開まで一連のフローを組み立てています。</p>
          <div className="tools-layout">
            {groups.map((group) => (
              <div className="brand-tool-group" key={group.label}>
                <header><p>{group.label}</p><span>{group.description}</span></header>
                <ul>
                  {group.tools.map((tool) => (
                    <li key={tool}>
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
