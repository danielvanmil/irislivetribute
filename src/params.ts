import { defineParams } from '@sveltejs/kit/params';

// Language prefix in the URL: Dutch (default) has no prefix, English lives under /en.
export const params = defineParams({
	lang: (param) => (param === 'en' ? param : undefined)
});
