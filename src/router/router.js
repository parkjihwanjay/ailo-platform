import Home from '../views/Home.vue';
import Intro from '../views/Intro.vue';
// import List from '../views/List.vue';
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/intro',
		name: 'Intro',
		component: Intro,
	},
	{
		path: '/feedback',
		name: 'Feedback',
		component: Home,
	},
];

export default routes;
