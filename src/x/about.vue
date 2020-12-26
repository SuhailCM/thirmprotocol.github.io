<template>
	<div>
		<section class="hero is-medium">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-vcentered">
						<div class="column">
							<lottie-player src="https://thirm.com/animations/astro.json" background="transparent" speed="1" style="width: 100%; height: 100%" loop autoplay></lottie-player>
						</div>
						<div class="column is-offset-1">
							<div class="content">
								THIRM PROTOCOL, THIRM VM, THIRM TOKEN is developed and maintained by THIRM SOLUTIONS, a company operating from INDIA & CAYMAN ISLANDS.
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="hero is-medium">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-vcentered">
						<div class="column is-3">
							<div class="subtitle">
								MEET THE TEAM
							</div>
							<hr />
							<div class="content">
								We believe that cryptocurrencies should be convenient for everyone. We aim to make crosschain cryptocurrency management a hassle-free, one-click process.
							</div>
						</div>
						<div class="column is-offset-1">
							<div class="at-grid" data-column="2">
								<div class="at-column" v-for="item in team" :key="item.name">
									<div class="at-user">
										<div class="at-user__avatar">
											<img :src="item.img" />
										</div>
										<div class="at-user__name">{{ item.name }}</div>
										<div class="at-user__title">{{ item.title }}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			team: [
				{
					name: 'Aman Singh',
					title: 'Founder, Lead Developer',
					img: 'https://ipfs.io/ipfs/QmfK5JFYgT3BDEx4nT4yiG6WEHxS65GB3ae7ZVKP19TWno?filename=aman.PNG',
				},
				{
					name: 'Madhav Poudel',
					title: 'Frontend Developer',
					img: 'https://ipfs.io/ipfs/QmYeag3Xbc2CP3kv5W5cmQszcfppRLLWtfNjtAwkfQ9tCJ?filename=madhav.PNG',
				},
			],
		};
	},
};
</script>

<style scoped>
.at-grid {
	display: -webkit-box;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	flex-direction: row;
	flex-wrap: wrap;
	background: #fff;
	border: 3px solid #e2e9ed;
}
.at-grid[data-column='1'] .at-column {
	width: 100%;
	max-width: 100%;
	min-width: 100%;
	flex-basis: 100%;
}
.at-grid[data-column='2'] .at-column {
	width: 50%;
	max-width: 50%;
	min-width: 50%;
	flex-basis: 50%;
}
.at-grid[data-column='3'] .at-column {
	width: 33.3333333333%;
	max-width: 33.3333333333%;
	min-width: 33.3333333333%;
	flex-basis: 33.3333333333%;
}
.at-grid[data-column='4'] .at-column {
	width: 25%;
	max-width: 25%;
	min-width: 25%;
	flex-basis: 25%;
}
.at-grid[data-column='5'] .at-column {
	width: 20%;
	max-width: 20%;
	min-width: 20%;
	flex-basis: 20%;
}
.at-grid[data-column='6'] .at-column {
	width: 16.6666666667%;
	max-width: 16.6666666667%;
	min-width: 16.6666666667%;
	flex-basis: 16.6666666667%;
}
.at-grid[data-column='7'] .at-column {
	width: 14.2857142857%;
	max-width: 14.2857142857%;
	min-width: 14.2857142857%;
	flex-basis: 14.2857142857%;
}
.at-grid[data-column='8'] .at-column {
	width: 12.5%;
	max-width: 12.5%;
	min-width: 12.5%;
	flex-basis: 12.5%;
}
.at-grid[data-column='9'] .at-column {
	width: 11.1111111111%;
	max-width: 11.1111111111%;
	min-width: 11.1111111111%;
	flex-basis: 11.1111111111%;
}
.at-column {
	z-index: 0;
	position: relative;
	background: #fff;
	box-shadow: 0 0 0 1px #e2e9ed;
	padding: 10px;
	box-sizing: border-box;
	-webkit-transition: box-shadow 0.2s ease, z-index 0s 0.2s ease, -webkit-transform 0.2s ease;
	transition: box-shadow 0.2s ease, z-index 0s 0.2s ease, -webkit-transform 0.2s ease;
	transition: box-shadow 0.2s ease, transform 0.2s ease, z-index 0s 0.2s ease;
	transition: box-shadow 0.2s ease, transform 0.2s ease, z-index 0s 0.2s ease, -webkit-transform 0.2s ease;
}
.at-column:before {
	content: '';
	display: block;
	padding-top: 100%;
}
.at-column:hover {
	z-index: 1;
	box-shadow: 0 8px 50px rgba(0, 0, 0, 0.2);
	-webkit-transform: scale(1.05);
	transform: scale(1.05);
	-webkit-transition: box-shadow 0.2s ease, z-index 0s 0s ease, -webkit-transform 0.2s ease;
	transition: box-shadow 0.2s ease, z-index 0s 0s ease, -webkit-transform 0.2s ease;
	transition: box-shadow 0.2s ease, transform 0.2s ease, z-index 0s 0s ease;
	transition: box-shadow 0.2s ease, transform 0.2s ease, z-index 0s 0s ease, -webkit-transform 0.2s ease;
}
.at-column:hover .at-social {
	margin: 16px 0 0;
	opacity: 1;
}
@media (max-width: 800px) {
	.at-column {
		width: 50% !important;
		max-width: 50% !important;
		min-width: 50% !important;
		flex-basis: 50% !important;
	}
}
@media (max-width: 600px) {
	.at-column {
		width: 100% !important;
		max-width: 100% !important;
		min-width: 100% !important;
		flex-basis: 100% !important;
	}
}
.at-user {
	position: absolute;
	top: 50%;
	left: 0;
	width: 100%;
	-webkit-transform: translate(0, -50%);
	transform: translate(0, -50%);
	text-align: center;
}
.at-user__avatar {
	width: 128px;
	height: 128px;
	border-radius: 100%;
	margin: 0 auto 20px;
	overflow: hidden;
}
.at-user__avatar img {
	display: block;
	width: 100%;
	max-width: 100%;
}
.at-user__name {
	color: #313435;
	font-family: 'Roboto', sans-serif;
	font-size: 1.5rem;
	font-weight: 600;
	line-height: 2.625rem;
}
.at-user__title {
	color: #6f808a;
	font-family: 'Roboto', sans-serif;
	font-size: 0.875rem;
	line-height: 2.375rem;
}
</style>
