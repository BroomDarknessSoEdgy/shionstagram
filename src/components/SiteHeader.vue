<template>
	<header>
		<router-link to="/">
			<img class="nav-logo" src="../assets/images/Logo.png" alt="" />
		</router-link>

		<div class="nav-icons">
			<router-link to="/">
				<img class="icon" src="../assets/icons/Reels.svg" />
			</router-link>
			<router-link to="/profile">
				<img class="icon" src="../assets/icons/Notifiations.svg" />
			</router-link>
			<router-link to="/submit">
				<img class="icon" src="../assets/icons/Send.svg" />
			</router-link>
			<router-link to="/profile">
				<img
					class="profile-img"
					src="https://yt3.ggpht.com/AyUL9W0ltc_aJr_MysuZBx8hRfb1SIVNREgU9kiOO-lqmdhYkEsllmhagertVIwHwa3UAAKy=s88-c-k-c0x00ffffff-no-rj"
				/>
			</router-link>
		</div>
	</header>
</template>

<script>
export default {
	name: "SiteHeader",
	props: {},
};
</script>

<style scoped>
header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 0.5rem 3rem;
	background-color: #fff;
}

a {
	width: max-content;
}

.nav-logo {
	height: 2rem;
	justify-self: left;
}

.nav-icons {
	display: flex;
	justify-content: center;
	align-items: center;
}

.profile-img {
	height: 2.5rem;
	border-radius: 50%;
	margin-left: 2rem;
}

.icon {
	margin-left: 1.5rem;
}

.nav-icons a {
	font-weight: bold;
	color: #444;
	text-decoration: none;
}
</style>
