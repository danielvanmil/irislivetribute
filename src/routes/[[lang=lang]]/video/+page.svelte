<script lang="ts">
	import { currentLang } from '#lib/i18n.ts';
	import { playlistUrl, videos } from '#lib/videos.ts';

	const lang = $derived(currentLang());
	const t = $derived(
		{
			nl: {
				description: 'Bekijk Īris, de tributeband van Līve, op het podium.',
				intro: 'Zie en hoor wat je bij een show van Īris kunt verwachten.',
				playlist: 'Bekijk de hele playlist op YouTube'
			},
			en: {
				description: 'Watch Īris, the tribute band to Līve, on stage.',
				intro: 'See and hear what an Īris show is like.',
				playlist: 'Watch the full playlist on YouTube'
			}
		}[lang]
	);
</script>

<svelte:head>
	<title>Video – Īris</title>
	<meta name="description" content={t.description} />
</svelte:head>

<div class="mx-auto max-w-5xl px-4 py-12 sm:py-16">
	<h1 class="text-4xl font-bold tracking-wide text-iris-white uppercase sm:text-5xl">Video</h1>
	<div class="mt-4 h-1 w-16 bg-iris-red"></div>

	<p class="mt-8 text-lg text-iris-grey">{t.intro}</p>

	<ul class="mt-10 grid gap-8 md:grid-cols-2">
		{#each videos as video (video.id)}
			<li class="overflow-hidden rounded-xl border border-iris-line bg-iris-surface">
				<div class="aspect-video bg-iris-black">
					<iframe
						class="size-full"
						src="https://www.youtube-nocookie.com/embed/{video.id}"
						title={video.title}
						loading="lazy"
						allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
				<p class="px-5 py-4 font-semibold text-iris-white">{video.title}</p>
			</li>
		{/each}
	</ul>

	<!-- External link to YouTube, not a route, so resolve() doesn't apply. -->
	<!-- eslint-disable svelte/no-navigation-without-resolve -->
	<a
		href={playlistUrl}
		target="_blank"
		rel="noopener noreferrer"
		class="mt-10 inline-flex items-center gap-2 rounded-lg border border-iris-line px-5 py-3 text-sm font-semibold text-iris-white transition hover:border-iris-red"
	>
		{t.playlist}
		<span class="text-iris-red" aria-hidden="true">→</span>
	</a>
	<!-- eslint-enable svelte/no-navigation-without-resolve -->
</div>
