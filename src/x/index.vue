<template>
	<div>
		<section class="hero is-medium">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-vcentered">
						<div class="column">
							<lottie-player src="https://thirm.com/logo.json" background="transparent" speed="0.4" style="width: 100%; height: 100%" loop autoplay></lottie-player>
						</div>
						<div class="column is-offset-1">
							<b-notification type="is-light" aria-close-label="Close notification"> Approx 9000 THIRM is added on <a href="https://app.bounce.finance/fixed-swap/4608">bounce.finance</a>, 1 ETH = 40 THIRM. The generated ETH will be locked in Uniswap LP Permanently. </b-notification>

							<div class="content box"><strong>THIRM PROTOCOL</strong> enables non-ERC20 cryptocurrencies (like BTC, LTC, HTR, NANO, etc.) partake in the DeFi edge, facilitating cross-chain lending, DEX trading, collateralization and more.</div>

							<hr />
							<social />
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="hero is-medium is-light">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-multiline listing-wrapper">
						<div class="column zoom">
							<a class="listing" target="_blank" href="https://www.stateofthedapps.com/dapps/thirm">
								<img src="../assets/tags/sod.png" />
							</a>
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
					</div>
				</div>
			</div>
		</section>

		<all class="is-hidden-mobile"/>
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

.features {
	margin: 16px 8px;
	display: flex;
	justify-content: space-around;
	width: 100%;
}

.features .feature {
	font-size: 21px;
	color: #4834d4;
	text-transform: uppercase;
	font-weight: 600;
	padding: 0 16px;
}
</style>

<script>
import all from '../components/all';
import social from '../components/social';

export default {
	components: {
		all,
		social,
	},
};
</script>
