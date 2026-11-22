<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/iris-logo.jpg';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content="#000000" />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<main class="grow">
		{@render children()}
	</main>

	<footer class="border-t border-iris-line px-4 py-8 text-center text-xs text-iris-grey">
		&copy; {new Date().getFullYear()} Iris. Iris is a tribute band and is not affiliated with Live.
	</footer>
</div>
