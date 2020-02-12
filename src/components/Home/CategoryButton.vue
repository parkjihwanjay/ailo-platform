<template>
	<div class="buttons">
		<div class="button first">다이어리</div>
		<div class="button">노트</div>
		<div class="button">스티커</div>
	</div>
</template>

<script>
export default {
	name: 'CategoryButton',
};
</script>

<style lang="scss" scoped>
.buttons {
	width: 90%;
	height: 2.2rem;
	margin: 0 auto;
	margin-top: 16px;
	display: flex;
	justify-content: space-evenly;
}
.button {
	width: 33.3%;
	font-size: 1.3rem;
	text-align: center;
	padding-top: 0.4rem;
	padding-bottom: 0.4rem;
	border: 1px solid $primary-color;
	border-bottom: 0;
	// box-shadow: 0.7px 0 0 0 #000000, 0.7px 0 0 0 #000000 inset, 0 0.7px 0 0 #000000 inset;
}
</style>
