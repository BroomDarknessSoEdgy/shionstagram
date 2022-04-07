<template>
	<div class="modal">
		<div
			title="Minimize post"
			class="modal-bg"
			v-on:click="$emit('onClickOff')"
		/>
		<div class="modal-body">
			<header>
				<div class="profile">
					<img
						class="avatar"
						src="https://yt3.ggpht.com/AyUL9W0ltc_aJr_MysuZBx8hRfb1SIVNREgU9kiOO-lqmdhYkEsllmhagertVIwHwa3UAAKy=s88-c-k-c0x00ffffff-no-rj"
					/>
					<div class="sender">
						<h4 class="name">{{ post.name }}</h4>
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
export default {
	props: {
		post: Object,
	},
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
		"message";
	grid-template-columns: 1fr;
	grid-template-rows: auto minmax(25rem, 1fr) auto;
	margin: 0 2rem;
	width: 100%;
	max-width: 45ch;
	max-height: 80%;
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
	header {
		box-shadow: none;
	}

	section {
		overflow-y: auto;
	}
}
</style>
