<template>
	<div class="footer-box">
		<div class="footer-content">
			<p>
				문의하신 내용에 대한 원인파악 및 원활한 상담을 위하여 이메일을 수집합니다. 수집된 개인정조는
				개인정보의 수집 및 이용 목적이 달성되면 관련 법령 또는 회사 내부 방침에 의해 보존할 필요가
				있는 경우를 제외하고는 지체없이 파기됩니다. 더 자세한 내용에 대해서는
				<strong>개인정보 처리방침</strong>을 참고하시기 바랍니다.
			</p>
			<div class="input-box">
				<input type="checkbox" id="checkbox" :checked="agreement" @change="$emit('check')" />
				<label for="checkbox">위 내용에 동의합니다.</label>
			</div>
			<div class="check-button">
				<input type="button" value="확인" @click="$emit('clickButton')" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FeedbackFooter',
	props: {
		agreement: {
			type: Boolean,
		},
	},
};
</script>

<style lang="scss" scoped>
.footer-box {
	width: 100%;
	background-color: #eaeaea;
}
.footer-content {
	width: 85%;
	margin: 0 auto;
	padding-top: 20px;
	text-align: left;
}
.footer-content label {
	padding-left: 15px;
}
.input-box {
	display: flex;
	-webkit-box-align: center;
}
.input-box label {
	cursor: pointer;
}
.input-box input {
	cursor: pointer;
}

.check-button {
	width: 100%;
	height: 43px;
	border-radius: 10px;
	margin: 0 auto;
	margin-top: 54px;
	padding-bottom: 54px;
	max-width: 500px;
}

.check-button input {
	width: 100%;
	height: 100%;
	border-radius: 10px;
	border: 0;
	background-color: $primary-color;
	color: white;
	font-size: 1.6rem;
	cursor: pointer;
}
</style>
