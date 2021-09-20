<template>
	<div class="profile-card">
		<div class="avatar-wrapper">
			<img class="avatar-img" :alt="alt" :src="avatarSrc" />
		</div>
		<section class="profile-body">
			<h2>{{ name }}</h2>
			<ul class="profile-stats">
				<li>
					<span>{{ stat1 }}</span> post
				</li>
				<li>
					<span>{{ stat2 }}</span> followers
				</li>
				<li>
					<span>{{ stat3 }}</span> following
				</li>
			</ul>
			<div class="description">{{ description }}</div>
		</section>
	</div>
</template>

<script>
export default {
	name: "ProfileCard",
	props: {
		avatarSrc: String,
		alt: String,
		name: String,
		stat1: Number,
		stat2: Number,
		stat3: Number,
		description: String,
	},
};
</script>

<style scoped>
.profile-card {
	display: grid;
	grid-template-columns: 18rem 1fr;
	width: 100%;
	margin-bottom: 3rem;
}

.avatar-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
}

.avatar-img {
	height: 10rem;
	width: 10rem;
	border-radius: 50%;
}

section {
	display: flex;
	flex-basis: 30px;
	flex-grow: 2;
	flex-direction: column;
	padding: 0;
}

h2 {
	font-size: 2rem;
	font-weight: 300;
	margin-bottom: 1.5rem;
}

ul {
	display: flex;
	list-style: none;
	margin-bottom: 1.5rem;
}

li {
	margin-right: 2.5rem;
}

li span {
	font-weight: bold;
}

button {
	font-size: 14px;
	line-height: 18px;
	appearance: none;
	padding: 5px 9px;
	background: 0 0;
	border-radius: 4px;
	margin: 0;
}
</style>
