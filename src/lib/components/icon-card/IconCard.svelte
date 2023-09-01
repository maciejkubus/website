<script lang="ts">
	export let variant = 'variant-filled-primary';
</script>

<div
	class="px-4 py-8 rounded shadow-lg w-full flex flex-col gap-8 justify-center items-center {variant}"
>
	<div class="text-9xl">
		<slot name="icon" />
	</div>
	<div class="text-4xl">
		<slot name="text" />
	</div>
</div>
