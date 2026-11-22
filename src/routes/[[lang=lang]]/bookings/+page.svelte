<script lang="ts">
	import { currentLang } from '#lib/i18n.ts';

	// TODO: replace with the band's real e-mail address.
	const email = 'info@example.com';

	const lang = $derived(currentLang());
	const t = $derived(
		{
			nl: {
				title: 'Boekingen',
				intro: 'Boekingen, vragen of persverzoeken? We horen graag van je.'
			},
			en: {
				title: 'Bookings',
				intro: "Bookings, questions or press enquiries? We'd love to hear from you."
			}
		}[lang]
	);
</script>

<svelte:head>
	<title>{t.title} – Īris</title>
</svelte:head>

<div class="mx-auto max-w-3xl px-4 py-12 sm:py-16">
	<h1 class="text-4xl font-bold tracking-wide text-iris-white uppercase sm:text-5xl">{t.title}</h1>
	<div class="mt-4 h-1 w-16 bg-iris-red"></div>

	<p class="mt-8 text-lg text-iris-grey">{t.intro}</p>

	<a
		href="mailto:{email}"
		class="mt-8 flex items-center justify-between gap-4 rounded-xl border border-iris-line bg-iris-surface p-6 transition hover:border-iris-red"
	>
		<span>
			<span class="block text-xs font-semibold tracking-widest text-iris-grey uppercase">
				E-mail
			</span>
			<span class="mt-1 block text-lg font-semibold text-iris-white">{email}</span>
		</span>
		<span class="text-2xl text-iris-red" aria-hidden="true">→</span>
	</a>
</div>
