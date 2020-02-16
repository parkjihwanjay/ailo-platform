<template>
	<div class="item-content-box">
		<div class="item-content">
			<h2>2020 상반기 플래너</h2>
			<h4>아일로 ></h4>
			<div class="item-content-tag-box">
				<list-tag v-for="tag in tags" :tag="tag"></list-tag>
			</div>
			<div class="item-price">{{ priceString }}원</div>
		</div>
	</div>
</template>

<script>
import ListTag from './ListTag.vue';

export default {
	name: 'ListContent',
	components: {
		ListTag,
	},
	props: {
		tags: {
			type: Array,
		},
		price: {
			type: Number,
		},
	},
	computed: {
		priceString() {
			return this.price.toLocaleString('en');
		},
	},
};
</script>

<style lang="scss" scoped>
.item-content-box {
	width: 61%;
}

.item-content {
	width: 76%;
	margin-left: 2rem;
	height: 50px;
}

.item-content h2 {
	font-size: 1.3rem;
	margin: 0;
	margin-top: 1.3rem;
}

.item-content h4 {
	font-size: 0.9rem;
	margin: 0;
	margin-top: 1.4rem;
}

.item-content-tag-box {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 1rem;
}

.item-price {
	font-size: 1.3rem;
	// margin-bottom: 15px;
	font-weight: bold;
	position: relative;
	top: 2rem;
}
</style>
