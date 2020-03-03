<template>
	<!-- <a target="_blank" :href="item.productLink"> -->
	<div @click="$emit('click', item._id)" class="item-box">
		<list-img :imgSrc="item.imgSrc"></list-img>
		<list-content :item="item"></list-content>
	</div>
	<!-- </a> -->
</template>

<script>
import ListImg from './ListImg.vue';
import ListContent from './ListContent.vue';

export default {
	name: 'ListItem',
	props: {
		item: {
			type: Object,
		},
	},
	components: {
		ListImg,
		ListContent,
	},
	methods: {
		click() {
			this.$emit('click', this.item);
			// window.location.href = this.item.productLink;
			// 조회수 증가하는 백 요청 추가
			// /프로덕트/views/:id
			// try {
			// 	await axios.get(`/products/sticker/views/${this.item._id}`);
			// } catch (e) {
			// 	console.log(e);
			// }
			// console.log(this.item._id);
			// console.log(this.item.productLink);
			// console.log(this.item);
		},
	},
};
</script>

<style lang="scss" scoped>
// .item-box {
// 	width: 100%;
// 	margin: 0 auto;
// 	margin-bottom: 2rem;
// 	display: flex;
// 	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
// }

.item-box {
	width: 100%;
	margin-bottom: 5rem;
	display: flex;
	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
	border-radius: 5px;
	cursor: pointer;
}

// @media screen and (max-width: 600px) {
// 	.item-box {
// 		width: 320px;
// 		margin: 0 auto;
// 		margin-bottom: 5rem;
// 		display: flex;
// 		box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
// 		border-radius: 5px;
// 	}
// }

// @media screen and (min-width: 600px) {
// 	.item-box {
// 		width: 580px;
// 		margin: 0 auto;
// 		margin-bottom: 5rem;
// 		display: flex;
// 		box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
// 		border-radius: 5px;
// 	}
// }

a {
	color: black;
	text-decoration: none;
	cursor: pointer;
}
</style>
