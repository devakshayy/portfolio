import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

function App() {
  return (
     <>
       <Navbar/>
       <Header/>
       <About/>
       <Experience/>
       <Projects/>
     </>
  );
}

export default App;


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