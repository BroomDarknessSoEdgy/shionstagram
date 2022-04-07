<template>
	<aside>
		<div class="profile">
			<img
				src="../assets/images/messageHistory/shion.jpg"
				alt=""
				class="picture"
			/>
			<div class="profile-info">
				<h4>{{ $t("murasaki_shion") }}</h4>
				<p>{{ $t("virtual_tokyo_japan") }}</p>
			</div>
			<img class="more" src="../assets/icons/Dropdown.svg" />
		</div>
		<nav>
			<router-link to="/">
				<img
					class="icon"
					src="../assets/icons/Home.svg"
					style="transform: scale(1.15)"
				/>
				<span>{{ $t("menu.feed") }}</span>
			</router-link>
			<router-link to="/profile">
				<img
					class="icon"
					src="../assets/icons/Profile_icon.png"
					style="transform: scale(1.15)"
				/>
				<span>{{ $t("menu.profile") }}</span>
			</router-link>
			<router-link to="/soundboard">
				<img class="icon" src="../assets/icons/Reels.svg" />
				<span>{{ $t("menu.soundboard") }}</span>
			</router-link>
			<router-link to="/submit">
				<img class="icon" src="../assets/icons/Send.svg" />
				<span>{{ $t("menu.submit") }}</span>
			</router-link>
		</nav>
	</aside>
</template>

<style scoped>
aside {
	background: #fff;
	padding: 1rem 1rem 2rem 1rem;
	box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.15);
	border-radius: 0.5rem;
	height: max-content;
}

@media screen and (min-width: 650px) {
	aside {
		position: sticky;
		top: 6.5rem;
	}
}

.profile {
	display: flex;
	align-items: center;
	margin-bottom: 2rem;
	margin-right: 1.5rem;
	gap: 1rem;
	width: 100%;
}

.profile .picture {
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
}

.more {
	height: 1rem;
	width: 1rem;
	margin-left: auto;
}

nav {
	padding-left: 1rem;
}

nav a {
	position: relative;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.25rem 0;
	margin-bottom: 1.5rem;
}

nav a:last-of-type {
	margin-bottom: 0;
}

.icon {
	height: 1.5rem;
	width: 1.5rem;
}

span {
	color: var(--purple-600);
	font-weight: 700;
	text-decoration: none;
	margin-left: 1rem;
}

.router-link-active::before {
	content: "";
	position: absolute;
	top: 0;
	left: -1rem;
	width: 4px;
	height: 100%;
	background: var(--purple-600);
	border-radius: 999px;
}
</style>
