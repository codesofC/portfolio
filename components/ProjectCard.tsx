import Link from "next/link";

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
    <Link href={props.demoUrl || props.repoUrl || "/"} target="_blank" className="hover:bg-accent/50 transition-colors rounded-sm">
      <div className="flex gap-2 items-start h-full">
        <div className="p-3 bg-accent text-accent-foreground rounded-sm">{props.icon}</div>
        <div className="flex flex-col gap-1 flex-wrap py-1">
          <h2 className="font-semibold"> {props.title} </h2>
          <p className="text-sm text-muted-foreground"> {props.description} </p>
          <div className="flex gap-1 flex-wrap">
            {props.stacks.map(stack => (
              <span key={stack} className="px-1 py-[2px] border rounded-sm text-xs bg-accent/30 text-primary"> { stack } </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
