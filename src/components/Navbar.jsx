import { useState } from "react";
import MobNavLinks from "./MobNavLinks";
import { RiMoonFill,  RiSunLine } from "react-icons/ri";

const Navbar = ({dark,setDark}) => {
  const [open, setOpen] = useState(false);
 

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }

  const toggleNavbar = () => {
    setOpen(!open);
  };
  const closeNavbar = () => {
    setOpen(false)
  }

  return (
       <nav className="py-2 px-4 sticky top-0 z-30 bg-[#f5f5f7] border-b-2 dark:border-gray-600 dark:bg-gray-700  lg:py-2 lg:px-6 flex justify-between items-center dark:text-gray-100 ">
      <a href="/">
        <h1 className=" text-2xl lg:text-5xl font-bold">Akshay</h1>
      </a>
      <div className="flex items-center gap-4">
      <ul className="lg:flex hidden gap-6">
        <li>
          <a href="/" className="navlinks">
            HOME
          </a>
        </li>
        <li>
          <a href="#experience" className="navlinks">
            EXPERIENCES
          </a>
        </li>
        <li>
          <a href="#projects" className="navlinks">
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#contact" className="navlinks">
            CONTACT
          </a>
        </li>
      </ul>
      <div className="flex items-center gap-3">
      {dark ? (
          <button onClick={darkModeHandler} >
            <RiMoonFill className="w-6 h-6"/>
          </button>
      ) : (
        <button onClick={darkModeHandler} >
        <RiSunLine className="w-6 h-6 " />
        </button>
      )}
      {open ? (
        <button
        onClick={toggleNavbar}
        className="block lg:hidden hover:bg-gray-200 dark:hover:bg-gray-500 p-1 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
        </button>
      ) : (
        <button
          onClick={toggleNavbar}
          className="block lg:hidden hover:bg-gray-200 dark:hover:bg-gray-500 p-1 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      )}
      </div>
      </div>
     
      
     
      {open && <MobNavLinks closeNav={closeNavbar} />}
    </nav>
  );
};

export default Navbar;

// hover:underline decoration-black underline-offset-8
