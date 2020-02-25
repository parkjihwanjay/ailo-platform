<template>
	<div class="item-img">
		<img :src="src" alt="아일로 표지" />
		<!-- 크롤링해서 가져오는 img src 뒤에 300 붙이기! -->
	</div>
</template>

<script>
export default {
	name: 'ListImg',
	props: ['imgSrc'],
	computed: {
		src() {
			return `${this.imgSrc}?type=f300`;
		},
	},
};
</script>

<style lang="scss" scoped>
.item-img {
	width: 150px;
	height: 150px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
}

@media screen and (min-width: 600px) {
	.item-img {
		width: 300px;
		height: 300px;
	}
}

.item-img img {
	width: 100%;
	height: 100%;
	border-radius: inherit;
}
</style>
