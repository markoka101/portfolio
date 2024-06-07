import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <header className="bg-slate-700 bg-opacity-80 sm:sticky md:sticky lg:sticky top-0 z-10">
            <div className="container flex flex-wrap py-2 px-3 flex-row items-center justify-between min-w-full">
                <button
                    className="font-medium text-slate-300 hover:text-white mb-1 text-xl transition-colors duration-300 ease-in-out"
                    onClick={() => navigate("/")}
                >
                    Mark Oka
                </button>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex-wrap items-center text-gray-300 justify-center hidden md:block lg:block">
                    <button
                        onClick={() => navigate("/projects")}
                        className="mx-2 hover:text-white transition-colors duration-200 ease-in-out"
                    >
                        Past Work
                    </button>
                    <button
                        onClick={() => navigate("/skills")}
                        className="mx-2 hover:text-white transition-colors duration-200 ease-in-out"
                    >
                        Skills
                    </button>
                    <button
                        onClick={() => navigate("/about-me")}
                        className="mx-2 hover:text-white transition-colors duration-200 ease-in-out"
                    >
                        About Me
                    </button>
                </nav>
                <div className="flex items-center mt-1 mx-1">
                    <a
                        href="https://www.linkedin.com/in/mark-oka/"
                        className="mx-2 hover:text-white text-gray-400 transition-colors duration-200 ease-in-out"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a
                        href="https://github.com/markoka101"
                        className="mx-2 hover:text-white text-gray-400 transition-colors duration-200 ease-in-out"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>

                <button
                    onClick={() => navigate("/contact")}
                    className="items-center border-0 py-1 px-3 focus:outline-none hover:bg-slate-700 text-gray-300 hover:text-white rounded text-lg mt-2 md:mt-1 hidden md:inline-flex lg:inline-flex transition-colors duration-300 ease-in-out"
                >
                    Contact Me
                    <ArrowRightIcon className="w-4 h-5 pt-0.5 ml-1" />
                </button>
            </div>
        </header>
    );
}
