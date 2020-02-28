<template>
	<div class="list-box">
		<list-item @click="click" v-for="item in list" :item="item"></list-item>
	</div>
</template>

<script>
import axios from 'axios';
import ListItem from '../components/List/ListItem.vue';
export default {
	name: 'ListBox',
	props: {
		list: {
			type: Array,
		},
		url: {
			type: String,
		},
	},
	components: {
		ListItem,
	},
	methods: {
		async click(id) {
			try {
				console.log(id);
				// await axios.delete(`/products/sticker/${id}`);
				// await axios.get(`${this.url}/views/${id}`);
			} catch (e) {
				console.log(e);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.list-box {
	width: 320px;
	margin: 0 auto;
	margin-top: 5rem;
}
@media screen and (min-width: 600px) {
	.list-box {
		width: 580px;
	}
}
</style>
