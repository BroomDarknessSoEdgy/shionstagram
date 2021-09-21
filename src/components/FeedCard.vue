<template>
	<div class="card">
		<div class="card-header">
			<img
				class="avatar"
				src="https://yt3.ggpht.com/AyUL9W0ltc_aJr_MysuZBx8hRfb1SIVNREgU9kiOO-lqmdhYkEsllmhagertVIwHwa3UAAKy=s88-c-k-c0x00ffffff-no-rj"
			/>
			<div class="sender">
				<h4 class="name">Synalra</h4>
				<p class="location">Finland, Mars</p>
			</div>
			<img class="more" src="../assets/icons/more.svg" />
		</div>
		<div class="card-body">
			<img src="../assets/images/placeholder.jpg" />
		</div>
	</div>
</template>

<style scoped>
.card {
	display: flex;
	flex-direction: column;
	border-radius: 0.5rem;
	box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.15);
	overflow: hidden;
}

.card-header {
	display: flex;
	align-items: center;
	background-color: #fff;
	padding: 0.5rem 1rem;
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
