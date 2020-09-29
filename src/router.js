import Vue from 'vue';
import Router from 'vue-router';

import index from './x/index.vue';
import about from './x/about.vue';
import whitepaper from './x/whitepaper.vue';
import contact from './x/contact.vue';
import earn from './x/earn.vue';
import ttoken from './x/ttoken.vue';
import thrm from './x/thrm.vue';
import faq from './x/faq.vue';
import leader from './x/leader.vue';
import governance from './x/governance.vue';

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
			path: '/leader',
			name: 'leader',
			component: leader,
		},
		{
			path: '/governance',
			name: 'governance',
			component: governance,
		},
		{
			path: '/thrm',
			name: 'thrm',
			component: thrm,
		},
		{
			path: '/faq',
			name: 'faq',
			component: faq,
		},
		{
			path: '/ttoken',
			name: 'ttoken',
			component: ttoken,
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
