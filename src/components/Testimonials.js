import React from "react";
import { Blockquote, Avatar } from "flowbite-react";

export default function Testimonials() {
    return (
        <section id="testimonials" className="justify-center flex">
            <div className="container mx-auto flex px-10 py-10 mt-12 sm:mt-28 md:mt-28 lg:mt-28 mb-12 md:flex-row flex-col items-center w-11/12 border-4 bg-black bg-opacity-50 rounded-xl min-h-[65vh]">
                <figure className="mx-auto  text-center">
                    <svg
                        className="mx-auto mb-3 h-10 w-10 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 14"
                    >
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                    <Blockquote>
                        <p className="text-2xl font-medium italic text-white">
                            I had the pleasure of working with Mark Oka, and I
                            can confidently say that his skills in building and
                            managing my portfolio website were exceptional.
                            Mark's ability to turn my concepts into a polished,
                            functional, and visually appealing online presence
                            is truly impressive. Mark demonstrated a remarkable
                            understanding of both design and technical aspects.
                            He skillfully built a comprehensive portfolio
                            website for me, ensuring that every detail and
                            requested I had was meticulously attended to—from
                            the initial design concept to the final launch. His
                            approach to integrating user-friendly features, such
                            as window scaling plus making it mobile-friendly,
                            was first rate. He ensured that the overall design
                            and loading times were responsive and made the
                            website not only attractive but also highly
                            functional across various devices.
                        </p>
                    </Blockquote>
                    <figcaption className="mt-6 flex items-center justify-center space-x-3">
                        <Avatar
                            rounded
                            size="md"
                            img="./taylor-avatar.jpg"
                            alt="profile picture"
                        />
                        <div className="flex items-center divide-x-2 divide-gray-300">
                            <cite className="pr-3 font-medium text-white">
                                Taylor Morales
                            </cite>
                            <cite className="pl-3 text-sm text-gray-100">
                                Learning Design Specialist at TheRealReal
                            </cite>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
}