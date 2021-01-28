<template>
	<div>
		<section class="hero is-medium is-light">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-multiline">
						<div class="column is-2" v-for="item in lot" :key="item.symbol">
							<b-tooltip :label="item.name" position="is-top">
								<a target="_blank" v-bind:href="'https://etherscan.io/address/' + item.address">
									<figure class="image is-128x128">
										<img v-bind:src="item.logoURI.trim()" />
									</figure>
								</a>
							</b-tooltip>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style>
.box.style1 .comp-title {
	font-size: 21px;
	color: #4834d4;
	text-transform: uppercase;
	font-weight: 600;
	padding: 16px 0;
}

.coins-list {
	padding: 60px 0;
	background-color: rgba(225, 225, 225, 0.2);
}
</style>

<script>
export default {
	data() {
		return {
			lot: [],
		};
	},
	async created() {
		try {
			const Data = await fetch('https://raw.githubusercontent.com/thirmprotocol/Config/main/coins.json').then((data) => data.json());
			this.lot = Data.reverse();
		} catch (e) {
			console.log(e);
		}
	},
};
</script>
