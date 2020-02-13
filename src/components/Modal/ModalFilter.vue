<template>
	<div class="modal">
		<!-- <div class="popup-close"></div> -->
		<div class="modal-container">
			<div class="modal-inner not-ready-modal">
				<img src="../../assets/logo.png" alt="Warning" />
				<h2>준비중입니다!</h2>
				<p>빠른 시일 내에 찾아뵙겠습니다.</p>
				<input @click="$emit('closeFilter')" type="button" value="닫기" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ModalFilter',
};
</script>

<style lang="scss" scoped>
@import '@/styles/modal.scss';
.not-ready-modal {
	min-width: 470px;
	max-width: 1240px;
	max-height: 90%;
	overflow-y: auto;
}
.modal-inner {
	text-align: center;
	padding: 64.5px 50px;
}
.mt-50 {
	margin-top: 50px;
}
input {
	cursor: pointer;
}
</style>
