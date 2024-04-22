
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
        <div className="flex flex-col gap-1">
          <h4>
            I'm an engineer, not just a coder. To solve a problem, I evaluate
            the most appropriate language and tools.
          </h4>
          <h5> Skills I have used the most recently: </h5>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4">
          {skillsMain.map(skill => (
            <CardSkill key={skill.id} {...skill} />
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <h4> I also use: </h4>
          <Card className="flex flex-wrap gap-6 p-4">
            {skills.map((skill, index) => (
              <div key={index} className="relative w-8 md:w-10 group">
                <Image 
                  src={skill.url}
                  width={250}
                  height={250}
                  alt={skill.name}
                  className="w-full h-full object-contain aspect-square"
                />
                <div className="hidden absolute -top-10 left-1/2 -translate-x-1/2 bg-primary group-hover:block z-10 rounded-md px-2">
                  <span className="relative w-full h-full py-1 before:w-2 before:h-2 before:rotate-45 before:absolute before:-bottom-[2px] before:left-1/2 before:-translate-x-1/2 before:bg-primary z-[15]"> { skill.name } </span>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Skills;

