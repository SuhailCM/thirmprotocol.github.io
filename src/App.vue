<template>
	<div id="app">
		<template>
			<b-navbar :fixed-top="true" wrapper-class="container">
				<template slot="brand">
					<b-navbar-item class="logo" tag="router-link" :to="{ path: '/' }"><strong>THIRM</strong></b-navbar-item>
				</template>

				<template slot="start">
					<b-navbar-item tag="router-link" :to="{ path: '/faq' }"><strong>FAQ</strong></b-navbar-item>
					<b-navbar-item tag="router-link" :to="{ path: '/roadmap' }"><strong>ROADMAP</strong></b-navbar-item>
					<b-navbar-item tag="router-link" :to="{ path: '/about' }"><strong>ABOUT</strong></b-navbar-item>
					<b-navbar-item tag="router-link" :to="{ path: '/contact' }"><strong>CONTACT</strong></b-navbar-item>
					<b-navbar-item tag="router-link" :to="{ path: '/governance' }"><strong>GOVERNANCE</strong></b-navbar-item>
				</template>

				<template slot="end">
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
