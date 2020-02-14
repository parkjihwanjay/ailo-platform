<template>
	<div class="modal">
		<transition name="fade">
			<div class="modal-container">
				<modal-filter>
					<input @click="$emit('closeFilter')" type="button" value="닫기" />
				</modal-filter>
			</div>
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
@import '@/styles/modal.scss';

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
