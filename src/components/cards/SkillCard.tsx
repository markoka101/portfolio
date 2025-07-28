import type { SkillItem } from '../../data/SkillsData.ts';

interface SkillCardProps {
	section: {
		title: string;
		data: SkillItem[];
		className?: string;
	};
	sectionRef: React.RefObject<HTMLDivElement | null>;
	isVisible: boolean;
}

export default function SkillCard({ section, sectionRef, isVisible }: Readonly<SkillCardProps>) {
	return (
		<div
			ref={sectionRef}
			className={`${section.className} flex w-full flex-col items-center justify-center transition-all duration-500 ease-in-out ${
				isVisible ? 'blur-0' : 'blur-[2px]'
			}`}
		>
			<h1 className="text-center text-3xl font-bold text-black">{section.title}</h1>
			<div className="relative flex h-3/4 w-full flex-wrap items-center justify-center md:w-3/4 lg:w-3/4">
				{section.data.map((item) => (
					<div key={item.title} className="w-3/4 px-1 py-2 sm:w-1/2">
						<div className="bg-opacity-70 flex h-full items-center rounded bg-black p-5">
							<item.icon className="mr-4" size="30" />
							<span className="text-xl font-medium text-white">{item.title}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
