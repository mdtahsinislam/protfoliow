

"use client"
import React from 'react'
import { SiExpress, SiFirebase, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'

import Tilt from 'react-parallax-tilt'

const skils=[
    {
        name:'JavaScript',
        icon:<SiJavascript></SiJavascript>,
        percentage:89,
    },
    {
        name:'React.js',
        icon:<SiReact></SiReact>,
        percentage:91,
    },
    
    {
        name:'Node js',
        icon:<SiNodedotjs></SiNodedotjs>,
        percentage:88,
    },
    {
     name:'Expressjs',
        icon:<SiExpress></SiExpress>,
        percentage:88,
    },
    {
        name:'Tailwind css',
        icon:<SiTailwindcss></SiTailwindcss>,
        percentage:95,
    },
    {
        name:'Next.js',
        icon:<SiNextdotjs></SiNextdotjs>,
        percentage:30,
    },
    {
        name:'TypeScript',
        icon:<SiTypescript></SiTypescript>,
        percentage:25,
    },
    {
    name: 'Firebase',
    icon: <SiFirebase />,
    percentage: 85,
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb />,
    percentage: 90,
  }
]
const Skils = () => {
  return (
    <div className='text-white pt-24 pb-16'>
     <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-cyan-500">
       <span className='text-white'> My</span> Skils
      </h1>
<div className='flex flex-wrap justify-center gap-6  mt-16'>
{skils.map((skil)=>{
    return <Tilt key={skil.name} scale={1.5} transitionSpeed={400}>
          <div className='bg-[#14134145] text-center  w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105' >

            <div className='text-5xl mb-4 text-gray-300'>{skil.icon}</div>
            {/* <p className='text-2xl font-semibold'>{skil.percentage}%</p> */}
            <p className='text-purple-400 mt-1'>{skil.name}</p>
          </div>
    </Tilt>
})}
</div>
    </div>
  )
}

export default Skils