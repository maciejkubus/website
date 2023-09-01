<script lang="ts">
	export let expand = false;
</script>

<div
	class="w-full mx-auto {expand
		? ''
		: 'max-w-site p-4 md:p-16'} flex flex-col md:flex-row justify-between"
>
	<slot />
</div>
