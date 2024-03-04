import React from "react";

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-15 md:flex-row flex-col items-center w-11/12 bg-gray-500 border-4 border-gray-300 border-opacity-75 my-4 rounded-xl">
            <div className="flex-1 lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center p-3">
              <h1 className="title-font text-3xl mb-2 font-medium text-white">
                Mark Oka
                <p className="text-lg font-medium text-white mt-1">Software Engineer</p>
              </h1>
              <p className="mb-6 leading-relaxed text-gray-200 text-left">
              I am a software engineer located in the New York City metropolitan area. 
              My software development skills are up-to-date with the latest standards and practices. 
              I possess proficiency in working independently or within a team environment.
              </p>
              <div className="flex flex-col md:flex-row lg:flex-row justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white justify-center bg-green-600 my-1 md:my-0.5 lg:my-0.5 md:mr-2 lg:mr-2 py-2 px-6 focus:outline-none border-2 border-transparent hover:border-slate-300 rounded-xl text-lg transition-all duration-300 ease-in-out">
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="inline-flex text-gray-400 justify-center bg-gray-800 my-1 md:my-0.5 lg:my-0.5 md:mr-2 lg:mr-2 py-2 px-6 focus:outline-none border-2 border-transparent hover:border-slate-300 hover:text-white rounded-xl text-lg transition-all duration-300 ease-in-out">
                  See Past Work
                </a>
                <a
                  href="#person"
                  className="inline-flex text-gray-400 justify-center bg-gray-800 my-1 md:my-0.5 lg:my-0.5 md:mr-2 lg:mr-2 py-2 px-6 focus:outline-none border-2 border-transparent hover:border-slate-300 hover:text-white rounded-xl text-lg transition-all duration-300 ease-in-out">
                  Learn About Me
                </a>
                <a
                  href="./mark-oka-resume.pdf" target='_blank' rel='noreferrer'
                  className="inline-flex text-gray-400 justify-center bg-gray-800 my-1 md:my-0.5 lg:my-0.5 md:mr-2 lg:mr-2 py-2 px-6 focus:outline-none border-2 border-transparent hover:border-slate-300 hover:text-white rounded-xl text-lg transition-all duration-300 ease-in-out">
                  Open My Resume
                </a>
              </div>
            </div>
            <div className="hidden lg:block lg:max-w-md lg:w-full my-1  p-5">
              <img
                className="w-2/3 h-1/2 float-right border-4 border-opacity-70 border-gray-600 "
                alt="me"
                src="./pls.jpg"
              />
            </div>
          </div>
        </section>
      );
}