import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'normalize.css/normalize.css';

import vSelect from 'vue-select';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilter, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vuelidate from 'vuelidate';

library.add(faFilter);
library.add(faTimes);

Vue.use(Vuelidate);

Vue.component('v-select', vSelect);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
