import { motion } from 'framer-motion';
import { type ReactElement } from 'react';
import { 
  FaReact, FaNodeJs, FaPhp, FaGitAlt, FaPython, FaHtml5, FaBootstrap 
} from 'react-icons/fa';
import { 
  SiMongodb, SiPostgresql, SiFirebase, SiTypescript, SiExpress, SiLaravel, SiNextdotjs, SiRedux, SiMysql, SiJquery, SiMui 
} from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io5";

interface Skill {
  name: string;
  icon: ReactElement;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <FaReact />, level: 90, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, level: 80, color: "#ffffff" },
        { name: "TypeScript", icon: <SiTypescript />, level: 85, color: "#3178C6" },
        { name: "JavaScript", icon: <IoLogoJavascript />, level: 90, color: "#F7DF1E" },
        { name: "Redux Toolkit", icon: <SiRedux />, level: 85, color: "#764ABC" },
        { name: "HTML5/CSS3", icon: <FaHtml5 />, level: 95, color: "#E34F26" },
        { name: "Bootstrap 5", icon: <FaBootstrap />, level: 90, color: "#7952B3" },
        { name: "Material UI", icon: <SiMui />, level: 80, color: "#007FFF" },
        { name: "jQuery", icon: <SiJquery />, level: 85, color: "#0769AD" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 88, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, level: 88, color: "#ffffff" },
        { name: "Laravel", icon: <SiLaravel />, level: 80, color: "#FF2D20" },
        { name: "PHP", icon: <FaPhp />, level: 85, color: "#777BB4" },
        { name: "Python", icon: <FaPython />, level: 70, color: "#3776AB" },
        { name: "RESTful APIs", icon: <span className="font-mono font-bold text-sm">API</span>, level: 90, color: "#00d4ff" },
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 85, color: "#47A248" },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 80, color: "#4169E1" },
        { name: "MySQL", icon: <SiMysql />, level: 85, color: "#4479A1" },
        { name: "Firebase", icon: <SiFirebase />, level: 85, color: "#FFCA28" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git / GitHub", icon: <FaGitAlt />, level: 85, color: "#F05032" },
        { name: "WordPress CMS", icon: <span className="font-bold">W</span>, level: 80, color: "#21759B" },
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
          <h2 className="display-4 fw-bold mb-3">Technical <span className="text-gradient">Arsenal</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tools, languages, and technologies I've mastered over the years to build high-performance web applications.
          </p>
        </motion.div>

        <div className="row g-5">
          {skillCategories.map((category, catIdx) => (
            <motion.div 
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIdx * 0.2 }}
              className="col-lg-6"
            >
              <div className="glass-card p-4 p-md-5 h-100 glow-border">
                <h3 className="h4 font-bold mb-4 text-white d-flex align-items-center gap-2">
                  <span className="w-2 h-6 rounded bg-gradient-to-b from-[#00d4ff] to-[#7c3aed]"></span>
                  {category.title}
                </h3>
                
                <div className="d-flex flex-column gap-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="d-flex align-items-center gap-2">
                          <span className="text-xl" style={{ color: skill.color }}>{skill.icon}</span>
                          <span className="font-medium text-gray-200">{skill.name}</span>
                        </div>
                        <span className="text-sm font-mono text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="progress bg-gray-800 rounded-full h-2">
                        <div 
                          className="progress-bar progress-bar-animated rounded-full" 
                          style={{ 
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
