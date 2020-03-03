<template>
	<div class="home">
		<Banner />
		<category-button @changeCate="changeCate" :cateList="cateList"></category-button>
		<div class="box">
			<sort-button
				:category="category"
				:sortList="sortList"
				:sort="sort"
				@sortSelected="changeSort"
			></sort-button>
			<filter-button :category="category" @openFilter="filterOn = true"></filter-button>
		</div>
		<List :list="list" :url="url" />
		<!-- <router-view></router-view> -->
		<Modal :category="category" :filterOn="filterOn" />
		<spinner-loader :loading="spinnerLoading" :color="spinnerColor"></spinner-loader>
	</div>
</template>

<script>
import CategoryButton from '../components/Home/CategoryButton.vue';
import Banner from '../components/Home/Banner.vue';

import FilterButton from '../components/Home/FilterButton.vue';
import SortButton from '../components/Home/SortButton.vue';

import Modal from '../components/Modal/Modal.vue';
import List from './List.vue';

import { EventBus } from '../utils/event-bus.js';

import SpinnerLoader from 'vue-spinner/src/ClipLoader.vue';

import axios from 'axios';
export default {
	components: {
		Banner,
		CategoryButton,
		FilterButton,
		SortButton,
		Modal,
		List,
		SpinnerLoader,
	},
	data() {
		return {
			cateList: ['다이어리', '노트', '스티커'],
			category: '다이어리',
			sortList: ['인기순', '최신순', '가격 낮은 순', '가격 높은 순'],
			url: '',
			sort: '',
			filters: {},
			filterOn: false,
			spinnerLoading: false,
			spinnerColor: '#8c58a5',
			list: [],
			tempLists: [
				{
					// 필수

					// 제목
					title: '2020 대학생 라이프 플래너 (굿노트 디지털 다이어리 속지, PDF, 하이퍼링크)',
					// 태그
					tags: ['가로형', '만년형', '묶음'],
					// 회사 이름
					company: 'AILO',
					// 회사 링크
					companyLink: 'https://smartstore.naver.com/ailodiary',
					// 제품 링크
					productLink:
						'https://cr2.shopping.naver.com/adcr.nhn?x=FPYT2ie2JuGhOsZke9st6%2F%2F%2F%2Fw%3D%3DsJVMV%2F3hs6bohO4FW3%2BWuXk9lRn443z3IUXy3W21PDQpwvB41GPRO0CprUj63sv%2FJ4OKrHkLoMv9GFOKS47YjQQyPBYs5DknU3Xr5Ht7lXgTGpXK8YGZV11DSpgfKFeXpxiyDa4GKan7n8MyvJC%2FlMJpBDT9g0vi2eUYP4Mg%2B3npT8hWzr%2Fx6yYt8Yj%2FzlqkQ8cW2dTfyj1l3xX4%2BeU8epLl0knQIj9X8tLGgzeJEdP%2BNyQ29mAZUk8gqPsND4WCqHd8gEw9lzl%2BRKFP4AUtntEbpbGYvomUslDXkgI4AksGue1Lp8wH7ODd%2FnEulYIMKOsHt4Wv0xZdxRRpdhVZakOdbr7WLmU6I%2Fb8DrFndIHnVTjer4JvioBI2%2BQmy%2B95MWglkVHCFi7X84XYq4dAzOpTG5uliMy%2FZP%2BxNtQ8BZBlZnFFyD9w%2BB8f8C1wFCJ8HFiVWkjuJrwTFbP%2B602QidM7J9bck71DE%2BYCY9gNZTUuSRPBTzhH4iP5hXvN%2FvwGwWh7AaAn2QgmyeuhCBg6OgiXkiee6hwQSz3dBh55N1W5tG1HGu6UAeyi2gOmm7PfrSu%2BCgvHwGLk42KSTKhbksQszmn4JIG7r57M9w%2Bc9REEvWUxujNvnc%2FVxp0KKVUeqxlMfHEUuF61y6u%2BZIKoQF3nabR6dsHGGjrY0tUXhEVWmLdwiZQ2%2Bxucf3e786iPXbYRXFC2UtWNWJ0Rx6%2FSUj09G9BKd%2BfEuuuI4ttz%2BthkEiaMbGh5c4VtEdOCdFBV1N1%2BSR0cQde5HUknktbgjpw%3D%3D&nv_mid=82337772344&cat_id=50003550',
					// 표지 이미지 주소
					imgSrc: 'https://shopping-phinf.pstatic.net/main_8233777/82337772344.1.jpg',
					// 등록일
					publishDate: '2020.01',
					// 가격
					price: 9600,
					// 클릭 수
					clickNum: 10,

					// 필수 x (필터 항목들)

					// 용도
					// usage: '다이어리',
					// 유형
					// type: '날짜형',
					// 하이퍼링크
					// hyperLink: true,
					// 분량
					// amount: '1년',
					// 방향
					// direction: '가로',
				},
				{
					title: '2020 대학생 라이프 플래너 (굿노트 디지털 다이어리 속지, PDF, 하이퍼링크)',
					tags: ['가로형', '만년형', '묶음'],
					company: 'AILO',
					companyLink: 'https://smartstore.naver.com/ailodiary',
					productLink:
						'https://cr2.shopping.naver.com/adcr.nhn?x=FPYT2ie2JuGhOsZke9st6%2F%2F%2F%2Fw%3D%3DsJVMV%2F3hs6bohO4FW3%2BWuXk9lRn443z3IUXy3W21PDQpwvB41GPRO0CprUj63sv%2FJ4OKrHkLoMv9GFOKS47YjQQyPBYs5DknU3Xr5Ht7lXgTGpXK8YGZV11DSpgfKFeXpxiyDa4GKan7n8MyvJC%2FlMJpBDT9g0vi2eUYP4Mg%2B3npT8hWzr%2Fx6yYt8Yj%2FzlqkQ8cW2dTfyj1l3xX4%2BeU8epLl0knQIj9X8tLGgzeJEdP%2BNyQ29mAZUk8gqPsND4WCqHd8gEw9lzl%2BRKFP4AUtntEbpbGYvomUslDXkgI4AksGue1Lp8wH7ODd%2FnEulYIMKOsHt4Wv0xZdxRRpdhVZakOdbr7WLmU6I%2Fb8DrFndIHnVTjer4JvioBI2%2BQmy%2B95MWglkVHCFi7X84XYq4dAzOpTG5uliMy%2FZP%2BxNtQ8BZBlZnFFyD9w%2BB8f8C1wFCJ8HFiVWkjuJrwTFbP%2B602QidM7J9bck71DE%2BYCY9gNZTUuSRPBTzhH4iP5hXvN%2FvwGwWh7AaAn2QgmyeuhCBg6OgiXkiee6hwQSz3dBh55N1W5tG1HGu6UAeyi2gOmm7PfrSu%2BCgvHwGLk42KSTKhbksQszmn4JIG7r57M9w%2Bc9REEvWUxujNvnc%2FVxp0KKVUeqxlMfHEUuF61y6u%2BZIKoQF3nabR6dsHGGjrY0tUXhEVWmLdwiZQ2%2Bxucf3e786iPXbYRXFC2UtWNWJ0Rx6%2FSUj09G9BKd%2BfEuuuI4ttz%2BthkEiaMbGh5c4VtEdOCdFBV1N1%2BSR0cQde5HUknktbgjpw%3D%3D&nv_mid=82337772344&cat_id=50003550',
					imgSrc: 'https://shopping-phinf.pstatic.net/main_8233777/82337772344.1.jpg',
					price: 9600,
				},
				{
					title: '2020 대학생 라이프 플래너 (굿노트 디지털 다이어리 속지, PDF, 하이퍼링크)',
					tags: ['가로형', '만년형', '묶음'],
					company: 'AILO',
					companyLink: 'https://smartstore.naver.com/ailodiary',
					productLink:
						'https://cr2.shopping.naver.com/adcr.nhn?x=FPYT2ie2JuGhOsZke9st6%2F%2F%2F%2Fw%3D%3DsJVMV%2F3hs6bohO4FW3%2BWuXk9lRn443z3IUXy3W21PDQpwvB41GPRO0CprUj63sv%2FJ4OKrHkLoMv9GFOKS47YjQQyPBYs5DknU3Xr5Ht7lXgTGpXK8YGZV11DSpgfKFeXpxiyDa4GKan7n8MyvJC%2FlMJpBDT9g0vi2eUYP4Mg%2B3npT8hWzr%2Fx6yYt8Yj%2FzlqkQ8cW2dTfyj1l3xX4%2BeU8epLl0knQIj9X8tLGgzeJEdP%2BNyQ29mAZUk8gqPsND4WCqHd8gEw9lzl%2BRKFP4AUtntEbpbGYvomUslDXkgI4AksGue1Lp8wH7ODd%2FnEulYIMKOsHt4Wv0xZdxRRpdhVZakOdbr7WLmU6I%2Fb8DrFndIHnVTjer4JvioBI2%2BQmy%2B95MWglkVHCFi7X84XYq4dAzOpTG5uliMy%2FZP%2BxNtQ8BZBlZnFFyD9w%2BB8f8C1wFCJ8HFiVWkjuJrwTFbP%2B602QidM7J9bck71DE%2BYCY9gNZTUuSRPBTzhH4iP5hXvN%2FvwGwWh7AaAn2QgmyeuhCBg6OgiXkiee6hwQSz3dBh55N1W5tG1HGu6UAeyi2gOmm7PfrSu%2BCgvHwGLk42KSTKhbksQszmn4JIG7r57M9w%2Bc9REEvWUxujNvnc%2FVxp0KKVUeqxlMfHEUuF61y6u%2BZIKoQF3nabR6dsHGGjrY0tUXhEVWmLdwiZQ2%2Bxucf3e786iPXbYRXFC2UtWNWJ0Rx6%2FSUj09G9BKd%2BfEuuuI4ttz%2BthkEiaMbGh5c4VtEdOCdFBV1N1%2BSR0cQde5HUknktbgjpw%3D%3D&nv_mid=82337772344&cat_id=50003550',
					imgSrc: 'https://shopping-phinf.pstatic.net/main_8233777/82337772344.1.jpg',
					price: 9600,
				},
				{
					title: '2020 대학생 라이프 플래너 (굿노트 디지털 다이어리 속지, PDF, 하이퍼링크)',
					tags: ['가로형', '만년형', '묶음'],
					company: 'AILO',
					companyLink: 'https://smartstore.naver.com/ailodiary',
					productLink:
						'https://cr2.shopping.naver.com/adcr.nhn?x=FPYT2ie2JuGhOsZke9st6%2F%2F%2F%2Fw%3D%3DsJVMV%2F3hs6bohO4FW3%2BWuXk9lRn443z3IUXy3W21PDQpwvB41GPRO0CprUj63sv%2FJ4OKrHkLoMv9GFOKS47YjQQyPBYs5DknU3Xr5Ht7lXgTGpXK8YGZV11DSpgfKFeXpxiyDa4GKan7n8MyvJC%2FlMJpBDT9g0vi2eUYP4Mg%2B3npT8hWzr%2Fx6yYt8Yj%2FzlqkQ8cW2dTfyj1l3xX4%2BeU8epLl0knQIj9X8tLGgzeJEdP%2BNyQ29mAZUk8gqPsND4WCqHd8gEw9lzl%2BRKFP4AUtntEbpbGYvomUslDXkgI4AksGue1Lp8wH7ODd%2FnEulYIMKOsHt4Wv0xZdxRRpdhVZakOdbr7WLmU6I%2Fb8DrFndIHnVTjer4JvioBI2%2BQmy%2B95MWglkVHCFi7X84XYq4dAzOpTG5uliMy%2FZP%2BxNtQ8BZBlZnFFyD9w%2BB8f8C1wFCJ8HFiVWkjuJrwTFbP%2B602QidM7J9bck71DE%2BYCY9gNZTUuSRPBTzhH4iP5hXvN%2FvwGwWh7AaAn2QgmyeuhCBg6OgiXkiee6hwQSz3dBh55N1W5tG1HGu6UAeyi2gOmm7PfrSu%2BCgvHwGLk42KSTKhbksQszmn4JIG7r57M9w%2Bc9REEvWUxujNvnc%2FVxp0KKVUeqxlMfHEUuF61y6u%2BZIKoQF3nabR6dsHGGjrY0tUXhEVWmLdwiZQ2%2Bxucf3e786iPXbYRXFC2UtWNWJ0Rx6%2FSUj09G9BKd%2BfEuuuI4ttz%2BthkEiaMbGh5c4VtEdOCdFBV1N1%2BSR0cQde5HUknktbgjpw%3D%3D&nv_mid=82337772344&cat_id=50003550',
					imgSrc: 'https://shopping-phinf.pstatic.net/main_8233777/82337772344.1.jpg',
					price: 9600,
				},
				{
					title: '2020 대학생 라이프 플래너 (굿노트 디지털 다이어리 속지, PDF, 하이퍼링크)',
					tags: ['가로형', '만년형', '묶음'],
					company: 'AILO',
					companyLink: 'https://smartstore.naver.com/ailodiary',
					productLink:
						'https://cr2.shopping.naver.com/adcr.nhn?x=FPYT2ie2JuGhOsZke9st6%2F%2F%2F%2Fw%3D%3DsJVMV%2F3hs6bohO4FW3%2BWuXk9lRn443z3IUXy3W21PDQpwvB41GPRO0CprUj63sv%2FJ4OKrHkLoMv9GFOKS47YjQQyPBYs5DknU3Xr5Ht7lXgTGpXK8YGZV11DSpgfKFeXpxiyDa4GKan7n8MyvJC%2FlMJpBDT9g0vi2eUYP4Mg%2B3npT8hWzr%2Fx6yYt8Yj%2FzlqkQ8cW2dTfyj1l3xX4%2BeU8epLl0knQIj9X8tLGgzeJEdP%2BNyQ29mAZUk8gqPsND4WCqHd8gEw9lzl%2BRKFP4AUtntEbpbGYvomUslDXkgI4AksGue1Lp8wH7ODd%2FnEulYIMKOsHt4Wv0xZdxRRpdhVZakOdbr7WLmU6I%2Fb8DrFndIHnVTjer4JvioBI2%2BQmy%2B95MWglkVHCFi7X84XYq4dAzOpTG5uliMy%2FZP%2BxNtQ8BZBlZnFFyD9w%2BB8f8C1wFCJ8HFiVWkjuJrwTFbP%2B602QidM7J9bck71DE%2BYCY9gNZTUuSRPBTzhH4iP5hXvN%2FvwGwWh7AaAn2QgmyeuhCBg6OgiXkiee6hwQSz3dBh55N1W5tG1HGu6UAeyi2gOmm7PfrSu%2BCgvHwGLk42KSTKhbksQszmn4JIG7r57M9w%2Bc9REEvWUxujNvnc%2FVxp0KKVUeqxlMfHEUuF61y6u%2BZIKoQF3nabR6dsHGGjrY0tUXhEVWmLdwiZQ2%2Bxucf3e786iPXbYRXFC2UtWNWJ0Rx6%2FSUj09G9BKd%2BfEuuuI4ttz%2BthkEiaMbGh5c4VtEdOCdFBV1N1%2BSR0cQde5HUknktbgjpw%3D%3D&nv_mid=82337772344&cat_id=50003550',
					imgSrc: 'https://shopping-phinf.pstatic.net/main_8233777/82337772344.1.jpg',
					price: 9600,
				},
				{
					title: '2020 대학생 라이프 플래너 (굿노트 디지털 다이어리 속지, PDF, 하이퍼링크)',
					tags: ['가로형', '만년형', '묶음'],
					company: 'AILO',
					companyLink: 'https://smartstore.naver.com/ailodiary',
					productLink:
						'https://cr2.shopping.naver.com/adcr.nhn?x=FPYT2ie2JuGhOsZke9st6%2F%2F%2F%2Fw%3D%3DsJVMV%2F3hs6bohO4FW3%2BWuXk9lRn443z3IUXy3W21PDQpwvB41GPRO0CprUj63sv%2FJ4OKrHkLoMv9GFOKS47YjQQyPBYs5DknU3Xr5Ht7lXgTGpXK8YGZV11DSpgfKFeXpxiyDa4GKan7n8MyvJC%2FlMJpBDT9g0vi2eUYP4Mg%2B3npT8hWzr%2Fx6yYt8Yj%2FzlqkQ8cW2dTfyj1l3xX4%2BeU8epLl0knQIj9X8tLGgzeJEdP%2BNyQ29mAZUk8gqPsND4WCqHd8gEw9lzl%2BRKFP4AUtntEbpbGYvomUslDXkgI4AksGue1Lp8wH7ODd%2FnEulYIMKOsHt4Wv0xZdxRRpdhVZakOdbr7WLmU6I%2Fb8DrFndIHnVTjer4JvioBI2%2BQmy%2B95MWglkVHCFi7X84XYq4dAzOpTG5uliMy%2FZP%2BxNtQ8BZBlZnFFyD9w%2BB8f8C1wFCJ8HFiVWkjuJrwTFbP%2B602QidM7J9bck71DE%2BYCY9gNZTUuSRPBTzhH4iP5hXvN%2FvwGwWh7AaAn2QgmyeuhCBg6OgiXkiee6hwQSz3dBh55N1W5tG1HGu6UAeyi2gOmm7PfrSu%2BCgvHwGLk42KSTKhbksQszmn4JIG7r57M9w%2Bc9REEvWUxujNvnc%2FVxp0KKVUeqxlMfHEUuF61y6u%2BZIKoQF3nabR6dsHGGjrY0tUXhEVWmLdwiZQ2%2Bxucf3e786iPXbYRXFC2UtWNWJ0Rx6%2FSUj09G9BKd%2BfEuuuI4ttz%2BthkEiaMbGh5c4VtEdOCdFBV1N1%2BSR0cQde5HUknktbgjpw%3D%3D&nv_mid=82337772344&cat_id=50003550',
					imgSrc: 'https://shopping-phinf.pstatic.net/main_8233777/82337772344.1.jpg',
					price: 9600,
				},
				{
					title: '2020 대학생 라이프 플래너 (굿노트 디지털 다이어리 속지, PDF, 하이퍼링크)',
					tags: ['가로형', '만년형', '묶음'],
					company: 'AILO',
					companyLink: 'https://smartstore.naver.com/ailodiary',
					productLink:
						'https://cr2.shopping.naver.com/adcr.nhn?x=FPYT2ie2JuGhOsZke9st6%2F%2F%2F%2Fw%3D%3DsJVMV%2F3hs6bohO4FW3%2BWuXk9lRn443z3IUXy3W21PDQpwvB41GPRO0CprUj63sv%2FJ4OKrHkLoMv9GFOKS47YjQQyPBYs5DknU3Xr5Ht7lXgTGpXK8YGZV11DSpgfKFeXpxiyDa4GKan7n8MyvJC%2FlMJpBDT9g0vi2eUYP4Mg%2B3npT8hWzr%2Fx6yYt8Yj%2FzlqkQ8cW2dTfyj1l3xX4%2BeU8epLl0knQIj9X8tLGgzeJEdP%2BNyQ29mAZUk8gqPsND4WCqHd8gEw9lzl%2BRKFP4AUtntEbpbGYvomUslDXkgI4AksGue1Lp8wH7ODd%2FnEulYIMKOsHt4Wv0xZdxRRpdhVZakOdbr7WLmU6I%2Fb8DrFndIHnVTjer4JvioBI2%2BQmy%2B95MWglkVHCFi7X84XYq4dAzOpTG5uliMy%2FZP%2BxNtQ8BZBlZnFFyD9w%2BB8f8C1wFCJ8HFiVWkjuJrwTFbP%2B602QidM7J9bck71DE%2BYCY9gNZTUuSRPBTzhH4iP5hXvN%2FvwGwWh7AaAn2QgmyeuhCBg6OgiXkiee6hwQSz3dBh55N1W5tG1HGu6UAeyi2gOmm7PfrSu%2BCgvHwGLk42KSTKhbksQszmn4JIG7r57M9w%2Bc9REEvWUxujNvnc%2FVxp0KKVUeqxlMfHEUuF61y6u%2BZIKoQF3nabR6dsHGGjrY0tUXhEVWmLdwiZQ2%2Bxucf3e786iPXbYRXFC2UtWNWJ0Rx6%2FSUj09G9BKd%2BfEuuuI4ttz%2BthkEiaMbGh5c4VtEdOCdFBV1N1%2BSR0cQde5HUknktbgjpw%3D%3D&nv_mid=82337772344&cat_id=50003550',
					imgSrc: 'https://shopping-phinf.pstatic.net/main_8233777/82337772344.1.jpg',
					price: 9600,
				},
				{
					title: '2020 대학생 라이프 플래너 (굿노트 디지털 다이어리 속지, PDF, 하이퍼링크)',
					tags: ['가로형', '만년형', '묶음'],
					company: 'AILO',
					companyLink: 'https://smartstore.naver.com/ailodiary',
					productLink:
						'https://cr2.shopping.naver.com/adcr.nhn?x=FPYT2ie2JuGhOsZke9st6%2F%2F%2F%2Fw%3D%3DsJVMV%2F3hs6bohO4FW3%2BWuXk9lRn443z3IUXy3W21PDQpwvB41GPRO0CprUj63sv%2FJ4OKrHkLoMv9GFOKS47YjQQyPBYs5DknU3Xr5Ht7lXgTGpXK8YGZV11DSpgfKFeXpxiyDa4GKan7n8MyvJC%2FlMJpBDT9g0vi2eUYP4Mg%2B3npT8hWzr%2Fx6yYt8Yj%2FzlqkQ8cW2dTfyj1l3xX4%2BeU8epLl0knQIj9X8tLGgzeJEdP%2BNyQ29mAZUk8gqPsND4WCqHd8gEw9lzl%2BRKFP4AUtntEbpbGYvomUslDXkgI4AksGue1Lp8wH7ODd%2FnEulYIMKOsHt4Wv0xZdxRRpdhVZakOdbr7WLmU6I%2Fb8DrFndIHnVTjer4JvioBI2%2BQmy%2B95MWglkVHCFi7X84XYq4dAzOpTG5uliMy%2FZP%2BxNtQ8BZBlZnFFyD9w%2BB8f8C1wFCJ8HFiVWkjuJrwTFbP%2B602QidM7J9bck71DE%2BYCY9gNZTUuSRPBTzhH4iP5hXvN%2FvwGwWh7AaAn2QgmyeuhCBg6OgiXkiee6hwQSz3dBh55N1W5tG1HGu6UAeyi2gOmm7PfrSu%2BCgvHwGLk42KSTKhbksQszmn4JIG7r57M9w%2Bc9REEvWUxujNvnc%2FVxp0KKVUeqxlMfHEUuF61y6u%2BZIKoQF3nabR6dsHGGjrY0tUXhEVWmLdwiZQ2%2Bxucf3e786iPXbYRXFC2UtWNWJ0Rx6%2FSUj09G9BKd%2BfEuuuI4ttz%2BthkEiaMbGh5c4VtEdOCdFBV1N1%2BSR0cQde5HUknktbgjpw%3D%3D&nv_mid=82337772344&cat_id=50003550',
					imgSrc: 'https://shopping-phinf.pstatic.net/main_8233777/82337772344.1.jpg',
					price: 9600,
				},
				{
					title: '2020 대학생 라이프 플래너 (굿노트 디지털 다이어리 속지, PDF, 하이퍼링크)',
					tags: ['가로형', '만년형', '묶음'],
					company: 'AILO',
					companyLink: 'https://smartstore.naver.com/ailodiary',
					productLink:
						'https://cr2.shopping.naver.com/adcr.nhn?x=FPYT2ie2JuGhOsZke9st6%2F%2F%2F%2Fw%3D%3DsJVMV%2F3hs6bohO4FW3%2BWuXk9lRn443z3IUXy3W21PDQpwvB41GPRO0CprUj63sv%2FJ4OKrHkLoMv9GFOKS47YjQQyPBYs5DknU3Xr5Ht7lXgTGpXK8YGZV11DSpgfKFeXpxiyDa4GKan7n8MyvJC%2FlMJpBDT9g0vi2eUYP4Mg%2B3npT8hWzr%2Fx6yYt8Yj%2FzlqkQ8cW2dTfyj1l3xX4%2BeU8epLl0knQIj9X8tLGgzeJEdP%2BNyQ29mAZUk8gqPsND4WCqHd8gEw9lzl%2BRKFP4AUtntEbpbGYvomUslDXkgI4AksGue1Lp8wH7ODd%2FnEulYIMKOsHt4Wv0xZdxRRpdhVZakOdbr7WLmU6I%2Fb8DrFndIHnVTjer4JvioBI2%2BQmy%2B95MWglkVHCFi7X84XYq4dAzOpTG5uliMy%2FZP%2BxNtQ8BZBlZnFFyD9w%2BB8f8C1wFCJ8HFiVWkjuJrwTFbP%2B602QidM7J9bck71DE%2BYCY9gNZTUuSRPBTzhH4iP5hXvN%2FvwGwWh7AaAn2QgmyeuhCBg6OgiXkiee6hwQSz3dBh55N1W5tG1HGu6UAeyi2gOmm7PfrSu%2BCgvHwGLk42KSTKhbksQszmn4JIG7r57M9w%2Bc9REEvWUxujNvnc%2FVxp0KKVUeqxlMfHEUuF61y6u%2BZIKoQF3nabR6dsHGGjrY0tUXhEVWmLdwiZQ2%2Bxucf3e786iPXbYRXFC2UtWNWJ0Rx6%2FSUj09G9BKd%2BfEuuuI4ttz%2BthkEiaMbGh5c4VtEdOCdFBV1N1%2BSR0cQde5HUknktbgjpw%3D%3D&nv_mid=82337772344&cat_id=50003550',
					imgSrc: 'https://shopping-phinf.pstatic.net/main_8233777/82337772344.1.jpg',
					price: 9600,
				},
				{
					title: '2020 대학생 라이프 플래너 (굿노트 디지털 다이어리 속지, PDF, 하이퍼링크)',
					tags: ['가로형', '만년형', '묶음'],
					company: 'AILO',
					companyLink: 'https://smartstore.naver.com/ailodiary',
					productLink:
						'https://cr2.shopping.naver.com/adcr.nhn?x=FPYT2ie2JuGhOsZke9st6%2F%2F%2F%2Fw%3D%3DsJVMV%2F3hs6bohO4FW3%2BWuXk9lRn443z3IUXy3W21PDQpwvB41GPRO0CprUj63sv%2FJ4OKrHkLoMv9GFOKS47YjQQyPBYs5DknU3Xr5Ht7lXgTGpXK8YGZV11DSpgfKFeXpxiyDa4GKan7n8MyvJC%2FlMJpBDT9g0vi2eUYP4Mg%2B3npT8hWzr%2Fx6yYt8Yj%2FzlqkQ8cW2dTfyj1l3xX4%2BeU8epLl0knQIj9X8tLGgzeJEdP%2BNyQ29mAZUk8gqPsND4WCqHd8gEw9lzl%2BRKFP4AUtntEbpbGYvomUslDXkgI4AksGue1Lp8wH7ODd%2FnEulYIMKOsHt4Wv0xZdxRRpdhVZakOdbr7WLmU6I%2Fb8DrFndIHnVTjer4JvioBI2%2BQmy%2B95MWglkVHCFi7X84XYq4dAzOpTG5uliMy%2FZP%2BxNtQ8BZBlZnFFyD9w%2BB8f8C1wFCJ8HFiVWkjuJrwTFbP%2B602QidM7J9bck71DE%2BYCY9gNZTUuSRPBTzhH4iP5hXvN%2FvwGwWh7AaAn2QgmyeuhCBg6OgiXkiee6hwQSz3dBh55N1W5tG1HGu6UAeyi2gOmm7PfrSu%2BCgvHwGLk42KSTKhbksQszmn4JIG7r57M9w%2Bc9REEvWUxujNvnc%2FVxp0KKVUeqxlMfHEUuF61y6u%2BZIKoQF3nabR6dsHGGjrY0tUXhEVWmLdwiZQ2%2Bxucf3e786iPXbYRXFC2UtWNWJ0Rx6%2FSUj09G9BKd%2BfEuuuI4ttz%2BthkEiaMbGh5c4VtEdOCdFBV1N1%2BSR0cQde5HUknktbgjpw%3D%3D&nv_mid=82337772344&cat_id=50003550',
					imgSrc: 'https://shopping-phinf.pstatic.net/main_8233777/82337772344.1.jpg',
					price: 9600,
				},
			],
		};
	},
	async created() {
		EventBus.$on('finishFilter', async filters => {
			this.filterOn = false;

			this.filters = filters;
			this.$ga.event({
				eventCategory: 'filter',
				eventAction: 'click',
				eventValue: filters,
			});
			await this.fetchList();
		});

		// 데이터 불러오는 로직
		await this.fetchList();
	},
	methods: {
		async changeCate(category) {
			this.filters = {};
			this.sort = '';
			this.category = category;
			this.$ga.event({
				eventCategory: 'category',
				eventAction: 'click',
				eventValue: category,
			});
			await this.fetchList();
		},
		async changeSort(sort) {
			this.sort = sort;
			this.$ga.event({
				eventCategory: 'sort',
				eventAction: 'click',
				eventValue: sort,
			});
			await this.fetchList();
		},
		// 데이터 불러오는 함수
		async fetchList() {
			this.spinnerLoading = true;
			this.list = [];

			if (this.category === '다이어리') this.url = `/products/diary`;
			else if (this.category === '노트') this.url = `/products/note`;
			else this.url = this.url = `/products/sticker`;

			const fetchList = await axios({
				method: 'post',
				url: this.url,
				data: {
					sort: this.sort,
					filters: this.filters,
				},
			});
			this.list = fetchList.data;

			this.spinnerLoading = false;
		},
	},
};
</script>

<style scoped lang="scss">
.home {
	margin: 0 auto;
	padding-bottom: 100px;
}
.box {
	height: 1.9rem;
	width: 90%;
	margin: 0 auto;
	margin-top: 4rem;
	display: flex;
}
</style>
