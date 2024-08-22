"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const SocialMedia = () => {
  return (
    <motion.ul
      variants={fadeIn({
        direction: "right",
        type: "spring",
        delay: 0.2,
        duration: 0.3,
      })}
      className="flex gap-4 text-foreground font-bold text-2xl"
    >
      <li>
        <Link href="mailto:inelusjudelin01@gmail.com" target="_blank" className={cn(buttonVariants({variant: 'outline'}), 'p-[2px] size-8')}>
          <Mail size={18} />
        </Link>
      </li>
      <li>
        <Link href="https://www.linkedin.com/in/judelininelus" target="_blank" className={cn(buttonVariants({variant: 'outline'}), 'p-[2px] size-8')}>
          <Linkedin size={18} />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/codesofC" target="_blank" className={cn(buttonVariants({variant: 'outline'}), 'p-[2px] size-8')}>
          <Github size={18} />
        </Link>
      </li>
    </motion.ul>
  );
};

export default SocialMedia;
