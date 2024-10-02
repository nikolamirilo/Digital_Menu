<script lang="ts">
	import data from '../data.json';
	import 'iconify-icon';
	export let isOpen: boolean;
	// Reactive variable to store the selected item
	let selectedSection = 'breakfast'; // Default selected section
	const navItems = Object.keys(data.menu).map((item) => {
		return {
			title: item.charAt(0).toUpperCase() + item.slice(1).replace(/_/g, ' '),
			code: item
		};
	});

	// Function to set the selected section
	function selectSection(section: string) {
		selectedSection = section;
	}

	// Reactive variable to control the mobile menu state
	let isMobileMenuOpen = false;
</script>

<header class="fixed top-0 right-0 w-full z-50 text-white variant-glass-secondary">
	<nav
		class={`bg-secondary shadow-lg overflow-hidden md:px-10 ${isMobileMenuOpen ? 'animate-fade-in' : ''}`}
	>
		<div class="max-w-6xl mx-auto px-4 w-full">
			<div class="flex w-full items-center py-4 justify-between">
				<div class="hidden lg:flex justify-center items-center w-full">
					<ul class="flex md:gap-4 lg:gap-8 relative w-full justify-center items-center">
						{#each navItems as item}
							<li>
								<a
									href={`#${item.code}`}
									class="text-lg text-txtPrimary transition duration-300 after:border-b-[3px] after:border-b-tertiary-300"
									class:selected={selectedSection === item.code}
									on:click={() => selectSection(item.code)}>{item.title}</a
								>
							</li>
						{/each}
						<button
							class="flex items-center justify-center absolute left-0"
							on:click={() => {
								if (isOpen) {
									isOpen = false;
								} else {
									isOpen = true;
								}
							}}
						>
							<iconify-icon icon="mdi:paint" class="text-2xl"></iconify-icon>
						</button>
					</ul>
				</div>
				<button
					class="lg:hidden text-txtPrimary"
					on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)}
				>
					<span class="block w-6 h-1 text-white mb-1"></span>
					<span class="block w-6 h-1 text-white mb-1"></span>
					<span class="block w-6 h-1 text-white mb-1"></span>
				</button>
			</div>
			{#if isMobileMenuOpen}
				<ul class="flex flex-col space-y-2 py-4 lg:hidden overflow-hidden animate-fade-in">
					{#each navItems as item}
						<li>
							<a
								href={`#${item.code}`}
								class="text-lg text-txtPrimary transition duration-300 after:border-b-[3px] after:border-b-tertiary"
								class:selected={selectedSection === item.code}
								on:click={() => {
									selectSection(item.code);
									isMobileMenuOpen = false; // Close menu on item click
								}}>{item.title}</a
							>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</nav>
</header>

<style>
	a {
		position: relative;
		text-decoration: none;
	}
	a:after {
		display: block;
		content: '';
		position: absolute; /* Position the pseudo-element absolutely */
		left: 0; /* Start from the left */
		bottom: -3px; /* Position it below the text */
		width: 100%; /* Ensure it stretches the full width */
		transform: scaleX(0);
		transition: transform 250ms ease-in-out;
	}

	a:hover:after {
		transform: scaleX(1); /* Scale to full width on hover */
	}

	/* Style for selected link */
	a.selected:after {
		transform: scaleX(1); /* Show underline for selected item */
	}

	/* Animation for navbar and mobile menu */
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 0.3s ease forwards;
	}
</style>
