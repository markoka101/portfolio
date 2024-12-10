import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "flowbite-react";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function NavbarComponent() {
    const navigate = useNavigate();

    const customTheme = {
        root: {
            base: "!bg-gray-800 !bg-opacity-80 sticky top-0 z-10 px-0 py-2.5 sm:px-4",
            rounded: {
                on: "rounded",
                off: "",
            },
            bordered: {
                on: "border",
                off: "",
            },
            inner: {
                base: "mx-0 px-2 flex flex-wrap items-center justify-between min-w-full",
                fluid: {
                    on: "",
                    off: "container",
                },
            },
        },
        brand: {
            base: "flex items-center",
        },
        collapse: {
            base: "w-full md:block md:w-auto",
            list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-5 md:text-sm md:font-medium",
            hidden: {
                on: "hidden",
                off: "",
            },
        },
        link: {
            base: "block py-2 pl-3 pr-4 md:p-0",
            active: {
                on: "bg-cyan-700 text-white md:bg-transparent md:text-cyan-700",
                off: "border-b border-gray-700 text-gray-400 bg-gray-700 hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-white",
            },
            disabled: {
                on: "hover:cursor-not-allowed text-gray-600",
                off: "",
            },
        },
        toggle: {
            base: "inline-flex items-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600 md:hidden",
            icon: "h-6 w-6 shrink-0",
        },
    };
    return (
        <Navbar theme={customTheme}>
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
                    className="btn-nav"
                >
                    Work
                </button>
                <button onClick={() => navigate("/skills")} className="btn-nav">
                    Skills
                </button>
                <button
                    onClick={() => navigate("/about-me")}
                    className="btn-nav"
                >
                    About Me
                </button>
                <button
                    onClick={() => navigate("/contact")}
                    className="md:hidden lg:hiddenbtn-nav flex flex-row justify-end items-center"
                >
                    Contact Me
                </button>

                <div className="flex flex-row justify-end md:my-0 lg:my-0 my-2 mr-2">
                    <a
                        href="https://www.linkedin.com/in/mark-oka/"
                        className="mr-2 hover:text-white text-slate-300 transition-colors duration-200 ease-in-out flex items-center"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a
                        href="https://github.com/markoka101"
                        className="md:ml-2 lg:ml-2 ml-2 hover:text-white text-slate-300 transition-colors duration-200 ease-in-out items-center flex"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>

                <button
                    onClick={() => navigate("/contact")}
                    className="items-center justify-center border-0  text-slate-300 hover:text-white rounded text-lg  hidden md:inline-flex lg:inline-flex transition-colors duration-300 ease-in-out"
                >
                    Contact Me
                    <ArrowRightIcon className="w-5 h-5 ml-1 mt-1  sm:block" />
                </button>
            </Navbar.Collapse>
        </Navbar>
    );
}
