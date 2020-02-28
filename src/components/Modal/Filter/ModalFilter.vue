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
						title: '하이퍼링크',
						contents: ['있음', '없음'],
					},
					{
						title: '방향',
						contents: ['전체', '가로', '세로'],
					},
					// 날짜형일 경우
					{
						title: '분량',
						meaning: 'amount',
						contents: ['6개월', '1년', '2년'],
					},
				];
			} else if (this.category === '노트') {
				return [
					{
						title: '용도',
						meaning: 'usage',
						contents: ['전체', '스터디', '가계부', '리뷰', '라이프스타일', '업무', '필기', '표지'],
					},
					{
						title: '하이퍼링크',
						meaning: 'hyperLink',
						contents: ['전체', '있음', '없음'],
					},
					{
						title: '방향',
						meaning: 'direction',
						contents: ['전체', '가로', '세로'],
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
		filterClicked(meaning, content) {
			// 전체를 눌렀을 때 데이터를 안 보내기 위해
			if (content === '전체') return delete this.filters[meaning];
			// hyperlink는 boolean 타입
			if (meaning === 'hyperlink') {
				this.filters[meaning] = content;
			} else {
				// 다른 값들은 배열
				if (!this.filters[meaning]) {
					// 방향의 경우 default로 '가로세로' 값이 있음
					this.filters[meaning] = meaning === 'direction' ? ['가로세로'] : [];
				}
				// toggle하는 로직
				const index = this.filters[meaning].indexOf(content);
				index > -1 ? this.filters[meaning].splice(index, 1) : this.filters[meaning].push(content);
			}
		},
		finishFilter() {
			EventBus.$emit('finishFilter', this.filters);
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
