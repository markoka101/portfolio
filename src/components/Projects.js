import { CodeBracketIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Carousel } from "flowbite-react";

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

                <Carousel
                    slidesToShow={4}
                    className="flex flex-wrap -m-4 w-full"
                >
                    {projects.map((project, i) => (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            key={project.title}
                            className="w-1/2  min-h-full relative"
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
                </Carousel>
            </div>
        </section>
    );
}
