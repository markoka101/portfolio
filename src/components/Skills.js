import React, { useState, useEffect, useRef } from "react";

import { languages, frameworks, database, tools } from "../data";

import {
    ChevronDoubleDownIcon,
    CommandLineIcon,
    ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

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
        <section id="skills" className="min-h-screen">
            <div className="flex flex-wrap  min-w-full mx-auto justify-center items-center scroll-smooth">
                <div className="flex flex-col w-1/2 mt-10 pt-16 pb-10">
                    <div className="flex flex-row justify-center items-center">
                        <CommandLineIcon className="h-16 text-green-900" />
                        <h1 className=" text-6xl font-bold mb-4 text-black text-center mx-2">
                            Technologies
                        </h1>
                    </div>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-center text-black font-bold">
                        Scroll to see all the tech I use
                    </p>
                    <ChevronDoubleDownIcon
                        className={`h-12 text-black transition-all ease-in-out  py-1 animate-pulse`}
                    ></ChevronDoubleDownIcon>
                </div>

                <div
                    ref={refLanguage}
                    className={`transition-all ease-in-out duration-500 mb-20 mt-20 w-full justify-center items-center flex flex-col ${
                        isVisibleLanguage ? "blur-0" : "blur-[2px]"
                    }`}
                >
                    <h1 className="text-black text-3xl font-bold">
                        Programming Languages
                    </h1>
                    <div className="md:w-3/4 lg:w-3/4 w-full h-3/4 relative  flex flex-wrap justify-center items-center">
                        {languages.map((lang) => {
                            return (
                                <div
                                    key={lang.title}
                                    className=" py-3 px-1 sm:w-1/2 w-3/4 "
                                >
                                    <div className="bg-black bg-opacity-70 rounded flex p-5 h-full items-center">
                                        <lang.icon className="mr-4" size="30" />
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
                    className={`transition-all ease-in-out duration-500 my-44 w-full justify-center items-center flex flex-col ${
                        isVisibleFramework ? "blur-0" : "blur-[2px]"
                    }`}
                >
                    <h1 className="text-black text-3xl font-bold">
                        Frameworks and Libraries
                    </h1>
                    <div className="md:w-3/4 lg:w-3/4 w-full h-3/4 relative  flex flex-wrap justify-center items-center">
                        {frameworks.map((frame) => (
                            <div
                                key={frame.title}
                                className="py-2 px-1 sm:w-1/2 w-3/4"
                            >
                                <div className="bg-black bg-opacity-70 rounded flex p-5 h-full items-center">
                                    <frame.icon className="mr-4" size="30" />
                                    <span className="font-medium text-white text-xl">
                                        {frame.title}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    ref={refDatabase}
                    className={`transition-all ease-in-out duration-500 my-44 w-full justify-center items-center flex flex-col ${
                        isVisibleDatabase ? "blur-0" : "blur-[2px]"
                    }`}
                >
                    <h1 className="text-black text-3xl font-bold">
                        Database and Industry Tools
                    </h1>
                    <div className="md:w-3/4 lg:w-3/4 w-full h-3/4 relative  flex flex-wrap justify-center items-center">
                        {database.map((data) => (
                            <div
                                key={data.title}
                                className="py-2 px-1 sm:w-1/2 w-3/4"
                            >
                                <div className="bg-black bg-opacity-70 rounded flex p-5 h-full items-center">
                                    <data.icon className="mr-4" size="30" />
                                    <span className="font-medium text-white text-xl">
                                        {data.title}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    ref={refTools}
                    className={`transition-all ease-in-out duration-500  my-44 w-full justify-center items-center flex flex-col ${
                        isVisibleTools ? "blur-0" : "blur-[2px]"
                    }`}
                >
                    <h1 className="text-black text-3xl font-bold">
                        Tools and Software
                    </h1>
                    <div className="md:w-3/4 lg:w-3/4 w-full h-3/4 relative  flex flex-wrap justify-center items-center">
                        {tools.map((tool) => (
                            <div
                                key={tool.title}
                                className="py-2 px-1 sm:w-1/2 w-3/4"
                            >
                                <div className="bg-black bg-opacity-70 rounded flex p-5 h-full items-center">
                                    <tool.icon className="mr-4" size="30" />
                                    <span className="font-medium text-white text-xl">
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
