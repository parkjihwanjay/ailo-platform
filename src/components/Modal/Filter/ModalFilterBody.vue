<template>
	<div class="filter-body">
		<div class="filter-bdoy__content">
			<ModalFilterBodyContent
				:category="category"
				v-for="data in filterData"
				:title="data.title"
				:contents="data.contents"
				:meaning="data.meaning"
				@filterClicked="filterClicked"
			/>
		</div>
	</div>
</template>

<script>
import ModalFilterBodyContent from './ModalFilterBodyContent.vue';
export default {
	name: 'ModalFilterBody',
	props: {
		filterData: {
			type: Array,
		},
		category: {
			type: String,
		},
	},
	components: {
		ModalFilterBodyContent,
	},
	methods: {
		filterClicked(meaning, content) {
			this.$emit('filterClicked', meaning, content);
		},
	},
};
</script>

<style lang="scss" scoped>
.filter-body {
	width: 100%;
	max-height: 450px;
	overflow-y: scroll;
}
.filter-bdoy__content {
	width: 80%;
	margin: 0 auto;
	margin-top: 2rem;
}
</style>
