<template>
	<main>
		<Menu />
		<div class="content">
			<h1>Index</h1>
			<p>This is the index page.</p>
		</div>
	</main>
</template>

<script>
import Menu from "../components/Menu.vue";

export default {
	name: "Index",
	components: {
		Menu,
	},
};
</script>

<style scoped>
main {
	width: 100%;
	padding: 3rem 1rem;
	display: grid;
	grid-template-columns: auto 1fr;
}

@media screen and (min-width: 960px) {
	main {
		padding: 3rem 2rem;
	}
}
</style>
