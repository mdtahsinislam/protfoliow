// import React from 'react'

// const Hero = () => {
//   return (
//     <div className='relative  h-screen flex  items-center text-white overflow-hidden flex-col'>Hero</div>
//   )
// }

// export default Hero

"use client"
import React from 'react'
import Image from 'next/image'
import Typewriter from  'typewriter-effect'
import { AiOutlineEye } from 'react-icons/ai'
import { BiDownload, BiLogoGmail } from 'react-icons/bi'
import ParticlesHero from './ParticleBackground'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-white bg-[#0d0d1f]'>
      {/* <h1 className='text-5xl font-bold'>Hero Section</h1> */}


   <ParticlesHero />

      <div className='relative z-10 flex  flex-col  items-center'>
        <Image src="/images/me.png" alt="hero" width={200} height={250} className='rounded-full border-8 border-[#0c0c48aa]' />
        <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold  tracking-wide'>Creating web Products, <br /> <span className='text-cyan-200'>brands, and Experiece .</span> </h1>
        <h2 className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center'>
            Hi! I am MD Tahsin Islam Chowdhury - A Passionate <br /> <span className='text-cyan-300 font-bold'>
                <Typewriter options={{
                    strings:[
                        'Fronend Developer',
                        'Backend Developer',
                        'Web Developer'
                    ],
                    autoStart:true,
                    loop:true,
                    delay:75,
                    deleteSpeed:50,
                    wrapperClassName:'pl-2',
                }}/>
            </span>
        </h2>
               <div className='flex gap-3.5 mt-4'>
                          {/* view */}
<button className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2'>
    <AiOutlineEye className="w-5 h-5" />
        <span>View CV</span>
</button>
{/* cv button */}
<button className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2'>
    <BiDownload className='w-5 h-5'/>
    <span>Download CV</span>
</button>






               </div>


               {/* raf */}
<div>
         
          <div className="flex gap-6 mt-6">
            <a href="https://github.com/mdtahsinislam" target="_blank" className="text-3xl hover:text-cyan-400"><FaGithub /></a>
            <a href="https://linkedin.com/in/mdtahsinislam" target="_blank" className="text-3xl hover:text-cyan-400"><FaLinkedin /></a>
           <a
  href="https://www.facebook.com/mdtahsin.tahsin.1481"
  target="_blank"
  rel="noopener noreferrer"
  className="text-3xl hover:text-cyan-400"
>
   <FaFacebook />  {/* Replace with your actual Facebook icon component */}
</a>

<a
  href="mailto:mdtahsinislam334@gmail.com"
  className="text-3xl hover:text-cyan-400"
>
 <BiLogoGmail /> {/* Replace with your actual Gmail icon component */}
</a>

          </div>
        </div>

{/* raf end */}
      </div>
      
    </div>
    
  )
}

export default Hero
