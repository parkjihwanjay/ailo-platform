<template>
	<div class="sort">
		<select>
			<option disabled value="" selected>골라주세요</option>
			<option v-for="sort in sortList">{{ sort }}</option>
		</select>
		<!-- <v-select
				class="style-chooser"
				placeholder="Choose a Styling Option"
				:options="['Components', 'CSS / Variables', 'Slots']"
			></v-select> -->
	</div>
</template>

<script>
export default {
	name: 'SortButton',
	data() {
		return {
			sortList: ['인기순', '최신순', '가격 낮은 순', '가격 높은 순'],
		};
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
