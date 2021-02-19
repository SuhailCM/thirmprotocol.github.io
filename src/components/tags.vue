<template>
	<div>
		<section class="section is-medium container">
			<div class="listing-wrapper">
				<div class="list-items">
					<a class="listing" target="_blank" href="https://www.stateofthedapps.com/dapps/thirm"><img src="../assets/tags/sod.png"/></a>
				</div>

				<div class="list-items">
					<a class="listing" target="_blank" href="https://www.coingecko.com/en/coins/thirm-protocol"> <img src="../assets/tags/coingecko.png"/></a>
				</div>

				<div class="list-items">
					<a class="listing" target="_blank" href="https://coinmarketcap.com/currencies/thirm-protocol"> <img src="../assets/tags/coinmarketcap.png"/></a>
				</div>
			</div>
			<div class="listing-wrapper">

				<div class="list-items greyscale">
					<a class="listing" target="_blank" href="https://uniswap.info/token/0xb526fd41360c98929006f3bdcbd16d55de4b0069"> <img src="../assets/tags/uniswap.png"/></a>
				</div>

				<div class="list-items greyscale">
					<a class="listing" target="_blank" href="https://etherscan.io/token/0xb526fd41360c98929006f3bdcbd16d55de4b0069"> <img src="../assets/tags/etherscan.png"/></a>
				</div>

				<div class="list-items greyscale">
					<a class="listing" target="_blank" href="https://matcha.xyz/markets/0xb526fd41360c98929006f3bdcbd16d55de4b0069"> <img src="../assets/tags/matcha.png"/></a>
				</div>
			</div>

			<div class="listing-wrapper">

				<div class="list-items">
					<a class="listing" target="_blank" href="https://uniswap.info/token/0xb526fd41360c98929006f3bdcbd16d55de4b0069"> <img src="../assets/tags/pancake.png"/></a>
				</div>

				<div class="list-items">
					<a class="listing" target="_blank" href="https://etherscan.io/token/0xb526fd41360c98929006f3bdcbd16d55de4b0069"> <img src="../assets/tags/bscscan.png"/></a>
				</div>

			</div>
		</section>
	</div>
</template>
<style>
.listing-wrapper {
	margin: 16px 36px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}

@media screen and (max-width: 1023px) {
	.listing-wrapper {
		flex-direction: column;
	}
}
.list-items {
	width: 250px;
	margin: 16px;
}

.listing-wrapper .listing img {
	width: 200px;
	padding: 8px;
}
.list-items.greyscale {
	opacity: 0.3;
}
.list-items.greyscale a > img{
	filter: grayscale(100%);
}
</style>
