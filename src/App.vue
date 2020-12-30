<template>
	<div id="app">
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
				</template>
			</b-navbar>
		</template>

		<router-view />

		<footer class="footer">
			<div class="content has-text-centered">
				<p>Copyright © 2020 | <strong>THIRM SOLUTIONS</strong></p>
			</div>
		</footer>
	</div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&family=Poppins:wght@500&display=swap');

#app {
	margin: 0;
	font-family: 'Noto Sans', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
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
