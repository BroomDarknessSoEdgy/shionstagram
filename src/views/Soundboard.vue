<template>
	<main>
		<aside class="sidebar">
			<Menu />
			<MessageHistory />
		</aside>
		<section class="messages">
			<h1>hello</h1>
		</section>
		<SoundSelector :sounds="sounds" />
	</main>
</template>

<script>
import Menu from "../components/Menu.vue";
import MessageHistory from "../components/MessageHistory.vue";
import SoundSelector from "../components/SoundSelector.vue";

const sounds = [
	{
		en: "Yay",
		jp: "Yatta",
		src: "/sounds/yayyyy.mp3",
	},
	{
		en: "Yay",
		jp: "Yatta",
		src: "/sounds/yayyyy.mp3",
	},
	{
		en: "Yay",
		jp: "Yatta",
		src: "/sounds/yayyyy.mp3",
	},
	{
		en: "Yay",
		jp: "Yatta",
		src: "/sounds/yayyyy.mp3",
	},
	{
		en: "Yay",
		jp: "Yatta",
		src: "/sounds/yayyyy.mp3",
	},
];

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
		};
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

@media screen and (min-width: 650px) {
	main {
		grid-template-columns: auto 2fr 1fr;
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

.sidebar {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	position: sticky;
	top: 6.5rem;
}

.sidebar > * {
	position: static;
}

section {
	background-color: white;
	border-radius: 0.5rem;
	box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
}
</style>
