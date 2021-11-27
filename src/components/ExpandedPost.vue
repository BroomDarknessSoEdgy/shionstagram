<template>
	<div class="modal">
		<div
			title="Minimize post"
			class="modal-bg"
			v-on:click="$emit('onClickOff')"
		/>
		<div class="modal-body">
			<div class="content"><img :src="post.location" alt="" /></div>
			<aside>
				<header>
					<img
						class="avatar"
						src="https://yt3.ggpht.com/AyUL9W0ltc_aJr_MysuZBx8hRfb1SIVNREgU9kiOO-lqmdhYkEsllmhagertVIwHwa3UAAKy=s88-c-k-c0x00ffffff-no-rj"
					/>
					<div class="sender">
						<h4 class="name">Synalra</h4>
						<p class="location">Finland, Mars</p>
					</div>
				</header>
			</aside>
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
	grid-template-columns: 1fr minmax(25ch, 25%);
	grid-template-rows: 100%;
	margin: 0 2rem;
	overflow: hidden;
	width: 100%;
	max-width: 70rem;
	max-height: 80%;
	background: var(--purple-800);
	box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
	border-radius: 0.5rem;
	animation: fadeInUp 250ms ease-out;
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
	width: 100%;
	height: 100%;
}

.content img {
	object-fit: contain;
	width: 100%;
	height: 100%;
}

aside {
	background: #fff;
	padding: 1rem;
}

aside header {
	display: flex;
	align-items: center;
	padding-bottom: 1rem;
	border-bottom: var(--purple-700) 2px solid;
}

.avatar {
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
}

.sender {
	margin-left: 0.5rem;
}
</style>
