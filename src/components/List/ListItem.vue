<template>
	<div class="item-box">
		<list-img :imgSrc="imgSrc"></list-img>
		<list-content :tags="tags" :price="price"></list-content>
	</div>
</template>

<script>
import ListImg from './ListImg.vue';
import ListContent from './ListContent.vue';
export default {
	name: 'ListItem',
	components: {
		ListImg,
		ListContent,
	},
	data() {
		return {
			tags: ['가로형', '만년형', '묶음'],
			imgSrc: 'https://shopping-phinf.pstatic.net/main_8233777/82337772344.1.jpg?type=f300',
			price: 9600,
		};
	},
};
</script>

<style lang="scss" scoped>
.item-box {
	width: 100%;
	margin: 0 auto;
	margin-bottom: 2rem;
	display: flex;
	box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}
</style>
