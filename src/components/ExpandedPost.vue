<template>
	<div class="modal">
		<div class="modal-body"></div>
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
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 9999;
}
</style>
