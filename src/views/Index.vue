<template>
	<main>
		<Menu />
		<FeedCardList />
		<FeedLayoutSidebar />
	</main>
</template>

<script>
import Menu from "../components/Menu.vue";
import FeedCardList from "../components/FeedCardList.vue";
import FeedLayoutSidebar from "../components/FeedLayoutSidebar.vue";

export default {
	name: "Index",
	components: {
		Menu,
		FeedCardList,
		FeedLayoutSidebar,
	},
};
</script>

<style scoped>
main {
	position: relative;
	width: 100%;
	padding: 3rem 1rem 3rem 1rem;
	display: grid;
	gap: 1rem;
	grid-template-columns: 1fr;
}

@media screen and (min-width: 650px) {
	main {
		grid-template-columns: auto 1fr;
	}
}

@media screen and (min-width: 960px) {
	main {
		gap: 2rem;
		padding: 3rem 5.5rem 3rem 2rem;
	}
}

@media screen and (min-width: 1200px) {
	main {
		padding: 3rem 9.5rem 3rem 3rem;
	}
}
</style>
