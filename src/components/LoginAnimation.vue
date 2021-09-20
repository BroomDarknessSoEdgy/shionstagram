<template>
	<div class="login-animation">
		<div ref="loginForm" class="login-form"></div>
	</div>
</template>

<script>
import lottie from "lottie-web";
import animation from "../assets/login_animation/login_form.json";

export default {
	name: "LoginAnimation",
	mounted() {
		lottie.loadAnimation({
			container: this.$refs.loginForm,
			animationData: animation,
			renderer: "svg",
			loop: true,
			autoplay: true,
		});
	},
};
</script>

<style scoped>
.login-animation {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: block;
	overflow: hidden;
}

.login-form svg {
	width: 30rem;
	height: 30rem;
}
</style>
