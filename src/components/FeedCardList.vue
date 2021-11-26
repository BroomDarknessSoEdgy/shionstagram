<template>
	<section v-if="posts.length != 0">
		<FeedCard
			v-for="post in posts.filter((post) => post.location != null)"
			v-bind:key="post.id"
			:location="post.location"
			v-on:click="
				() => {
					expanded = true;
					expandedId = post.id;
				}
			"
		/>
	</section>
	<ExpandedPost
		:post="posts.filter((post) => post.id == expandedId)[0]"
		v-if="expanded"
		v-on:click="expanded = !expanded"
	/>
</template>

<script>
import config from "../config";
import FeedCard from "./FeedCard.vue";
import ExpandedPost from "./ExpandedPost.vue";

export default {
	components: {
		FeedCard,
		ExpandedPost,
	},
	data: () => ({
		posts: [],
		expanded: false,
		expandedId: -1,
	}),
	mounted() {
		fetch(`${config.origin}/messages`)
			.then((response) => response.json())
			.then((data) => {
				this.posts = data;
			});
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
