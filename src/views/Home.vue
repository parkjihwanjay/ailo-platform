<template>
	<div class="home">
		<Banner />
		<category-button
			@changeCate="changeCate"
			:category="category"
			:cateList="cateList"
		></category-button>
		<filter-sort></filter-sort>
		<!-- <router-view></router-view> -->
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
	data() {
		return {
			cateList: ['다이어리', '노트', '스티커'],
			category: '다이어리',
			sort: '',
			filter: '',
		};
	},
	created() {
		// 데이터 불러오는 로직
	},
	methods: {
		changeCate(category) {
			this.category = category;
		},
	},
};
</script>

<style lang="scss" scoped></style>
