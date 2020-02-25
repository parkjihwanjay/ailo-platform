<template>
	<div class="input-box">
		<textarea
			ref="input"
			class="input-box"
			@input="feedbackEntered"
			:maxlength="maxLength"
			:value="feedback"
		></textarea>
		<div class="max-length">{{ feedbackLength }} / 최대 {{ maxLength }}자</div>
	</div>
</template>

<script>
export default {
	name: 'FeedbackInput',
	props: {
		feedback: String,
		maxLength: Number,
	},
	computed: {
		feedbackLength() {
			return this.feedback.length;
		},
	},
	methods: {
		feedbackEntered(e) {
			this.$emit('feedbackEntered', e.target.value);
		},
	},
};
</script>

<style lang="scss" scoped>
.input-box {
	width: 100%;
	margin-top: 11px;
}

.input-box textarea {
	width: 100%;
	height: 50vw;
	padding: 5px;
	resize: none;
	border: solid 0.5px #707070;
}

.max-length {
	position: relative;
	bottom: 32px;
	text-align: right;
	// top: 0;
}
</style>
