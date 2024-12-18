import Navbar from "./components/Navbar";

function App() {
  return (
     <>
       <Navbar/>
     </>
  );
}

export default App;


// <>
//       {/* Navbar */}
//       <nav className="p-10 flex justify-between items center">
//         <h1 className=" text-xl sm:text-5xl font-bold">Akshay</h1>
//         <ul className="hidden md:block md:gap-20">
//           <a href="#" className="text-2xl transition hover:text-red-700">
//             HOME
//           </a>
//           <a href="#" className="text-2xl transition hover:text-red-700">
//             EXPERIENCE
//           </a>
//           <a href="#" className="text-2xl transition hover:text-red-700">
//             PROJECTS
//           </a>
//           <a href="#" className="text-2xl transition hover:text-red-700">
//             CONTACT
//           </a>
//         </ul>
//         <button className="block sm:hidden hover:bg-gray-100 p-1 rounded-full">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             class="size-6"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//             />
//           </svg>
//         </button>
//       </nav>
//       {/* Navbar */}

//       {/* Header */}
//       <header className="grid grid-cols-2">
//         <div className="p-32 flex justify-center items-center">
//           <img src="/profile-pic.png" alt="profile-pic" className="" />
//         </div>
//         <div className="p-10 flex justify-center items-center flex-col gap-5">
//           <div className="text-3xl font-bold text-gray-700">Hi I'm</div>
//           <div className="text-6xl font-bold text-gray-900">Akshay,</div>
//           <div className="text-3xl font-bold text-gray-700">
//             a Frontend Developer
//           </div>
//           <div className="flex gap-3">
//             <button
//               className="ring-1 p-3 rounded-full px-6 hover:bg-gray-800
//                                     hover:text-white transtition duration-300"
//             >
//               Download CV
//             </button>
//             <button
//               className="bg-gray-700 text-white hover:bg-gray-900
//                                     p-3 rounded-full px-6 transition transform"
//             >
//               Contact Info
//             </button>
//           </div>
//           <div className="flex gap-2">
//             <img src="/github.png" alt="github" className="h-10" />
//             <img src="/linkedin.png" alt="linkedin" className="h-10" />
//           </div>
//         </div>
//       </header>
//       {/* Header */}

//       {/* About */}
//       <div className="about p-32  text-center " id="about">
//         <div className="text-gray-500 text-lg">Get to know</div>
//         <div className="text-gray-900 text-5xl text-bold">About Me</div>
//         <div className="flex justify-start items-center gap-10">
//           <img
//             src="/about-pic.png"
//             alt="about"
//             className="h-[400px] rounded-3xl"
//           />
//           <div className="py-10 flex flex-col gap-10">
//             <div className="grid grid-col-2 gap-5">
//               <div className="ring-1 rounded-lg p-10 flex flex-col gap-3 justify-center items-center">
//                 <img src="/education.png" alt="education" className="h-20" />
//                 <div className="text-3xl font-bold text-gray-900">
//                   Education
//                 </div>
//                 <div className="text-xl font-semibold text-gray-600">
//                   3 Years Diploma
//                 </div>
//                 <div className="text-md text-gray-500">
//                   Frontend Development
//                 </div>
//               </div>
//               <div className="ring-1 rounded-lg p-10 flex flex-col gap-3 justify-center items-center">
//                 <img src="/experience.png" alt="education" className="h-20" />
//                 <div className="text-3xl font-bold text-gray-900">
//                   Experience
//                 </div>
//                 <div className="text-xl font-semibold text-gray-600">
//                   3 Years +
//                 </div>
//                 <div className="text-md text-gray-600">
//                   Frontend Development
//                 </div>
//               </div>
//             </div>
//             <div className="text text-start text-2xl text-gray-600">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Asperiores illo modi error ad rerum voluptatibus quae enim hic
//               voluptates expedita.
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* About */}

//       {/* Experiences */}
//       <div className="experience text-center p-32 gap-10 " id="experience">
//         <div className="text-gray-500 text-lg">Know My</div>
//         <div className="text-gray-900 text-5xl font-bold">Experience</div>
//         <div className="grid grid-cols-2 space-x-10 py-10">
//           <div className="ring-1 p-10 rounded-3xl">
//             <div className="text-gray-900 text-3xl font-bold">
//               Frontend Development
//             </div>
//             <div className="grid grid-cols-3 py-10">
//               <div className="flex p-5">
//                 <img src="/checkmark.png" alt="checkmark" className="h-20" />
//                 <div className="flex flex-col justify-center items-start">
//                   <div className="text-gray-900 text-2xl font-bold ">HTML</div>
//                   <div className="text-gray-600 text-xl font-semibold">
//                     Experience
//                   </div>
//                 </div>
//               </div>
//               <div className="flex p-5">
//                 <img src="/checkmark.png" alt="checkmark" className="h-20" />
//                 <div className="flex flex-col justify-center items-start">
//                   <div className="text-gray-900 text-2xl font-bold ">CSS</div>
//                   <div className="text-gray-600 text-xl font-semibold">
//                     Experience
//                   </div>
//                 </div>
//               </div>
//               <div className="flex p-5">
//                 <img src="/checkmark.png" alt="checkmark" className="h-20" />
//                 <div className="flex flex-col justify-center items-start">
//                   <div className="text-gray-900 text-2xl font-bold ">
//                     JAVASCRIPT
//                   </div>
//                   <div className="text-gray-600 text-xl font-semibold">
//                     Experience
//                   </div>
//                 </div>
//               </div>
//               <div className="flex p-5">
//                 <img src="/checkmark.png" alt="checkmark" className="h-20" />
//                 <div className="flex flex-col justify-center items-start">
//                   <div className="text-gray-900 text-2xl font-bold ">
//                     REACT JS
//                   </div>
//                   <div className="text-gray-600 text-xl font-semibold">
//                     Intermediat
//                   </div>
//                 </div>
//               </div>
//               <div className="flex p-5">
//                 <img src="/checkmark.png" alt="checkmark" className="h-20" />
//                 <div className="flex flex-col justify-center items-start">
//                   <div className="text-gray-900 text-2xl font-bold ">
//                     NEXT JS
//                   </div>
//                   <div className="text-gray-600 text-xl font-semibold">
//                     Intermediate
//                   </div>
//                 </div>
//               </div>
//               <div className="flex p-5">
//                 <img src="/checkmark.png" alt="checkmark" className="h-20" />
//                 <div className="flex flex-col justify-center items-start">
//                   <div className="text-gray-900 text-2xl font-bold ">
//                     WORDPRESS
//                   </div>
//                   <div className="text-gray-600 text-xl font-semibold">
//                     Experience
//                   </div>
//                 </div>
//               </div>
//               <div className="flex p-5">
//                 <img src="/checkmark.png" alt="checkmark" className="h-20" />
//                 <div className="flex flex-col justify-center items-start">
//                   <div className="text-gray-900 text-2xl font-bold ">C++</div>
//                   <div className="text-gray-600 text-xl font-semibold">
//                     Intermediate
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="ring-1 p-10 rounded-3xl">
//             <div className="text-gray-900 text-3xl font-bold">
//               Backend Development
//             </div>
//             <div className="grid grid-cols-3 py-10">
//               <div className="flex p-5">
//                 <img src="/checkmark.png" alt="checkmark" className="h-20" />
//                 <div className="flex flex-col justify-center items-start">
//                   <div className="text-gray-900 text-2xl font-bold ">
//                     MongoDB
//                   </div>
//                   <div className="text-gray-600 text-xl font-semibold">
//                     Experience
//                   </div>
//                 </div>
//               </div>
//               <div className="flex p-5">
//                 <img src="/checkmark.png" alt="checkmark" className="h-20" />
//                 <div className="flex flex-col justify-center items-start">
//                   <div className="text-gray-900 text-2xl font-bold ">
//                     EXPRESS JS
//                   </div>
//                   <div className="text-gray-600 text-xl font-semibold">
//                     Experience
//                   </div>
//                 </div>
//               </div>
//               <div className="flex p-5">
//                 <img src="/checkmark.png" alt="checkmark" className="h-20" />
//                 <div className="flex flex-col justify-center items-start">
//                   <div className="text-gray-900 text-2xl font-bold ">JSON</div>
//                   <div className="text-gray-600 text-xl font-semibold">
//                     Experience
//                   </div>
//                 </div>
//               </div>
//               <div className="flex p-5">
//                 <img src="/checkmark.png" alt="checkmark" className="h-20" />
//                 <div className="flex flex-col justify-center items-start">
//                   <div className="text-gray-900 text-2xl font-bold ">SQL</div>
//                   <div className="text-gray-600 text-xl font-semibold">
//                     Intermediat
//                   </div>
//                 </div>
//               </div>
//               <div className="flex p-5">
//                 <img src="/checkmark.png" alt="checkmark" className="h-20" />
//                 <div className="flex flex-col justify-center items-start">
//                   <div className="text-gray-900 text-2xl font-bold ">
//                     LARRAVEL
//                   </div>
//                   <div className="text-gray-600 text-xl font-semibold">
//                     Intermediate
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Experiences */}

//       {/* Projects */}
//       <div className="p-32 text-center">
//         <div className="text-gray-500 text-lg">Browse my recent</div>
//         <div className="text-gray-900 text-5xl font-bold">Projects</div>
//         <div className="grid grid-cols-3 py-10 gap-10">
//           <div className="ring-1 rounded-3xl p-10 flex gap-10 flex-col">
//             <img src="/project-1.png" alt="project-1" className="rounded-3xl" />
//             <div className="text-gray-900 text-4xl font-bold">Project One</div>
//             <div className="grid px-10 grid-cols-2 space-x-5">
//               <button
//                 className="ring-1 rounded-full p-4 text-xl hover:text-white
//                             hover:bg-gray-800 transition "
//               >
//                 Github
//               </button>
//               <button
//                 className="ring-1 rounded-full p-4 text-xl hover:text-white
//                             hover:bg-gray-800 transition "
//               >
//                 Live Demo
//               </button>
//             </div>
//           </div>

//           <div className="ring-1 rounded-3xl p-10 flex gap-10 flex-col">
//             <img src="/project-2.png" alt="project-2" className="rounded-3xl" />
//             <div className="text-gray-900 text-4xl font-bold">Project Two</div>
//             <div className="grid px-10 grid-cols-2 space-x-5">
//               <button
//                 className="ring-1 rounded-full p-4 text-xl hover:text-white
//                             hover:bg-gray-800 transition "
//               >
//                 Github
//               </button>
//               <button
//                 className="ring-1 rounded-full p-4 text-xl hover:text-white
//                             hover:bg-gray-800 transition "
//               >
//                 Live Demo
//               </button>
//             </div>
//           </div>

//           <div className="ring-1 rounded-3xl p-10 flex gap-10 flex-col">
//             <img src="/project-3.png" alt="project-3" className="rounded-3xl" />
//             <div className="text-gray-900 text-4xl font-bold">
//               Project Three
//             </div>
//             <div className="grid px-10 grid-cols-2 space-x-5">
//               <button
//                 className="ring-1 rounded-full p-4 text-xl hover:text-white
//                             hover:bg-gray-800 transition "
//               >
//                 Github
//               </button>
//               <button
//                 className="ring-1 rounded-full p-4 text-xl hover:text-white
//                             hover:bg-gray-800 transition "
//               >
//                 Live Demo
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Projects */}

//       {/* Contact Us */}

//       <div className="about p-32 pb-0 text-center">
//         <div className="text-gray-500 text-lg">to</div>
//         <div className="text-gray-900 text-5xl font-bold">Contact</div>
//         <div className="flex justify-center items-center p-10">
//           <div className="ring-1 rounded-3xl p-10 flex gap-5 bg-gray-100">
//             <div className="flex">
//               <img src="/email.png" alt="email" className="h-10" />
//               <div className="text-3xl text-semi-bold hover:text-red-700 transition">
//                 example@gmail.com
//               </div>
//             </div>
//             <div className="flex">
//               <img src="/email.png" alt="email" className="h-10" />
//               <div className="text-3xl text-semi-bold hover:text-red-700 transition">
//                 linkedin.com
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="text-xl text-gray-600 p-10 pb-20">
//           Copyright <b>©</b> {new Date().getFullYear()} Akshay. All Rights
//           Reserved
//         </div>
//       </div>

//       {/* Contact Us */}
// </>