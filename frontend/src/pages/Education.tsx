import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "B.E. Computer Science & Engineering",
      institution: "Truba Group of Institutes Bhopal",
      date: "2016 – 2020",
      type: "Bachelor's Degree",
      color: "#00d4ff"
    },
    {
      degree: "Senior Secondary Education (12th)",
      institution: "Sharda Girdhari Keshri College",
      date: "2016",
      type: "Higher Secondary",
      color: "#7c3aed"
    },
    {
      degree: "Secondary Education (10th)",
      institution: "M S M High School Chaparhat",
      date: "2014",
      type: "High School",
      color: "#ec4899"
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
          <h2 className="display-4 fw-bold mb-3">Academic <span className="text-gradient">Background</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto rounded-full"></div>
        </motion.div>

        <div className="row justify-content-center g-4">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="col-lg-8"
            >
              <div className="glass-card p-4 p-md-5 relative overflow-hidden group hover:border-white/20 transition-colors">
                <div 
                  className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full group-hover:scale-110 transition-transform duration-500"
                  style={{ background: `radial-gradient(circle, ${edu.color} 0%, transparent 70%)` }}
                ></div>
                
                <div className="d-flex align-items-start gap-4">
                  <div 
                    className="w-16 h-16 rounded-2xl d-flex align-items-center justify-content-center flex-shrink-0 shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${edu.color}40, transparent)`, border: `1px solid ${edu.color}60` }}
                  >
                    <GraduationCap size={32} style={{ color: edu.color }} />
                  </div>
                  
                  <div className="flex-grow-1">
                    <div className="d-inline-block px-3 py-1 rounded-full text-xs font-bold font-mono mb-3 glass-card" style={{ color: edu.color, border: `1px solid ${edu.color}30` }}>
                      {edu.type}
                    </div>
                    
                    <h3 className="h3 font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-xl text-gray-300 mb-4">{edu.institution}</p>
                    
                    <div className="d-flex flex-wrap gap-4 text-sm text-gray-400 font-mono">
                      <div className="d-flex align-items-center gap-2">
                        <Calendar size={16} className="text-[#00d4ff]" />
                        {edu.date}
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <MapPin size={16} className="text-[#ec4899]" />
                        India
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
