<script lang="ts">
	import { resolve } from '$app/paths';
	import Nav from '#lib/Nav.svelte';
	import logo from '#lib/assets/iris-logo.jpg';
</script>

<svelte:head>
	<title>Iris – A tribute to Live</title>
</svelte:head>

<section>
	<div class="mx-auto flex max-w-4xl flex-col items-center px-4 py-12 text-center sm:py-16">
		<Nav />

		<img src={logo} alt="Iris – A tribute to the band Live" width="1024" height="1024" />

		<h1 class="mt-10 text-5xl font-bold tracking-[0.25em] text-iris-red uppercase sm:text-6xl">
			Iris
		</h1>
		<p class="mt-3 text-lg tracking-widest text-iris-grey uppercase">A tribute to the band Live</p>

		<a
			href={resolve('/shows')}
			class="mt-8 inline-flex items-center rounded-lg bg-iris-red px-5 py-3 text-sm font-semibold text-iris-white transition hover:bg-iris-red-dark focus:ring-2 focus:ring-iris-red focus:ring-offset-2 focus:ring-offset-iris-black focus:outline-none"
		>
			See upcoming shows
		</a>
	</div>
</section>
