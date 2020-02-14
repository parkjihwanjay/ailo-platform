<template>
	<div class="modal">
		<transition name="fade">
			<modal-filter :category="category"></modal-filter>
		</transition>
	</div>
</template>

<script>
import ModalFilter from './ModalFilter.vue';
export default {
	name: 'Modal',
	props: ['category'],
	components: {
		ModalFilter,
	},
};
</script>

<style lang="scss" scoped>
@import '@/styles/modal.scss';
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
