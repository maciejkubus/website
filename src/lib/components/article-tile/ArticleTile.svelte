<script lang="ts">
	let like = false;
</script>

<div class="">
	<div class="aspect-square relative overflow-hidden rounded-lg group shadow-lg">
		<div class="absolute inset-0">
			<slot name="image" />
		</div>
		<div
			class="absolute right-4 top-4 flex flex-col gap-2 translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out"
		>
			{#if like}
				<button
					class="text-lg hover:-rotate-12 hover:scale-105 transition-all duration-200 ease-in-out variant-filled-tertiary p-2 rounded-full w-12 h-12 flex justify-center items-center"
					on:click={() => (like = false)}
				>
					<i class="fas fa-heart text-error-500" />
				</button>
			{:else}
				<button
					class="text-lg hover:-rotate-12 hover:scale-105 transition-all duration-200 ease-in-out variant-filled-tertiary p-2 rounded-full w-12 h-12 flex justify-center items-center"
					on:click={() => (like = true)}
				>
					<i class="far fa-heart text-error-500" />
				</button>
			{/if}
			<button
				class="text-lg hover:-rotate-12 hover:scale-105 transition-all duration-200 ease-in-out variant-filled-tertiary p-2 rounded-full w-12 h-12 flex justify-center items-center"
			>
				<i class="fas fa-share-alt" />
			</button>
			<button
				class="text-lg hover:-rotate-12 hover:scale-105 transition-all duration-200 ease-in-out variant-filled-tertiary p-2 rounded-full w-12 h-12 flex justify-center items-center"
			>
				<i class="fas fa-search" />
			</button>
		</div>
	</div>
	<div class="flex flex-col gap-4 py-4">
		<h3 class="text-2xl"><slot name="title" /></h3>
		<p class="text-xl"><slot name="description" /></p>
	</div>
	<div class="flex gap-4 text-xl justify-between items-center border-t border-tertiary-800 pt-4">
		<div>
			<i class="fas fa-calendar-alt text-xl" />
			<span class="ml-2">
				<slot name="date" />
			</span>
		</div>
		<div>
			<slot name="user" />
		</div>
	</div>
	<div class="w-full flex mt-4">
		<slot name="button" />
	</div>
</div>
