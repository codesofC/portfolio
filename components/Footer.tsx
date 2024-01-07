'use client'

import { traductionsData } from "@/constants/index"
import { slideIn } from "@/utils/motion"
import { motion } from "framer-motion"
import { useLanguage } from "./LanguageContext"

const Footer = () => {

    const { language } = useLanguage()

  return (
    <footer className='flex-center py-4 px-4'>
        <motion.div
            variants={slideIn({direction: "down", type: "spring", duration: 0.5})}
            initial="hidden"
            whileInView="show"
            className="flex-center flex-col gap-4 text-gray-300"
        >
            <p className="text-center">
                {traductionsData[`${language}`].footer.design} Judelin INÉLUS
            </p>
            <p className="text-center">
                Copyright &copy; 2023 - Judelin INÉLUS. {traductionsData[`${language}`].footer.rights}
            </p>
        </motion.div>
    </footer>
  )
}

export default Footer