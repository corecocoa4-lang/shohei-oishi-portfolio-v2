import Image from "next/image";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const groups = [
  {
    label: "VIDEO",
    description: "編集からモーション、最終仕上げまで",
    tools: [
      { name: "Premiere Pro", icon: "/brand-icons/premiere-pro.svg" },
      { name: "After Effects", icon: "/brand-icons/after-effects.svg" },
    ],
  },
  {
    label: "DESIGN",
    description: "広告・バナー・UIのビジュアル制作",
    tools: [
      { name: "Photoshop", icon: "/brand-icons/photoshop.svg" },
      { name: "Canva", icon: "/brand-icons/canva.svg" },
    ],
  },
  {
    label: "AI CREATIVE",
    description: "企画・生成・音声・編集素材の制作",
    tools: [
      { name: "ChatGPT" },
      { name: "Kling", icon: "/brand-icons/kling-ai.png" },
      { name: "Higgsfield" },
      { name: "Firefly" },
      { name: "Suno", icon: "/brand-icons/suno.svg" },
      { name: "ElevenLabs", icon: "/brand-icons/elevenlabs.svg" },
    ],
  },
  {
    label: "WEB / DEVELOPMENT",
    description: "デザインから実装・公開まで",
    tools: [
      { name: "Next.js" },
      { name: "Codex" },
      { name: "GitHub" },
      { name: "Vercel" },
      { name: "HTML", icon: "/brand-icons/html5.svg" },
      { name: "CSS", icon: "/brand-icons/css3.svg" },
    ],
  },
];

export default function Tools() {
  return (
    <section id="tools" className="section section--tools" aria-labelledby="tools-title">
      <div className="site-container">
        <Reveal><div id="tools-title"><SectionTitle title="TOOLS / SKILLS" jp="用途別の制作ツール" index="07" /></div></Reveal>
        <Reveal>
          <p className="section-intro">目的に合わせてツールを組み合わせ、企画・制作・実装・公開まで一連のフローを組み立てます。</p>
          <div className="tools-layout">
            {groups.map((group) => (
              <div className="brand-tool-group" key={group.label}>
                <header><p>{group.label}</p><span>{group.description}</span></header>
                <ul>
                  {group.tools.map((tool) => (
                    <li key={tool.name}>
                      {"icon" in tool && tool.icon && <Image src={tool.icon} alt="" width={24} height={24} />}
                      <span>{tool.name}</span>
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
