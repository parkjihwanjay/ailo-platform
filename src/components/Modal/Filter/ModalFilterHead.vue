<template>
	<div class="header">
		<div class="header-title">
			필터
		</div>
		<!-- <font-awesome-icon class="header-button" :icon="['fas', 'times']" /> -->
	</div>
</template>

<script>
export default {
	name: 'ModalFilterHead',
};
</script>

<style scoped lang="scss">
.header {
	height: 3rem;
	font-size: 1.2rem;
	text-align: center;
	display: flex;
	align-items: center;
	border-bottom: 1px solid rgb(0, 0, 0, 0.3);
}
.header-title {
	margin: 0 auto;
}
.header-button {
	font-size: 1rem;
}
</style>
