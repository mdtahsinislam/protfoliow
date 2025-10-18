import React from 'react'
import Image from "next/image"
  type Props={
    icon:string;
    name:string;
    description:string;
  }

const ServiceCard = ({description,name,icon}:Props) => {
  return (
    <div>
        <Image  src={icon} width={60} height={60} alt="images"/>
        <h1 className='text-white text-2xl  font-bold mt-4 mb-4'>{name}</h1>
        <p className='text-white mt-3.5'>{description}</p>
        
                </div>
  )
}

export default ServiceCard