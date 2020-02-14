<template>
	<div class="home">
		<Banner />
		<category-button @changeCate="changeCate" :cateList="cateList"></category-button>
		<div class="box">
			<sort-button :sortList="sortList" :sort="sort" @sortSelected="changeSort"></sort-button>
			<filter-button @openFilter="filterOn = true"></filter-button>
		</div>
		<!-- <router-view></router-view> -->
		<!-- <Modal @closeFilter="filterOn = false" v-show="filterOn" /> -->
	</div>
</template>

<script>
import CategoryButton from '../components/Home/CategoryButton.vue';
import Banner from '../components/Home/Banner.vue';

import FilterButton from '../components/Home/FilterButton.vue';
import SortButton from '../components/Home/SortButton.vue';

import Modal from '../components/Modal/Modal.vue';

export default {
	components: {
		Banner,
		CategoryButton,
		FilterButton,
		SortButton,
		Modal,
	},
	data() {
		return {
			cateList: ['다이어리', '노트', '스티커'],
			category: '',
			sortList: ['인기순', '최신순', '가격 낮은 순', '가격 높은 순'],
			sort: '',
			filter: '',
			filterOn: false,
		};
	},
	created() {
		// 데이터 불러오는 로직
	},
	methods: {
		changeCate(category) {
			this.category = category;
		},
		changeSort(sort) {
			this.sort = sort;
		},
		// 데이터 불러오는 함수
	},
};
</script>

<style scoped lang="scss">
.box {
	width: 90%;
	height: 1.9rem;
	margin: 0 auto;
	margin-top: 20px;
	display: flex;
}
</style>
