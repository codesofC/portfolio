import { skills, skillsMain } from "@/constants";
import Image from "next/image";
import Section from "./Section";
import CardSkill from "./CardSkill";
import { Card } from "./ui/card";

const Skills = () => {
  return (
    <Section className="flex flex-col gap-6" id="skills">
      <h1 className="font-bold text-2xl font-mono"> Skills </h1>
      <div className="flex flex-col gap-6">
        <h4>
          I'm an engineer, not just a coder. To solve a problem, I evaluate the
          most appropriate language and tools.
        </h4>
        <div className="flex flex-wrap gap-6 py-4">
          {skills.map((skill, index) => (
            <div key={index} className="relative w-8 md:w-10 group">
              <Image
                src={skill.url}
                width={250}
                height={250}
                alt={skill.name}
                className="w-full h-full object-contain aspect-square"
              />
              <div
                className={`hidden absolute -top-8 left-1/2 -translate-x-1/2 group-hover:block z-10 rounded-md px-2 text-sm`}
                style={{ background: skill.color }}
              >
                <span
                  className={`font-semibold relative w-full h-full py-1 z-[15]`}
                >
                  {" "}
                  {skill.name}{" "}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
