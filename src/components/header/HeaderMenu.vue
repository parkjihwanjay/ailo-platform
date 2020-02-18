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
	</div>
</template>

<script>
import changeClass from '@/utils/changeClass.js';
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
		const menuRefs = this.$refs.menu;
		this.classInitialize(menuRefs);
	},
	methods: {
		classInitialize(menuRefs) {
			if (this.$route.name === 'Intro') menuRefs[0].classList.add('border-bottom');
			else if (this.$route.name === 'Home') menuRefs[1].classList.add('border-bottom');
			else menuRefs[2].classList.add('border-bottom');
		},
		menuSelect(index) {
			if (this.indexClicked === index) return;

			changeClass(this.$refs.menu, index, 'border-bottom');

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
