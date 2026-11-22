import type { Handle } from '@sveltejs/kit/hooks';

// Set <html lang="…"> for each prerendered page: English under /en, Dutch everywhere else.
export const handle: Handle = ({ event, resolve }) =>
	resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('%lang%', (event.params as { lang?: string }).lang === 'en' ? 'en' : 'nl')
	});
