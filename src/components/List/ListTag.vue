<template>
	<div class="tag-box">
		<!-- <div v-if="tag.length > 1" class="tag-box-content"># {{ tag[1] }}</div>
		<div v-else-if="tag[0] === '있음'" class="tag-box-content"># 하이퍼링크</div>
		<div v-else-if="tag[0] !== '없음'" class="tag-box-content"># {{ tag[0] }}</div> -->
		<template v-if="tag != undefined">
			<div v-if="tag === '있음'" class="tag-box-content"># 하이퍼링크</div>
			<div v-else-if="tag.length >= 6" class="tag-box-content"># {{ tag.substring(0, 2) }}</div>
			<div v-else-if="tag !== '없음'" class="tag-box-content"># {{ tag }}</div>
		</template>
		<!-- <div v-else class="tag-box-content"># {{ tag }}</div> -->
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
	margin-right: 1rem;
}

.tag-box-content {
	padding: 4px;
	padding-right: 6px;
	padding-left: 6px;
	font-size: 9px;
	text-align: center;
	color: black;
	opacity: unset;
}

@media screen and (max-width: 600px) {
	.tag-box-content {
		padding: 4px;
		padding-right: 6px;
		padding-left: 6px;
		font-size: 7px;
		text-align: center;
		color: black;
		opacity: unset;
	}
}
@media screen and (min-width: 600px) {
	.tag-box-content {
		padding: 4px;
		padding-right: 6px;
		padding-left: 6px;
		font-size: 12px;
		text-align: center;
		color: black;
		opacity: unset;
	}
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
