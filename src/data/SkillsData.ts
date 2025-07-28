import Css3Original from 'devicons-react/icons/Css3Original';
import DockerPlain from 'devicons-react/icons/DockerPlain';
import EclipseOriginal from 'devicons-react/icons/EclipseOriginal';
import ExpressOriginal from 'devicons-react/icons/ExpressOriginal';
import GitOriginal from 'devicons-react/icons/GitOriginal';
import GithubOriginal from 'devicons-react/icons/GithubOriginal';
import HibernateOriginal from 'devicons-react/icons/HibernateOriginal';
import Html5Original from 'devicons-react/icons/Html5Original';
import IntellijOriginal from 'devicons-react/icons/IntellijOriginal';
import JavaOriginal from 'devicons-react/icons/JavaOriginal';
import JavascriptOriginal from 'devicons-react/icons/JavascriptOriginal';
import NodejsOriginal from 'devicons-react/icons/NodejsOriginal';
import PostgresqlOriginal from 'devicons-react/icons/PostgresqlOriginal';
import PostmanOriginal from 'devicons-react/icons/PostmanOriginal';
import ReactOriginal from 'devicons-react/icons/ReactOriginal';
import SpringOriginal from 'devicons-react/icons/SpringOriginal';
import SqldeveloperOriginal from 'devicons-react/icons/SqldeveloperOriginal';
import TailwindcssOriginal from 'devicons-react/icons/TailwindcssOriginal';
import TypescriptOriginal from 'devicons-react/icons/TypescriptOriginal';
import ViteOriginal from 'devicons-react/icons/ViteOriginal';
import VscodeOriginal from 'devicons-react/icons/VscodeOriginal';

export interface SkillItem {
	title: string;
	icon: React.ComponentType<any>;
}

/*
Skills and tools
*/
export const languages: SkillItem[] = [
	{
		title: 'Java',
		icon: JavaOriginal
	},
	{
		title: 'JavaScript',
		icon: JavascriptOriginal
	},
	{
		title: 'TypeScript',
		icon: TypescriptOriginal
	},
	{
		title: 'SQL',
		icon: SqldeveloperOriginal
	},
	{
		title: 'HTML',
		icon: Html5Original
	},
	{
		title: 'CSS',
		icon: Css3Original
	}
];

export const frameworks: SkillItem[] = [
	{
		title: 'Spring Boot',
		icon: SpringOriginal
	},
	{
		title: 'Node',
		icon: NodejsOriginal
	},
	{
		title: 'Express',
		icon: ExpressOriginal
	},
	{
		title: 'React',
		icon: ReactOriginal
	},
	{
		title: 'Tailwind',
		icon: TailwindcssOriginal
	},
	{
		title: 'Vite',
		icon: ViteOriginal
	}
];

export const database: SkillItem[] = [
	{
		title: 'Git',
		icon: GitOriginal
	},
	{
		title: 'Github',
		icon: GithubOriginal
	},
	{
		title: 'Hibernate',
		icon: HibernateOriginal
	},
	{
		title: 'JPA',
		icon: SqldeveloperOriginal
	},
	{
		title: 'PostgreSQL',
		icon: PostgresqlOriginal
	}
];

export const tools: SkillItem[] = [
	{
		title: 'IntelliJ',
		icon: IntellijOriginal
	},
	{
		title: 'Visual Studio',
		icon: VscodeOriginal
	},
	{
		title: 'Postman',
		icon: PostmanOriginal
	},
	{
		title: 'Eclipse',
		icon: EclipseOriginal
	},
	{
		title: 'Docker',
		icon: DockerPlain
	}
];
