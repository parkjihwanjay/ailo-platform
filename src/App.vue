<template>
	<div id="app">
		<Header />
		<router-view></router-view>
	</div>
</template>

<script>
import Header from './views/Header.vue';
export default {
	components: {
		Header,
	},
};
</script>
<style lang="scss">
#app {
	width: 100%;
	max-width: 1024px;
	margin: 0 auto;
	background-color: white;
	//test 용
	// border: 1px solid black;
	// height: 700px;
}
</style>
