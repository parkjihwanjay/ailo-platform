<template>
	<div id="app">
		<Header />
		<router-view></router-view>
		<!-- <Modal /> -->
	</div>
</template>

<script>
import Header from './views/Header.vue';
// import Modal from './views/Modal.vue';
export default {
	components: {
		Header,
		// Modal,
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
