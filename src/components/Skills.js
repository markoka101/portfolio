import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { languages, frameworks, database, tools } from "../data";

export default function Skills() {
    const [showLang, setShowLang] = useState(false);
    const [showFrame, setShowFrame] = useState(false);
    const [showData, setShowData] = useState(false);
    const [showTools, setShowTools] = useState(false);

    const languageName = showLang
        ? "Hide Programming Languages"
        : "Show Programming Languages";
    const frameworkName = showFrame
        ? "Hide Frameworks & Libraries"
        : "Show Frameworks & Libraries";
    const databaseName = showData
        ? "Hide Database & Industry Tools"
        : "Show Database & Industry Tools";
    const toolName = showTools
        ? "Hide Tools & Software"
        : "Show Tools & Software";

    return (
        <section id="skills">
            <div
                id="animation-carousel"
                class="relative w-full"
                data-carousel="static"
            >
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <div
                        class="hidden duration-200 ease-linear"
                        data-carousel-item
                    ></div>

                    <div
                        class="hidden duration-200 ease-linear"
                        data-carousel-item
                    ></div>

                    <div
                        class="hidden duration-200 ease-linear"
                        data-carousel-item="active"
                    ></div>

                    <div
                        class="hidden duration-200 ease-linear"
                        data-carousel-item
                    ></div>

                    <div
                        class="hidden duration-200 ease-linear"
                        data-carousel-item
                    ></div>
                </div>

                <button
                    type="button"
                    class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev
                >
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
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
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next
                >
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
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
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </section>
    );
}
