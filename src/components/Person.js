import React from "react";

export default function Person() {
    return (
        <section id="person" className=" justify-center flex">
            <div className="container mx-auto flex px-10 py-10 mt-12 sm:mt-28 md:mt-28 lg:mt-28 mb-12 md:flex-row flex-col items-center w-11/12 border-4 bg-black bg-opacity-50 rounded-xl min-h-[65vh]">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="sm:text-4xl mb-5 font-medium text-white">
                        About Me
                    </h1>
                    <h2 className="sm:text-2x1 mb-1 font-medium text-white">
                        Background
                    </h2>
                    <p className="mb-4 leading-relaxed text-gray-200 text-left">
                        I was born in Sao Paulo and moved to New York shortly
                        after I was born. I have dual citizenship of Brazil and
                        the United States. I come from a very diverse background
                        where my paternal grandparents are from Japan and Texas.
                        I also have three cats named Throatcuttah, Hades, and
                        Salem.
                    </p>
                    <h3 className="sm:text-2x1 mb-1 font-medium text-white">
                        Hobbies/Interests
                    </h3>
                    <p className="leading-relaxed text-gray-200 text-left">
                        -As a software engineer, I am legally required to be a
                        gamer <br />
                        -I am a guitarist who has played in metal and rock bands
                        <br />
                        -I have an extensive collection of board games and
                        organize game nights <br />
                        -I love traveling. Some of the places I've visited
                        include Kenya, Japan, England, and Costa Rica <br />
                        -I spend a lot of time helping others with home
                        improvement projects <br />
                        -I am passionate about aviation and as a kid, I wanted
                        to be a pilot
                    </p>
                </div>
                <div className="sm:max-w-sm lg:w-full md:w-1/2 w-5/6">
                    <p className="mb-1 leading-relaxed text-gray-200">
                        Top Left: Hades <br />
                        Bottom Left: Salem <br />
                        Right: Throatcuttah
                    </p>
                    <img
                        className="object-cover object-center rounded-md border-4 border-gray-400"
                        alt="gremlins"
                        src="./gremlins.JPG"
                    />
                </div>
            </div>
        </section>
    );
}
