<script lang="ts">
	import { playlistUrl, videos } from '#lib/videos.ts';
</script>

<svelte:head>
	<title>Video – Īris</title>
	<meta name="description" content="Watch Īris, the tribute band to Līve, on stage." />
</svelte:head>

<div class="mx-auto max-w-5xl px-4 py-12 sm:py-16">
	<h1 class="text-4xl font-bold tracking-wide text-iris-white uppercase sm:text-5xl">Video</h1>
	<div class="mt-4 h-1 w-16 bg-iris-red"></div>

	<p class="mt-8 text-lg text-iris-grey">See and hear what an Īris show is like.</p>

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
		Watch the full playlist on YouTube
		<span class="text-iris-red" aria-hidden="true">→</span>
	</a>
	<!-- eslint-enable svelte/no-navigation-without-resolve -->
</div>
