<template>
	<div class="item-content-box">
		<div class="item-content">
			<!-- <a target="_blank" :href="list.productLink"> -->
			<h1>{{ item.title }}</h1>
			<!-- </a> -->
			<!-- <a target="_blank" :href="list.companyLink"> -->
			<h4 class="company">{{ item.company }} ></h4>
			<!-- </a> -->
			<div class="item-content-tag-box">
				<list-tag v-show="item.hyperLink" :tag="item.direction"></list-tag>
				<list-tag v-show="item.hyperLink" :tag="item.hyperLink"></list-tag>
				<list-tag :tag="item.usage"></list-tag>
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
		item: {
			type: Object,
		},
		filters: {
			type: Object,
		},
	},
	computed: {
		priceString() {
			return this.item.price.toLocaleString('en');
		},
	},
};
</script>

<style lang="scss" scoped>
.item-content-box {
	width: 170px;
}
.item-content h1 {
	width: 153px;
	height: 48px;
	font-size: 10px;
	line-height: 1.7;
	margin: 0;
	margin-top: 5px;
	// font-weight: 900;
	overflow: hidden;
}
.item-content h4 {
	font-size: 8px;
	margin: 0;
	margin-top: 10px;
}
.item-price {
	font-size: 13px;
	// font-weight: 900;
	margin-top: 22px;
}
.item-content-tag-box {
	display: flex;
	// justify-content: flex-start;
	flex-wrap: wrap;
	margin-top: 20px;
	width: 100%;
}

@media screen and (min-width: 600px) {
	.item-content-box {
		width: 280px;
	}
	.item-content h1 {
		width: 252px;
		height: 115px;
		font-size: 15px;
		line-height: 1.7;
		margin-top: 16px;
	}
	.item-content h4 {
		font-size: 12px;
		margin-top: 0px;
	}
	.item-price {
		font-size: 20px;
		margin-top: 54px;
	}
	.item-content-tag-box {
		margin-top: 53px;
	}
}

// .item-content-box {
// 	width: 61%;
// }

.item-content {
	width: 90%;
	margin-left: 1rem;
	height: 50px;
}

// .item-content h1 {
// 	font-size: 1.4rem;
// 	line-height: 1.7;
// 	margin: 0;
// 	margin-top: 1.3rem;
// 	font-weight: 900;
// }

// .item-content h4 {
// 	font-size: 0.9rem;
// 	margin: 0;
// 	margin-top: 1rem;
// }

.item-content a {
	color: black;
	text-decoration: none;
	cursor: pointer;
}

// .item-content-tag-box {
// 	width: 80%;
// 	max-width: 160px;
// 	min-width: 111px;
// 	display: flex;
// 	justify-content: space-between;
// 	flex-wrap: wrap;
// 	margin-top: 1rem;
// }

// .item-price {
// 	font-size: 1.3rem;
// 	margin-top: 1.3rem;
// 	font-weight: bold;
// }
</style>
