<script lang="ts">
	type Record = {
		name: string;
		description: String;
		price: number;
		image:string;
	};
	export let record: Record;
</script>

<div class={`bg-secondary rounded-lg p-4 shadow-2xl flex flex-col gap-2 variant-ghost-secondary ${record.image == "" && "hidden"}`}>
	<h3 class="text-xl font-bold">{record.name}</h3>
	<div class="flex flex-row gap-2 w-full">
		<div
			id="image"
			style="background-image: url('{record.image}');"
			class="relative w-[125px] min-w-[125px] h-[125px] rounded-lg bg-center bg-cover"
		></div>
		<div class="flex flex-col gap-2">
			<p class="text-txtSecondary">{record.description}</p>
			<span class="text-lg font-semibold text-right">${record.price}</span>
		</div>
	</div>
</div>
