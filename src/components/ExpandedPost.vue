<template>
	<div class="modal">
		<div class="modal-body">
			<div class="content"><img :src="post.location" alt="" /></div>
			<div class="desc">hello i am describing</div>
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

<style>
.modal {
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 9999;
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
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	border-radius: 0.5rem;
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

.desc {
	background: #fff;
}
</style>
