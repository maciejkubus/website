<script lang="ts">
	import type { IAccordionItem } from '$lib/interfaces/accordion-item.interface';

	export let items: IAccordionItem[] = [];

	let visible = -1;

	const changeItem = (index: number) => {
		if (visible === index) visible = -1;
		else visible = index;
	};
</script>

<div class="flex flex-col gap-4">
	{#each items as item, index}
		<div class="">
			<button class="p-4 flex justify-between w-full" on:click={() => changeItem(index)}>
				<div class="text-4xl flex justify-center items-center gap-0.5 font-bold">{item.title}</div>
				<div class="text-4xl {visible == index ? 'hidden' : 'flex'}">
					<i class="fas fa-plus" />
				</div>
				<div class="text-4xl {visible == index ? 'flex' : 'hidden'}">
					<i class="fas fa-minus" />
				</div>
			</button>
			{#if visible === index}
				<div class="p-4">
					<div class="text-lh">{item.text}</div>
				</div>
			{/if}
		</div>
	{/each}
</div>
