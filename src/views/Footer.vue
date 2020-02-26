<template>
	<div class="footer-box">
		<div class="footer">
			<div>AILO</div>
			<div>
				<div @click="termsOn = true">이용 약관</div>
				<div @click="policyOn = true">개인정보 처리방침</div>
			</div>
		</div>
		<Modal :termsOn="termsOn" :policyOn="policyOn" @close="close" />
	</div>
</template>

<script>
import Modal from '../components/Modal/Modal.vue';
import { EventBus } from '@/utils/event-bus.js';

export default {
	name: 'Footer',
	components: {
		Modal,
	},
	data() {
		return {
			termsOn: false,
			policyOn: false,
		};
	},
	created() {
		EventBus.$on('closeUserPolicy', () => {
			this.termsOn = false;
			this.policyOn = false;
		});
	},
	methods: {
		close() {
			this.policyOn = false;
			this.termsOn = false;
		},
	},
};
</script>

<style lang="scss" scoped>
.footer-box {
	width: 100%;
	height: 42px;
	background-color: $footer-color;
	display: flex;
	align-items: center;
}
.footer {
	width: 80%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.footer > div:nth-child(2) {
	display: flex;
}

.footer > div:nth-child(2) div {
	cursor: pointer;
}

.footer > div:nth-child(2) > div:last-child {
	margin-left: 1.4rem;
}
</style>
