<script lang="ts">
	export let text = 'text-6xl';
	export let fontWeight = 'font-900';
	export let title = '';
</script>

<h2 class="{text} {fontWeight} {title}">
	<slot />
</h2>
