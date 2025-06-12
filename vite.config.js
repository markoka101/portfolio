import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemapPlugin from 'vite-plugin-sitemap';
// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		sitemapPlugin({
			hostname: 'https://markokaportfolio.com/',
			dynamicRoutes: ['/', '/projects', '/about-me', '/skills', '/testimonials', '/contact']
		})
	]
});
