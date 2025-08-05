import { CodeBracketIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Helmet } from 'react-helmet-async';
import ProjectCard from '../../components/cards/ProjectCard';
import { NextArrowIcon, PrevArrowIcon } from '../../components/icons';

import { useRef } from 'react';
import { InfiniteCarousel } from '../../components/ui/Carousel/index';
import { type CarouselRef } from '../../components/ui/Carousel/types';
import { projects } from '../../data/ProjectData';

function Projects() {
	const carouselRef = useRef<CarouselRef>(null);
	const iconClassName = clsx('my-1 flex h-6 w-6 sm:h-8 sm:w-8 sm:focus:h-8 sm:focus:w-8');
	const iconStrokeWdith = '6';

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
					<div className="flex w-3/4 flex-col pb-10 sm:w-1/2">
						<div className="mb-4 flex flex-row justify-center">
							<CodeBracketIcon className="h-16 text-black" />
							<h1 className="h-16 text-6xl font-bold text-black">Projects</h1>
						</div>
						<p className="text-md mx-auto text-center leading-relaxed font-bold text-black sm:text-xl md:text-xl lg:text-xl">
							You can click on the cards to see the projects. I always have more
							projects in the works! <br />
						</p>
					</div>
					<div className="mx-auto w-full justify-center md:w-[600px] lg:w-[1000px]">
						<InfiniteCarousel
							ref={carouselRef}
							items={projects.map((project) => ({
								id: project.id,
								content: <ProjectCard key={project.id} project={project} />
							}))}
							containerClassName={clsx('flex h-[400px] w-full py-12')}
							trackClassName=""
							slideClassName={clsx('flex items-center justify-center')}
							controlClassName={clsx(
								'flex h-full w-10 items-center justify-center rounded-lg bg-transparent text-white/50 shadow-none sm:h-10 sm:w-12 md:text-black/100'
							)}
							indicatorClassName={clsx(
								'h-2 w-2 cursor-pointer bg-orange-200 transition-colors duration-200'
							)}
							indicatorActiveClassName={clsx(
								'bg-black transition-colors duration-[1s] ease-out'
							)}
							autoPlay
							dragResistance={1.5}
							autoPlayInterval={4000}
							NextIcon={
								<NextArrowIcon
									className={iconClassName}
									strokeWidth={iconStrokeWdith}
								/>
							}
							PrevIcon={
								<PrevArrowIcon
									className={iconClassName}
									strokeWidth={iconStrokeWdith}
								/>
							}
							pauseOnHover
							showControls
							showIndicators
							ariaLabel="Project showcase carousel"
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Projects;
