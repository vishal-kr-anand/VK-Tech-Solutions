import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Code2, Database, Globe, LayoutDashboard, Monitor, Server, ShieldCheck, Sparkles, Rocket, Users, CircleHelp } from 'lucide-react';

const services = {
  'full-stack-development': { title: 'Full Stack Development', icon: Code2, accent: '#2563eb', gradient: 'linear-gradient(135deg, #2563eb, #4f46e5)', intro: 'Complete digital products built from a thoughtful interface through to secure APIs and reliable databases.', stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL'], outcomes: ['Product strategy and technical planning', 'Responsive frontend and robust backend delivery', 'Secure authentication and scalable data models', 'Deployment-ready, maintainable codebase'] },
  'frontend-development': { title: 'Frontend Development', icon: Monitor, accent: '#7c3aed', gradient: 'linear-gradient(135deg, #7c3aed, #a855f7)', intro: 'Fast, polished interfaces that give your visitors a smooth and memorable experience on every screen.', stack: ['React.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Bootstrap 5'], outcomes: ['Pixel-accurate responsive UI', 'Reusable component architecture', 'Accessible interaction and motion design', 'Performance-focused frontend optimization'] },
  'backend-api-development': { title: 'Backend & API Development', icon: Server, accent: '#0891b2', gradient: 'linear-gradient(135deg, #0891b2, #06b6d4)', intro: 'Secure, well-structured application foundations that keep your product fast, connected, and ready to grow.', stack: ['Node.js', 'Express.js', 'Laravel', 'PHP', 'JWT', 'Firebase'], outcomes: ['REST API architecture and integrations', 'Role-based authentication and authorization', 'Validation, logging, and error handling', 'Clean MVC structure and documented endpoints'] },
  'database-design': { title: 'Database Design', icon: Database, accent: '#ea580c', gradient: 'linear-gradient(135deg, #ea580c, #f97316)', intro: 'Well-planned data structures that make your application reliable today and easy to expand tomorrow.', stack: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'], outcomes: ['Logical schema and relationship design', 'Query and index optimization', 'Secure data access patterns', 'Migration and data integrity planning'] },
  'government-portal-development': { title: 'Government Portal Development', icon: LayoutDashboard, accent: '#db2777', gradient: 'linear-gradient(135deg, #db2777, #ec4899)', intro: 'Reliable role-based portals for complex workflows, departmental users, and high-trust digital services.', stack: ['React.js', 'Node.js', 'Firebase', 'Role-Based Auth'], outcomes: ['Multi-role dashboards and workflows', 'Secure permission-based access', 'Structured forms and status tracking', 'Scalable architecture for public services'] },
  'cms-wordpress-development': { title: 'CMS & WordPress Development', icon: Globe, accent: '#16a34a', gradient: 'linear-gradient(135deg, #16a34a, #22c55e)', intro: 'Flexible content platforms that let your team update pages confidently without compromising visual quality.', stack: ['WordPress', 'PHP', 'Custom Themes', 'Plugins'], outcomes: ['Custom theme and page development', 'Plugin integrations and tailored features', 'Easy editorial workflows', 'Speed, security, and mobile optimization'] },
};

export type ServiceSlug = keyof typeof services;

export default function ServiceDetail({ slug }: { slug: ServiceSlug }) {
  const service = services[slug];

  const Icon = service.icon;
  const phases = [
    ['01', 'Understand', 'We align on objectives, users, scope, and success metrics before implementation begins.'],
    ['02', 'Create', 'Focused design and engineering turn the plan into a clear, dependable product experience.'],
    ['03', 'Refine', 'Testing, feedback, and performance tuning ensure each important detail is ready for launch.'],
    ['04', 'Launch', 'A smooth handover with clear communication, deployment guidance, and next-step support.'],
  ];
  const faqs = [
    ['How do we get started?', 'We begin with a short conversation about your idea, goals, audience, and required features. You then receive a practical recommendation and clear next steps.'],
    ['Will it work well on mobile?', 'Yes. Every delivery is designed and tested for phones, tablets, and desktop screens so the experience stays polished everywhere.'],
    ['Can the solution grow with my business?', 'Absolutely. The work is planned with maintainable structure and scalable choices, so new features can be added confidently as needs evolve.'],
  ];

  return <div className="page-container service-detail-page">
    <section className="service-detail-hero" style={{ '--service-accent': service.accent, '--service-gradient': service.gradient } as React.CSSProperties}>
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }} className="service-detail-copy">
          <Link href="/services" className="service-breadcrumb">Services <span>/</span> {service.title}</Link>
          <div className="service-detail-icon"><Icon size={34} /></div>
          <p className="service-kicker">Tailored digital solutions</p>
          <h1>{service.title}</h1>
          <p className="service-detail-lead">{service.intro}</p>
          <Link href="/contact" className="hero-btn-primary">Discuss Your Project <ArrowRight size={18} className="ms-2" /></Link>
        </motion.div>
      </div>
    </section>

    <section className="service-detail-content"><div className="container"><div className="row g-5 align-items-start">
      <div className="col-lg-7"><span className="section-eyebrow">What you receive</span><h2>A clear path from idea to a <span className="text-gradient">high-quality launch.</span></h2><p className="service-detail-text">Every engagement starts by understanding your goals, users, and business priorities. I then shape the work into practical milestones, communicate clearly throughout delivery, and leave you with a solution that is ready for real-world use.</p>
      <div className="service-outcomes">{service.outcomes.map((outcome) => <div key={outcome}><CheckCircle2 size={20} style={{ color: service.accent }} />{outcome}</div>)}</div></div>
      <aside className="col-lg-5"><div className="service-stack-card"><div className="stack-card-icon" style={{ background: service.gradient }}><Sparkles size={23} /></div><h3>Tools & technologies</h3><p>The right stack is selected for reliability, speed, and future growth.</p><div className="service-stack-tags">{service.stack.map((item) => <span key={item} style={{ color: service.accent }}>{item}</span>)}</div><div className="stack-card-divider" /><div className="stack-card-note"><ShieldCheck size={19} style={{ color: service.accent }} /><span>Quality checks, responsive design, and clear delivery at every stage.</span></div></div></aside>
    </div></div></section>
    <section className="service-delivery-section"><div className="container"><div className="text-center mx-auto service-section-heading"><span className="section-eyebrow">A transparent process</span><h2>Built with focus at <span className="text-gradient">every stage.</span></h2><p>You always know what is being worked on, why it matters, and what comes next.</p></div><div className="row g-4">{phases.map(([number, title, desc], index) => <div className="col-lg-3 col-md-6" key={title}><div className="delivery-phase-card"><span style={{ color: service.accent }}>{number}</span><div className="delivery-phase-icon" style={{ background: `${service.accent}14`, color: service.accent }}>{index === 0 ? <Users size={20} /> : index === 3 ? <Rocket size={20} /> : <Sparkles size={20} />}</div><h3>{title}</h3><p>{desc}</p></div></div>)}</div></div></section>
    <section className="service-assurance-section"><div className="container"><div className="row align-items-center g-5"><div className="col-lg-5"><span className="section-eyebrow">Reliable by design</span><h2>More than code—an experience that earns trust.</h2><p>From the first conversation through launch, the priority is simple: create a thoughtful solution that supports your real goals and feels effortless for users.</p></div><div className="col-lg-7"><div className="assurance-grid">{['Clear communication and planned milestones', 'Responsive, accessible interface standards', 'Maintainable code and organized handover', 'Performance, security, and quality checks'].map((item) => <div className="assurance-item" key={item}><CheckCircle2 size={21} style={{ color: service.accent }} /><span>{item}</span></div>)}</div></div></div></div></section>
    <section className="service-faq-section"><div className="container"><div className="text-center mx-auto service-section-heading"><span className="section-eyebrow">Questions answered</span><h2>Everything stays <span className="text-gradient">simple and clear.</span></h2></div><div className="service-faq-list">{faqs.map(([question, answer]) => <div className="service-faq-card" key={question}><CircleHelp size={22} style={{ color: service.accent }} /><div><h3>{question}</h3><p>{answer}</p></div></div>)}</div></div></section>
    <section className="service-detail-cta"><div className="container text-center"><span>Have a project in mind?</span><h2>Let's build something people love to use.</h2><Link href="/contact" className="cta-btn-white">Start a Conversation <ArrowRight size={18} className="ms-2" /></Link></div></section>
  </div>;
}
