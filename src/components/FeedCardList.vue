<template>
	<section>
		<FeedCard v-for="num in imgData" v-bind:key="num" :imgNum="num" />
	</section>
</template>

<script>
import FeedCard from "./FeedCard.vue";

export default {
	components: {
		FeedCard,
	},
	data: () => ({
		// 20 random numbers between 600-700 for random image from api
		imgData: Array.from({ length: 20 }, () =>
			Math.round(Math.random() * (700 - 600) + 600)
		),
	}),
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
