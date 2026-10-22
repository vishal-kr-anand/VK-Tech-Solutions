import { motion } from 'framer-motion';
import { Code2, Monitor, Server, Database, Building, Globe, CheckCircle2, ArrowRight, MessageSquare, Zap, Shield, Clock, HeartHandshake } from 'lucide-react';
import { Link } from 'wouter';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function Services() {
  const services = [
    {
      icon: <Code2 size={30} />,
      title: "Full Stack Development",
      description: "End-to-end web applications from UI to database. Scalable, secure, and performant apps using modern tech stacks.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL"],
      gradient: "linear-gradient(135deg, #2563eb, #4f46e5)",
      glow: "rgba(37,99,235,0.18)",
      light: "#eff6ff",
      accent: "#2563eb",
      number: "01",
      slug: "full-stack-development",
    },
    {
      icon: <Monitor size={30} />,
      title: "Frontend Development",
      description: "Pixel-perfect, responsive UIs with smooth animations and optimal performance. Designs turned into living web experiences.",
      tags: ["React.js", "Next.js", "TypeScript", "Bootstrap 5", "Tailwind"],
      gradient: "linear-gradient(135deg, #7c3aed, #a855f7)",
      glow: "rgba(124,58,237,0.18)",
      light: "#f5f3ff",
      accent: "#7c3aed",
      number: "02",
      slug: "frontend-development",
    },
    {
      icon: <Server size={30} />,
      title: "Backend & API Development",
      description: "Robust REST API design with secure authentication, middleware, optimized queries, and clean MVC architecture.",
      tags: ["Node.js", "Express.js", "Laravel", "PHP", "JWT", "Firebase"],
      gradient: "linear-gradient(135deg, #0891b2, #06b6d4)",
      glow: "rgba(6,182,212,0.18)",
      light: "#ecfeff",
      accent: "#0891b2",
      number: "03",
      slug: "backend-api-development",
    },
    {
      icon: <Database size={30} />,
      title: "Database Design",
      description: "Efficient schema design, query optimization, and data modeling for both relational and non-relational databases.",
      tags: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
      gradient: "linear-gradient(135deg, #ea580c, #f97316)",
      glow: "rgba(234,88,12,0.18)",
      light: "#fff7ed",
      accent: "#ea580c",
      number: "04",
      slug: "database-design",
    },
    {
      icon: <Building size={30} />,
      title: "Government Portal Dev",
      description: "Specialized in secure, role-based government digital portals with complex authentication and multi-department dashboards.",
      tags: ["React.js", "Node.js", "Firebase", "Role-Based Auth"],
      gradient: "linear-gradient(135deg, #db2777, #ec4899)",
      glow: "rgba(219,39,119,0.18)",
      light: "#fdf2f8",
      accent: "#db2777",
      number: "05",
      slug: "government-portal-development",
    },
    {
      icon: <Globe size={30} />,
      title: "CMS & WordPress Dev",
      description: "Custom WordPress themes and plugins, CMS integrations, and content management solutions for businesses.",
      tags: ["WordPress", "PHP", "Custom Themes", "Plugins"],
      gradient: "linear-gradient(135deg, #16a34a, #22c55e)",
      glow: "rgba(22,163,74,0.18)",
      light: "#f0fdf4",
      accent: "#16a34a",
      number: "06",
      slug: "cms-wordpress-development",
    },
  ];

  const processSteps = [
    {
      number: "01", title: "Discovery",
      desc: "Understanding goals, target audience, and feature requirements in depth.",
      icon: <MessageSquare size={22} />,
      color: "#2563eb", bg: "#eff6ff", gradient: "linear-gradient(135deg, #2563eb, #4f46e5)",
    },
    {
      number: "02", title: "Planning",
      desc: "Architecture, wireframes, and detailed technical specifications.",
      icon: <Shield size={22} />,
      color: "#7c3aed", bg: "#f5f3ff", gradient: "linear-gradient(135deg, #7c3aed, #a855f7)",
    },
    {
      number: "03", title: "Development",
      desc: "Clean, scalable code with regular progress updates and reviews.",
      icon: <Code2 size={22} />,
      color: "#0891b2", bg: "#ecfeff", gradient: "linear-gradient(135deg, #0891b2, #06b6d4)",
    },
    {
      number: "04", title: "Delivery",
      desc: "Rigorous QA, deployment, and comprehensive post-launch handover.",
      icon: <Zap size={22} />,
      color: "#16a34a", bg: "#f0fdf4", gradient: "linear-gradient(135deg, #16a34a, #22c55e)",
    },
  ];

  const benefits = [
    { text: "Clean & Maintainable Code",  icon: <Code2 size={18} />,        color: "#2563eb" },
    { text: "On-time Project Delivery",   icon: <Clock size={18} />,         color: "#7c3aed" },
    { text: "Fully Responsive Design",    icon: <Monitor size={18} />,       color: "#0891b2" },
    { text: "Scalable Architecture",      icon: <Server size={18} />,        color: "#ea580c" },
    { text: "Regular Communication",      icon: <MessageSquare size={18} />, color: "#db2777" },
    { text: "Post-delivery Support",      icon: <HeartHandshake size={18} />,color: "#16a34a" },
  ];

  return (
    <div className="page-container">

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="svc-hero">
        <div className="svc-hero-mesh" />
        <div className="svc-hero-orb svc-orb-1" />
        <div className="svc-hero-orb svc-orb-2" />
        <div className="svc-hero-orb svc-orb-3" />
        <div className="container position-relative" style={{ zIndex: 5 }}>
          <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-eyebrow mb-3 d-inline-block">What I Offer</span>
            <h1 className="display-3 fw-black text-[#0f172a] mb-3">
              My <span className="text-gradient">Services</span>
            </h1>
            <p className="lead text-gray-400 mx-auto" style={{ maxWidth: 560 }}>
              Everything you need to launch, grow, and scale your digital product — under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE CARDS ──────────────────────────────────────── */}
      <section style={{ background: "#f8fafc", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="row g-4">
            {services.map((svc, i) => (
              <motion.div className="col-lg-4 col-md-6" key={i} {...fadeUp(i * 0.1)}>
                <Link href={`/services/${svc.slug}`} className="svc-premium-card"
                  style={{ "--svc-glow": svc.glow, "--svc-accent": svc.accent } as React.CSSProperties}>

                  {/* Number watermark */}
                  <div className="svc-number-watermark">{svc.number}</div>

                  {/* Icon */}
                  <div className="svc-icon-box" style={{ background: svc.gradient }}>
                    {svc.icon}
                  </div>

                  <h3 className="svc-card-title">{svc.title}</h3>
                  <p className="svc-card-desc">{svc.description}</p>

                  {/* Tags */}
                  <div className="svc-card-tags">
                    {svc.tags.map((t, j) => (
                      <span key={j} className="svc-tag"
                        style={{ color: svc.accent, background: svc.light, borderColor: `${svc.accent}30` }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bottom link */}
                  <div className="svc-card-footer" style={{ color: svc.accent }}>
                    <span>Learn More</span>
                    <ArrowRight size={15} />
                  </div>

                  {/* Hover glow fill */}
                  <div className="svc-card-glow-fill" style={{ background: svc.glow }} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK PROCESS ───────────────────────────────────────── */}
      <section style={{ background: "#ffffff", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <motion.div className="text-center mb-5" {...fadeUp()}>
            <span className="section-eyebrow">How I Work</span>
            <h2 className="display-6 fw-bold text-[#0f172a] mt-2">My <span className="text-gradient">Work Process</span></h2>
            <p className="text-gray-400 mt-2">A structured approach that ensures quality delivery every time.</p>
          </motion.div>

          <div className="process-track">
            {/* Gradient connector line */}
            <div className="process-line" />

            <div className="row g-4 position-relative" style={{ zIndex: 2 }}>
              {processSteps.map((step, i) => (
                <motion.div className="col-lg-3 col-md-6" key={i} {...fadeUp(i * 0.12)}>
                  <div className="process-step-card">
                    <div className="process-icon-wrap" style={{ background: step.gradient || `linear-gradient(135deg, ${step.color}, ${step.color}99)` }}>
                      <div className="process-icon-inner" style={{ background: step.bg, color: step.color }}>
                        {step.icon}
                      </div>
                    </div>
                    <div className="process-step-num" style={{ color: step.color }}>{step.number}</div>
                    <h4 className="process-step-title">{step.title}</h4>
                    <p className="process-step-desc">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ME ──────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(180deg, #f8fafc, #f1f5f9)", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <motion.div className="col-lg-5" {...fadeUp()}>
              <span className="section-eyebrow mb-3 d-inline-block">Why Me</span>
              <h2 className="display-6 fw-bold text-[#0f172a] mt-2 mb-3">
                Why <span className="text-gradient">Choose Me?</span>
              </h2>
              <p className="text-gray-500 mb-4" style={{ lineHeight: 1.8 }}>
                I don't just write code — I solve problems. My approach blends technical excellence with a deep understanding of business goals to deliver products that truly perform.
              </p>
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="why-big-num">4+</div>
                <div className="why-big-label">Years delivering<br /><strong>production software</strong></div>
              </div>
              <Link href="/projects" className="hero-btn-primary" style={{ display: "inline-flex" }}>
                View Portfolio <ArrowRight size={17} className="ms-2" />
              </Link>
            </motion.div>

            <motion.div className="col-lg-6 offset-lg-1" {...fadeUp(0.15)}>
              <div className="row g-3">
                {benefits.map((b, i) => (
                  <div className="col-sm-6" key={i}>
                    <div className="benefit-chip" style={{ "--chip-color": b.color } as React.CSSProperties}>
                      <div className="benefit-chip-icon" style={{ background: `${b.color}15`, color: b.color }}>
                        {b.icon}
                      </div>
                      <div className="benefit-chip-text">{b.text}</div>
                      <CheckCircle2 size={16} className="benefit-chip-check" style={{ color: b.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="cta-premium">
        <div className="cta-mesh" />
        <div className="container position-relative" style={{ zIndex: 5 }}>
          <motion.div className="text-center" {...fadeUp()}>
            <div className="cta-eyebrow mb-3">Ready to Start?</div>
            <h2 className="display-5 fw-black text-white mb-3">
              Have a <span className="cta-highlight">Project in Mind?</span>
            </h2>
            <p className="lead text-white/70 mb-5 mx-auto" style={{ maxWidth: 540 }}>
              Let's discuss how I can help bring your idea to life with modern web technologies. Free consultation, always.
            </p>
            <Link href="/contact" className="cta-btn-white">
              Start a Conversation <MessageSquare size={18} className="ms-2" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
