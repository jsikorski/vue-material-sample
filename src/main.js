import 'vue-material/dist/vue-material.css';

import Vue from 'vue';
import VueMaterial from 'vue-material';
import App from './App';

import { date } from './filters';

Vue.use(VueMaterial);
Vue.filter('date', date);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<App/>',
	components: { App },
});
