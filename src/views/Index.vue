<template>
	<main>
		<Menu />
		<FeedCardList />
	</main>
</template>

<script>
import Menu from "../components/Menu.vue";
import FeedCardList from "../components/FeedCardList.vue";

export default {
	name: "Index",
	components: {
		Menu,
		FeedCardList,
	},
};
</script>

<style scoped>
main {
	width: 100%;
	padding: 3rem 1rem;
	display: grid;
	gap: 1rem;
	grid-template-columns: auto 1fr;
}

@media screen and (min-width: 960px) {
	main {
		gap: 2rem;
		padding: 3rem 2rem;
	}
}
</style>
