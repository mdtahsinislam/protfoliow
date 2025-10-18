// import React from 'react'

// const Contact = () => {
//   return (
//     <div className='pt-16 pb-16'> 

//         <div className='w-[90%] md-[80%]  lg:w-[70%] mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            
//   {/* text */}
//          <div>
//             <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white'>Contact Me</h1>
//          </div>


//         </div>
//     </div>
//   )
// }

// export default Contact

// import React from 'react';

// const Contact = () => {
//   return (
//     <div className="pt-16 pb-16 bg-gray-900 text-white">
//       <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
//         {/* ---- Left Text Section ---- */}
//         <div>
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-400 mb-6">
//             Contact Me
//           </h1>
//           <p className="text-gray-300 text-base leading-relaxed">
//             Feel free to reach out for collaborations, project discussions, or just to say hi!  
//             I’ll get back to you as soon as possible.
//           </p>

//           <div className="mt-6 space-y-2">
//             <p><span className="font-semibold text-cyan-400">Email:</span> +880 1610245487</p>add feature user click user go to What's app me
//             <p><span className="font-semibold text-cyan-400">Phone:</span> mdtahsinislam@gmail.com</p> add feature user click user go to gmail me
//             <p><span className="font-semibold text-cyan-400">Location:</span> Chattogram, Bangladesh</p>
//           </div>
//         </div>

//         {/* ---- Right Contact Form ---- */}
//         <div className="bg-gray-800 rounded-xl shadow-lg p-8">
//           <form className="flex flex-col space-y-5">
//             <div>
//               <label className="block text-sm font-semibold mb-2">Name</label>
//               <input
//                 type="text"
//                 placeholder="Your name"
//                 className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-400"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold mb-2">Email</label>
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-400"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold mb-2">Message</label>
//               <textarea
//                 placeholder="Your message..."
//                 rows="5"
//                 className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-400 resize-none"
//                 required
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="bg-cyan-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-cyan-600 transition-all"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

//raf
// import React from 'react';
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // ✅ Added icons

// const Contact = () => {
//   return (
//     <div className="pt-16 pb-16 bg-gray-900 text-white">
//       <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
//         {/* ---- Left Text Section ---- */}
//         <div>
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-400 mb-6">
//             Contact Me
//           </h1>
//           <p className="text-gray-300 text-base leading-relaxed">
//             Feel free to reach out for collaborations, project discussions, or just to say hi!  
//             I’ll get back to you as soon as possible.
//           </p>

//           <div className="mt-6 space-y-2">
//             {/* WhatsApp Click */}
//             <p>
//               <span className="font-semibold text-cyan-400">WhatsApp:</span>{' '}
//               <a
//                 href="https://wa.me/8801610245487"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-cyan-400 underline"
//               >
//                 +880 1610-245487
//               </a>
//             </p>

//             {/* Gmail Click */}
//             <p>
//               <span className="font-semibold text-cyan-400">Email:</span>{' '}
//               <a
//                 href="mailto:mdtahsinislam334@gmail.com"
//                 className="text-gray-300 hover:text-cyan-400 underline"
//               >
//                 mdtahsinislam334@gmail.com
//               </a>
//             </p>

//             <p>
//               <span className="font-semibold text-cyan-400">Location:</span> Chattogram, Bangladesh
//             </p>

//             {/* --- Social Icons --- */}
//             <div className="flex items-center gap-6 mt-6">
//               {/* GitHub */}
//               <a
//                 href="https://github.com/mdtahsinislam"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-cyan-400 text-3xl transition-all duration-300"
//               >
//                 <FaGithub />
//               </a>

//               {/* LinkedIn */}
//               <a
//                 href="https://www.linkedin.com/in/mdtahsinislam/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-cyan-400 text-3xl transition-all duration-300"
//               >
//                 <FaLinkedin />
//               </a>

//               {/* Gmail */}
//               <a
//                 href="mailto:mdtahsinislam334@gmail.com"
//                 className="text-gray-300 hover:text-cyan-400 text-3xl transition-all duration-300"
//               >
//                 <FaEnvelope />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* ---- Right Contact Form ---- */}
//         <div className="bg-gray-800 rounded-xl shadow-lg p-8">
//           <form className="flex flex-col space-y-5">
//             <div>
//               <label className="block text-sm font-semibold mb-2">Name</label>
//               <input
//                 type="text"
//                 placeholder="Your name"
//                 className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-400"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold mb-2">Email</label>
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-400"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold mb-2">Message</label>
//               <textarea
//                 placeholder="Your message..."
//                 rows={5}
//                 className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:border-cyan-400 resize-none"
//                 required
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="bg-cyan-900 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-800 transition-all"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// // npm install mongodb

// //mongodb+srv://<db_username>:<db_password>@cluster0.c2yujfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


'use client';
import React, { useState } from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess('✅ Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setSuccess('❌ Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setSuccess('⚠️ Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16 pb-16 bg-gray-900 text-white">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left text (same as before) */}
        <div>
          <h1 className="text-4xl font-bold text-cyan-400 mb-6">Contact Me</h1>
          <p className="text-gray-300">
            Feel free to reach out for collaborations or just to say hi!
          </p>
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

        {/* Right form */}
        <div className="bg-gray-800 rounded-xl p-8">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <input
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-cyan-400"
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-cyan-400"
            />
            <textarea
              name="message"
              placeholder="Your message..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-cyan-400 resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-cyan-900 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-800 transition-all"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {success && <p className="mt-4 text-center text-cyan-400">{success}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
