import Vue from 'vue';
import Router from 'vue-router';
import about from './x/about.vue';
import contact from './x/contact.vue';
import faq from './x/faq.vue';
import governance from './x/governance.vue';
import index from './x/index.vue';
import roadmap from './x/roadmap.vue';


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
			path: '/roadmap',
			name: 'roadmap',
			component: roadmap,
		},
		{
			path: '/faq',
			name: 'faq',
			component: faq,
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
		}
	],
});
