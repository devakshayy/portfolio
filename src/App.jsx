import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";

function App() {
  return (
     <>
       <Navbar/>
       <Header/>
       <About/>
       <Experience/>
     </>
  );
}

export default App;

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