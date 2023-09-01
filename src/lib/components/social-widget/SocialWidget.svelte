<script lang="ts">
	export let href = '';
	export let target = '_blank';
</script>

<a {href} {target} class="flex variant-filled-secondary rounded-r-lg">
	<div class="w-1/3 p-4 border-r-4 border-surface-500 relative">
		<div class="absolute z-10 right-1/2 left-0 top-0 bottom-0 bg-surface-900" />
		<div class="relative z-20 flex justify-center">
			<slot name="image" />
		</div>
	</div>
	<div class="w-2/3 p-8 flex justify-center items-center flex-col">
		<h3 class="text-xl xl:text-3xl">
			<slot name="title" />
		</h3>
		<p class="text-lg xl:text-xl mt-1 xl:mt-2">
			<slot name="subtitle" />
		</p>
	</div>
</a>
