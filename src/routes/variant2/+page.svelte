<script lang="ts">
	// @ts-nocheck
	import Variant2 from '../../components/Menu/Variant2.svelte';
	import PageWrapper from '../../components/PageWrapper.svelte';
	import { theme } from '../../store/theme';
	// Transform section keys to be more readable
	$: currentTheme = $theme;
</script>

<head>
	<title>Variant 2</title>
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
		<Variant2 />
	</PageWrapper>
</body>
