<script lang="ts">
	import Title from '../title/Title.svelte';
</script>

<div class="space-y-4">
	<Title>
		<slot name="title" />
	</Title>
	<div class="text-lg">
		<slot name="description" />
	</div>
	<div class="text-lg">
		<slot name="readmore" />
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
</div>
