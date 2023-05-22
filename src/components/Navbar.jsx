import React from 'react'
import { motion, useAnimation } from 'framer-motion';

//Icons
import { ReactComponent as LinkedIn } from '../icons/linkedin.svg';
import { ReactComponent as GitHub } from '../icons/github.svg';
import { ReactComponent as Twitter } from '../icons/twitter.svg';
import { ReactComponent as Envelope } from '../icons/envelope.svg';

function Navbar() {
  function iconAnimation(time) {
    return {
      initial:{
        translateY: -50,
      },
      animate:{
        translateY: 0,
      },
      transition:{
        duration: 0.75,
        delay: time
      }
    }
  }

  return (
    <motion.nav
    initial={{
      translateY: -50,
    }}
    animate={{
      translateY: 0,
    }}
    transition={{
      duration: 0.5,
    }}
    className="z-10 text-white px-4 md:px-12 fixed top-0 left-0 w-full h-12 flex flex-row justify-between items-center bg-[#00000055] backdrop-blur-sm shadow-md">
        <div className='flex flex-row space-x-3'>
          <motion.a {...iconAnimation(0.2)} href="https://www.linkedin.com/in/corentin-sakwinski/" target='_blank'><LinkedIn className='w-6 icon-nav' /></motion.a>
          <motion.a {...iconAnimation(0.3)} href="https://github.com/wilfregd" target='_blank'><GitHub className='w-6 icon-nav' /></motion.a>
          <motion.a {...iconAnimation(0.4)} href="https://twitter.com/WilfreGd" target='_blank'><Twitter className='w-6 icon-nav' /></motion.a>
        </div>        
        <div className='flex flex-row space-x-4 items-center'>
          <motion.a {...iconAnimation(0.5)} href='mailto:sakwinski.c@gmail.com' target='_blank'><p className='text-gray-400 opacity-80 font-thin m-auto text-xs md:text-sm lg:text-base'>sakwinski.c@gmail.com</p></motion.a>
          <motion.a {...iconAnimation(0.5)} href="#contact"><Envelope className='w-6 icon-nav animate-pulse' /></motion.a>
        </div>
      </motion.nav>
  )
}

export default Navbar