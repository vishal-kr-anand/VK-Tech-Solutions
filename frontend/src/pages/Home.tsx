import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Download,
  Layout,
  Server,
  Layers,
  Briefcase,
  Calendar,
  Star,
  Zap,
  Shield,
  Code2,
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaPhp,
  FaLaravel,
  FaGithub,
  FaGitAlt,
  FaWordpress,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiJquery,
  SiRedux,
  SiMui,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";

import MyImage from "../assets/image/MyPhoto.png"

const ROLES = [
  "React.js Expert",
  "Node.js Developer",
  "Laravel Developer",
  "API Architect",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const delay = isDeleting
      ? 50
      : displayedText.length < currentRole.length
        ? 100
        : 2000;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      } else {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        } else {
          setIsDeleting(true);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  const skillGroups = [
    {
      label: "Frontend",
      color: "blue",
      gradient: "from-blue-500 to-cyan-400",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "MUI", icon: <SiMui /> },
        { name: "jQuery", icon: <SiJquery /> },
      ],
    },
    {
      label: "Backend",
      color: "purple",
      gradient: "from-purple-500 to-violet-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Laravel", icon: <FaLaravel /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "JWT Auth", icon: <SiJsonwebtokens /> },
        { name: "REST APIs", icon: <Server size={15} /> },
      ],
    },
    {
      label: "Database & Tools",
      color: "emerald",
      gradient: "from-emerald-500 to-teal-400",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "WordPress", icon: <FaWordpress /> },
      ],
    },
  ];

  const whatIDo = [
    {
      icon: <Layout size={28} />,
      title: "Frontend Development",
      desc: "Pixel-perfect, accessible, responsive UIs with React, Next.js, and TypeScript.",
      tags: ["React.js", "Next.js", "TypeScript", "Tailwind"],
      gradient: "from-blue-500 to-cyan-400",
      glow: "rgba(37,99,235,0.15)",
      accent: "#2563eb",
    },
    {
      icon: <Server size={28} />,
      title: "Backend Development",
      desc: "Robust REST APIs, JWT auth flows, and optimized database architecture.",
      tags: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
      gradient: "from-purple-500 to-violet-400",
      glow: "rgba(124,58,237,0.15)",
      accent: "#7c3aed",
      featured: true,
    },
    {
      icon: <Layers size={28} />,
      title: "Full Stack & APIs",
      desc: "End-to-end solutions connecting client, server, and third-party services.",
      tags: ["REST APIs", "Firebase", "JWT", "System Design"],
      gradient: "from-cyan-500 to-teal-400",
      glow: "rgba(6,182,212,0.15)",
      accent: "#06b6d4",
    },
  ];

  const experience = [
    {
      company: "Akiko Sherman Infotech (NIC)",
      role: "Software Developer",
      date: "Jan 2025–Present",
      desc: "Developing secure government portals and resolving mission-critical bugs.",
      current: true,
    },
    {
      company: "Crew Captivators Solutions",
      role: "Web Dev Executive",
      date: "Feb 2024–Dec 2024",
      desc: "Built dynamic full-stack applications with React & Node.js.",
    },
    {
      company: "BBS Tech Solution",
      role: "Software Engineer",
      date: "Jul 2023–Feb 2024",
      desc: "Spearheaded frontend architectures using modern React patterns.",
    },
  ];

  const stats = [
    {
      value: "4+",
      label: "Years Experience",
      icon: <Star size={22} />,
      color: "#2563eb",
    },
    {
      value: "5+",
      label: "Companies",
      icon: <Briefcase size={22} />,
      color: "#7c3aed",
    },
    {
      value: "10+",
      label: "Projects Delivered",
      icon: <Zap size={22} />,
      color: "#06b6d4",
    },
    {
      value: "15+",
      label: "Technologies",
      icon: <Code2 size={22} />,
      color: "#ec4899",
    },
  ];

  return (
    <div className="page-container" style={{ paddingTop: 0 }}>
      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="hero-premium min-vh-100 d-flex align-items-center overflow-hidden pt-5">
        <div className="hero-mesh-bg" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />

        <div className="container position-relative" style={{ zIndex: 10 }}>
          <div className="row align-items-center gy-5">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="col-lg-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="hero-badge mb-4 d-inline-flex align-items-center gap-2"
              >
                <span className="badge-dot" />
                <span>Available for Hire &nbsp;👋</span>
              </motion.div>

              <h1 className="display-2 fw-black text-[#0f172a] mb-2 lh-1" style={{ fontWeight: 700 }}>
                Full Stack
                <br />
                <span className="text-gradient-hero">Developer</span>
              </h1>

              <div className="hero-role-line mt-3 mb-4">
                <span className="role-static">I build with &nbsp;</span>
                <span className="role-typed" >{displayedText}</span>
                <span className="typing-cursor" />
              </div>

              <p
                className="lead text-gray-500 mb-5"
                style={{ maxWidth: 480, lineHeight: 1.8 }}
              >
                4+ years crafting scalable web apps — from government portals to
                startup products. I turn ideas into fast, beautiful,
                production-ready software.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link href="/projects" className="hero-btn-primary">
                  View Projects <ArrowRight size={18} className="ms-2" />
                </Link>
                <a href="#" className="hero-btn-ghost">
                  <Download size={18} className="me-2" /> Download CV
                </a>
              </div>
            </motion.div>

            {/* Right — Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="col-lg-6 d-flex justify-content-center"
            >
              <div className="avatar-ring-wrap">
                {/* Outer glow ring */}
                <div className="avatar-glow-ring" />
                {/* Main avatar */}
                <div className="avatar-circle">
                  <img
                    src={MyImage}
                    alt="Vishal Kumar Anand"
                    className="avatar-img"
                  />
                </div>
                {/* Orbit dots */}
                <div className="orbit-ring" />

                {/* Floating chips */}
                {[
                  {
                    text: "React.js",
                    icon: <FaReact className="text-cyan-400" size={18} />,
                    cls: "chip-react",
                  },
                  {
                    text: "Node.js",
                    icon: <FaNodeJs className="text-green-400" size={18} />,
                    cls: "chip-node",
                  },
                  {
                    text: "4+ Years",
                    icon: <Star size={14} className="text-yellow-400" />,
                    cls: "chip-years",
                  },
                  {
                    text: "10+ Projects",
                    icon: <Zap size={14} className="text-purple-400" />,
                    cls: "chip-projects",
                  },
                ].map(({ text, icon, cls }, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, i % 2 === 0 ? -12 : 12, 0] }}
                    transition={{
                      duration: 3.5 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`float-chip ${cls}`}
                  >
                    {icon}
                    <span>{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATS ───────────────────────────────────────────────── */}
      <section className="stats-section py-5">
        <div className="container">
          <div className="stats-glass-row row g-4">
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

      {/* ─── WHAT I DO ───────────────────────────────────────────── */}
      <section
        className="py-20 bg-white"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="container">
          <motion.div className="text-center mb-5" {...fadeUp()}>
            <span className="section-eyebrow">Core Expertise</span>
            <h2 className="display-6 fw-bold text-[#0f172a] mt-2">
              What I <span className="text-gradient">Do Best</span>
            </h2>
            <p className="text-gray-400 mt-2">
              End-to-end development, from wireframe to deployment.
            </p>
          </motion.div>

          <div className="row g-4">
            {whatIDo.map((item, i) => (
              <motion.div className="col-md-4" key={i} {...fadeUp(i * 0.15)}>
                <div
                  className={`service-premium-card ${item.featured ? "service-featured" : ""}`}
                  style={
                    {
                      "--card-glow": item.glow,
                      "--card-accent": item.accent,
                    } as React.CSSProperties
                  }
                >
                  {item.featured && (
                    <div className="featured-ribbon">Most Used</div>
                  )}
                  <div
                    className="service-icon-wrap"
                    style={{
                      background: `linear-gradient(135deg, ${item.gradient.replace("from-", "").replace(" to-", "")})`,
                    }}
                  >
                    <div
                      className="service-icon-inner"
                      style={{
                        background: `linear-gradient(135deg, ${item.accent}, ${item.accent}cc)`,
                      }}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="service-title">{item.title}</h3>
                  <p className="service-desc">{item.desc}</p>
                  <div className="service-tags">
                    {item.tags.map((t, j) => (
                      <span
                        key={j}
                        className="service-tag"
                        style={{
                          borderColor: `${item.accent}40`,
                          color: item.accent,
                          background: `${item.accent}10`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="service-arrow" style={{ color: item.accent }}>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ──────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="container">
          <motion.div className="text-center mb-5" {...fadeUp()}>
            <span className="section-eyebrow">Technologies</span>
            <h2 className="display-6 fw-bold text-[#0f172a] mt-2">
              My <span className="text-gradient">Tech Stack</span>
            </h2>
            <p className="text-gray-400 mt-2">
              Tools and technologies I use every day to ship great products.
            </p>
          </motion.div>

          <div className="row g-4">
            {skillGroups.map((group, gi) => {
              const accentMap: Record<string, string> = {
                blue: "#2563eb",
                purple: "#7c3aed",
                emerald: "#10b981",
              };
              const accent = accentMap[group.color];
              return (
                <motion.div className="col-lg-4" key={gi} {...fadeUp(gi * 0.1)}>
                  <div className="skill-group-card">
                    <div
                      className="skill-group-header"
                      style={{
                        background: `linear-gradient(135deg, ${accent}, ${accent}99)`,
                      }}
                    >
                      <span className="skill-group-label">{group.label}</span>
                      <span className="skill-group-count">
                        {group.skills.length} skills
                      </span>
                    </div>
                    <div className="skill-group-body">
                      {group.skills.map((skill, si) => (
                        <motion.div
                          key={si}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: si * 0.05 }}
                          className="skill-pill"
                          style={
                            { "--pill-accent": accent } as React.CSSProperties
                          }
                        >
                          <span
                            className="skill-pill-icon"
                            style={{ color: accent }}
                          >
                            {skill.icon}
                          </span>
                          <span className="skill-pill-name">{skill.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ──────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "5rem",
          paddingBottom: "5rem",
          background: "#ffffff",
        }}
      >
        <div className="container">
          <motion.div
            className="d-flex justify-content-between align-items-end mb-5 flex-wrap gap-3"
            {...fadeUp()}
          >
            <div>
              <span className="section-eyebrow">Career</span>
              <h2 className="display-6 fw-bold text-[#0f172a] mt-2">
                Professional <span className="text-gradient">Journey</span>
              </h2>
            </div>
            <Link href="/about" className="exp-more-link">
              View Full Timeline <ArrowRight size={16} className="ms-1" />
            </Link>
          </motion.div>

          <div className="row g-4">
            {experience.map((exp, i) => (
              <motion.div className="col-lg-4" key={i} {...fadeUp(i * 0.12)}>
                <div
                  className={`exp-premium-card ${exp.current ? "exp-current" : ""}`}
                >
                  {exp.current && (
                    <div className="exp-current-badge">
                      <span className="exp-dot" /> Currently Here
                    </div>
                  )}
                  <div className="exp-icon-row">
                    <div className="exp-icon-box">
                      <Briefcase size={20} />
                    </div>
                    <div className="exp-date">
                      <Calendar size={13} className="me-1" />
                      {exp.date}
                    </div>
                  </div>
                  <h4 className="exp-role">{exp.role}</h4>
                  <p className="exp-company">{exp.company}</p>
                  <p className="exp-desc">{exp.desc}</p>
                  <div className="exp-shimmer" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY ME STRIP ────────────────────────────────────────── */}
      <section className="why-strip py-5">
        <div className="container">
          <div className="row g-3 text-center">
            {[
              {
                icon: <Zap size={20} />,
                text: "Fast Delivery",
                sub: "On-time, every time",
              },
              {
                icon: <Shield size={20} />,
                text: "Clean Code",
                sub: "Scalable & maintainable",
              },
              {
                icon: <Star size={20} />,
                text: "Quality First",
                sub: "No shortcuts taken",
              },
              {
                icon: <Code2 size={20} />,
                text: "Full Stack",
                sub: "Frontend to backend",
              },
            ].map((item, i) => (
              <motion.div
                className="col-6 col-md-3"
                key={i}
                {...fadeUp(i * 0.1)}
              >
                <div className="why-chip">
                  <div className="why-chip-icon">{item.icon}</div>
                  <div>
                    <div className="why-chip-title">{item.text}</div>
                    <div className="why-chip-sub">{item.sub}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="cta-premium">
        <div className="cta-mesh" />
        <div className="container position-relative" style={{ zIndex: 5 }}>
          <motion.div className="text-center" {...fadeUp()}>
            <div className="cta-eyebrow mb-3">Let's Work Together</div>
            <h2 className="display-5 fw-black text-white mb-3">
              Ready to Build Something{" "}
              <span className="cta-highlight">Amazing?</span>
            </h2>
            <p
              className="lead text-white/70 mb-5 mx-auto"
              style={{ maxWidth: 560 }}
            >
              Open to full-time roles and freelance projects. Let's create a
              solution that scales and impresses.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link href="/contact" className="cta-btn-white">
                Start a Conversation <ArrowRight size={18} className="ms-2" />
              </Link>
              <Link href="/projects" className="cta-btn-outline">
                Browse Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
