const Experience = () => {
  return (
    <div
      className="experience text-center p-8 lg:p-10 gap-5 lg:gap-10 "
      id="experience"
    >
      <div className="text-gray-500 dark:text-gray-400 text-lg">Explore My</div>
      <div className="text-gray-900  text-3xl sm:text-5xl dark:text-gray-200 font-bold">
        Experience
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 space-y-10 lg:space-y-0 lg:space-x-10 py-10">
        <div className="card-hover dark:bg-gray-300 p-1 py-4 sm:p-10 sm:py-18 rounded-3xl  ">
          <div className="text-gray-900 text-2xl sm:text-3xl mb-4 font-bold">
            Frontend Development
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-center lg:gap-2 items-center">
            <div className="flex justify-between  items-center gap-3 p-5">
              <div className="flex flex-col justify-center items-center">
                <img src="/checkmark.png" className="h-10" />
                <div className="text-gray-900 text-sm font-bold">HTML</div>
                <div className="text-gray-500 text-xs  sm:text-sm font-semibold">
                  Experienced
                </div>
              </div>
            </div>
            <div className="flex justify-between  items-center gap-3 p-5">
              <div className="flex flex-col justify-center items-center">
                <img src="/checkmark.png" className="h-10" />
                <div className="text-gray-900 text-sm  font-bold">CSS</div>
                <div className="text-gray-500 text-xs  sm:text-sm font-semibold">
                  Experienced
                </div>
              </div>
            </div>
            <div className="flex justify-between  items-center gap-3 p-5">
              <div className="flex flex-col justify-center items-center">
                <img src="/checkmark.png" className="h-10" />
                <div className="text-gray-900 text-sm  font-bold">
                  JAVASCRIPT
                </div>
                <div className="text-gray-500 text-xs  sm:text-sm font-semibold">
                  Basic
                </div>
              </div>
            </div>
            <div className="flex justify-between  items-center gap-3 p-5">
              <div className="flex flex-col justify-center items-center">
                <img src="/checkmark.png" className="h-10" />
                <div className="text-gray-900 text-sm  font-bold">REACT JS</div>
                <div className="text-gray-500 text-xs  sm:text-sm  font-semibold">
                  Intermediate
                </div>
              </div>
            </div>
            <div className="flex justify-between  items-center gap-3 p-5">
              <div className="flex flex-col justify-center items-center">
                <img src="/checkmark.png" className="h-10" />
                <div className="text-gray-900 text-sm  font-bold">NEXT JS</div>
                <div className="text-gray-500 text-xs  sm:text-sm font-semibold">
                  Intermediate
                </div>
              </div>
            </div>
            <div className="flex justify-between  items-center gap-3 p-5">
              <div className="flex flex-col justify-center items-center">
                <img src="/checkmark.png" className="h-10" />
                <div className="text-gray-900 text-sm  font-bold">
                  TYPESCRIPT
                </div>
                <div className="text-gray-500 text-xs  sm:text-sm  font-semibold">
                  Basic
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-hover dark:bg-gray-300 p-1 py-4 sm:p-10 sm:py-18 rounded-3xl  ">
          <div className="text-gray-900 text-2xl sm:text-3xl mb-4 font-bold">
            Backend Development
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-center lg:gap-2 items-center">
            {/* <div className="flex justify-between  items-center gap-3 p-5">
              <div className="flex flex-col justify-center items-center">
                <img src="/checkmark.png" className="h-10" />
                <div className="text-gray-900 text-sm  font-bold">
                  POSTGRESQL
                </div>
                <div className="text-gray-500 text-xs  sm:text-sm font-semibold">
                  Basic
                </div>
              </div>
            </div> */}
            <div className="flex justify-between  items-center gap-3 p-5">
              <div className="flex flex-col justify-center items-center">
                <img src="/checkmark.png" className="h-10" />
                <div className="text-gray-900 text-sm  font-bold">JSON</div>
                <div className="text-gray-500 text-xs  sm:text-sm  font-semibold">
                  Intermediate
                </div>
              </div>
            </div>
            <div className="flex justify-between  items-center gap-3 p-5">
              <div className="flex flex-col justify-center items-center">
                <img src="/checkmark.png" className="h-10" />
                <div className="text-gray-900 text-sm font-bold">GIT</div>
                <div className="text-gray-500 text-xs  sm:text-sm font-semibold">
                  Intermediate
                </div>
              </div>
            </div>
            <div className="flex justify-between  items-center gap-3 p-5">
              <div className="flex flex-col justify-center items-center">
                <img src="/checkmark.png" className="h-10" />
                <div className="text-gray-900 text-sm  font-bold">NODE JS</div>
                <div className="text-gray-500 text-xs  sm:text-sm  font-semibold">
                  Intermediate
                </div>
              </div>
            </div>
            <div className="flex justify-between  items-center gap-3 p-5">
              <div className="flex flex-col justify-center items-center">
                <img src="/checkmark.png" className="h-10" />
                <div className="text-gray-900 text-sm  font-bold">MONGO DB</div>
                <div className="text-gray-500 text-xs  sm:text-sm font-semibold">
                  Intermediate
                </div>
              </div>
            </div>
            <div className="flex justify-between  items-center gap-3 p-5">
              <div className="flex flex-col justify-center items-center">
                <img src="/checkmark.png" className="h-10" />
                <div className="text-gray-900 text-sm font-bold">
                  EXPRESS JS
                </div>
                <div className="text-gray-500 text-xs  sm:text-sm  font-semibold">
                  Intermediate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
