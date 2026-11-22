import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// Static build for GitHub Pages: every page is prerendered to HTML in `build/`.
			// 404.html is what GitHub Pages shows for unknown URLs.
			adapter: adapter({ fallback: '404.html' }),

			paths: {
				// GitHub Pages serves this repo under /<repo-name>. The deploy workflow sets
				// BASE_PATH to that; locally it's empty so the site runs at the root.
				base: process.env.BASE_PATH as '' | `/${string}` | undefined
			}
		})
	]
});
