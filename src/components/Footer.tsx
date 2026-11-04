import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "@/components/Brand";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>Software products, digital security and thoughtful technology solutions for businesses ready to move forward.</p>
            <Link className="text-link" href="/contact">Start a conversation <ArrowUpRight size={14} /></Link>
          </div>
          <div className="footer-col"><h4>Explore</h4><Link href="/products">Products</Link><Link href="/about">About ORBYT</Link><Link href="/contact">Contact</Link></div>
          <div className="footer-col"><h4>Services</h4><Link href="/services/security">Security</Link><Link href="/services/development">Development</Link></div>
          <div className="footer-col"><h4>Information</h4><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of use</Link><Link href="/refund-policy">Refund policy</Link></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} ORBYT. All rights reserved.</span><span>Build. Secure. Evolve.</span></div>
      </div>
    </footer>
  );
}
