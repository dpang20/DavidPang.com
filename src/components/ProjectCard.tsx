import ProjectCard from "./ProjectCard"; // Adjust the path according to your structure

const Projects: React.FC = () => {
  const projectList = [
    {
      title: "Movie Findr",
      description:
        "This program (built for HackMIT 2020) lets users swipe through movies or type in their favorites and then easily figure out what movie to watch with their friends.",
      techStack: ["Python", "Django", "React"],
    },
    {
      title: "AutoBrailler",
      description:
        "This device sits on a Braille typewriter and connects to a computer. The associated program takes in a text file and triggers the appropriate buttons on the brailler to type the file contents.",
      techStack: ["Arduino", "Python"],
    },
    {
      title: "Alumni Map",
      description:
        "I created a page for the MIT Muses website that features an interactive map & list that are autopopulated by Google Forms responses to help keep Muses members and alumni connected.",
      techStack: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <p>Click on any project to learn more</p>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
