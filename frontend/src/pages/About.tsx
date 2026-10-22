import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Download, Briefcase, Calendar, GraduationCap, Award, CheckCircle, Star, Zap, Code2, Users } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import MyImage from "../assets/image/MyPhoto.png"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

function SkillBar({ name, percent, color, delay = 0 }: { name: string; percent: number; color: string; delay?: number }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          barRef.current.style.width = `${percent}%`;
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current.parentElement!);
    return () => observer.disconnect();
  }, [percent]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="skill-bar-row"
    >
      <div className="skill-bar-meta">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-pct" style={{ color }}>{percent}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          ref={barRef}
          className="skill-bar-fill"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            width: '0%',
            transition: `width 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${delay * 0.5}s`,
          }}
        />
        <div className="skill-bar-glow" style={{ background: color }} />
      </div>
    </motion.div>
  );
}

export default function About() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [tlFill, setTlFill] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const winH  = window.innerHeight;
      // Start filling when top of section reaches 80% from viewport top
      // Complete when bottom of section passes 60% from viewport top
      const traveled   = winH * 0.7 - rect.top;
      const totalTravel = rect.height + winH * 0.2;
      const pct = Math.min(100, Math.max(0, (traveled / totalTravel) * 100));
      setTlFill(pct);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const skills = [
    { name: "React.js",     percent: 90, color: "#06b6d4" },
    { name: "JavaScript",   percent: 92, color: "#eab308" },
    { name: "TypeScript",   percent: 80, color: "#2563eb" },
    { name: "Node.js",      percent: 85, color: "#22c55e" },
    { name: "Express.js",   percent: 88, color: "#64748b" },
    { name: "PHP / Laravel",percent: 75, color: "#ef4444" },
    { name: "HTML / CSS",   percent: 95, color: "#f97316" },
    { name: "Bootstrap",    percent: 90, color: "#7c3aed" },
    { name: "MongoDB",      percent: 82, color: "#16a34a" },
    { name: "PostgreSQL",   percent: 80, color: "#3b82f6" },
    { name: "MySQL",        percent: 78, color: "#0891b2" },
    { name: "Firebase",     percent: 75, color: "#f59e0b" },
  ];

  const experience = [
    {
      company: "Akiko Sherman Infotech Pvt. Ltd. (NIC)",
      role: "Software Developer",
      date: "Jan 2025 – Present",
      location: "Dehradun, UA",
      current: true,
      desc: "Developing secure government portals and fixing mission-critical bugs using React and Node.js. Implementing role-based dashboards for NIC-backed projects.",
      tags: ["React.js", "Node.js", "PostgreSQL"],
    },
    {
      company: "Crew Captivators Solutions Pvt. Ltd.",
      role: "Web Dev Executive (Full Stack)",
      date: "Feb 2024 – Dec 2024",
      location: "Naharlagun, AP",
      current: false,
      desc: "Built dynamic web applications, architected REST APIs, and managed databases using the MERN stack for enterprise clients.",
      tags: ["MERN Stack", "REST APIs", "MongoDB"],
    },
    {
      company: "BBS Tech Solution",
      role: "Software Engineer",
      date: "Jul 2023 – Feb 2024",
      location: "Bengaluru, KA",
      current: false,
      desc: "Spearheaded frontend architecture, optimized React components, and improved application load times by 30%.",
      tags: ["React.js", "Performance", "TypeScript"],
    },
    {
      company: "Codegems Solutions Pvt. Ltd.",
      role: "Web Designer",
      date: "Jul 2022 – Jun 2023",
      location: "Mohali, PB",
      current: false,
      desc: "Created responsive UI layouts, collaborated with backend engineers, and integrated third-party APIs for CRM platforms.",
      tags: ["UI Design", "Bootstrap", "API Integration"],
    },
    {
      company: "TheFuenix",
      role: "Web Designer — Internship",
      date: "Jan 2022 – Jun 2022",
      location: "Mohali, PB",
      current: false,
      desc: "Gained foundational experience in HTML, CSS, JavaScript, and Bootstrap building static websites and templates.",
      tags: ["HTML/CSS", "JavaScript", "Bootstrap"],
    },
  ];

  const education = [
    {
      degree: "B.E. Computer Science",
      inst: "Truba Group of Institutes, Bhopal",
      year: "2016 – 2020",
      icon: <GraduationCap size={26} />,
      color: "#7c3aed",
    },
    {
      degree: "Senior Secondary (XII)",
      inst: "Sharda Girdhari Keshri College",
      year: "2016",
      icon: <GraduationCap size={26} />,
      color: "#2563eb",
    },
    {
      degree: "Secondary (X)",
      inst: "M S M High School Chaparhat",
      year: "2014",
      icon: <GraduationCap size={26} />,
      color: "#06b6d4",
    },
  ];

  const certs = [
    { title: "Software Engineer",           platform: "HackerRank",  color: "#22c55e" },
    { title: "Frontend Developer (React)",  platform: "HackerRank",  color: "#06b6d4" },
    { title: "Backend Developer (Node.js)", platform: "HackerRank",  color: "#22c55e" },
    { title: "REST API Development",        platform: "Coursera",    color: "#2563eb" },
    { title: "Responsive Web Design",       platform: "freeCodeCamp",color: "#7c3aed" },
    { title: "JavaScript Algorithms",       platform: "freeCodeCamp",color: "#eab308" },
  ];

  const stats = [
    { value: "4+",  label: "Years Experience", icon: <Star size={20} />,     color: "#2563eb" },
    { value: "5+",  label: "Companies",         icon: <Briefcase size={20} />, color: "#7c3aed" },
    { value: "10+", label: "Projects",          icon: <Zap size={20} />,       color: "#06b6d4" },
    { value: "15+", label: "Technologies",      icon: <Code2 size={20} />,     color: "#ec4899" },
  ];

  return (
    <div className="page-container">

      {/* ─── PAGE HERO ─────────────────────────────────────────── */}
      <section className="about-hero-banner">
        <div className="about-hero-mesh" />
        <div className="about-hero-orb orb-left" />
        <div className="about-hero-orb orb-right" />
        <div className="container position-relative" style={{ zIndex: 5 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="section-eyebrow mb-3 d-inline-block">Get to Know Me</span>
            <h1 className="display-4 fw-black text-[#0f172a] mb-2">
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-gray-400 fw-medium">Home &nbsp;/&nbsp; About</p>
          </motion.div>
        </div>
      </section>

      {/* ─── PROFILE + BIO ─────────────────────────────────────── */}
      <section className="py-5 bg-white" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="row align-items-start gy-5">

            {/* Profile Card */}
            <motion.div className="col-lg-4" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="profile-premium-card">
                <div className="profile-card-top">
                  <div className="profile-avatar-ring">
                    <div className="profile-avatar">
                      {/* <span>VK</span> */}
                      <img
                        src={MyImage}
                        alt="Vishal Kumar Anand"
                        className="profile-avatar-img"
                      />
                    </div>
                  </div>
                  <h3 className="profile-name">Vishal Kumar Anand</h3>
                  <p className="profile-title">Full Stack Developer</p>
                  <div className="profile-avail-badge">
                    <span className="avail-dot" /> Open to Work
                  </div>
                </div>

                <div className="profile-card-body">
                  <div className="profile-info-row">
                    <div className="profile-info-icon" style={{ background: "#eff6ff", color: "#2563eb" }}>
                      <Phone size={15} />
                    </div>
                    <span>+91 8273356614</span>
                  </div>
                  <div className="profile-info-row">
                    <div className="profile-info-icon" style={{ background: "#f5f3ff", color: "#7c3aed" }}>
                      <Mail size={15} />
                    </div>
                    <span style={{ fontSize: "0.82rem" }}>vishal.anand6219@gmail.com</span>
                  </div>
                  <div className="profile-info-row">
                    <div className="profile-info-icon" style={{ background: "#fff0f6", color: "#ec4899" }}>
                      <MapPin size={15} />
                    </div>
                    <span>Dehradun &nbsp;<span className="badge bg-green-100 text-green-700 text-xs px-2 py-1 rounded-pill fw-semibold">Relocate OK</span></span>
                  </div>

                  <div className="profile-socials">
                    {[
                      { icon: <FaGithub size={17} />, color: "#1e293b", bg: "#f8fafc" },
                      { icon: <FaLinkedin size={17} />, color: "#0077b5", bg: "#eff6ff" },
                      { icon: <FaTwitter size={17} />, color: "#1da1f2", bg: "#eff6ff" },
                    ].map((s, i) => (
                      <a key={i} href="#" className="profile-social-btn"
                        style={{ background: s.bg, color: s.color }}>
                        {s.icon}
                      </a>
                    ))}
                  </div>

                  <a href="#" className="profile-download-btn">
                    <Download size={16} className="me-2" /> Download Resume
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div className="col-lg-8" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
              <span className="section-eyebrow mb-3 d-inline-block">My Story</span>
              <h2 className="display-6 fw-bold text-[#0f172a] mb-4">
                Who <span className="text-gradient">Am I?</span>
              </h2>

              <div className="bio-text">
                <p>
                  I'm a passionate <strong>Full Stack Developer</strong> with over <strong>4 years of hands-on experience</strong> architecting and delivering scalable web applications. My expertise spans building dynamic, high-performance user interfaces and robust, secure backend systems using <strong>React.js, Node.js, Express.js, PHP,</strong> and <strong>Laravel</strong>.
                </p>
                <p>
                  I've worked across a diverse spectrum of projects — from agile <strong>startup products</strong> and complex <strong>enterprise CRM systems</strong> to high-stakes <strong>government portals</strong> backed by NIC. This breadth of exposure has sharpened my ability to adapt, deliver, and think at scale.
                </p>
                <p>
                  Outside of building products, I love exploring new architectural patterns, optimizing performance bottlenecks, and contributing to the developer community. I believe great software lives at the intersection of <strong>technical excellence</strong> and a deep understanding of <strong>user needs</strong>.
                </p>
              </div>

              {/* Highlights */}
              <div className="row g-3 mt-1">
                {[
                  { icon: <Users size={16} />, label: "Team Collaborator",   color: "#2563eb" },
                  { icon: <Zap size={16} />,   label: "Fast Delivery",       color: "#7c3aed" },
                  { icon: <Code2 size={16} />, label: "Clean Architecture",  color: "#06b6d4" },
                  { icon: <Star size={16} />,  label: "Quality-Driven",      color: "#ec4899" },
                ].map((h, i) => (
                  <div className="col-6 col-md-3" key={i}>
                    <div className="bio-highlight-chip" style={{ borderColor: `${h.color}30`, background: `${h.color}08` }}>
                      <span style={{ color: h.color }}>{h.icon}</span>
                      <span>{h.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─────────────────────────────────────────────── */}
      <section className="stats-section py-5">
        <div className="container">
          <div className="row g-4">
            {stats.map((s, i) => (
              <motion.div className="col-6 col-md-3" key={i} {...fadeUp(i * 0.1)}>
                <div className="stat-glass-card">
                  <div className="stat-icon-wrap" style={{ background: `${s.color}18`, color: s.color }}>
                    {s.icon}
                  </div>
                  <div className="stat-number" style={{ color: s.color }}>{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILL BARS ────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <motion.div className="text-center mb-5" {...fadeUp()}>
            <span className="section-eyebrow">Proficiency</span>
            <h2 className="display-6 fw-bold text-[#0f172a] mt-2">Technical <span className="text-gradient">Skills</span></h2>
            <p className="text-gray-400 mt-2">Technologies I work with — measured by confidence & daily usage.</p>
          </motion.div>

          <div className="row g-4">
            <div className="col-md-6">
              {skills.slice(0, 6).map((s, i) => (
                <SkillBar key={i} name={s.name} percent={s.percent} color={s.color} delay={i * 0.08} />
              ))}
            </div>
            <div className="col-md-6">
              {skills.slice(6).map((s, i) => (
                <SkillBar key={i} name={s.name} percent={s.percent} color={s.color} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE TIMELINE ───────────────────────────────── */}
      <section style={{ background: "linear-gradient(180deg, #f8fafc, #f1f5f9)", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <motion.div className="text-center mb-5" {...fadeUp()}>
            <span className="section-eyebrow">Career Path</span>
            <h2 className="display-6 fw-bold text-[#0f172a] mt-2">Work <span className="text-gradient">Experience</span></h2>
            <p className="text-gray-400 mt-2">5 companies, 4+ years of building real-world products.</p>
          </motion.div>

          <div className="timeline-wrap" ref={timelineRef}>
            {/* Center spine with scroll-fill */}
            <div className="timeline-spine-track">
              <div className="timeline-spine-fill" style={{ height: `${tlFill}%` }} />
            </div>

            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className={`timeline-item ${i % 2 === 0 ? "tl-left" : "tl-right"}`}
                {...fadeUp(i * 0.12)}
              >
                {/* Dot */}
                <div className={`timeline-dot ${exp.current ? "dot-active" : ""}`}>
                  <Briefcase size={14} />
                </div>

                <div className="timeline-card">
                  {exp.current && (
                    <div className="tl-current-badge">
                      <span className="tl-dot" /> Currently Here
                    </div>
                  )}
                  <div className="tl-card-header">
                    <div>
                      <h4 className="tl-role">{exp.role}</h4>
                      <p className="tl-company">{exp.company}</p>
                    </div>
                  </div>
                  <div className="tl-meta">
                    <span className="tl-meta-item"><Calendar size={12} /> {exp.date}</span>
                    <span className="tl-meta-item"><MapPin size={12} /> {exp.location}</span>
                  </div>
                  <p className="tl-desc">{exp.desc}</p>
                  <div className="tl-tags">
                    {exp.tags.map((t, j) => <span key={j} className="tl-tag">{t}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EDUCATION ─────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <motion.div className="text-center mb-5" {...fadeUp()}>
            <span className="section-eyebrow">Academic</span>
            <h2 className="display-6 fw-bold text-[#0f172a] mt-2">My <span className="text-gradient">Education</span></h2>
          </motion.div>

          <div className="row g-4 justify-content-center">
            {education.map((edu, i) => (
              <motion.div className="col-md-4" key={i} {...fadeUp(i * 0.12)}>
                <div className="edu-premium-card" style={{ "--edu-color": edu.color } as React.CSSProperties}>
                  <div className="edu-card-top" style={{ background: `linear-gradient(135deg, ${edu.color}18, ${edu.color}08)` }}>
                    <div className="edu-icon-box" style={{ background: `${edu.color}15`, color: edu.color }}>
                      {edu.icon}
                    </div>
                    <span className="edu-year-pill" style={{ background: `${edu.color}15`, color: edu.color }}>
                      {edu.year}
                    </span>
                  </div>
                  <div className="edu-card-body">
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <p className="edu-inst">{edu.inst}</p>
                    <div className="edu-accent-line" style={{ background: edu.color }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(180deg, #f8fafc, #f1f5f9)", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <motion.div className="text-center mb-5" {...fadeUp()}>
            <span className="section-eyebrow">Achievements</span>
            <h2 className="display-6 fw-bold text-[#0f172a] mt-2">My <span className="text-gradient">Certifications</span></h2>
            <p className="text-gray-400 mt-2">Industry-recognized credentials from top platforms.</p>
          </motion.div>

          <div className="row g-4">
            {certs.map((cert, i) => (
              <motion.div className="col-md-6 col-lg-4" key={i} {...fadeUp(i * 0.08)}>
                <div className="cert-premium-card" style={{ "--cert-color": cert.color } as React.CSSProperties}>
                  <div className="cert-icon-wrap" style={{ background: `${cert.color}15`, color: cert.color }}>
                    <Award size={24} />
                  </div>
                  <div className="cert-body">
                    <h5 className="cert-title">{cert.title}</h5>
                    <span className="cert-platform" style={{ color: cert.color, background: `${cert.color}12` }}>
                      {cert.platform}
                    </span>
                  </div>
                  <div className="cert-check" style={{ color: cert.color }}>
                    <CheckCircle size={18} />
                  </div>
                  <div className="cert-glow" style={{ background: cert.color }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
