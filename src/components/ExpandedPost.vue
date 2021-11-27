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
				<div class="actions">
					<img src="../assets/icons/Heart.svg" />
					<img src="../assets/icons/Comment.svg" />
					<img src="../assets/icons/Send.svg" />
					<img class="mg-left-auto" src="../assets/icons/Bookmark.svg" />
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac nunc
					condimentum, fringilla mi id, efficitur libero. Ut imperdiet mollis
					leo id elementum. Phasellus commodo leo sem, vitae gravida nulla
					iaculis ac. Nunc aliquam nec massa eget dictum. Cras non sodales
					dolor. Suspendisse rutrum, tortor id gravida ornare, odio sapien
					feugiat quam, eget accumsan ante odio sed arcu. Duis nec hendrerit
					lacus, id facilisis elit. Aenean sollicitudin magna dignissim
					scelerisque pellentesque.
				</p>
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

header {
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

.actions {
	display: flex;
	gap: 0.5rem;
	align-items: center;
	margin: 1rem 0;
}

.mg-left-auto {
	margin-left: auto;
}
</style>
