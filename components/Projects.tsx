import { projects } from "@/constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {

  return (
    <div className="space-y-6">
      <h1 className="font-bold text-2xl font-mono"> Projects </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
