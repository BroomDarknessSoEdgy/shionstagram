<template>
	<a class="card">
		<div class="card-header">
			<img class="avatar" :src="profilePictures[pfp]" />
			<div class="sender">
				<h4 class="name">{{ name }}</h4>
				<p class="location">{{ location }}</p>
			</div>
			<img class="more" src="../assets/icons/more.svg" />
		</div>
		<div class="card-body" v-on:mouseover="onHover" v-on:mouseleave="onLeave">
			<img
				:src="`${apiURL}/images/${src}`"
				loading="lazy"
				:alt="`${name}'s image submission`"
			/>
			<span  class="message" v-bind:class="{ leaveMessage: !displayMessage() }">{{ message }}</span>
		</div>
	</a>
</template>

<script>
import { profilePictures } from "../data/profilePictures";
import { apiURL } from "../config/config";

export default {
	props: {
		src: String,
		message: String,
		name: String,
		location: String,
		pfp: Number,
	},
	data: () => ({
		apiURL,
		profilePictures,
		initialHover: true,
		hover: false,
	}),
	mounted() {
		setTimeout(() => {
			this.initialHover = false;
		}, 1500)
	},
	computed: {
		messagePreview() {
			return this.message.length > 50
				? this.message.substring(0, 50) + "..."
				: this.message;
		},
	},
	methods: {
		displayMessage() {
			return this.initialHover || this.hover;
		},
		onHover() {
			this.hover = true;
		},
		onLeave() {
			this.hover = false;
		}
	}
};
</script>

<style scoped>
.card {
	display: flex;
	flex-direction: column;
	border-radius: 0.5rem;
	box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
	overflow: hidden;
	background-color: var(--purple-800);
	height: 100%;
}

.card-header {
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;
	background-color: #ffffff;
}

.avatar {
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
}

.sender {
	margin-left: 0.5rem;
}

.more {
	margin-left: auto;
}

.location {
	font-size: 0.75rem;
	color: #ada6ad;
}

.card .card-body {
	width: 100%;
	height: 100%;
	position: relative;
}

.card-body img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	aspect-ratio: 6 / 5;
}

.message {
	bottom: 0;
	position: absolute;
	padding: 0.5em;
	background-color: rgba(255, 255, 255, .7);
	color: #81478a;
	font-weight: bold;
	width: 100%;
	max-height: 4.9em;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}

.leaveMessage {
	opacity: 0;
	animation-name: fadeOut;
	animation-duration: 1s;
}

@keyframes fadeOut {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}
</style>
