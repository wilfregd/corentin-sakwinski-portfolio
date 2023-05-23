import React from 'react'
import SkillBar from './SkillBar'

function Skills() {
  return (
    <section id="skills">
      {/* Top wave */}
      <div className='wave-bottom wave h-40 lg:h-[35vh] w-full' />
      <div className='relative h-auto w-full flex flex-col items-center'>
        <h1 className='text-[1.5rem] tracking-widest uppercase font-thin text-gray-400'>Compétences</h1>

        {/* Content */}
        <div className='grid grid-cols-2 lg:gap-x-20 w-full h-auto px-6 py-8 md:max-w-2xl lg:max-w-4xl m-auto'>
            <SkillBar imgPath="./img/skills/node-js.svg" label='Node.js' percentage={99} color="#00CCFF" />
            <SkillBar imgPath="./img/skills/express-js.webp" label='Express' percentage={99} color="#00CCFF" />
            <SkillBar imgPath="./img/skills/react.svg" label='React' percentage={97} color="#00CCFF" />
            <SkillBar imgPath="./img/skills/csharp.svg" label='C#/.NET' percentage={98} color="#00CCFF" />
            <SkillBar imgPath="./img/skills/react.svg" label='React Native' percentage={70} color="#9067C6" />
            <SkillBar imgPath="./img/skills/git.svg" label='Git' percentage={85} color="#9067C6" />
            <SkillBar imgPath="./img/skills/typescript.png" label='TypeScript' percentage={80} color="#9067C6" />
            <SkillBar imgPath="./img/skills/mongodb.svg" label='MongoDB' percentage={95} color="#9067C6" />
            <SkillBar imgPath="./img/skills/mysql.png" label='MySql' percentage={90} color="#9067C6" />
            <SkillBar imgPath="./img/skills/sequelize.png" label='Sequelize' percentage={85} color="#9067C6" />
            <SkillBar imgPath="./img/skills/vuejs.svg" label='Vue.js' percentage={50} color="#9067C6" />
            <SkillBar imgPath="./img/skills/html5.svg" label='HTML5' percentage={95} color="#9067C6" />
            <SkillBar imgPath="./img/skills/css3.png" label='CSS3' percentage={95} color="#9067C6" />
            <SkillBar imgPath="./img/skills/javascript.png" label='Javascript' percentage={95} color="#9067C6" />
            <SkillBar imgPath="./img/skills/unity.png" label='Unity' percentage={85} color="#9067C6" />
            <SkillBar imgPath="./img/skills/godot.svg" label='Godot' percentage={97} color="#9067C6" />
            <SkillBar imgPath="./img/skills/ue4.png" label='Unreal Engine' percentage={60} color="#9067C6" />
        </div>
      </div>
      <div className='wave-top wave bottom-0 left-0 h-40 lg:h-[35vh] w-full pointer-events-none' />
    </section>
  )
}

export default Skills