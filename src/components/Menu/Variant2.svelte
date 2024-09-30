<script>
	// @ts-nocheck
	import data from '../../data.json';
	import MenuCard2 from './common/MenuCard2.svelte';
	const sectionsData = Object.keys(data.menu).map((item) => {
		return {
			title: item.charAt(0).toUpperCase() + item.slice(1).replace(/_/g, ' '),
			code: item
		};
	});
</script>

<main class="max-w-6xl mx-auto px-4">
	{#each sectionsData as item, index}
		<section class="mb-10" id={`${item.code}`}>
			<h2 class="text-3xl font-semibold border-b-2 border-borderPrimary pb-2">
				{item.title}
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
				{#each data.menu[Object.keys(data.menu)[index]] as record}
					<MenuCard2 {record} />
				{/each}
			</div>
		</section>
	{/each}
</main>
