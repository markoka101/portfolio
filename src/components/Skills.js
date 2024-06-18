import React, { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";

import { CheckCircleIcon, ChipIcon } from "@heroicons/react/24/solid";
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
        <section id="skills">
            <div className="flex flex-col  min-w-full mx-auto justify-center items-center scroll-smooth">
                <div
                    ref={refLanguage}
                    className={`transition-opacity ease-in duration-1000 h-screen w-full ${
                        isVisibleLanguage ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <div className=" h-[15em] mt-[10em] min-w-full relative">
                        {languages.map((languages) => (
                            <div
                                key={languages}
                                className="py-2 px-1 sm:w-1/2 w-3/4"
                            >
                                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                    <CheckCircleIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                    <span className="font-medium text-white">
                                        {languages}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    ref={refFrameworks}
                    className={`transition-opacity ease-in duration-1000 h-screen w-full ${
                        isVisibleFramework ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <div className=" h-[15em] mt-[10em]">
                        {frameworks.map((frameworks) => (
                            <div
                                key={frameworks}
                                className="py-2 px-1 sm:w-1/2 w-3/4"
                            >
                                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                    <CheckCircleIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                    <span className="font-medium text-white">
                                        {frameworks}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    ref={refDatabase}
                    className={`transition-opacity ease-in duration-1000 h-screen w-full ${
                        isVisibleDatabase ? "opacity-100" : "opacity-0"
                    }`}
                >
                    {database.map((database) => (
                        <div
                            key={database}
                            className="py-2 px-1 sm:w-1/2 w-3/4"
                        >
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <CheckCircleIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="font-medium text-white">
                                    {database}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    ref={refTools}
                    className={`transition-opacity ease-in duration-1000 h-screen w-full ${
                        isVisibleTools ? "opacity-100" : "opacity-0"
                    }`}
                >
                    {tools.map((tools) => (
                        <div key={tools} className="py-2 px-1 sm:w-1/2 w-3/4">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <CheckCircleIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="font-medium text-white">
                                    {tools}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
