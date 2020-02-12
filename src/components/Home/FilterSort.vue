<template>
	<div class="box">
		<SortButton />
		<FilterButton />

		<!-- <filter-button></filter-button>
		<sort-button></sort-button> -->
	</div>
</template>

<script>
import FilterButton from './FilterButton.vue';
import SortButton from './SortButton.vue';

export default {
	name: 'FilterSort',
	components: {
		FilterButton,
		SortButton,
	},
};
</script>

<style lang="scss" scoped>
.box {
	width: 90%;
	height: 1.9rem;
	margin: 0 auto;
	margin-top: 20px;
	display: flex;
}

// .fal fa-filter {
// 	width: 8.5px;
// }
// .style-chooser .vs__search::placeholder,
// .style-chooser .vs__dropdown-toggle,
// .style-chooser .vs__dropdown-menu {
// 	width: 100%;
// 	background: #dfe5fb;
// 	border: none;
// 	color: #394066;
// 	text-transform: lowercase;
// 	font-variant: small-caps;
// }

// .style-chooser .vs__clear,
// .style-chooser .vs__open-indicator {
// 	width: 100%;
// 	fill: #394066;
// }
</style>
