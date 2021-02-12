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
										<b-button type="is-success is-light" expanded>Bridge Assets</b-button>
									</a>
								</div>
								<div class="column">
									<a href="https://stats.thirm.com/" target="_blank">
										<b-button type="is-link is-light" expanded>Stats</b-button>
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

		<section class="hero is-medium">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-vcentered is-multiline">
						<div class="column is-6">
							<div class="subtitle box has-text-centered">Modular</div>
						</div>

						<div class="column is-6">
							<div class="subtitle box  has-text-centered">Fast</div>
						</div>

						<div class="column is-4">
							<div class="subtitle  box has-text-centered">Secure</div>
						</div>

						<div class="column is-4">
							<div class="subtitle  box has-text-centered">Cross Platform</div>
						</div>

						<div class="column is-4">
							<div class="subtitle  box has-text-centered">Interlinked</div>
						</div>
						<div class="column is-4">
							<div class="subtitle  box has-text-centered">Interlinked</div>
						</div>
					</div>
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
