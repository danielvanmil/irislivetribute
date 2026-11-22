<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Shows – Iris</title>
</svelte:head>

<div class="mx-auto max-w-3xl px-4 py-12 sm:py-16">
	<a
		href={resolve('/')}
		class="text-sm font-semibold tracking-widest text-iris-grey uppercase transition hover:text-iris-white"
	>
		← Home
	</a>

	<h1 class="mt-8 text-4xl font-bold tracking-wide text-iris-white uppercase sm:text-5xl">Shows</h1>
	<div class="mt-4 h-1 w-16 bg-iris-red"></div>

	<div
		class="mt-10 rounded-xl border border-dashed border-iris-line bg-iris-surface p-8 text-center text-iris-grey"
	>
		New show dates will be announced here soon.
	</div>
</div>
