"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { flags } from "@/constants/index";
import { fadeIn } from "@/utils/motion";

const ChangeLanguage = () => {

  const selectedRef = useRef(null)

  const { toggleLanguage, language } = useLanguage();
  
  useEffect(() => {
    const langIndex = flags.findIndex(item => item.lang === language)

    if(selectedRef.current){
      selectedRef.current.style.top = (langIndex * 31) + 'px';
    }
  }, [selectedRef.current])

  const changeLanguage = (newLanguage: string, id: number) => {
    if(selectedRef.current){
      selectedRef.current.style.top = id*31 + 'px'
    }
    toggleLanguage(newLanguage)
  }

  return (
    <motion.div 
      variants={fadeIn({ direction: "left", type: "tween", delay: 1, duration: 0.3})}
      initial="hidden"
      animate="show"
      className="fixed top-[15vh] right-0 h-[126px] z-[5] bg-[rgba(255,255,255,0.3)] border"
    >
      <div className="relative flex-center flex-col">
        {flags.map((flag) => (
          <div key={flag.id} className="w-auto p-2">
            <Image
            key={flag.lang}
            src={flag.url}
            width={25}
            height={25}
            alt={flag.lang}
            className="h-[15px] object-contain cursor-pointer"
            onClick={() => changeLanguage(flag.lang, flag.id)}
          />
          </div>
        ))}
        <div ref={selectedRef} className={`w-full h-[31px] absolute top-0 left-0 bg-green-600 -z-10 transition-[top] duration-500`} />
      </div>
    </motion.div>
  );
};

export default ChangeLanguage;
