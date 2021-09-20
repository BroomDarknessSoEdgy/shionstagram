<template>
	<div class="overlay">
		<div class="login-animation">
			<div ref="loginBg" class="login-bg"></div>
			<div ref="loginForm" class="login-form"></div>
			<div ref="loginTransition" class="login-transition"></div>
		</div>
	</div>
</template>

<script>
import lottie from "lottie-web";

import bgAnimation from "../assets/login_animation/login_bg.json";
import formAnimation from "../assets/login_animation/login_form.json";
import transitionAnimation from "../assets/login_animation/login_transition.json";

export default {
	name: "LoginAnimation",
	mounted() {
		lottie.loadAnimation({
			container: this.$refs.loginBg,
			animationData: bgAnimation,
			loop: false,
			renderer: "svg",
			rendererSettings: {
				preserveAspectRatio: "xMidYMid slice",
			},
		});
		lottie.loadAnimation({
			container: this.$refs.loginForm,
			animationData: formAnimation,
			loop: false,
		});
		const transition = lottie.loadAnimation({
			container: this.$refs.loginTransition,
			animationData: transitionAnimation,
			loop: false,
			renderer: "svg",
			rendererSettings: {
				preserveAspectRatio: "xMidYMid slice",
			},
		});
		transition.onComplete = () => {
			lottie.destroy();
		};
	},
};
</script>

<style scoped>
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: block;
	overflow: hidden;
}

.login-animation {
	position: relative;
	width: 100%;
	height: 100%;
}

.login-bg,
.login-form,
.login-transition {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>
