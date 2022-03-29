<template>
	<section>
		<div class="sounds">
			<button
				@click="playSound(sound.src)"
				v-for="sound in sounds"
				:key="sound.en"
			>
				{{ sound.en }}
			</button>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		sounds: Array,
	},
	methods: {
		playSound(src) {
			const audio = new Audio(src);
			audio.play();
		},
	},
};
</script>

<style scoped>
section {
	padding: 1rem;
}

.sounds {
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(5.5rem, 1fr));
}

button {
	aspect-ratio: 1;
	border-radius: 50%;
	background: rgb(218, 218, 218);
	border: none;
}
</style>
