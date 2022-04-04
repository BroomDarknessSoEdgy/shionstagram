<template>
	<main>
		<Menu />
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
			"Murasaki Shion Shionstagram account. Commodo aliqua sunt laborum irure aliqua ipsum. Nisi duis quis do et. Duis nisi cupidatat adipisicing esse Lorem ipsum sunt sint eu minim duis duis reprehenderit velit.",
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
