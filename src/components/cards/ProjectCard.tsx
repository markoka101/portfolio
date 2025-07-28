import clsx from 'clsx';
import { useRef } from 'react';
import { type Project } from '../../utils/types/projectsType';

function ProjectCard({ project }: Readonly<{ project: Project }>) {
	const hadDragRef = useRef(false);
	const sequentialGradientAnimation = clsx(
		'hover:before:animate-hue-cycle-delayed overflow-hidden transition-all duration-200 before:absolute before:inset-0 before:w-0 before:rounded-lg before:bg-[radial-gradient(circle_at_center,#e879f9_0%,#f9a8d4_40%,#67e8f9_80%,#e879f9_100%)] before:transition-all before:duration-500 before:ease-in-out hover:before:w-full'
	);

	const focusStyles = clsx(
		'focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none'
	);
	const backgroundLayer = clsx(
		'after:absolute after:inset-1 after:rounded-lg after:bg-emerald-400'
	);
	return (
		<a
			href={project.link}
			target="_blank"
			rel="noopener noreferrer"
			className={clsx(
				'group relative flex h-full w-full items-center justify-center rounded-lg bg-transparent p-1 md:w-3/4',
				sequentialGradientAnimation,
				backgroundLayer,
				focusStyles
			)}
			onMouseDown={() => {
				hadDragRef.current = false;
			}}
			onTouchStart={() => {
				hadDragRef.current = false;
			}}
			onMouseMove={() => {
				hadDragRef.current = true;
			}}
			onTouchMove={() => {
				hadDragRef.current = true;
			}}
			onClick={(e) => {
				if (hadDragRef.current) {
					e.preventDefault();
					e.stopPropagation();
				}
			}}
		>
			<article className="z-10 flex min-h-full w-full flex-col gap-y-2 rounded-lg bg-gray-900 px-4 pt-8">
				<h1 className="font-inter mb-2 w-full text-start text-4xl font-bold text-white">
					{project.title}
				</h1>
				<h2 className="mb-3 w-full text-start text-green-400 sm:text-lg">
					{project.subtitle}
				</h2>
				<p className="w-full text-start leading-relaxed text-gray-200">
					{project.description}
				</p>
			</article>
		</a>
	);
}

export default ProjectCard;
