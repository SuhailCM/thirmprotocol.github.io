<template>
	<section class="hero is-medium">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-vcentered">
					<div class="column">
						<lottie-player src="https://thirm.com/animations/astro.json" background="transparent" speed="1" style="width: 100%; height: 100%" loop autoplay></lottie-player>
					</div>
					<div class="column is-offset-1">
						<b-collapse class="card" animation="slide" v-for="(collapse, index) of collapses" :key="index" :open="isOpen == index" @open="isOpen = index">
							<div slot="trigger" slot-scope="props" class="card-header" role="button">
								<p class="card-header-title">
									{{ collapse.title }}
								</p>
								<a class="card-header-icon">
									<b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
								</a>
							</div>
							<div class="card-content">
								<div class="content">
									{{ collapse.text }}
								</div>
							</div>
						</b-collapse>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			isOpen: 0,
			collapses: [
				{
					title: 'THIRM Token',
					text: 'THIRM Token is a governance/ownership tracking smart contract written on the ethereum blockchain.',
				},
				{
					title: 'THIRM Tokens Uses',
					text: 'Thirm Tokens are your governance share in Thirm Protocol, all holders decide the future of Thirm Protocol.',
				},
				{
					title: 'THIRM Tokens Value',
					text: 'THIRM holds no value, THIRM is only used to govern/operate/manage Thirm VM, it has no real world value.',
				},
			],
		};
	},
};
</script>
