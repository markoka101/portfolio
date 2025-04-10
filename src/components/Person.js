import React from 'react';

export default function Person() {
	return (
		<section id="person" className="flex justify-center">
			<div className="container mx-auto mb-12 mt-12 flex min-h-[65vh] w-11/12 flex-col items-center rounded-xl border-4 bg-black bg-opacity-50 px-10 py-10 sm:mt-28 md:mt-28 md:flex-row lg:mt-28">
				<div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
					<h1 className="mb-5 font-medium text-white sm:text-4xl">About Me</h1>
					<h2 className="sm:text-2x1 mb-1 font-medium text-white">Background</h2>
					<p className="mb-4 text-left leading-relaxed text-gray-200">
						I was born in Sao Paulo and moved to New York shortly after I was born. I have dual
						citizenship of Brazil and the United States. I come from a very diverse background where
						my paternal grandparents are from Japan and Texas. I also have three cats named
						Throatcuttah, Hades, and Salem.
					</p>
					<h3 className="sm:text-2x1 mb-1 font-medium text-white">Hobbies/Interests</h3>
					<p className="text-left leading-relaxed text-gray-200">
						-As a software engineer, I am legally required to be a gamer <br />
						-I am a guitarist who has played in metal and rock bands
						<br />
						-I have an extensive collection of board games and organize game nights <br />
						-I love traveling. Some of the places I've visited include Kenya, Japan, England, and
						Costa Rica <br />
						-I spend a lot of time helping others with home improvement projects <br />
						-I am passionate about aviation and as a kid, I wanted to be a pilot
					</p>
				</div>
				<div className="w-5/6 sm:max-w-sm md:w-1/2 lg:w-full">
					<p className="mb-1 leading-relaxed text-gray-200">
						Top Left: Hades <br />
						Bottom Left: Salem <br />
						Right: Throatcuttah
					</p>
					<img
						className="rounded-md border-4 border-gray-400 object-cover object-center"
						alt="gremlins"
						src="./gremlins.JPG"
					/>
				</div>
			</div>
		</section>
	);
}
