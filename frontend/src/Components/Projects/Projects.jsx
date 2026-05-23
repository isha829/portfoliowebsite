import React from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Movie App",
      category: "Frontend Web App",
      description: "A modern movie discovery platform built with React. Browse movies, search your favorites, and get detailed information about ratings, cast, and reviews.",
      icon: "🎬",
      technologies: ["React", "API Integration", "CSS3", "Axios"],
      githubLink: "https://github.com/isha829/Movie-App",
      features: ["Movie Search", "API Integration", "Responsive Design", "Movie Details", "Rating Display", "Trending Movies"]
    },
    {
      id: 2,
      title: "Food Ordering App",
      category: "Frontend Mobile App",
      description: "A complete food ordering mobile application built with React Native. Users can browse restaurants, add items to cart, and place orders.",
      icon: "🍔",
      technologies: ["React Native", "Redux", "Navigation", "API Integration"],
      githubLink: "https://github.com/isha829/food-ordering-app",
      features: ["Browse Restaurants", "Add to Cart", "Order Management", "User Authentication", "Payment Gateway", "Order Tracking"]
    },
    {
      id: 3,
      title: "Company Website",
      category: "Full-Stack Website",
      description: "A professional company website with complete admin panel. Admin can manage content, users, and settings easily.",
      icon: "🏢",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Admin Panel"],
      githubLink: "https://github.com/isha829/Company-App",
      features: ["Admin Dashboard", "Content Management", "User Management", "Analytics", "SEO Optimized", "Responsive Design"]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-header">
          <span className="projects-badge">✦ MY WORK</span>
          <h2 className="projects-title">
            Featured <span className="projects-gradient">Projects</span>
          </h2>
          <p className="projects-subtitle">
            Here are some of my recent frontend and full-stack projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Project Icon */}
              <div className="project-icon-wrapper">
                <span className="project-emoji">{project.icon}</span>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <div className="project-category">
                  <span className="category-badge">{project.category}</span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Technologies */}
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                {/* Features - For All Projects */}
                <div className="project-features">
                  <h4 className="features-title">
                    {project.id === 3 ? "Admin Panel Features:" : "Key Features:"}
                  </h4>
                  <ul className="features-list">
                    {project.features.map((feature, index) => (
                      <li key={index}>
                        <span className="feature-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* GitHub Button - Shows on Hover */}
                <div className="project-hover-btn">
                  {project.githubLink ? (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="github-btn"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      View on GitHub
                    </a>
                  ) : (
                    <button className="github-btn btn-disabled">
                      <FontAwesomeIcon icon={faGithub} />
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;