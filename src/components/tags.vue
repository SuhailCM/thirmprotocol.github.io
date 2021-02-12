<template>
	<div>
		<section class="section is-medium container">
			<div class="columns is-multiline listing-wrapper">
				<div class="column zoom">
					<a class="listing" target="_blank" href="https://www.stateofthedapps.com/dapps/thirm"><img src="../assets/tags/sod.png"/></a>
				</div>

				<div class="column zoom">
					<a class="listing" target="_blank" href="https://www.coingecko.com/en/coins/thirm-protocol"> <img src="../assets/tags/coingecko.png"/></a>
				</div>

				<div class="column zoom">
					<a class="listing" target="_blank" href="https://coinmarketcap.com/currencies/thirm-protocol"> <img src="../assets/tags/coinmarketcap.png"/></a>
				</div>

				<div class="column zoom">
					<a class="listing" target="_blank" href="https://uniswap.info/token/0xb526fd41360c98929006f3bdcbd16d55de4b0069"> <img src="../assets/tags/uniswap.png"/></a>
				</div>

				<div class="column zoom">
					<a class="listing" target="_blank" href="https://etherscan.io/token/0xb526fd41360c98929006f3bdcbd16d55de4b0069"> <img src="../assets/tags/etherscan.png"/></a>
				</div>

				<div class="column zoom">
					<a class="listing" target="_blank" href="https://matcha.xyz/markets/0xb526fd41360c98929006f3bdcbd16d55de4b0069"> <img src="../assets/tags/matcha.png"/></a>
				</div>
			</div>
		</section>
	</div>
</template>
<style>
.listing-wrapper {
	margin: 16px 0;
	display: flex;
	flex-direction: row;
	align-items: center;
}

@media screen and (max-width: 1023px) {
	.listing-wrapper {
		flex-direction: column;
	}
}

.listing-wrapper .listing img {
	width: 200px;
	padding: 8px;
}
</style>
