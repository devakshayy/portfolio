const Navbar = () => {
  return (
       <nav className="p-4 lg:p-6 flex justify-between items-center ">
       <h1 className=" text-xl lg:text-5xl font-bold">Akshay</h1>
       <ul className="lg:flex hidden gap-6">
         <a href="" className="text-xl transition hover:text-red-700">HOME</a>
         <a href="" className="text-xl transition hover:text-red-700">EXPERIENCES</a>
         <a href="" className="text-xl transition hover:text-red-700">PROJECTS</a>
         <a href="" className="text-xl transition hover:text-red-700">CONTACT</a>
       </ul>
       <button className="block lg:hidden hover:bg-gray-100 p-1 rounded-full">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
         </svg>
   
       </button>
     </nav>
  )
}

export default Navbar
