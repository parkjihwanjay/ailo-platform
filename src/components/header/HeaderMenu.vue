<template>
	<div class="menu">
		<div class="border-bottom menu-option">홈</div>
		<div class="menu-option">소개/피드백</div>
	</div>
</template>

<script>
export default {
	name: 'HeaderMenu',
};
</script>

<style lang="scss" scoped>
.menu {
	width: 70%;
	margin: 0 auto;
	margin-top: 13px;
	display: flex;
}

.menu-option {
	width: 50%;
	text-align: center;
	font-size: 1.3rem;
	padding-top: 5px;
	padding-bottom: 5px;
}

.border-bottom {
	border-bottom: 1px solid $primary-color;
}
</style>
