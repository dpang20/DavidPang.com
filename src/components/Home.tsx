import React from "react";
import "../App.css";
import meImage from "../assets/images/me.jpeg";
import SocialIcons from "./SocialIcons";
import linkedIn from "../assets/images/linkedIn.svg";
import gitHub from "../assets/images/github-mark-white.svg";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="text-center">
        <img
          src={meImage}
          className="img-thumbnail rounded-circle"
          alt="David Pang"
          style={{ width: "150px", height: "150px" }}
        />
        <h1>David Pang</h1>
        <p>Software Engineer</p>
        <SocialIcons />
      </div>
    </section>
  );
};

export default Home;
