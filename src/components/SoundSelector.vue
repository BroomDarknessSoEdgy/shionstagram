<template>
	<section>
		<div class="tabs">
			<button
				v-for="(category, i) in sounds"
				:key="category.en"
				:active="i === currentCategory"
				@click="() => (currentCategory = i)"
			>
				{{ category.en }}
			</button>
		</div>
		<TransitionGroup class="sounds" name="sounds" tag="div">
			<SoundButton
				@send="(img) => bubble(img)"
				v-for="button in sounds[currentCategory].buttons"
				:key="button.en"
				:button="button"
			/>
		</TransitionGroup>
	</section>
</template>

<script>
import SoundButton from "./SoundButton.vue";

let messagesSent = 0;

export default {
	components: {
		SoundButton,
	},
	props: {
		sounds: Array,
	},
	data() {
		return {
			currentCategory: 0,
		};
	},
	methods: {
		bubble(img) {
			this.$emit("send", { img, id: messagesSent });
			messagesSent++;
		},
	},
};
</script>

<style scoped>
section {
	overflow: hidden;
	height: max-content;
}

.tabs {
	display: flex;
	gap: 1rem;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 1.5rem;
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
	padding: 1.5rem 1rem;
}

@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@media screen and (min-width: 650px) {
	section {
		position: sticky;
		top: 6.5rem;
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
