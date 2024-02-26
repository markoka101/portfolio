import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
    return (
        <header className="bg-gray-800 sm:sticky md:sticky lg:sticky top-0 z-10">
          <div className="container flex flex-wrap py-3 px-3 flex-row items-center justify-between min-w-full">
            <a className="font-medium text-slate-300 hover:text-white mb-1 text-xl transition-colors duration-300 ease-in-out" href="#top">
              Mark Oka
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex-wrap items-center text-base justify-center hidden md:block lg:block">
              <a href="#projects" className="mx-2 hover:text-white transition-colors duration-300 ease-in-out">
                Past Work
              </a>
              <a href="#skills" className="mx-2 hover:text-white transition-colors duration-300 ease-in-out">
                Skills
              </a>
              <a href="#person" className="mx-2 hover:text-white transition-colors duration-300 ease-in-out"> 
                About Me
              </a>
            </nav>
            <div className="flex items-center mt-1 mx-1">
              <a
              href="https://www.linkedin.com/in/mark-oka/"
              className="mx-2 hover:text-white transition-colors duration-300 ease-in-out">
                <FontAwesomeIcon icon={faLinkedin} size='2x'/>
              </a>
              <a
              href="https://github.com/markoka101"
              className="mx-2 hover:text-white transition-colors duration-300 ease-in-out">
                <FontAwesomeIcon icon={faGithub} size='2x'/>
              </a>
            </div>
           
            <a
              href="#contact"
              className="items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-slate-700 hover:text-white rounded text-lg mt-2 md:mt-1 hidden md:inline-flex lg:inline-flex transition-colors duration-300 ease-in-out">
              Contact Me
              <ArrowRightIcon className="w-4 h-5 pt-0.5 ml-1" />
            </a>
          </div>
        </header>
      );
}