<template>
	<aside>
		<h4>{{ $t("soundboard.history") }}</h4>
		<div class="history">
			<div class="profile">
				<img src="../assets/images/messageHistory/aqua.png" alt="" />
				<div class="profile-info">
					<h4>{{ $t("soundboard.aqua.name") }}</h4>
					<p>{{ $t("soundboard.aqua.message") }}</p>
				</div>
			</div>
			<div class="profile">
				<img src="../assets/images/messageHistory/marine.png" alt="" />
				<div class="profile-info">
					<h4>{{ $t("soundboard.marine.name") }}</h4>
					<p>{{ $t("soundboard.marine.message") }}</p>
				</div>
			</div>
			<div class="profile">
				<img src="../assets/images/messageHistory/okayu.png" alt="" />
				<div class="profile-info">
					<h4>{{ $t("soundboard.okayu.name") }}</h4>
					<p>{{ $t("soundboard.okayu.message") }}</p>
				</div>
			</div>
			<div class="profile">
				<img src="../assets/images/messageHistory/laplus.png" alt="" />
				<div class="profile-info">
					<h4>{{ $t("soundboard.laplus.name") }}</h4>
					<p>
						{{ $t("soundboard.laplus.message") }}
					</p>
				</div>
			</div>
			<div class="profile">
				<img src="../assets/images/messageHistory/fubuki.png" alt="" />
				<div class="profile-info">
					<h4>{{ $t("soundboard.fubuki.name") }}</h4>
					<p>{{ $t("soundboard.fubuki.message") }}</p>
				</div>
			</div>
			<div class="profile">
				<img src="../assets/images/messageHistory/chloe.png" alt="" />
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
	position: relative;
	display: flex;
}

.profile img {
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
}

.profile-info {
	position: relative;
	margin-left: 0.5rem;
	margin-top: -0.25rem;
	padding: 0.5rem;
}

.profile-info::after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-shadow: 0 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.15);
	opacity: 0;
	border-radius: 0.5rem;
	transition: opacity 250ms ease-out;
}

.profile-info p {
	color: gray;
	max-width: 17ch;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.profile:hover .profile-info {
	position: absolute;
	top: 0;
	left: 3.5rem;
	background: white;
	z-index: 1;
	border-radius: 0.5rem;
}

.profile:hover .profile-info::after {
	opacity: 1;
}

.profile:hover .profile-info p {
	white-space: normal;
}
</style>
