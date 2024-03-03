'use client'

import { useLanguage } from "./LanguageContext"
import { fadeIn, staggerContainer } from "@/utils/motion"
import { motion } from "framer-motion"
import SocialMedia from "./SocialMedia"
import TypingText from "./TypingText"
import { traductionsData } from "@/constants/index"
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link"
import { AiOutlineMail } from "react-icons/ai"

const Contact = () => {

    const { language } = useLanguage()

  return (
    <section className='sections pt-4 pb-12' id="contacts">
        <motion.div
            variants={staggerContainer({type:'tween'}, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="flex flex-col gap-6 w-full"
        >
            <TypingText 
                title={language === 'EN' ? 'Get in Touch' : traductionsData[`${language}`].contacts.title}
                customStyles="text-2xl font-bold text-gray-300"
            />
            <motion.h1
                variants={fadeIn({ direction: "up", type: "tween", duration: 0.2})}
                className="text-xl text-white font-extrabold"
            >
                {traductionsData[`${language}`].contacts.description}
            </motion.h1>
            <div className="flex items-center flex-wrap gap-x-8 gap-y-4">
                <div className="flex-center gap-4">
                    <span className="text-3xl text-white font-bold"><FaWhatsapp /></span>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-md text-white font-bold">Whatsapp</h3>
                        <Link href="http://wa.me/+55981165037" target="_blank" className="text-gray-400 text-md">
                            +55981165037
                        </Link>
                    </div>
                </div>
                <div className="flex-center gap-4">
                    <span className="text-3xl text-white font-bold"> <AiOutlineMail /> </span>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-md text-white font-bold"> Email </h3>
                        <Link href="mailto:inelusjudelin01@gmail.com" target="_blank" className="text-gray-400 text-md">
                            inelusjudelin01@gmail.com
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Contact