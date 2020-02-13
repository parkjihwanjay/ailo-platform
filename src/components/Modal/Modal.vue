<template>
	<div class="modal-parent">
		<transition name="fade">
			<modal-filter @closeFilter="$emit('closeFilter')"></modal-filter>
		</transition>
	</div>
</template>

<script>
import ModalFilter from './ModalFilter.vue';
export default {
	name: 'Modal',
	components: {
		ModalFilter,
	},
};
</script>

<style lang="scss" scoped>
.modal-parent {
	width: 100%;
	height: 100%;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
