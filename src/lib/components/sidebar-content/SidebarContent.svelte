<script lang="ts">
	import CategoryPin from '../category-pin/CategoryPin.svelte';
	import Search from '../search/Search.svelte';
	import Title from '../title/Title.svelte';
</script>

<Search />
<Title text="text-xl" fontWeight="font-normal">Discover more of what matters to you</Title>
<div class="flex flex-wrap gap-4">
	<CategoryPin variant="variant-filled-primary">Programming</CategoryPin>
	<CategoryPin variant="variant-filled-secondary">Data science</CategoryPin>
	<CategoryPin variant="variant-filled-tertiary">Technology</CategoryPin>
	<CategoryPin variant="variant-filled-error">Self improvement</CategoryPin>
	<CategoryPin variant="variant-filled-success">Writing</CategoryPin>
	<CategoryPin variant="variant-filled-warning">Relationships</CategoryPin>
	<CategoryPin variant="variant-filled-tertiary">Machine Learning</CategoryPin>
	<CategoryPin variant="variant-filled-secondary">Astrology</CategoryPin>
	<CategoryPin variant="variant-filled-warning">Drawing</CategoryPin>
	<CategoryPin variant="variant-filled-success">Weather</CategoryPin>
	<CategoryPin variant="variant-filled-primary">Sport</CategoryPin>
	<CategoryPin variant="variant-filled-error">Politics</CategoryPin>
</div>
<Title text="text-xl" fontWeight="font-normal">New and trending</Title>
<div class="flex flex-col gap-4">
	<div>
		<Title text="text-lg">Lorem ipsum</Title>
		<p>Lorem ipsum dolor, sit amet consectetur luminos...</p>
	</div>
	<div>
		<Title text="text-lg">Lorem ipsum</Title>
		<p>Lorem ipsum dolor, sit amet consectetur luminos...</p>
	</div>
	<div>
		<Title text="text-lg">Lorem ipsum</Title>
		<p>Lorem ipsum dolor, sit amet consectetur luminos...</p>
	</div>
	<div>
		<Title text="text-lg">Lorem ipsum</Title>
		<p>Lorem ipsum dolor, sit amet consectetur luminos...</p>
	</div>
</div>
<div
	class="bg-tertiary-800 aspect-square w-full rounded-lg flex justify-center items-center text-6xl font-bold font-heading-token"
>
	Ad
</div>
<div class="border-t border-tertiary-800 pt-4 flex flex-wrap gap-4 text-lg">
	<a href="/help">Help</a>
	<a href="/status">Status</a>
	<a href="/carrer">Carrer</a>
	<a href="/contact">Contact</a>
	<a href="/writing">Writing</a>
	<a href="/account">Account</a>
	<a href="/settings">Settings</a>
	<a href="/options">Options</a>
</div>
