<script lang="ts">
	import type { ITimelineItem } from '$lib/interfaces/timeline-item.interface';
	import Title from '../title/Title.svelte';

	export let items: ITimelineItem[] = [];
</script>

<div class="flex flex-col gap-8">
	{#each items as item, index}
		<div
			class="flex gap-8
      {index % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'}
      {index != 0 ? 'xl:-mt-40' : ''}"
		>
			<div class="variant-filled-surface p-8 space-y-4 xl:w-1/2">
				<Title text="text-lg" fontWeight="font-normal">{item.subtitle}</Title>
				<Title text="text-4xl">{item.title}</Title>
				<p>{item.text}</p>
			</div>

			<div class="hidden xl:flex xl:w-1/2" />
		</div>
	{/each}
</div>
