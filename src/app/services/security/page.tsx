import Link from "next/link";
import { ArrowUpRight, ShieldCheck, LockKeyhole, ScanSearch, KeyRound, Server, FileCheck2 } from "lucide-react";
import { SubpageLayout } from "@/components/SubpageLayout";

const items = [
  ["Website security assessment","Review an agreed website scope to identify common security weaknesses.",ScanSearch],
  ["Web application security","Assess application behaviour, access controls and common risk areas.",ShieldCheck],
  ["API security review","Review authentication, authorisation, input handling and API exposure.",Server],
  ["Security hardening","Improve configurations and reduce avoidable attack surface.",LockKeyhole],
  ["Authentication & access","Strengthen identity, session and permission patterns.",KeyRound],
  ["Findings & guidance","Receive prioritised findings and practical remediation recommendations.",FileCheck2]
] as const;

export default function SecurityPage() {
  return <SubpageLayout kicker="Security services" title="Build with confidence. Protect what matters." description="Security-minded reviews and engineering guidance to help businesses understand risk and make their digital systems more resilient.">
    <div className="grid-3">{items.map(([title,copy,Icon])=><article className="card dev-card" key={title}><div className="dev-icon"><Icon size={22}/></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
    <div style={{marginTop:45,padding:30,borderRadius:16,background:"#101820",color:"white"}}><h2 style={{fontSize:28}}>Start with a clearly defined scope.</h2><p style={{color:"#aab5bd",maxWidth:650,lineHeight:1.8,fontSize:13}}>Security testing is performed only with explicit authorisation and an agreed scope. Contact ORBYT to discuss your environment, objectives and reporting needs.</p><Link className="btn btn-lime" href="/contact">Request a security discussion <ArrowUpRight size={15}/></Link></div>
  </SubpageLayout>;
}
