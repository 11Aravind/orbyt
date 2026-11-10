import { SubpageLayout } from "@/components/SubpageLayout";

export default function AboutPage() {
  return <SubpageLayout kicker="About QUBIXS" title="A technology partner for what comes next." description="QUBIXS brings software products, security-minded thinking and custom development together under one focused technology brand.">
    <div className="grid-2" style={{alignItems:"start"}}>
      <div><h2 style={{fontSize:30,letterSpacing:"-.04em"}}>Build. Secure. Evolve.</h2><p className="section-copy">We believe good technology should be useful, understandable and built with care. Our focus is on practical software products and digital solutions that help businesses do their work better.</p></div>
      <div className="card" style={{padding:28}}><h3>What guides us</h3><p className="section-copy">Clarity over complexity. Security as a consideration from the beginning. Thoughtful experiences. Continuous improvement.</p></div>
    </div>
  </SubpageLayout>;
}
