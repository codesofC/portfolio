import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  repoUrl?: string;
  demoUrl?: string;
  imageUrl: string;
  stacks: string[];
  description: string;
};

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-2 border rounded-md overflow-hidden">
      <div className="w-full">
        <Image
          src={props.imageUrl}
          alt={props.title}
          width={1200}
          height={920}
          className="w-full h-full aspect-video"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4 p-2 justify-between">
        <div className="space-y-2">
          <h2 className="font-semibold"> {props.title} </h2>
          <p className="text-sm text-muted-foreground flex-wrap">
            {" "}
            {props.description}{" "}
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex gap-1 flex-wrap">
            {props.stacks.map((stack) => (
              <span
                key={stack}
                className="px-1 py-[2px] border rounded-sm text-xs bg-accent/30 text-muted-foreground"
              >
                {" "}
                {stack}{" "}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {props.demoUrl && (
              <Link href={props.demoUrl} target="_blank" className="flex gap-x-1 p-1 rounded-sm items-center bg-primary-foreground text-secondary text-sm">
                <Globe size={20} />
                <span>Website</span>
              </Link>
            )}
            <Link
              href={props.repoUrl || "/"}
              target="_blank"
              className="flex gap-x-1 p-1 rounded-sm items-center bg-primary-foreground text-secondary text-sm"
            >
              <Github size={20} />
              <span>Source</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
