<template>
	<div>
		<section class="hero is-medium">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-vcentered">
						<div class="column">
							<lottie-player src="https://thirm.com/animations/logo.json" background="transparent" speed="0.1" style="width: 100%; height: 100%" loop autoplay></lottie-player>
						</div>
						<div class="column">
							<div class="side-text"><strong>THIRM PROTOCOL</strong> allows you to transfer your cryptocurrency assets between numerous blockchains. Inter-blockchain access powered by an abstract permissionless VM accessed through open smart contracts on all supported blockchains. </div>
							<social />
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="hero">
			<div class="hero-body">
				<div class="container">
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
				</div>
			</div>
		</section>

		<section class="hero is-medium">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-vcentered">
						<div class="column">
							<div class="title">Inter-Blockchain Access</div>
							<hr />
							<div class="subtitle">Access tokens from any blockchain using your existing smart contracts without having to worry about wrapping or unwrapping tokens.</div>
						</div>
						<div class="column">
							<lottie-player src="https://thirm.com/animations/blockchain.json" background="transparent" speed="1" style="width: 100%; height: 100%" loop autoplay></lottie-player>
						</div>
					</div>
				</div>
			</div>
		</section>

		<all class="is-hidden-mobile" />

		<medium />
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

.side-text {
	font-size: 18px;
	margin: 24px 4px;
}

.title-text {
	font-size: 24px;
	position: relative;
	padding: 16px 0;
	margin-bottom: 36px;
	font-family: 'Poppins', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

.title-text::after {
	content: '';
	position: absolute;
	width: 40px;
	height: 5px;
	background-color: #3742fa;
	bottom: 0;
	left: 0;
}
</style>

<script>
import all from '../components/all';
import medium from '../components/medium';
import social from '../components/social';

export default {
	components: {
		all,
		social,
		medium,
	},
};
</script>
