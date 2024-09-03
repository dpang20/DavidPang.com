import { useState } from "react";
import "../App.css";

const Projects = () => {
  const [isProjectVisible, setProjectVisible] = useState(false);

  const toggleProjectVisibility = () => {
    setProjectVisible(!isProjectVisible);
  };

  return (
    <div className="projects-section">
      <h1>My Projects</h1>
      <div
        className="project-title"
        onClick={toggleProjectVisibility}
        style={{ cursor: "pointer", textDecoration: "underline" }}
      >
        Sorting Visualizer
      </div>
      {isProjectVisible && (
        <iframe
          className="sorting-visualizer"
          src="/dist/index.html"
          title="Sorting Algorithm Visualizer"
          style={{
            width: "100%",
            height: "500px",
            border: "none",
            marginTop: "20px",
          }}
        />
      )}
    </div>
  );
};

export default Projects;
