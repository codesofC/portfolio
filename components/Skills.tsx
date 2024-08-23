import { skills } from "@/constants";
import Image from "next/image";
import Section from "./Section";

const Skills = () => {
  return (
    <Section className="flex flex-col gap-6" id="skills">
      <h1 className="font-bold text-2xl font-mono"> Skills </h1>
      <div className="flex flex-col gap-6">
        <h4 className="text-justify">
          I consider myself an engineer, not just a coder. To solve a problem, I evaluate the
          most appropriate language and tools.
        </h4>
        <div className="flex flex-wrap gap-6 py-4 items-center justify-center md:justify-start">
          {skills.map((skill, index) => (
            <div key={index} className="relative w-10 md:w-12 group">
              <Image
                src={skill.url}
                width={250}
                height={250}
                alt={skill.name}
                className="w-full h-full object-contain aspect-square"
              />
              <span
                className={`hidden absolute -top-8 left-1/2 -translate-x-1/2 group-hover:flex z-10 rounded-md px-2 py-1 text-sm`}
                style={{ background: skill.color }}
              >
                
                  {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
