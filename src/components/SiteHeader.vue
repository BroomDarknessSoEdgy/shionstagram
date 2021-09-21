<template>
	<header>
		<router-link to="/">
			<img class="nav-logo" src="../assets/images/Logo.png" alt="" />
		</router-link>

		<input class="mock-search" type="text" placeholder="Search" />

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
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	width: 100%;
	padding: 0.5rem 2rem;
	background-color: #fff;
	align-items: center;
}

.nav-logo {
	height: 2rem;
	justify-self: left;
}

.mock-search {
	border: 1px solid rgba(0, 0, 0, 0.34);
	height: 2rem;
	min-width: 10rem;
	width: 75%;
	border-radius: 0.25rem;
	padding: 0.5rem;
	background: transparent;
	justify-self: center;
}

.nav-icons {
	display: flex;
	justify-content: center;
	align-items: center;
	justify-self: right;
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
