<script lang="ts">
	import Accordion from '$lib/components/accordion/Accordion.svelte';
	import Container from '$lib/components/container/Container.svelte';
	import Title from '$lib/components/title/Title.svelte';
	import { config } from '$lib/config';
</script>

<svelte:head>
	<title>{config.appName} - Help</title>
</svelte:head>

<Container>
	<div class="xl:min-h-[440px] flex flex-col justify-center items-start">
		<h1 class="font-1000 text-9xl">Help</h1>
		<p class="text-2xl max-w-4xl mt-12">
			Deleniti aut unde, necessitatibus ipsum nemo ipsam atque quod odit, recusandae adipisci animi
			molestias dignissimos, quas architecto.
		</p>
		<div class="mt-12 flex flex-col md:flex-row gap-8">
			<a href="/blog" class="btn btn-lg variant-filled-secondary font-bold">
				Explore our articles
			</a>
			<a href="/" class="btn btn-lg variant-filled-primary font-bold"> Get me to the start </a>
		</div>
	</div>
</Container>

<Container>
	<div class="space-y-8 w-full">
		<Title>Read carefully</Title>
		<div class="w-full flex flex-col md:flex-row gap-8">
			<div class="w-full md:w-1/2 space-y-4">
				<p class="text-lg">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quibusdam temporibus
					tempora laboriosam, est, rerum sunt veritatis itaque eius deserunt voluptatem, neque
					aliquid iure doloribus omnis nulla sed? Architecto, nemo ad fuga similique consequuntur
					nihil. Repudiandae consequatur ratione non amet corrupti quas, eveniet architecto. Amet,
					consectetur minima. Alias, modi officiis.
				</p>
			</div>
			<div class="w-full md:w-1/2 space-y-4">
				<p class="text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatibus omnis, quia,
					nam quisquam alias numquam quibusdam ea repellat similique exercitationem cupiditate
					obcaecati, ab ad quo praesentium magni nobis? Ipsam cum nisi laborum iure dolore
					consectetur quas! Illo porro dolor libero repellat quos minus enim tempora dolorem nemo?
					Animi, nulla.
				</p>
			</div>
		</div>
	</div>
</Container>

<Container>
	<div class="space-y-8 w-full flex flex-col justify-center">
		<Title title="text-center">FAQ</Title>
		<div class="w-full xl:w-4/5 mx-auto">
			<Accordion
				items={[
					{
						title: 'Lorem ipsum dolor sit?',
						text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur voluptas officia quam, praesentium exercitationem consequatur ipsa cum tempore vitae perspiciatis fuga officiis maxime dicta facere nam iure dolores, illum quis aperiam veritatis incidunt, unde esse nihil? Culpa dolore in recusandae?'
					},
					{
						title: 'Lorem ipsum dolor sit?',
						text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur voluptas officia quam, praesentium exercitationem consequatur ipsa cum tempore vitae perspiciatis fuga officiis maxime dicta facere nam iure dolores, illum quis aperiam veritatis incidunt, unde esse nihil? Culpa dolore in recusandae?'
					},
					{
						title: 'Lorem ipsum dolor sit?',
						text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur voluptas officia quam, praesentium exercitationem consequatur ipsa cum tempore vitae perspiciatis fuga officiis maxime dicta facere nam iure dolores, illum quis aperiam veritatis incidunt, unde esse nihil? Culpa dolore in recusandae?'
					},
					{
						title: 'Lorem ipsum dolor sit?',
						text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur voluptas officia quam, praesentium exercitationem consequatur ipsa cum tempore vitae perspiciatis fuga officiis maxime dicta facere nam iure dolores, illum quis aperiam veritatis incidunt, unde esse nihil? Culpa dolore in recusandae?'
					},
					{
						title: 'Lorem ipsum dolor sit?',
						text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur voluptas officia quam, praesentium exercitationem consequatur ipsa cum tempore vitae perspiciatis fuga officiis maxime dicta facere nam iure dolores, illum quis aperiam veritatis incidunt, unde esse nihil? Culpa dolore in recusandae?'
					},
					{
						title: 'Lorem ipsum dolor sit?',
						text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur voluptas officia quam, praesentium exercitationem consequatur ipsa cum tempore vitae perspiciatis fuga officiis maxime dicta facere nam iure dolores, illum quis aperiam veritatis incidunt, unde esse nihil? Culpa dolore in recusandae?'
					}
				]}
			/>
		</div>
	</div>
</Container>
