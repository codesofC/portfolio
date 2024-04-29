import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

type ProjectCardProps = {
  title: string;
  repoUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  stacks: string[];
  description: string;
  icon?: JSX.Element;
};

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="relative hover:bg-accent/50 transition-colors rounded-sm group">
      <div className="flex gap-2 items-center h-full p-1">
        <div className="p-4 bg-accent text-accent-foreground rounded-sm">{props.icon}</div>
        <div className="flex flex-col gap-1 flex-wrap">
          <h2 className="font-semibold"> {props.title} </h2>
          <p className="text-sm text-muted-foreground line-clamp-1"> {props.description} </p>
          <div className="flex gap-1 flex-wrap">
            {props.stacks.map(stack => (
              <span key={stack} className="px-1 py-[2px] border rounded-sm text-xs bg-accent/30 text-primary"> { stack } </span>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 bg-accent flex justify-center items-center text-white gap-6 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300">
        <Link href={props.repoUrl || "/"} target="_blank" className="hover:text-white/90 transition-colors"><FaGithub size={24} title="code" /></Link>
        <Link href={props.demoUrl || "/"} target="_blank" className="hover:text-white/90 transition-colors"><FaLink size={24} title="demo" /></Link>
      </div>
    </div>
  );
};

export default ProjectCard;
