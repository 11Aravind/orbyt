import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SubpageLayout } from "@/components/SubpageLayout";
import { products } from "@/data/products";

export function generateStaticParams() { return products.map(p => ({ slug: p.slug })); }

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) notFound();
  return <SubpageLayout kicker={product.category} title={product.name} description={product.description}>
    <div className="grid-2" style={{alignItems:"start"}}>
      <div className="card" style={{padding:32}}>
        <span className="product-status">{product.status}</span>
        <h2 style={{fontSize:30,marginTop:18}}>A clearer way to work.</h2>
        <p className="section-copy">This product page is a frontend preview. Product functionality, plans, technical requirements and release information will be published when the product is ready.</p>
        <ul style={{paddingLeft:18,color:"#56616b",fontSize:13,lineHeight:2.2}}>
          <li>Designed around practical business workflows</li>
          <li>Clear, approachable user experience</li>
          <li>Product information and support details to follow</li>
        </ul>
        <Link className="btn btn-lime" href="/contact">Request product information <ArrowUpRight size={15}/></Link>
      </div>
      <div style={{padding:30,borderRadius:16,background:"#e9eee7",minHeight:280,display:"grid",placeItems:"center"}}>
        <div style={{textAlign:"center"}}><CheckCircle2 size={54} color="#73984b"/><h3 style={{marginTop:18}}>Coming into focus</h3><p className="empty-note">A product preview will appear here.</p></div>
      </div>
    </div>
    <div style={{marginTop:35}}><Link className="text-link" href="/products"><ArrowLeft size={14}/> Back to all products</Link></div>
  </SubpageLayout>;
}
