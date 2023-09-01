<script lang="ts">
	import ArticleMini from '$lib/components/article-mini/ArticleMini.svelte';
	import ArticleTile from '$lib/components/article-tile/ArticleTile.svelte';
	import CategoryPin from '$lib/components/category-pin/CategoryPin.svelte';
	import Container from '$lib/components/container/Container.svelte';
	import Search from '$lib/components/search/Search.svelte';
	import SidebarContent from '$lib/components/sidebar-content/SidebarContent.svelte';
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
	import Title from '$lib/components/title/Title.svelte';
	import UserButton from '$lib/components/user-button/UserButton.svelte';
	import { config } from '$lib/config';
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	<title>{config.appName} - Blog</title>
</svelte:head>

<Container>
	<div class="xl:min-h-[440px] flex flex-col justify-center items-start">
		<h1 class="font-1000 text-9xl">Blog</h1>
		<p class="text-2xl max-w-4xl mt-12">
			Deleniti aut unde, necessitatibus ipsum nemo ipsam atque quod odit, recusandae adipisci animi
			molestias dignissimos, quas architecto.
		</p>
		<div class="mt-12 flex flex-col md:flex-row gap-8">
			<a href="/blog" class="btn btn-lg variant-filled-secondary font-bold">
				Explore our articles
			</a>
			<a href="/meet-up" class="btn btn-lg variant-filled-primary font-bold"> Meet up with us </a>
		</div>
	</div>
</Container>

<Container>
	<div class="space-y-4">
		<Title>Trending</Title>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
			<ArticleTile>
				<img
					slot="image"
					src="/assets/characters/1.jpg"
					alt="Character 1"
					class="w-full h-full object-cover aspect-square"
				/>
				<svelte:fragment slot="title">Lorem ipsum</svelte:fragment>
				<svelte:fragment slot="description">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis earum, sapiente fugiat
					unde iusto dolorem, debitis reprehenderit quis.
				</svelte:fragment>
				<svelte:fragment slot="date">25/03/2000</svelte:fragment>
				<UserButton slot="user">
					<Avatar
						slot="avatar"
						initials="MK"
						background="bg-secondary-500"
						fill="fill-surface-500"
						width="w-8"
					/>
					<svelte:fragment slot="username">maciejkubus</svelte:fragment>
				</UserButton>
				<a
					slot="button"
					class="btn btn-lg variant-ringed-primary hover:variant-filled-primary font-bold w-full rounded-xl"
					href="/article"
				>
					Read more
				</a>
			</ArticleTile>
			<ArticleTile>
				<img
					slot="image"
					src="/assets/characters/2.jpg"
					alt="Character 2"
					class="w-full h-full object-cover aspect-square"
				/>
				<svelte:fragment slot="title">Lorem ipsum</svelte:fragment>
				<svelte:fragment slot="description">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis earum, sapiente fugiat
					unde iusto dolorem, debitis reprehenderit quis.
				</svelte:fragment>
				<svelte:fragment slot="date">25/03/2000</svelte:fragment>
				<UserButton slot="user">
					<Avatar
						slot="avatar"
						initials="MK"
						background="bg-secondary-500"
						fill="fill-surface-500"
						width="w-8"
					/>
					<svelte:fragment slot="username">maciejkubus</svelte:fragment>
				</UserButton>
				<a
					slot="button"
					class="btn btn-lg variant-ringed-primary hover:variant-filled-primary font-bold w-full rounded-xl"
					href="/article"
				>
					Read more
				</a>
			</ArticleTile>
			<ArticleTile>
				<img
					slot="image"
					src="/assets/characters/4.jpg"
					alt="Character 4"
					class="w-full h-full object-cover aspect-square"
				/>
				<svelte:fragment slot="title">Lorem ipsum</svelte:fragment>
				<svelte:fragment slot="description">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis earum, sapiente fugiat
					unde iusto dolorem, debitis reprehenderit quis.
				</svelte:fragment>
				<svelte:fragment slot="date">25/03/2000</svelte:fragment>
				<UserButton slot="user">
					<Avatar
						slot="avatar"
						initials="MK"
						background="bg-secondary-500"
						fill="fill-surface-500"
						width="w-8"
					/>
					<svelte:fragment slot="username">maciejkubus</svelte:fragment>
				</UserButton>
				<a
					slot="button"
					class="btn btn-lg variant-ringed-primary hover:variant-filled-primary font-bold w-full rounded-xl"
					href="/article"
				>
					Read more
				</a>
			</ArticleTile>
		</div>
	</div>
</Container>

<Container>
	<div class="flex flex-col-reverse xl:flex-row gap-8">
		<div class="w-full md:w-2/3 space-y-16">
			{#each [0, 1, 2, 3] as item}
				<ArticleMini>
					<svelte:fragment slot="title">Lorem ipsum.</svelte:fragment>
					<svelte:fragment slot="description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident est sint fuga et
						quis, repellat ea aliquam harum nulla corporis velit, possimus fugit similique earum,
						voluptate iure officiis blanditiis eum. Rerum illo consequuntur molestias tenetur
						placeat beatae ad dolorem sit.
					</svelte:fragment>
					<a slot="readmore" href="/article"> Read More </a>
					<svelte:fragment slot="date">25/03/2000</svelte:fragment>
					<UserButton slot="user">
						<Avatar
							slot="avatar"
							initials="MK"
							background="bg-secondary-500"
							fill="fill-surface-500"
							width="w-8"
						/>
						<svelte:fragment slot="username">maciejkubus</svelte:fragment>
					</UserButton>
				</ArticleMini>
			{/each}
			<div>
				<button
					class="btn btn-lg variant-ringed-primary hover:variant-filled-primary font-bold w-full rounded-xl"
				>
					Explore exciting articles
				</button>
			</div>
		</div>
		<div class="w-full md:w-1/3">
			<Sidebar>
				<SidebarContent />
			</Sidebar>
		</div>
	</div>
</Container>
