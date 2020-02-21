<template>
	<div class="footer">
		<div class="footer-button">
			<input @click="$emit('finishFilter')" type="button" value="선택완료" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'ModalFilterFooter',
};
</script>

<style lang="scss" scoped>
.footer {
	height: 50px;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	display: flex;
	align-items: center;
	border-top: 1px solid rgb(0, 0, 0, 0.3);
}
.footer-button {
	width: 60%;
	height: 30px;
	margin: 0 auto;
	border-radius: 20px;
	font-size: 16px;
	border-color: $primary-color;
}
input[type='button'] {
	width: 100%;
	height: 100%;
	border-color: $primary-color;
	color: #ffffff;
	box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.16);
	border-radius: 20px;
	background-color: $primary-color;
	text-align: center;
	padding-top: 7px;
	cursor: pointer;
	border-style: none;
}
</style>
