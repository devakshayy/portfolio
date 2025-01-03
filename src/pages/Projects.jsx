import React from "react";

const Projects = () => {
  return (
    <div className=" p-8 sm:p-10 text-center" id="projects">
      <div className="text-gray-500 text-sm sm:text-lg dark:text-gray-400">
        Browse my recent
      </div>
      <div className="text-gray-900 text-4xl sm:text-5xl dark:text-gray-200 font-bold">
        Projects
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 py-6 gap-6 sm:gap-10">
        <div className="card-hover dark:bg-gray-300 rounded-3xl p-4 sm:p-5 flex flex-col justify-evenly gap-2 sm:gap-10 ">
          <img src="/bitz.png" alt="project-1" className="rounded-2xl ring-1" />
          <div className="text-gray-900 text-2xl sm:text-4xl font-bold">
            Project One
          </div>
          <div className="grid px-1 sm:px-0 gap-2 sm:gap-4 grid-cols-2 space-x-1">
            <a  className="project-btn" href="https://github.com/devakshayy/TheBit"><button >Github</button></a>
            <a  className="project-btn" href="https://the-bit-two.vercel.app/"> <button >Live Demo</button></a>
          </div>
        </div>

        <div className="card-hover dark:bg-gray-300 rounded-3xl p-4 sm:p-5 flex flex-col justify-evenly gap-2 sm:gap-10 ">
          <img src="/Zoho.png" alt="project-2" className="rounded-2xl ring-1" />
          <div className="text-gray-900 text-2xl sm:text-4xl font-bold">
            Project Two
          </div>
          <div className="grid px-1 sm:px-0 gap-2 sm:gap-4 grid-cols-2 space-x-1">
          <a className="project-btn" href="https://github.com/devakshayy/Zoho_Clone"><button >Github</button></a>
          <a className="project-btn" href="#"> <button >Live Demo</button></a>
          </div>
        </div>

        <div className="card-hover dark:bg-gray-300 rounded-3xl p-4 sm:p-5 flex flex-col justify-evenly gap-2 sm:gap-10 ">
          <img src="/ycdirectory.png" alt="project-3" className="rounded-2xl ring-1" />
          <div className="text-gray-900 text-2xl sm:text-4xl font-bold">
            Project Three
          </div>
          <div className="grid px-1 sm:px-0 gap-2 sm:gap-4 grid-cols-2 space-x-1">
          <a  className="project-btn" href="https://github.com/devakshayy/Startup_pitch_app"><button >Github</button></a>
          <a  className="project-btn" href="https://startup-pitch-app.vercel.app/"> <button >Live Demo</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Projects;
