<template>
	<div>
		<transition-group name="fade">
			<modal-filter
				key="ModalFilter"
				class="modal"
				@click="filterOn = false"
				v-show="filterOn"
				:category="category"
			></modal-filter>
			<modal-privacy
				key="ModalPrivacy"
				class="modal"
				@close="$emit('close')"
				v-if="policyOn"
			></modal-privacy>
			<modal-terms
				@click="termsOn = false"
				@close="$emit('close')"
				key="ModalTerms"
				class="modal"
				v-if="termsOn"
			></modal-terms>
		</transition-group>
	</div>
</template>

<script>
import ModalFilter from './Filter/ModalFilter.vue';
import ModalPrivacy from './UserPolicy/ModalPrivacy.vue';
import ModalTerms from './UserPolicy/ModalTerms.vue';
export default {
	name: 'Modal',
	props: ['category', 'filterOn', 'termsOn', 'policyOn'],
	components: {
		ModalFilter,
		ModalPrivacy,
		ModalTerms,
	},
	methods: {},
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
