import { Link } from "wouter";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import {
  MdApi,
  MdApps,
  MdCode,
  MdContactMail,
  MdDesignServices,
  MdHome,
  MdInfo,
  MdStorage,
  MdWeb,
  MdWork,
} from "react-icons/md";
import logo from "../assets/image/VK-Tech-Solutions-logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { href: "/", label: "Home", icon: <MdHome size={18} /> },
    { href: "/about", label: "About", icon: <MdInfo size={18} /> },
    {
      href: "/services",
      label: "Services",
      icon: <MdDesignServices size={18} />,
    },
    { href: "/projects", label: "Projects", icon: <MdWork size={18} /> },
    { href: "/contact", label: "Contact", icon: <MdContactMail size={18} /> },
  ];
  const serviceLinks = [
    { label: "Web Development", icon: <MdWeb size={18} /> },
    { label: "Full Stack Apps", icon: <MdApps size={18} /> },
    { label: "API Development", icon: <MdApi size={18} /> },
    { label: "React.js Development", icon: <MdCode size={18} /> },
    { label: "Node.js Development", icon: <MdDesignServices size={18} /> },
    { label: "Database Design", icon: <MdStorage size={18} /> },
  ];

  return (
    <footer className="site-footer mt-auto">
      <div className="footer-orb footer-orb-one" />
      <div className="footer-orb footer-orb-two" />
      <div className="container position-relative">
        <div className="footer-top row gy-5">
          <div className="col-lg-5 col-md-6">
            <Link href="/" className="footer-logo-link" aria-label="VK Tech Solutions home">
              <img src={logo} alt="VK Tech Solutions logo" className="footer-logo" />
            </Link>
            <p className="footer-intro">
              Building scalable, elegant, and robust digital experiences with
              modern web technologies.
            </p>
            <a href="mailto:vishal.anand6219@gmail.com" className="footer-email-cta">
              Start a conversation <ArrowUpRight size={17} />
            </a>
            <div className="footer-socials">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="mailto:vishal.anand6219@gmail.com" aria-label="Send email"><Mail size={18} /></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 col-6">
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links list-unstyled mb-0">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-link"
                  >
                    <span>{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 col-6">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links list-unstyled mb-0">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <span className="footer-link footer-service-link">
                    <span>{service.icon}</span>
                    {service.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-contact-card">
              <h4 className="footer-heading">Let&apos;s connect</h4>
              <a href="tel:+918273356614" className="footer-contact-item"><Phone size={17} /><span>+91 8273356614</span></a>
              <a href="mailto:vishal.anand6219@gmail.com" className="footer-contact-item"><Mail size={17} /><span>vishal.anand6219@gmail.com</span></a>
              <div className="footer-contact-item"><MapPin size={17} /><span>Dehradun, Uttarakhand</span></div>
              <span className="footer-availability"><i /> Available for new projects</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p className="mb-0">
            &copy; {currentYear} VK Tech Solutions. All rights reserved.
          </p>
          <p className="mb-0">Designed & built with React</p>
        </div>
      </div>
    </footer>
  );
}
