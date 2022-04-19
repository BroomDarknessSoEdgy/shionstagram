<template>
	<main>
		<Menu />
		<section class="submit">
			<header>
				<h1>{{ $t("submit.submissions_closed") }}</h1>
				<p>{{ $t("submit.closed_subtitle") }}</p>
			</header>
			<div class="row">
				<img
					:key="img"
					v-for="img in profilePictures"
					:src="img"
					class="pfp"
					alt=""
				/>
			</div>
		</section>
	</main>
</template>

<script>
import { profilePictures } from "../data/profilePictures";

import Menu from "../components/Menu.vue";

export default {
	name: "Submit",
	components: {
		Menu,
	},
	data: () => ({
		postsSubmitted: 2,
		profilePictures,
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

.submit {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	width: 100%;
	max-width: 50rem;
	margin: 0 auto;
	background-color: white;
	padding: 2rem 1.5rem;
	border-radius: 0.5rem;
	box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.15);
}

header {
	text-align: center;
}

.row {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 1rem;
}

.pfp {
	display: block;
	border-radius: 0.5rem;
	height: 6rem;
	width: 6rem;
	border: 1px solid var(--purple-600);
	object-fit: cover;
	transition: transform 150ms ease-out;
}
</style>
