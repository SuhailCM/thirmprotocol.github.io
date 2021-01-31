<template>
	<div>
		<section class="hero is-medium vli">
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
									<a href="https://dapp.thirm.com/" target="_blank">
										<b-button type="is-success is-light" expanded>Bridge Assets</b-button>
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

		<all class="is-hidden-mobile" />

		<medium />
	</div>
</template>

<script>
import all from '../components/all';
import medium from '../components/medium';
import tags from '../components/tags';

export default {
	components: {
		all,
		medium,
		tags,
	},
};
</script>
