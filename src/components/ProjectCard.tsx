import React from "react";
import "../App.css"; 

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, techStack }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
