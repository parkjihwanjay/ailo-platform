<template>
	<div>
		<div class="feedback">
			<feedback-select
				:senderList="senderList"
				:placeholder="placeholder"
				:userType="userType"
				:email="email"
				@senderSelected="senderSelected"
				@emailEntered="emailEntered"
			></feedback-select>
			<feedback-input
				:feedback="content"
				:maxLength="maxLength"
				@feedbackEntered="feedbackEntered"
			></feedback-input>
		</div>
		<div class="feedback-footer">
			<feedback-footer
				:agreement="agreement"
				@check="agreement = !agreement"
				@clickButton="clickButton"
			></feedback-footer>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { required, email } from 'vuelidate/lib/validators';
import FeedbackSelect from '../components/Feedback/FeedbackSelect.vue';
import FeedbackInput from '../components/Feedback/FeedbackInput.vue';
import FeedbackFooter from '../components/Feedback/FeedbackFooter.vue';
export default {
	name: 'Feedback',
	components: {
		FeedbackSelect,
		FeedbackInput,
		FeedbackFooter,
	},
	data() {
		return {
			senderList: ['소비자', '디자이너'],
			placeholder: '이메일을 기재해주시면 답변을 보내드립니다',
			userType: '소비자',
			email: '',
			content: '',
			maxLength: 1000,
			agreement: false,
		};
	},
	validations: {
		email: {
			email,
			required,
		},
		content: {
			required,
		},
	},

	methods: {
		senderSelected(sender) {
			this.userType = sender;
		},
		emailEntered(email) {
			this.email = email;
		},
		feedbackEntered(feedback) {
			this.content = feedback;
		},
		async clickButton() {
			this.$v.$touch();
			if (this.validate()) {
				// 데이터 전송 로직
				try {
					await axios.post('/clientcenters/feedback', {
						email: this.email,
						userType: this.userType,
						content: this.content,
						agreement: this.agreement,
					});
					this.dataInitialize();
					alert('성공적으로 업로드 됐습니다');
				} catch (e) {
					alert('잘못된 형식입니다.');
				}
			}
		},
		dataInitialize() {
			this.userType = '소비자';
			this.email = '';
			this.content = '';
			this.agreement = false;
		},
		validate() {
			if (!this.agreement) return alert('개인정보 처리방침을 동의해주세요');

			if (this.$v.$invalid) {
				if (this.$v.email.$invalid) {
					return !this.$v.email.required
						? alert('이메일을 입력해주세요')
						: alert('이메일 형식을 맞춰주세요');
				} else if (this.$v.content.$invalid) {
					return alert('내용을 입력해주세요');
				}
			}

			return true;
		},
	},
};
</script>

<style lang="scss" scoped>
.feedback {
	width: 90%;
	margin: 0 auto;
	margin-top: 46px;
}
.feedback-footer {
	width: 100%;
}
</style>
