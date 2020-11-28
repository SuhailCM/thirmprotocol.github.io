<template>
	<div>
		<section class="hero is-medium">
			<div class="hero-body">
				<div class="container">
					<div class="title">Important Components</div>
					<hr />
					<div class="columns is-vcentered is-multiline">
						<div class="column is-4" v-for="item in list" :key="item.title">
							<div class="box style1">
								<strong>{{ item.title }}</strong>
								<hr />
								{{ item.guide }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="hero is-light is-hidden-mobile">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-multiline">
						<div class="column is-2" v-for="item in lot" :key="item.symbol">
							<b-tooltip :label="item.name" position="is-top">
								<a target="_blank" v-bind:href="'https://etherscan.io/address/' + item.address">
									<figure class="image is-128x128 box zoom">
										<img v-bind:src="item.logoURI.trim()" />
									</figure>
								</a>
							</b-tooltip>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			lot: [
				{
					name: 'Thirm Bitcoin',
					symbol: 'tBTC',
					address: '0x36910c9695C1286c9377CEbc61D37bDEFcFdeAC6',
					logoURI: 'https://thirm.com/icons/tBTC.png',
				},
				{
					name: 'Thirm Nano',
					symbol: 'tNANO',
					address: '0x9DB44C215F14a874C0Ca45895f3A97f0839c29d9',
					logoURI: 'https://thirm.com/icons/tNANO.png',
				},
				{
					name: 'Thirm Tether',
					symbol: 'tUSDT',
					address: '0xB962776Fa4FaD32F46609A813488C4b62227325f',
					logoURI: 'https://thirm.com/icons/tUSDT.png',
				},
				{
					name: 'Thirm Dai',
					symbol: 'tDAI',
					address: '0xB29c13A70792B5B5D1Ab8e40b92233A16568Fe32',
					logoURI: 'https://thirm.com/icons/tDAI.png',
				},
				{
					name: 'Thirm Ethereum',
					symbol: 'tETH',
					address: '0x138083bd8a49357b4630733954e9538ed74df105',
					logoURI: 'https://thirm.com/icons/tETH.png',
				},
			],
			reward: 200,
			ethprice: 0,
			data: [],
			list: [
				{
					title: 'THIRM VM',
					guide: 'THIRM VM is software that allows you to access your cryptocurrecies on multiple blockchains.',
				},
				{
					title: 'THIRM',
					guide: 'THIRM is a governance smart contract written on the Ethereum Blockchain and is tradeable with other cryptocurrency as it also follows ERC20 Token Standard.',
				},
				{
					title: 'T-TOKENS',
					guide: 'T-TOKENS are Tokenized cryptocurrencies by THIRM VM. Each T-TOKEN is backed by its native cryptocurrency. ( ex 1 tBTC = 1 BTC )',
				},
			],
		};
	},
};
</script>

<style scoped>
.style1 {
	height: 300px;
}
</style>
