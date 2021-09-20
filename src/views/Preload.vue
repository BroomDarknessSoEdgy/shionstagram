<template>
	<main>
		<LoginAnimation />
	</main>
</template>

<script>
import LoginAnimation from "../components/LoginAnimation.vue";

export default {
	name: "Preload",
	components: {
		LoginAnimation,
	},
	mounted() {
		console.log("Preload mounted");
	},
};
</script>

<style scoped></style>
