<template>
	<main>
		<Menu />
		<div class="profile-card">
			<img class="avatar-img" :alt="alt" :src="avatarSrc" />
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
	</main>
</template>

<script>
import Menu from "../components/Menu.vue";

export default {
	name: "Profile",
	components: {
		Menu,
	},
	props: {
		token: String,
		admin: Boolean,
	},
	data: () => ({
		avatarSrc:
			"https://yt3.ggpht.com/AyUL9W0ltc_aJr_MysuZBx8hRfb1SIVNREgU9kiOO-lqmdhYkEsllmhagertVIwHwa3UAAKy=s88-c-k-c0x00ffffff-no-rj",
		name: "murasakishionch",
		stat1: 0,
		stat2: 1000000,
		stat3: 0,
		description:
			"Murasaku Shion, a witch dressed in purple who has the power to make everyone smile. Also a genius who graduated from Harvard.",
		imageSet: [],
	}),
};
</script>

<style scoped>
main {
	display: grid;
	width: 100%;
	margin: auto;
	padding: 3rem 1rem;
	gap: 2rem;
}

@media screen and (min-width: 650px) {
	main {
		grid-template-columns: max-content minmax(0, 55rem);
	}
}

@media screen and (min-width: 768px) {
	main {
		gap: 2rem;
		padding: 3rem 2rem;
	}
}
@media screen and (min-width: 1440px) {
	main {
		padding: 3rem;
	}
}

.card-list {
	display: flex;
	justify-content: center;
}

.profile-card {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 2rem;
	width: 100%;
	margin-bottom: 3rem;
}

.avatar-img {
	flex-shrink: 0;
	height: 8rem;
	width: 8rem;
	border-radius: 50%;
	margin-top: 1rem;
}

.profile-body {
	max-width: 45ch;
}

section {
	display: flex;
	flex-direction: column;
	padding: 0;
}

h2 {
	font-size: 2rem;
	font-weight: 500;
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
