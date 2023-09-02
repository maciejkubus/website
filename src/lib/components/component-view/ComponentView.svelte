<script lang="ts">
	import type { IComponent } from '$lib/interfaces/component.interface';
	import type { ISlot } from '$lib/interfaces/slot.interface';

	export let component: IComponent;
</script>

<svelte:component this={component.component} {...component.properties}>
	{#if component.default}
		{component.default}
	{/if}
</svelte:component>
