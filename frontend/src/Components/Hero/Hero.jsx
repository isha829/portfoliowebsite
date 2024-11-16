import React from "react";
import "./hero.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
library.add(fab);
const hero = () => {
  return (
    <div className="Hero container">
      <div className="Hero-text">
        {/* <h1 class="heading">
          <span>E</span>
          <span>m</span>
          <span>p</span>
          <span>o</span>
          <span>w</span>
          <span>e</span>
          <span>r</span>
          <span>i</span>
          <span>n</span>
          <span>g&ensp;</span>
          <span> </span>

          <span>T</span>
          <span>h</span>
          <span>e</span>
          <span> </span>
          <br />
          <span>D</span>
          <span>e</span>
          <span>c</span>
          <span>e</span>
          <span>n</span>
          <span>t</span>
          <span>r</span>
          <span>a</span>
          <span>l</span>
          <span>i</span>
          <span>z</span>
          <span>e</span>
          <span>d&ensp; </span>

          <span> </span>
          <span>F</span>
          <span>u</span>
          <span>t</span>
          <span>u</span>
          <span>r</span>
          <span>e</span>
        </h1> */}
        <h1 class="heading">
  <span>E</span>
  <span>m</span>
  <span>p</span>
  <span>o</span>
  <span>w</span>
  <span>e</span>
  <span>r</span>
  <span>i</span>
  <span>n</span>
  <span>g</span>
  <span>&nbsp;</span>

  <span>T</span>
  <span>h</span>
  <span>e</span>
  <br  />
  <span>D</span>
  <span>e</span>
  <span>c</span>
  <span>e</span>
  <span>n</span>
  <span>t</span>
  <span>r</span>
  <span>a</span>
  <span>l</span>
  <span>i</span>
  <span>z</span>
  <span>e</span>
  <span>d</span>
  <span>&nbsp;</span>

  <span>F</span>
  <span>u</span>
  <span>t</span>
  <span>u</span>
  <span>r</span>
  <span>e</span>
</h1>


        <p>
          I'm Jhunathan, a Web3 developer specializing in blockchain
          technologies like Ethereum and Solana. I build decentralized
          applications (dApps), smart contracts, and DeFi solutions using
          Solidity, Rust, and JavaScript. Passionate about shaping the future of
          the decentralized web with secure, scalable, and user-centric
          solutions.
        </p>
        <div className="footer-section follow-us">
          <ul className="icons">
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
    </div>
  );
};

export default hero;
