<script lang="ts">
	import { asset, resolve } from '$app/paths';
	import { currentLang, langParam } from '#lib/i18n.ts';

	const lang = $derived(currentLang());

	// Files in static/promoter-pack/. Add a file there and list it here to offer it for download.
	const files = [
		{ id: 'logo', file: 'promoter-pack/iris-logo.jpg', type: 'JPG', size: '148 KB' },
		{ id: 'photo', file: 'promoter-pack/iris-band-photo.png', type: 'PNG', size: '2.5 MB' },
		{ id: 'stage', file: 'promoter-pack/iris-stage-plot.pdf', type: 'PDF', size: '218 KB' },
		{ id: 'input', file: 'promoter-pack/iris-input-list.pdf', type: 'PDF', size: '5 KB' },
		{ id: 'bio', file: 'promoter-pack/iris-biografie.docx', type: 'Word', size: '8 KB' }
	] as const;

	const text = {
		nl: {
			description: 'Alles wat promoters en podia nodig hebben om Īris te boeken en te promoten.',
			intro:
				'Alles wat je nodig hebt om een show van Īris te boeken en te promoten: het verhaal, de muziek en de downloads.',
			aboutTitle: 'Over Īris',
			showTitle: 'De show',
			songs:
				"Lightning Crashes, I Alone, Selling the Drama, The Dolphin's Cry, All Over You en meer",
			venues: 'Geschikt voor clubs, theaters, festivals en besloten feesten',
			downloads: 'Downloads',
			ctaTitle: 'Īris boeken?',
			ctaText: 'Neem contact op voor beschikbaarheid en prijzen.',
			ctaButton: 'Neem contact op',
			files: {
				logo: ['Logo', 'Īris-logo voor posters en socials, 1024 × 1024'],
				photo: ['Bandfoto', 'Bandafbeelding voor posters en pers, 1024 × 1024'],
				stage: ['Stageplot', 'Podiumindeling en backline-posities voor de crew'],
				input: ['Inputlijst', 'Kanalenlijst voor de geluidstechnicus'],
				bio: ['Biografie', 'Biografie van de band (Nederlands)']
			}
		},
		en: {
			description: 'Everything promoters and venues need to book and promote Īris.',
			intro:
				'Everything you need to book and promote an Īris show: the story, the music and the downloads.',
			aboutTitle: 'About Īris',
			showTitle: 'The show',
			songs:
				"Lightning Crashes, I Alone, Selling the Drama, The Dolphin's Cry, All Over You and more",
			venues: 'Suitable for clubs, theatres, festivals and private events',
			downloads: 'Downloads',
			ctaTitle: 'Want to book Īris?',
			ctaText: 'Get in touch for availability and fees.',
			ctaButton: 'Contact us',
			files: {
				logo: ['Logo', 'Īris logo for posters and socials, 1024 × 1024'],
				photo: ['Band photo', 'Band image for posters and press, 1024 × 1024'],
				stage: ['Stage plot', 'Stage layout and backline positions for the crew'],
				input: ['Input list', 'Channel list for the sound engineer'],
				bio: ['Biography', 'Band biography in Dutch']
			}
		}
	};
	const t = $derived(text[lang]);
</script>

<svelte:head>
	<title>Promoter Pack – Īris</title>
	<meta name="description" content={t.description} />
</svelte:head>

<div class="mx-auto max-w-3xl px-4 py-12 sm:py-16">
	<h1 class="text-4xl font-bold tracking-wide text-iris-white uppercase sm:text-5xl">
		Promoter Pack
	</h1>
	<div class="mt-4 h-1 w-16 bg-iris-red"></div>

	<p class="mt-8 text-lg text-iris-grey">{t.intro}</p>

	<section class="mt-12">
		<h2 class="text-xl font-bold tracking-wide text-iris-white uppercase">{t.aboutTitle}</h2>
		<!-- TODO: replace with the band's own bio and line-up. -->
		<p class="mt-4 text-iris-grey">
			{#if lang === 'nl'}
				Īris is een tribute aan de band Līve en brengt de klassiekers van <em>Throwing Copper</em>,
				<em>Secret Samadhi</em> en <em>The Distance to Here</em> terug op het podium. De band is
				vernoemd naar "Iris", een nummer van <em>Throwing Copper</em>.
			{:else}
				Īris is a tribute to the band Līve, bringing the anthems of <em>Throwing Copper</em>,
				<em>Secret Samadhi</em> and <em>The Distance to Here</em> back to the stage. The band takes
				its name from "Iris", a track on <em>Throwing Copper</em>.
			{/if}
		</p>
	</section>

	<section class="mt-12">
		<h2 class="text-xl font-bold tracking-wide text-iris-white uppercase">{t.showTitle}</h2>
		<ul class="mt-4 space-y-3 text-iris-grey">
			<li class="flex gap-3">
				<span class="mt-2 size-2 shrink-0 rounded-full bg-iris-red"></span>
				{t.songs}
			</li>
			<li class="flex gap-3">
				<span class="mt-2 size-2 shrink-0 rounded-full bg-iris-red"></span>
				{t.venues}
			</li>
		</ul>
	</section>

	<section class="mt-12">
		<h2 class="text-xl font-bold tracking-wide text-iris-white uppercase">{t.downloads}</h2>
		<ul class="mt-4 grid gap-4 sm:grid-cols-2">
			{#each files as item (item.file)}
				{@const [title, description] = t.files[item.id]}
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
							<span class="block font-semibold text-iris-white">{title}</span>
							<span class="mt-1 block text-sm text-iris-grey">{description}</span>
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
			<p class="font-semibold text-iris-white">{t.ctaTitle}</p>
			<p class="text-sm text-iris-grey">{t.ctaText}</p>
		</div>
		<a
			href={resolve('/[[lang=lang]]/bookings', { lang: langParam(lang) })}
			class="shrink-0 rounded-lg bg-iris-red px-5 py-3 text-center text-sm font-semibold text-iris-white transition hover:bg-iris-red-dark"
		>
			{t.ctaButton}
		</a>
	</section>
</div>
