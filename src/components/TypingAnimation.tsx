import React, { useEffect } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
  useEffect(() => {
    const options = {
      strings: [
        "Tech Enthusiast. ",
        "Web Developer. ",
        "Fullstack Software Engineer. ",
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: false,
      backDelay: 1500,
    };

    const typed = new Typed(".typed-element", options);

    return () => {
      typed.destroy(); // Make sure to clean up when the component is unmounted
    };
  }, []);

  return <span className="typed-element"></span>;
};

export default TypingAnimation;
