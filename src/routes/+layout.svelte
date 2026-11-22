<script lang="ts">
	import './layout.css';
	import { fade } from 'svelte/transition';
	import { page } from '$app/state';
	import Nav from '#lib/Nav.svelte';
	import favicon from '#lib/assets/iris-logo.jpg';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content="#000000" />
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
		&copy; {new Date().getFullYear()} Īris. Īris is a tribute band and is not affiliated with Līve.
	</footer>
</div>
