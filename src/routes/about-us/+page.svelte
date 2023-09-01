<script lang="ts">
	import Accordion from '$lib/components/accordion/Accordion.svelte';
	import Container from '$lib/components/container/Container.svelte';
	import Title from '$lib/components/title/Title.svelte';
	import { config } from '$lib/config';
</script>

<svelte:head>
	<title>{config.appName} - About us</title>
</svelte:head>

<Container>
	<div class="xl:min-h-[440px] flex flex-col justify-center items-start">
		<h1 class="font-1000 text-9xl">About us</h1>
		<p class="text-2xl max-w-4xl mt-12">
			Deleniti aut unde, necessitatibus ipsum nemo ipsam atque quod odit, recusandae adipisci animi
			molestias dignissimos, quas architecto.
		</p>
		<div class="mt-12 flex flex-col md:flex-row gap-8">
			<a href="/blog" class="btn btn-lg variant-filled-secondary font-bold"> We are great </a>
			<a href="/" class="btn btn-lg variant-filled-primary font-bold"> We are amazing </a>
		</div>
	</div>
</Container>
<Container>
	<div class="space-y-8 w-full">
		<Title>Together</Title>
		<div class="w-full flex flex-col md:flex-row gap-8">
			<div class="w-full md:w-1/2 flex gap-6 flex-col justify-center items-start">
				<Title fontWeight="font-bold" text="text-4xl">Hard work!</Title>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita officia culpa
					assumenda! Maiores repudiandae quasi aspernatur veniam odio nostrum fugiat quod nulla
					nesciunt tempore! Similique officia eos placeat explicabo alias? Sint, adipisci nulla.
					Cupiditate sunt mollitia repudiandae nihil quis?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sit, assumenda quasi
					minima earum nesciunt itaque suscipit repudiandae iste inventore.
				</p>
				<a href="/" class="btn variant-filled-secondary font-bold"> Adventure awaits! </a>
			</div>
			<div class="w-full md:w-1/2 flex flex-col gap-8">
				<img
					src="/assets/images/5.jpg"
					alt="skills"
					class="w-full h-full object-cover object-center"
				/>
			</div>
		</div>
	</div>
</Container>
