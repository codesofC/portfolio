'use client'

import { useLanguage } from './LanguageContext'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/utils/motion'
import TypingText from './TypingText'
import EduDetails from './EduDetails'
import { traductionsData } from '@/constants/index'

const About = () => {

    const { language } = useLanguage()

  return (
    <section className='bg-[rgba(0,0,0,.3)] backdrop-blur-xl sections py-8' id='about'>
        <motion.div 
            variants={fadeIn({
                direction: "right",
                type: "tween",
                duration: 0.2,
            })}
            initial="hidden"
            whileInView="show"
            className='about-img-container'>
            <Image 
                src={"/assets/profil-2.jpg"}
                width={900}
                height={600}
                priority
                alt="Profil"
                className='about-img'
            />
        </motion.div>
        <motion.div
            variants={staggerContainer({ type: "spring"}, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className='box-container'
        >
            <TypingText 
                title={traductionsData[`${language}`].aboutMe.title}
                customStyles='text-2xl font-bold text-gray-300'
            />
            <motion.div 
                variants={fadeIn({ direction: "right", type: "spring"})}
                className='flex flex-col gap-6'
            >
                {traductionsData[`${language}`].aboutMe.description.map((paragraph, index) => (
                    <p className='flex flex-wrap text-white leading-8' key={index}>
                        { paragraph }
                    </p>
                ))}
                
                <EduDetails />
            </motion.div>
        </motion.div>
    </section>
  )
}

export default About