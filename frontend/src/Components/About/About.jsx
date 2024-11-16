import React from "react";
import "./About.css";
import about_img from "../../assets/devp3.jpeg";

const About = ({ setPlayState }) => {
  return (
    <div className="About">
      <div className="about-left">
        <img src={about_img} alt="" className="about_img" />
      </div>
      <div className="about-right">
        <h3>About Me</h3>
        <h2>NFT & Blockchain Developer</h2>
        <p>
          Memory updated Here's a refined version of your statement: I’m
          Jhunathan Methew, a passionate Web3 developer focused on building
          decentralized applications and blockchain solutions. With expertise in
          smart contracts, DApps, and decentralized technologies, I strive to
          empower users and businesses by creating secure, transparent, and
          scalable Web3 platforms. Currently, I’m deepening my knowledge of
          Ethereum, the Solana ecosystem, Solidity, and Rust for developing
          smart contracts. As a Computer Applications student, I’m also
          dedicated to enhancing my Python skills and expanding my proficiency
          in new programming languages.
        </p>
      </div>
    </div>
  );
};

export default About;
