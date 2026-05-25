import React from "react";
import "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faServer,
  faLaptopCode,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  // Smooth scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero__container">
        {/* Left Column */}
        <div className="hero__content">
          <div className="hero__label">
            <span className="hero__label-text">✦ Inshira Attique — PORTFOLIO</span>
          </div>

          <h1 className="hero__title">
            Frontend Developer
            <span className="hero__gradient-text"> & Web Creator</span>
          </h1>

          <div className="hero__typing">
            <span className="hero__typing-static">I specialize in Frontend Developer</span>
          </div>

          <p className="hero__description">
            I'm a frontend developer skilled in building responsive web and mobile applications 
            using React and React Native. Currently practicing backend development to become 
            a full-stack developer. Recently built a complete website with an admin panel.
          </p>

          {/* Skills Tags */}
          <div className="hero__skills">
            <div className="hero__skill-tag">
              <FontAwesomeIcon icon={faCode} className="hero__skill-icon" />
              <span>Frontend Expert</span>
            </div>
            <div className="hero__skill-tag hero__skill-tag--practice">
              <FontAwesomeIcon icon={faServer} className="hero__skill-icon" />
              <span>Backend Practice</span>
            </div>
            <div className="hero__skill-tag">
              <FontAwesomeIcon icon={faCheckCircle} className="hero__skill-icon" />
              <span>Admin Panel Ready</span>
            </div>
          </div>

          {/* Stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <h3 className="hero__stat-number">3+</h3>
              <p className="hero__stat-label">Years Frontend</p>
            </div>
            <div className="hero__stat">
              <h3 className="hero__stat-number">5+</h3>
              <p className="hero__stat-label">Projects Live</p>
            </div>
            <div className="hero__stat">
              <h3 className="hero__stat-number">1</h3>
              <p className="hero__stat-label">Website with Admin</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero__actions">
            <button className="hero__btn hero__btn--primary" onClick={scrollToProjects}>
              View My Projects
              <svg className="hero__btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Social Links */}
          <div className="hero__social">
            <p className="hero__social-label">Connect with me</p>
            <div className="hero__social-links">
              <a href="https://github.com/isha829" className="hero__social-link" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/inshira-attique-052501411/" className="hero__social-link" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
             
              <a href="https://www.facebook.com/inshira.attique/" className="social-icon" aria-label="Facebook">
                               <FontAwesomeIcon icon={faFacebookF} />
                             </a>
            </div>
          </div>
        </div>

        {/* Right Column - Project Preview */}
        <div className="hero__visual">
          {/* Main Project Card */}
          <div className="hero__project-card">
            <div className="hero__project-header">
              <div className="hero__project-badge">
                <span className="hero__project-badge-text">Latest Project</span>
              </div>
              <FontAwesomeIcon icon={faLaptopCode} className="hero__project-icon" />
            </div>
            
            <h3 className="hero__project-title">
              Complete CMS Website <br />
              <span className="hero__project-subtitle">with Admin Panel</span>
            </h3>
            
            <p className="hero__project-description">
              A fully functional website with admin dashboard where admin can manage content, 
              users, and settings. Built with React, Node.js, and MongoDB.
            </p>
            
            <div className="hero__project-features">
              <div className="hero__feature">
                <div className="hero__feature-check">✓</div>
                <span>Admin Authentication</span>
              </div>
              <div className="hero__feature">
                <div className="hero__feature-check">✓</div>
                <span>Content Management</span>
              </div>
              <div className="hero__feature">
                <div className="hero__feature-check">✓</div>
                <span>User Dashboard</span>
              </div>
              <div className="hero__feature">
                <div className="hero__feature-check">✓</div>
                <span>Analytics Panel</span>
              </div>
            </div>
            
            <button className="hero__project-btn" onClick={scrollToProjects}>
              View Project Details →
            </button>
          </div>

          {/* Tech Stack */}
          <div className="hero__tech-stack">
            <div className="hero__tech-item">React.js</div>
            <div className="hero__tech-item">React Native</div>
            <div className="hero__tech-item">Node.js</div>
            <div className="hero__tech-item">Express.js</div>
            <div className="hero__tech-item">MongoDB</div>
            <div className="hero__tech-item">Tailwind CSS</div>
          </div>

          {/* Learning Status */}
          <div className="hero__learning">
            <div className="hero__learning-header">
              <span className="hero__learning-title">Backend Learning Progress</span>
              <span className="hero__learning-percent">75%</span>
            </div>
            <div className="hero__progress-bar">
              <div className="hero__progress-fill"></div>
            </div>
            <p className="hero__learning-text">
              Currently practicing Node.js, Express, and MongoDB. Almost ready for full-stack development!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;