import { CodeBracketIcon } from '@heroicons/react/24/outline';
import React from 'react';

import { Carousel } from 'flowbite-react';

import { projects } from '../data';

export default function Projects() {
	//customizing the theme for carousel
	const customTheme = {
		root: {
			base: 'relative h-full w-full',
			leftControl:
				'absolute left-0 top-0 flex h-full items-center justify-center px-4 md:px-4 lg:px-4 focus:outline-none',
			rightControl:
				'absolute right-0 top-0 flex h-full items-center justify-center px-4 md:px-4 lg:px-4 focus:outline-none'
		},
		indicators: {
			active: {
				off: 'bg-gray-800/50 hover:bg-gray-800',
				on: 'bg-gray-800'
			},
			base: 'h-3 w-3 rounded-full',
			wrapper: 'absolute bottom--8 left-1/2 flex -translate-x-1/2 space-x-3 mt-2'
		},
		item: {
			base: 'absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2  ',
			wrapper: {
				off: 'w-full flex-shrink-0 transition-transform transform cursor-default snap-center duration-700 ease-in-out',
				on: 'w-full flex-shrink-0 transition-transform transform cursor-grab snap-center duration-700 ease-in-out'
			}
		},
		control: {
			base: 'inline-flex h-[40vh] lg:opacity-100 md:h-8 lg:h-8 w-8  ease-in-out duration-300 items-center justify-center rounded-xl group-focus:outline-none md:bg-gray-800/30 md:group-hover:bg-gray-800/60 lg:bg-gray-800/30 lg:group-hover:bg-gray-800/60 bg-transparent sm:h-10 sm:w-10',
			icon: 'h-5 w-5 text-white ease-in-out duration-300  md:text-gray-700 md:hover:text-gray-200 lg:text-gray-700 lg:hover:text-gray-200 sm:h-6 sm:w-6'
		},
		scrollContainer: {
			base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg',
			snap: 'snap-x'
		}
	};
	return (
		<section id="projects" className="text-gray-400">
			<div className="mx-auto my-10 flex min-w-full flex-col items-center scroll-smooth pt-5 sm:pt-20 md:pt-20 lg:pt-20">
				<div className="flex w-3/4 flex-col pb-10 sm:w-1/2 md:w-1/2 lg:w-1/2">
					<div className="mb-4 flex flex-row items-center justify-center">
						<CodeBracketIcon className="h-16 text-black" />
						<h1 className="h-16 text-6xl font-bold text-black">Projects</h1>
					</div>
					<p className="text-md mx-auto w-full text-center font-bold leading-relaxed text-black sm:text-xl md:text-xl lg:text-xl">
						You can click on the cards to see the projects. I always have more projects in the
						works! <br />
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
								className="relative min-h-full w-full md:w-3/4 lg:w-3/4"
							>
								<div className="m-2">
									<div className="m-0 flex h-[40vh] w-full flex-col items-center justify-center rounded-xl border-4 border-gray-800 bg-gray-900 px-8 py-8 transition-all duration-300 ease-in-out hover:border-slate-400 hover:bg-slate-900">
										<h2 className="mb-1 text-center text-sm font-medium tracking-widest text-green-400">
											{project.subtitle}
										</h2>
										<h1 className="mb-3 text-lg font-medium text-white">{project.title}</h1>
										<p className="leading-relaxed">{project.description}</p>
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
