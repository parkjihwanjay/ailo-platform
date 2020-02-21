<template>
	<div class="buttons">
		<div v-for="(cate, index) in cateList" ref="category" class="button" @click="changeCate(index)">
			{{ cate }}
		</div>
	</div>
</template>

<script>
import changeClass from '@/utils/changeClass.js';

export default {
	name: 'CategoryButton',
	// props : ['category', 'cateList']
	props: {
		cateList: {
			type: Array,
			default: function() {
				return ['다이어리', '노트', '스티커'];
			},
		},
	},
	mounted() {
		this.$refs.category[0].classList.add('purple-full');
		this.$refs.category[1].classList.add('border-none-side');
	},
	methods: {
		changeCate(index) {
			changeClass(this.$refs.category, index, 'purple-full');
			this.$emit('changeCate', this.cateList[index]);
		},
	},
};
</script>

<style lang="scss" scoped>
.buttons {
	width: 90%;
	height: 2.2rem;
	margin: 0 auto;
	margin-top: 16px;
	display: flex;
	justify-content: space-evenly;
}
.button {
	width: 33.3%;
	font-size: 1.3rem;
	text-align: center;
	padding-top: 0.4rem;
	padding-bottom: 0.4rem;
	border: 1px solid $primary-color;
	border-bottom: 0;
	cursor: pointer;

	// box-shadow: 0.7px 0 0 0 #000000, 0.7px 0 0 0 #000000 inset, 0 0.7px 0 0 #000000 inset;
}

.purple-full {
	background-color: $primary-color;
	color: white;
}

.border-none-side {
	border-left: 0px;
	border-right: 0px;
}
</style>
