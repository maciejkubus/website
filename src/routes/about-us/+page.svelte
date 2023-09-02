<script lang="ts">
	import Accordion from '$lib/components/accordion/Accordion.svelte';
	import Container from '$lib/components/container/Container.svelte';
	import Title from '$lib/components/title/Title.svelte';
	import Map from '$lib/components/map/Map.svelte';
	import { config } from '$lib/config';
	import Timeline from '$lib/components/timeline/Timeline.svelte';
	import UserCard from '$lib/components/user-card/UserCard.svelte';
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
<Container>
	<div class="space-y-8 w-full">
		<Title title="w-100 xl:text-center">Our story</Title>
		<Timeline
			items={[
				{
					subtitle: '25 march 2000',
					title: 'Born',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita officia culpa assumenda! Maiores repudiandae quasi aspernatur veniam odio nostrum fugiat quod nulla nesciunt tempore! Similique officia eos placeat explicabo alias? Sint, adipisci nulla. Cupiditate sunt mollitia repudiandae nihil quis.'
				},
				{
					subtitle: '11 february 2003',
					title: 'Born again',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita officia culpa assumenda! Maiores repudiandae quasi aspernatur veniam odio nostrum fugiat quod nulla nesciunt tempore! Similique officia eos placeat explicabo alias? Sint, adipisci nulla. Cupiditate sunt mollitia repudiandae nihil quis.'
				},
				{
					subtitle: '24 december 2013',
					title: 'Christmass',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita officia culpa assumenda! Maiores repudiandae quasi aspernatur veniam odio nostrum fugiat quod nulla nesciunt tempore! Similique officia eos placeat explicabo alias? Sint, adipisci nulla. Cupiditate sunt mollitia repudiandae nihil quis.'
				},
				{
					subtitle: '26 may 2020',
					title: 'Random day',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita officia culpa assumenda! Maiores repudiandae quasi aspernatur veniam odio nostrum fugiat quod nulla nesciunt tempore! Similique officia eos placeat explicabo alias? Sint, adipisci nulla. Cupiditate sunt mollitia repudiandae nihil quis.'
				},
				{
					subtitle: '11 november 2021',
					title: 'I met her',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita officia culpa assumenda! Maiores repudiandae quasi aspernatur veniam odio nostrum fugiat quod nulla nesciunt tempore! Similique officia eos placeat explicabo alias? Sint, adipisci nulla. Cupiditate sunt mollitia repudiandae nihil quis.'
				},
				{
					subtitle: '10 october 2022',
					title: 'We started this',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita officia culpa assumenda! Maiores repudiandae quasi aspernatur veniam odio nostrum fugiat quod nulla nesciunt tempore! Similique officia eos placeat explicabo alias? Sint, adipisci nulla. Cupiditate sunt mollitia repudiandae nihil quis.'
				},
				{
					subtitle: '25 june 2023',
					title: 'Medical help',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita officia culpa assumenda! Maiores repudiandae quasi aspernatur veniam odio nostrum fugiat quod nulla nesciunt tempore! Similique officia eos placeat explicabo alias? Sint, adipisci nulla. Cupiditate sunt mollitia repudiandae nihil quis.'
				},
				{
					subtitle: '01 september 2023',
					title: 'Today',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita officia culpa assumenda! Maiores repudiandae quasi aspernatur veniam odio nostrum fugiat quod nulla nesciunt tempore! Similique officia eos placeat explicabo alias? Sint, adipisci nulla. Cupiditate sunt mollitia repudiandae nihil quis.'
				}
			]}
		/>
	</div>
</Container>
<Container>
	<div class="space-y-8 w-full">
		<Title>Our team</Title>
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
			<UserCard>
				<img
					slot="image"
					src="/assets/characters/11.jpg"
					alt="Skeleton"
					class="flex aspect-[3/4] object-cover object-center"
				/>
				<span slot="fullname">Skeleton</span>
				<span slot="position">Warrior</span>
			</UserCard>
			<UserCard>
				<img
					slot="image"
					src="/assets/characters/1.jpg"
					alt="Shiro Neko"
					class="flex aspect-[3/4] object-cover object-center"
				/>
				<span slot="fullname">Shiro Neko</span>
				<span slot="position">Nun</span>
			</UserCard>
			<UserCard>
				<img
					slot="image"
					src="/assets/characters/7.jpg"
					alt="Nergal"
					class="flex aspect-[3/4] object-cover object-center"
				/>
				<span slot="fullname">Nergal</span>
				<span slot="position">God of death</span>
			</UserCard>
			<UserCard>
				<img
					slot="image"
					src="/assets/characters/8.jpg"
					alt="Neko shōjo"
					class="flex aspect-[3/4] object-cover object-center"
				/>
				<span slot="fullname">Neko shōj</span>
				<span slot="position">Nekomimi</span>
			</UserCard>
		</div>
	</div>
</Container>
<Container>
	<div class="space-y-16 w-full">
		<Title>In 35 countries</Title>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo obcaecati animi inventore,
			commodi blanditiis repellat consequuntur rerum distinctio, libero facere pariatur architecto
			neque ipsa dolores facilis quidem expedita nemo est.
		</p>
		<Map />
	</div>
</Container>
