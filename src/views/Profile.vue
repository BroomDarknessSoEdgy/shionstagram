<template>
	<main>
		<login-animation :callback="animationFinished" v-if="isAnimationPlaying" />
		<profile-card
			:avatarSrc="avatarSrc"
			alt="Shion's profile picture"
			:name="name"
			:stat1="stat1"
			:stat2="stat2"
			:stat3="stat3"
			:description="description"
		/>
		<div class="card-list">
			<image-card-list :imageSet="imageSet" :admin="admin" :token="token" />
		</div>
	</main>
</template>

<script>
import config from "../config";
import ProfileCard from "../components/ProfileCard.vue";
import ImageCardList from "../components/ImageCardList.vue";

export default {
	name: "Profile",
	mounted() {
		if (this.admin) {
			if (!this.token) location.replace("/api/connect/discord");
		}

		fetch(`${config.origin}/messages`)
			.then((response) => response.json())
			.then((data) => {
				this.imageSet = data.rows;
			});
	},
	components: {
		ProfileCard,
		ImageCardList,
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
	margin: auto;
	max-width: 60rem;
	padding: 3rem 1rem;
}

.card-list {
	display: flex;
	justify-content: center;
}
</style>
