<script lang="ts">
	import { resolve } from '$app/paths';
	import logo from '#lib/assets/iris-logo.jpg';

	// TODO: add the real files to src/lib/assets (or static/) and link them here.
	// Items without an `href` show "On request".
	const downloads: { label: string; description: string; href?: string; filename?: string }[] = [
		{
			label: 'Logo',
			description: 'Iris logo, JPG, 1024 × 1024',
			href: logo,
			filename: 'iris-logo.jpg'
		},
		{ label: 'Press photos', description: 'High-resolution band photos for posters and press' },
		{ label: 'Technical rider', description: 'Backline, PA and monitoring requirements' },
		{ label: 'Stage plan', description: 'Stage layout and input list' }
	];
</script>

<svelte:head>
	<title>Promoter Pack – Iris</title>
	<meta
		name="description"
		content="Everything promoters and venues need to book and promote Iris."
	/>
</svelte:head>

<div class="mx-auto max-w-3xl px-4 py-12 sm:py-16">
	<a
		href={resolve('/')}
		class="text-sm font-semibold tracking-widest text-iris-grey uppercase transition hover:text-iris-white"
	>
		← Home
	</a>

	<h1 class="mt-8 text-4xl font-bold tracking-wide text-iris-white uppercase sm:text-5xl">
		Promoter Pack
	</h1>
	<div class="mt-4 h-1 w-16 bg-iris-red"></div>

	<p class="mt-8 text-lg text-iris-grey">
		Everything you need to book and promote an Iris show: the story, the music and the downloads.
	</p>

	<section class="mt-12">
		<h2 class="text-xl font-bold tracking-wide text-iris-white uppercase">About Iris</h2>
		<!-- TODO: replace with the band's own bio and line-up. -->
		<p class="mt-4 text-iris-grey">
			Iris is a tribute to the band Live, bringing the anthems of <em>Throwing Copper</em>,
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
				Full show or a shorter festival set
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
			{#each downloads as item (item.label)}
				<li>
					{#if item.href}
						<!-- File download, not a route, so resolve() doesn't apply. -->
						<!-- eslint-disable svelte/no-navigation-without-resolve -->
						<a
							href={item.href}
							download={item.filename}
							class="flex h-full items-center justify-between gap-4 rounded-xl border border-iris-line bg-iris-surface p-5 transition hover:border-iris-red"
						>
							<span>
								<span class="block font-semibold text-iris-white">{item.label}</span>
								<span class="mt-1 block text-sm text-iris-grey">{item.description}</span>
							</span>
							<span class="text-sm font-semibold text-iris-red">Download</span>
						</a>
						<!-- eslint-enable svelte/no-navigation-without-resolve -->
					{:else}
						<div
							class="flex h-full items-center justify-between gap-4 rounded-xl border border-iris-line bg-iris-surface p-5"
						>
							<span>
								<span class="block font-semibold text-iris-white">{item.label}</span>
								<span class="mt-1 block text-sm text-iris-grey">{item.description}</span>
							</span>
							<span class="shrink-0 text-sm text-iris-grey">On request</span>
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	</section>

	<section
		class="mt-12 flex flex-col justify-between gap-4 rounded-xl border border-iris-red/40 bg-iris-red/10 p-6 sm:flex-row sm:items-center"
	>
		<div>
			<p class="font-semibold text-iris-white">Want to book Iris?</p>
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
