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

 


import React from "react";
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
      "A comprehensive pet adoption platform featuring user authentication, secure payments with Stripe, role-based access control, dynamic pet management, and responsive design.",
    technologies: [
      { name: "React" },
      { name: "MongoDB" },
      { name: "Stripe" },
      { name: "Firebase" },
      { name: "Tailwind CSS" },
      { name: "React Table" },
      { name: "React Router" },
      { name: "JWT" },
      { name: "Express" },
    ],
    frontendRepo: "https://github.com/mdtahsinislam/pet-adoupt-platfrom-client",
    backendRepo: "https://github.com/mdtahsinislam/pet-adoupt-platfrom-serverr",
    liveLink: "https://pet-adoupt-platfrom.web.app",
    imagePath: "/images/oAiii.png",
  },
  {
    title: "Restaurant Management",
    description:
      "A full-stack restaurant management platform with admin, user, and staff roles, Stripe-based payments, Firebase authentication, and dynamic menu & order handling.",
    technologies: [
      { name: "React" },
      { name: "MongoDB" },
      { name: "Express" },
      { name: "Firebase" },
      { name: "Stripe" },
      { name: "Tailwind CSS" },
    ],
    frontendRepo:
      "https://github.com/mdtahsinislam/Resturent-management-clint-site",
    backendRepo:
      "https://github.com/mdtahsinislam/Resturent_management-server-site",
    liveLink: "https://resturentmanagement-website.web.app/",
    imagePath: "/images/oAi.png", 
  },
  {
    title: "TreePlant Care App",
    description:
      "An eco-friendly plant care web app allowing users to add, manage, and purchase plants with Firebase authentication, MongoDB backend, and responsive UI.",
    technologies: [
      { name: "React" },
      { name: "MongoDB" },
      { name: "Express" },
      { name: "Firebase" },
      { name: "Tailwind CSS" },
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
  return (
    <div className="pt-16 pb-16 bg-gray-900 text-white">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-cyan-500">
        My Projects
      </h1>

      <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-10 mt-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* <div className="relative w-full h-96 ">
              <Image
                src={project.imagePath}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div> */}

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
              <h1 className="text-2xl font-extrabold mb-3 border-b-2 border-cyan-500 inline-block pb-1">
                {project.title}
              </h1>

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
