import { useState } from "react";
import MobNavLinks from "./MobNavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };
  console.log("The toggle is now"+open);

  const closeNavbar = () => {
    setOpen(false)
  }
  console.log("The navbar is now"+open);

  return (
    <nav className="p-4 lg:p-6 flex justify-between items-center z-0 ">
      <a href="/">
        <h1 className=" text-2xl lg:text-5xl font-bold">Akshay</h1>
      </a>
      <ul className="lg:flex hidden gap-6">
        <a href="/" className="text-xl  transition  hover:text-red-700">
          HOME
        </a>
        <a href="#experience" className="text-xl transition hover:text-red-700">
          EXPERIENCES
        </a>
        <a href="#projects" className="text-xl transition hover:text-red-700">
          PROJECTS
        </a>
        <a href="#contact" className="text-xl transition hover:text-red-700">
          CONTACT
        </a>
      </ul>
      {open ? (
        <button
        onClick={toggleNavbar}
        className="block lg:hidden hover:bg-gray-100 p-1 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
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
          className="block lg:hidden hover:bg-gray-100 p-1 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      )}

      {open && <MobNavLinks closeNav={closeNavbar} />}
    </nav>
  );
};

export default Navbar;

// hover:underline decoration-black underline-offset-8
