<template>
	<section>
		<FeedCard v-for="img in imgData" v-bind:key="img.id" :location="img.location" />
	</section>
</template>

<script>
import config from "../config";
import FeedCard from "./FeedCard.vue";

export default {
	components: {
		FeedCard,
	},
	data: () => ({
		imgData: undefined,
	}),
	mounted() {
		fetch(`${config.origin}/messages`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				this.imgData = data.filter(img => img.location !== null);
		});
	}
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
