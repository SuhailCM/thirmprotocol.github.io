<template>
	<div>
		<section class="hero is-medium">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-vcentered">
						<div class="column">
							<lottie-player src="https://thirm.com/animations/thirm.json" background="transparent" speed="1" style="width: 100%; height: 100%" loop autoplay></lottie-player>
						</div>
						<div class="column is-5 thirm-info">
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

		<feature />

		<all />

		<medium class="is-hidden-mobile" />

		<contact />
	</div>
</template>

<script>
import medium from '../components/medium';
import tags from '../components/tags';
import all from '../components/all';
import feature from '../components/feature';
import contact from '../components/contact';

export default {
	components: {
		medium,
		tags,
		all,
		contact,
		feature,
	},
};
</script>

<style scoped>
.access-button {
	height: 50px;
}
.access-button i {
	margin-left: 8px;
}

.thirm-info {
	padding: 24px;
}

.thirm-info .content.box {
	padding: 32px;
}
</style>
