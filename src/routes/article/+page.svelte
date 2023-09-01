<script lang="ts">
	import ArticleMini from '$lib/components/article-mini/ArticleMini.svelte';
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
	<title>{config.appName} - Article</title>
</svelte:head>

<Container>
	<div class="xl:min-h-[440px] w-full flex flex-col justify-center items-start gap-8">
		<h1 class="font-1000 text-9xl">Article</h1>
		<p class="text-2xl max-w-4xl">
			Deleniti aut unde, necessitatibus ipsum nemo ipsam atque quod odit, recusandae adipisci animi
			molestias dignissimos, quas architecto.
		</p>
		<div
			class="flex gap-4 text-xl justify-between items-center border-t border-tertiary-800 pt-4 w-full"
		>
			<div>
				<i class="fas fa-calendar-alt text-xl" />
				<span class="ml-2"> 25/03/2000 </span>
			</div>
			<div class="">
				<UserButton>
					<Avatar
						slot="avatar"
						initials="MK"
						background="bg-secondary-500"
						fill="fill-surface-500"
						width="w-8"
					/>
					<svelte:fragment slot="username">maciejkubus</svelte:fragment>
				</UserButton>
			</div>
		</div>
	</div>
</Container>

<Container>
	<div class="flex flex-col-reverse xl:flex-row gap-8">
		<div class="w-full md:w-2/3 space-y-8 text-xl">
			<Title>Lorem Ipsum</Title>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quam doloremque
				reiciendis dolorum quis iusto, omnis possimus enim a officia, distinctio velit voluptatum
				autem saepe nulla ipsa aut? Incidunt est, ad possimus ducimus eum modi nostrum? Illum nulla
				accusantium dignissimos, voluptates consequatur nostrum veniam ex. Magni a repellendus et
				accusamus.
			</p>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit eaque a, reiciendis
				incidunt aspernatur veritatis, quaerat odio corrupti natus eos earum possimus eligendi alias
				tempore enim corporis nisi officia quasi quisquam eum quibusdam. Veniam voluptatem nisi
				ducimus voluptate laudantium libero ab aliquam, qui quidem officiis eligendi pariatur ullam
				nobis rerum soluta illum vitae! Itaque libero, ex repudiandae aut ipsum aperiam dolorem quas
				velit consequuntur quod eius quo autem. Assumenda doloremque atque minima nulla quod nisi
				corporis, impedit cumque voluptate, perferendis veritatis, nostrum sit? Culpa ducimus harum
				enim totam tenetur, voluptatibus illo eum? Iste harum nostrum error dolorem ea tenetur,
				beatae eligendi itaque molestiae qui ratione numquam eius. Ipsum nihil numquam reprehenderit
				architecto. Rerum excepturi, quam repellendus ab veniam perferendis cumque?
			</p>
			<Title>Lorem Ipsum</Title>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam libero reprehenderit eum
				explicabo dolor repellat iusto molestiae id mollitia vel. Incidunt laborum accusantium
				tenetur culpa adipisci rerum ut voluptatibus quis sunt, ipsam temporibus sapiente iusto
				quod, cupiditate beatae laboriosam saepe quam velit sit, quaerat officiis! Doloribus nostrum
				dicta molestiae commodi dignissimos excepturi expedita, ullam illo labore nisi consectetur
				itaque rem quas architecto velit? Vero delectus voluptatum vel facilis ab quibusdam at atque
				laborum laboriosam esse itaque non doloribus, explicabo veritatis laudantium nostrum amet
				obcaecati repellat cum id rem eaque corporis voluptatem. Laborum, assumenda illo maiores id
				magni eligendi modi nemo? Ipsum tenetur aspernatur, velit accusantium neque aperiam hic quo
				error architecto laboriosam dignissimos soluta enim nihil numquam iusto blanditiis sequi
				laudantium possimus, molestias animi facilis exercitationem at, temporibus maiores. Beatae
				quis, magni id obcaecati delectus autem iure necessitatibus, provident dolorum non aliquam
				voluptas vel voluptatibus cum repellat quaerat aut nobis? Omnis autem adipisci consequatur,
				ut nesciunt ducimus quo culpa nulla voluptate repellat maxime vitae! Necessitatibus ducimus
				fugit, quaerat, numquam aut quibusdam voluptatum fugiat blanditiis odit natus dolorum, modi
				cum iusto.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio corporis eius
				blanditiis asperiores iste quaerat odio voluptates atque eveniet. Labore nam nesciunt
				delectus porro eum, reiciendis architecto et recusandae quisquam, minima facilis non debitis
				dolore! Iure tempora molestiae placeat minus asperiores at incidunt voluptatum eveniet
				sapiente officia? Autem beatae quidem porro deleniti, minus voluptas impedit eveniet sint
				quasi dicta laudantium assumenda. Possimus dolorem corporis cupiditate culpa neque error
				delectus minima non iste perferendis accusamus dolore quas quaerat, voluptatem, quos nobis
				magni ratione. Nesciunt natus at omnis dolorem impedit autem repellat dolorum distinctio
				facilis quo rerum aliquam, provident placeat laborum tempore error totam ullam reprehenderit
				fugit expedita laboriosam quas tempora facere sunt! A maiores optio alias dolore fugit iusto
				ratione nostrum iure officia aperiam. Corrupti obcaecati assumenda reiciendis id officia
				eaque! Nisi laudantium libero debitis molestias quis cumque culpa quaerat deserunt fuga
				magni explicabo exercitationem sit tempora, at ducimus neque pariatur porro obcaecati
				officia soluta magnam sed in! Incidunt facere eaque rem sequi illo possimus animi, dicta
				expedita porro odit. Omnis dolore voluptatibus ipsam est fuga cum fugit error assumenda
				aspernatur odio incidunt qui voluptas, sapiente beatae sit. Suscipit necessitatibus id, unde
				illum quod delectus architecto cumque reiciendis officiis, dolorum quae, magni vero
				cupiditate soluta tempore quia sint eaque excepturi exercitationem at saepe. Veniam minima
				vero facilis ipsam quaerat expedita quos explicabo cum. Aspernatur illum magnam quibusdam
				nulla tempora impedit natus esse maxime, at deserunt asperiores enim rem odit corrupti.
			</p>
		</div>
		<div class="w-full md:w-1/3">
			<Sidebar>
				<SidebarContent />
			</Sidebar>
		</div>
	</div>
</Container>
