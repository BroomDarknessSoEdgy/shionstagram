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
			<ImageFeedCard v-if="post.pathToImage != null" :location="post.pathToImage" :name="post.name" :userLocation="post.user_location" />
			<TextFeedCard v-else :message="post.message" :name="post.name" :userLocation="post.user_location" />
		</div>
	</section>
	<!-- filtering each time may be inefficient but good enough for now? -->
	<ExpandedPost
		:post="posts.filter((post) => post.id == expandedId)[0]"
		v-if="expanded"
		@onClickOff="minimizePost"
	/>
</template>

<script>
import ImageFeedCard from "./ImageFeedCard.vue";
import TextFeedCard from "./TextFeedCard.vue";
import ExpandedPost from "./ExpandedPost.vue";

export default {
	components: {
		ImageFeedCard,
		TextFeedCard,
		ExpandedPost,
	},
	data: () => ({
		posts: [
		{
			name: "Shiokko 1",
			user_location: "Shionstagram 1",
			pathToImage: "pathToImage",
			"message": "Text part of the message 1.",
		},
		{
			name: "Shiokko 2",
			user_location: "Shionstagram 2",
			pathToImage: "pathToImage",
			"message": "Text part of the message 2.",
		},
		{
			name: "Shiokko 3",
			user_location: "Shionstagram 3",
			pathToImage: "pathToImage",
			"message": "Text part of the message 3.",
		},
		{
			name: "Shiokko 4",
			user_location: "Shionstagram 4",
			pathToImage: "pathToImage",
			"message": "Text part of the message 4.",
		}
		],
		expanded: false,
		expandedId: -1,
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
</style>
