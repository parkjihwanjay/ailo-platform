<template>
	<div>
		<div class="footer-button">
			<input @click="close" type="button" value="닫기" />
		</div>
	</div>
</template>

<script>
import { EventBus } from '@/utils/event-bus.js';

export default {
	name: 'closeButton',
	methods: {
		close() {
			EventBus.$emit('closeUserPolicy');
		},
	},
};
</script>

<style lang="scss" scoped>
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
