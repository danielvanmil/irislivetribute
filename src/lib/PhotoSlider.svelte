<script lang="ts">
	// Photo slider: swipe/scroll on touch, arrow buttons, keyboard arrows and a thumbnail strip.
	// Built on CSS scroll-snap, so it stays smooth on phones without extra libraries.
	let { photos, label, alt }: { photos: string[]; label: string; alt: string } = $props();

	let track: HTMLDivElement;
	let thumbs: HTMLDivElement;
	let current = $state(0);

	function go(index: number) {
		const i = (index + photos.length) % photos.length;
		track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' });
	}

	function onScroll() {
		current = Math.round(track.scrollLeft / track.clientWidth);
	}

	function onKey(event: KeyboardEvent) {
		if (event.key === 'ArrowRight') {
			event.preventDefault();
			go(current + 1);
		} else if (event.key === 'ArrowLeft') {
			event.preventDefault();
			go(current - 1);
		}
	}

	// Keep the active thumbnail in view (scrolls only the strip, never the page).
	$effect(() => {
		const thumb = thumbs?.children[current] as HTMLElement | undefined;
		if (!thumb) return;
		thumbs.scrollTo({
			left: thumb.offsetLeft - thumbs.clientWidth / 2 + thumb.clientWidth / 2,
			behavior: 'smooth'
		});
	});
</script>

<div role="region" aria-roledescription="carousel" aria-label={label}>
	<div class="group relative overflow-hidden rounded-xl border border-iris-line bg-iris-black">
		<!-- Focusable scroll area so keyboard users can browse with the arrow keys. -->
		<!-- svelte-ignore a11y_no_noninteractive_tabindex, a11y_no_noninteractive_element_interactions -->
		<div
			bind:this={track}
			onscroll={onScroll}
			onkeydown={onKey}
			role="group"
			tabindex="0"
			aria-label="{label}: use the arrow keys to browse"
			class="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] focus:outline-none focus-visible:ring-2 focus-visible:ring-iris-red [&::-webkit-scrollbar]:hidden"
		>
			{#each photos as photo, i (photo)}
				<div
					class="aspect-[3/2] w-full shrink-0 snap-center"
					role="group"
					aria-roledescription="slide"
					aria-label="{i + 1} of {photos.length}"
				>
					<img
						src={photo}
						alt="{alt} ({i + 1} of {photos.length})"
						loading={i === 0 ? 'eager' : 'lazy'}
						decoding="async"
						class="size-full object-contain"
					/>
				</div>
			{/each}
		</div>

		{#each [{ dir: -1, name: 'Previous photo', d: 'm15 18-6-6 6-6', side: 'left-3' }, { dir: 1, name: 'Next photo', d: 'm9 18 6-6-6-6', side: 'right-3' }] as button (button.dir)}
			<button
				type="button"
				aria-label={button.name}
				onclick={() => go(current + button.dir)}
				class="absolute top-1/2 {button.side} flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-iris-line bg-iris-black/70 text-iris-white backdrop-blur transition hover:border-iris-red hover:text-iris-red sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100"
			>
				<svg
					class="size-5"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path d={button.d} />
				</svg>
			</button>
		{/each}

		<p
			class="absolute right-3 bottom-3 rounded-full bg-iris-black/70 px-3 py-1 text-xs font-semibold tracking-widest text-iris-white backdrop-blur"
			aria-live="polite"
		>
			{current + 1} / {photos.length}
		</p>
	</div>

	<div
		bind:this={thumbs}
		class="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
	>
		{#each photos as photo, i (photo)}
			<button
				type="button"
				aria-label="Show photo {i + 1}"
				aria-current={i === current ? 'true' : undefined}
				onclick={() => go(i)}
				class="size-16 shrink-0 overflow-hidden rounded-lg border-2 transition sm:size-20 {i ===
				current
					? 'border-iris-red opacity-100'
					: 'border-transparent opacity-50 hover:opacity-100'}"
			>
				<img src={photo} alt="" loading="lazy" decoding="async" class="size-full object-cover" />
			</button>
		{/each}
	</div>
</div>
