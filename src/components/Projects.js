import { CodeBracketIcon } from "@heroicons/react/24/outline";
import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium mb-4 text-white">
                        My Projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
                        These are some of the projects I am working/worked on.{" "}
                        <br />I always have more projects in the works!
                    </p>
                </div>

                <div
                    id="default-carousel"
                    className="relative w-full"
                    data-carousel="slide"
                >
                    <div className="flex flex-wrap -m-4">
                        {projects.map((project) => (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                key={project.title}
                                className="w-1/2  min-h-full"
                            >
                                <div className="m-2">
                                    <div className="flex flex-col px-8 py-10 m-0 w-full h-64 border-4 border-gray-800 bg-gray-900 hover:bg-slate-900 hover:border-slate-400 items-center justify-center rounded-xl transition-all duration-300 ease-in-out">
                                        <h2 className="hidden md:block lg:block tracking-widest text-sm font-medium text-green-400 mb-1">
                                            {project.subtitle}
                                        </h2>
                                        <h1 className="text-lg font-medium text-white mb-3">
                                            {project.title}
                                        </h1>
                                        <p className="leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                        <button
                            type="button"
                            className="w-3 h-3 rounded-full"
                            aria-current="true"
                            aria-label="Slide 1"
                            data-carousel-slide-to="0"
                        ></button>
                        <button
                            type="button"
                            class="w-3 h-3 rounded-full"
                            aria-current="false"
                            aria-label="Slide 2"
                            data-carousel-slide-to="1"
                        ></button>
                        <button
                            type="button"
                            className="w-3 h-3 rounded-full"
                            aria-current="false"
                            aria-label="Slide 3"
                            data-carousel-slide-to="2"
                        ></button>
                        <button
                            type="button"
                            className="w-3 h-3 rounded-full"
                            aria-current="false"
                            aria-label="Slide 4"
                            data-carousel-slide-to="3"
                        ></button>
                        <button
                            type="button"
                            className="w-3 h-3 rounded-full"
                            aria-current="false"
                            aria-label="Slide 5"
                            data-carousel-slide-to="4"
                        ></button>
                    </div>

                    <button
                        type="button"
                        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-prev
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg
                                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 1 1 5l4 4"
                                />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                        {/* <div className="flex flex-wrap -m-4">
                            {projects.map((project) => (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={project.title}
                                    className="w-1/2  min-h-full"
                                >
                                    <div className="m-2">
                                        <div className="flex flex-col px-8 py-10 m-0 w-full h-64 border-4 border-gray-800 bg-gray-900 hover:bg-slate-900 hover:border-slate-400 items-center justify-center rounded-xl transition-all duration-300 ease-in-out">
                                            <h2 className="hidden md:block lg:block tracking-widest text-sm font-medium text-green-400 mb-1">
                                                {project.subtitle}
                                            </h2>
                                            <h1 className="text-lg font-medium text-white mb-3">
                                                {project.title}
                                            </h1>
                                            <p className="leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div> */}
                    </button>
                    <button
                        type="button"
                        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-next
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg
                                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
