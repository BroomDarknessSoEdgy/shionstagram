<template>
	<section>
		<div class="tabs">
			<h4>{{ $t("soundboard.sounds") }}</h4>
		</div>
		<div class="category">
			<h4>{{ $t("soundboard.single") }}</h4>
		</div>
		<div class="sounds">
			<SoundButton
				@send="() => bubble(sound.id)"
				v-for="sound in singleSounds"
				:key="sound.title"
				:button="sound"
			/>
		</div>
		<div class="category">
			<h4>{{ $t("soundboard.multiple") }}</h4>
		</div>
		<div class="sounds" style="margin-bottom: 1.5rem">
			<SoundButton
				@send="() => bubble(sound.id)"
				v-for="sound in multipleSounds"
				:key="sound.title"
				:button="sound"
			/>
		</div>
	</section>
</template>

<script>
import SoundButton from "./SoundButton.vue";

export default {
	components: {
		SoundButton,
	},
	props: {
		sounds: Array,
	},
	computed: {
		soundsWithId() {
			return this.sounds.map((sound, i) => ({
				...sound,
				id: i,
			}));
		},
		singleSounds() {
			return this.soundsWithId.filter((sound) => !sound.srcSet);
		},
		multipleSounds() {
			return this.soundsWithId.filter((sound) => sound.srcSet);
		},
	},
	methods: {
		bubble(index) {
			this.$emit("send", index);
		},
	},
};
</script>

<style scoped>
section {
	grid-area: sounds;
	overflow: hidden;
	height: max-content;
}

.tabs {
	display: flex;
	gap: 1rem;
	align-items: center;
	padding: 1rem;
	border-bottom: var(--purple-700) 2px solid;
}

.tabs button {
	position: relative;
	padding: 0;
	border: none;
	background: transparent;
	color: var(--purple-500);
	font-weight: 600;
}

.tabs button::after {
	content: "";
	position: absolute;
	bottom: -0.25rem;
	left: 0;
	right: 0;
	height: 3px;
	border-radius: 999px;
	background-color: var(--purple-500);
	opacity: 0;
	transition: opacity 150ms ease-out;
}

.tabs button[active="true"]::after {
	opacity: 1;
}

.sounds {
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(5.5rem, 1fr));
	padding: 0 1rem;
}

.category {
	display: flex;
	align-items: center;
	color: var(--purple-700);
	padding: 1rem;
	gap: 1rem;
}

.category::after {
	content: "";
	height: 1px;
	width: 100%;
	background: var(--purple-800);
	border-radius: 999px;
}

@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

.sounds-enter-active,
.sounds-leave-active {
	transition: transform 250ms ease-out, opacity 250ms ease-out;
}

.sounds-enter-active {
	transition-delay: 250ms;
}

.sounds-enter-from,
.sounds-leave-to {
	opacity: 0;
	transform: translateY(0.5rem);
}
</style>
