/** @type {import('tailwindcss').Config} */

const flowbite = require('flowbite-react/tailwind');
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', flowbite.content()],
	theme: {
		extend: {
			transitionProperty: {
				height: 'height'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [flowbite.plugin()]
};
