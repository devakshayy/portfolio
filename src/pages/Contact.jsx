import React from "react";

const Contact = () => {
  return (
    <div className="about sm:p-10 p-5 text-center">
      <div className="text-gray-500 text-lg">to</div>
      <div className="text-gray-900  text-3xl sm:text-5xl font-bold">
        Contact
      </div>
      <div className="flex justify-center items-center p-10">
        <div className="ring-1 rounded-3xl py-12 pr-6 pl-2 sm:p-10 grid gap-8 bg-gray-100">
          <div className="flex sm:gap-1 items-center">
            <img src="/email.png" alt="email" className="h-5 sm:h-10" />
            <div className="text-sm sm:text-3xl mr-2 font-semibold hover:text-red-700 transition">
              <h1>devakshay916@gmail.com</h1>
            </div>
          </div>
          <div className="flex sm:gap-1 items-center">
            <img src="/email.png" alt="email" className="h-5 sm:h-10" />
            <div className="text-sm sm:text-3xl font-semibold hover:text-red-700 transition">
              <h1>linkedin</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xl text-gray-600 p-10 pb-20">
        Copyright <b>©</b> <span className="hover:text-gray-400">{new Date().getFullYear()} Akshay</span> . All Rights
        Reserved
      </div>
    </div>
  );
};

export default Contact;
