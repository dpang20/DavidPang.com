import React, { useState } from "react";
import meImage from "../assets/images/me.jpeg";
import naruto from "../assets/images/narutoramen.jpeg";
import "../App.css";

const ProfileFlipper = () => {
  const [flipped, setFlip] = useState(false);

  const handleClick = () => {
    setFlip(!flipped);
  };

  return (
    <div className="flipper-wrapper">
      <div
        className={`profile-container ${flipped ? "flipped" : ""}`}
        onClick={handleClick}
      >
        <div className="profile-card">
          <div className="profile-front">
            <img src={meImage} alt="Profile 1" className="profile-pic" />
          </div>
          <div className="profile-back">
            <img src={naruto} alt="Profile 2" className="profile-pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileFlipper;
