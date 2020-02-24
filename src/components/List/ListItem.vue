<template>
	<a target="_blank" :href="list.productLink">
		<div class="item-box">
			<list-img :imgSrc="list.imgSrc"></list-img>
			<list-content :list="list"></list-content>
		</div>
	</a>
</template>

<script>
import ListImg from './ListImg.vue';
import ListContent from './ListContent.vue';
export default {
	name: 'ListItem',
	props: {
		list: {
			type: Object,
		},
	},
	components: {
		ListImg,
		ListContent,
	},
	methods: {
		// clickLink() {
		// 	window.location
		// 	console.log('asdf');
		// },
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

@media screen and (max-width: 600px) {
	.item-box {
		width: 320px;
		margin: 0 auto;
		margin-bottom: 5rem;
		display: flex;
		box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
		border-radius: 5px;
	}
}

@media screen and (min-width: 600px) {
	.item-box {
		width: 580px;
		margin: 0 auto;
		margin-bottom: 5rem;
		display: flex;
		box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
		border-radius: 5px;
	}
}

a {
	color: black;
	text-decoration: none;
	cursor: pointer;
}
</style>
