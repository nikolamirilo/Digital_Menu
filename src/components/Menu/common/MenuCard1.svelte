<script lang="ts">
	type Record = {
		name: string;
		description: String;
		price: number;
	};
	export let record: Record;
</script>

<div class="bg-secondary rounded-lg p-4 shadow-2xl flex flex-col gap-2 variant-ghost-secondary">
	<h3 class="text-xl font-bold">{record.name}</h3>
	<p class="text-txtSecondary">{record.description}</p>
	<span class="text-lg font-semibold">${record.price}</span>
</div>
