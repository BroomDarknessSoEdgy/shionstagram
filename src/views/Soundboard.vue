<template>
	<main>
		<aside class="sidebar">
			<Menu />
			<MessageHistory />
		</aside>
		<section class="messages">
			<h3>{{ $t("soundboard.messages") }}</h3>
			<TransitionGroup class="sounds" name="sounds" tag="div">
				<img
					v-for="message in sentMessages"
					:key="message.id"
					:src="message.img"
					alt=""
				/>
			</TransitionGroup>
		</section>
		<SoundSelector @send="(img) => addMessage(img)" :sounds="sounds" />
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
}

.sidebar {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.sidebar > * {
	position: static;
}

section {
	background-color: white;
	border-radius: 0.5rem;
	box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
}

.messages {
	padding: 1rem;
	height: min(80vh, 35rem);
	overflow: auto;
}

@media screen and (min-width: 650px) {
	main {
		grid-template-columns: auto 2fr 1fr;
	}

	.sidebar {
		position: sticky;
		top: 6.5rem;
	}

	.messages {
		position: sticky;
		top: 6.5rem;
		height: 35rem;
	}
}

@media screen and (min-width: 768px) {
	main {
		gap: 2rem;
		padding: 3rem 2rem;
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
