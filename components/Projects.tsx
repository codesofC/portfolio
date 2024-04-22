
import { projects } from "@/constants";
import { Card } from "./ui/card";
import ProjectCard from "./ProjectCard";

const Projects = () => {

  return (
    <div className="w-full lg:col-span-3 flex flex-col gap-6">
      <h1 className="font-bold text-2xl font-mono"> Projects </h1>
      <Card className="flex flex-col gap-4 p-4">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Card>
    </div>
  );
};

export default Projects;
