export default function SectionTitle({ title, jp, index }: { title: string; jp: string; index?: string }) {
  return (
    <div className="section-title">
      <div className="section-title__main">
        {index && <span className="section-index">{index}</span>}
        <h2>{title}</h2>
        <span className="section-title__jp">{jp}</span>
      </div>
      <span className="section-title__line" />
    </div>
  );
}
