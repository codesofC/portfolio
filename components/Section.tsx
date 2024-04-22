"use client"

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { fadeIn } from "@/utils/motion";

const Section = (
  props: PropsWithChildren<{ className?: string; id?: string }>
) => {
  return (
    <motion.section
      variants={fadeIn({ direction: "up", type: "tween", duration: 0.5 })}
      initial="hidden"
      animate="show"
      id={props.id}
      className={cn("w-full max-w-4xl px-4 md:px-8 mx-auto", props.className)}
    >
      {props.children}
    </motion.section>
  );
};

export default Section;
