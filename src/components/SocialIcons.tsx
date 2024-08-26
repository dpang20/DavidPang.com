import React from "react";
import linkedIn from "../assets/images/linkedIn.svg";
import gitHub from "../assets/images/github-mark-white.svg";
import gmail from "../assets/images/gmail.svg";
import "../App.css";

const SocialIcons = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/david-pang117/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedIn} className="icons-SVG" alt="linkedIn" />
      </a>
      <a
        href="https://github.com/dpang20"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={gitHub}
          className="icons-SVG"
          alt="gitHub"
          style={{ width: "40px", height: "40px" }}
        />
      </a>
      <a href="mailto: dp7134@gmail.com">
        <img src={gmail} className="icons-SVG" alt="gmail" />
      </a>
    </div>
  );
};

export default SocialIcons;
