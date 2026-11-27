<script lang="ts">
	import './layout.css';
	import { fade } from 'svelte/transition';
	import { page } from '$app/state';
	import Nav from '#lib/Nav.svelte';
	import { currentLang, isPagePath, pathWithoutLang, ui } from '#lib/i18n.ts';
	import favicon from '#lib/assets/iris-logo.jpg';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const lang = $derived(currentLang());
	const here = $derived(pathWithoutLang(page.url.pathname));

	// Keep <html lang> correct when switching language without a page reload.
	$effect(() => {
		document.documentElement.lang = lang;
	});

	// Tell search engines about the other language version of each page.
	const site = 'https://www.irislivetribute.nl';
	const alternates = $derived(
		isPagePath(here)
			? [
					{ hreflang: 'nl', href: site + (here === '/' ? '/' : here) },
					{ hreflang: 'en', href: site + '/en' + (here === '/' ? '' : here) },
					{ hreflang: 'x-default', href: site + (here === '/' ? '/' : here) }
				]
			: []
	);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content="#000000" />
	{#each alternates as alt (alt.hreflang)}
		<link rel="alternate" hreflang={alt.hreflang} href={alt.href} />
	{/each}
</svelte:head>

<div class="flex min-h-screen flex-col">
	<!-- Sticky menu: stays at the top on every page while the content below changes. -->
	<Nav />

	<main class="grow">
		<!-- Fade in the new page on each navigation (pages load client-side, no full reload). -->
		{#key page.url.pathname}
			<div in:fade={{ duration: 200 }}>
				{@render children()}
			</div>
		{/key}
	</main>

	<footer class="border-t border-iris-line px-4 py-8 text-center text-xs text-iris-grey">
		&copy; {new Date().getFullYear()} Īris. {ui[lang].footer}
	</footer>
</div>
