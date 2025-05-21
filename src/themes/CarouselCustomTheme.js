//customizing the theme for carousel
export const customTheme = {
	root: {
		base: 'relative h-full w-full',
		leftControl:
			'absolute left-0 top-0 flex h-full items-center justify-center px-4 md:px-4 lg:px-4 focus:outline-none',
		rightControl:
			'absolute right-0 top-0 flex h-full items-center justify-center px-4 md:px-4 lg:px-4 focus:outline-none'
	},
	indicators: {
		active: {
			off: 'bg-gray-800/50 hover:bg-gray-800',
			on: 'bg-gray-800'
		},
		base: 'h-3 w-3 rounded-full',
		wrapper: 'absolute bottom--8 left-1/2 flex -translate-x-1/2 space-x-3 mt-2'
	},
	item: {
		base: 'absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2  ',
		wrapper: {
			off: 'w-full flex-shrink-0 transition-transform transform cursor-default snap-center duration-700 ease-in-out',
			on: 'w-full flex-shrink-0 transition-transform transform cursor-grab snap-center duration-700 ease-in-out'
		}
	},
	control: {
		base: 'inline-flex h-[40vh] lg:opacity-100 md:h-8 lg:h-8 w-8  ease-in-out duration-300 items-center justify-center rounded-xl group-focus:outline-none md:bg-gray-800/30 md:group-hover:bg-gray-800/60 lg:bg-gray-800/30 lg:group-hover:bg-gray-800/60 bg-transparent sm:h-10 sm:w-10',
		icon: 'h-5 w-5 text-white ease-in-out duration-300  md:text-gray-700 md:hover:text-gray-200 lg:text-gray-700 lg:hover:text-gray-200 sm:h-6 sm:w-6'
	},
	scrollContainer: {
		base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg',
		snap: 'snap-x'
	}
};
