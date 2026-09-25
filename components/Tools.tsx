import Image from "next/image";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const groups = [
  {
    label: "MAIN TOOLS",
    description: "実務で日常的に使用",
    tools: [
      { name: "Premiere Pro", icon: "/brand-icons/premiere-pro.svg" },
      { name: "Photoshop", icon: "/brand-icons/photoshop.svg" },
      { name: "Canva", icon: "/brand-icons/canva.svg", wide: true },
    ],
  },
  {
    label: "OTHER SKILLS",
    description: "基本操作・制作補助で使用",
    tools: [
      { name: "After Effects", icon: "/brand-icons/after-effects.svg" },
      { name: "HTML", icon: "/brand-icons/html5.svg" },
      { name: "CSS", icon: "/brand-icons/css3.svg" },
    ],
  },
  {
    label: "AI PRODUCTION TOOLS",
    description: "制作工程に応じて活用",
    tools: [
      { name: "Kling AI", icon: "/brand-icons/kling-ai.png" },
      { name: "Google Veo", icon: "/brand-icons/google-veo.svg" },
      { name: "Seedance", icon: "/brand-icons/seedance.ico" },
      { name: "Suno", icon: "/brand-icons/suno.svg", wide: true },
      { name: "ElevenLabs", icon: "/brand-icons/elevenlabs.svg", wide: true },
    ],
  },
];

export default function Tools() {
  return (
    <section id="tools" className="section section--tools" aria-labelledby="tools-title">
      <div className="site-container">
        <Reveal><div id="tools-title"><SectionTitle title="TOOLS" jp="使用ツール・スキル" index="07" /></div></Reveal>
        <Reveal>
          <div className="tools-layout">
            {groups.map((group, index) => (
              <div className={`brand-tool-group${index === 1 ? " brand-tool-group--sub" : ""}${index === 2 ? " brand-tool-group--ai" : ""}`} key={group.label}>
                <header><p>{group.label}</p><span>{group.description}</span></header>
                <ul>
                  {group.tools.map((tool) => (
                    <li key={tool.name}>
                      <span className={`brand-tool-logo${"wide" in tool && tool.wide ? " brand-tool-logo--wide" : ""}`}>
                        <Image src={tool.icon} alt={`${tool.name} official logo`} width={72} height={44} />
                      </span>
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
