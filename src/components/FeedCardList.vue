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
			<button class="admin-button" v-if="isAdmin" @click="hidePost(post.id)">{{$t("hide_submission")}}</button>
			<ImageFeedCard v-if="post.location != null" :location="post.location" :name="post.name" :userLocation="post.user_location" />
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
import config from "../config";
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
	methods: {
		minimizePost() {
			this.expanded = !this.expanded;
		},
		hidePost(postId) {
                fetch(`${config.origin}/admin/message`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
						token: this.token,
						id: postId,
						approved: false
                    })
                    })
                    .then(() => {
						alert("Submission hidden");
                    })
                    .catch(() => {
						alert("Hiding submission failed.");
                    });
		}
	},
	props: {
		token: String,
		isAdmin: Boolean
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

.admin-button {
	padding: 15px;
}

</style>
