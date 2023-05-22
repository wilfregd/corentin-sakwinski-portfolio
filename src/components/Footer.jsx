import React from 'react'

function Footer() {
  return (
    <footer className='text-left px-4 py-4 bg-[#00000088] text-gray-400 flex flex-col md:flex-row md:justify-cennter md:px-12 justify-between items-center'>
        <p className='font-thin'>Corentin Sakwinski - 2023</p>
        <a href='mailto:sakwinski.c@gmail.com' target='_blank'><p className='text-gray-400 font-thin text-sm underline underline-offset-4'>sakwinski.c@gmail.com</p></a>
    </footer>
  )
}

export default Footer