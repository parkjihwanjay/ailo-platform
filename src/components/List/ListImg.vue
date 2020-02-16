<template>
	<div class="item-img">
		<img :src="imgSrc" alt="아일로 표지" />
		<!-- 크롤링해서 가져오는 img src 뒤에 300 붙이기! -->
	</div>
</template>

<script>
export default {
	name: 'ListImg',
	props: ['imgSrc'],
};
</script>

<style lang="scss" scoped>
.item-img {
	width: 39%;
	height: 35vw;
	max-width: 300px;
	max-height: 300px;
}

.item-img img {
	width: 100%;
	height: 100%;
}
</style>
