<template>
	<div>
		<section class="hero is-medium">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-vcentered">
						<div class="column">
							<lottie-player src="https://ipfs.io/ipfs/QmbYzvjNH1WcBiVDrmu8vHihxAoFw3vCztuZHcsiib7BCD" background="transparent" speed="1" style="width: 100%; height: 100%" loop autoplay></lottie-player>
						</div>
						<div class="column is-offset-1">
							<div class="side-text">
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
						<div class="column is-12">
							<div class="title-text">
								Meet the team
							</div>
							<div class="side-text">
								We believe that cryptocurrencies should be convenient for everyone. We aim to make crosschain cryptocurrency management a hassle-free, one-click process.
							</div>
						</div>
						</div>
						<div class="columns is-vcentered">
								<div class="team-wrapper" v-for="item in team" :key="item.name">
									<div class="team-user">
										<div class="team-avatar">
											<img :src="item.img" />
										</div>
										<div class="team-name">{{ item.name }}</div>
										<div class="team-role">{{ item.title }}</div>
										<div class="item-social">
											<a href="#">
												<i class="fab fa-github"></i>
											</a>
											<a href="#">
											<i class="fab fa-twitter"></i>
											</a>
											<a href="#">
											<i class="fab fa-linkedin"></i>
											</a>
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

.team-wrapper {
	display: flex;
	flex-direction: row;
}
.team-wrapper .team-user {
	width: 300px;
	padding: 24px;
	margin: 24px;
	text-align: center;
}

.team-wrapper .team-user .team-avatar{
	display: flex;
	border-radius: 50%;
	position: relative;
	overflow: hidden;
	height: 250px;
	margin-bottom: 24px;
	border: 1px solid #e3e3e3;
}
.team-wrapper .team-user .team-name {
	font-size: 18px;
	font-weight: 600;
}

.team-wrapper .team-user .team-role {
	font-size: 15px;
	color: #777;
	font-style: italic;
}

.item-social {
	margin: 8px;
	font-size: 20px;
}

.item-social a{
	margin: 6px;
}

.item-social a:hover{
	color: #191919;
}

.title-text {
	font-size: 24px;
	position: relative;
	padding: 16px 0;
	margin-bottom: 36px;
	font-family: 'Poppins', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

.title-text::after {
	content: "";
	position: absolute;
	width: 40px;
	height: 5px;
	background-color: #3742fa;
	bottom: 0;
	left: 0;
}

.side-text {
	font-size: 18px;
	margin: 24px 4px;
}

</style>
