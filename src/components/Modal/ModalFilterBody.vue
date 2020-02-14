<template>
	<div class="filter-body">
		<div class="filter-bdoy__content">
			<ModalFilterBodyContent
				v-for="data in filterData"
				:title="data.title"
				:contents="data.contents"
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
	},
	components: {
		ModalFilterBodyContent,
	},
	methods: {
		filterClicked(title, content) {
			this.$emit('filterClicked', title, content);
		},
	},
};
</script>

<style lang="scss" scoped>
.filter-body {
	width: 100%;
	max-height: 450px;
	overflow: scroll;
}
.filter-bdoy__content {
	width: 80%;
	margin: 0 auto;
	margin-top: 2rem;
}
</style>
