<template>
	<div>
		<section class="hero is-medium ">
			<div class="hero-body">
				<div class="container">
					<div class="columns">
						<div class="column is-3">
							<h1 class="title">Supported Coins</h1>
							<hr />
							<h2 class="subtitle">More Coins Coming Soon..</h2>
						</div>
						<div class="column">
							<div class="columns is-multiline">
								<div class="column is-2" v-for="item in lot" :key="item.symbol">
									<b-tooltip :label="item.name" position="is-top">
										<a target="_blank" v-bind:href="'https://etherscan.io/address/' + item.address">
											<figure class="image is-128x128">
												<img v-bind:src="item.logoURI.trim()" />
											</figure>
										</a>
									</b-tooltip>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style>
.box.style1 .comp-title {
	font-size: 21px;
	color: #4834d4;
	text-transform: uppercase;
	font-weight: 600;
	padding: 16px 0;
}

.coins-list {
	padding: 60px 0;
	background-color: rgba(225, 225, 225, 0.2);
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
					address: '0x9DB44C215F14a874C0Ca45895f3A97f0839c29d9',
					logoURI: 'https://ipfs.io/ipfs/QmexKGqDqovzHZRZQkHvEv9GoWfi9yfDLah8HNWRrdAbHK/tNANO.png',
				},
				{
					name: 'Thirm Hathor (In Development)',
					symbol: 'tHTR',
					address: '0xf11a94383bf3aa163cf04c47a2295a55026f2d08',
					logoURI: 'https://ipfs.io/ipfs/QmTLDXpo1QCmWtSr3M4m5z4F4S1Ftwnnb1QDamz4rdMn5i',
				},
				{
					name: 'Thirm Bitcoin (In Development)',
					symbol: 'tBTC',
					address: '0x36910c9695C1286c9377CEbc61D37bDEFcFdeAC6',
					logoURI: 'https://ipfs.io/ipfs/QmexKGqDqovzHZRZQkHvEv9GoWfi9yfDLah8HNWRrdAbHK/tBTC.png',
				},
				{
					name: 'Coming Soon',
					symbol: 'tXMR',
					address: 'xxx',
					logoURI: 'https://ipfs.io/ipfs/QmaEjoEcj4qSv6F3qS4gU1vfdYhBGHkNdpzjVRTimFQn71',
				},
				{
					name: 'Coming Soon',
					symbol: 'tDASH',
					address: 'xxx',
					logoURI: 'https://ipfs.io/ipfs/QmPjxYtYVfszwmAmrTGmrK7fu6K1EspEkxxDkwPQQxFE4m',
				},
				{
					name: 'Coming Soon',
					symbol: 'tLTC',
					address: 'xxx',
					logoURI: 'https://ipfs.io/ipfs/QmaGZnkkiDC6NV3rQPCcMPmDTL4zojQKV6LUsDCHQUzRri',
				},
			],
		};
	},
};
</script>

<style scoped>
.style1 {
	height: 270px;
}
</style>
