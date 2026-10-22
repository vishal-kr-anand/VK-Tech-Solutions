import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle2, Clock, Globe, MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function Contact() {
  const [formData, setFormData]   = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq]     = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const contactCards = [
    {
      icon: <Phone size={24} />,
      label: "Call Me",
      value: "+91 8273356614",
      sub: "Mon–Sat, 9 AM – 7 PM",
      gradient: "linear-gradient(135deg, #2563eb, #4f46e5)",
      glow: "rgba(37,99,235,0.2)",
      href: "tel:+918273356614",
    },
    {
      icon: <Mail size={24} />,
      label: "Email Me",
      value: "vishal.anand6219@gmail.com",
      sub: "Reply within 24 hours",
      gradient: "linear-gradient(135deg, #7c3aed, #a855f7)",
      glow: "rgba(124,58,237,0.2)",
      href: "mailto:vishal.anand6219@gmail.com",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Dehradun, Uttarakhand",
      sub: "Open to relocation across India",
      gradient: "linear-gradient(135deg, #db2777, #ec4899)",
      glow: "rgba(219,39,119,0.2)",
      href: "#map",
    },
    {
      icon: <Clock size={24} />,
      label: "Availability",
      value: "Open to Opportunities",
      sub: "Freelance & Full-time",
      gradient: "linear-gradient(135deg, #16a34a, #22c55e)",
      glow: "rgba(22,163,74,0.2)",
      href: "#contact-form",
    },
  ];

  const faqs = [
    { q: "What is your preferred tech stack?", a: "My primary stack is the MERN stack (MongoDB, Express, React, Node.js) and PostgreSQL. I also have significant experience with PHP/Laravel and Next.js." },
    { q: "Are you available for freelance work?", a: "Yes, I am currently available for freelance, contract-based projects, and full-time opportunities. Feel free to reach out!" },
    { q: "What is your typical project timeline?", a: "Timelines vary by scope. A standard full-stack web application typically takes between 2–8 weeks. I provide a clear timeline after initial discussion." },
    { q: "Do you work remotely?", a: "Yes, I am highly experienced in remote work and async communication. I'm also open to relocation across India for the right opportunity." },
    { q: "How do you handle project communication?", a: "I prefer transparent, regular updates. I provide daily brief updates and weekly reviews via Slack, Email, or video calls based on client preference." },
  ];

  return (
    <div className="page-container">

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="contact-hero">
        <div className="contact-hero-mesh" />
        <div className="contact-hero-orb orb-c1" />
        <div className="contact-hero-orb orb-c2" />
        <div className="contact-hero-orb orb-c3" />
        <div className="container position-relative" style={{ zIndex: 5 }}>
          <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="contact-hero-icon">
              <MessageSquare size={28} />
            </div>
            <span className="section-eyebrow mb-3 d-inline-block">Let's Connect</span>
            <h1 className="display-3 fw-black text-[#0f172a] mb-3">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="lead text-gray-400 mx-auto" style={{ maxWidth: 520 }}>
              Available for freelance, full-time roles & collaborations. My inbox is always open — let's build something great together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ─────────────────────────────────── */}
      <section style={{ background: "#f8fafc", paddingTop: "4rem", paddingBottom: "2rem" }}>
        <div className="container">
          <div className="row g-4">
            {contactCards.map((card, i) => (
              <motion.div className="col-sm-6 col-lg-3" key={i} {...fadeUp(i * 0.1)}>
                <a href={card.href} className="contact-info-card" style={{ "--ci-glow": card.glow } as React.CSSProperties}>
                  <div className="ci-icon-wrap" style={{ background: card.gradient }}>
                    {card.icon}
                  </div>
                  <div className="ci-label">{card.label}</div>
                  <div className="ci-value">{card.value}</div>
                  <div className="ci-sub">{card.sub}</div>
                  <div className="ci-glow-fill" style={{ background: card.glow }} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ─────────────────────────────────────── */}
      <section id="contact-form" style={{ background: "#f8fafc", paddingTop: "2rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div className="row g-5 align-items-start">

            {/* Sidebar */}
            <motion.div className="col-lg-4" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="contact-sidebar">
                <div className="csb-header">
                  <div className="csb-avail-badge">
                    <span className="csb-avail-dot" /> Open to Work
                  </div>
                  <h3 className="csb-title">Let's Talk</h3>
                  <p className="csb-sub">I'm passionate about helping businesses build impactful digital products. Drop me a message!</p>
                </div>

                {/* Social links */}
                <div className="csb-socials">
                  <div className="csb-socials-label">Find me on</div>
                  <div className="csb-social-row">
                    {[
                      { icon: <FaGithub size={18} />,   label: "GitHub",   color: "#1e293b", bg: "#f1f5f9", href: "https://github.com" },
                      { icon: <FaLinkedin size={18} />,  label: "LinkedIn", color: "#0077b5", bg: "#eff6ff", href: "https://linkedin.com" },
                      { icon: <FaTwitter size={18} />,   label: "Twitter",  color: "#1da1f2", bg: "#eff6ff", href: "https://twitter.com" },
                      { icon: <FaWhatsapp size={18} />,  label: "WhatsApp", color: "#16a34a", bg: "#f0fdf4", href: "https://wa.me/918273356614" },
                    ].map((s, i) => (
                      <a key={i} href={s.href} target="_blank" rel="noreferrer" className="csb-social-btn" style={{ background: s.bg, color: s.color }}>
                        {s.icon}
                        <span>{s.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick stats */}
                <div className="csb-stats">
                  {[
                    { val: "< 24h",  label: "Response time",    color: "#2563eb" },
                    { val: "100%",   label: "Client satisfaction",color: "#16a34a" },
                    { val: "4+ yrs", label: "Experience",        color: "#7c3aed" },
                  ].map((s, i) => (
                    <div key={i} className="csb-stat-row">
                      <div className="csb-stat-val" style={{ color: s.color }}>{s.val}</div>
                      <div className="csb-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="csb-footer-note">
                  <Globe size={14} className="me-1" /> Available worldwide — remote & on-site
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div className="col-lg-8" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="contact-form-card">
                <div className="cfc-header">
                  <h3 className="cfc-title">Send a Message</h3>
                  <p className="cfc-sub">Fill in the details below and I'll get back to you as soon as possible.</p>
                </div>

                {submitted && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="cfc-success">
                    <CheckCircle2 size={28} className="me-3 flex-shrink-0" />
                    <div>
                      <strong className="d-block mb-1">Message sent! 🎉</strong>
                      Thank you for reaching out. I'll reply within 24 hours.
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="row g-4">
                  <div className="col-md-6">
                    <div className="cfc-field">
                      <label>Full Name *</label>
                      <input type="text" required placeholder="John Doe"
                        value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cfc-field">
                      <label>Email Address *</label>
                      <input type="email" required placeholder="john@example.com"
                        value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="cfc-field">
                      <label>Subject *</label>
                      <select required value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })}>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Project Discussion">Project Discussion</option>
                        <option value="Job Opportunity">Job Opportunity</option>
                        <option value="Collaboration">Collaboration</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="cfc-field">
                      <label>Message *</label>
                      <textarea rows={5} required placeholder="Tell me about your project or idea..."
                        value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="cfc-submit-btn" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <><span className="cfc-spinner" /> Sending...</>
                      ) : (
                        <><Send size={18} className="me-2" /> Send Message</>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ────────────────────────────────────────── */}
      <section id="map" className="map-section">
        <div className="map-overlay-card">
          <div className="map-card-inner">
            <div className="map-badge">
              <MapPin size={16} className="me-2" /> Dehradun, Uttarakhand, India
            </div>
            <h3 className="map-card-title">Based in Dehradun</h3>
            <p className="map-card-sub">Open to relocation & remote work across India</p>
            <div className="map-chips">
              <span className="map-chip map-chip-green"><span className="chip-dot green" /> Remote Work</span>
              <span className="map-chip map-chip-blue"><span className="chip-dot blue" /> On-site Available</span>
              <span className="map-chip map-chip-purple"><span className="chip-dot purple" /> Pan-India</span>
            </div>
          </div>
        </div>
        <iframe
          title="Dehradun Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55506.97326791284!2d78.00326!3d30.31653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000"
          className="map-iframe"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <motion.div className="text-center mb-5" {...fadeUp()}>
            <span className="section-eyebrow">Common Questions</span>
            <h2 className="display-6 fw-bold text-[#0f172a] mt-2">
              Frequently <span className="text-gradient">Asked Questions</span>
            </h2>
          </motion.div>

          <div className="faq-premium-list mx-auto" style={{ maxWidth: 760 }}>
            {faqs.map((faq, i) => {
              const colors = ["#2563eb","#7c3aed","#0891b2","#ea580c","#16a34a"];
              const c = colors[i % colors.length];
              return (
                <motion.div key={i} className="faq-item" {...fadeUp(i * 0.08)}>
                  <button
                    className={`faq-question ${openFaq === i ? 'faq-open' : ''}`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={openFaq === i ? { color: c, borderColor: `${c}30` } : {}}
                  >
                    <div className="faq-q-icon" style={{ background: `${c}15`, color: c }}>
                      <MessageSquare size={15} />
                    </div>
                    <span className="flex-1 text-start">{faq.q}</span>
                    <div className={`faq-chevron ${openFaq === i ? 'faq-chevron-open' : ''}`}
                      style={openFaq === i ? { background: `${c}15`, color: c } : {}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </button>
                  <div className={`faq-answer ${openFaq === i ? 'faq-answer-open' : ''}`}
                    style={openFaq === i ? { borderColor: `${c}20` } : {}}>
                    <p>{faq.a}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────────────── */}
      <section className="cta-premium">
        <div className="cta-mesh" />
        <div className="container position-relative" style={{ zIndex: 5 }}>
          <motion.div className="text-center" {...fadeUp()}>
            <div className="cta-eyebrow mb-3">Zero-commitment first call</div>
            <h2 className="display-5 fw-black text-white mb-3">
              Ready to <span className="cta-highlight">Start a Project?</span>
            </h2>
            <p className="lead mb-5 mx-auto" style={{ maxWidth: 500, color: "rgba(255,255,255,0.65)" }}>
              Book a free 30-min consultation. No pressure, no commitment — just a good conversation about your idea.
            </p>
            <a href="mailto:vishal.anand6219@gmail.com" className="cta-btn-white">
              <Mail size={18} className="me-2" /> Drop an Email
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
