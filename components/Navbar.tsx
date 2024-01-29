'use client'

import { useState, useEffect } from "react"
import { navariant } from "@/utils/motion"
import { motion } from "framer-motion"
import Link from "next/link"
import { BiMenuAltRight } from "react-icons/bi";
import { useLanguage } from "./LanguageContext"
import { traductionsData } from "@/constants/index"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [changeNavbar, setChangeNavbar] = useState(false)

  const { language } = useLanguage()

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarFunc)

    return () => {
      removeEventListener("scroll", changeNavbarFunc)
    }
  }, [])

  const changeNavbarFunc = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setChangeNavbar(true)
    } else {
      setChangeNavbar(false)
    }
  }

  return (
    <motion.nav
      variants={navariant}
      initial="hidden"
      whileInView="show"
      className={`w-full px-8 md:px-16 lg:px-24 py-3 flex justify-between sticky top-0 z-20 ${changeNavbar ? 'border-b' : null}  bg-[#131313]`}
    >
      <p className="text-3xl font-extrabold logo">
        {"{ JIC }"}
      </p>
      <div 
        className="flex md:hidden text-white text-xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BiMenuAltRight className="text-2xl" />
      </div>
      <div className={`w-[90%] md:w-auto ${isOpen ? 'translate-y-0 md:translate-y-0' : '-translate-y-[300%] md:translate-y-0'} md:bg-transparent z-20 transition-all absolute left-1/2 -translate-x-1/2 md:translate-x-0 -bottom-[330%] md:relative md:left-0`}>
        <ul className="flex-center flex-col md:flex-row md:w-auto glassmorphism md:bg-transparent z-30 rounded-full md:rounded-none md:shadow-none md:backdrop-blur-0 md:border-none">
          <li className="items-nav w-full md:w-auto">
            <Link 
              href="#home" 
              onClick={() => setIsOpen(false)} 
              className="hover:md:rounded-none hover:md:shadow-none md:hover:backdrop-blur-0 md:hover:border-none md:hover:text-green-700"
            > 
              {traductionsData[`${language}`].home.title} 
            </Link>
          </li>
          <li className="items-nav w-full md:w-auto">
            <Link 
              href="#about" 
              onClick={() => setIsOpen(false)} 
              className="md:hover:rounded-none md:hover:shadow-none md:hover:backdrop-blur-0 md:hover:border-none md:hover:text-green-700"
            > 
              {traductionsData[`${language}`].aboutMe.title} 
            </Link>
          </li>
          <li className="items-nav w-full md:w-auto">
            <Link 
              href="#projects" 
              onClick={() => setIsOpen(false)} 
              className="md:hover:rounded-none md:hover:shadow-none md:hover:backdrop-blur-0 md:hover:border-none md:hover:text-green-700"
            > 
              {traductionsData[`${language}`].myProjects.title} 
            </Link>
          </li>
          <li className="items-nav w-full md:w-auto">
            <Link 
              href="#contacts" 
              onClick={() => setIsOpen(false)} 
              className="md:hover:rounded-none md:hover:shadow-none md:hover:backdrop-blur-0 md:hover:border-none md:hover:text-green-700"
            > 
              {traductionsData[`${language}`].contacts.title} 
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar