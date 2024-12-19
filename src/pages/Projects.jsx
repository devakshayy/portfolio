import React from 'react'

const Projects = () => {
  return (
      <div className=" p-5 sm:p-10 text-center">
        <div className="text-gray-500 text-sm sm:text-lg">Browse my recent</div>
        <div className="text-gray-900 text-4xl sm:text-5xl font-bold">Projects</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 py-6 gap-6 sm:gap-10">
          <div className="ring-1 rounded-3xl p-4 sm:p-5 flex flex-col justify-evenly gap-2 sm:gap-10 ">
            <img src="/project-1.png" alt="project-1" className="rounded-3xl" />
            <div className="text-gray-900 text-2xl sm:text-4xl font-bold">Project One</div>
            <div className="grid px-1 sm:px-0 gap-2 sm:gap-4 grid-cols-2 space-x-1">
              <button
                className="ring-1 rounded-2xl p-2 text-sm sm:text-xl hover:text-white
                            hover:bg-gray-800 transition "
              >
                Github
              </button>
              <button
                className="ring-1 rounded-2xl p-2 text-sm sm:text-xl hover:text-white
                            hover:bg-gray-800 transition "
              >
                Live Demo
              </button>
            </div>
          </div>

          <div className="ring-1 rounded-3xl p-4 sm:p-5 flex flex-col justify-evenly gap-2 sm:gap-10 ">
            <img src="/project-2.png" alt="project-2" className="rounded-3xl" />
            <div className="text-gray-900 text-2xl sm:text-4xl font-bold">Project Two</div>
            <div className="grid px-1 sm:px-0 gap-2 sm:gap-4 grid-cols-2 space-x-1">
              <button
                className="ring-1 rounded-2xl p-2 text-sm sm:text-xl hover:text-white
                            hover:bg-gray-800 transition "
              >
                Github
              </button>
              <button
                className="ring-1 rounded-2xl p-2 text-sm sm:text-xl hover:text-white
                            hover:bg-gray-800 transition "
              >
                Live Demo
              </button>
            </div>
          </div>


          <div className="ring-1 rounded-3xl p-4 sm:p-5 flex flex-col justify-evenly gap-2 sm:gap-10 ">
            <img src="/project-3.png" alt="project-3" className="rounded-3xl" />
            <div className="text-gray-900 text-2xl sm:text-4xl font-bold">Project Three</div>
            <div className="grid px-1 sm:px-0 gap-2 sm:gap-4 grid-cols-2 space-x-1">
              <button
                className="ring-1 rounded-2xl p-2 text-sm sm:text-xl hover:text-white
                            hover:bg-gray-800 transition "
              >
                Github
              </button>
              <button
                className="ring-1 rounded-2xl p-2 text-sm sm:text-xl hover:text-white
                            hover:bg-gray-800 transition "
              >
                Live Demo
              </button>
            </div>
          </div>

        </div>
        
      </div>
  )
}

export default Projects
