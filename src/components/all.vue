<template>
	<div>
		<section class="section is-large container">
			<h1 class="title has-text-centered">Current <strong> Blockchains</strong> Supported</h1>
			<h2 class="subtitle has-text-centered">Read Documentation To Know More</h2>

			<br />
			<br />

			<div class="column is-offset-1">
				<div class="columns is-multiline">
					<div class="column is-3" v-for="item in lot" :key="item.symbol">
						<b-tooltip :label="item.name" position="is-top">
							<figure class="coin-image is-128x128">
								<img v-bind:src="item.logoURI.trim()" />
							</figure>
						</b-tooltip>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
.box.style1 .comp-title {
	font-size: 21px;
	color: #4834d4;
	text-transform: uppercase;
	font-weight: 600;
	padding: 16px 0;
}

.b-tooltip {
	width: 100%;
}

.coin-image {
	padding: 16px;
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
</style>

<script>
export default {
	data() {
		return {
			lot: [
				{
					name: 'Thirm Nano',
					symbol: 'tNANO',
					logoURI: 'https://ipfs.io/ipfs/QmexKGqDqovzHZRZQkHvEv9GoWfi9yfDLah8HNWRrdAbHK/tNANO.png',
				},
				{
					name: 'Thirm Bitcoin',
					symbol: 'tBTC',
					logoURI: 'https://ipfs.io/ipfs/QmexKGqDqovzHZRZQkHvEv9GoWfi9yfDLah8HNWRrdAbHK/tBTC.png',
				},
				{
					name: 'Thirm Monero (In Development)',
					symbol: 'tXMR',
					logoURI: 'https://ipfs.io/ipfs/QmWgMfHwJHDAUn9EH5P9cVnRU6PLNNURhYwAMovjKSavwD',
				},
				{
					name: 'Thirm Litecoin (In Development)',
					symbol: 'tLTC',
					logoURI: 'https://ipfs.io/ipfs/Qme3WEsNjQr3XrV59SUtihpgUErjSCimNPTdCqYDRsCFxm',
				},
			],
		};
	},
	async created() {},
};
</script>
