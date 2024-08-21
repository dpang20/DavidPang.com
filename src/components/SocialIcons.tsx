import React from "react";
import linkedIn from "../assets/images/linkedIn.svg";
import gitHub from "../assets/images/github-mark-white.svg";
import "../App.css";

const SocialIcons = () => {
  return (
    <div className="social-links">
      <img src={linkedIn} className="icons-SVG" alt="linkedIn" />
      <img
        src={gitHub}
        className="icons-SVG"
        alt="gitHub"
        style={{ width: "40px", height: "40px" }}
      />
    </div>
  );
};

export default SocialIcons;
