import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import sitemapPlugin from 'vite-plugin-sitemap';

export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		sitemapPlugin({
			hostname: 'https://markokaportfolio.com/',
			dynamicRoutes: ['/', '/projects', '/about-me', '/skills', '/testimonials', '/contact']
		})
	]
});
