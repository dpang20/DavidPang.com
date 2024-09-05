import { useState } from "react";
import "../App.css";

// ProjectCard component
const ProjectCard = ({ title, description, techStack, onClick }: any) => {
  return (
    <div
      className="project-card"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="tech-stack">
        {techStack.map((tech: string, index: number) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const [isSortingVisualizerVisible, setSortingVisualizerVisible] =
    useState(false);

  const toggleSortingVisualizerVisibility = () => {
    setSortingVisualizerVisible(!isSortingVisualizerVisible);
  };

  // Array of projects
  const projectList = [
    {
      title: "Sorting Visualizer",
      description:
        "Visualizes various sorting algorithms with real-time feedback.",
      techStack: ["React", "TypeScript", "HTML/CSS"],
      onClick: toggleSortingVisualizerVisibility,
    },
    {
      title: "Forum App",
      description: "Real time forum application modeled after Reddit",
      techStack: ["Javascript", "MongoDB", "HTML/CSS", "Express.js"],
      onClick: () => window.open("https://github.com/dpang20/ForumApp"),
    },
    {
      title: "Personal Website",
      description:
        "I built this personal website to host my projects and profile.",
      techStack: ["React", "TypeScript", "HTML/CSS"],
      onClick: () => window.open("https://github.com/dpang20/DavidPang.com"),
    },
  ];

  return (
    <div className="projects-section">
      <h1>My Projects</h1>
      <div className="project-cards-container">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            onClick={project.onClick}
          />
        ))}
      </div>

      {/* Render the sorting visualizer when the card is clicked */}
      {isSortingVisualizerVisible && (
        <iframe
          className="sorting-visualizer"
          src="/sorting-visualizer/dist/index.html"
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
