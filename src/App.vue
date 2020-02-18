<template>
	<div id="app">
		<Header />
		<router-view></router-view>
		<Footer />
	</div>
</template>

<script>
import Header from './views/Header.vue';
import Footer from './views/Footer.vue';
export default {
	components: {
		Header,
		Footer,
	},
};
</script>
<style lang="scss">
#app {
	width: 100%;
	max-width: 800px;
	margin: 0 auto;
	background-color: white;
}
</style>
