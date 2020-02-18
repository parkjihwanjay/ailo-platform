<template>
	<div class="footer-box">
		<div class="footer">
			<div>AILO</div>
			<div>
				<div>이용 약관</div>
				<div>개인정보 처리방침 이용약관</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Footer',
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
.footer > div:nth-child(2) > div:last-child {
	margin-left: 14px;
}
</style>
