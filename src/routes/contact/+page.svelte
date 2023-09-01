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

	let name = '';
	let email = '';
	let message = '';

	const submit = () => {};
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
			<a
				href="https://goo.gl/maps/WhWGN7Mt9tgnJQvLA"
				class="hover:text-primary-500"
				target="_blank"
			>
				<IconCard variant="">
					<i slot="icon" class="fas fa-map-marker-alt" />
					<span slot="text" class="text-2xl">Janówka, Mokra 21</span>
				</IconCard>
			</a>
		</div>
	</div>
</Container>

<Container>
	<div class="flex flex-col xl:flex-row w-full gap-8">
		<div class="w-1/2 space-y-8">
			<Title>Social media</Title>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos veritatis incidunt
				dicta esse, laudantium aut doloribus corrupti quos eius non quisquam, quam inventore tenetur
				fuga necessitatibus nobis delectus voluptatum?
			</p>
			<div class="flex flex-col gap-4 text-2xl">
				<a
					href="https://www.facebook.com/maciek.kubus.7/"
					target="blank"
					class="text-tertiary-500 hover:text-facebook"
				>
					<i class="fab fa-facebook-square" /> Facebook
				</a>
				<a
					href="https://www.instagram.com/maciekkubus/"
					target="blank"
					class="text-tertiary-500 hover:text-instagram"
				>
					<i class="fab fa-instagram" /> Instagram
				</a>
				<a
					href="https://open.spotify.com/user/6zd9lap9vzxqvdp2usxucizrh?si=a19c33e8d3f34168"
					target="blank"
					class="text-tertiary-500 hover:text-spotify"
				>
					<i class="fab fa-spotify" /> Spotify
				</a>
			</div>
		</div>
		<div class="w-1/2">
			<div class="space-y-8">
				<Title>Send a message</Title>
				<form on:submit|preventDefault={submit} class="space-y-4">
					<InputControl>
						<label slot="name" for="name">Name</label>
						<input
							slot="input"
							type="text"
							name="name"
							placeholder="Name"
							class="w-full rounded variant-filled-tertiary"
							bind:value={name}
							required
						/>
					</InputControl>
					<InputControl>
						<label slot="name" for="email">E-Mail</label>
						<input
							slot="input"
							type="email"
							name="email"
							placeholder="E-Mail"
							class="w-full rounded variant-filled-tertiary"
							bind:value={email}
							required
						/>
					</InputControl>
					<InputControl>
						<label slot="name" for="message">Message</label>
						<textarea
							slot="input"
							name="message"
							placeholder="Message"
							class="w-full rounded variant-filled-tertiary"
							bind:value={message}
							rows="4"
							required
						/>
					</InputControl>
					<div class="flex items-center gap-2">
						<input type="checkbox" name="agreement" required />
						<label for="agreement">
							I agree to <a href="/privacy-policy" class="underline hover:text-primary-500"
								>privacy policy</a
							> and i understand how data is stored.
						</label>
					</div>
					<div class="w-full flex justify-end">
						<button
							type="submit"
							class="variant-filled-primary hover:variant-filled-secondary px-4 py-2 rounded"
						>
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</Container>
<Container>
	<div class="space-y-8 w-full">
		<Title>Location</Title>
		<div class="w-full h-96 flex">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23477.59420541459!2d19.379065720829132!3d51.79194167355439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bb54104ba4569%3A0xd7d4a54e5760256b!2zTG5pYW5hIDIsIDkxLTE1OCDFgcOzZMW6!5e0!3m2!1sen!2spl!4v1693600705294!5m2!1sen!2spl"
				style="border:0;"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				title="contact map"
				class="flex-1"
			/>
		</div>
	</div>
</Container>
