import { useAnimationControls, useInView, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

function SkillBar({ imgPath, percentage, label, color="#9067C6"}) { 
  const ref = useRef(null);
  const isInView = useInView(ref);

  const controls = useAnimationControls();

  useEffect(() => {
    controls.set({
      width: 0,
    });
    controls.start({
      width:`${percentage}%`,
      transition:{
        duration: 1.0
      }
    });
  }, [isInView]);

  return (
    <div className='flex flex-col justify-center items-start w-full px-4 my-2 md:my-4 h-14 space-y-1' ref={ref}>
      <div className='flex flex-row items-center justify-center space-x-2'>
        <img src={imgPath} className="w-5" />
        <h1 className='text-[#d9d9d9] tracking-wider font-thin text-sm sm:text-[0.9rem] md:text-base'>{label}</h1>
      </div>
      <div className='relative w-full h-2 lg:h-4  bg-[#323232] rounded-sm overflow-hidden'>
        <motion.div animate={controls} style={{ backgroundColor: color }} className='h-2 lg:h-4' />
      </div>
    </div>
  )
}

export default SkillBar