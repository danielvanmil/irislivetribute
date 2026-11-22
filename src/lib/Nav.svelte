<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	// Add new pages here as they are created in src/routes.
	const links = [
		{ href: resolve('/'), label: 'Home' },
		{ href: resolve('/about'), label: 'About' },
		{ href: resolve('/shows'), label: 'Shows' },
		{ href: resolve('/video'), label: 'Video' },
		{ href: resolve('/promoter-pack'), label: 'Promoter Pack' },
		{ href: resolve('/bookings'), label: 'Bookings' }
	];

	// Social links, shown top left in the menu bar on every page.
	const socials = [
		{
			label: 'Facebook',
			href: 'https://www.facebook.com/profile.php?id=61573315889648',
			icon: 'M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8z'
		},
		{
			label: 'YouTube',
			href: 'https://www.youtube.com/playlist?list=PLRAUGr739R_g',
			icon: 'M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15.1V8.9l5.8 3.1z'
		}
	];

	let open = $state(false);

	// Close the mobile menu whenever the page changes.
	$effect(() => {
		void page.url.pathname;
		open = false;
	});
</script>

<header class="sticky top-0 z-50 border-b border-iris-line bg-iris-black/85 backdrop-blur">
	<nav
		aria-label="Main"
		class="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between px-4 py-3 md:py-4"
	>
		<ul class="flex items-center gap-2" aria-label="Social media">
			{#each socials as social (social.label)}
				<li>
					<a
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Īris on {social.label}"
						title={social.label}
						class="flex size-10 items-center justify-center rounded-full border border-iris-line text-iris-grey transition hover:border-iris-red hover:text-iris-red"
					>
						<svg class="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
							<path d={social.icon} />
						</svg>
					</a>
				</li>
			{/each}
		</ul>

		<button
			type="button"
			class="flex size-10 items-center justify-center rounded-lg border border-iris-line text-iris-white transition hover:border-iris-red md:hidden"
			aria-label={open ? 'Close menu' : 'Open menu'}
			aria-expanded={open}
			aria-controls="main-menu"
			onclick={() => (open = !open)}
		>
			<svg
				class="size-5"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
			>
				{#if open}
					<path d="M18 6 6 18M6 6l12 12" />
				{:else}
					<path d="M3 6h18M3 12h18M3 18h18" />
				{/if}
			</svg>
		</button>

		<ul
			id="main-menu"
			class="{open
				? 'flex'
				: 'hidden'} w-full flex-col gap-4 pt-4 pb-2 md:absolute md:top-1/2 md:left-1/2 md:flex md:w-auto md:-translate-x-1/2 md:-translate-y-1/2 md:flex-row md:gap-6 md:p-0 lg:gap-8"
		>
			{#each links as link (link.href)}
				<li>
					<a
						href={link.href}
						aria-current={page.url.pathname === link.href ? 'page' : undefined}
						class="border-b-2 border-transparent pb-1 text-sm font-semibold tracking-widest text-iris-grey uppercase transition hover:border-iris-red hover:text-iris-white aria-[current=page]:border-iris-red aria-[current=page]:text-iris-white"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
