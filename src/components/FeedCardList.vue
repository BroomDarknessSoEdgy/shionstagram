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
	grid-template-columns: repeat(auto-fit, minmax(17.5rem, 1fr));
	grid-gap: 2rem;
	width: 100%;
}
.admin-menu {
	padding: 15px;
}
</style>
