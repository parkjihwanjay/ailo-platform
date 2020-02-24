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
		pathName: {
			type: String,
		},
	},
	watch: {
		pathName(pName) {
			this.classInitialize(pName, this.$refs.menu);
		},
	},
	mounted() {
		this.classInitialize(this.pathName, this.$refs.menu);
	},
	methods: {
		classInitialize(pName, menuRefs) {
			if (pName === 'Home') changeClass(menuRefs, 0, 'border-bottom');
			else if (pName === 'Intro') changeClass(menuRefs, 1, 'border-bottom');
			else changeClass(menuRefs, 2, 'border-bottom');
		},
		menuSelect(index) {
			this.$emit('menuSelect', index);
		},
	},
};
</script>

<style lang="scss" scoped>
.menu {
	width: 90%;
	margin: 0 auto;
	margin-top: 3.8rem;
	display: flex;
}

.menu-option {
	font-weight: 900;
	width: 50%;
	text-align: center;
	font-size: 1.3rem;
	padding-top: 5px;
	padding-bottom: 5px;
	cursor: pointer;
	border-bottom: 0.5px solid gray;
}

.border-bottom {
	border-bottom: 2px solid $primary-color;
}
</style>
