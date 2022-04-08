<template>
	<a class="card">
		<div class="card-header">
			<img class="avatar" src="../assets/images/messageHistory/shion.jpg" />
			<div class="sender">
				<h4 class="name">{{ name }}</h4>
				<p class="location">{{ location }}</p>
			</div>
			<img class="more" src="../assets/icons/more.svg" />
		</div>
		<div class="card-body">
			<img
				:src="`${apiURL}/images/${src}`"
				loading="lazy"
				:alt="`${name}'s image submission`"
			/>
		</div>
	</a>
</template>

<script>
import { apiURL } from "../config/config";

export default {
	props: {
		src: String,
		name: String,
		location: String,
	},
	data: () => ({
		apiURL,
	}),
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

.card-body img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	aspect-ratio: 6 / 5;
}
</style>
