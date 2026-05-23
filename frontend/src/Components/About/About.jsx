import React from "react";
import "./About.css";
import about_img from "../../assets/devp3.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faJs, 
  faReact 
} from "@fortawesome/free-brands-svg-icons";
import { 
  faCode, 
  faServer,
  faGraduationCap,
  // faProjectDiagram,
  // faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const skills = [
    { name: "JavaScript", level: 95, icon: faJs },
    { name: "React.js", level: 90, icon: faReact },
    { name: "Backend (Node.js/Express)", level: 70, icon: faServer }
  ];

  const achievements = [
    { number: "20+", label: "Projects Done", color: "#7c8eff" },
    { number: "4th", label: "Year Starting", color: "#c084fc" },
    { number: "BSCS", label: "University of Education", color: "#10b981" }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Section Header */}
        <div className="about-header">
          <span className="about-badge">✦ ABOUT ME</span>
          <h2 className="about-title">
            Get to Know <span className="about-gradient">Me</span>
          </h2>
          <p className="about-subtitle">
            Passionate frontend developer creating amazing web experiences
          </p>
        </div>

        <div className="about-content">
          {/* Left Column - Image */}
          <div className="about-left">
            <div className="about-image-wrapper">
              <div className="about-image-glow"></div>
              <img src={about_img} alt="Inshira Attique" className="about-image" />
              <div className="about-image-badge">
                <span className="badge-text">Frontend Developer</span>
              </div>
            </div>

            {/* Stats Cards - Updated */}
            <div className="about-stats-grid">
              {achievements.map((stat, index) => (
                <div key={index} className="about-stat-card">
                  <h3 className="about-stat-number">{stat.number}</h3>
                  <p className="about-stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="about-right">
            <div className="about-bio">
              <h3 className="about-bio-title">
                <span className="title-icon">👋</span> Who Am I?
              </h3>
              <p className="about-bio-text">
                I'm <strong>Inshira Attique</strong>, a passionate frontend developer currently pursuing <strong>BSCS</strong> at <strong>University of Education</strong>. I'm in my 4th year, starting soon, and I love building modern web applications.
              </p>
              <p className="about-bio-text">
                I have completed 20+ online projects as practice, including a movie app, food ordering app, and a company website with admin panel. I'm continuously learning and improving my skills in React and backend technologies.
              </p>
            </div>

            <div className="about-education">
              <h3 className="about-section-title">
                <FontAwesomeIcon icon={faGraduationCap} className="section-icon" />
                Education
              </h3>
              <div className="education-card">
                <h4>Bachelor of Science in Computer Science (BSCS)</h4>
                <p>University of Education | 4th Year (Starting Soon)</p>
              </div>
            </div>

            {/* Technical Skills - Only 3 skills */}
            <div className="about-skills">
              <h3 className="about-section-title">
                <FontAwesomeIcon icon={faCode} className="section-icon" />
                Technical Skills
              </h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                        <span className="skills-name">{skill.name}</span>
                      </div>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;