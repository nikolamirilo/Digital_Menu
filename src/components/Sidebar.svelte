<script lang="ts">
	import { theme } from '../store/theme';

	const themes = [
		{ name: 'wintry', enhancements: true },
		{ name: 'skeleton', enhancements: true },
		{ name: 'modern', enhancements: true },
		{ name: 'hamlindigo', enhancements: true },
		{ name: 'rocket', enhancements: true },
		{ name: 'sahara', enhancements: true },
		{ name: 'gold-nouveau', enhancements: true },
		{ name: 'vintage', enhancements: true },
		{ name: 'seafoam', enhancements: true },
		{ name: 'crimson', enhancements: true },
		{
			name: 'purple',
			enhancements: true
		},
		{
			name: 'navy-blue',
			enhancements: true
		},
		{
			name: 'dark-red',
			enhancements: true
		}
	];

	// Initialize theme store

	// Function to change the theme
	function changeTheme(input: string) {
		theme.set(input);
	}
</script>

<div
	class="h-[100vh] w-56 fixed left-0 z-50 top-0 pt-20 bg-[#15171F] transition-all fade-in-out ease-in-out"
>
	<div class="flex flex-col justify-center items-center gap-4">
		{#each themes as themeObj}
			<button
				class="rounded-lg p-2 min-w-32 bg-purple-500 font-semibold"
				on:click={() => changeTheme(themeObj.name)}
			>
				{themeObj.name}
			</button>
		{/each}
	</div>
</div>
