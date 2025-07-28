import type { Project } from '../utils/types/projectsType';

/*
projects
*/
export const projects: Project[] = [
	{
		id: '1',
		title: 'Jeremy Messina Photographer Portfolio',
		subtitle: 'TypeScript | TSX | React | Vite | Tailwind',
		description: 'Portfolio developed for a freelance photographer',
		link: 'https://jeremy-photography-portfolio.netlify.app/'
	},

	{
		id: '2',
		title: 'Event Tracker',
		subtitle: 'Java | Javascript | Spring Boot | JPA | React | Mapbox',
		description: 'Event Tracking application',
		link: 'https://github.com/markoka101/event-tracker'
	},
	{
		id: '3',
		title: 'Inventory Checker',
		subtitle: 'Javascript | NodeJS | Puppeteer',
		description: 'Program which checks if item is in stock on website',
		link: 'https://github.com/markoka101/inventory-checker/'
	},
	{
		id: '4',
		title: 'See More',
		subtitle: '',
		description: 'See all of my projects on GitHub',
		link: 'https://github.com/markoka101'
	}
];
