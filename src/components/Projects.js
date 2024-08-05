import { CodeBracketIcon } from "@heroicons/react/24/outline";
import React from "react";

import { Carousel } from "flowbite-react";

import { projects } from "../data";

export default function Projects() {
    //customizing the theme for carousel
    const customTheme = {
        root: {
            base: "relative h-full w-full",
            leftControl:
                "absolute left-0 top-0 flex h-full items-center justify-center px-4 md:px-4 lg:px-4 focus:outline-none",
            rightControl:
                "absolute right-0 top-0 flex h-full items-center justify-center px-4 md:px-4 lg:px-4 focus:outline-none",
        },
        indicators: {
            active: {
                off: "bg-gray-800/50 hover:bg-gray-800",
                on: "bg-gray-800",
            },
            base: "h-3 w-3 rounded-full",
            wrapper:
                "absolute bottom--8 left-1/2 flex -translate-x-1/2 space-x-3 mt-2",
        },
        item: {
            base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2  ",
            wrapper: {
                off: "w-full flex-shrink-0 transition-transform transform cursor-default snap-center duration-700 ease-in-out",
                on: "w-full flex-shrink-0 transition-transform transform cursor-grab snap-center duration-700 ease-in-out",
            },
        },
        control: {
            base: "inline-flex h-[40vh] lg:opacity-100 md:h-8 lg:h-8 w-8 items-center justify-center rounded-xl  group-focus:outline-none md:bg-gray-800/30 md:group-hover:bg-gray-800/60 lg:bg-gray-800/30 lg:group-hover:bg-gray-800/60 bg-transparent sm:h-10 sm:w-10",
            icon: "h-5 w-5 text-white md:text-gray-700 lg:text-gray-700 sm:h-6 sm:w-6",
        },
        scrollContainer: {
            base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
            snap: "snap-x",
        },
    };
    return (
        <section id="projects" className="text-gray-400">
            <div className="flex flex-col  min-w-full mx-auto pt-5 sm:pt-20 md:pt-20 lg:pt-20 my-10 items-center scroll-smooth  ">
                <div className="flex flex-col w-3/4 sm:w-1/2 md:w-1/2 lg:w-1/2 pb-10">
                    <div className="flex flex-row justify-center items-center mb-4">
                        <CodeBracketIcon className="h-16 text-black " />
                        <h1 className="text-6xl font-bold  text-black   h-16">
                            Projects
                        </h1>
                    </div>
                    <p className="w-full mx-auto leading-relaxed text-md sm:text-xl md:text-xl lg:text-xl text-center text-black font-bold">
                        These are some of the projects I am working/worked on. I
                        always have more projects in the works!
                    </p>
                </div>
                <div className="w-full lg:w-3/4">
                    <Carousel
                        pauseOnHover={true}
                        slideInterval={10000}
                        draggable={true}
                        theme={customTheme}
                        slide={true}
                    >
                        {projects.map((project) => (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                key={project.title}
                                className="w-full md:w-3/4 lg:w-3/4 min-h-full relative"
                            >
                                <div className="m-2">
                                    <div className="flex flex-col px-8 py-8 m-0  w-full h-[40vh] border-4 border-gray-800 bg-gray-900 hover:bg-slate-900 hover:border-slate-400 items-center justify-center rounded-xl transition-all duration-300 ease-in-out">
                                        <h2 className="tracking-widest text-sm font-medium text-green-400 mb-1 text-center">
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
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
