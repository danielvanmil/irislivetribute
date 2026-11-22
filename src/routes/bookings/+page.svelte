<script lang="ts">
	import { resolve } from '$app/paths';

	// TODO: replace with the band's real e-mail address.
	const email = 'info@example.com';
</script>

<svelte:head>
	<title>Bookings – Iris</title>
</svelte:head>

<div class="mx-auto max-w-3xl px-4 py-12 sm:py-16">
	<a
		href={resolve('/')}
		class="text-sm font-semibold tracking-widest text-iris-grey uppercase transition hover:text-iris-white"
	>
		← Home
	</a>

	<h1 class="mt-8 text-4xl font-bold tracking-wide text-iris-white uppercase sm:text-5xl">
		Bookings
	</h1>
	<div class="mt-4 h-1 w-16 bg-iris-red"></div>

	<p class="mt-8 text-lg text-iris-grey">
		Bookings, questions or press enquiries? We'd love to hear from you.
	</p>

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
