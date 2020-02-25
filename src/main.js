import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'normalize.css/normalize.css';

import vSelect from 'vue-select';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilter, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Vuelidate from 'vuelidate';
import VueAnalytics from 'vue-analytics';

import axios from 'axios';

const DEPLOY_IP = 'http://13.125.207.132';
const LOCAL_IP = 'http://localhost:3000';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

axios.defaults.baseURL = LOCAL_IP;

library.add(faFilter);
library.add(faTimes);

Vue.use(Vuelidate);

const isProd = process.env.NODE_ENV === 'production';

Vue.use(VueAnalytics, {
	id: process.env.VUE_APP_GOOGLE_ANALYTICS,
	router,
	debug: {
		enabled: !isProd,
		sendHitTask: isProd,
	},
});

Vue.component('v-select', vSelect);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
