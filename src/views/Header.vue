<template>
	<div class="header">
		<header-title></header-title>
		<header-menu></header-menu>
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
};
</script>

<style lang="scss" scoped>
.header {
	width: 100%;
	height: 88px;
}
</style>
