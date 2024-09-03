import React from "react";

const Projects = () => {
  return (
    <div className="projects-section">
      <h1>My Projects</h1>
      <iframe
        src="/dist/index.html"
        title="Projects App"
        style={{
          width: "100%",
          height: "500px",
          border: "none",
        }}
      />
    </div>
  );
};

export default Projects;
