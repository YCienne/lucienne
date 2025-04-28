import { projects } from "../constants";
import Projects from "./Projects";

const ProjectsSection = () => {
    return (
        <section id="projects" className="relative overflow-hidden py-10 px-5 max-w-7xl mx-auto">

        <h2 className="text-white text-4xl md:text-5xl font-bold mt-12 text-center mb-12">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
            <Projects key={index} project={project} index={index} />
            ))}
        </div>
        </section>
    );
};

export default ProjectsSection;
