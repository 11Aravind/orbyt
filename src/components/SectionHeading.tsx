export function SectionHeading({ kicker, title, copy, light = false }: {
  kicker: string; title: string; copy?: string; light?: boolean;
}) {
  return (
    <div>
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title" style={light ? { color: "white" } : undefined}>{title}</h2>
      {copy && <p className="section-copy" style={light ? { color: "#a5b0b8" } : undefined}>{copy}</p>}
    </div>
  );
}
