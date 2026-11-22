// Languages: Dutch is the default (no URL prefix), English lives under /en.
import { page } from '$app/state';

export type Lang = 'nl' | 'en';

/** The language of the current page, from the optional [[lang]] part of the URL. */
export function currentLang(): Lang {
	return (page.params as { lang?: string }).lang === 'en' ? 'en' : 'nl';
}

/** The page path without the language prefix, e.g. '/en/about' → '/about'. */
export function pathWithoutLang(pathname: string): string {
	return pathname.replace(/^\/en(?=\/|$)/, '') || '/';
}

/** Route ids per page, for use with resolve(routeIds[path], { lang: langParam(lang) }). */
export const routeIds = {
	'/': '/[[lang=lang]]',
	'/about': '/[[lang=lang]]/about',
	'/shows': '/[[lang=lang]]/shows',
	'/video': '/[[lang=lang]]/video',
	'/promoter-pack': '/[[lang=lang]]/promoter-pack',
	'/bookings': '/[[lang=lang]]/bookings'
} as const;

export type PagePath = keyof typeof routeIds;

export function isPagePath(path: string): path is PagePath {
	return path in routeIds;
}

/** The [[lang]] route param for a language: English gets /en, Dutch has no prefix. */
export function langParam(lang: Lang): 'en' | undefined {
	return lang === 'en' ? 'en' : undefined;
}

/** Texts shared by every page (menu, footer, buttons). */
export const ui = {
	nl: {
		nav: {
			'/': 'Home',
			'/about': 'Over ons',
			'/shows': 'Shows',
			'/video': 'Video',
			'/promoter-pack': 'Promoter Pack',
			'/bookings': 'Boekingen'
		},
		openMenu: 'Menu openen',
		closeMenu: 'Menu sluiten',
		socialOn: 'Īris op',
		languageLabel: 'Taal',
		footer: 'Īris is een tributeband en is niet verbonden aan Līve.'
	},
	en: {
		nav: {
			'/': 'Home',
			'/about': 'About',
			'/shows': 'Shows',
			'/video': 'Video',
			'/promoter-pack': 'Promoter Pack',
			'/bookings': 'Bookings'
		},
		openMenu: 'Open menu',
		closeMenu: 'Close menu',
		socialOn: 'Īris on',
		languageLabel: 'Language',
		footer: 'Īris is a tribute band and is not affiliated with Līve.'
	}
} satisfies Record<Lang, unknown>;
