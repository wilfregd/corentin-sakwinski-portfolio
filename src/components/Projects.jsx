import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects" className='bg-[#101015] text-gray-400 py-6'>
        <h1 className='text-[1.5rem] tracking-widest uppercase font-thin my-2'>Projets</h1>
        <div className='pb-10 px-2 py-5 md:max-w-3xl lg:max-w-6xl m-auto flex flex-col md:grid md:grid-cols-2 justify-center items-center space-y-7 md:space-y-0 md:gap-y-12'>
          <ProjectCard imgPath="./img/projects/7_instagram_crop.png" lang="React Native, Node.js, JavaScript, HTML5, CSS3" link='https://www.linkedin.com/posts/corentin-sakwinski_react-nodejs-instagram-activity-7074528318842130432-bdwE/?utm_source=share&utm_medium=member_desktop' title='Remake Instagram' description="Défi personnel ayant pour but de recréer l'application Instagram avec React Native." />
          <ProjectCard imgPath="./img/projects/0_svgtsx.png" lang=".NET (6.0)" link='https://github.com/wilfregd/SvgTsxConverter' title='SvxTsxConverter' description='Outil pour convertir des images .svg en objets .tsx prêts à importer dans les projets React.' />
          <ProjectCard imgPath="./img/projects/1_booki.png" lang="HTML5, CSS3" link='https://github.com/wilfregd/OpenClassrooms-P2' title='Projet Formation: Booki' description='Site responsive uniquement HTML5 et CSS3' />
          <ProjectCard imgPath="./img/projects/2_ohmyfood.png" lang="HTML5, CSS3" link='https://github.com/wilfregd/OpenClassrooms-P3' title='Projet Formation: Ohmyfood!' description="Site pensé pour les appareils mobiles. Prototype d'application pour restaurant." />
          <ProjectCard imgPath="./img/projects/3_kanap.png" lang="HTML5, CSS3, Javascript, Node.js" link='https://github.com/wilfregd/OpenClassrooms-P5' title='Projet Formation: Kanap' description="Prototype de site e-commerce, centré sur l'implémentation du Javascript sur une maquette." />
          <ProjectCard imgPath="./img/projects/4_groupomania.png" lang="Vue.js, Node.js, Express, MySql, Sequelize, HTML5, CSS3" link='https://github.com/wilfregd/OpenClassrooms-P7-Groupomania' title='Projet Formation: Groupomania' description="Projet final de formation. Réseau social interne d'entreprise incluant un framework front-end, une API et prenant en compte la sécurité des utilisateurs." />
          <ProjectCard imgPath="./img/projects/5_voxel.jpg" lang="Godot, C#" link='https://starduststudios.itch.io/voxelverse' title='Voxel Engine' description="(Voir la section 'Development Log') Génération procédurale de mondes 3D type 'Voxel'. " />
          <ProjectCard imgPath="./img/projects/6_misc.png" lang="Unity, Godot, UE4, C#" link='https://www.instagram.com/wilfre_swk/' title='Projets divers' description="Différents projets personnels au fil des années, principalement Godot, Unity et UE4." />
          <ProjectCard imgPath="./img/projects/8_skyrim.jpg" lang="Godot, C#, Python, Pascal" link='https://twitter.com/WilfreGd/status/1693037024616370551' title='Port Skyrim-Godot' description="Port du jeu The Elder Scrolls V: Skyrim vers le moteur Godot 4. Création d'outils et scripts d'extraction et de conversion jeu > outil > moteur." />
        </div>
        <div className='wave-bottom wave h-40 md:h-[30%] w-full' />
      </section>
  )
}

export default Projects