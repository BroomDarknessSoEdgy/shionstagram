<template>
	<div class="modal">
		<div
			title="Minimize post"
			class="modal-bg"
			v-on:click="$emit('onClickOff')"
		/>
		<div class="modal-body">
			<div class="content">
				<img class="main" :src="`${apiURL}/images/${post.image}`" alt="" />
				<img class="bg" :src="`${apiURL}/images/${post.image}`" alt="" />
			</div>

			<header>
				<div class="profile">
					<img class="avatar" :src="profilePictures[post.pfp]" />
					<div class="sender">
						<h4 class="name">{{ post.name }}</h4>
						<p class="twitter">
							{{ post.twitter[0] === "@" ? post.twitter : "@" + post.twitter }}
						</p>
						<p class="location">{{ post.location }}</p>
					</div>
				</div>
				<div class="actions">
					<img src="../assets/icons/Heart.svg" />
					<img src="../assets/icons/Comment.svg" />
					<img class="mg-left-auto" src="../assets/icons/Bookmark.svg" />
				</div>
			</header>

			<section>
				<p>
					{{ post.message }}
				</p>
			</section>
		</div>
	</div>
</template>

<script>
import { profilePictures } from "../data/profilePictures";
import { apiURL } from "../config/config";

export default {
	props: {
		post: Object,
	},
	data: () => ({
		apiURL,
		profilePictures,
	}),
};
</script>

<style scoped>
.modal-body::-webkit-scrollbar,
.modal-body section::-webkit-scrollbar {
	width: 8px;
}

.modal-body::-webkit-scrollbar-track,
.modal-body section::-webkit-scrollbar-track {
	background-color: var(--purple-700);
}

.modal-body::-webkit-scrollbar-thumb,
.modal-body section::-webkit-scrollbar-thumb {
	background: var(--purple-500);
}

.modal {
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9999;
	isolation: isolate;
}

.modal-bg {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	background: rgba(0, 0, 0, 0.5);
}

.modal-body {
	display: grid;
	grid-template-areas:
		"profile"
		"content"
		"message";
	grid-template-columns: 1fr;
	grid-template-rows: auto minmax(25rem, 1fr) auto;
	margin: 0 2rem;
	width: 100%;
	max-width: 70rem;
	height: 70%;
	background: var(--purple-800);
	box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
	border-radius: 0.5rem;
	animation: fadeInUp 250ms ease-out;
	overflow-y: auto;
}

@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(1rem);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.content {
	position: relative;
	isolation: isolate;
	grid-area: content;
	width: 100%;
	height: 100%;
	overflow: hidden;
}

.content .main {
	object-fit: contain;
	width: 100%;
	height: 100%;
}

.content .bg {
	position: absolute;
	z-index: -1;
	object-fit: cover;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	filter: blur(1rem) brightness(0.8);
}

header {
	position: sticky;
	top: 0;
	grid-area: profile;
	display: flex;
	flex-direction: column;
	padding-bottom: 1rem;
	border-bottom: var(--purple-700) 2px solid;
	background: #fff;
	padding: 1rem 1rem 0 1rem;
	box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
}

.profile {
	display: flex;
	align-items: center;
}

.twitter {
	font-size: 0.75rem;
	color: #ada6ad;
}

.avatar {
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
}

.sender {
	margin-left: 0.5rem;
}

.actions {
	display: flex;
	gap: 0.5rem;
	align-items: center;
	margin: 1rem 0;
}

.mg-left-auto {
	margin-left: auto;
}

section {
	grid-area: message;
	background: #fff;
	padding: 1rem;
}

@media screen and (min-width: 768px) {
	.modal-body {
		grid-template-areas:
			"content profile"
			"content message";
		grid-template-columns: 1fr minmax(30ch, 25%);
		grid-template-rows: auto 1fr;
	}

	header {
		box-shadow: none;
	}

	section {
		overflow-y: auto;
	}
}
</style>
