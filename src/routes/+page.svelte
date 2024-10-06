<script lang="ts">
	// @ts-nocheck
	import Variant1 from '../components/Menu/Variant1.svelte';
	import Variant2 from '../components/Menu/Variant2.svelte';
	import PageWrapper from '../components/PageWrapper.svelte';
	import { theme } from '../store/theme';

	// Transform section keys to be more readable
	$: currentTheme = $theme;
	$: variant = 2;
</script>

<head>
	<title>Digital Menu</title>
</head>

<body data-theme={currentTheme} class="bg-primary pt-12">
	<PageWrapper>
		<div class="py-6 text-center flex flex-col justify-center items-center gap-4">
			<h1 class="text-4xl font-bold text-navigationMain">Digital Menu</h1>
			<p class="text-txtTertiary text-lg 2xl:text-xl px-5 max-w-[1000px]">
				Indulge in a journey through our exquisite culinary offerings, where every dish is a
				celebration of flavor, creativity, and tradition. Experience the best of our culinary
				delights, crafted by our talented chefs who pour their passion into each plate.
			</p>
		</div>

		<div
			class="text-sm font-medium text-center border-b mb-2 border-gray-200 dark:text-gray-300 dark:border-gray-700"
		>
			<ul class="flex flex-wrap justify-center -mb-px items-center text-tertiary-50">
				<li class="me-2">
					<button
						on:click={() => {
							variant = 1;
							console.log(variant);
						}}
						class="inline-block {variant === 1
							? 'active border-white'
							: ''} p-4 border-b-2 border-transparent rounded-t-lg">Variant 1</button
					>
				</li>
				<li class="me-2">
					<button
						on:click={() => {
							variant = 2;
							console.log(variant);
						}}
						class="inline-block p-4 border-b-2 border-transparent rounded-t-lg {variant === 2
							? 'active border-white'
							: ''}"
						aria-current="page">Variant 2</button
					>
				</li>
			</ul>
		</div>

		{#if variant === 1}
			<Variant1 />
		{/if}
		{#if variant === 2}
			<Variant2 />
		{/if}
		<!-- {#if variant === 3}
		<Variant3 />
	  {/if} -->
	</PageWrapper>
</body>
