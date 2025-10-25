
"use client"
import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import Skils from './Skils/Skils'
import Contact from './Contact/Contact'



// function Home() {
//   return (
//     <div className='overflow-hidden '>
//       <Hero></Hero>
//       <Services></Services>
//       <Resume></Resume>
//       <Projects></Projects>
//       <Skils></Skils>
//       <Contact></Contact>
//       </div>
//   )
// }

// export default Home  

// import React from 'react';
// import Hero from './Hero/Hero';
// import Services from './Services/Services';
// import Resume from './Resume/Resume';
// import Projects from './Projects/Projects';
// import Skils from './Skils/Skils';
// import Contact from './Contact/Contact';

function Home() {
  return (
    <div className='overflow-hidden'>
      <section id="home"><Hero /></section>
      <section id="services"><Services></Services></section>
      <section id="skills"><Skils /></section>
      <section id="education"><Resume /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default Home;


