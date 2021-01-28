<template>
	<section class="hero is-medium">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-vcentered">
					<div class="column">
						<lottie-player src="https://thirm.com/animations/faq.json" background="transparent" speed="1" style="width: 100%; height: 100%" loop autoplay></lottie-player>
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
			collapses: [],
		};
	},
	async created() {
		try {
			const Data = await fetch('https://raw.githubusercontent.com/thirmprotocol/Config/main/faq.json').then((data) => data.json());
			this.collapses = Data.reverse();
		} catch (e) {
			console.log(e);
		}
	},
};
</script>
