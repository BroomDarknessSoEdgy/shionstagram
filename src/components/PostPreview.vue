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
		<div class="card-body">
			<img
				v-if="src !== ''"
				:src="src"
				loading="lazy"
				:alt="`${name}'s image submission`"
			/>
			<p v-else>{{ messagePreview }}</p>
		</div>
	</a>
</template>

<script>
import { profilePictures } from "../data/profilePictures";

export default {
	props: {
		src: String,
		name: String,
		location: String,
		pfp: Number,
		message: String,
	},
	data: () => ({
		profilePictures,
	}),
	computed: {
		messagePreview() {
			return this.message.length > 110
				? this.message.substring(0, 110) + "..."
				: this.message;
		},
	},
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
}

.card-body {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--purple-800);
	background-image: linear-gradient(
		135deg,
		var(--purple-600) 0%,
		hsl(318, 44%, 75%) 100%
	);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	color: white;
	width: 100%;
	height: 100%;
	aspect-ratio: 6 / 5;
	overflow: hidden;
}

.card-body img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	aspect-ratio: 6 / 5;
}
</style>
