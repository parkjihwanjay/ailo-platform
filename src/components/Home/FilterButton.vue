<template>
	<div class="filter-container">
		<div @click="openFilter()" class="filter-box">
			<div>
				<font-awesome-icon class="filter-icon" :icon="['fas', 'filter']" />
				필터
			</div>
		</div>
		<Modal v-show="filterOn" @closeFilter="closeFilter()" />
	</div>
</template>

<script>
import Modal from '../Modal/Modal.vue';
export default {
	name: 'FilterButton',
	components: {
		Modal,
	},
	data() {
		return {
			filterOn: false,
		};
	},
	methods: {
		openFilter() {
			this.filterOn = true;
		},
		closeFilter() {
			this.filterOn = false;
		},
	},
};
</script>

<style lang="scss" scoped>
.filter-container {
	width: 35%;
	height: 100%;
	border-radius: 3px;
}
.filter-box {
	width: 100%;
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
