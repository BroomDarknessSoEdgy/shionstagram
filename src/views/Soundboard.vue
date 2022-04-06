<template>
	<main>
		<aside class="sidebar">
			<Menu />
			<MessageHistory />
		</aside>
		<section class="messages">
			<header>
				<h4>{{ $t("soundboard.messages") }}</h4>
			</header>
			<div class="sounds" ref="sounds">
				<TransitionGroup name="sounds">
					<img
						v-for="message in sentMessages"
						:key="message.id"
						:src="message.img"
						class="sound-art"
						alt=""
					/>
				</TransitionGroup>
			</div>
		</section>
		<SoundSelector @send="addMessage" :sounds="sounds" />
	</main>
</template>

<script>
import { sounds } from "../data/soundboard/sounds";

import Menu from "../components/Menu.vue";
import MessageHistory from "../components/MessageHistory.vue";
import SoundSelector from "../components/SoundSelector.vue";

export default {
	name: "Soundboard",
	components: {
		Menu,
		MessageHistory,
		SoundSelector,
	},
	data() {
		return {
			sounds,
			sentMessages: [],
		};
	},
	methods: {
		addMessage(message) {
			this.sentMessages.push(message);

			// wait for update before scrolling to bottom
			setTimeout(() => {
				const soundsContainer = this.$refs.sounds;
				soundsContainer.scrollTop = soundsContainer.scrollHeight;
			}, 5);
		},
	},
};
</script>

<style scoped>
main {
	position: relative;
	width: 100%;
	padding: 3rem 1rem;
	display: grid;
	gap: 1rem;
	grid-template-columns: 1fr;
	grid-template-areas:
		"sidebar"
		"messages"
		"sounds";
}

.sidebar {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	grid-area: sidebar;
}

.sidebar > * {
	position: static;
}

section {
	overflow: hidden;
	background-color: white;
	border-radius: 0.5rem;
	box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
}

.messages {
	grid-area: messages;
	display: flex;
	flex-direction: column;
	height: 90vh;
	min-height: 35rem;
}

.messages header {
	background: white;
	padding: 1rem 1.5rem;
	border-bottom: var(--purple-700) 2px solid;
}

@media screen and (min-width: 650px) {
	main {
		grid-template-columns: auto 1fr;
		grid-template-areas:
			"sidebar messages"
			"sidebar sounds";
	}
}

@media screen and (min-width: 960px) {
	main {
		grid-template-columns: auto 2fr 1fr;
		grid-template-areas: "sidebar messages sounds";
		padding: 3rem 2rem;
		gap: 2rem;
	}

	.sidebar {
		gap: 2rem;
	}
}

@media screen and (min-width: 1440px) {
	main {
		padding: 3rem;
	}
}

.sounds {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 0.5rem;
	padding: 2rem 1rem;
	overflow-y: scroll;
}

.sounds::-webkit-scrollbar {
	background-color: white;
	width: 16px;
}

.sounds::-webkit-scrollbar-track {
	background-color: white;
}

.sounds::-webkit-scrollbar-thumb {
	background-color: var(--purple-700);
	border-radius: 16px;
	border: 4px solid white;
}

.sounds::-webkit-scrollbar-button {
	display: none;
}

.sound-art {
	max-width: 10rem;
}

.sounds-enter-active,
.sounds-leave-active {
	transition: transform 250ms ease-out, opacity 250ms ease-out;
}

.sounds-enter-from,
.sounds-leave-to {
	opacity: 0;
	transform: translateY(0.5rem);
}
</style>
