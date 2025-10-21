// import React from 'react'
// import ResumeCard from './ResumeCard'
// import { FaCodepen, FaReact } from 'react-icons/fa'
// import { BsDatabase } from 'react-icons/bs'
// import { BiBadge } from 'react-icons/bi'

// const Resume = () => {
//   return (
//     <div className='text-green-500'>
    
//     <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1  xl:grid-cols-2 gap-10 '>
        
//         {/* WORKPART */}
//         <div>
//             <h1 className='text-3xl sm:text-4xl  font-bold text-white'>My Work <span className='text-cyan-500 '>Experience</span></h1>

//             <div className='mt-10'>
//                 <ResumeCard Icon={FaCodepen} role="Full-Stack Devlopment"></ResumeCard>
//                 <ResumeCard Icon={FaReact} role="Front-End Devlopment"></ResumeCard>
//                 <ResumeCard Icon={BsDatabase} role="Back-End Devlopment"></ResumeCard>
//             </div>
            
//         </div> 
         
//          {/* EDUCATION */} 
//         <div>
//          <h1 className='text-3xl sm:text-4xl  font-bold text-white'>My  <span className='text-cyan-500 '>Education</span></h1>
//           <div className='mt-10'>
//                 <ResumeCard Icon={BiBadge} role="Higher Secondary Education" date={Satkania Govt College / 2019 - 2021}></ResumeCard>
//                 <ResumeCard Icon={FaReact} role="Higher Education" date={BGC Trust University , Bangladesh/ 2023-2026}></ResumeCard>
                
//             </div>
//         </div>
//         </div>
//      </div>
//   )
// }

// export default Resume


//gpt 

import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaGraduationCap, FaPenAlt, FaReact } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'
import { BiBadge } from 'react-icons/bi'

const Resume = () => {
  return (
    <div className='text-green-500 py-16 mt-16'>
      <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
        
        {/* WORK EXPERIENCE */}
        <div>
          <h1 className='text-3xl sm:text-4xl font-bold text-white'>
            My Work <span className='text-cyan-500'>Experience</span>
          </h1>

          <div className='mt-10'>
            <ResumeCard
              Icon={FaCodepen}
              role='Full-Stack Development'
              description='Building scalable web applications using React, Node.js, and MongoDB, ensuring both frontend and backend integration.'
            />
            <ResumeCard
              Icon={FaReact}
              role='Front-End Development'
              description='Developing responsive, pixel-perfect user interfaces with React, Next.js, and Tailwind CSS for modern web experiences.'
            />
            <ResumeCard
              Icon={BsDatabase}
              role='Back-End Development'
              description='Designing and managing secure RESTful APIs, database schemas, and server-side logic using Express and MongoDB.'
            />
          </div>
        </div>

        {/* EDUCATION */}
        <div>
          <h1 className='text-3xl sm:text-4xl font-bold text-white'>
            My <span className='text-cyan-500'>Education</span>
          </h1>

          <div className='mt-10'>
            <ResumeCard
              Icon={FaPenAlt}
              role='Higher Secondary Education'
              date='Satkania Govt. College / 2019 - 2021'
              description='Graduated from Satkania Govt. College in the Science department with strong academic performance.'
            />
            <ResumeCard
              Icon={FaGraduationCap }
              role='Undergraduate Studies'
              date='BGC Trust University , Bangladesh    /  2023 - 2026'
              description='Currently pursuing a B.Sc (Honours) in Computer Science & Engineering, focusing on full-stack web development and software design.'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
