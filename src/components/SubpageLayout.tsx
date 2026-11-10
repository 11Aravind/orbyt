import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function SubpageLayout({ kicker, title, description, children }: {
  kicker: string; title: string; description: string; children: React.ReactNode;
}) {
  return <>
    <Navbar />
    <main>
      <section className="subpage-hero"><div className="container"><span className="pill">{kicker}</span><h1>{title}</h1><p>{description}</p><Link className="btn btn-lime" href="/contact">Talk to QUBIXS <ArrowUpRight size={15}/></Link></div></section>
      <div className="page-content"><div className="container">{children}</div></div>
    </main>
    <Footer />
  </>;
}
