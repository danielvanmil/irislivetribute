<script lang="ts">
	import { asset, resolve } from '$app/paths';

	// Files in static/promoter-pack/. Add a file there and list it here to offer it for download.
	const downloads = [
		{
			title: 'Logo',
			description: 'Īris logo for posters and socials, 1024 × 1024',
			file: 'promoter-pack/iris-logo.jpg',
			type: 'JPG',
			size: '148 KB'
		},
		{
			title: 'Band photo',
			description: 'Band image for posters and press, 1024 × 1024',
			file: 'promoter-pack/iris-band-photo.png',
			type: 'PNG',
			size: '2.5 MB'
		},
		{
			title: 'Stage plot',
			description: 'Stage layout and backline positions for the crew',
			file: 'promoter-pack/iris-stage-plot.pdf',
			type: 'PDF',
			size: '218 KB'
		},
		{
			title: 'Input list',
			description: 'Channel list for the sound engineer',
			file: 'promoter-pack/iris-input-list.pdf',
			type: 'PDF',
			size: '5 KB'
		},
		{
			title: 'Biography',
			description: 'Band biography in Dutch',
			file: 'promoter-pack/iris-biografie.docx',
			type: 'Word',
			size: '8 KB'
		}
	] as const;
</script>

<svelte:head>
	<title>Promoter Pack – Īris</title>
	<meta
		name="description"
		content="Everything promoters and venues need to book and promote Īris."
	/>
</svelte:head>

<div class="mx-auto max-w-3xl px-4 py-12 sm:py-16">
	<h1 class="text-4xl font-bold tracking-wide text-iris-white uppercase sm:text-5xl">
		Promoter Pack
	</h1>
	<div class="mt-4 h-1 w-16 bg-iris-red"></div>

	<p class="mt-8 text-lg text-iris-grey">
		Everything you need to book and promote an Īris show: the story, the music and the downloads.
	</p>

	<section class="mt-12">
		<h2 class="text-xl font-bold tracking-wide text-iris-white uppercase">About Īris</h2>
		<!-- TODO: replace with the band's own bio and line-up. -->
		<p class="mt-4 text-iris-grey">
			Īris is a tribute to the band Līve, bringing the anthems of <em>Throwing Copper</em>,
			<em>Secret Samadhi</em> and <em>The Distance to Here</em> back to the stage. The band takes
			its name from "Iris", a track on <em>Throwing Copper</em>.
		</p>
	</section>

	<section class="mt-12">
		<h2 class="text-xl font-bold tracking-wide text-iris-white uppercase">The show</h2>
		<ul class="mt-4 space-y-3 text-iris-grey">
			<li class="flex gap-3">
				<span class="mt-2 size-2 shrink-0 rounded-full bg-iris-red"></span>
				Lightning Crashes, I Alone, Selling the Drama, The Dolphin's Cry, All Over You and more
			</li>
			<li class="flex gap-3">
				<span class="mt-2 size-2 shrink-0 rounded-full bg-iris-red"></span>
				Suitable for clubs, theatres, festivals and private events
			</li>
		</ul>
	</section>

	<section class="mt-12">
		<h2 class="text-xl font-bold tracking-wide text-iris-white uppercase">Downloads</h2>
		<ul class="mt-4 grid gap-4 sm:grid-cols-2">
			{#each downloads as item (item.file)}
				<li>
					<a
						href={asset(item.file)}
						download
						class="group flex h-full items-center gap-4 rounded-xl border border-iris-line bg-iris-surface p-5 transition hover:border-iris-red"
					>
						<span
							class="flex size-12 shrink-0 items-center justify-center rounded-lg bg-iris-red/15 text-xs font-bold tracking-wider text-iris-red uppercase"
						>
							{item.type}
						</span>
						<span class="min-w-0 grow">
							<span class="block font-semibold text-iris-white">{item.title}</span>
							<span class="mt-1 block text-sm text-iris-grey">{item.description}</span>
							<span class="mt-1 block text-xs text-iris-grey/70">{item.type} · {item.size}</span>
						</span>
						<svg
							class="size-5 shrink-0 text-iris-grey transition group-hover:text-iris-red"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
						</svg>
					</a>
				</li>
			{/each}
		</ul>
	</section>

	<section
		class="mt-12 flex flex-col justify-between gap-4 rounded-xl border border-iris-red/40 bg-iris-red/10 p-6 sm:flex-row sm:items-center"
	>
		<div>
			<p class="font-semibold text-iris-white">Want to book Īris?</p>
			<p class="text-sm text-iris-grey">Get in touch for availability and fees.</p>
		</div>
		<a
			href={resolve('/bookings')}
			class="shrink-0 rounded-lg bg-iris-red px-5 py-3 text-center text-sm font-semibold text-iris-white transition hover:bg-iris-red-dark"
		>
			Contact us
		</a>
	</section>
</div>
