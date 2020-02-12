<template>
	<div class="title">
		<div class="title-text">속지플랫폼</div>
		<div class="title-box">Beta</div>
	</div>
</template>

<script>
export default {
	name: 'HeaderTitle',
};
</script>

<style lang="scss" scoped>
.title {
	margin: 0 auto;
	padding-top: 24px;
	display: flex;
	justify-content: center;
}
.title-text {
	font-size: 1.5rem;
	margin-right: 0.5rem;
}
.title-box {
	width: 3rem;
	height: 1.3rem;
	border-radius: 8px;
	font-size: 0.8rem;
	background-color: $primary-color;
	color: $color-white;
	text-align: center;
	line-height: 1.4rem;
}
</style>
