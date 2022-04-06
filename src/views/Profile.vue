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
							<span>{{ posts }}</span> posts
						</li>
						<li>
							<span>{{ followers }}</span> followers
						</li>
						<li>
							<span>{{ following }}</span> following
						</li>
					</ul>
					<div class="description">{{ description }}</div>
					<div class="profile-socials">
						<a
							href="https://www.youtube.com/channel/UCXTpFs_3PqI41qX2d9tL2Rw"
							target="_blank"
							rel="noopener noreferrer"
							><img src="../assets/icons/YouTube.png" alt=""
						/></a>
						<a
							href="https://twitter.com/murasakishionch"
							target="_blank"
							rel="noopener noreferrer"
							><img src="../assets/icons/Twitter.png" alt=""
						/></a>
					</div>
				</div>
			</section>
			<hr />
			<section class="clip">
				<iframe
					src="https://www.youtube-nocookie.com/embed/AjbkMNO-JVQ"
					title="YouTube video player"
					frameborder="0"
					class="clip-embed"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
				<p>
					This project has been started with the passing thought of "Wouldn't it
					be funny to make something that Shion hates to celebrate her getting 1
					million subcribers?" and so we went on making an Instagram-like site
					gathering messages of fans as well as other features for the witch we
					all deeply appreciate. We wanted to make something original that was
					more than just a place that gathered fan messages, and got the help of
					multiple artists for the soundboard. People from the EN Shiokko server
					also helped gathering fun sound clips. All in all, this is the result
					of fans, JP and overseas, who wanted to show their appreciation to
					Murasaki Shion who worked really hard to get where she is now. And
					again, congratulations for getting 1 million subscribers.
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
		posts: 0,
		followers: "1M",
		following: 0,
		description:
			"Murasaki Shion is a Vtuber who debuted on August 17th 2018 as a member of Hololive's 2nd generation. She's a self proclaimed genius who graduated from Harvard and whose specialty is dark magic.\n\nShe's more commonly known as a brat who likes to make fun of people, but inside she's a really nice and kind girl who thinks a lot about others. Although her proficiency in dark magic has not been showcased, she certainly has the power to make everyone smile.",
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
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4rem;
	margin: 0 auto;
	color: var(--purple-200);
	width: 100%;
	max-width: 55rem;
}

.profile-card {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 2rem;
	color: var(--purple-400);
	background: hsla(292, 30%, 80%, 0.2);
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
	max-width: 60ch;
	flex-direction: column;
	padding: 0;
	white-space: pre-line;
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

.profile-socials {
	margin-top: 1rem;
	display: flex;
	flex-direction: row;
	gap: 1rem;
}

.profile-socials img {
	height: 2.5rem;
	width: 2.5rem;
	object-fit: contain;
}

.clip {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 2rem;
}

.clip-embed {
	aspect-ratio: 16 / 9;
	height: 100%;
	width: 100%;
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
