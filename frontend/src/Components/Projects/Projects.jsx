import React from "react";
import "./Projects.css";
import project_1 from "../../assets/Nft.jpg";
import project_2 from "../../assets/chain.jpeg";
import project_3 from "../../assets/node.png";

const Projects = () => {
  return (
    <div className="Program">
      <div className="programs">
        <img src={project_1} alt="" style={{ height: "300px" }} />
        <div className="caption">
          <i class="bx bx-diamond"></i>
          <p>A digital universe of unique</p>
          <p>minted NFTs</p>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Go to project</button>
          </a>
        </div>
      </div>
      <div className="programs">
        <img src={project_2} alt="" style={{ height: "300px" }} />
        <div className="caption">
          <i class="bx bx-radar"></i>
          <p>Navigating Web3 with insights</p>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Go to project</button>
          </a>
        </div>
      </div>
      <div className="programs">
        <img
          src={project_3}
          alt=""
          style={{ height: "296px", width: "370px" }}
        />
        <div className="caption">
          <i class="bx bx-link"></i>
          <p>The Future of Node Networking</p>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Go to project</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
