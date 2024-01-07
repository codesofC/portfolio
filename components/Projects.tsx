"use client";

import { useLanguage } from "./LanguageContext";
import { projects, traductionsData } from "@/constants/index";
import { slideSoft, staggerContainer, textContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TypingText from "./TypingText";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const Projects = () => {

  const { language } = useLanguage()

  return (
    <section className="sections" id="projects">
      <motion.div
        variants={staggerContainer({ type: "tween" }, 0.1)}
        initial="hidden"
        animate="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col gap-12 relative"
      >
        <TypingText
          title={traductionsData[`${language}`].myProjects.title}
          customStyles="text-2xl font-bold text-gray-300"
        />
        <motion.div
          variants={textContainer}
          className="projects-container"
        >
          {projects.map((item) => (
            <motion.div
              key={item.id}
              variants={slideSoft({ direction: "up" })}
              className={`project-content ${item.id % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className={`flex-1 h-full max-h-[250px] md:max-h-max bg-white`}>
                <Image
                  src={item.imgUrl}
                  width={900}
                  height={700}
                  alt={item.demoUrl}
                  className="w-full h-full object-contain 2xl:object-cover"
                />
              </div>
              <div className="project-content-box">
                <h1 className="text-white text-xl font-bold"> { item.title } </h1>
                <p className="project-description">
                  {traductionsData[`${language}`].myProjects.projects[item.id - 1].description}
                </p>
                <div className="flex items-center flex-wrap gap-2">
                  {item.stacks.map((item) => (
                    <span
                      key={item}
                      className="flex text-[14px] text-green-800 font-semibold border border-green-800 px-2 py-[0.05rem]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {item.id !== projects.length ? <div className="flex items-center gap-2 md:gap-4 mt-4">
                  <Link href={item.repoUrl} target="_blank" className="text-white">
                    <span title="code" className="text-2xl">
                      <FaGithub />
                    </span>
                  </Link>
                  <Link
                    href={item.demoUrl}
                    target="_blank"
                    className="p-2 bg-green-600 text-white rounded-full text-center"
                  >
                    <span title="live demo" className="text-2xl">
                      <HiOutlineExternalLink />
                    </span>
                  </Link>
                </div> : null}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
