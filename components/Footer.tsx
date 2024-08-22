"use client"

import { slideIn } from "@/utils/motion"
import { motion } from "framer-motion"

const Footer = () => {

  return (
    <footer className='flex-center py-4 px-4'>
        <motion.div
            variants={slideIn({direction: "down", type: "spring", duration: 0.5})}
            initial="hidden"
            animate="show"
            className="flex-center flex-col gap-4 text-gray-300"
        >
            <p className="text-center">
                Build by Judelin INÉLUS
            </p>
            <p className="text-center">
                Copyright &copy; 2024 - Judelin INÉLUS - All rights reserved
            </p>
        </motion.div>
    </footer>
  )
}

export default Footer