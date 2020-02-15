<template>
	<div class="listBox">
		<list-item></list-item>
	</div>
</template>

<script>
import ListItem from '../components/List/ListItem.vue';
export default {
	name: 'ListBox',
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
