<template>
	<div class="border list"></div>
</template>

<script>
export default {
	created() {
		console.log(this.$route.params);
	},
};
</script>

<style lang="scss" scoped>
.list {
	width: 90%;
	margin: 0 auto;
	margin-top: 10px;
}
</style>
