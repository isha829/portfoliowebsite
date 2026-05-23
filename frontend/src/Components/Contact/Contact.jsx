import React, { useState } from "react";
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true); 
    setIsSent(false); 
    setShowSuccess(false);

    const formData = new FormData(event.target);
    formData.append("access_key", "ecd1da4b-6fcf-4f30-b7a2-d2fafb2cff27");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    setIsSending(false); 

    if (res.success) {
      setIsSent(true);
      setShowSuccess(true);
      event.target.reset();
      
      // Auto-hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setIsSent(false);
      }, 3000);
    } else {
      alert("There was an issue sending your message. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Section Header */}
        <div className="contact-header">
          <span className="contact-badge">✦ GET IN TOUCH</span>
          <h2 className="contact-title">
            Let's <span className="contact-gradient">Connect</span>
          </h2>
          <p className="contact-subtitle">
            Have a project in mind? I'd love to hear from you!
          </p>
        </div>

        <div className="contact-content">
          {/* Left Column - Contact Info */}
          <div className="contact-info">
            <div className="contact-info-card">
              <h3 className="info-name">Inshira Attique</h3>
              <p className="info-bio">
                Frontend developer passionate about building modern web applications 
                with React and React Native. Currently expanding skills in backend development.
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="detail-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="detail-text">
                  <h4>Email</h4>
                  <p>inshiraattique@gmail.com</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="detail-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="detail-text">
                  <h4>Location</h4>
                  <p>Pakistan</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <h3>Connect with Me</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com/inshira.attique/" className="social-icon" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://www.linkedin.com/in/inshira-attique-86bb16406/" className="social-icon" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://github.com/isha829" className="social-icon" aria-label="GitHub">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form-wrapper">
            <form onSubmit={onSubmit} className="contact-form">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSending}>
                {isSending ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </>
                )}
              </button>
              
              {/* Success Message - Auto hides after 3 seconds */}
              {showSuccess && (
                <div className="success-message">
                  <span className="success-icon">✓</span>
                  Your message has been sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;