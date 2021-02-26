<template>
	<div>
		<section class="hero is-medium ">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-vcentered">
						<div class="column">
							<lottie-player src="https://thirm.com/animations/thirm.json" background="transparent" speed="1" style="width: 100%; height: 100%" loop autoplay></lottie-player>
						</div>
						<div class="column is-4 is-offset-1">
							<div class="content box"><strong>THIRM PROTOCOL</strong> allows you to transfer your cryptocurrency assets between multiple blockchains. Inter-blockchain access powered by an abstract permissionless VM accessed through open smart contracts on all supported blockchains.</div>

							<div class="columns is-vcentered">
								<div class="column">
									<a href="https://bridge.thirm.com/" target="_blank">
										<b-button class="access-button" block type="is-info" expanded>
											<span>Access Bridge</span>
											<i class="fas fa-long-arrow-alt-right"></i>
										</b-button>
									</a>
								</div>
							</div>
							<div class="columns is-vcentered">
								<div class="column">
									<a href="https://stats.thirm.com/" target="_blank">
										<b-button type="is-success is-light" expanded>Stats</b-button>
									</a>
								</div>
								<div class="column">
									<a href="https://docs.thirm.com/" target="_blank">
										<b-button type="is-danger is-light" expanded>Documentation</b-button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<tags />

		<section class="section is-medium container">
			<div class="columns is-vcentered is-multiline">
				<div class="column zoom is-6">
					<div class="subtitle box has-text-centered" style="background-color: #7ed6df">Modular</div>
				</div>

				<div class="column zoom  is-6">
					<div class="subtitle box  has-text-centered" style="background-color: #ffbe76">Fast</div>
				</div>

				<div class="column zoom  is-4">
					<div class="subtitle  box has-text-centered" style="background-color: #95afc0">Secure</div>
				</div>

				<div class="column  zoom is-4">
					<div class="subtitle  box has-text-centered" style="background-color: #ff6b81">Cross Platform</div>
				</div>

				<div class="column zoom  is-4">
					<div class="subtitle  box has-text-centered" style="background-color: #70a1ff">Interlinked</div>
				</div>
				<div class="column zoom  is-7">
					<div class="subtitle  box has-text-centered" style="background-color: #ffda79">Permisionless</div>
				</div>
				<div class="column zoom  is-3">
					<div class="subtitle  box has-text-centered" style="background-color: #f7f1e3">Trustless</div>
				</div>
				<div class="column zoom  is-2">
					<div class="subtitle  box has-text-centered" style="background-color: #2bcbba">SAFU</div>
				</div>
			</div>
		</section>

		<all />

		<medium class="is-hidden-mobile" />
	</div>
</template>

<script>
import medium from '../components/medium';
import tags from '../components/tags';
import all from '../components/all';

export default {
	components: {
		medium,
		tags,
		all,
	},
};
</script>

<style scoped>
.zoom {
	transition: all 0.5s ease-in-out;
	
}

.zoom .box {
	padding: 40px 0;
	color: #191919;
	font-size: 18px;
	font-weight: 500;
}
.zoom:hover {
	transform: scale(1.2);
}

.access-button i {
		margin-left: 8px;
}
</style>
