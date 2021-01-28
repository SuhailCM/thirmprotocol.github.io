<template>
	<div>
		<section class="container">
			<div class="roadmap">
				<div class="timeline columns is-multiline is-desktop">
					<div class="column is-one-third" v-for="(roadmap, index) of roadmaps" :key="index">
						<i :class="roadmap.status === 'done' ? 'fas fa-check done-status' : roadmap.status === 'current' ? 'fas current-status' : 'fas next-status'"></i>

						<div :class="roadmap.status === 'current' ? 'card timeline-boxed' : 'timeline-boxed'">
							<div class="timeline-subtitle">
								{{ roadmap.date }}
							</div>
							<div class="timeline-title">
								{{ roadmap.title }}
							</div>
							<div class="timeline-desc">
								{{ roadmap.description }}
							</div>
							<div :class="roadmap.status === 'current' ? 'timeline-current-info' : 'timeline-hide'">
								Current Milestone
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style>
.roadmap {
	margin: 80px auto;
}

.roadmap .timeline {
	padding: 16px;
	margin: 36px;
	text-align: center;
}

.roadmap .timeline i {
	width: 36px;
	height: 36px;
	background: #f1f1f1;
	padding: 9px;
	border-radius: 50%;
	margin-bottom: 8px;
	margin-top: 16px;
	font-size: 18px;
}

.roadmap .timeline .timeline-boxed {
	padding: 16px 8px;
	margin-top: 8px;
}

.roadmap .timeline i.done-status {
	background: #27ae60;
	color: #ffffff;
}

.roadmap .timeline .timeline-hide {
	display: none;
}

.roadmap .timeline .timeline-current-info {
	background: #fc4a1a;
	background: -webkit-linear-gradient(to right, #f7b733, #fc4a1a);
	background: linear-gradient(to right, #f7b733, #fc4a1a);
	margin: 8px -16px -16px -16px;
	color: #fff;
	padding: 8px 4px;
}

@keyframes ripple {
	0% {
		transform: scale(1);
		opacity: 0;
	}
	10% {
		opacity: 0.5;
	}
	60% {
		opacity: 0;
	}
	100% {
		transform: scale(3);
		opacity: 0;
	}
}

.roadmap .timeline i.current-status {
	background-image: linear-gradient(to right, #f7b733, #fc4a1a);
	position: relative;
}

.roadmap .timeline i.current-status:before {
	width: 20px;
	height: 20px;
	background: #ff4757;
	border: 2px solid #ffffff;
	content: '';
	top: 0;
	left: 0;
	margin: 8px;
	z-index: 99999;
	position: absolute;
	border-radius: 50%;
}

.roadmap .timeline i.current-status:after {
	-webkit-animation: ripple 2s linear infinite;
	animation: ripple 2s linear infinite;
	position: absolute;
	content: '';
	top: 0;
	left: 0;
	width: 36px;
	height: 36px;
	background-image: linear-gradient(109.8deg, rgba(255, 189, 55, 1) 5.6%, rgba(250, 111, 152, 1) 91.5%);
	border-radius: 50%;
}

.roadmap .timeline i.next-status:before {
	width: 16px;
	height: 16px;
	background: #fff;
	content: '';
	top: 0;
	left: 0;
	margin: 10px;
	z-index: 99999;
	position: absolute;
	border-radius: 50%;
}

.roadmap .timeline i.next-status {
	background: #1abc9c;
	position: relative;
}

.roadmap .timeline .timeline-subtitle {
	font-size: 12px;
	margin-bottom: 8px;
	color: #888;
	background: #f1f1f1;
	display: inline-block;
	padding: 4px 8px;
}

.roadmap .timeline .timeline-title {
	font-size: 20px;
	margin-bottom: 8px;
	font-weight: 600;
}

.roadmap .timeline .timeline-desc {
	margin-bottom: 16px;
	font-style: italic;
}
</style>

<script>
export default {
	data() {
		return {
			roadmaps: [
				{
					title: 'Protocol Development Start',
					date: 'February 15, 2020',
					description: 'Started the development of thirm protocol.',
					status: 'done',
				},
				{
					title: 'Token Creation',
					date: 'May 17, 2020',
					description: 'Created the THIRM token.',
					status: 'done',
				},
				{
					title: 'Internal Research & Testing',
					date: 'August 28, 2020',
					description: 'Released the Alpha version of the DAPP.',
					status: 'done',
				},
				{
					title: 'Stateofthedapps Listing',
					date: 'September 6, 2020',
					description: 'Listed THIRM protocol on "stateofthedapps".',
					status: 'done',
				},
				{
					title: 'Realease BETA',
					date: 'September 7, 2020',
					description: 'Getting users to test the DAPP & Protocol.',
					status: 'done',
				},
				{
					title: 'Uniswap Listing',
					date: 'September 27, 2020',
					description: 'Listed THIRM protocol on "uniswap".',
					status: 'done',
				},
				{
					title: 'THIRM Defaltion Started',
					date: 'September 27, 2020',
					description: 'Enbaled THIRM Defaltion, DAPP now charges THIRM as fees and burns them.',
					status: 'done',
				},
				{
					title: 'Test Nano',
					date: 'January 15, 2021',
					description: 'Testing Nano with the experts.',
					status: 'current',
				},
				{
					title: 'Test Bitcoin',
					date: 'Coming soon.',
					description: 'Coming soon.',
					status: 'next',
				},
				{
					title: 'Test Monero',
					date: 'Coming soon.',
					description: 'Coming soon.',
					status: 'next',
				},
				{
					title: 'Code AUDIT',
					date: 'Coming soon.',
					description: 'Coming soon.',
					status: 'next',
				},
				{
					title: 'List on All DEX & Protocols',
					date: 'Coming soon.',
					description: 'Coming soon.',
					status: 'next',
				},
			],
		};
	},
};
</script>
