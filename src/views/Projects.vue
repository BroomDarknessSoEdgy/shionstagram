<template>
	<main>
		<Menu />
		<section class="projects">Hello</section>
	</main>
</template>

<script>
import Menu from "../components/Menu.vue";

export default {
	name: "Profile",
	components: {
		Menu,
	},
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

.projects {
	width: 100%;
	max-width: 55rem;
	margin: 0 auto;
	background-color: white;
	padding: 2rem 1.5rem;
	border-radius: 0.5rem;
	box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.15);
}
</style>
