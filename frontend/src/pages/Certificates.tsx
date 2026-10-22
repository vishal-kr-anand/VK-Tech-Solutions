import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    { title: "Software Engineer", category: "Role Based", color: "#00d4ff" },
    { title: "Frontend Developer (React.js)", category: "Specialization", color: "#61DAFB" },
    { title: "Backend Developer (Node.js)", category: "Specialization", color: "#339933" },
    { title: "REST API Development", category: "Architecture", color: "#7c3aed" },
    { title: "Responsive Web Design", category: "UI/UX", color: "#ec4899" },
    { title: "JavaScript Algorithms and Data Structures", category: "Core Concept", color: "#F7DF1E" },
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
          <h2 className="display-4 fw-bold mb-3">Certifications & <span className="text-gradient">Badges</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuous learning is the key to staying sharp. Here are some of the professional milestones and certifications I've achieved.
          </p>
        </motion.div>

        <div className="row g-4">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="col-md-6 col-lg-4"
            >
              <div className="glass-card p-4 h-100 glow-border text-center d-flex flex-column align-items-center justify-content-center relative group">
                <div 
                  className="w-16 h-16 rounded-full mb-4 d-flex align-items-center justify-content-center transition-transform group-hover:scale-110 group-hover:rotate-12"
                  style={{ background: `radial-gradient(circle, ${cert.color}40 0%, transparent 70%)` }}
                >
                  <Award size={32} style={{ color: cert.color }} />
                </div>
                
                <h3 className="h5 font-bold text-white mb-2">{cert.title}</h3>
                <div className="d-flex align-items-center gap-1 mt-auto">
                  <CheckCircle2 size={14} className="text-[#00d4ff]" />
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-mono">{cert.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
