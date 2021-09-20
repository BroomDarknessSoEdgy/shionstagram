<template>
	<section>
		<div :key="image.id" v-for="image in imageSet">
			<image-card :src="image.location" />
		</div>
	</section>
</template>

<script>
import config from "../config";
import ImageCard from "./ImageCard.vue";

export default {
	name: "ImageCardList",
	props: {
		imageSet: Array,
		admin: Boolean,
		token: String,
	},
	components: {
		ImageCard,
	},
	methods: {
		hideItem: function (id) {
			fetch(`${config.origin}/admin/message`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					token: this.token,
					id,
					approved: false,
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					this.rawMessages = data.rows;
				});
		},
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
