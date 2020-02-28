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
import changeClass from '@/utils/changeClass.js';
export default {
	name: 'ModalFilterBodyContent',
	props: {
		title: {
			type: String,
		},
		contents: {
			type: Array,
		},
		meaning: {
			type: String,
		},
	},
	mounted() {
		this.$refs[this.title][0].classList.add('clicked');
	},
	methods: {
		clickButton(index) {
			const divButtons = this.$refs[this.title];
			if (this.title === '용도') {
				if (index) {
					divButtons[0].classList.remove('clicked');
					divButtons[index].classList.toggle('clicked');
				} else {
					divButtons[0].classList.length
						? divButtons[index].classList.toggle('clicked')
						: changeClass(divButtons, 0, 'clicked');
				}
			} else {
				changeClass(divButtons, index, 'clicked');
			}
			this.$emit('filterClicked', this.meaning, this.contents[index]);
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
	text-align: center;
}
.content-body {
	width: 80%;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}
input[type='button'] {
	width: 6.8rem;
	height: 2.3rem;
	opacity: 0.5;
	border-radius: 15px;
	border: solid 0.7px #000000;
	// flex: 1;
	// min-width: 33%;
	// background-color: white;
	// padding: 0;

	line-height: normal;
	margin-top: 1.6rem;
	// margin-left: 20%;
}

.clicked {
	background-color: $soft-purple;
}
</style>
