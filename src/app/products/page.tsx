import { SubpageLayout } from "@/components/SubpageLayout";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return <SubpageLayout kicker="QUBIXS products" title="Tools for the work that matters." description="Explore the growing QUBIXS product family. Product previews are shown here while availability and release details are being prepared.">
    <div className="grid-4">{products.map(p=><ProductCard key={p.slug} product={{...p}} />)}</div>
  </SubpageLayout>;
}
