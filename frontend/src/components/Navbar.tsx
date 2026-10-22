import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Building2, ChevronDown, Code2, Database, Globe, Mail, MapPin, Monitor, Phone, Server, X } from "lucide-react";
import logo from "../assets/image/VK-Tech-Solutions-logo.png";

const NAV_LINKS = [
  { name: "Home", path: "/", color: "#2563eb", bg: "#eff6ff" },
  { name: "About", path: "/about", color: "#7c3aed", bg: "#f5f3ff" },
  { name: "Services", path: "/services", color: "#0891b2", bg: "#ecfeff" },
  { name: "Projects", path: "/projects", color: "#ea580c", bg: "#fff7ed" },
  { name: "Contact", path: "/contact", color: "#db2777", bg: "#fdf2f8" },
];

const SERVICE_LINKS = [
  { name: "Full Stack Development", path: "/services/full-stack-development", color: "#2563eb", icon: Code2 },
  { name: "Frontend Development", path: "/services/frontend-development", color: "#7c3aed", icon: Monitor },
  { name: "Backend & API Development", path: "/services/backend-api-development", color: "#0891b2", icon: Server },
  { name: "Database Design", path: "/services/database-design", color: "#ea580c", icon: Database },
  { name: "Government Portal Development", path: "/services/government-portal-development", color: "#db2777", icon: Building2 },
  { name: "CMS & WordPress Development", path: "/services/cms-wordpress-development", color: "#16a34a", icon: Globe },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(docH > 0 ? (window.scrollY / docH) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Scroll progress bar ───────────────────────────── */}
      <div className="nav-progress-track">
        <div className="nav-progress-fill" style={{ width: `${scrollPct}%` }} />
      </div>

      <div className="site-topbar">
        <div className="container site-topbar-inner">
          <div className="topbar-availability"><span /> Available for freelance & full-time opportunities</div>
          <div className="topbar-contact-links">
            <a href="mailto:vishal.anand6219@gmail.com"><Mail size={13} /> vishal.anand6219@gmail.com</a>
            <a href="tel:+918273356614"><Phone size={13} /> +91 8273356614</a>
            <span><MapPin size={13} /> Dehradun, India</span>
          </div>
        </div>
      </div>

      {/* ── Main navbar ───────────────────────────────────── */}
      <nav className={`navbar-premium ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="container navbar-inner">
          {/* Logo */}
          <Link href="/" className="nav-logo">
            <div className="nav-logo-ring">
              <div className="nav-logo-inner">
                <img
                  src={logo}
                  alt="VK Tech Solutions Logo"
                  className="nav-logo-img"
                />
              </div>
            </div>
            {/* <div className="nav-logo-text">
              <span className="nav-logo-name">Vishal Kumar</span>
              <span className="nav-logo-dot">.dev</span>
            </div> */}
          </Link>

          {/* Desktop links */}
          <ul className="nav-desktop-links">
            {NAV_LINKS.map((link) => {
              const hasServices = link.path === "/services";
              const isActive = hasServices ? location.startsWith("/services") : location === link.path;
              return (
                <li
                  key={link.path}
                  className={`${hasServices ? "nav-services-item" : ""} ${hasServices && servicesOpen ? "nav-services-open" : ""}`}
                  onMouseEnter={hasServices ? () => setServicesOpen(true) : undefined}
                  onMouseLeave={hasServices ? () => setServicesOpen(false) : undefined}
                >
                  <Link
                    href={link.path}
                    className={`nav-desktop-link ${isActive ? "nav-link-active" : ""}`}
                    style={
                      isActive
                        ? { color: link.color, background: link.bg }
                        : undefined
                    }
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.color =
                          link.color;
                        (e.currentTarget as HTMLElement).style.background =
                          link.bg;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.color = "";
                        (e.currentTarget as HTMLElement).style.background = "";
                      }
                    }}
                    onClick={hasServices ? () => setServicesOpen(false) : undefined}
                  >
                    {link.name}
                    {hasServices && <ChevronDown size={15} className="nav-dropdown-chevron" />}
                  </Link>
                  {hasServices && (
                    <div className="nav-services-dropdown">
                      <div className="nav-dropdown-heading">Explore services</div>
                      <div className="nav-dropdown-grid">
                        {SERVICE_LINKS.map((service) => (
                          <Link href={service.path} key={service.path} className="nav-service-option" onClick={() => setServicesOpen(false)}>
                            <span className="nav-service-option-icon" style={{ background: `${service.color}14`, color: service.color }}><service.icon size={16} /></span>
                            <span>{service.name}</span>
                            <ArrowIcon />
                          </Link>
                        ))}
                      </div>
                      <Link href="/services" className="nav-all-services-link" onClick={() => setServicesOpen(false)}>View all services <span>→</span></Link>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Hire Me button */}
          <Link
            href="/contact"
            className="nav-hire-btn d-none d-lg-inline-flex"
          >
            <span className="nav-hire-pulse" />
            Hire Me 🚀
          </Link>

          {/* Mobile hamburger */}
          <button
            className={`nav-hamburger d-lg-none ${menuOpen ? "ham-open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* ── Mobile menu ──────────────────────────────────── */}
        <div className={`nav-mobile-menu ${menuOpen ? "nav-mobile-open" : ""}`}>
          <div className="nav-mobile-inner">
            {/* Header */}
            <div className="nav-mobile-header">
              <div className="nav-mobile-avatar">VK</div>
              <div>
                <div className="nav-mobile-name">Vishal Kumar Anand</div>
                <div className="nav-mobile-role">Full Stack Developer</div>
              </div>
              <button
                className="nav-mobile-close"
                onClick={() => setMenuOpen(false)}
              >
                <X size={22} />
              </button>
            </div>

            {/* Links */}
            <ul className="nav-mobile-links">
              {NAV_LINKS.map((link, i) => {
                const hasServices = link.path === "/services";
                const isActive = hasServices ? location.startsWith("/services") : location === link.path;
                return (
                  <li
                    key={link.path}
                    style={{ animationDelay: `${i * 0.06}s` }}
                  >
                    <Link
                      href={link.path}
                      className={`nav-mobile-link ${isActive ? "nav-mobile-link-active" : ""}`}
                      onClick={() => setMenuOpen(false)}
                      style={
                        isActive
                          ? {
                              color: link.color,
                              background: link.bg,
                              borderColor: `${link.color}30`,
                            }
                          : { borderColor: "#f1f5f9" }
                      }
                    >
                      <span
                        className="nav-mobile-link-dot"
                        style={{
                          background: isActive ? link.color : "#cbd5e1",
                        }}
                      />
                      {link.name}
                      {isActive && (
                        <span
                          className="ms-auto nav-mobile-active-badge"
                          style={{
                            color: link.color,
                            background: `${link.color}15`,
                          }}
                        >
                          Active
                        </span>
                      )}
                    </Link>
                    {hasServices && (
                      <div className="nav-mobile-services">
                        {SERVICE_LINKS.map((service) => (
                          <Link href={service.path} key={service.path} className="nav-mobile-service-link" onClick={() => setMenuOpen(false)}>
                            <span className="nav-mobile-service-icon" style={{ background: `${service.color}14`, color: service.color }}><service.icon size={14} /></span>{service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Footer CTA */}
            <div className="nav-mobile-footer">
              <Link
                href="/contact"
                className="nav-hire-btn w-100 justify-content-center"
                onClick={() => setMenuOpen(false)}
              >
                <span className="nav-hire-pulse" />
                Hire Me 🚀
              </Link>
              <div className="nav-mobile-avail">
                <span className="nav-avail-dot" /> Available for new projects
              </div>
            </div>
          </div>
        </div>

        {/* Backdrop */}
        {menuOpen && (
          <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />
        )}
      </nav>
    </>
  );
}

function ArrowIcon() {
  return <span className="nav-service-arrow" aria-hidden="true">→</span>;
}
