<template>
	<section class="hero is-medium">
		<div class="hero-body">
			<div class="container">
				<div ref="medium-widget" id="medium-widget" class="lcontainer__medium-widget" :class="{ 'lcontainer__medium-widget--loaded': isMediumLoaded }"></div>
			</div>
		</div>
	</section>
</template>

<style>
.medium-wrapper {
	padding: 60px 0;
}

.medium-widget-article__image img {
	border-radius: 8px;
	border: 1px solid #e3e3e3;
}

.medium-widget-article__title {
	font-size: 16px;
}
</style>

<script>
export default {
	data() {
		return {
			isMediumLoaded: false,
		};
	},
	mounted() {
		this.$loadScript('https://medium-widget.pixelpoint.io/widget.js')
			.then(() => {
				this.initMedium();
			})
			.catch(() => {
				console.error("Can't load Medium publication");
			});
	},
	beforeDestroy() {
		let element = this.$refs['medium-widget'];
		element.innerHTML = '';
		this.$unloadScript('https://medium-widget.pixelpoint.io/widget.js');
	},
	methods: {
		initMedium() {
			window.MediumWidget.Init({
				renderTo: '#medium-widget',
				params: {
					resource: 'https://medium.com/thirmprotocol',
					postsPerLine: 4,
					limit: 4,
					picture: 'big',
					fields: [],
					ratio: 'landscape',
				},
			});

			setTimeout(() => {
				this.isMediumLoaded = true;
			}, 500);
		},
	},
};
</script>
