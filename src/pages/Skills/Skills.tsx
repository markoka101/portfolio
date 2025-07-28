import { ChevronDoubleDownIcon, CommandLineIcon } from '@heroicons/react/24/outline';
import { useMemo, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { SkillCard } from '../../components/cards';
import { type SkillItem, database, frameworks, languages, tools } from '../../data/SkillsData';
import useRevealOnScroll from '../../hooks/RevealOnScroll';

// Interface for skill sections configuration
interface SkillSection {
	title: string;
	data: SkillItem[];
	className?: string;
}

export default function Skills() {
	// Configuration array for all skill sections
	const skillSections: SkillSection[] = [
		{
			title: 'Programming Languages',
			data: languages,
			className: 'mt-5 mb-16'
		},
		{
			title: 'Frameworks and Libraries',
			data: frameworks,
			className: 'my-32'
		},
		{
			title: 'Database and Industry Tools',
			data: database,
			className: 'my-32'
		},
		{
			title: 'Tools and Software',
			data: tools,
			className: 'mt-40 mb-56'
		}
	];

	// Create refs and visibility hooks at the top level (fixed number for React Hook Rules)
	const refLanguage = useRef<HTMLDivElement>(null);
	const refFrameworks = useRef<HTMLDivElement>(null);
	const refDatabase = useRef<HTMLDivElement>(null);
	const refTools = useRef<HTMLDivElement>(null);

	const isVisibleLanguage = useRevealOnScroll(refLanguage);
	const isVisibleFrameworks = useRevealOnScroll(refFrameworks);
	const isVisibleDatabase = useRevealOnScroll(refDatabase);
	const isVisibleTools = useRevealOnScroll(refTools);

	// Use useMemo to create arrays that correspond to sections
	const refsAndVisibilities = useMemo(
		() => [
			{ ref: refLanguage, isVisible: isVisibleLanguage },
			{ ref: refFrameworks, isVisible: isVisibleFrameworks },
			{ ref: refDatabase, isVisible: isVisibleDatabase },
			{ ref: refTools, isVisible: isVisibleTools }
		],
		[isVisibleLanguage, isVisibleFrameworks, isVisibleDatabase, isVisibleTools]
	);

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
					<div className="mt-10 flex w-1/2 flex-col pt-16 pb-10">
						<div className="flex flex-row items-center justify-center">
							<CommandLineIcon className="h-16 text-black" />
							<h1 className="mx-2 mb-4 text-center text-5xl font-bold text-black sm:text-6xl">
								Technologies
							</h1>
						</div>
						<p className="mx-auto text-center text-xl leading-relaxed font-bold text-black lg:w-2/3">
							Scroll to see all the tech I use
						</p>
						<ChevronDoubleDownIcon className="h-12 animate-pulse py-1 text-black transition-all ease-in-out" />
					</div>

					{skillSections.map((section, index) => (
						<SkillCard
							key={section.title}
							section={section}
							sectionRef={refsAndVisibilities[index].ref}
							isVisible={refsAndVisibilities[index].isVisible}
						/>
					))}
				</div>
			</section>
		</>
	);
}
