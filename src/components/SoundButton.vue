<template>
	<button
		class="sound-button"
		@click="
			() => {
				$emit('send', button.img);
				playSound(button.src);
			}
		"
		:key="button.en"
	>
		<img v-if="button.img" :src="button.img" :alt="button.en" />

		<span v-else>{{ button.en }}</span>
	</button>
</template>

<script>
export default {
	props: {
		button: Object,
	},
	methods: {
		playSound(src) {
			const audio = new Audio(src);
			audio.play();
		},
	},
};
</script>

<style>
.sound-button {
	aspect-ratio: 1;
	border-radius: 50%;
	background: rgb(218, 218, 218);
	border: none;
	transition: transform 75ms ease-out;
}

.sound-button:hover {
	transform: translateY(-0.25rem) scale(1.02);
}

.sound-button:active {
	transform: translateY(0rem) scale(1);
}
</style>
