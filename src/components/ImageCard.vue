<template>
	<div class="image-card-wrapper">
		<img fit="cover" :src="src" loading="lazy" />
	</div>
</template>

<script>
export default {
	name: "ImageCard",
	props: {
		src: String,
	},
};
</script>

<style scoped>
.image-card-wrapper {
	position: relative;
	height: 0;
	padding-bottom: 100%;
}

img {
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

@supports (aspect-ratio: 1/1) {
	.image-card-wrapper {
		padding-bottom: 0;
		height: auto;
	}
	img {
		position: static;
		aspect-ratio: 1/1;
	}
}
</style>
