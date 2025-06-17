import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { Carousel } from 'flowbite-react';
import { projects } from '../data/ProjectData';
import { customTheme } from '../themes/CarouselCustomTheme';
import { Helmet } from 'react-helmet-async';

export default function Projects() {
	return (
		<>
			<Helmet>
				<title>Projects | Mark Oka Portfolio</title>
				<meta
					name="description"
					content="Browse projects built by Mark Oka, showcasing skills in full-stack web development."
				/>
				<meta property="og:title" content="Projects | Mark Oka Portfolio" />
				<meta
					property="og:description"
					content="See a selection of web development projects by Mark Oka, software engineer."
				/>
			</Helmet>
			<section id="projects" className="animate-fadeIn text-gray-400">
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
											<h1 className="mb-3 text-center text-lg font-medium text-white">
												{project.title}
											</h1>
											<p className="text-center leading-relaxed">{project.description}</p>
										</div>
									</div>
								</a>
							))}
						</Carousel>
					</div>
				</div>
			</section>
		</>
	);
}
