<script lang="ts">
	export let progress = 0;
	export let variant = 'variant-filled-primary';
</script>

<div class="w-full bg-surface-500">
	<div class="h-2 w-full rounded {variant}" style={`width: ${progress}%`} />
</div>
