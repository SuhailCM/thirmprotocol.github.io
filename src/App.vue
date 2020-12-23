<template>
	<div id="app">
		<div class="bg"></div>

		<template>
			<b-navbar :fixed-top="true" class="navbar-wrapper" wrapper-class="container">
				<template slot="brand">
					<b-navbar-item class="logo" tag="router-link" :to="{ path: '/' }">HOME</b-navbar-item>
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
					<b-navbar-item target="_blank" href="https://github.com/orgs/thirmprotocol/projects">
						<b-button>ROADMAP</b-button>
					</b-navbar-item>
				</template>
			</b-navbar>
		</template>

		<router-view />

		<section class="hero">
			<div class="hero-body">
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
						<a class="social-icon-item" target="_blank" href="https://discord.gg/sA8AdfF7ac">
							<span class="has-text-dark">
								<i class="fab fa-discord fa-3x"></i>
							</span>
						</a>
					</div>
				</div>

				<div class="container">
					<div class="footer-text subtitle">Copyright © 2020 | THIRM SOLUTIONS</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
#app {
	margin: 0;
	font-family: 'Noto Sans', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.bg {
	animation: slide 30s ease-in-out infinite alternate;
	background-image: linear-gradient(-60deg, #eaeff88e 50%, rgb(255, 255, 255) 50%);
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
	height: 70px;
	font-size: 18px;
	font-weight: 500;
	padding: 8px 0;
	background: rgba(255, 255, 255, 0.9);
	border-bottom: 1px solid #f1f1f1;
}

.navbar-wrapper .navbar-item:hover,
.navbar-wrapper .navbar-item:focus {
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

.navbar-end button {
	color: #ffffff;
	font-weight: 600;
	border: 0;
	border-radius: 6px;
	width: 110px;
	background: #686de0;
}

.navbar-end button:hover {
	background: #4834d4;
}
</style>


