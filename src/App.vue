<template>
	<div id="app">
		<template>
			<b-navbar :fixed-top="true" wrapper-class="container">
				<template slot="brand">
					<b-navbar-item class="logo" tag="router-link" :to="{ path: '/' }"><strong>THIRM</strong></b-navbar-item>
				</template>

				<template slot="start">
					<b-navbar-item tag="router-link" :to="{ path: '/about' }"><strong>ABOUT</strong></b-navbar-item>
					<b-navbar-item tag="router-link" :to="{ path: '/roadmap' }"><strong>ROADMAP</strong></b-navbar-item>
					<b-navbar-item tag="router-link" :to="{ path: '/faq' }"><strong>FAQ</strong></b-navbar-item>
				</template>

				<template slot="end" class="social-icons">
					<b-navbar-item target="_blank" href="https://medium.com/thirmprotocol">
						<i class="fab fa-medium fa-2x"></i>
					</b-navbar-item>
					<b-navbar-item target="_blank" href="https://github.com/thirmprotocol">
						<i class="fab fa-github fa-2x"></i>
					</b-navbar-item>
					<b-navbar-item target="_blank" href="https://twitter.com/thirmprotocol">
						<i class="fab fa-twitter fa-2x"></i>
					</b-navbar-item>
					<b-navbar-item target="_blank" href="https://t.me/thirm">
						<i class="fab fa-telegram fa-2x"></i>
					</b-navbar-item>
					<b-navbar-item target="_blank" href="https://discord.gg/sA8AdfF7ac">
						<i class="fab fa-discord fa-2x"></i>
					</b-navbar-item>
					<b-navbar-item target="_blank" href="https://www.linkedin.com/company/thirm/?viewAsMember=true">
						<i class="fab fa-linkedin fa-2x"></i>
					</b-navbar-item>
				</template>
			</b-navbar>
		</template>

		<router-view />

		<footer class="footer">
			<div class="content has-text-centered">
				<p>Copyright © 2021 | <strong>THIRM SOLUTIONS</strong></p>
			</div>
		</footer>
	</div>
</template>

<style scoped>
.navbar-end {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
}
.navbar-end .navbar-item {
	margin: 4px 0;
	padding: 4px 10px;
	display: inline-block;
}

@media screen and (max-width: 1023px) {
	.navbar-end .navbar-item {
		margin: 16px 0;
	}
}
.navbar-item .fab {
	font-size: 28px;
	color: #444;
}

.navbar-item .fab:hover {
	color: #191919;
}
</style>
