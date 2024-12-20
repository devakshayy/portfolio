const Header = () => {
  return (
     <header className="grid grid-cols-1 p-6 lg:grid-cols-2">
        <div className="sm:py-4 py-3 lg:px-20 md:px-15 flex justify-center items-center">
          <img src="/myProfile1.png" alt="profile-pic" className="h-[200px] shadow-2xl sm:h-[500px] rounded-full" />
        </div>
        <div className="sm:p-10 flex justify-center items-center flex-col gap-3 sm:gap-5">
          <div className="sm:text-3xl text-lg font-bold text-gray-700">Hi I'm</div>
          <div className="sm:text-6xl text-2xl font-bold text-gray-900">Akshay,</div>
          <div className="sm:text-3xl text-lg font-bold text-gray-700">
            a Frontend Developer
          </div>
          <div className="flex gap-2  sm:gap-3">
            <a 
              href="/resume-example.pdf"
              download={"resume-example.pdf"}
              className="no-underline"
              >
              
            <button
              className="card-hover p-2 sm:p-3 rounded-full px-2 sm:px-6 hover:bg-gray-800
                             text-sm  sm:text-lg     hover:text-white transtition duration-300"
            >
              Download CV
            </button>
            </a>
            <a 
              href="#contact"
              >
            <button
              
              className="bg-gray-700 text-white hover:bg-gray-900
                            text-sm  sm:text-lg    px-3 sm:px-6 p-2 sm:p-3 rounded-full transition transform"
            >
              Contact Info
            </button>
            </a>
          </div>
          <div className="flex gap-4 mt-1">
            <a href="https://github.com/devakshayy">
              <img src="/github.png" alt="github" className="h-7 sm:h-10" />
            </a>
            <a href="https://www.linkedin.com/in/akshayparamasivan/">
              <img src="/linkedin.png" alt="linkedin" className="h-7 sm:h-10" />
            </a>
          </div>
        </div>
      </header>
  )
}

export default Header
