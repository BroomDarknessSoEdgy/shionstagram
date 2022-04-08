<template>
	<section>
		<div
			v-for="post in posts"
			v-bind:key="post.id"
			v-on:click="
				() => {
					expanded = true;
					expandedId = post.id;
				}
			"
			class="wrapper"
		>
			<ImageFeedCard
				v-if="post.image !== undefined"
				:src="post.image"
				:name="post.name"
				:userLocation="post.location"
			/>
			<TextFeedCard
				v-else
				:message="post.message"
				:name="post.name"
				:userLocation="post.location"
			/>
		</div>
	</section>
	<ExpandedImgPost
		v-if="expanded && getPost(expandedId).image !== undefined"
		:post="getPost(expandedId)"
		@onClickOff="minimizePost"
	/>
	<ExpandedTextPost
		v-else-if="expanded && getPost(expandedId).image === undefined"
		:post="getPost(expandedId)"
		@onClickOff="minimizePost"
	/>
</template>

<script>
import ImageFeedCard from "./ImageFeedCard.vue";
import TextFeedCard from "./TextFeedCard.vue";
import ExpandedImgPost from "./ExpandedImgPost.vue";
import ExpandedTextPost from "./ExpandedTextPost.vue";
import { apiURL } from "../config/config";

export default {
	components: {
		ImageFeedCard,
		TextFeedCard,
		ExpandedImgPost,
		ExpandedTextPost,
	},
	data: () => ({
		posts: [],
		expanded: false,
		expandedId: -1,
	}),
	async mounted() {
		const res = await fetch(`${apiURL}/messages`);

		this.posts = await res.json();
	},
	methods: {
		minimizePost() {
			this.expanded = false;
			this.expandedId = -1;
		},
		getPost(id) {
			return this.posts.filter((post) => post.id === id)[0];
		},
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
</style>
