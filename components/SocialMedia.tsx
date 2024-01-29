"use client";


import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <motion.ul
      variants={fadeIn({
        direction: "right",
        type: "spring",
        delay: 0.2,
        duration: 0.3,
      })}
      className="flex gap-4 text-green-600 font-bold text-2xl"
    >
      <li>
        <Link href="mailto:inelusjudelin01@gmail.com" target="_blank">
          <AiOutlineMail />
        </Link>
      </li>
      <li>
        <Link href="https://www.linkedin.com/in/judelininelus" target="_blank">
          <FaLinkedinIn />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/codesofC" target="_blank">
          <FaGithub />
        </Link>
      </li>
    </motion.ul>
  );
};

export default SocialMedia;
