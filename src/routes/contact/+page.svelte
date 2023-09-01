<script lang="ts">
	import Accordion from '$lib/components/accordion/Accordion.svelte';
	import Container from '$lib/components/container/Container.svelte';
	import Title from '$lib/components/title/Title.svelte';
	import Map from '$lib/components/map/Map.svelte';
	import { config } from '$lib/config';
	import Timeline from '$lib/components/timeline/Timeline.svelte';
	import UserCard from '$lib/components/user-card/UserCard.svelte';
	import IconCard from '$lib/components/icon-card/IconCard.svelte';
</script>

<svelte:head>
	<title>{config.appName} - Contact</title>
</svelte:head>

<Container>
	<div class="xl:min-h-[440px] flex flex-col justify-center items-start">
		<h1 class="font-1000 text-9xl">Contact</h1>
		<p class="text-2xl max-w-4xl mt-12">
			Deleniti aut unde, necessitatibus ipsum nemo ipsam atque quod odit, recusandae adipisci animi
			molestias dignissimos, quas architecto.
		</p>
		<div class="mt-12 flex flex-col md:flex-row gap-8">
			<a href="/blog" class="btn btn-lg variant-filled-secondary font-bold"> Send a message </a>
			<a href="/" class="btn btn-lg variant-filled-primary font-bold"> Meet us </a>
		</div>
	</div>
</Container>
<Container>
	<div class="space-y-8 w-full">
		<Title>Quick contact</Title>
		<div class="grid grid-cols-1 xl:grid-cols-3 gap-8 py-8 w-full">
			<a href="mailto:maciekkubus@gmail.com" class="hover:text-primary-500">
				<IconCard variant="">
					<i slot="icon" class="fas fa-envelope" />
					<span slot="text" class="text-2xl">maciekkubus@gmail.com</span>
				</IconCard>
			</a>
			<a href="tel:+48 570 277 237" class="hover:text-primary-500">
				<IconCard variant="">
					<i slot="icon" class="fas fa-mobile-alt" />
					<span slot="text" class="text-2xl">+48 570 277 237</span>
				</IconCard>
			</a>
			<a href="https://goo.gl/maps/WhWGN7Mt9tgnJQvLA" class="hover:text-primary-500">
				<IconCard variant="">
					<i slot="icon" class="fas fa-map-marker-alt" />
					<span slot="text" class="text-2xl">Janówka, Mokra 21</span>
				</IconCard>
			</a>
		</div>
	</div>
</Container>
