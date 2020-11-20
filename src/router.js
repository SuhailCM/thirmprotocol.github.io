import Vue from 'vue';
import Router from 'vue-router';

import index from './x/index.vue';
import about from './x/about.vue';
import contact from './x/contact.vue';
import earn from './x/earn.vue';
import ttoken from './x/ttoken.vue';
import thirm from './x/thirm.vue';
import faq from './x/faq.vue';
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
			path: '/governance',
			name: 'governance',
			component: governance,
		},
		{
			path: '/thirm',
			name: 'thirm',
			component: thirm,
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
