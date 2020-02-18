<template>
	<div class="feedback">
		<feedback-select
			:senderList="senderList"
			:placeholder="placeholder"
			@senderSelected="senderSelected"
			@emailEntered="emailEntered"
		></feedback-select>
		<feedback-input
			:feedback="feedback"
			:maxLength="maxLength"
			@feedbackEntered="feedbackEntered"
		></feedback-input>
	</div>
</template>

<script>
import FeedbackSelect from '../components/Feedback/FeedbackSelect.vue';
import FeedbackInput from '../components/Feedback/FeedbackInput.vue';
export default {
	name: 'Feedback',
	components: {
		FeedbackSelect,
		FeedbackInput,
	},
	data() {
		return {
			senderList: ['소비자', '생산자'],
			placeholder: '이메일을 기재해주시면 답변을 보내드립니다',
			sender: '소비자',
			email: '',
			feedback: '',
			maxLength: 1000,
		};
	},
	methods: {
		senderSelected(sender) {
			this.sender = sender;
		},
		emailEntered(email) {
			this.email = email;
		},
		feedbackEntered(feedback) {
			this.feedback = feedback;
		},
	},
};
</script>

<style lang="scss" scoped>
.feedback {
	width: 90%;
	margin: 0 auto;
	margin-top: 120px;
}
</style>
