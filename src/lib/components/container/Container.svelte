<script lang="ts">
	export let expand = false;
	export let aligment = 'flex-col md:flex-row';
	export let id: string | undefined = undefined;
</script>

<div
	class="w-full mx-auto {expand ? '' : 'max-w-site p-4 md:p-16'} flex {aligment} justify-between"
	{id}
>
	<slot />
</div>
