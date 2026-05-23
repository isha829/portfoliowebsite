import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faReact, 
  faJs, 
  faNode, 
  faCss3Alt,
  faHtml5,
  // faGitAlt
} from "@fortawesome/free-brands-svg-icons";
import { 
  faMobile,
  faDatabase,
  faServer
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const skills = [
    { name: "React.js", level: 90, icon: faReact, color: "#54c6e8" },
    { name: "React Native", level: 60, icon: faMobile, color: "#61dafb" },
    { name: "JavaScript", level: 95, icon: faJs, color: "#f7df1e" },
    { name: "HTML5", level: 100, icon: faHtml5, color: "#e34c26" },
    { name: "CSS", level: 95, icon: faCss3Alt, color: "#264de4" },
    { name: "Node.js", level: 60, icon: faNode, color: "#68a063" },
    { name: "Express.js", level: 60, icon: faServer, color: "#ffffff" },
    { name: "MongoDB", level: 60, icon: faDatabase, color: "#47a248" },
   
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* Section Header */}
        <div className="skills-header">
          <span className="skills-badge">✦ MY SKILLS</span>
          <h2 className="skills-title">
            What <span className="skills-gradient">I Can Do</span>
          </h2>
          <p className="skills-subtitle">
            Technologies and tools I work with to build amazing applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon-wrapper">
                <FontAwesomeIcon icon={skill.icon} className="skill-icon" style={{ color: skill.color }} />
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-progress-bar">
                  <div 
                    className="skill-progress-fill" 
                    style={{ width: `${skill.level}%`, background: skill.color }}
                  ></div>
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Status */}
        <div className="skills-learning">
          <div className="learning-badge">
            <span className="learning-icon">📚</span>
            <span>Currently Learning</span>
          </div>
          <p className="learning-text">
            Deepening my knowledge in <strong>Backend Development</strong> with Node.js, Express, and MongoDB. 
            Working towards becoming a Full-Stack Developer!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;