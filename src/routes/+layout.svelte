<script lang="ts">
	import { Drawer, Toast, drawerStore, Modal, AppShell } from '@skeletonlabs/skeleton';
	import '../style/theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../style/app.postcss';
	import '@fortawesome/fontawesome-free/js/all.js';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import Header from '$lib/components/header/Header.svelte';

	import { storePopup } from '@skeletonlabs/skeleton';
	import { config } from '$lib/config';
	import Footer from '$lib/components/footer/Footer.svelte';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<Modal />
<Toast position="tr" />
<Drawer />
<AppShell class="transition-transform" regionPage="variant-ringed-surface ring-0">
	<svelte:fragment slot="header">
		<Header>
			<a slot="title" class="text-tertiary-500 before:bg-tertiary-500" href="/">
				{config.appName}
			</a>
			<nav slot="menu" class="w-full flex justify-center items-center h-full">
				<ul
					class="flex gap-8 xl:gap-4 text-4xl xl:text-xl flex-col xl:flex-row h-full justify-center items-center"
				>
					{#each config.pages as page}
						<li>
							<a href={page.href} class="text-tertiary-500 before:bg-tertiary-500">
								{page.title}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
			<div slot="actions" class="text-2xl space-x-2">
				<a
					href="https://www.facebook.com/maciek.kubus.7/"
					target="blank"
					class="text-tertiary-500 hover:text-facebook"
				>
					<i class="fab fa-facebook-square" />
				</a>
				<a
					href="https://www.instagram.com/maciekkubus/"
					target="blank"
					class="text-tertiary-500 hover:text-instagram"
				>
					<i class="fab fa-instagram" />
				</a>
				<a
					href="https://open.spotify.com/user/6zd9lap9vzxqvdp2usxucizrh?si=a19c33e8d3f34168"
					target="blank"
					class="text-tertiary-500 hover:text-spotify"
				>
					<i class="fab fa-spotify" />
				</a>
			</div>
		</Header>
	</svelte:fragment>
	<main class="w-full pt-16">
		<slot />
	</main>
	<svelte:fragment slot="pageFooter">
		<Footer>
			<svelte:fragment slot="col-1">
				<div class="flex gap-4 items-center">
					<div class="text-4xl font-heading-token font-black">{config.appName}</div>
				</div>
				<div class="text-tertiary-600 text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</div>
				<div>
					<ul class="flex gap-4 text-2xl">
						<li>
							<a href="/" class="text-tertiary-500 hover:text-instagram">
								<i class="fab fa-instagram" />
							</a>
						</li>
						<li>
							<a href="/" class="text-tertiary-500 hover:text-facebook">
								<i class="fab fa-facebook-square" />
							</a>
						</li>
						<li>
							<a href="/" class="text-tertiary-500 hover:text-youtube">
								<i class="fab fa-youtube" />
							</a>
						</li>
					</ul>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="col-2">
				<div class="text-3xl font-heading-token font-bold">Get in touch</div>
				<div class="text-lg flex flex-col justify-start items-start gap-1">
					<a
						href="tel:+48 570 277 237"
						class="text-tertiary-600 before:bg-tertiary-500 flex gap-2 w-auto justify-center hover:text-tertiary-500"
					>
						<div><i class="fas fa-phone" /></div>
						<div>+48 570 277 237</div>
					</a>
					<a
						href="mailto:maciekkubus@gmail.com"
						class="text-tertiary-600 before:bg-tertiary-500 flex gap-2 w-auto justify-center hover:text-tertiary-500"
					>
						<div><i class="fas fa-envelope" /></div>
						<div>maciekkubus@gmail.com</div>
					</a>
					<a
						href="https://goo.gl/maps/WhWGN7Mt9tgnJQvLA"
						target="_blank"
						class="text-tertiary-600 before:bg-tertiary-500 flex gap-2 w-auto justify-center hover:text-tertiary-500"
					>
						<div><i class="fas fa-map-marker-alt" /></div>
						<div>Janówka, Mokra 21</div>
					</a>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="col-3">
				<div class="text-3xl font-heading-token font-bold">Account</div>
				<div class="text-lg flex flex-col justify-start items-start gap-1">
					<a
						href="/"
						class="text-tertiary-600 before:bg-tertiary-500 flex gap-2 w-auto justify-center hover:text-tertiary-500"
					>
						<div>Dashboard</div>
					</a>
					<a
						href="/"
						class="text-tertiary-600 before:bg-tertiary-500 flex gap-2 w-auto justify-center hover:text-tertiary-500"
					>
						<div>Settings</div>
					</a>
					<a
						href="/"
						class="text-tertiary-600 before:bg-tertiary-500 flex gap-2 w-auto justify-center hover:text-tertiary-500"
					>
						<div>Orders</div>
					</a>
					<a
						href="/"
						class="text-tertiary-600 before:bg-tertiary-500 flex gap-2 w-auto justify-center hover:text-tertiary-500"
					>
						<div>Tickets</div>
					</a>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="col-4">
				<div class="text-3xl font-heading-token font-bold">Quick</div>
				<div class="text-lg flex flex-col justify-start items-start gap-1">
					<a
						href="/faq"
						class="text-tertiary-600 before:bg-tertiary-500 flex gap-2 w-auto justify-center hover:text-tertiary-500"
					>
						<div>FAQ</div>
					</a>
					<a
						href="/privacy-policy"
						class="text-tertiary-600 before:bg-tertiary-500 flex gap-2 w-auto justify-center hover:text-tertiary-500"
					>
						<div>Privacy Policy</div>
					</a>
					<a
						href="/refunds"
						class="text-tertiary-600 before:bg-tertiary-500 flex gap-2 w-auto justify-center hover:text-tertiary-500"
					>
						<div>Refunds</div>
					</a>
					<a
						href="/legal-issues"
						class="text-tertiary-600 before:bg-tertiary-500 flex gap-2 w-auto justify-center hover:text-tertiary-500"
					>
						<div>Legal issues</div>
					</a>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="bottom">
				<div>
					<span>Copyrigth &copy; 2023 {config.appName} - Created By</span>
					<a
						href="https://maciejkubus.usermd.net/"
						target="_blank"
						class="text-tertiary-500 hover:text-tertiary-600 ml-1"
					>
						Maciej Kubus
					</a>
				</div>
			</svelte:fragment>
		</Footer>
	</svelte:fragment>
</AppShell>
