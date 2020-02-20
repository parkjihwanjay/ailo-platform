<template>
	<div class="feedback-top">
		<div class="input-select">
			<select class="input-data" @change="senderSelected">
				<option v-for="sender in senderList" :value="sender">{{ sender }}</option>
			</select>
		</div>
		<div class="input-email">
			<input class="input-data" @blur="emailEntered" type="text" :placeholder="placeholder" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'FeedbackSelect',
	props: {
		senderList: Array,
		placeholder: String,
	},
	methods: {
		senderSelected(e) {
			this.$emit('senderSelected', e.target.value);
		},
		emailEntered(e) {
			this.$emit('emailEntered', e.target.value);
		},
	},
};
</script>

<style lang="scss" scoped>
.feedback-top {
	width: 99%;
	height: 24px;
	display: flex;
	justify-content: space-between;
}
.input-select {
	width: 30%;
	height: 100%;
	border-radius: 5px;
	// border: solid 0.5px #707070;
}
.input-email {
	width: 60%;
	height: 100%;
	border-radius: 5px;
}

.input-email input {
	border: solid 0.5px #707070;
}

.input-data {
	width: 100%;
	height: 100%;
	border-radius: 5px;
	margin: 0;
	padding: 0;
	padding-left: 10px;
	border-width: 1px;
}
</style>
