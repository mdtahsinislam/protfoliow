// import { Navlink } from '@/constant/constant'
// import Link from 'next/link'
// import React from 'react'
// import { CgClose } from 'react-icons/cg'

// type Props={
//     showNav:boolean;
//     closeNav:()=>void;
// }

// function MobileNav({closeNav,showNav}:Props) {


// const navOpen=showNav ? "translate-x-0" : 'translate-x-[100%]';

//   return (
//     <div className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 z-[100002] bg-black opacity-70 w-full h-screen`}>
// {/* nnnnnnnnv link */}

// <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%]  sm-[60%] bg-cyan-800 space-y-6 z-[100050] right-0`}>

// {Navlink.map((link)=>{
//     return ( <Link key={link.id} href={link.url}>
//     <p className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>{link.label}</p>
//     </Link>
//     )
// })}
// {/* cross */}
// <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6'/>

// </div>

//     </div>
//   )
// }

// export default MobileNav

//gpt

// import { Navlink } from '@/constant/constant';
// import Link from 'next/link';
// import React from 'react';
// import { CgClose } from 'react-icons/cg';

// type Props = {
//   showNav: boolean;
//   closeNav: () => void;
// };

// function MobileNav({ closeNav, showNav }: Props) {
//   const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

//   return (
//     <div className={`fixed inset-0 z-[100002] bg-black bg-opacity-70 transition-all duration-500 ${showNav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//       {/* Side Drawer */}
//       <div className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-cyan-800 flex flex-col justify-center space-y-6 text-white transform ${navOpen} transition-all duration-500 delay-200 z-[100050]`}>
//         {/* Links */}
//         {Navlink.map((link) => (
//           <Link key={link.id} href={link.url} onClick={closeNav}>
//             <p className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] hover:text-cyan-300 transition-all'>
//               {link.label}
//             </p>
//           </Link>
//         ))}

//         {/* Close Button */}
//         <CgClose
//           onClick={closeNav}
//           className='absolute top-5 right-5 sm:w-8 sm:h-8 w-6 h-6 cursor-pointer'
//         />
//       </div>
//     </div>
//   );
// }

// export default MobileNav;



import { Navlink } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

type Props = { showNav: boolean; closeNav: () => void; };

function MobileNav({ closeNav, showNav }: Props) {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div className={`fixed inset-0 z-[100002] bg-black bg-opacity-70 transition-all duration-500 ${showNav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-cyan-800 flex flex-col justify-center space-y-6 text-white transform ${navOpen} transition-all duration-500 delay-200 z-[100050]`}>
        {Navlink.map((link) => (
          <a
            key={link.id}
            href={link.url}
            onClick={closeNav}
            className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] hover:text-cyan-300 transition-all'
          >
            {link.label}
          </a>
        ))}
        <CgClose onClick={closeNav} className='absolute top-5 right-5 sm:w-8 sm:h-8 w-6 h-6 cursor-pointer' />
      </div>
    </div>
  );
}

export default MobileNav;

