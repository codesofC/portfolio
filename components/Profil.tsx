"use client";

import { useLanguage } from "./LanguageContext";
import { traductionsData } from "@/constants/index";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
} from "@/utils/motion";
import SocialMedia from "./SocialMedia";
import TypingText from "./TypingText";

const Profil = () => {

  const { language } = useLanguage()


  return (
    <section className="sections mt-32" id="home">
      <motion.div
        variants={fadeIn({
          direction: "right",
          type: "tween",
          duration: 0.3,
        })}
        initial="hidden"
        whileInView="show"
        className="profil-container"
      >
        <div className="overlay" />
        <div
          className="img-container rounded-full"
        >
          <Image
            src={"/assets/profil-1.png"}
            width={500}
            height={500}
            priority
            alt="profil"
            className="object-contain w-full h-full "
          />
        </div>
      </motion.div>
      <motion.div
        variants={staggerContainer({ type: "tween" }, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="box-container"
      >
        <motion.div className="flex-center md:items-start md:justify-start flex-col gap-3">
          <motion.span
            variants={fadeIn({ direction: "down", type: "tween",})}
            className="text-lg text-white"
          >
            {`${traductionsData[`${language}`].home.title2}`}
          </motion.span>
          <TypingText 
            title="Judelin INELUS" 
            customStyles="text-3xl xl:text-4xl font-extrabold text-green-600 px-6"
          />
        </motion.div>
        <motion.div
          variants={fadeIn({ direction: "up", type: "spring" })}
          className="description-content"
        >
          <span className="font-bold">{traductionsData[`${language}`].home.subtitle} </span>
          {traductionsData[`${language}`].home.description}
        </motion.div>
        <SocialMedia />
      </motion.div>
    </section>
  );
};

export default Profil;
