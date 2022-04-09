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
		:class="button.img ? 'withImg' : 'textOnly'"
	>
		<img v-if="button.img" :src="button.img" :alt="button.title" />
		<span v-else>{{ button.title }}</span>
	</button>
</template>

<script>
import { Howl } from "howler";

export default {
	props: {
		button: Object,
	},
	methods: {
		playSound(src) {
			const audio = new Howl({
				src: [src],
				preload: true,
				html5: true,
			});
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
	display: flex;
	justify-content: center;
	aspect-ratio: 1;
	border: none;
	transition: transform 75ms ease-out;
	background: var(--purple-800);
	border: 2px solid var(--purple-700);
	padding: 0;
	border-radius: 50%;
	overflow: hidden;
}

.sound-button.textOnly {
	padding: 0.25rem;
	align-items: center;
}

.sound-button.withImg {
	padding: 0.125rem 0.125rem 0 0.125rem;
	align-items: flex-end;
}

.sound-button:hover {
	transform: translateY(-0.25rem) scale(1.02);
}

.sound-button:active {
	transform: translateY(0rem) scale(1);
}
</style>
