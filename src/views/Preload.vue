<template>
	<main>
		<profile-card
			:avatarSrc="avatarSrc"
			:name="name"
			:stat1="stat1"
			:stat2="stat2"
			:stat3="stat3"
			:description="description"
		/>
		<div class="card-list">
			<image-card-list :imageSet="imageSet" :admin="admin" :token="token" />
		</div>
	</main>
</template>

<script>
export default {
	name: "Preload",
	mounted() {
		console.log("Preload mounted");
	},
};
</script>

<style scoped></style>
