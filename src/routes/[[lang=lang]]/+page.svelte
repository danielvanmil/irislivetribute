<script lang="ts">
	import { resolve } from '$app/paths';
	import logo from '#lib/assets/iris-logo-black.webp';
	import { currentLang, langParam } from '#lib/i18n.ts';

	const lang = $derived(currentLang());
	const t = $derived(
		{
			nl: { button: 'Bekijk de shows' },
			en: { button: 'See upcoming shows' }
		}[lang]
	);
</script>

<svelte:head>
	<title>Īris – A tribute to Līve</title>
</svelte:head>

<section>
	<div class="mx-auto flex max-w-4xl flex-col items-center px-4 py-12 text-center sm:py-16">
		<img
			src={logo}
			alt="Īris – A tribute to the band Līve"
			width="1024"
			height="1024"
			class="h-auto w-full max-w-md"
		/>

		<h1 class="mt-10 text-5xl font-bold tracking-[0.25em] text-iris-red uppercase sm:text-6xl">
			Īris
		</h1>
		<!-- The band's tagline (same as on the logo), so it stays the same in both languages. -->
		<p class="mt-3 text-lg tracking-widest text-iris-grey uppercase">A tribute to the band Līve</p>

		<a
			href={resolve('/[[lang=lang]]/shows', { lang: langParam(lang) })}
			class="mt-8 inline-flex items-center rounded-lg bg-iris-red px-5 py-3 text-sm font-semibold text-iris-white transition hover:bg-iris-red-dark focus:ring-2 focus:ring-iris-red focus:ring-offset-2 focus:ring-offset-iris-black focus:outline-none"
		>
			{t.button}
		</a>
	</div>
</section>
