<template>
	<div class="tag-box">
		<div class="tag-box-content"># {{ tag }}</div>
	</div>
</template>

<script>
export default {
	name: 'ListTag',
	props: {
		tag: {
			type: String,
		},
	},
};
</script>

<style lang="scss" scoped>
.tag-box {
	// width: 26%;
	// height: 1.3rem;
	border-radius: 10px;
	background-color: rgba(0, 0, 0, 0.1);
	// margin-top: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.tag-box-content {
	padding: 0.3rem;
	// padding-top: 0.3rem;
	// padding-bottom: 0.3rem;
	font-size: 0.7rem;
	text-align: center;
	color: black;
	opacity: unset;
}

// @media screen and (max-width: 450px) {
// 	.tag-box-content {
// 		font-size: 0.5px;
// 	}
// }

// @media screen and (min-width: 450px) {
// 	.tag-box-content {
// 		font-size: 0.5rem;
// 	}
// }
</style>
