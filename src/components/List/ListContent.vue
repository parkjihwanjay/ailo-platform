<template>
	<div class="item-content-box">
		<div class="item-content">
			<!-- <a target="_blank" :href="list.productLink"> -->
			<h2>{{ list.title }}</h2>
			<!-- </a> -->
			<!-- <a target="_blank" :href="list.companyLink"> -->
			<h4>{{ list.company }} ></h4>
			<!-- </a> -->
			<div class="item-content-tag-box">
				<list-tag v-for="tag in list.tags" :tag="tag"></list-tag>
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
		list: {
			type: Object,
		},
	},
	computed: {
		priceString() {
			return this.list.price.toLocaleString('en');
		},
	},
};
</script>

<style lang="scss" scoped>
.item-content-box {
	width: 61%;
}

.item-content {
	width: 90%;
	margin-left: 1rem;
	height: 50px;
}

.item-content h2 {
	font-size: 1rem;
	margin: 0;
	margin-top: 1.3rem;
}

.item-content h4 {
	font-size: 0.9rem;
	margin: 0;
	margin-top: 1rem;
}

.item-content a {
	color: black;
	text-decoration: none;
	cursor: pointer;
}

.item-content-tag-box {
	width: 60%;
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
