<template>
	<div class="listBox">
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
.listBox {
	width: 90%;
	margin: 0 auto;
	margin-top: 40px;
}
</style>
