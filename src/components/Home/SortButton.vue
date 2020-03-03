<template>
	<div class="sort">
		<select v-model="sort" @change="$emit('sortSelected', sort)">
			<option disabled value="" selected>골라주세요</option>
			<option v-for="sort in sortList">{{ sort }}</option>
		</select>
	</div>
</template>

<script>
export default {
	name: 'SortButton',
	props: {
		sortList: {
			type: Array,
			default: function() {
				return ['다이어리', '노트', '스티커'];
			},
		},
		category: {
			type: String,
		},
	},
	data() {
		return {
			sort: '',
		};
	},
	watch: {
		category() {
			this.sort = '';
		},
	},
};
</script>

<style lang="scss" scoped>
.sort {
	width: 60%;
	height: 100%;
	margin-right: 5%;
}
.sort select {
	width: 100%;
	height: 100%;
	border-radius: 3px;
	border: solid 0.5px #b2b2b2;
}
</style>
