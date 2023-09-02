<script lang="ts">
	import type { IComponent } from '$lib/interfaces/component.interface';
	import type { IContainer } from '$lib/interfaces/container.interface';
	import ComponentView from '../component-view/ComponentView.svelte';
	import Container from '../container/Container.svelte';

	export let containers: IContainer[];
</script>

<main class="w-full">
	{#each containers as container}
		<Container aligment="flex-col" id={container.name}>
			{#each container.components as component}
				<ComponentView {component} />
			{/each}
		</Container>
	{/each}
</main>
