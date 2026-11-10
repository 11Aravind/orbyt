import Link from "next/link";
import {
  ArrowUpRight, ArrowRight, ShieldCheck, Check, Radio, Crosshair,
  Server, Sparkles, FileCheck2, ShieldAlert, ArrowDown
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const coreServices = [
  {
    title: "Penetration Testing",
    copy: "Expert-led security testing across web applications, APIs, thick clients, mobile apps and enterprise networks.",
    icon: Crosshair,
    href: "#pentest",
    linkText: "Explore testing services"
  },
  {
    title: "External Attack Surface Management",
    copy: "Discover internet-facing assets, exposed services and security weaknesses without requiring internal credentials.",
    icon: Radio,
    href: "#asm",
    linkText: "Explore attack surface management"
  },
  {
    title: "DPDP Readiness Assessment",
    copy: "Assess privacy practices and technical safeguards against applicable requirements of India's DPDP framework.",
    icon: ShieldAlert,
    href: "#dpdp",
    linkText: "Explore DPDP assessment"
  },
  {
    title: "AI-Powered Security Testing",
    copy: "Accelerate approved security workflows with AI-assisted reconnaissance, test orchestration and finding analysis.",
    icon: Sparkles,
    href: "#ai",
    linkText: "Explore AI security"
  },
  {
    title: "Infrastructure & Network Security",
    copy: "Evaluate internal and external networks, Active Directory, servers, cloud environments and perimeter controls.",
    icon: Server,
    href: "#infrastructure",
    linkText: "Explore infrastructure security"
  },
  {
    title: "Security Advisory",
    copy: "Turn assessment results into practical remediation plans, security improvements and measurable risk reduction.",
    icon: FileCheck2,
    href: "/contact",
    linkText: "Speak with our team"
  }
];

const pentestFeatures = [
  "Web application penetration testing",
  "REST, GraphQL and API testing",
  "Thick client security testing",
  "Android and iOS security testing",
  "Internal network penetration testing",
  "External network penetration testing",
  "Active Directory assessments",
  "Retesting and remediation validation"
];

const asmFeatures = [
  "Domain and subdomain discovery",
  "Public IP and service discovery",
  "Technology fingerprinting",
  "Cloud exposure indicators",
  "TLS and security configuration review",
  "Known vulnerability identification",
  "Exposed service monitoring",
  "Risk-ranked exposure reporting"
];

const dpdpFeatures = [
  "Privacy notice and consent review",
  "Personal data inventory and mapping",
  "Data minimisation and retention",
  "Access control and encryption",
  "Data principal rights workflows",
  "Breach response readiness",
  "Third-party and processor controls",
  "Technical personal data exposure testing"
];

const aiPoints = [
  "AI-assisted reconnaissance",
  "Intelligent test orchestration",
  "Contextual vulnerability analysis",
  "Attack path correlation",
  "Finding validation support",
  "AI-assisted reporting",
  "Controlled continuous testing",
  "Human-reviewed outcomes"
];

const infraFeatures = [
  "Internal and external network assessments",
  "Active Directory security assessments",
  "Windows and Linux server reviews",
  "Firewall and perimeter configuration review",
  "Cloud infrastructure security assessment",
  "Privilege escalation and lateral movement testing"
];

const processSteps = [
  { n: "01", title: "Pre-engagement", copy: "Confirm objectives, assets, authorisation, constraints and rules of engagement." },
  { n: "02", title: "Reconnaissance", copy: "Discover assets, enumerate services and understand the technology landscape." },
  { n: "03", title: "Threat modelling", copy: "Identify critical assets, trust boundaries and realistic attack scenarios." },
  { n: "04", title: "Vulnerability analysis", copy: "Identify and analyse potential weaknesses using manual and automated techniques." },
  { n: "05", title: "Controlled validation", copy: "Validate findings safely within the approved scope and testing window." },
  { n: "06", title: "Impact assessment", copy: "Evaluate demonstrated impact and relevant attack paths without exceeding authorisation." },
  { n: "07", title: "Reporting", copy: "Deliver evidence, risk ratings, business impact and practical remediation advice." },
  { n: "08", title: "Retesting", copy: "Verify fixes and provide a clear view of remediation status." }
];

const frameworks = [
  { name: "OWASP WSTG", sub: "Web testing" },
  { name: "OWASP ASVS", sub: "Application verification" },
  { name: "OWASP API Top 10", sub: "API security" },
  { name: "OWASP MASVS / MASTG", sub: "Mobile security" },
  { name: "PTES", sub: "Penetration testing" },
  { name: "NIST SP 800-115", sub: "Security assessment" },
  { name: "MITRE ATT&CK", sub: "Adversary techniques" },
  { name: "OWASP GenAI / LLM", sub: "AI application security" },
  { name: "CVSS", sub: "Severity scoring" },
  { name: "DPDP Act & Rules", sub: "Privacy readiness context" }
];

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero Section - Dark */}
        <section className="sec-hero">
          <div className="container sec-hero-inner">
            <div>
              <span className="pill" style={{ marginBottom: 20 }}>QUBIXS SECURITY</span>
              <h1 className="section-title" style={{ color: "white", fontSize: "clamp(42px, 5.5vw, 68px)" }}>
                Find the weaknesses.<br />
                <span style={{ color: "var(--lime)" }}>Strengthen what matters.</span>
              </h1>
              <p className="section-copy" style={{ color: "#aab5bd", maxWidth: 620, fontSize: 16 }}>
                Proactive cybersecurity for a connected world. QUBIXS combines expert-led penetration testing,
                external attack surface intelligence, privacy assessments and AI-powered security testing
                to help organisations stay ahead of evolving threats.
              </p>
              <div className="hero-buttons">
                <Link className="btn btn-lime" href="/contact">
                  Discuss your security needs <ArrowUpRight size={15} />
                </Link>
                <a className="btn btn-outline-light" href="#services">
                  Explore our services <ArrowDown size={14} />
                </a>
              </div>
              <div className="sec-trust-row">
                <span className="sec-trust-item"><Check size={14} /> Risk-led assessments</span>
                <span className="sec-trust-item"><Check size={14} /> Recognised methodologies</span>
                <span className="sec-trust-item"><Check size={14} /> Actionable reporting</span>
              </div>
            </div>

            <div className="sec-stage" aria-hidden="true">
              <div className="sec-orbit-ring" />
              <div className="sec-orbit-ring-inner" />
              <div className="sec-core-shield">
                <ShieldCheck size={58} strokeWidth={1.2} />
              </div>
              <div className="sec-float-chip chip-top">
                <strong>ATTACK SURFACE</strong>
                Discover external exposure
              </div>
              <div className="sec-float-chip chip-bottom">
                <strong>SECURITY VALIDATION</strong>
                Test. Verify. Improve.
              </div>
            </div>
          </div>
        </section>

        {/* 2. Services Overview - Soft Paper (#f5f7f4) like Homepage Featured Products */}
        <section className="section sec-paper-section" id="services">
          <div className="container">
            <div className="section-head" style={{ marginBottom: 46 }}>
              <div>
                <span className="section-kicker">WHAT WE DO</span>
                <h2 className="section-title">
                  Security built around <span style={{ color: "#5e8734" }}>real-world risk.</span>
                </h2>
                <p className="section-copy">
                  From individual applications to enterprise infrastructure, our services help you understand exposure,
                  validate security controls and prioritise remediation.
                </p>
              </div>
            </div>

            <div className="grid-3">
              {coreServices.map(({ title, copy, icon: Icon, href, linkText }) => (
                <article className="sec-card-light" key={title}>
                  <div>
                    <div className="sec-icon-light">
                      <Icon size={24} />
                    </div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                  <div>
                    {href.startsWith("#") ? (
                      <a className="text-link" href={href} style={{ color: "#475b39" }}>
                        {linkText} <ArrowRight size={13} />
                      </a>
                    ) : (
                      <Link className="text-link" href={href} style={{ color: "#475b39" }}>
                        {linkText} <ArrowRight size={13} />
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Penetration Testing - Clean White (#ffffff) like Homepage Development Section */}
        <section className="section sec-white-section" id="pentest">
          <div className="container grid-2" style={{ alignItems: "start" }}>
            <div>
              <span className="section-kicker">PENETRATION TESTING AS A SERVICE</span>
              <h2 className="section-title">
                Think like an attacker.<br />
                <span style={{ color: "#5e8734" }}>Defend with confidence.</span>
              </h2>
              <p className="section-copy">
                We simulate realistic attack techniques to identify exploitable weaknesses, demonstrate business
                impact and provide clear, prioritised remediation guidance. Engagements are tailored to your technology,
                risk profile and testing objectives.
              </p>
              <div style={{ marginTop: 28 }}>
                <Link className="btn btn-dark" href="/contact">
                  Request a penetration test <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>

            <div>
              <div className="sec-feature-list">
                {pentestFeatures.map((f) => (
                  <div className="sec-feature-item-light" key={f}>
                    <ArrowUpRight size={14} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 12, color: "#6e7c75", marginTop: 14 }}>
                <strong style={{ color: "#18232d" }}>Engagement models:</strong> Black Box · Grey Box · White Box · Retesting · Recurring PTaaS
              </p>
            </div>
          </div>
        </section>

        {/* 4. External Attack Surface Management - Dark (#14212a) like Homepage Security Section */}
        <section className="section sec-dark-section" id="asm">
          <div className="container grid-2" style={{ alignItems: "start" }}>
            <div>
              <span className="section-kicker" style={{ color: "#b5d68d" }}>EXTERNAL ATTACK SURFACE MANAGEMENT</span>
              <h2 className="section-title" style={{ color: "white" }}>
                See your organisation the way <span style={{ color: "var(--lime)" }}>attackers see it.</span>
              </h2>
              <p className="section-copy" style={{ color: "#9cb0a8" }}>
                Your digital footprint changes constantly. Forgotten subdomains, exposed services, unmanaged assets
                and misconfigurations can create paths into your organisation. QUBIXS helps map and monitor your
                public-facing exposure, starting with an authorised domain or asset.
              </p>
              <div style={{ marginTop: 28 }}>
                <Link className="btn btn-lime" href="/contact">
                  Discover your attack surface <ArrowUpRight size={15} />
                </Link>
              </div>
              <p style={{ fontSize: 11, color: "#74867f", marginTop: 16 }}>
                Designed for external discovery without internal credentials or initial agent deployment.
              </p>
            </div>

            <div>
              <div className="sec-feature-list">
                {asmFeatures.map((f) => (
                  <div className="sec-feature-item" key={f}>
                    <ArrowUpRight size={14} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 12, color: "#8aa098", marginTop: 14, lineHeight: 1.7 }}>
                Our approach combines passive reconnaissance with carefully controlled, authorised active validation.
                Internal-only assets and authenticated configuration reviews require separate access and scope.
              </p>
            </div>
          </div>
        </section>

        {/* 5. DPDP Assessment - Clean White (#ffffff) */}
        <section className="section sec-white-section" id="dpdp">
          <div className="container grid-2" style={{ alignItems: "start" }}>
            <div>
              <span className="section-kicker">PRIVACY & DATA PROTECTION</span>
              <h2 className="section-title">
                Make data protection <span style={{ color: "#5e8734" }}>part of the design.</span>
              </h2>
              <p className="section-copy">
                QUBIXS helps organisations assess privacy processes and technical safeguards in the context of India&apos;s
                Digital Personal Data Protection Act, 2023 and applicable DPDP Rules, 2025. We identify gaps, test security
                controls and help teams prioritise improvements.
              </p>
              <div style={{ marginTop: 28 }}>
                <Link className="btn btn-dark" href="/contact">
                  Discuss a DPDP assessment <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>

            <div>
              <div className="sec-feature-list">
                {dpdpFeatures.map((f) => (
                  <div className="sec-feature-item-light" key={f}>
                    <ArrowUpRight size={14} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <div className="sec-compliance-note-light">
                QUBIXS provides technical assessments and DPDP readiness support, not statutory certification or a guarantee of legal compliance. Legal interpretation and formal compliance decisions should be reviewed by qualified privacy and legal professionals.
              </div>
            </div>
          </div>
        </section>

        {/* 6. AI Security - Dark (#101820) */}
        <section className="section sec-dark-alt-section" id="ai">
          <div className="container">
            <div className="sec-ai-panel">
              <div>
                <span className="section-kicker" style={{ color: "#b5d68d" }}>AI-POWERED SECURITY</span>
                <h2 className="section-title" style={{ color: "white", fontSize: "clamp(28px, 3.8vw, 42px)" }}>
                  Move security testing forward with <span style={{ color: "var(--lime)" }}>intelligent automation.</span>
                </h2>
                <p className="section-copy" style={{ color: "#9cb0a8" }}>
                  Combine AI-assisted reasoning with established security tools and expert validation.
                  QUBIXS&apos;s autonomous testing approach helps teams accelerate discovery, correlate signals
                  and focus attention on meaningful risks — with human oversight and defined testing boundaries.
                </p>
                <div style={{ marginTop: 26 }}>
                  <Link className="btn btn-lime" href="/contact">
                    Explore AI security testing <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>

              <div className="sec-feature-list" style={{ margin: 0 }}>
                {aiPoints.map((p) => (
                  <div className="sec-feature-item" key={p}>
                    <Sparkles size={14} style={{ color: "var(--lime)" }} />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 42, padding: "34px 38px", borderRadius: 16, border: "1px solid rgba(255,255,255,.08)", background: "rgba(255,255,255,.02)" }}>
              <span className="section-kicker" style={{ color: "#b5d68d" }}>AI APPLICATION SECURITY</span>
              <h3 style={{ fontSize: 24, margin: "10px 0 12px", color: "white" }}>Secure the AI you build and deploy.</h3>
              <p style={{ color: "#9cb0a8", maxWidth: 820, margin: 0, fontSize: 14, lineHeight: 1.8 }}>
                Assess LLM-powered applications, agents and retrieval workflows for risks such as prompt injection,
                sensitive information disclosure, insecure output handling, excessive agency, RAG data exposure and unsafe tool invocation.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Infrastructure & Network Security - Soft (#edf1e9) like Homepage Why Qubixs */}
        <section className="section sec-soft-section" id="infrastructure">
          <div className="container">
            <div className="section-head" style={{ marginBottom: 36 }}>
              <div>
                <span className="section-kicker">INFRASTRUCTURE & NETWORK SECURITY</span>
                <h2 className="section-title">
                  Strengthen the systems <span style={{ color: "#5e8734" }}>behind your business.</span>
                </h2>
                <p className="section-copy">
                  Assess the resilience of enterprise infrastructure, identity environments and network boundaries through controlled security testing.
                </p>
              </div>
            </div>

            <div className="sec-feature-list" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
              {infraFeatures.map((f) => (
                <div className="sec-feature-item-light" key={f} style={{ padding: "18px 20px" }}>
                  <Server size={16} style={{ color: "#557b36" }} />
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Structured Methodology & Frameworks - Clean White (#ffffff) like Homepage Work Process */}
        <section className="section sec-white-section" id="methodology">
          <div className="container">
            <div className="section-head" style={{ marginBottom: 42 }}>
              <div>
                <span className="section-kicker">A STRUCTURED APPROACH</span>
                <h2 className="section-title">
                  Methodical testing. <span style={{ color: "#5e8734" }}>Evidence-led outcomes.</span>
                </h2>
                <p className="section-copy">
                  Every engagement begins with clear authorisation and scope. Testing is adapted to the target technology and aligned with relevant industry guidance.
                </p>
              </div>
            </div>

            <div className="sec-process-grid">
              {processSteps.map(({ n, title, copy }) => (
                <article className="sec-process-card-light" key={n}>
                  <span className="step-num">{n}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>

            <div style={{ marginTop: 52 }}>
              <span className="section-kicker" style={{ marginBottom: 20 }}>
                REFERENCE FRAMEWORKS & STANDARDS
              </span>
              <div className="sec-method-grid">
                {frameworks.map(({ name, sub }) => (
                  <div className="sec-method-badge-light" key={name}>
                    {name}
                    <small>{sub}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 9. CTA Section - Dark (#101820) */}
        <section className="contact-cta">
          <div className="container cta-inner">
            <div>
              <span className="section-kicker" style={{ color: "#b5d68d" }}>LET&apos;S TALK SECURITY</span>
              <h2>Make your next move a secure one.</h2>
              <p>
                Security testing is performed only with explicit authorisation and an agreed scope.
                Talk to QUBIXS about your security goals, testing scope or exposure concerns.
              </p>
            </div>
            <Link className="btn btn-lime" href="/contact">
              Start a conversation <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
