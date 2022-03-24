<template>
	<main>
		<Menu />
		<section>
			<h1>hello</h1>
		</section>
	</main>
</template>

<script>
import Menu from "../components/Menu.vue";

export default {
	name: "Soundboard",
	components: {
		Menu,
	},
};
</script>

<style scoped>
main {
	position: relative;
	width: 100%;
	padding: 3rem 1rem;
	display: grid;
	gap: 1rem;
	grid-template-columns: 1fr;
}

@media screen and (min-width: 650px) {
	main {
		grid-template-columns: auto 1fr;
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

section {
}
</style>
