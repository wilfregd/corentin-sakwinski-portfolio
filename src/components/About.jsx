import React from 'react'

function About() {
  return (
    <section id="about" className=' bg-[#101015] w-full'>
      <div className='text-gray-400 space-y-10 px-10 md:max-w-xl lg:max-w-5xl h-auto bg-[#101015] py-20 flex flex-col justify-center items-center m-auto'>
        <h1 className='text-[1.5rem] lg:text-[1.7rem] tracking-widest uppercase font-thin'>À-Propos</h1>
        <img src="./img/wilfre_logo.png" className='rounded-full shadow-sm w-32' />
        <p className='p-4 text-[0.9rem] sm:text-[1.1rem] md:text-[1rem] text-left'>
        Passionné par les métiers du web et du numérique, j'ai choisi de devenir développeur professionnel et d'en faire ma carrière. Depuis l'âge de 6 ans, ma curiosité m'a poussé à développer des applications et jeux vidéo, ce qui m'a ensuite conduit naturellement vers les métiers du web.<br/>J'ai développé une passion particulière pour le développement back-end tout en maintenant une capacité à gérer des projets full-stack.
          <br/><br/>Mes compétences ont été renforcées au fil des années et ont été officiellement validées grâce à une formation diplômante.
        </p>

        {/* Diplômes et expériences */}
        <div className='flex flex-col justify-center items-center w-full text-left space-y-4 md:space-y-2'>
          <div className='about-slot'>
            <h1 className='about-slot-title'>Diplôme d'État de niveau 5</h1>
            <p className='about-slot-details'>Développeur Web et Web Mobile. Développement Web Full-Stack · HTML5 · CSS3 · Sass · Vue.js · JavaScript · Node.js · Express.js · MongoDB · MySQL · Optimisation pour les moteurs de recherche (SEO) · Architecture MVC · Visual Studio</p>
          </div>
          <div className='about-slot'>
            <h1 className='about-slot-title'>Lead Developer - Jeux Vidéo (Unity) à Realm Studios. Poste à distance (Angleterre)</h1>
            <p className='about-slot-details'>Développeur jeux vidéos PC, mobile et VR à Realm Studios. Développeur C#/.NET Unity. Controleurs VR et serveurs multijoueurs TCP. Graphismes 2D et 3D. Gestion de bases de données.</p>
          </div>
          <div className='about-slot'>
            <h1 className='about-slot-title'>Baccalauréat Technologique (STI2D): Spécialité "Systèmes d'Information et Numérique".</h1>
          </div>
          <div className='about-slot'>
            <h1 className='about-slot-title'>Bilingue Français/Anglais</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About