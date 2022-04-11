<template>
	<main>
		<aside class="sidebar">
			<Menu />
			<MessageHistory />
		</aside>
		<section
			class="messages"
			style="--el-color-primary: #7c4785; --el-text-color-primary: #aaa"
		>
			<header>
				<h4>{{ $t("soundboard.messages") }}</h4>
				<el-switch
					:active-text="$t('soundboard.online')"
					:inactive-text="$t('soundboard.offline')"
					v-model="enabled"
					active-color="#a275a9"
					v-on:change="(val) => (val ? connect() : unsubscribe())"
					>{{ enabled ? "online" : "offline" }}</el-switch
				>
			</header>
			<div class="sounds" ref="sounds">
				<TransitionGroup name="sounds">
					<div
						v-for="(message, i) in messages"
						:key="message.id ?? i"
						:class="isOwnMessage(message) ? 'self-msg' : 'msg'"
						:style="`--hue: ${parseInt(message.username) % 360}`"
					>
						<h5>{{ "Shiokko n°" + parseInt(message.username) }}</h5>
						<img
							:src="sounds[parseInt(message.soundId)]?.img"
							class="sound-art"
							alt=""
						/>
					</div>
				</TransitionGroup>
			</div>
			<footer>
				<h4>{{ $t("soundboard.volume_self") }}</h4>
				<el-slider
					v-model="volume_self"
					label="adjust volume"
					:format-tooltip="(val) => `${val}%`"
				/>
				<h4>{{ $t("soundboard.volume_others") }}</h4>
				<el-slider
					v-model="volume_others"
					label="adjust volume"
					:format-tooltip="(val) => `${val}%`"
				/>
			</footer>
		</section>
		<SoundSelector @send="sendMessage" :sounds="sounds" />
	</main>
</template>

<script>
import { sounds } from "../data/soundboard/sounds";

import Menu from "../components/Menu.vue";
import MessageHistory from "../components/MessageHistory.vue";
import SoundSelector from "../components/SoundSelector.vue";
import fdb from "../config/firebase.js";
import { ref, push, onValue, query, limitToLast } from "firebase/database";
import { Howl } from "howler";

import { ElSwitch, ElSlider } from "element-plus";

const dbRef = ref(fdb, "messages");

export default {
	name: "Soundboard",
	components: {
		Menu,
		MessageHistory,
		SoundSelector,
		ElSwitch,
		ElSlider,
	},
	created: function () {
		this.username = Math.floor(Math.random() * 100000);
	},
	data() {
		return {
			sounds,
			messages: [],
			volume_self: 100,
			volume_others: 100,
			enabled: true, // choice between online/offline
			allowedToSend: true, // avoid db spam
			unsubscribe: null,
		};
	},
	methods: {
		connect() {
			// listen for changes in chat db, then update
			this.unsubscribe = onValue(query(dbRef, limitToLast(20)), (snapshot) => {
				let data = snapshot.val();
				let messages = [];
				if (data)
					Object.keys(data).forEach((key) => {
						messages.push({
							id: key,
							...data[key],
						});
					});
				this.messages = messages;
				this.scrollDown();
				this.playLast();
			});
		},
		isOwnMessage(message) {
			return message.username == this.username;
		},
		sendMessage(message) {
			const m = {
				soundId: message,
				username: this.username,
			};
			const dbRef = ref(fdb, "messages");

			// only send online if allowed to
			if (this.enabled && this.allowedToSend) {
				push(dbRef, m);
				this.allowedToSend = false;

				// delay of 1 sec between sending online messages
				setTimeout(() => {
					this.allowedToSend = true;
				}, 1000);
			} else if (!this.enabled) {
				this.messages.push(m);
				this.playLast();
			}
			this.scrollDown();
		},
		scrollDown() {
			setTimeout(() => {
				const soundsContainer = this.$refs.sounds;
				soundsContainer.scrollTop = soundsContainer.scrollHeight;
			}, 25);
		},
		// play last message's sound
		playLast() {
			const latestMessage = this.messages[this.messages.length - 1];

			const sound = sounds[latestMessage.soundId];
			const src = sound.srcSet
				? sound.srcSet[Math.floor(Math.random() * sound.srcSet.length)]
				: sound.src;

			const audio = new Howl({
				src: [src],
				preload: true,
				volume: this.isOwnMessage(latestMessage)
					? this.volume_self / 100
					: this.volume_others / 100,
			});
			audio.play();
		},
	},
	mounted() {
		this.connect();
	},
	unmounted() {
		this.unsubscribe();
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
	height: 100vh;
	min-height: 35rem;
}

.messages header {
	background: white;
	padding: 1rem 1.5rem;
	border-bottom: var(--purple-700) 2px solid;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.messages footer {
	background: white;
	padding: 0.5rem 1.5rem;
	border-top: var(--purple-700) 2px solid;
	display: grid;
	gap: 0 1.5rem;
	align-items: center;
	grid-template-columns: auto 1fr;
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

.msg {
	color: hsl(var(--hue, 292), 70%, 50%);
	margin-right: auto;
}

.self-msg {
	color: var(--purple-700);
	text-align: right;
}
</style>
