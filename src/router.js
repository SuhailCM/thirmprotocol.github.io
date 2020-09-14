import Vue from 'vue';
import Router from 'vue-router';

import index from './x/index.vue';
import team from './x/team.vue';
import whitepaper from './x/whitepaper.vue';
import contact from './x/contact.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'index',
			component: index,
		},
		{
			path: '/team',
			name: 'team',
			component: team,
		},
		{
			path: '/whitepaper',
			name: 'whitepaper',
			component: whitepaper,
		},
		{
			path: '/contact',
			name: 'contact',
			component: contact,
		},
	],
});
