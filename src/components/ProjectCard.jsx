import React from 'react'

function ProjectCard({ second, imgPath, lang, link = "", title = "Project title", description = "Project description."}) {
  return (
    <div className='w-full justify-between items-center md:px-8 md:py-4'>
        <div className='px-4 py-2 w-full grid grid-cols-2 items-center gap-4'>
            {
                !second &&
                <CardInfos lang={lang} title={title} description={description} link={link} />
            }
            <div className={("rounded-lg shadow-md relative m-auto w-40 h-40 overflow-hidden flex flex-col justify-center items-center " + (second ? "text-left" : "text-right"))}>
                <img src={imgPath} className='h-full border border-gray-900 object-cover absolute object-left-top' />
            </div>
            {
                second && 
                <CardInfos secondary={second} lang={lang} title={title} description={description} link={link} />
            }
        </div>
    </div>
  )
}

function CardInfos({ title, description, link, lang, secondary }) {
    return (
        <div className={("justify-between h-full flex flex-col text-left space-y-2 " + (secondary ? "text-right" : "text-left"))}>
            <a href={link} target='_blank'><h1 className="underline underline-offset-2 text-purple-500 text-md">{title}</h1></a>
            <p className='text-sm'>{description}</p>
            <h1 className='text-sm font-thin'>Stack: {lang}</h1>
        </div>
    )
}

export default ProjectCard