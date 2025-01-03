const About = () => {
  return (
    <div className="about pt-28 px-8 lg:px-10 lg:pt-10  text-center" id="about">
      <div className="text-gray-500 dark:text-gray-400 text-sm sm:text-lg">
        Get to know
      </div>
      <div className="text-gray-900 text-2xl sm:text-5xl pb-4 font-bold dark:text-gray-200">
        About Me
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-start lg:items-center gap-5 lg:gap-10 py-2">
        {/* <img src="/about-pic.png" className="lg:h-[400px] rounded-3xl" /> */}
        <div className=" py-10 flex flex-col gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className=" card-hover dark:bg-gray-300 rounded-3xl p-10 flex flex-col gap-3 justify-center items-center">
              <img src="/education.png" className="h-16 sm:h-20" />
              <div className="text-3xl font-bold text-gray-900">Education</div>
              <div className="text-xl font-semibold text-gray-600">
                3 Years Diploma
              </div>
              <div className="text-md font-semibold text-gray-600">
                Electronics Engineering
              </div>
            </div>
            <div className="card-hover dark:bg-gray-300 rounded-3xl p-10 flex flex-col gap-3 justify-center items-center">
              <img src="/experience.png" className="h-16 sm:h-20" />
              <div className="text-3xl font-bold text-gray-900">Experience</div>
              <div className="text-xl font-semibold text-gray-600">
                1 Years +
              </div>
              <div className="text-md font-semibold text-gray-600">
                Frontend Development
              </div>
            </div>
          </div>
          <div className="text sm:text-start text-2xl text-center text-gray-600 dark:text-gray-200">
          I'm a challenger by heart and builder by nature.
          Over the years I have spent time converting designs into pixel-perfect, performant, accessible, and
          responsive applications/websites. You can simply describe me as a front end developer addict.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
