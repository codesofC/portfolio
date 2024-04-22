'use client'

import { useState, useEffect } from "react"
import { navariant } from "@/utils/motion"
import { motion } from "framer-motion"
import Link from "next/link"
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [changeNavbar, setChangeNavbar] = useState(false)

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
      animate="show"
      className={`w-full max-w-4xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between sticky top-0 z-20 ${changeNavbar ? 'border-b' : null}  glassmorphism`}
    >
      <Link 
        href={'/'}
        className="text-lg font-extrabold text-white font-caption select-none"
      >
        {"{ codesofC }"}
      </Link>
      <div 
        className="flex md:hidden text-white text-xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BiMenuAltRight size={24} className="text-2xl" />
      </div>
      <div className={`w-[90%] md:w-auto ${isOpen ? 'translate-y-[30%] md:translate-y-0' : '-translate-y-[300%] md:translate-y-0'} z-20 shadow-xl md:shadow-none transition-all absolute left-1/2 -translate-x-1/2 md:translate-x-0 -bottom-[330%] md:relative md:left-0`}>
        <ul className="flex-center flex-col md:flex-row md:w-auto bg-muted md:bg-transparent z-30 rounded-[16px] md:rounded-none md:shadow-none md:backdrop-blur-0 md:border-none overflow-hidden">
          <li className="items-nav w-full md:w-auto">
            <Link 
              href="#home" 
              onClick={() => setIsOpen(false)} 
              className="hover:md:rounded-none hover:md:shadow-none md:hover:backdrop-blur-0 md:hover:border-none md:hover:text-primary md:hover:-translate-y-1 transition-all"
            > 
              Home
            </Link>
          </li>
          <li className="items-nav w-full md:w-auto">
            <Link 
              href="#about" 
              onClick={() => setIsOpen(false)} 
              className="md:hover:rounded-none md:hover:shadow-none md:hover:backdrop-blur-0 md:hover:border-none md:hover:text-primary md:hover:-translate-y-1 transition-all"
            > 
              About me 
            </Link>
          </li>
          <li className="items-nav w-full md:w-auto">
            <Link 
              href="#skills" 
              onClick={() => setIsOpen(false)} 
              className="md:hover:rounded-none md:hover:shadow-none md:hover:backdrop-blur-0 md:hover:border-none md:hover:text-primary md:hover:-translate-y-1 transition-all"
            > 
              Skills 
            </Link>
          </li>
          <li className="items-nav w-full md:w-auto">
            <Link 
              href="#projects" 
              onClick={() => setIsOpen(false)} 
              className="md:hover:rounded-none md:hover:shadow-none md:hover:backdrop-blur-0 md:hover:border-none md:hover:text-primary md:hover:-translate-y-1 transition-all"
            > 
              Projects
            </Link>
          </li>
          <li className="items-nav w-full md:w-auto">
            <Link 
              href="#contacts" 
              onClick={() => setIsOpen(false)} 
              className="md:hover:rounded-none md:hover:shadow-none md:hover:backdrop-blur-0 md:hover:border-none md:hover:text-primary md:hover:-translate-y-1 transition-all"
            > 
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar