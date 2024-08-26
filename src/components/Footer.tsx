import React from "react";
import "../App.css";
import linkedIn from "../assets/images/linkedin.svg"; // Adjust the path according to your project structure
import github from "../assets/images/github-mark-white.svg";
import gmail from "../assets/images/gmail.svg"; // Assume this is the Gmail SVG

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} David Pang. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
