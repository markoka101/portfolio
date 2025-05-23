const flowbite = require('flowbite-react/tailwind');
module.exports = {
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
