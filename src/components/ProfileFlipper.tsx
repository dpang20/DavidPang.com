import React, { useState } from "react";
import meImage from "../assets/images/me.jpeg";
import naruto from "../assets/images/narutoramen.jpeg";
import "../App.css";

interface ProfileFlipperProps {
  onFlip: (flipped: boolean) => void;
}

const ProfileFlipper: React.FC<ProfileFlipperProps> = ({ onFlip }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    const newFlippedState = !flipped;
    setFlipped(newFlippedState);
    onFlip(newFlippedState); // Notify the parent of the flip state
  };

  return (
    <div className="flipper-wrapper" onClick={handleClick}>
      <div className={`profile-container ${flipped ? "flipped" : ""}`}>
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
