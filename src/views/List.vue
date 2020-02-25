<template>
	<div class="list-box">
		<list-item v-for="list in lists" :list="list"></list-item>
	</div>
</template>

<script>
import ListItem from '../components/List/ListItem.vue';
export default {
	name: 'ListBox',
	props: {
		lists: {
			type: Array,
		},
	},
	components: {
		ListItem,
	},
	created() {
		// console.log(this.$route.params);
	},
};
</script>

<style lang="scss" scoped>
.list-box {
	width: 320px;
	margin: 0 auto;
	margin-top: 5rem;
}
@media screen and (min-width: 600px) {
	.list-box {
		width: 580px;
	}
}
</style>
