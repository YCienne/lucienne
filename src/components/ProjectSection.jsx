import { projects } from "../constants";
import Projects from "./Projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-10 px-5 max-w-7xl mx-auto">
      <h2 className="text-3xl text-white font-bold mb-12 mt-12 text-center">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Projects key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
