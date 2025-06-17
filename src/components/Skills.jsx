import { useRef } from 'react';

import { languages, frameworks, database, tools } from '../data/SkillsData';

import { ChevronDoubleDownIcon, CommandLineIcon } from '@heroicons/react/24/outline';
import { Helmet } from 'react-helmet-async';

import useRevealOnScroll from './RevealOnScroll';
export default function Skills() {
	const refLanguage = useRef();
	const isVisibleLanguage = useRevealOnScroll(refLanguage);

	const refFrameworks = useRef();
	const isVisibleFramework = useRevealOnScroll(refFrameworks);

	const refDatabase = useRef(1);
	const isVisibleDatabase = useRevealOnScroll(refDatabase);

	const refTools = useRef();
	const isVisibleTools = useRevealOnScroll(refTools);

	return (
		<>
			<Helmet>
				<title>Skills | Mark Oka Portfolio</title>
				<meta
					name="description"
					content="Explore the programming languages, frameworks, and tools used by Mark Oka in professional web and software development."
				/>
				<meta property="og:title" content="Skills | Mark Oka Portfolio" />
				<meta
					property="og:description"
					content="Discover Mark Oka's technical skills in software engineering, including Java, JavaScript, React, Spring, and more."
				/>
			</Helmet>
			<section id="skills" className="animate-fadeIn min-h-screen">
				<div className="mx-auto flex min-w-full flex-wrap items-center justify-center scroll-smooth">
					<div className="mt-10 flex w-1/2 flex-col pb-10 pt-16">
						<div className="flex flex-row items-center justify-center">
							<CommandLineIcon className="h-16 text-black" />
							<h1 className="mx-2 mb-4 text-center text-6xl font-bold text-black">Technologies</h1>
						</div>
						<p className="mx-auto text-center text-xl font-bold leading-relaxed text-black lg:w-2/3">
							Scroll to see all the tech I use
						</p>
						<ChevronDoubleDownIcon
							className={`h-12 animate-pulse py-1 text-black transition-all ease-in-out`}
						></ChevronDoubleDownIcon>
					</div>

					<div
						ref={refLanguage}
						className={`mb-20 mt-5 flex w-full flex-col items-center justify-center transition-all duration-500 ease-in-out ${
							isVisibleLanguage ? 'blur-0' : 'blur-[2px]'
						}`}
					>
						<h1 className="text-3xl font-bold text-black">Programming Languages</h1>
						<div className="relative flex h-3/4 w-full flex-wrap items-center justify-center md:w-3/4 lg:w-3/4">
							{languages.map((lang) => {
								return (
									<div key={lang.title} className="w-3/4 px-1 py-3 sm:w-1/2">
										<div className="flex h-full items-center rounded bg-black bg-opacity-70 p-5">
											<lang.icon className="mr-4" size="30" />
											<span className="text-xl font-medium text-white">{lang.title}</span>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					<div
						ref={refFrameworks}
						className={`my-44 flex w-full flex-col items-center justify-center transition-all duration-500 ease-in-out ${
							isVisibleFramework ? 'blur-0' : 'blur-[2px]'
						}`}
					>
						<h1 className="text-3xl font-bold text-black">Frameworks and Libraries</h1>
						<div className="relative flex h-3/4 w-full flex-wrap items-center justify-center md:w-3/4 lg:w-3/4">
							{frameworks.map((frame) => (
								<div key={frame.title} className="w-3/4 px-1 py-2 sm:w-1/2">
									<div className="flex h-full items-center rounded bg-black bg-opacity-70 p-5">
										<frame.icon className="mr-4" size="30" />
										<span className="text-xl font-medium text-white">{frame.title}</span>
									</div>
								</div>
							))}
						</div>
					</div>
					<div
						ref={refDatabase}
						className={`my-44 flex w-full flex-col items-center justify-center transition-all duration-500 ease-in-out ${
							isVisibleDatabase ? 'blur-0' : 'blur-[2px]'
						}`}
					>
						<h1 className="text-3xl font-bold text-black">Database and Industry Tools</h1>
						<div className="relative flex h-3/4 w-full flex-wrap items-center justify-center md:w-3/4 lg:w-3/4">
							{database.map((data) => (
								<div key={data.title} className="w-3/4 px-1 py-2 sm:w-1/2">
									<div className="flex h-full items-center rounded bg-black bg-opacity-70 p-5">
										<data.icon className="mr-4" size="30" />
										<span className="text-xl font-medium text-white">{data.title}</span>
									</div>
								</div>
							))}
						</div>
					</div>
					<div
						ref={refTools}
						className={`my-44 flex w-full flex-col items-center justify-center transition-all duration-500 ease-in-out ${
							isVisibleTools ? 'blur-0' : 'blur-[2px]'
						}`}
					>
						<h1 className="text-3xl font-bold text-black">Tools and Software</h1>
						<div className="relative flex h-3/4 w-full flex-wrap items-center justify-center md:w-3/4 lg:w-3/4">
							{tools.map((tool) => (
								<div key={tool.title} className="w-3/4 px-1 py-2 sm:w-1/2">
									<div className="flex h-full items-center rounded bg-black bg-opacity-70 p-5">
										<tool.icon className="mr-4" size="30" />
										<span className="text-xl font-medium text-white">{tool.title}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
