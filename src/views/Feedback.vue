<template>
	<div>
		<div class="feedback">
			<feedback-select
				:senderList="senderList"
				:placeholder="placeholder"
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
			<feedback-footer @check="agreement = !agreement" @clickButton="clickButton"></feedback-footer>
		</div>
	</div>
</template>

<script>
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
		clickButton() {
			console.log(this.$v);
			this.$v.$touch();
			if (this.validate()) {
				console.log('데이터 전송 준비 완료');
			}
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
