import React from "react";

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="flex-1 lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl mb-2 font-medium text-white">
                Mark Oka
                <p className="title-font sm:text-2xl font-medium text-white">Software Engineer</p>
              </h1>
              <p className="mb-8 leading-relaxed text-gray-300 text-left">
              I am a software engineer located in the New York City metropolitan area. 
              My software development skills are up-to-date with the latest standards and practices. 
              I possess proficiency in working independently or within a team environment.
              </p>
              <div className="flex-1 sm:flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="sm:ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
                <a
                  href="#person"
                  className="sm:ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  Learn More About Me
                </a>
                <a
                  href="./mark-oka-resume.pdf" target='_blank' rel='noreferrer'
                  className="sm:ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  Open My Resume
                </a>
              </div>
            </div>
            <div className="hidden lg:block lg:max-w-sm lg:w-full">
              <img
                className="w-2/3 h-1/2 float-right"
                alt="me"
                src="./pls.jpg"
              />
            </div>
          </div>
        </section>
      );
}