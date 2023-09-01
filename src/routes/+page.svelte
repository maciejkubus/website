<script lang="ts">
	import Container from '$lib/components/container/Container.svelte';
	import IconCard from '$lib/components/icon-card/IconCard.svelte';
	import ProgressBar from '$lib/components/progress-bar/ProgressBar.svelte';
	import SocialWidget from '$lib/components/social-widget/SocialWidget.svelte';
	import SquareTile from '$lib/components/square-tile/SquareTile.svelte';
	import Title from '$lib/components/title/Title.svelte';
	import UserCard from '$lib/components/user-card/UserCard.svelte';
	import { config } from '$lib/config';
</script>

<svelte:head>
	<title>{config.appName} - Homepage</title>
</svelte:head>

<Container>
	<div class="xl:min-h-[440px] flex flex-col justify-center items-start">
		<h1 class="font-1000 text-9xl">Homepage</h1>
		<p class="text-2xl max-w-4xl mt-12">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos commodi nemo rerum corporis
			amet cumque maxime perferendis possimus totam earum!
		</p>
		<div class="mt-12 flex flex-col md:flex-row gap-8">
			<a href="/explore" class="btn btn-lg variant-filled-secondary font-bold"> Explore me </a>
			<a href="/contact" class="btn btn-lg variant-filled-primary font-bold"> Contact </a>
		</div>
	</div>
</Container>

<Container>
	<div class="space-y-4 w-full">
		<Title>Developer</Title>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 w-full">
			<IconCard>
				<i slot="icon" class="fas fa-laptop-code" />
				<svelte:fragment slot="text">Front-end</svelte:fragment>
			</IconCard>
			<IconCard variant="variant-filled-secondary">
				<i slot="icon" class="fas fa-server" />
				<svelte:fragment slot="text">Back-end</svelte:fragment>
			</IconCard>
			<IconCard variant="variant-filled-tertiary">
				<i slot="icon" class="fas fa-pencil-ruler" />
				<svelte:fragment slot="text">Full stack</svelte:fragment>
			</IconCard>
		</div>
	</div>
</Container>
<Container>
	<div class="space-y-8 w-full">
		<Title>Skills</Title>
		<div class="w-full flex flex-col md:flex-row gap-8">
			<div class="w-full md:w-1/2 space-y-4">
				<Title fontWeight="font-bold" text="text-4xl">Hard work!</Title>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita officia culpa
					assumenda! Maiores repudiandae quasi aspernatur veniam odio nostrum fugiat quod nulla
					nesciunt tempore! Similique officia eos placeat explicabo alias? Sint, adipisci nulla.
					Cupiditate sunt mollitia repudiandae nihil quis?
				</p>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate.</p>
				<a href="/" class="btn variant-filled-secondary font-bold"> Adventure awaits! </a>
			</div>
			<div class="w-full md:w-1/2 flex flex-col gap-8">
				<div>
					<div class="text-2xl">Lorem ipsum</div>
					<ProgressBar progress={90} />
				</div>
				<div>
					<div class="text-2xl">Lorem ipsum</div>
					<ProgressBar progress={40} />
				</div>
				<div>
					<div class="text-2xl">Lorem ipsum</div>
					<ProgressBar progress={55} />
				</div>
				<div>
					<div class="text-2xl">Lorem ipsum</div>
					<ProgressBar progress={60} />
				</div>
			</div>
		</div>
	</div>
</Container>
<Container>
	<div class="space-y-8 w-full">
		<Title>People</Title>
		<div class="grid grid-cols-1 xl:grid-cols-4 gap-8 py-8 w-full">
			<UserCard>
				<img
					slot="image"
					src="/assets/characters/9.jpg"
					alt="Aoi Kitsune"
					class="flex aspect-[3/4] object-cover object-center"
				/>
				<span slot="fullname">Aoi Kitsune</span>
				<span slot="position">Samurai</span>
			</UserCard>
			<UserCard>
				<img
					slot="image"
					src="/assets/characters/13.jpg"
					alt="Hoshikagawa"
					class="flex aspect-[3/4] object-cover object-center"
				/>
				<span slot="fullname">Hoshikagawa</span>
				<span slot="position">Doctor</span>
			</UserCard>
			<UserCard>
				<img
					slot="image"
					src="/assets/characters/6.jpg"
					alt="Jinx"
					class="flex aspect-[3/4] object-cover object-center"
				/>
				<span slot="fullname">Jinx</span>
				<span slot="position">Street kid</span>
			</UserCard>
			<UserCard>
				<img
					slot="image"
					src="/assets/characters/14.jpg"
					alt="Seinaru shōjo"
					class="flex aspect-[3/4] object-cover object-center"
				/>
				<span slot="fullname">Seinaru</span>
				<span slot="position">Executive nun</span>
			</UserCard>
		</div>
	</div>
</Container>
<Container>
	<div class="space-y-8 w-full">
		<Title>Get the attention</Title>
		<div class="w-full flex flex-col md:flex-row gap-8">
			<div class="w-full md:w-3/4 space-y-4">
				<p class="text-lg">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum nobis deserunt unde nihil
					exercitationem laborum velit deleniti dolore ducimus corporis.
				</p>
			</div>
			<div class="w-full md:w-1/4 space-y-4 flex justify-end items-center">
				<button class="btn btn-xl variant-filled-primary font-bold w-full">Start now!</button>
			</div>
		</div>
	</div>
</Container>
<Container>
	<div class="space-y-8 w-full">
		<Title>Pictures</Title>
		<div class="grid grid-cols-1 xl:grid-cols-4 gap-8 py-8 w-full">
			<SquareTile>
				<img
					slot="image"
					src="/assets/images/1.jpg"
					alt="1"
					class="w-full h-full object-cover object-center"
				/>
				<span>Darkness</span>
			</SquareTile>
			<SquareTile>
				<img
					slot="image"
					src="/assets/images/2.jpg"
					alt="2"
					class="w-full h-full object-cover object-center"
				/>
				<span>Flower</span>
			</SquareTile>
			<SquareTile>
				<img
					slot="image"
					src="/assets/images/3.jpg"
					alt="3"
					class="w-full h-full object-cover object-center"
				/>
				<span>Angel</span>
			</SquareTile>
			<SquareTile>
				<img
					slot="image"
					src="/assets/images/4.jpg"
					alt="4"
					class="w-full h-full object-cover object-center"
				/>
				<span>Wolf</span>
			</SquareTile>
			<SquareTile>
				<img
					slot="image"
					src="/assets/images/5.jpg"
					alt="5"
					class="w-full h-full object-cover object-center"
				/>
				<span>Fire</span>
			</SquareTile>
			<SquareTile>
				<img
					slot="image"
					src="/assets/images/6.jpg"
					alt="6"
					class="w-full h-full object-cover object-center"
				/>
				<span>Demon</span>
			</SquareTile>
			<SquareTile>
				<img
					slot="image"
					src="/assets/images/7.jpg"
					alt="7"
					class="w-full h-full object-cover object-center"
				/>
				<span>Church</span>
			</SquareTile>
			<SquareTile>
				<img
					slot="image"
					src="/assets/images/8.jpg"
					alt="8"
					class="w-full h-full object-cover object-center"
				/>
				<span>Death</span>
			</SquareTile>
		</div>
	</div>
</Container>

<Container>
	<div class="space-y-12 w-full">
		<Title>Follow me</Title>
		<div class="flex gap-8 flex-col md:flex-row">
			<div class="flex-1">
				<SocialWidget href="https://www.instagram.com/maciekkubus/">
					<img
						slot="image"
						src="/assets/instagram.jpg"
						alt="kaktus"
						class="h-28 border-8 border-surface-900 rounded-r-lg"
					/>
					<span slot="title">Instagram</span>
					<span slot="subtitle">@maciekkubus</span>
				</SocialWidget>
			</div>
			<div class="flex-1">
				<SocialWidget href="https://github.com/maciejkubus/">
					<img
						slot="image"
						src="/assets/github.jpg"
						alt="kaktus"
						class="h-28 border-8 border-surface-900 rounded-lg"
					/>
					<span slot="title">GitHub</span>
					<span slot="subtitle">@maciejkubus</span>
				</SocialWidget>
			</div>
		</div>
	</div>
</Container>
