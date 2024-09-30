<script>
	import { AppShell } from '@skeletonlabs/skeleton';
	import Footer from './Footer.svelte';
	import Navbar from './Navbar.svelte';
	import Sidebar from './Sidebar.svelte';
	let isOpen = false;
</script>

<div class="relative">
	<Navbar bind:isOpen />
	{#if isOpen}
		<Sidebar />
	{/if}
	<slot />
	<Footer />
</div>
