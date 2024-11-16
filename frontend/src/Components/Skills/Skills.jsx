
import React from "react";
import "./Skills.css";
import {Link} from 'react-scroll';
const Skills = () => {
  return (
    <div id="skills-section" className="skills-section">
      <ul>
        <li>
          <Link to="skills-section" smooth={true} offset={-100} duration={500}>
          </Link>
        </li>
      </ul>

      <div className="skills-container">
        <div className="skill-card">Solidity</div>
        <div className="skill-card">Rust</div>
        <div className="skill-card">Smart Contracts</div>
        <div className="skill-card">JavaScript</div>
        <div className="skill-card">Python</div>
        <div className="skill-card">Next.js</div>
        <div className="skill-card">React</div>
        <div className="skill-card">Blockchain</div>
      </div>
    </div>
  );
};

export default Skills;

   