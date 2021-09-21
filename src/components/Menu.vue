<template>
	<aside>
		<div class="profile">
			<img
				src="https://yt3.ggpht.com/AyUL9W0ltc_aJr_MysuZBx8hRfb1SIVNREgU9kiOO-lqmdhYkEsllmhagertVIwHwa3UAAKy=s88-c-k-c0x00ffffff-no-rj"
				alt=""
			/>
			<div class="profile-info">
				<h3>murasakishionch</h3>
				<p>Tokyo, Japan</p>
			</div>
		</div>
		<nav>
			<ul>
				<li><a href="#">Feed</a></li>
				<li><a href="#">Video</a></li>
				<li><a href="#">Favorites</a></li>
				<li><a href="#">Create</a></li>
			</ul>
		</nav>
	</aside>
</template>

<style scoped>
aside {
	background: #fff;
	padding: 1rem;
	box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.15);
	border-radius: 0.5rem;
}

.profile {
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
}

.profile img {
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
}

nav ul {
	margin: 0;
	padding: 0;
	list-style: none;
}

li {
	margin-bottom: 1rem;
}

li a {
	color: var(--purple-600);
	font-weight: 700;
	text-decoration: none;
}
</style>
