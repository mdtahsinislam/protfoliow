// import React from 'react'
// import Image from 'next/image';
// const Projects = () => {
//   return (
//     <div  className='pt-16 pb-16'>
    
//     <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-cyan-500'>My Projects</h1>
//     <div className='w-[70%] mx-auto grid  grid-cols-1 md:grid-cols-2  gap-10 mt-16'>
//         <div>
//             <Image src="/images/p1.jpg" alt="img" width={800} height={650} className='rounded-lg' />
//             <h1 className='text-4xl font-bold text-white'>Pet Adoption Platform </h1> 
//             {/* give me sylish in my protfoliow  project details text code here */}
//         </div>
//     </div>
//     </div>
//   )
// }

// export default Projects

// import React from 'react';
// import Image from 'next/image';

// // Define types
// type Technology = { name: string; };
// type Project = {
//   title: string;
//   description: string;
//   technologies: Technology[];
//   frontendRepo: string;
//   backendRepo: string;
//   liveLink: string;
//   imagePath: string;
// };

// // Project Data
// const getPetProject: Project = {
//   title: "GetPet",
//   description: "A comprehensive pet adoption platform featuring user authentication, secure payments with Stripe, role-based access control, dynamic pet management, and responsive design.",
//   technologies: [
//     { name: "React" },
//     { name: "MongoDB" },
//     { name: "Stripe" },
//     { name: "Firebase" },
//     { name: "Tailwind CSS" },
//     { name: "React Table" },
//     { name: "React Router" },
//     { name: "JWT" },
//     { name: "Express" }
//   ],
//   frontendRepo: "#",
//   backendRepo: "#",
//   liveLink: "#",
//   imagePath: "/images/p1.jpg",
// };

// const Projects: React.FC = () => {
//   return (
//     <div className="pt-16 pb-16 bg-gray-900 text-white">
//       <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-cyan-500">
//         My Projects
//       </h1>

//       <div className="w-[90%] lg:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
//         {/* Project Card */}
//         <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
//           {/* Image Section */}
//           <div className="relative w-full h-80">
//             <Image
//               src={getPetProject.imagePath}
//               alt={getPetProject.title}
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Text Section */}
//           <div className="p-6">
//             <h1 className="text-3xl font-extrabold mb-3 border-b-2 border-cyan-500 inline-block pb-1">
//               {getPetProject.title}
//             </h1>

//             <p className="text-gray-300 mt-4 leading-relaxed">
//               {getPetProject.description}
//             </p>

//             {/* Technologies */}
//             <div className="mt-6">
//               <h2 className="text-xl font-semibold mb-3">Technologies Used:</h2>
//               <div className="flex flex-wrap gap-2">
//                 {getPetProject.technologies.map((tech, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 text-sm bg-gray-700 rounded-md border border-gray-600 shadow-sm"
//                   >
//                     {tech.name}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Links */}
//             <div className="mt-8 space-y-4">
//               {/* Frontend */}
//               <div className="flex flex-wrap items-center gap-4">
//                 <p className="font-bold text-lg">Frontend:</p>
//                 <a
//                   href={getPetProject.frontendRepo}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-4 py-2 bg-black rounded-md hover:bg-gray-800 transition-all"
//                 >
//                   GitHub Repo
//                 </a>
//                 <a
//                   href={getPetProject.liveLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="underline hover:no-underline"
//                 >
//                   Live Link
//                 </a>
//               </div>

//               {/* Backend */}
//               <div className="flex flex-wrap items-center gap-4">
//                 <p className="font-bold text-lg">Backend:</p>
//                 <a
//                   href={getPetProject.backendRepo}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-4 py-2 bg-black rounded-md hover:bg-gray-800 transition-all"
//                 >
//                   GitHub Repo
//                 </a>
//               </div>
//             </div>


//           </div>
//         </div>
//         {/* Add more cards if needed */}
//       </div>
//     </div>
//   );
// };

// export default Projects;




// # 🌐 Live Site Link: https://pet-adoupt-platfrom.web.app  
// ## 🔗 Client Side Github Repository Link:[Client Repo](https://github.com/mdtahsinislam/pet-adoupt-platfrom-client)
// ## 🔗 Server Side Github Repository Link:[Server Repo](https://github.com/mdtahsinislam/pet-adoupt-platfrom-serverr)


// connent link address





// import React from 'react';
// import Image from 'next/image';

// // Define types
// type Technology = { name: string };
// type Project = {
//   title: string;
//   description: string;
//   technologies: Technology[];
//   frontendRepo: string;
//   backendRepo: string;
//   liveLink: string;
//   imagePath: string;
// };

// // ✅ Project Data (Updated with your actual links)
// const getPetProject: Project = {
//   title: "GetPet",
//   description:
//     "A comprehensive pet adoption platform featuring user authentication, secure payments with Stripe, role-based access control, dynamic pet management, and responsive design.",
//   technologies: [
//     { name: "React" },
//     { name: "MongoDB" },
//     { name: "Stripe" },
//     { name: "Firebase" },
//     { name: "Tailwind CSS" },
//     { name: "React Table" },
//     { name: "React Router" },
//     { name: "JWT" },
//     { name: "Express" },
//   ],
//   frontendRepo: "https://github.com/mdtahsinislam/pet-adoupt-platfrom-client",  // ✅ Client Repo
//   backendRepo: "https://github.com/mdtahsinislam/pet-adoupt-platfrom-serverr", // ✅ Server Repo
//   liveLink: "https://pet-adoupt-platfrom.web.app", // ✅ Live Site
//   imagePath: "/images/oa2.png", 
// };

// const Projects: React.FC = () => {
//   return (
//     <div className="pt-16 pb-16 bg-gray-900 text-white">
//       <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-cyan-500">
//         My Projects
//       </h1>

//       <div className="w-[90%] lg:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
//         {/* Project Card */}
//         <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
//           {/* Image Section */}
//           <div className="relative w-full h-96">
//             <Image
//               src={getPetProject.imagePath}
//               alt={getPetProject.title}
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Text Section */}
//           <div className="p-6">
//             <h1 className="text-3xl font-extrabold mb-3 border-b-2 border-cyan-500 inline-block pb-1">
//               {getPetProject.title}
//             </h1>

//             <p className="text-gray-300 mt-4 leading-relaxed">
//               {getPetProject.description}
//             </p>

//             {/* Technologies */}
//             <div className="mt-6">
//               <h2 className="text-xl font-semibold mb-3">Technologies Used:</h2>
//               <div className="flex flex-wrap gap-2">
//                 {getPetProject.technologies.map((tech, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 text-sm bg-gray-700 rounded-md border border-gray-600 shadow-sm"
//                   >
//                     {tech.name}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Links */}
//             <div className="mt-8 space-y-4">
//               {/* Frontend */}
//               <div className="flex flex-wrap items-center gap-4">
//                 <p className="font-bold text-lg">Frontend:</p>
//                 <a
//                   href={getPetProject.frontendRepo}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-4 py-2 bg-black rounded-md hover:bg-gray-800 transition-all"
//                 >
//                   GitHub Repo
//                 </a>
//                 <a
//                   href={getPetProject.liveLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="underline hover:no-underline"
//                 >
//                   Live Link
//                 </a>
//               </div>

//               {/* Backend */}
//               <div className="flex flex-wrap items-center gap-4">
//                 <p className="font-bold text-lg">Backend:</p>
//                 <a
//                   href={getPetProject.backendRepo}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-4 py-2 bg-black rounded-md hover:bg-gray-800 transition-all"
//                 >
//                   GitHub Repo
//                 </a>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

// Restaurant Management   imagePath: "/images/oa3.png"
// - **Client Repository**: [github.com/mdtahsinislam/Resturent-management-clint-site](https://github.com/mdtahsinislam/Resturent-management-clint-site)
// - **Server Repository**: [github.com/mdtahsinislam/Resturent_management-server-site](https://github.com/mdtahsinislam/Resturent_management-server-site)
// - **Live Link**: [resturentmanagement-website.web.app](https://resturentmanagement-website.web.app/)

//  Treeplant Care App    imagePath: "/images/oa4.png"
// - **Client Repository**: [github.com/mdtahsinislam/Treeplant-Care_client-site](https://github.com/mdtahsinislam/Treeplant-Care_client-site)
// - **Server Repository**: [github.com/mdtahsinislam/TreeplantCare_serversite](https://github.com/mdtahsinislam/TreeplantCare_serversite)
// - **Live Link**: [treeplant-care-app.web.app](https://treeplant-care-app.web.app/)

 


// import React from "react";
// import Image from "next/image";

// type Technology = { name: string };
// type Project = {
//   title: string;
//   description: string;
//   technologies: Technology[];
//   frontendRepo: string;
//   backendRepo: string;
//   liveLink: string;
//   imagePath: string;
// };

// const projects: Project[] = [
//   {
//     title: "PetAdouptPlatform",
//     description:
//       "A comprehensive pet adoption platform featuring user authentication, secure payments with Stripe, role-based access control, dynamic pet management, and responsive design.",
//     technologies: [
//       { name: "React" },
//       { name: "MongoDB" },
//       { name: "Stripe" },
//       { name: "Firebase" },
//       { name: "Tailwind CSS" },
//       { name: "React Table" },
//       { name: "React Router" },
//       { name: "JWT" },
//       { name: "Express" },
//     ],
//     frontendRepo: "https://github.com/mdtahsinislam/pet-adoupt-platfrom-client",
//     backendRepo: "https://github.com/mdtahsinislam/pet-adoupt-platfrom-serverr",
//     liveLink: "https://pet-adoupt-platfrom.web.app",
//     imagePath: "/images/oAiii.png",
//   },
//   {
//     title: "Restaurant Management",
//     description:
//       "I built a fully responsive Restaurant Management Platform using the MERN stack that enables smooth interaction between customers and restaurant staff. The platform provides a seamless experience for browsing, ordering, and managing food items while ensuring data security and scalability .",
//     technologies: [
//       { name: "React" },
//       { name: "MongoDB" },
//       { name: "Express" },
//       { name: "Firebase" },
//       { name: "Nodemailer" },
//       { name: "Tailwind CSS" },
//     ],
//     frontendRepo:
//       "https://github.com/mdtahsinislam/Resturent-management-clint-site",
//     backendRepo:
//       "https://github.com/mdtahsinislam/Resturent_management-server-site",
//     liveLink: "https://resturentmanagement-website.web.app/",
//     imagePath: "/images/oAi.png", 
//   },
//   {
//     title: "Plant Care Tracker",
//     description:
//       "An eco-friendly plant care web app allowing users to add, manage, and purchase plants with Firebase authentication, MongoDB backend, and responsive UI.",
//     technologies: [
//       { name: "React" },
//       { name: "MongoDB" },
//       { name: "Express" },
//       { name: "Firebase" },
//       { name: "Tailwind CSS" },
//     ],
//     frontendRepo:
//       "https://github.com/mdtahsinislam/Treeplant-Care_client-site",
//     backendRepo:
//       "https://github.com/mdtahsinislam/TreeplantCare_serversite",
//     liveLink: "https://treeplant-care-app.web.app/",
//     imagePath: "/images/oAii.png",
//   },
// ];

// const Projects: React.FC = () => {
//   return (
//     <div className="pt-16 pb-16 bg-gray-900 text-white">
//       <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-cyan-500">
//         My Projects
//       </h1>

//       <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-10 mt-16">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
//           >
//             {/* <div className="relative w-full h-96 ">
//               <Image
//                 src={project.imagePath}
//                 alt={project.title}
//                 fill
//                 className="object-cover"
//               />
//             </div> */}

//             <div className="relative w-full aspect-[16/10] md:aspect-[16/9] lg:h-96">
//   <Image
//     src={project.imagePath}
//     alt={project.title}
//     fill
//     className="object-cover rounded-t-lg"
//     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
//     priority
//   />
// </div>


           


//             <div className="p-6">
//               <h1 className="text-2xl font-extrabold mb-3 border-b-2 border-cyan-500 inline-block pb-1">
//                 {project.title}
//               </h1>
//          <button className="btn btn-neutral ml-3.5"> View More</button> আমি চাই View More বাটন এ click করলে ঔ project এর বাকি topic গুলো show হবে
//               <p className="text-gray-300 mt-3 leading-relaxed text-sm">
//                 {project.description}
//               </p>

//               <div className="mt-4">
//                 <h2 className="text-lg font-semibold mb-2">Technologies:</h2>
//                 <div className="flex flex-wrap gap-2">
//                   {project.technologies.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-1 text-xs bg-gray-700 rounded-md border border-gray-600 shadow-sm"
//                     >
//                       {tech.name}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="mt-6 space-y-3">
//                 <div className="flex flex-wrap items-center gap-3">
//                   <p className="font-bold text-base">Frontend:</p>
//                   <a
//                     href={project.frontendRepo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-3 py-1 bg-black rounded-md hover:bg-gray-800 transition-all text-sm"
//                   >
//                     GitHub Repo
//                   </a>
//                   <a
//                     href={project.liveLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="underline text-sm hover:no-underline text-cyan-400"
//                   >
//                     Live Link
//                   </a>
//                 </div>

//                 <div className="flex flex-wrap items-center gap-3">
//                   <p className="font-bold text-base">Backend:</p>
//                   <a
//                     href={project.backendRepo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-3 py-1 bg-black rounded-md hover:bg-gray-800 transition-all text-sm"
//                   >
//                     GitHub Repo
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;



// import React, { useState } from "react"; // useState import করা হয়েছে
// import Image from "next/image";

// type Technology = { name: string };
// type Project = {
//   title: string;
//   description: string;
//   technologies: Technology[];
//   frontendRepo: string;
//   backendRepo: string;
//   liveLink: string;
//   imagePath: string;
// };

// const projects: Project[] = [
//   {
//     title: "PetAdouptPlatform",
//     description:
//       "A comprehensive pet adoption platform featuring user authentication, secure payments with Stripe, role-based access control, dynamic pet management, and responsive design.",
//     technologies: [
//       { name: "React" },
//       { name: "MongoDB" },
//       { name: "Stripe" },
//       { name: "Firebase" },
//       { name: "Tailwind CSS" },
//       { name: "React Table" },
//       { name: "React Router" },
//       { name: "JWT" },
//       { name: "Express" },
//     ],
//     frontendRepo: "https://github.com/mdtahsinislam/pet-adoupt-platfrom-client",
//     backendRepo: "https://github.com/mdtahsinislam/pet-adoupt-platfrom-serverr",
//     liveLink: "https://pet-adoupt-platfrom.web.app",
//     imagePath: "/images/oAiii.png",
//   },
//   {
//     title: "Restaurant Management",
//     description:
//       "I built a fully responsive Restaurant Management Platform using the MERN stack that enables smooth interaction between customers and restaurant staff. The platform provides a seamless experience for browsing, ordering, and managing food items while ensuring data security and scalability .",
//     technologies: [
//       { name: "React" },
//       { name: "MongoDB" },
//       { name: "Express" },
//       { name: "Firebase" },
//       { name: "Nodemailer" },
//       { name: "Tailwind CSS" },
//     ],
//     frontendRepo:
//       "https://github.com/mdtahsinislam/Resturent-management-clint-site",
//     backendRepo:
//       "https://github.com/mdtahsinislam/Resturent_management-server-site",
//     liveLink: "https://resturentmanagement-website.web.app/",
//     imagePath: "/images/oAi.png",
//   },
//   {
//     title: "Plant Care Tracker",
//     description:
//       "An eco-friendly plant care web app allowing users to add, manage, and purchase plants with Firebase authentication, MongoDB backend, and responsive UI.",
//     technologies: [
//       { name: "React" },
//       { name: "MongoDB" },
//       { name: "Express" },
//       { name: "Firebase" },
//       { name: "Tailwind CSS" },
//     ],
//     frontendRepo:
//       "https://github.com/mdtahsinislam/Treeplant-Care_client-site",
//     backendRepo:
//       "https://github.com/mdtahsinislam/TreeplantCare_serversite",
//     liveLink: "https://treeplant-care-app.web.app/",
//     imagePath: "/images/oAii.png",
//   },
// ];

// const Projects: React.FC = () => {
//   // প্রতিটি প্রজেক্টের জন্য তার ডিটেইলস দেখানো হবে কিনা তা ট্র্যাক করার জন্য স্টেট
//   const [showDetails, setShowDetails] = useState<number[]>([]);

//   // View More/View Less বাটন ক্লিক হ্যান্ডলার
//   const toggleDetails = (index: number) => {
//     if (showDetails.includes(index)) {
//       // যদি ডিটেইলস দেখানো থাকে, তাহলে লিস্ট থেকে ইন্ডেক্সটি সরিয়ে দিন (লুকান)
//       setShowDetails(showDetails.filter((i) => i !== index));
//     } else {
//       // যদি লুকানো থাকে, তাহলে লিস্টে ইন্ডেক্সটি যোগ করুন (দেখানো শুরু করুন)
//       setShowDetails([...showDetails, index]);
//     }
//   };

//   return (
//     <div className="pt-16 pb-16 bg-gray-900 text-white">
//       <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-cyan-500">
//         My Projects
//       </h1>

//       <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-10 mt-16">
//         {projects.map((project, index) => {
//           const isExpanded = showDetails.includes(index); // বর্তমান প্রজেক্টের স্টেট চেক করা
//           return (
//             <div
//               key={index}
//               className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
//             >
//               <div className="relative w-full aspect-[16/10] md:aspect-[16/9] lg:h-96">
//                 <Image
//                   src={project.imagePath}
//                   alt={project.title}
//                   fill
//                   className="object-cover rounded-t-lg"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
//                   priority
//                 />
//               </div>

//               <div className="p-6">
//                 <div className="flex items-center justify-between">
//                   <h1 className="text-2xl font-extrabold border-b-2 border-cyan-500 inline-block pb-1">
//                     {project.title}
//                   </h1>
//                   {/* বাটন এ ক্লিক করলে toggleDetails ফাংশন কল হবে */}
//                   <button
//                     onClick={() => toggleDetails(index)}
//                     className="px-4 py-2 bg-cyan-950 text-white rounded-md hover:bg-cyan-950 transition-colors duration-300 text-sm font-medium ml-3.5"
//                   >
//                     {isExpanded ? "View Less" : "View More"} {/* স্টেটের উপর ভিত্তি করে টেক্সট পরিবর্তন */}
//                   </button>
//                 </div>

//                 {/* isExpanded এর উপর ভিত্তি করে ডিটেইলস দেখানো বা লুকানো */}
//                 {isExpanded && (
//                   <>
//                     <p className="text-gray-300 mt-3 leading-relaxed text-sm">
//                       {project.description}
//                     </p>

//                     <div className="mt-4">
//                       <h2 className="text-lg font-semibold mb-2">Technologies:</h2>
//                       <div className="flex flex-wrap gap-2">
//                         {project.technologies.map((tech, i) => (
//                           <span
//                             key={i}
//                             className="px-3 py-1 text-xs bg-gray-700 rounded-md border border-gray-600 shadow-sm"
//                           >
//                             {tech.name}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="mt-6 space-y-3">
//                       <div className="flex flex-wrap items-center gap-3">
//                         <p className="font-bold text-base">Frontend:</p>
//                         <a
//                           href={project.frontendRepo}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="px-3 py-1 bg-black rounded-md hover:bg-gray-800 transition-all text-sm"
//                         >
//                           GitHub Repo
//                         </a>
//                         <a
//                           href={project.liveLink}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="underline text-sm hover:no-underline text-cyan-400"
//                         >
//                           Live Link
//                         </a>
//                       </div>

//                       <div className="flex flex-wrap items-center gap-3">
//                         <p className="font-bold text-base">Backend:</p>
//                         <a
//                           href={project.backendRepo}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="px-3 py-1 bg-black rounded-md hover:bg-gray-800 transition-all text-sm"
//                         >
//                           GitHub Repo
//                         </a>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React, { useState } from "react";
import Image from "next/image";

type Technology = { name: string };
type Project = {
  title: string;
  description: string;
  technologies: Technology[];
  frontendRepo: string;
  backendRepo: string;
  liveLink: string;
  imagePath: string;
};

const projects: Project[] = [
  {
    title: "PetAdouptPlatform",
    description:
      "A comprehensive full-stack MERN  pet adoption platform featuring user authentication, secure payments with Stripe, role-based access control, dynamic pet management, and responsive design.",
    technologies: [
      { name: "Reactjs" },
      { name: "Nodejs" },
      { name: "Expressjs" },
      { name: "MongoDB" },
      { name: "Stripe" },
      { name: "Firebase" },
      { name: "Tailwind CSS" },
      { name: "daiyUi" },
      { name: "React Router" },
      { name: "JWT" },
      { name: "vircel" },
      { name: "Git-Hub" },
    ],
    frontendRepo: "https://github.com/mdtahsinislam/pet-adoupt-platfrom-client",
    backendRepo: "https://github.com/mdtahsinislam/pet-adoupt-platfrom-serverr",
    liveLink: "https://pet-adoupt-platfrom.web.app",
    imagePath: "/images/project 1.png",
  },
  {
    title: "Restaurant Management",
    description:
      "I built a fully responsive Restaurant Management Platform using the MERN stack that enables smooth interaction between customers and restaurant staff. The platform provides a seamless experience for browsing, ordering, and managing food items while ensuring data security and scalability.",
    technologies: [
      { name: "Reactjs" },
      { name: "Nodejs" },
      { name: "MongoDB" },
      { name: "Expressjs" },
      { name: "Firebase" },
      { name: "Nodemailer" },
      { name: "Tailwind CSS" },
       { name: "Firebase" },
       { name: "daiyUi" },
      
      { name: "JWT" },
      { name: "vircel" },
      { name: "Git-Hub" },
    ],
    frontendRepo:
      "https://github.com/mdtahsinislam/Resturent-management-clint-site",
    backendRepo:
      "https://github.com/mdtahsinislam/Resturent_management-server-site",
    liveLink: "https://resturentmanagement-website.web.app/",
    imagePath: "/images/project 2.png",
  },
  {
    title: "Plant Care Tracker",
    description:
      "An eco-friendly plant care web app allowing users to add, manage, and purchase plants with Firebase authentication, MongoDB backend, and responsive UI.",
    technologies: [
      { name: "Reactjs" },
      { name: "Nodejs" },
      { name: "MongoDB" },
      { name: "Express" },
      { name: "Firebase" },
      { name: "Tailwind CSS" },
      { name: "daiyUi" },
      { name: "JWT" },
      { name: "JWT" },
      { name: "vircel" },
      { name: "Git-Hub" },
    ],
    frontendRepo:
      "https://github.com/mdtahsinislam/Treeplant-Care_client-site",
    backendRepo:
      "https://github.com/mdtahsinislam/TreeplantCare_serversite",
    liveLink: "https://treeplant-care-app.web.app/",
    imagePath: "/images/oAii.png",
  },
];

const Projects: React.FC = () => {
  // কোন প্রজেক্টগুলো এক্সপ্যান্ড হয়েছে, সেটা ট্র্যাক করবে
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);

  const handleViewMore = (index: number) => {
    if (!expandedProjects.includes(index)) {
      // কেবল একবারই এক্সপ্যান্ড হবে, আবার লুকাবে না
      setExpandedProjects([...expandedProjects, index]);
    }
  };

  return (
    <div className="pt-16 pb-16 bg-gray-900 text-white">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-cyan-500">
        My Projects
      </h1>

      <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-10 mt-16">
        {projects.map((project, index) => {
          const isExpanded = expandedProjects.includes(index);
          return (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative w-full aspect-[16/10] md:aspect-[16/9] lg:h-96">
                <Image
                  src={project.imagePath}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-extrabold border-b-2 border-cyan-500 inline-block pb-1">
                    {project.title}
                  </h1>

                  {!isExpanded && (
                    <button
                      onClick={() => handleViewMore(index)}
                      className="px-4 py-2 bg-cyan-950 text-white rounded-md hover:bg-cyan-900 transition-colors duration-300 text-sm font-medium ml-3.5"
                    >
                      View More
                    </button>
                  )}
                </div>

                {isExpanded && (
                  <div className="mt-5 transition-all duration-500 ease-in-out">
                    <p className="text-gray-300 mt-3 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    <div className="mt-4">
                      <h2 className="text-lg font-semibold mb-2">Technologies:</h2>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs bg-gray-700 rounded-md border border-gray-600 shadow-sm"
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="font-bold text-base">Frontend:</p>
                        <a
                          href={project.frontendRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-black rounded-md hover:bg-gray-800 transition-all text-sm"
                        >
                          GitHub Repo
                        </a>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-sm hover:no-underline text-cyan-400"
                        >
                          Live Link
                        </a>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <p className="font-bold text-base">Backend:</p>
                        <a
                          href={project.backendRepo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-black rounded-md hover:bg-gray-800 transition-all text-sm"
                        >
                          GitHub Repo
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
