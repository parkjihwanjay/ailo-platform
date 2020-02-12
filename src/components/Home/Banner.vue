<template>
	<div class="banner">
		<carousel
			:autoplay="true"
			:perPage="1"
			:paginationPadding="5"
			:Number="4000"
			:loop="true"
			paginationActiveColor="#8c58a5"
		>
			<slide>
				<img src="../../assets/banner/banner1.png" alt="" />
			</slide>
			<slide>
				<img src="../../assets/banner/banner2.png" alt="" />
			</slide>
			<slide>
				<img src="../../assets/banner/banner3.png" alt="" />
			</slide>
			<slide>
				<img src="../../assets/banner/banner4.png" alt="" />
			</slide>
		</carousel>
	</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
	name: 'Banner',
	components: {
		Carousel,
		Slide,
	},
};
</script>

<style lang="scss" scoped>
.banner {
	margin-top: 16px;
	width: 100%;
	height: 63vw;
	max-height: 550px;
}
.full {
	width: 100%;
	height: 100%;
}
img {
	width: 100%;
	height: 100%;
}
</style>
