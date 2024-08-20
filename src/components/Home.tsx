import React from "react";
import meImage from "../assets/images/me.jpeg";

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
      </div>
    </section>
  );
};

export default Home;
