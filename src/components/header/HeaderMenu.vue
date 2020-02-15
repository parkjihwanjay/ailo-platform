<template>
	<div class="menu">
		<div :class="{ 'border-bottom': homeClicked }" class="menu-option" @click="homeSelect">
			홈
		</div>
		<div :class="{ 'border-bottom': introClicked }" class="menu-option" @click="introSelect">
			소개/피드백
		</div>
	</div>
</template>

<script>
export default {
	name: 'HeaderMenu',
	data() {
		return {
			homeClicked: true,
			introClicked: false,
		};
	},
	methods: {
		homeSelect() {
			if (this.homeClicked) return;

			this.homeClicked = true;
			this.introClicked = false;

			this.$emit('menuSelected', 'home');
		},
		introSelect() {
			if (this.introClicked) return;

			this.homeClicked = false;
			this.introClicked = true;

			this.$emit('menuSelected', 'intro');
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
