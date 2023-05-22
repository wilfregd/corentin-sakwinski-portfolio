import React, { useEffect } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

function Header() {
    function buttonAnimation(time) {
      return {
        initial:{
          translateY: -20,
        },
        animate:{
          translateY: 0,
        },
        transition:{
          delay: time
        }
      }
    }

    const [text, helper] = useTypewriter({
        words: ["back_end.jsx", "full_stack.jsx", "<SpaghettiCode />"],
        delaySpeed: 2000,
        loop: true,
      })

  return (
    <header className='bg-cyber bg-fixed bg-repeat bg-cover md:bg-auto md:bg-no-repeat md:bg-right'>
      <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 0.2
      }}
      >
        <div className='relative h-auto pt-40 py-4 flex flex-col justify-center items-center font-roboto space-y-3 lg:space-y-4'>
            <img src="./img/photo.png" className="w-28 lg:w-32 rounded-full" />
            <h1 className='uppercase text-[1.0rem] md:text-[0.9rem] lg:text-[1.1rem] font-thin text-gray-400 uppdercase tracking-widest'>Développpeur Web et Web Mobile</h1>
            <h1 className='text-[1.7rem] text-white flex flex-row justify-center items-center font-semibold'>Corentin Sakwinski</h1>
            <div className='text-[1.5rem] text-white flex flex-row justify-center items-center font-light'>
              <h1 className='text-[#9067C6]'>{text}</h1>
              <Cursor cursorColor='#ffffff' />
            </div>
            <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4
            }}
            className='py-4 font-thin text-gray-400 flex flex-row justify-evenly space-x-3 lg:space-x-8 text-[0.8rem]'>
              <motion.a {...buttonAnimation(0.4)} href='#about'><button className='btn-header'>À-Propos</button></motion.a>
              <motion.a {...buttonAnimation(0.5)} href='#skills'><button className='btn-header'>Compétences</button></motion.a>
              <motion.a {...buttonAnimation(0.6)} href='#projects'><button className='btn-header'>Projets</button></motion.a>
              <motion.a {...buttonAnimation(0.7)} href='#contact'><button className='btn-header'>Contact</button></motion.a>
            </motion.div>
        </div>
      </motion.div>
      <div className='wave-top wave h-[35vh] w-full pointer-events-none' />
    </header>
  )
}

export default Header