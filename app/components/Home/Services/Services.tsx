import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='pt-12 pb-12 '>
        
        <h1 className='text-center  text-4xl  font-bold text-cyan-600'>
         About-Me   
    </h1>  
    <div className='w-[90%]  sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center'>

  <div>
            <ServiceCard icon="/images/s2.png" name="Web Application" description="
              Building fast, responsive, and user-friendly web and mobile applications using modern frameworks."></ServiceCard>
         </div>


        <div>
            <ServiceCard icon="/images/s3.png" name="Design & Creative" description="Crafting visually appealing and unique designs that communicate ideas clearly and beautifully."></ServiceCard>
         </div>


        <div>
            <ServiceCard icon="/images/s4.png" name="Development" description="Transforming ideas into clean, maintainable code and scalable applications with best practices."></ServiceCard>
         </div>

        
         <div>
            <ServiceCard icon="/images/s1.png" name="UI and UX" description="Designing seamless user experiences that blend functionality with elegant visual design ."></ServiceCard>
         </div>


 



        </div>   
        </div>
  )
}

export default Services