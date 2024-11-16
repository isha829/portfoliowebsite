
import React, { useState } from "react";
import "./contact.css";
import white_arrow from "../../assets/white-arrow.png";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true); 
    setIsSent(false); 

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
    } else {
      alert("There was an issue sending your message. Please try again.");
    }
  };

  return (
    <div className="Contact">
      <div className="contact-col">
        <div className="contact-col-left">
          <h2>Jonathan Methew</h2>
          <div className="contact-content">
            <p>
              A dedicated Web3 developer focused on
              decentralized applications and
              blockchain technology.
            </p>
          </div>
        </div>
        <div className="contact-section follow-us">
          <h3>Connect with Me</h3>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/AliHassan" target="_" rel=" ">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/NividKoradiya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/NividKoradiya"
                target=" "
                rel=" "
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/NividKoradiya"
                target="_"
                rel=" "
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn" disabled={isSending}>
            {isSending ? "Sending..." : "Submit Now"}
            {!isSending && <img src={white_arrow} alt="" />}
          </button>
        </form>
        {isSent && <p className="success-message">Your message has been sent successfully!</p>}
      </div>
    </div>
  );
};

export default Contact;

