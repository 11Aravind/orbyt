import Link from "next/link";
import { ArrowUpRight, Code2, Smartphone, ShoppingBag, Workflow, Database, Cloud } from "lucide-react";
import { SubpageLayout } from "@/components/SubpageLayout";

const items = [
  ["Web application development","Responsive web experiences built around your customers and team.",Code2],
  ["Mobile application development","Useful mobile products for customer-facing and internal workflows.",Smartphone],
  ["E-commerce development","Online shopping experiences designed for product discovery and conversion.",ShoppingBag],
  ["SaaS product development","Product foundations with room to grow, iterate and scale.",Workflow],
  ["Backend & API development","Reliable application logic and integrations for connected systems.",Database],
  ["Cloud & deployment","Deployment planning and practical operational foundations.",Cloud]
] as const;

export default function DevelopmentPage() {
  return <SubpageLayout kicker="Development services" title="Turn your idea into something useful." description="From focused websites to custom digital products, QUBIXS helps shape and build technology around real business needs.">
    <div className="grid-3">{items.map(([title,copy,Icon])=><article className="card dev-card" key={title}><div className="dev-icon"><Icon size={22}/></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
    <div style={{marginTop:45}}><Link className="btn btn-dark" href="/contact">Discuss your project <ArrowUpRight size={15}/></Link></div>
  </SubpageLayout>;
}
