<script lang="ts">
	import Accordion from '$lib/components/accordion/Accordion.svelte';
	import Container from '$lib/components/container/Container.svelte';
	import Title from '$lib/components/title/Title.svelte';
	import Map from '$lib/components/map/Map.svelte';
	import { config } from '$lib/config';
	import Timeline from '$lib/components/timeline/Timeline.svelte';
	import UserCard from '$lib/components/user-card/UserCard.svelte';
	import IconCard from '$lib/components/icon-card/IconCard.svelte';
	import InputControl from '$lib/components/input-control/InputControl.svelte';
</script>

<svelte:head>
	<title>{config.appName} - Privacy Policy</title>
</svelte:head>

<Container>
	<div class="xl:min-h-[440px] flex flex-col justify-center items-start">
		<h1 class="font-1000 text-9xl">Privacy Policy</h1>
		<p class="text-2xl max-w-4xl mt-12">
			Deleniti aut unde, necessitatibus ipsum nemo ipsam atque quod odit, recusandae adipisci animi
			molestias dignissimos, quas architecto.
		</p>
		<div class="mt-12 flex flex-col md:flex-row gap-8">
			<a href="/" class="btn btn-lg variant-filled-secondary font-bold"> Return home </a>
		</div>
	</div>
</Container>

<Container>
	<div class="space-y-8 w-full text-lg">
		{#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as num}
			<div class="space-y-4">
				<Title>{num}. Lorem ipsum</Title>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis vel sint quis
					explicabo voluptatibus. Magni, optio ipsam. Quae tenetur perspiciatis totam animi
					cupiditate dolore in ut quos quidem adipisci alias exercitationem commodi fugiat
					asperiores ab ullam, atque eum deleniti? Pariatur.
				</p>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt vel consequatur
					doloribus nobis quas quaerat illo a esse libero sint, perspiciatis unde velit adipisci
					laboriosam ex odio natus nostrum. Deserunt ipsum consequatur quae odio facilis! Ipsam
					atque mollitia officia iure numquam, saepe nobis iste ipsum, cum et neque asperiores
					similique quod repellat aut ad laboriosam vero quidem minus fugit nesciunt veniam,
					accusantium nemo! Qui illo minus culpa eaque provident reprehenderit reiciendis eligendi
					excepturi omnis similique sunt, fugit eveniet. Distinctio ipsa dignissimos, magnam eos
					ipsum odit mollitia reiciendis esse recusandae officiis rem commodi maiores placeat
					corporis perspiciatis. Libero sapiente quidem voluptate pariatur dolorum animi, tempora
					recusandae assumenda eius at et eligendi hic laudantium error dolor voluptas officia
					cumque eaque corrupti accusantium!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus maxime sit accusamus
					quas sed recusandae magni doloribus ab reprehenderit consequuntur, dignissimos omnis
					ratione, minus ut, velit repudiandae. At dicta quidem odit ipsa quam assumenda nemo, fuga
					perferendis illo blanditiis similique veniam minima enim asperiores excepturi ipsam
					eveniet incidunt soluta beatae? Ratione facere possimus eaque voluptatibus omnis totam,
					doloremque amet delectus porro, asperiores eum at libero dolor, corporis quia sunt eveniet
					dicta soluta necessitatibus ducimus veritatis impedit et? Beatae accusamus unde,
					voluptatibus, facere numquam explicabo pariatur rerum illum quaerat necessitatibus nisi?
				</p>
			</div>
		{/each}
	</div>
</Container>
