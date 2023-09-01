<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let value = '';

	const submit = () => {
		dispatch('submit', value);
	};
</script>

<form
	class="relative variant-filled-tertiary rounded-lg p-2 pr-16 overflow-hidden focus:border-none focus:outline-none"
	on:submit|preventDefault={submit}
>
	<input
		type="text"
		placeholder="Search"
		bind:value
		class="w-full border-none outline-none bg-transparent"
	/>
	<div
		class="flex justify-center items-center aspect-square bg-secondary-500 absolute right-0 top-0 bottom-0"
	>
		<i class="fas fa-search" />
	</div>
</form>
