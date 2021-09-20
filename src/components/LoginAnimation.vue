<template>
	<div ref="loginAnimation" class="login-animation"></div>
</template>

<script>
import lottie from "lottie-web";
import animation from "../assets/login_animation/login_form.json";

export default {
	name: "LoginAnimation",
	mounted() {
		console.log(animation);
		lottie.loadAnimation({
			container: this.$refs.loginAnimation,
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
	background-color: #fff;
	width: 100%;
	height: 100%;
	display: block;
	overflow: hidden;
	transform: translate3d(0, 0, 0);
	text-align: center;
	opacity: 1;
}
</style>
