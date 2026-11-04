import Link from "next/link";
import { ArrowUpRight, Boxes, ShoppingBag, Utensils, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { utensils: Utensils, "shopping-bag": ShoppingBag, boxes: Boxes, workflow: Workflow };

export function ProductCard({ product }: { product: { slug: string; name: string; category: string; description: string; status: string; price: string; icon: string } }) {
  const Icon = iconMap[product.icon] || Boxes;
  return (
    <article className="card product-card">
      <div className="product-art">
        <span className="art-orbit" />
        <div className="art-icon"><Icon size={30} strokeWidth={1.5} /></div>
      </div>
      <div className="product-content">
        <div className="product-topline"><span className="product-category">{product.category}</span><span className="product-status">{product.status}</span></div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-bottom"><strong>{product.price}</strong><Link href={`/products/${product.slug}`}>Explore <ArrowUpRight size={14} /></Link></div>
      </div>
    </article>
  );
}
