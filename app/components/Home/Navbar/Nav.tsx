


// // "use client";
// // import { Navlink } from '@/constant/constant'
// // import Link from 'next/link'
// // import React, { useEffect, useState } from 'react'
// // import { AiOutlineEye } from 'react-icons/ai'
// // import { BiDownload} from 'react-icons/bi'
// // import { FaCode } from 'react-icons/fa'
// // import { HiBars3BottomRight } from 'react-icons/hi2'

// // type Props={
// //     openNav:()=>void;
// // }

// // function Nav({openNav}:Props)=> {
// //     const [navBg,setNavBg]=useState(false);
// //     useEffect(()=>{
// //         const handler=()=>{
// //               if(window.scrollY >=90) setNavBg(true);
// //               if(window.scrollY < 90) setNavBg(false);
// //         }
// //         window.addEventListener("scroll",handler);
// //         return ()=>window.removeEventListener("scroll",handler);
// //     },[]);
          
// //   return (
// //     <div className={`transition-all ${navBg ? 'bg-[#0f142ed9] shadow-md' : "fixed"} duration-200 h-[12vh] fixed w-full`}>
        
// //         <div className='flex items-center h-full  justify-between w-[90%] mx-auto '>
// //             {/* logo */}
// //              <div className='flex items-center space-x-2'>
// //                 <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col'>
// //                    <FaCode  className="text-[#0d0d1f] text-2xl"/>
// //                 </div>
// //                 <h1 className='text-white'>MD Tahsin</h1>
// //              </div>
// //              {/* navlinks */}
// //               <div className='hidden lg:flex items-center space-x-10'>
// //                 {/* {Navlink.map((link)=>{
// //                     return <Link key={link.id} href={link.url} className='text-white text-6xl md:text-base font-medium transition-all duration-200'>
                
// //                 <p>{link.label}</p>

// //                     </Link>
// //                 })} */}

// //                 {Navlink.map((link, index) => (
// //   <Link
// //     key={index}
// //     href={link.url}
// //     className='text-white text-3xl md:text-base font-medium transition-all duration-200'
// //   >
// //     <h3>{link.label}</h3>
// //   </Link>
// // ))}


       





// //               </div>
// //               {/* barger manue  */}
// //               <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden " />


// //         </div>
// //   </div>
// //   )
// // }

// // export default Nav


// //gpt

// "use client";

// import { Navlink } from '@/constant/constant';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';
// import { FaCode } from 'react-icons/fa';
// import { HiBars3BottomRight } from 'react-icons/hi2';

// type Props = {
//   openNav: () => void;
// };

// function Nav({ openNav }: Props) {
//   const [navBg, setNavBg] = useState(false);

//   useEffect(() => {
//     const handler = () => {
//       if (window.scrollY >= 90) setNavBg(true);
//       else setNavBg(false);
//     };
//     window.addEventListener("scroll", handler);
//     return () => window.removeEventListener("scroll", handler);
//   }, []);

//   return (
//     <div className={`transition-all duration-200 h-[12vh] fixed w-full z-[1000] ${navBg ? 'bg-[#0f142ed9] shadow-md' : ''}`}>
//       <div className='flex items-center justify-between w-[90%] h-full mx-auto'>
//         {/* Logo */}
//         <div className='flex items-center space-x-2'>
//           <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
//             <FaCode className="text-[#0d0d1f] text-2xl" />
//           </div>
//           <h1 className='text-white font-semibold text-lg'>MD Tahsin</h1>
//         </div>

//         {/* Desktop Navlinks */}
//         <div className='hidden lg:flex items-center space-x-10'>
//           {Navlink.map((link, index) => (
//             <Link
//               key={index}
//               href={link.url}
//               scroll={false}
//               className='text-white text-base font-medium hover:text-cyan-400 transition-all duration-200'
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>

//         {/* Burger Menu for mobile */}
//         <HiBars3BottomRight
//           onClick={openNav}
//           className="w-8 h-8 cursor-pointer text-white lg:hidden"
//         />
//       </div>
//     </div>
//   );
// }

// export default Nav;




"use client";
import { Navlink } from '@/constant/constant';
import React, { useEffect, useState } from 'react';
import { FaCode } from 'react-icons/fa';
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = { openNav: () => void };

function Nav({ openNav }: Props) {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => window.scrollY >= 90 ? setNavBg(true) : setNavBg(false);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className={`transition-all duration-200 h-[10vh] fixed w-full z-[1000] ${navBg ? 'bg-[#0f142ed9] shadow-md' : ''}`}>
      <div className='flex items-center justify-between w-[90%] h-full mx-auto'>
        {/* Logo */}
        <div className='flex items-center space-x-2'>
          <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
            <FaCode className="text-[#0d0d1f] text-2xl" />
          </div>
          <h1 className='text-white font-semibold text-lg'>MD Tahsin</h1>
        </div>

        {/* Desktop Navlinks */}
        <div className='hidden lg:flex items-center space-x-10'>
          {Navlink.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className='text-white text-base font-medium hover:text-cyan-400 transition-all duration-200'
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Burger Menu for mobile */}
        <HiBars3BottomRight
          onClick={openNav}
          className="w-8 h-8 cursor-pointer text-white lg:hidden"
        />
      </div>
    </div>
  );
}

export default Nav;
