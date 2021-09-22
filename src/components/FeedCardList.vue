<template>
	<section>
		<FeedCard />
		<FeedCard />
		<FeedCard />
		<FeedCard />
		<FeedCard />
		<FeedCard />
		<FeedCard />
		<FeedCard />
		<FeedCard />
		<FeedCard />
		<FeedCard />
		<FeedCard />
		<FeedCard />
		<FeedCard />
		<FeedCard />
		<FeedCard />
		<FeedCard />
		<FeedCard />
	</section>
</template>

<script>
import FeedCard from "./FeedCard.vue";

export default {
	components: {
		FeedCard,
	},
};
</script>

<style scoped>
/* card grid */
section {
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 2rem;
	width: 100%;
}

@media screen and (min-width: 1060px) {
	section {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media screen and (min-width: 1440px) {
	section {
		grid-template-columns: repeat(3, 1fr);
	}
}

.admin-menu {
	padding: 15px;
}
</style>
