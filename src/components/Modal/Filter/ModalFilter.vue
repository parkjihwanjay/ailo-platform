<template>
	<div>
		<div class="modal-container filter-modal">
			<ModalFilterHead />
			<ModalFilterBody @filterClicked="filterClicked" :filterData="filterData" />
			<ModalFilterFooter @finishFilter="finishFilter" />
		</div>
	</div>
</template>

<script>
import ModalFilterHead from './ModalFilterHead.vue';
import ModalFilterBody from './ModalFilterBody.vue';
import ModalFilterFooter from './ModalFilterFooter.vue';

import { EventBus } from '@/utils/event-bus.js';

export default {
	name: 'ModalFilter',
	props: ['category'],
	components: {
		ModalFilterHead,
		ModalFilterBody,
		ModalFilterFooter,
	},
	data() {
		return {
			filters: {},
		};
	},
	computed: {
		filterData() {
			if (this.category === '다이어리') {
				return [
					{
						title: '다운로드',
						contents: ['전체', '블로그', '스토어'],
					},
					{
						title: '카테고리',
						contents: ['전체', '블로그', '스토어'],
					},
					{
						title: '다운로드',
						contents: ['전체', '블로그', '스토어'],
					},
					{
						title: '카테고리',
						contents: ['전체', '블로그', '스토어'],
					},
					{
						title: '다운로드',
						contents: ['전체', '블로그', '스토어'],
					},
					{
						title: '카테고리',
						contents: ['전체', '블로그', '스토어'],
					},
					{
						title: '다운로드',
						contents: ['전체', '블로그', '스토어'],
					},
					{
						title: '카테고리',
						contents: ['전체', '블로그', '스토어'],
					},
				];
			} else if (this.category === '노트') {
				return [
					{
						title: '다운로드',
						contents: ['전체', '블로그', '스토어'],
					},
				];
			} else {
				return [
					{
						title: '다운로드',
						contents: ['전체', '블로그', '스토어'],
					},
				];
			}
		},
	},
	methods: {
		filterClicked(title, content) {
			this.filters[title] = content;
		},
		finishFilter() {
			EventBus.$emit('finishFilter', this.filters);
			// this.$emit('finishFilter', this.filters);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/styles/modal.scss';
.filter-modal {
	width: 80%;
	max-width: 750px;
	border-radius: 10px;
}
</style>
