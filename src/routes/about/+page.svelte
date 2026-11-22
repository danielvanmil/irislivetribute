<script lang="ts">
	import { onMount } from 'svelte';
	import { members } from '#lib/members.ts';
	import { bandPhotos } from '#lib/bandPhotos.ts';
	import PhotoSlider from '#lib/PhotoSlider.svelte';

	// Sections of this page, in page order. Used for the submenu.
	const sections = [
		{ id: 'biography', label: 'Biography' },
		{ id: 'members', label: 'Members' },
		{ id: 'band', label: 'Band' }
	];

	let active = $state(sections[0].id);

	// Highlight the submenu item of the section currently on screen.
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) if (entry.isIntersecting) active = entry.target.id;
			},
			// A section counts as "current" when it crosses a line just below the sticky menus.
			{ rootMargin: '-140px 0px -55% 0px' }
		);
		for (const { id } of sections) {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		}
		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>About – Īris</title>
	<meta
		name="description"
		content="Īris - a tribute to the band līve: the ultimate tribute to Līve, with Lightning Crashes, I Alone, Overcome and more."
	/>
</svelte:head>

<div class="mx-auto max-w-6xl px-4 pt-12 sm:pt-16">
	<h1 class="text-4xl font-bold tracking-wide text-iris-white uppercase sm:text-5xl">About</h1>
	<div class="mt-4 h-1 w-16 bg-iris-red"></div>
</div>

<!-- Submenu: sticks just below the main menu while scrolling. -->
<nav
	aria-label="About sections"
	class="sticky top-[65px] z-40 mt-8 border-y border-iris-line bg-iris-black/85 backdrop-blur md:top-[73px]"
>
	<ul class="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none]">
		{#each sections as section (section.id)}
			<li>
				<a
					href="#{section.id}"
					aria-current={active === section.id ? 'true' : undefined}
					onclick={() => (active = section.id)}
					class="block rounded-full border px-4 py-1.5 text-xs font-semibold tracking-widest whitespace-nowrap uppercase transition {active ===
					section.id
						? 'border-iris-red bg-iris-red text-iris-white'
						: 'border-iris-line text-iris-grey hover:border-iris-red hover:text-iris-white'}"
				>
					{section.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<div class="mx-auto max-w-6xl px-4 pb-12 sm:pb-16">
	<!-- scroll-mt keeps headings clear of the two sticky menus when jumping to a section. -->
	<section id="biography" class="scroll-mt-36 pt-10 md:scroll-mt-40">
		<h2 class="text-xl font-bold tracking-wide text-iris-white uppercase">Biography</h2>

		<article class="mt-6 max-w-3xl">
			<p class="text-xl font-semibold tracking-wide text-iris-red">
				Īris - a tribute to the band līve
			</p>

			<div class="mt-6 space-y-5 text-lg leading-relaxed text-iris-grey">
				<p>
					Līve is one of the few bands of their generation to bring the grand gesture back to pop
					music. That is why the band is often compared to U2, although their music is closer to
					R.E.M. and The Beatles. Their ability to move huge crowds makes them the perfect festival
					band. Singer and songwriter Ed Kowalczyk writes sweeping rock songs with one main goal: to
					inspire the audience. Those almost messianic aspirations make him an easy target for
					critics. The fact is that a good Līve concert is an almost spiritual experience.
				</p>
				<p class="text-iris-white">
					It is exactly that spiritual energy, that untameable passion and that wall of sound that
					Īris - a tribute to the band līve brings to life with uncanny precision.
				</p>
				<p>
					As the ultimate tribute to one of the most iconic 90s rock bands in the world, the band
					brings the spirit of Ed Kowalczyk and his men back to the stage.
				</p>
			</div>

			<h3 class="mt-10 text-lg font-bold tracking-wide text-iris-white uppercase">
				The magic of Throwing Copper and beyond
			</h3>
			<p class="mt-4 text-lg leading-relaxed text-iris-grey">
				Who doesn't remember the legendary singalongs of <em>Lightning Crashes</em>, the raw energy
				of <em>I Alone</em> or the melancholy weight of <em>Overcome</em>? Īris - a tribute to the
				band līve grabs you by the throat and takes you back to the heyday of alternative rock. With
				deep admiration for the original, but with a dynamic all of its own, the band fires hit
				after hit at the audience. Not a cheap copy, but a tribute that crackles with adrenaline.
			</p>
		</article>
	</section>

	<section id="members" class="mt-16 scroll-mt-36 md:scroll-mt-40">
		<h2 class="text-xl font-bold tracking-wide text-iris-white uppercase">Members</h2>

		<ul class="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
			{#each members as member (member.name)}
				<li class="overflow-hidden rounded-xl border border-iris-line bg-iris-surface">
					<img
						src={member.photo}
						alt="{member.name}, {member.role.toLowerCase()}"
						loading="lazy"
						class="aspect-[4/5] w-full object-cover object-top grayscale"
					/>
					<div class="px-4 py-3">
						<p class="font-semibold text-iris-white">{member.name}</p>
						<p class="text-sm tracking-widest text-iris-red uppercase">{member.role}</p>
					</div>
				</li>
			{/each}
		</ul>
	</section>

	<section id="band" class="mt-16 scroll-mt-36 md:scroll-mt-40">
		<h2 class="text-xl font-bold tracking-wide text-iris-white uppercase">Band</h2>
		<div class="mt-6">
			<PhotoSlider photos={bandPhotos} label="Band photos" alt="Īris live on stage" />
		</div>
	</section>
</div>
