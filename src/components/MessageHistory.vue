<template>
	<aside>
		<h3>{{ $t("soundboard.history") }}</h3>
		<div class="history">
			<div class="profile">
				<img
					src="https://yt3.ggpht.com/AyUL9W0ltc_aJr_MysuZBx8hRfb1SIVNREgU9kiOO-lqmdhYkEsllmhagertVIwHwa3UAAKy=s88-c-k-c0x00ffffff-no-rj"
					alt=""
				/>
				<div class="profile-info">
					<h4>{{ $t("soundboard.aqua.name") }}</h4>
					<p>{{ $t("soundboard.aqua.message") }}</p>
				</div>
			</div>
			<div class="profile">
				<img
					src="https://yt3.ggpht.com/AyUL9W0ltc_aJr_MysuZBx8hRfb1SIVNREgU9kiOO-lqmdhYkEsllmhagertVIwHwa3UAAKy=s88-c-k-c0x00ffffff-no-rj"
					alt=""
				/>
				<div class="profile-info">
					<h4>{{ $t("soundboard.marine.name") }}</h4>
					<p>{{ $t("soundboard.marine.message") }}</p>
				</div>
			</div>
			<div class="profile">
				<img
					src="https://yt3.ggpht.com/AyUL9W0ltc_aJr_MysuZBx8hRfb1SIVNREgU9kiOO-lqmdhYkEsllmhagertVIwHwa3UAAKy=s88-c-k-c0x00ffffff-no-rj"
					alt=""
				/>
				<div class="profile-info">
					<h4>{{ $t("soundboard.okayu.name") }}</h4>
					<p>{{ $t("soundboard.okayu.message") }}</p>
				</div>
			</div>
			<div class="profile">
				<img
					src="https://yt3.ggpht.com/AyUL9W0ltc_aJr_MysuZBx8hRfb1SIVNREgU9kiOO-lqmdhYkEsllmhagertVIwHwa3UAAKy=s88-c-k-c0x00ffffff-no-rj"
					alt=""
				/>
				<div class="profile-info">
					<h4>{{ $t("soundboard.laplus.name") }}</h4>
					<p>
						{{ $t("soundboard.laplus.message") }}
					</p>
				</div>
			</div>
			<div class="profile">
				<img
					src="https://yt3.ggpht.com/AyUL9W0ltc_aJr_MysuZBx8hRfb1SIVNREgU9kiOO-lqmdhYkEsllmhagertVIwHwa3UAAKy=s88-c-k-c0x00ffffff-no-rj"
					alt=""
				/>
				<div class="profile-info">
					<h4>{{ $t("soundboard.fubuki.name") }}</h4>
					<p>{{ $t("soundboard.fubuki.message") }}</p>
				</div>
			</div>
			<div class="profile">
				<img
					src="https://yt3.ggpht.com/AyUL9W0ltc_aJr_MysuZBx8hRfb1SIVNREgU9kiOO-lqmdhYkEsllmhagertVIwHwa3UAAKy=s88-c-k-c0x00ffffff-no-rj"
					alt=""
				/>
				<div class="profile-info">
					<h4>{{ $t("soundboard.chloe.name") }}</h4>
					<p>{{ $t("soundboard.chloe.message") }}</p>
				</div>
			</div>
		</div>
	</aside>
</template>

<style scoped>
aside {
	background: white;
	padding: 1rem 1rem 2rem 1rem;
	box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.15);
	border-radius: 0.5rem;
	height: max-content;
}

.history {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 1.5rem;
}

.profile {
	display: flex;
}

.profile img {
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
}

.profile-info {
	margin-left: 1rem;
	margin-top: 0.25rem;
}

.profile-info p {
	color: gray;
	max-width: 17ch;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.profile-info:hover p {
	white-space: normal;
}
</style>
