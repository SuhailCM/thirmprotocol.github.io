<template>
	<div>
		<section class="hero is-medium">
			<div class="hero-body">
				<div class="container">
					<div class="columns is-vcentered">
						<div class="column">
							<lottie-player src="https://thirm.com/animations/contact.json" background="transparent" speed="1" style="width: 100%; height: 100%" loop autoplay></lottie-player>
						</div>

						<div class="column is-offset-1">
							<div class="title">
								<strong>CONTACT US</strong>
							</div>
							<hr />
							<article class="message is-dark">
								<div class="message-body">General : contact@thirm.com</div>
							</article>
							<article class="message is-dark">
								<div class="message-body">Developer : developer@thirm.com</div>
							</article>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style>
.title-text {
	font-size: 24px;
	position: relative;
	padding: 16px 0;
	margin-bottom: 36px;
	font-family: 'Poppins', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

.title-text::after {
	content: '';
	position: absolute;
	width: 40px;
	height: 5px;
	background-color: #3742fa;
	bottom: 0;
	left: 0;
}
</style>
