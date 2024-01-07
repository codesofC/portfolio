"use client";

import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion"

type TypingProps = {
    title: string,
    customStyles: string
}

const TypingText = ({ title, customStyles }: TypingProps) => {
  return (
    <motion.h1
      variants={textContainer}
      className={customStyles}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default TypingText;
