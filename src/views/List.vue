<template>
	<div class="list-box">
		<h4 v-show="!list.length">{{ comment }}</h4>
		<list-item
			@click="click(item)"
			v-for="item in list"
			:item="item"
			:filters="filters"
		></list-item>
	</div>
</template>

<script>
import axios from 'axios';
import ListItem from '../components/List/ListItem.vue';
export default {
	name: 'ListBox',
	data() {
		return {
			// comment: '상품을 조회중입니다.',
		};
	},
	props: {
		list: {
			type: Array,
		},
		url: {
			type: String,
		},
		filters: {
			type: Object,
		},
		comment: {
			type: String,
		},
	},
	components: {
		ListItem,
	},
	methods: {
		async click(item) {
			try {
				// console.log(item);
				window.location.href = item.productLink;
				await axios.get(`${this.url}/views/${item._id}`);
				// await axios.delete(`/products/sticker/${id}`);
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
