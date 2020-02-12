<template>
	<div class="home">
		<Banner />
		<category-button></category-button>
		<filter-sort></filter-sort>
		<router-view></router-view>
	</div>
</template>

<script>
import CategoryButton from '../components/Home/CategoryButton.vue';
import Banner from '../components/Home/Banner.vue';
import FilterSort from '../components/Home/FilterSort.vue';

export default {
	components: {
		Banner,
		CategoryButton,
		FilterSort,
	},
};
</script>

<style lang="scss" scoped></style>
