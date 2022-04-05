<template>
	<main>
		<Menu />
		<section class="profile">
			<section class="profile-card">
				<img class="avatar-img" :alt="alt" :src="avatarSrc" />
				<div class="profile-body">
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
				</div>
			</section>
			<hr />
			<section class="clip">
				<iframe
					width="560"
					height="315"
					src="https://www.youtube-nocookie.com/embed/AjbkMNO-JVQ"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod neque
					assumenda ipsum placeat cupiditate reiciendis deserunt laboriosam vel
					esse dolorem, eaque dolores ullam dicta odio! Adipisci atque, saepe
					maxime nisi ex eius dolor reiciendis at eveniet officia deserunt odit!
					Consectetur doloremque reprehenderit ducimus repudiandae dignissimos
					modi laudantium, quas suscipit nihil!
				</p>
			</section>
			<hr />
			<section class="credits">
				<h3>Credits</h3>
				<div class="credits-body">
					<div class="credits-col">
						<h4>Arsits</h4>
						<ul>
							<li>matthew tao</li>
							<li>matthew tao</li>
							<li>matthew tao</li>
						</ul>
					</div>
					<div class="credits-col">
						<h4>Arsits</h4>
						<ul>
							<li>matthew tao</li>
							<li>matthew tao</li>
							<li>matthew tao</li>
						</ul>
					</div>
					<div class="credits-col">
						<h4>Arsits</h4>
						<ul>
							<li>matthew tao</li>
							<li>matthew tao</li>
							<li>matthew tao</li>
						</ul>
					</div>
				</div>
			</section>
		</section>
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
		grid-template-columns: max-content 1fr;
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

.profile {
	color: var(--purple-300);
	max-width: 55rem;
}

.profile-card {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 2rem;
	width: max-content;
	margin: 0 auto 3rem auto;
	color: var(--purple-500);
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(6px);
	border: 1px solid white;
	padding: 2rem;
	border-radius: 0.5rem;
}

.avatar-img {
	flex-shrink: 0;
	height: 8rem;
	width: 8rem;
	border-radius: 50%;
	margin-top: 1rem;
}

.profile-body {
	display: flex;
	max-width: 45ch;
	flex-direction: column;
	padding: 0;
}

.profile-body ul {
	display: flex;
	list-style: none;
	margin-bottom: 1.5rem;
}

.profile-body li {
	margin-right: 2.5rem;
}

.profile-body li span {
	font-weight: bold;
}

.clip {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 2rem;
}

.clip p {
	max-width: 70ch;
}

.credits {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 2rem;
}

.credits-body {
	display: flex;
	gap: 2rem;
}

.credits-col {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 2rem;
}

hr {
	width: 100%;
	border: 0;
	height: 2px;
	background-color: var(--purple-500);
	margin: 2rem 0;
	border-radius: 999px;
}

h2 {
	font-size: 2rem;
	font-weight: 500;
	margin-bottom: 1.5rem;
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
