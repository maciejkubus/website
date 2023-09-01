<script lang="ts">
</script>

<div
	class="p-4 aspect-square w-full rounded-xl overflow-hidden relative flex justify-end items-end"
>
	<div class="absolute inset-0 flex -z-10 opacity-80">
		<slot name="image" />
	</div>
	<div class="text-4xl font-bold text drop-shadow-md">
		<slot />
	</div>
</div>
