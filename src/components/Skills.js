import React, { useState, useEffect, useRef } from "react";

import { languages, frameworks, database, tools } from "../data";

import RevealOnScroll from "./RevealOnScroll";
export default function Skills() {
    const refLanguage = useRef();
    const isVisibleLanguage = RevealOnScroll(refLanguage);

    const refFrameworks = useRef();
    const isVisibleFramework = RevealOnScroll(refFrameworks);

    const refDatabase = useRef(1);
    const isVisibleDatabase = RevealOnScroll(refDatabase);

    const refTools = useRef();
    const isVisibleTools = RevealOnScroll(refTools);

    return (
        <section id="skills" className="flex flex-col min-w-full scroll-smooth">
            <div className="flex flex-wrap  min-w-full mx-auto justify-center items-center scroll-smooth">
                <div
                    ref={refLanguage}
                    className={`transition-all ease-in-out duration-500 my-20 w-full justify-center items-center flex flex-col ${
                        isVisibleLanguage ? "blur-0" : "blur-sm"
                    }`}
                >
                    <h1 className="text-white text-3xl">Languages</h1>
                    <div className="md:w-3/4 lg:w-3/4 w-full h-3/4 relative  flex flex-wrap justify-center items-center">
                        {languages.map((lang) => {
                            return (
                                <div
                                    key={lang.title}
                                    className=" py-3 px-1 sm:w-1/2 w-3/4 "
                                >
                                    <div className="bg-gray-400 rounded flex p-4 h-full items-center">
                                        <lang.icon className="mr-4 text-sm h-screem flex" />
                                        <span className="font-medium text-white text-xl">
                                            {lang.title}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div
                    ref={refFrameworks}
                    className={`transition-all ease-in-out duration-500 my-20 w-full justify-center items-center flex flex-col ${
                        isVisibleFramework ? "blur-0" : "blur-sm"
                    }`}
                >
                    <h1 className="text-white text-3xl">
                        Frameworks and Libraries
                    </h1>
                    <div className="md:w-3/4 lg:w-3/4 w-full h-3/4 relative  flex flex-wrap justify-center items-center">
                        {frameworks.map((frame) => (
                            <div
                                key={frame.title}
                                className="py-2 px-1 sm:w-1/2 w-3/4"
                            >
                                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                    <frame.icon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                    <span className="font-medium text-white">
                                        {frame.title}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    ref={refDatabase}
                    className={`transition-all ease-in-out duration-500 my-20 w-full justify-center items-center flex flex-col ${
                        isVisibleDatabase ? "blur-0" : "blur-sm"
                    }`}
                >
                    <h1 className="text-white text-3xl">
                        Database and Industry Tools
                    </h1>
                    <div className="md:w-3/4 lg:w-3/4 w-full h-3/4 relative  flex flex-wrap justify-center items-center">
                        {database.map((data) => (
                            <div
                                key={data.title}
                                className="py-2 px-1 sm:w-1/2 w-3/4"
                            >
                                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                    <data.icon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                    <span className="font-medium text-white">
                                        {data.title}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    ref={refTools}
                    className={`transition-all ease-in-out duration-500  my-20 w-full justify-center items-center flex flex-col ${
                        isVisibleTools ? "blur-0" : "blur-sm"
                    }`}
                >
                    <h1 className="text-white text-3xl">Tools and Software</h1>
                    <div className="md:w-3/4 lg:w-3/4 w-full h-3/4 relative  flex flex-wrap justify-center items-center">
                        {tools.map((tool) => (
                            <div
                                key={tool.title}
                                className="py-2 px-1 sm:w-1/2 w-3/4"
                            >
                                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                    <tool.icon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                    <span className="font-medium text-white">
                                        {tool.title}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
