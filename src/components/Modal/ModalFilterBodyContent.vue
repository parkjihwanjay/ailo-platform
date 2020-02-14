<template>
	<div class="content">
		<div class="content-title">{{ title }}</div>
		<div class="content-body">
			<input
				:ref="title"
				v-for="(content, index) in contents"
				@click="clickButton(index)"
				type="button"
				:value="content"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ModalFilterBodyContent',
	props: {
		title: {
			type: String,
		},
		contents: {
			type: Array,
		},
	},
	created() {
		this.$emit('filterClicked', this.title, this.contents[0]);
	},
	mounted() {
		this.$refs[this.title][0].classList.add('clicked');
	},
	methods: {
		clickButton(index) {
			const divButtons = this.$refs[this.title];

			divButtons.forEach(divButton => {
				divButton.classList.remove('clicked');
			});

			divButtons[index].classList.add('clicked');

			this.$emit('filterClicked', this.title, this.contents[index]);
		},
	},
};
</script>

<style scoped lang="scss">
.content {
	width: 100%;
	margin-bottom: 2.4rem;
}
.content-title {
	font-size: 1rem;
	margin-bottom: 0.7rem;
}
.content-body {
	display: flex;
	justify-content: space-between;
}
input[type='button'] {
	width: 6.8rem;
	height: 2.3rem;
	opacity: 0.5;
	border-radius: 15px;
	border: solid 0.7px #000000;
	// background-color: white;
	padding: 0;
}

.clicked {
	background-color: $soft-purple;
}
</style>
