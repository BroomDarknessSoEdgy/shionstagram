<template>
	<button
		class="sound-button"
		@click="
			() => {
				$emit('send', button.img);
				button.srcSet
					? playSound(button.srcSet[randomInteger(0, button.srcSet.length - 1)])
					: playSound(button.src);
			}
		"
		:key="button.en"
		:class="button.img ? 'withImg' : 'textOnly'"
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
		randomInteger(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		},
	},
};
</script>

<style>
.sound-button {
	aspect-ratio: 1;
	border: none;
	transition: transform 75ms ease-out;
	background: transparent;
}

.sound-button.textOnly {
	background: rgb(218, 218, 218);
	border-radius: 50%;
}

.sound-button:hover {
	transform: translateY(-0.25rem) scale(1.02);
}

.sound-button:active {
	transform: translateY(0rem) scale(1);
}
</style>
