<script lang="ts">
	import Container from '$lib/components/container/Container.svelte';
	import PageView from '$lib/components/page-view/PageView.svelte';
	import Title from '$lib/components/title/Title.svelte';
	import Text from '$lib/components/text/Text.svelte';
	import { config } from '$lib/config';
	import type { IContainer } from '$lib/interfaces/container.interface';

	let containers: IContainer[] = [
		{
			name: '1',
			components: [
				{
					name: 'Text',
					component: Text,
					properties: {
						text: 'Hello world'
					}
				},
				{
					name: 'Title',
					component: Title,
					properties: {
						text: 'text-lg'
					},
					default: 'This is title'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>{config.appName} - Page builder</title>
</svelte:head>

<div class="w-full min-h-screen -mt-16 pt-16 flex">
	<div class="w-1/4 border-r-2 border-primary-500">1</div>
	<div class="w-3/4">
		<PageView {containers} />
	</div>
</div>
