import Vue from 'vue';
import Router from 'vue-router';

import index from './x/index.vue';
import about from './x/about.vue';
import whitepaper from './x/whitepaper.vue';
import contact from './x/contact.vue';
import earn from './x/earn.vue';

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
			path: '/about',
			name: 'about',
			component: about,
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
		{
			path: '/earn',
			name: 'earn',
			component: earn,
		},
	],
});
