import React from "react";
import "../App.css";
import ProfileFlipper from "./ProfileFlipper";
import SocialIcons from "./SocialIcons";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="text-center">
        <ProfileFlipper />
        <h1>David Pang</h1>
        <p>Software Engineer</p>
        <SocialIcons />
      </div>
    </section>
  );
};

export default Home;
