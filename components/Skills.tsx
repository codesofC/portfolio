"use client";

import { useLanguage } from "./LanguageContext";
import { skills, traductionsData } from "@/constants/index";
import {
  slideSoft,
  staggerContainer,
  textContainer,
} from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import TypingText from "./TypingText";

const Skills = () => {

  const { language } = useLanguage()

  return (
    <div className="paddings">
      <motion.div
        variants={staggerContainer({ type: "tween", delay: 0.1 }, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col gap-6"
      >
        <TypingText
          title={traductionsData[`${language}`].skills.title}
          customStyles="text-2xl font-bold text-gray-300"
        />
        <motion.div
          variants={textContainer}
          className="flex justify-evenly gap-6 flex-wrap"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={slideSoft({ direction: "up" })}
              className="flex-center flex-col gap-4"
            >
              <div className="max-w-[40px] max-h-[40px]">
                <Image
                  src={skill.url}
                  width={70}
                  height={70}
                  alt={skill.name}
                  className="object-contain aspect-square"
                />
              </div>
              <p className="text-md text-white">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
