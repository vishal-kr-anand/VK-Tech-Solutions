import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  FolderOpen,
  Star,
  Zap,
  Users,
  Code2,
  Filter,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  const projects = [
    {
      title: "Government Employee Portal",
      category: "Full Stack",
      tech: ["React.js", "Node.js", "PostgreSQL", "Firebase"],
      desc: "Role-based authentication portal for government departments. Features multi-level dashboards, document management, and real-time notifications.",
      status: "Live",
      gradient: "linear-gradient(135deg, #2563eb, #4f46e5)",
      accent: "#2563eb",
      light: "#eff6ff",
      icon: <FolderOpen size={22} />,
      featured: false,
    },
    {
      title: "E-Commerce Platform",
      category: "Full Stack",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      desc: "Full-featured e-commerce solution with product catalog, cart, payment gateway integration, and a comprehensive admin dashboard.",
      status: "Completed",
      gradient: "linear-gradient(135deg, #7c3aed, #a855f7)",
      accent: "#7c3aed",
      light: "#f5f3ff",
      icon: <Zap size={22} />,
    },
    {
      title: "Enterprise CRM Dashboard",
      category: "Full Stack",
      tech: ["React.js", "PostgreSQL", "Express.js", "JWT"],
      desc: "Customer relationship management system with advanced analytics, pipeline management, and team collaboration tools.",
      status: "Completed",
      gradient: "linear-gradient(135deg, #0891b2, #06b6d4)",
      accent: "#0891b2",
      light: "#ecfeff",
      icon: <Users size={22} />,
    },
    {
      title: "Restaurant Booking System",
      category: "Full Stack",
      tech: ["React.js", "Node.js", "MySQL", "Tailwind"],
      desc: "Online table reservation system with real-time availability, automated email notifications, and an intuitive admin panel.",
      status: "Live",
      gradient: "linear-gradient(135deg, #ea580c, #f97316)",
      accent: "#ea580c",
      light: "#fff7ed",
      icon: <Star size={22} />,
    },
    {
      title: "Drag & Drop Portfolio Builder",
      category: "Frontend",
      tech: ["React.js", "TypeScript", "CSS3", "Zustand"],
      desc: "Interactive portfolio builder allowing developers to create and export customized portfolios without writing any code.",
      status: "In Progress",
      gradient: "linear-gradient(135deg, #db2777, #ec4899)",
      accent: "#db2777",
      light: "#fdf2f8",
      icon: <Code2 size={22} />,
    },
    {
      title: "Centralized API Gateway",
      category: "Backend",
      tech: ["Node.js", "Express.js", "JWT", "Redis"],
      desc: "Robust API gateway with rate limiting, central authentication middleware, and comprehensive request logging.",
      status: "Completed",
      gradient: "linear-gradient(135deg, #16a34a, #22c55e)",
      accent: "#16a34a",
      light: "#f0fdf4",
      icon: <Zap size={22} />,
    },
    {
      title: "Laravel CMS Blog",
      category: "Full Stack",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      desc: "Multi-user publishing platform with rich text editor, role management, category organization, and SEO-optimized URLs.",
      status: "Completed",
      gradient: "linear-gradient(135deg, #dc2626, #ef4444)",
      accent: "#dc2626",
      light: "#fff1f2",
      icon: <FolderOpen size={22} />,
    },
    {
      title: "Real-time Chat Application",
      category: "Full Stack",
      tech: ["React.js", "Node.js", "Socket.io", "MongoDB"],
      desc: "Real-time messaging app with multiple chat rooms, secure file sharing, typing indicators, and online status.",
      status: "In Progress",
      gradient: "linear-gradient(135deg, #4f46e5, #818cf8)",
      accent: "#4f46e5",
      light: "#eef2ff",
      icon: <Users size={22} />,
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const statusConfig: Record<
    string,
    { label: string; color: string; bg: string; dot: string }
  > = {
    Live: { label: "🟢 Live", color: "#16a34a", bg: "#f0fdf4", dot: "#22c55e" },
    Completed: {
      label: "✓ Completed",
      color: "#2563eb",
      bg: "#eff6ff",
      dot: "#2563eb",
    },
    "In Progress": {
      label: "⚡ In Progress",
      color: "#d97706",
      bg: "#fffbeb",
      dot: "#f59e0b",
    },
  };

  const stats = [
    {
      value: "10+",
      label: "Projects Completed",
      icon: <FolderOpen size={20} />,
      color: "#2563eb",
    },
    {
      value: "15+",
      label: "Technologies Used",
      icon: <Code2 size={20} />,
      color: "#7c3aed",
    },
    {
      value: "8+",
      label: "Happy Clients",
      icon: <Users size={20} />,
      color: "#0891b2",
    },
    {
      value: "4+",
      label: "Years Experience",
      icon: <Star size={20} />,
      color: "#ea580c",
    },
  ];

  return (
    <div className="page-container">
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="proj-hero">
        <div className="proj-hero-mesh" />
        <div className="proj-hero-orb proj-orb-1" />
        <div className="proj-hero-orb proj-orb-2" />
        <div className="container position-relative" style={{ zIndex: 5 }}>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="proj-hero-icon-wrap">
              <FolderOpen size={28} />
            </div>
            <span className="section-eyebrow mb-3 d-inline-block">
              Portfolio
            </span>
            <h1 className="display-3 fw-black text-[#0f172a] mb-3">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p
              className="lead text-gray-400 mx-auto mb-5"
              style={{ maxWidth: 520 }}
            >
              A showcase of real-world apps, side projects, and production-grade
              solutions I've shipped.
            </p>

            {/* Filter Pills */}
            <div className="proj-filter-bar">
              <Filter size={15} className="me-2 text-gray-400" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`proj-filter-btn ${filter === cat ? "proj-filter-active" : ""}`}
                >
                  {cat}
                  <span className="proj-filter-count">
                    {cat === "All"
                      ? projects.length
                      : projects.filter((p) => p.category === cat).length}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS GRID ──────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(180deg, #f8fafc, #f1f5f9)",
          paddingTop: "4rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="row g-4"
            >
              {filteredProjects.map((proj, i) => {
                const st = statusConfig[proj.status];
                return (
                  <motion.div
                    className={`col-md-6 ${proj.featured && filter === "All" ? "col-lg-6" : "col-lg-4"}`}
                    key={proj.title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    <div
                      className="proj-card"
                      style={
                        {
                          "--proj-accent": proj.accent,
                          "--proj-glow": `${proj.accent}20`,
                        } as React.CSSProperties
                      }
                    >
                      {/* Top gradient bar */}
                      <div
                        className="proj-card-topbar"
                        style={{ background: proj.gradient }}
                      />

                      {/* Card header */}
                      <div className="proj-card-head">
                        <div
                          className="proj-card-icon-wrap"
                          style={{ background: proj.gradient }}
                        >
                          {proj.icon}
                        </div>
                        <div className="proj-card-badges">
                          <span className="proj-category-badge">
                            {proj.category}
                          </span>
                          <span
                            className="proj-status-badge"
                            style={{
                              color: st.color,
                              background: st.bg,
                              border: `1px solid ${st.color}30`,
                            }}
                          >
                            {proj.status}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="proj-card-body">
                        <h3 className="proj-card-title">{proj.title}</h3>
                        <p className="proj-card-desc">{proj.desc}</p>

                        {/* Tech tags */}
                        <div className="proj-tech-tags">
                          {proj.tech.map((t, j) => (
                            <span
                              key={j}
                              className="proj-tech-tag"
                              style={{
                                color: proj.accent,
                                background: proj.light,
                                borderColor: `${proj.accent}25`,
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer buttons */}
                      <div className="proj-card-footer">
                        <button
                          className="proj-btn-view"
                          style={{
                            color: proj.accent,
                            borderColor: `${proj.accent}40`,
                            background: proj.light,
                          }}
                        >
                          <ExternalLink size={15} /> View Project
                        </button>
                        <button className="proj-btn-github">
                          <Github size={16} />
                        </button>
                      </div>

                      {/* Hover glow */}
                      <div
                        className="proj-card-hover-glow"
                        style={{
                          background: `radial-gradient(circle at top right, ${proj.accent}12, transparent 70%)`,
                        }}
                      />
                    </div>
                  </motion.div>
                );
              })}

              {filteredProjects.length === 0 && (
                <div className="col-12 text-center py-5">
                  <div className="empty-state-card">
                    <FolderOpen
                      size={52}
                      className="mb-3"
                      style={{ color: "#cbd5e1" }}
                    />
                    <h5 className="text-gray-400 fw-semibold">
                      No projects in this category yet.
                    </h5>
                    <button
                      onClick={() => setFilter("All")}
                      className="proj-filter-btn proj-filter-active mt-3"
                    >
                      View All Projects
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────── */}
      <section className="stats-section py-5">
        <div className="container">
          <div className="row g-4">
            {stats.map((s, i) => (
              <motion.div
                className="col-6 col-md-3"
                key={i}
                {...fadeUp(i * 0.1)}
              >
                <div className="stat-glass-card">
                  <div
                    className="stat-icon-wrap"
                    style={{ background: `${s.color}18`, color: s.color }}
                  >
                    {s.icon}
                  </div>
                  <div className="stat-number" style={{ color: s.color }}>
                    {s.value}
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GITHUB CTA ─────────────────────────────────────────── */}
      <section className="proj-github-cta">
        <div className="proj-cta-mesh" />
        <div className="proj-cta-orb proj-cta-orb-1" />
        <div className="proj-cta-orb proj-cta-orb-2" />
        <div className="container position-relative" style={{ zIndex: 5 }}>
          <motion.div className="text-center" {...fadeUp()}>
            <div className="github-icon-ring">
              <Github size={32} />
            </div>
            <h2 className="display-5 fw-black text-white mb-3 mt-4">
              Want to See <span className="cta-highlight">More Code?</span>
            </h2>
            <p
              className="lead mb-5 mx-auto"
              style={{ maxWidth: 520, color: "rgba(255,255,255,0.65)" }}
            >
              I regularly build side projects and contribute to open source.
              Explore repositories, code samples, and contribution history on
              GitHub.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="proj-github-btn"
            >
              <Github size={20} className="me-2" /> View All Work on GitHub
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
