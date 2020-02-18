<template>
	<transition name="fade">
		<div class="header" v-show="!scrollDown" id="header">
			<header-title></header-title>
			<header-menu :menuList="menuList" @menuSelect="menuSelect"></header-menu>
		</div>
	</transition>
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
	data() {
		return {
			menuList: ['소개', '홈', '피드백'],
			scrollPos: 0,
			scrollDown: false,
		};
	},
	mounted() {
		// adding scroll event
		window.addEventListener('scroll', () => {
			// detects new state and compares it with the new one
			if (document.body.getBoundingClientRect().top > this.scrollPos) {
				// document.getElementById('info-box').setAttribute('data-scroll-direction', 'UP');
				this.scrollDown = false;
			} else {
				// document.getElementById('info-box').setAttribute('data-scroll-direction', 'DOWN');
				this.scrollDown = true;
			}
			// saves the new position for iteration.
			this.scrollPos = document.body.getBoundingClientRect().top;
		});
	},
	methods: {
		menuSelect(index) {
			if (index === 0)
				this.$router.push({
					path: '/intro',
				});
			else if (index === 1)
				this.$router.push({
					path: '/',
				});
			else
				this.$router.push({
					path: '/feedback',
				});
		},
	},
};
</script>

<style lang="scss" scoped>
.header {
	width: 100%;
	position: fixed;
	top: 0;
	max-width: 800px;
	z-index: 999;
	background-color: white;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
