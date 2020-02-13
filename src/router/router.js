import Home from '../views/Home.vue';
import List from '../views/List.vue';
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		children: [
			{
				path: '/list',
				name: 'List',
				component: List,
			},
		],
	},
	{
		path: '/intro',
		name: 'Intro',
		component: Home,
	},
];

export default routes;
