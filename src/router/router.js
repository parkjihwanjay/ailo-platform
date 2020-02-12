import Home from '../views/Home.vue';
import List from '../views/List.vue';
const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
		children: [
			{
				path: '/list',
				name: 'List',
				component: List,
			},
		],
	},
];

export default routes;
