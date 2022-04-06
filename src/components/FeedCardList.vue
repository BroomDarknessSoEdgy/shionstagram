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
				v-if="post.src !== undefined"
				:src="post.src"
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
		v-if="expanded && posts[expandedId].src !== undefined"
		:post="posts[expandedId]"
		@onClickOff="minimizePost"
	/>
	<ExpandedTextPost
		v-else-if="expanded && posts[expandedId].src === undefined"
		:post="posts[expandedId]"
		@onClickOff="minimizePost"
	/>
</template>

<script>
import ImageFeedCard from "./ImageFeedCard.vue";
import TextFeedCard from "./TextFeedCard.vue";
import ExpandedImgPost from "./ExpandedImgPost.vue";
import ExpandedTextPost from "./ExpandedTextPost.vue";

export default {
	components: {
		ImageFeedCard,
		TextFeedCard,
		ExpandedImgPost,
		ExpandedTextPost,
	},
	data: () => ({
		posts: [
			{
				name: "Shiokko 1",
				location: "Shionstagram 1",
				message: "Text part of the message 1.",
			},
			{
				name: "Shiokko 2",
				location: "Shionstagram 2",
				message: "Text part of the message 2.",
			},
			{
				name: "Shiokko 3",
				location: "Shionstagram 3",
				src: "placeholder.jpg",
				message: "Text part of the message 3.",
			},
			{
				name: "Shiokko 4",
				location: "Shionstagram 4",
				src: "placeholder.jpg",
				message: "Text part of the message 4.",
			},
		].map((post, i) => ({ ...post, id: i })),
		expanded: false,
		expandedId: -1,
	}),
	methods: {
		minimizePost() {
			this.expanded = false;
			this.expandedId = -1;
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
