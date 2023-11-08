import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
    return (
        <header className="bg-gray-700 md:sticky top-0 z-10">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="title-font font-medium text-white mb-4 md:mb-0">
              <a href="#about" className="text-xl">
                Mark Oka
              </a>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
              <a href="#projects" className="mx-2 hover:text-white">
                Past Work
              </a>
              <a href="#skills" className="mx-2 hover:text-white">
                Skills
              </a>
              <a href="#person" className="mx-2 hover:text-white"> 
                About Me
              </a>
            </nav>
            <div className="flex items-center mt-1 mx-1">
              <a
              href="https://www.linkedin.com/in/mark-oka/"
              className="mx-2">
                <FontAwesomeIcon icon={faLinkedin} size='2x'/>
              </a>
              <a
              href="https://github.com/markoka101"
              className="mx-2">
                <FontAwesomeIcon icon={faGithub} size='2x'/>
              </a>
            </div>
           
            <a
              href="#contact"
              className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              Contact Me
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
          </div>
        </header>
      );
}