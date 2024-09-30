<script lang="ts">
	type Record = {
		name: string;
		description: String;
		price: number;
	};
	export let record: Record;
	let image: string =
		'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500/k/archive/8cfbcbb2919742682345681d469b7417a73e4dfe';
</script>

<div class="bg-secondary rounded-lg p-4 shadow-2xl flex flex-col gap-2 variant-ghost-secondary">
	<h3 class="text-xl font-bold">{record.name}</h3>
	<div class="flex flex-row gap-2 w-full">
		<div
			id="image"
			style="background-image: url('{image}');"
			class="relative w-[125px] min-w-[125px] h-[125px] rounded-lg bg-center bg-cover"
		></div>
		<div class="flex flex-col gap-2">
			<p class="text-txtSecondary">{record.description}</p>
			<span class="text-lg font-semibold text-right">${record.price}</span>
		</div>
	</div>
</div>
