<template>
	<div id="app">
		<div class="bg"></div>

		<template>
			<b-navbar :fixed-top="true" class="navbar-wrapper" wrapper-class="container">
				<template slot="brand">
					<b-navbar-item class="logo" tag="router-link" :to="{ path: '/' }">

					<img src="https://avatars0.githubusercontent.com/u/67930090?s=200&v=4" />
					</b-navbar-item>
				</template>

				<template slot="start">
					<b-navbar-item tag="router-link" :to="{ path: '/faq' }">FAQ</b-navbar-item>
					<b-navbar-item tag="router-link" :to="{ path: '/about' }">ABOUT</b-navbar-item>
					<b-navbar-item tag="router-link" :to="{ path: '/contact' }">CONTACT</b-navbar-item>
					<b-navbar-item tag="router-link" :to="{ path: '/governance' }">GOVERNANCE</b-navbar-item>
				</template>

				<template slot="end">
					<b-navbar-item target="_blank" href="https://dapp.thirm.com/">
						<b-button>APP</b-button>
					</b-navbar-item>
					<b-navbar-item target="_blank" href="https://docs.thirm.com/">
						<b-button>DOCS</b-button>
					</b-navbar-item>
					<b-navbar-item target="_blank" href="https://uniswap.info/token/0xb526fd41360c98929006f3bdcbd16d55de4b0069">
						<b-button>UNISWAP</b-button>
					</b-navbar-item>
				</template>
			</b-navbar>
		</template>

		<router-view />

		<section class="hero is-medium">
			<div class="hero-body">
				<div class="container">
					<div class="footer-text subtitle">Copyright © 2020 THIRM SOLUTIONS</div>
				</div>
				<div class="container">
							<div class="social-icons">
										<a class="social-icon-item" target="_blank" href="https://www.linkedin.com/company/thirm/?viewAsMember=true">
											<span class="has-text-dark">
												<i class="fab fa-linkedin fa-3x"></i>
											</span>
										</a>
										<a class="social-icon-item" target="_blank" href="https://medium.com/thirmprotocol">
											<span class="has-text-dark">
												<i class="fab fa-medium fa-3x"></i>
											</span>
										</a>
										<a class="social-icon-item" target="_blank" href="https://github.com/thirmprotocol">
											<span class="has-text-dark">
												<i class="fab fa-github fa-3x"></i>
											</span>
										</a>
										<a class="social-icon-item" target="_blank" href="https://twitter.com/thirmprotocol">
											<span class="has-text-dark">
												<i class="fab fa-twitter fa-3x"></i>
											</span>
										</a>
										<a class="social-icon-item" target="_blank" href="https://t.me/thirm">
											<span class="has-text-dark">
												<i class="fab fa-telegram fa-3x"></i>
											</span>
										</a>
										<a class="social-icon-item" target="_blank" v-bind:href="discord">
											<span class="has-text-dark">
												<i class="fab fa-discord fa-3x"></i>
											</span>
										</a>
							</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
.bg {
	animation: slide 20s ease-in-out infinite alternate;
	background-image: linear-gradient(-60deg, #d8e2f78e 50%, rgb(255, 255, 255) 50%);
	bottom: 0;
	left: -50%;
	opacity: 0.5;
	position: fixed;
	right: -50%;
	top: 0;
	z-index: -1;
}

@keyframes slide {
	0% {
		transform: translateX(-25%);
	}
	100% {
		transform: translateX(25%);
	}
}

.navbar-wrapper {
	border-bottom: 1px solid #e3e3e3;
	height: 80px;
	font-size: 18px;
	font-weight: 500;
	padding: 12px 0;
}

.navbar-wrapper .logo img {
	height: 80px;
}

.navbar-wrapper .navbar-item:hover,  .navbar-wrapper .navbar-item:focus{
	background-color: transparent;
}

.navbar-wrapper .navbar-item.router-link-active {
	color: #3742fa;
}

.social-icons {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}

.social-icons .social-icon-item {
	width: 80px;
}

.footer-text {
	text-align: center;
	margin: 24px 0;
}
</style>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			discord: 'https://discord.com/widget?id=712795894982115380&theme=dark',
		};
	},
	mounted() {
		try {
			axios({
				method: 'GET',
				url: 'https://discord.com/api/guilds/712795894982115380/widget.json',
			}).then((responsex) => {
				this.discord = responsex.data.instant_invite || 'https://discord.com/widget?id=712795894982115380&theme=dark';
			});
		} catch (error) {
			console.log('no discord');
		}
	},
};
</script>
