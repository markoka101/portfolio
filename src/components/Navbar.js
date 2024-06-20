import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, NavbarToggle } from "flowbite-react";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function NavbarComponent() {
    const navigate = useNavigate();
    return (
        <Navbar className="bg-slate-700 sticky top-0 z-10 justify-between flex min-w-full">
            <Navbar.Brand>
                <button
                    className=" font-medium text-slate-300 hover:text-white mb-1 text-2xl transition-colors duration-300 ease-in-out"
                    onClick={() => navigate("/")}
                >
                    Mark Oka
                </button>
            </Navbar.Brand>

            <Navbar.Toggle />

            <Navbar.Collapse>
                <button
                    onClick={() => navigate("/projects")}
                    className="mx-2 hover:text-white transition-colors duration-200 ease-in-out text-end text-2xl lg:text-lg md:text-lg"
                >
                    Past Work
                </button>
                <button
                    onClick={() => navigate("/skills")}
                    className="mx-2 hover:text-white transition-colors duration-200 ease-in-out text-end text-2xl lg:text-lg md:text-lg"
                >
                    Skills
                </button>
                <button
                    onClick={() => navigate("/about-me")}
                    className="mx-2 hover:text-white transition-colors duration-200 ease-in-out text-end text-2xl lg:text-lg md:text-lg"
                >
                    About Me
                </button>
                <button
                    onClick={() => navigate("/contact")}
                    className="md:hidden lg:hidden mx-2 hover:text-white transition-colors duration-200 ease-in-out text-end text-2xl lg:text-lg md:text-lg flex flex-row justify-end items-center"
                >
                    Contact Me
                    <ArrowRightIcon className="w-4 h-5 pt-0.5 ml-1" />
                </button>

                <div className="flex flex-row justify-end md:my-0 lg:my-0 my-2">
                    <a
                        href="https://www.linkedin.com/in/mark-oka/"
                        className="mx-2 hover:text-white text-gray-400 transition-colors duration-200 ease-in-out flex items-center"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a
                        href="https://github.com/markoka101"
                        className="md:ml-2 lg:ml-2 ml-4 hover:text-white text-gray-400 transition-colors duration-200 ease-in-out items-center flex"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>

                <button
                    onClick={() => navigate("/contact")}
                    className="items-center border-0 py-1 focus:outline-none hover:bg-slate-700 text-gray-300 hover:text-white rounded text-lg mt-2 md:mt-1 hidden md:inline-flex lg:inline-flex transition-colors duration-300 ease-in-out"
                >
                    Contact Me
                    <ArrowRightIcon className="w-4 h-6 pt-0.5 ml-1" />
                </button>
            </Navbar.Collapse>
        </Navbar>
    );
}
