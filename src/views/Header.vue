<template>
	<div class="header">
		<header-title></header-title>
		<header-menu @menuSelected="menuSelected"></header-menu>
	</div>
</template>

<script>
import HeaderTitle from '@/components/header/HeaderTitle.vue';
import HeaderMenu from '@/components/header/HeaderMenu.vue';

export default {
	name: 'Header',
	components: {
		HeaderTitle,
		HeaderMenu,
	},
	methods: {
		menuSelected(menu) {
			if (menu === 'home')
				this.$router.push({
					name: 'Home',
				});
			else
				this.$router.push({
					name: 'Intro',
				});
		},
	},
};
</script>

<style lang="scss" scoped>
.header {
	width: 100%;
	height: 88px;
	position: fixed;
	top: 0;
	z-index: 999;
	background-color: white;
	// position: fixed;
}
</style>
