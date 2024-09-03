import { useState } from "react";
import ProfileFlipper from "./ProfileFlipper";
import "../App.css";
import SocialIcons from "./SocialIcons";
import TypingAnimation from "./TypingAnimation";

const Home = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = (isFlipped: boolean) => {
    setFlipped(isFlipped);
  };

  return (
    <section className={`home-section ${flipped ? "background-flip" : ""}`}>
      <div className="text-center">
        <ProfileFlipper onFlip={handleFlip} />
        <h1>David Pang</h1>
        <p>
          <TypingAnimation />
        </p>
        <SocialIcons />
      </div>
    </section>
  );
};

export default Home;
