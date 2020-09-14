import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

import LoadScript from 'vue-plugin-load-script';
import '@lottiefiles/lottie-player';

Vue.use(Buefy);
Vue.use(LoadScript);

Vue.config.productionTip = false;

new Vue({
	router,

	render: (h) => h(App),
}).$mount('#app');
