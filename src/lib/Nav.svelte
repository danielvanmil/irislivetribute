<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	// Add new pages here as they are created in src/routes.
	const links = [
		{ href: resolve('/shows'), label: 'Shows' },
		{ href: resolve('/promoter-pack'), label: 'Promoter Pack' },
		{ href: resolve('/bookings'), label: 'Bookings' }
	];
</script>

<nav aria-label="Main">
	<ul class="flex flex-wrap justify-center gap-6">
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
