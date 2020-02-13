<template>
	<div @click="$emit('openFilter')" class="filter-box">
		<div>
			<font-awesome-icon class="filter-icon" :icon="['fas', 'filter']" />
			필터
		</div>
	</div>
</template>

<script>
export default {
	name: 'FilterButton',
};
</script>

<style lang="scss" scoped>
.filter-box {
	width: 35%;
	height: 100%;
	opacity: 0.5;
	border-radius: 3px;
	background-color: $primary-color;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}
.filter-icon {
	margin-right: 0.8rem;
}
</style>
