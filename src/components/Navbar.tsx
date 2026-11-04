"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Brand } from "@/components/Brand";

const links = [
  ["Products", "/products"],
  ["Security", "/services/security"],
  ["Development", "/services/development"],
  ["About", "/about"],
  ["Contact", "/contact"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Brand />
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="nav-actions">
          <Link className="btn btn-lime" href="/contact">Let&apos;s talk <ArrowUpRight size={15} /></Link>
          <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-panel" aria-label="Mobile navigation">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link href="/products" onClick={() => setOpen(false)}>Explore products ↗</Link>
        </nav>
      )}
    </header>
  );
}
