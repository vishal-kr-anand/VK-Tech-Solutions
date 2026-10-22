import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, ChevronRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "Akiko Sherman Infotech Pvt. Ltd. (NIC)",
      role: "Software Developer",
      location: "Dehradun, Uttarakhand",
      date: "Jan 2025 – Present",
      color: "#00d4ff",
      responsibilities: [
        "Building and maintaining government portals using React.js, Node.js, and Express.js.",
        "Developing full-stack features with role-based authentication using Firebase.",
        "Managing data schemas and creating modular APIs with MongoDB and PostgreSQL.",
        "Assisting government teams with server deployment and conducting technical training.",
      ]
    },
    {
      company: "Crew Captivators Solutions Pvt. Ltd.",
      role: "Web Developer Executive (Full Stack)",
      location: "Naharlagun, Arunachal Pradesh",
      date: "Feb 2024 – Dec 2024",
      color: "#7c3aed",
      responsibilities: [
        "Architected scalable full-stack applications with React.js, Node.js, and Express.js.",
        "Integrated Firebase for real-time data sync and complex user management.",
        "Designed and secured RESTful APIs with robust middleware architecture.",
        "Improved application performance by refactoring legacy codebases.",
      ]
    },
    {
      company: "BBS Tech Solution",
      role: "Software Engineer",
      location: "Bengaluru, Karnataka",
      date: "Jul 2023 – Feb 2024",
      color: "#ec4899",
      responsibilities: [
        "Developed comprehensive corporate websites, CRMs, and APIs using React, Node, and PostgreSQL.",
        "Built custom client solutions from scratch, ensuring responsive and accessible UIs.",
        "Integrated third-party APIs and payment gateways.",
      ]
    },
    {
      company: "Codegems Solutions Pvt. Ltd.",
      role: "Web Designer",
      location: "Mohali, Punjab",
      date: "Jul 2022 – Jun 2023",
      color: "#06b6d4",
      responsibilities: [
        "Developed responsive client-focused websites focusing on scalable layouts.",
        "Created clean, modern UI/UX components tailored to specific client brand guidelines.",
        "Collaborated with cross-functional teams to deliver projects on strict deadlines.",
      ]
    },
    {
      company: "TheFuenix",
      role: "Web Designer Internship",
      location: "Mohali, Punjab",
      date: "Jan 2022 – Jun 2022",
      color: "#f59e0b",
      responsibilities: [
        "Designed responsive frontends with HTML5, CSS3, Bootstrap 5, and JavaScript.",
        "Translated Figma design files into pixel-perfect web pages.",
        "Gained hands-on experience in modern frontend development workflows.",
      ]
    }
  ];

  return (
    <div className="page-container">
      <div className="container content-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="display-4 fw-bold mb-3">Professional <span className="text-gradient">Journey</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto rounded-full"></div>
        </motion.div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="timeline">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="timeline-item"
                >
                  <div 
                    className="timeline-dot" 
                    style={{ background: exp.color, boxShadow: `0 0 15px ${exp.color}80` }}
                  ></div>
                  
                  <div className="glass-card p-4 p-md-5 hover-elevate transition-all border-l-4" style={{ borderLeftColor: exp.color }}>
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start mb-4 gap-3">
                      <div>
                        <h3 className="h4 font-bold text-white mb-1">{exp.role}</h3>
                        <div className="d-flex align-items-center gap-2 text-lg font-medium" style={{ color: exp.color }}>
                          <Building2 size={18} />
                          {exp.company}
                        </div>
                      </div>
                      <div className="d-flex flex-column gap-2 text-sm text-gray-400 font-mono text-md-end">
                        <div className="d-flex align-items-center gap-2 justify-content-md-end glass-card px-3 py-1 rounded-full w-fit ms-md-auto">
                          <Calendar size={14} className="text-[#00d4ff]" /> {exp.date}
                        </div>
                        <div className="d-flex align-items-center gap-2 justify-content-md-end">
                          <MapPin size={14} className="text-[#ec4899]" /> {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="list-unstyled space-y-2 mb-0">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="d-flex align-items-start gap-3 text-gray-300">
                          <ChevronRight size={18} className="mt-1 flex-shrink-0" style={{ color: exp.color }} />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
