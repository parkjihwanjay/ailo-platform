<template>
	<SortButton />
	<FilterButton />

	<!-- <filter-button></filter-button>
		<sort-button></sort-button> -->
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

<style lang="scss" scoped></style>
