<template>
	<div class="menu">
		<div
			v-for="(menu, index) in menuList"
			ref="menu"
			@click="menuSelect(index)"
			class="menu-option"
		>
			{{ menu }}
		</div>
		<!-- <div :class="{ 'border-bottom': homeClicked }" class="menu-option" @click="homeSelect">
			소개
		</div>
		<div :class="{ 'border-bottom': homeClicked }" class="menu-option" @click="homeSelect">
			홈
		</div>
		<div :class="{ 'border-bottom': introClicked }" class="menu-option" @click="introSelect">
			피드백
		</div> -->
	</div>
</template>

<script>
export default {
	name: 'HeaderMenu',
	props: {
		menuList: {
			type: Array,
		},
	},
	data() {
		return {
			indexClicked: 1,
		};
	},
	mounted() {
		this.$refs.menu[1].classList.add('border-bottom');
	},
	methods: {
		menuSelect(index) {
			if (this.indexClicked === index) return;

			const menuRefs = this.$refs.menu;

			menuRefs.forEach(menuRef => {
				menuRef.classList.remove('border-bottom');
			});

			menuRefs[index].classList.add('border-bottom');

			this.$emit('menuSelect', index);

			this.indexClicked = index;
		},
	},
};
</script>

<style lang="scss" scoped>
.menu {
	width: 90%;
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
	cursor: pointer;
}

.border-bottom {
	border-bottom: 1px solid $primary-color;
}
</style>
