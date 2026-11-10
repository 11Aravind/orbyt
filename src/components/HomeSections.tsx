"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, ShieldCheck, Code2, Smartphone, ShoppingCart,
  Workflow, Boxes, Utensils, Check, Sparkles, LockKeyhole, Gauge, LifeBuoy,
  Search, PencilRuler, Rocket, Headset, ChevronDown, Star
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };
const categories = [
  { title: "E-commerce", copy: "Digital storefronts and shopping experiences.", icon: ShoppingCart },
  { title: "Restaurant", copy: "Ordering and day-to-day restaurant workflows.", icon: Utensils },
  { title: "Business tools", copy: "Practical systems for teams and operations.", icon: Workflow },
  { title: "Management", copy: "Inventory, billing and business coordination.", icon: Boxes }
];
const securityServices = [
  "Penetration Testing (PTaaS)",
  "External Attack Surface Management",
  "DPDP Readiness & Privacy Assessment",
  "AI-Powered Security Testing",
  "Infrastructure & Network Security",
  "Security Advisory & Remediation"
];
const devServices = [
  { title: "Web applications", copy: "Fast, accessible web experiences built around real business needs.", icon: Code2 },
  { title: "Mobile applications", copy: "Thoughtful mobile products for customers and internal teams.", icon: Smartphone },
  { title: "SaaS platforms", copy: "Scalable subscription products with clear user experiences.", icon: Sparkles },
  { title: "Custom software", copy: "Purpose-built tools that simplify your unique workflows.", icon: Workflow }
];
const benefits = [
  { title: "Built around real needs", copy: "Practical thinking comes before unnecessary complexity.", icon: Sparkles },
  { title: "Security-conscious", copy: "A security-aware approach throughout the product lifecycle.", icon: LockKeyhole },
  { title: "Modern engineering", copy: "Maintainable foundations designed to evolve with your business.", icon: Gauge },
  { title: "Support that continues", copy: "A clear path for improvements, updates and ongoing care.", icon: LifeBuoy }
];
const steps = [
  { n: "01", title: "Discover", copy: "Understand your goals, users and constraints.", icon: Search },
  { n: "02", title: "Plan", copy: "Shape the right experience and technical approach.", icon: PencilRuler },
  { n: "03", title: "Build", copy: "Develop, test and refine the solution.", icon: Code2 },
  { n: "04", title: "Secure", copy: "Review quality, access and security considerations.", icon: ShieldCheck },
  { n: "05", title: "Launch", copy: "Prepare the product for real-world use.", icon: Rocket },
  { n: "06", title: "Support", copy: "Keep learning, maintaining and improving.", icon: Headset }
];
const faqs = [
  ["What does QUBIXS offer?", "QUBIXS brings together software products, security services and custom development for businesses."],
  ["Can I request a demo before purchasing?", "Yes. Use the contact form to request a product walkthrough. Product availability and demo options will be confirmed individually."],
  ["Do you build custom software?", "Yes. QUBIXS can work with you to scope web applications, mobile applications, SaaS platforms and custom business software."],
  ["What is included in a security assessment?", "The scope is agreed before work begins. It can include defined application or API testing, findings, risk prioritisation and remediation guidance."],
  ["Are the products available to purchase now?", "The products currently shown are concept previews for the website prototype. Availability, pricing and purchase options will be published when each product is ready."]
];

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="pill">Technology for what&apos;s next</span>
          <motion.h1 initial="hidden" animate="visible" variants={reveal} transition={{ duration: .7 }}>
            Build better.<br />Work smarter.<br /><span>Stay secure.</span>
          </motion.h1>
          <p className="hero-description">Powerful software products, intelligent digital solutions and security services for businesses ready to move forward.</p>
          <div className="hero-buttons">
            <Link className="btn btn-lime" href="/products">Explore products <ArrowUpRight size={16} /></Link>
            <Link className="btn btn-outline-light" href="/services/development">Discover our services <ArrowRight size={15} /></Link>
          </div>
          <div className="hero-meta"><span><i /> Software products</span><span><i /> Digital security</span><span><i /> Custom development</span></div>
        </div>
        <div className="orbit-stage" aria-label="Abstract animated orbital illustration">
          <div className="orbit-glow" />
          <motion.div className="orbit-ring ring-three" animate={{ rotate: 360 }} transition={{ duration: 65, repeat: Infinity, ease: "linear" }} />
          <motion.div className="orbit-ring ring-two" animate={{ rotate: -360 }} transition={{ duration: 48, repeat: Infinity, ease: "linear" }} />
          <motion.div className="orbit-ring" animate={{ rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} />
          <motion.div className="orbit-core" animate={{ scale: [1, 1.035, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
          <motion.span className="orbit-dot dot-one" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 3, repeat: Infinity }} />
          <span className="orbit-dot dot-two" />
          <div className="orbit-label">ORBITAL SYSTEMS / 001</div>
        </div>
      </div>
      <div className="hero-bottom-line" />
    </section>
  );
}

export function IntroStrip() {
  return <div className="intro-strip"><div className="container intro-strip-inner"><p>One technology partner. Three ways to move forward.</p><div className="strip-items"><span><Code2 size={15}/> Software</span><span><ShieldCheck size={15}/> Security</span><span><Sparkles size={15}/> Innovation</span></div></div></div>;
}

export function BrandIntro() {
  return <section className="section"><div className="container grid-2" style={{ alignItems: "end" }}><SectionHeading kicker="A clearer way forward" title="Technology should make business simpler." /><div><p className="section-copy">QUBIXS brings useful software products, security-minded engineering and custom development together. We focus on building digital tools that solve practical problems and create room for what comes next.</p><Link className="text-link" href="/about">Get to know QUBIXS <ArrowUpRight size={15}/></Link></div></div></section>;
}

export function FeaturedProducts() {
  return <section className="section product-section"><div className="container"><div className="section-head"><SectionHeading kicker="The product universe" title="Useful tools. Thoughtfully built." copy="Explore the beginnings of the QUBIXS product family. Each product is designed around a clear business need."/><Link className="btn btn-outline-dark" href="/products">View all products <ArrowUpRight size={15}/></Link></div><div className="grid-4">{products.map(p => <ProductCard key={p.slug} product={{...p}} />)}</div><p className="empty-note" style={{marginTop:18}}>Product previews are illustrative. Availability and pricing will be announced as products are released.</p></div></section>;
}

export function ProductCategories() {
  return <section className="section category-section"><div className="container"><div className="section-head"><SectionHeading light kicker="Explore by category" title="The right tools for the work ahead." copy="Discover solutions across the everyday systems that help businesses operate and grow."/></div><div className="grid-4">{categories.map(({title,copy,icon:Icon})=><Link href="/products" className="category-card" key={title}><Icon size={25}/><ArrowUpRight className="category-arrow" size={18}/><div><h3>{title}</h3><p>{copy}</p></div></Link>)}</div></div></section>;
}

export function SecuritySection() {
  return (
    <section className="section security-section">
      <div className="container security-layout">
        <div className="security-copy">
          <span className="section-kicker">QUBIXS Security</span>
          <h2 className="section-title">
            Find the weaknesses.<br />
            <span style={{ color: "var(--lime)" }}>Strengthen what matters.</span>
          </h2>
          <p className="section-copy">
            Proactive cybersecurity for a connected world. QUBIXS combines expert-led penetration testing, external attack surface intelligence, privacy assessments and AI-powered security testing to help organisations stay ahead of evolving threats.
          </p>
          <div className="service-list">
            {securityServices.map((s) => (
              <div className="service-item" key={s}>
                <Check size={15} />
                {s}
              </div>
            ))}
          </div>
          <Link className="btn btn-lime" href="/services/security">
            Explore security services <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="security-visual">
          <span className="security-chip one">RISK-LED ASSESSMENTS</span>
          <span className="security-chip two">ATTACK SURFACE</span>
          <span className="security-chip three">ACTIONABLE REPORTING</span>
          <div className="shield-orb">
            <ShieldCheck size={68} strokeWidth={1.1} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function DevelopmentSection() {
  return <section className="section development-section"><div className="container"><div className="section-head"><SectionHeading kicker="Development services" title="Ideas deserve better technology." copy="From a focused website to a full digital product, turn your next idea into a useful experience."/></div><div className="grid-4">{devServices.map(({title,copy,icon:Icon})=><article className="card dev-card" key={title}><div className="dev-icon"><Icon size={22}/></div><h3>{title}</h3><p>{copy}</p></article>)}</div><div style={{marginTop:30}}><Link className="text-link" href="/services/development">Explore development services <ArrowUpRight size={15}/></Link></div></div></section>;
}

export function WhyQubixs() {
  return <section className="section why-section"><div className="container"><div className="section-head"><SectionHeading kicker="The QUBIXS approach" title="Thoughtful technology. Clear outcomes."/></div><div className="grid-4">{benefits.map(({title,copy,icon:Icon})=><article className="why-card" key={title}><Icon size={24}/><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>;
}

export function WorkProcess() {
  return <section className="section process-section"><div className="container"><div className="section-head"><SectionHeading kicker="How we work" title="From first conversation to launch." copy="A straightforward process keeps the work focused, collaborative and moving in the right direction."/></div><div className="grid-3">{steps.map(({n,title,copy,icon:Icon})=><article className="process-step" key={n}><span>{n} / <Icon size={14} style={{display:"inline",verticalAlign:"middle"}}/></span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>;
}

export function CaseStudies() {
  return <section className="section case-section"><div className="container"><div className="section-head"><SectionHeading kicker="Selected work" title="Good work starts with a real problem." copy="A space for product stories, practical solutions and the thinking behind them."/></div><div className="grid-2"><article className="card case-card"><div className="case-art"><div className="case-window"><div className="case-window-bar"><i/><i/><i/></div><div className="case-window-body"><span/><span/></div></div></div><div className="case-info"><small>Product concept / Hospitality</small><h3>Digital ordering experience</h3><p>A smoother path from browsing a menu to placing an order. Case study details can be added when approved for publication.</p></div></article><article className="card case-card"><div className="case-art light"><div className="case-window light-window"><div className="case-window-bar"><i/><i/><i/></div><div className="case-window-body"><span/><span/></div></div></div><div className="case-info"><small>Product concept / Commerce</small><h3>Commerce made more manageable</h3><p>A clean digital storefront concept focused on product discovery and a simpler customer journey.</p></div></article></div><p className="empty-note" style={{marginTop:16}}>Concept previews shown. Replace with verified client work and approved project details before launch.</p></div></section>;
}

export function Testimonials() {
  return <section className="section testimonial-section"><div className="container"><div className="section-head"><SectionHeading kicker="Working together" title="Built through collaboration." copy="Great digital products come from clear communication and shared goals."/></div><div className="card quote-card"><div className="quote-stars"><Star size={14}/><Star size={14}/><Star size={14}/><Star size={14}/><Star size={14}/></div><blockquote>“Your next project story could live here. Add genuine customer feedback once you have permission to publish it.”</blockquote><div className="quote-person"><div className="avatar">QX</div><div><strong>Client testimonial</strong><small>Replace with an approved customer quote</small></div></div></div></div></section>;
}

export function FAQSection() {
  const [active, setActive] = useState<number | null>(0);
  return <section className="section faq-section"><div className="container"><div style={{textAlign:"center"}}><SectionHeading kicker="Questions, answered" title="A few things you might be wondering."/></div><div className="faq-list">{faqs.map(([q,a],i)=><div className="faq-item" key={q}><button className="faq-question" aria-expanded={active===i} onClick={()=>setActive(active===i?null:i)}>{q}<ChevronDown size={18} style={{transform:active===i?"rotate(180deg)":"none",transition:"transform .2s"}}/></button>{active===i&&<div className="faq-answer">{a}</div>}</div>)}</div></div></section>;
}

export function ContactCTA() {
  return <section className="contact-cta"><div className="container cta-inner"><div><span className="section-kicker">Make your next move</span><h2>Have an idea? Let&apos;s build it.</h2><p>Tell us what you are working towards. We&apos;ll help you explore the right product or technology approach.</p></div><Link className="btn btn-lime" href="/contact">Start a conversation <ArrowUpRight size={16}/></Link></div></section>;
}
