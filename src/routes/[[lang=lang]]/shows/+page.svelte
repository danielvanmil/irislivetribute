<script lang="ts">
	import { onMount } from 'svelte';
	import { shows, type Show } from '#lib/shows.ts';
	import { currentLang } from '#lib/i18n.ts';

	const lang = $derived(currentLang());
	const t = $derived(
		{
			nl: {
				description: 'Komende en eerdere shows van Īris, de tributeband van Līve.',
				upcoming: 'Komend',
				past: 'Geweest',
				empty: 'Nieuwe shows worden hier binnenkort aangekondigd.',
				locale: 'nl-NL'
			},
			en: {
				description: 'Upcoming and past shows of Īris, the tribute band to Līve.',
				upcoming: 'Upcoming',
				past: 'Past',
				empty: 'New show dates will be announced here soon.',
				locale: 'en-GB'
			}
		}[lang]
	);

	// The page is prebuilt, so start with the build date and switch to the visitor's
	// date once it loads in the browser. That way a show moves to "Past" on time even
	// if the site hasn't been rebuilt since.
	let today = $state(new Date().toISOString().slice(0, 10));
	onMount(() => {
		today = new Date().toISOString().slice(0, 10);
	});

	const upcoming = $derived(
		shows.filter((s) => s.date >= today).sort((a, b) => a.date.localeCompare(b.date))
	);
	const past = $derived(
		shows.filter((s) => s.date < today).sort((a, b) => b.date.localeCompare(a.date))
	);

	const parts = (show: Show) => {
		const d = new Date(show.date + 'T12:00:00');
		return {
			day: d.toLocaleDateString(t.locale, { day: '2-digit' }),
			month: d.toLocaleDateString(t.locale, { month: 'short' }).replace('.', '').toUpperCase(),
			year: d.getFullYear()
		};
	};
</script>

<svelte:head>
	<title>Shows – Īris</title>
	<meta name="description" content={t.description} />
</svelte:head>

{#snippet showList(list: Show[], muted: boolean)}
	<ul
		class="mt-4 divide-y divide-iris-line overflow-hidden rounded-xl border border-iris-line bg-iris-surface"
	>
		{#each list as show (show.date + show.venue)}
			{@const d = parts(show)}
			<li class="flex items-center gap-5 p-4 sm:p-5">
				<div class="w-16 shrink-0 text-center">
					<div
						class="text-3xl leading-none font-bold {muted ? 'text-iris-grey' : 'text-iris-white'}"
					>
						{d.day}
					</div>
					<div class="mt-1 text-xs tracking-widest {muted ? 'text-iris-grey' : 'text-iris-red'}">
						{d.month}
						{d.year}
					</div>
				</div>
				<div class="min-w-0 grow">
					<p class="truncate font-semibold {muted ? 'text-iris-grey' : 'text-iris-white'}">
						{#if show.url}
							<!-- External venue website, not a route, so resolve() doesn't apply. -->
							<!-- eslint-disable svelte/no-navigation-without-resolve -->
							<a
								href={show.url}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-1.5 underline-offset-4 transition hover:text-iris-red hover:underline"
							>
								{show.venue}
								<svg
									class="size-3.5 shrink-0"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									aria-hidden="true"
								>
									<path d="M7 17 17 7M8 7h9v9" />
								</svg>
							</a>
							<!-- eslint-enable svelte/no-navigation-without-resolve -->
						{:else}
							{show.venue}
						{/if}
					</p>
					<p class="text-sm text-iris-grey">{show.city}</p>
				</div>
				{#if !muted && show.tickets}
					<!-- External ticket shop, not a route, so resolve() doesn't apply. -->
					<!-- eslint-disable svelte/no-navigation-without-resolve -->
					<a
						href={show.tickets}
						target="_blank"
						rel="noopener noreferrer"
						class="shrink-0 rounded-lg bg-iris-red px-4 py-2 text-sm font-semibold text-iris-white transition hover:bg-iris-red-dark"
					>
						Tickets
					</a>
					<!-- eslint-enable svelte/no-navigation-without-resolve -->
				{/if}
			</li>
		{/each}
	</ul>
{/snippet}

<div class="mx-auto max-w-3xl px-4 py-12 sm:py-16">
	<h1 class="text-4xl font-bold tracking-wide text-iris-white uppercase sm:text-5xl">Shows</h1>
	<div class="mt-4 h-1 w-16 bg-iris-red"></div>

	<section class="mt-10">
		<h2 class="text-xl font-bold tracking-wide text-iris-white uppercase">{t.upcoming}</h2>
		{#if upcoming.length}
			{@render showList(upcoming, false)}
		{:else}
			<div
				class="mt-4 rounded-xl border border-dashed border-iris-line bg-iris-surface p-8 text-center text-iris-grey"
			>
				{t.empty}
			</div>
		{/if}
	</section>

	{#if past.length}
		<section class="mt-12">
			<h2 class="text-xl font-bold tracking-wide text-iris-white uppercase">{t.past}</h2>
			{@render showList(past, true)}
		</section>
	{/if}
</div>
