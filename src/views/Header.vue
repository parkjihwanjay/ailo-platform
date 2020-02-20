<template>
	<transition name="fade">
		<div class="header" v-show="!scrollDown" ref="header" id="header">
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
			menuList: ['홈', '소개', '피드백'],
			scrollPos: 0,
			scrollDown: false,
		};
	},
	computed: {
		path() {
			return this.$route.path;
		},
	},
	watch: {
		path(path) {
			if (path === '/feedback') this.$refs.header.classList.remove('position');
			else this.$refs.header.classList.add('position');
		},
	},
	mounted() {
		// adding scroll event
		window.addEventListener('scroll', () => {
			// detects new state and compares it with the new one
			if (window.scrollY > 400) {
				document.body.getBoundingClientRect().top > this.scrollPos
					? (this.scrollDown = false)
					: (this.scrollDown = true);
			}
			// saves the new position for iteration.
			this.scrollPos = document.body.getBoundingClientRect().top;
		});
	},
	methods: {
		menuSelect(index) {
			// if (this.path === this.menuList[index])
			if (index === 0)
				this.$router.push({
					path: '/',
				});
			else if (index === 1)
				this.$router.push({
					path: '/intro',
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
	max-width: 800px;
	z-index: 999;
	background-color: white;
}

.position {
	position: fixed;
	top: 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
