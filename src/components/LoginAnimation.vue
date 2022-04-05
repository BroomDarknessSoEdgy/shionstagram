<template>
	<div class="overlay">
		<div class="login-animation">
			<div ref="loginBg" class="login-bg" />
			<div class="login-container">
				<div ref="loginForm" class="login-form" />
				<div ref="loginCursor" class="login-cursor" />
			</div>
			<div ref="loginTransition" class="login-transition" />
		</div>
	</div>
</template>

<script>
import lottie from "lottie-web";

import bgAnimation from "../assets/login_animation/login_bg.json";
import formAnimation from "../assets/login_animation/login_form.json";
import cursorAnimation from "../assets/login_animation/login_cursor.json";
import transitionAnimation from "../assets/login_animation/login_transition.json";

let loop = false;

export default {
	name: "LoginAnimation",
	props: {
		callback: {
			type: Function,
		},
	},
	mounted() {
		this.playAnimation();
	},
	unmounted() {
		lottie.destroy();
	},
	methods: {
		playAnimation() {
			lottie.loadAnimation({
				container: this.$refs.loginBg,
				animationData: bgAnimation,
				loop: loop,
				renderer: "svg",
				rendererSettings: {
					preserveAspectRatio: "xMidYMid slice",
				},
			});
			lottie.loadAnimation({
				container: this.$refs.loginForm,
				animationData: formAnimation,
				loop: loop,
				renderer: "svg",
				rendererSettings: {
					preserveAspectRatio: "none",
				},
			});
			lottie.loadAnimation({
				container: this.$refs.loginCursor,
				animationData: cursorAnimation,
				loop: loop,
				renderer: "svg",
				rendererSettings: {
					preserveAspectRatio: "xMidYMid slice",
				},
			});
			// binding to a variable, that we can call a function on completion
			const transition = lottie.loadAnimation({
				container: this.$refs.loginTransition,
				animationData: transitionAnimation,
				loop: loop,
				renderer: "svg",
				rendererSettings: {
					preserveAspectRatio: "xMidYMid slice",
				},
			});
			transition.onComplete = () => {
				this.callback();
			};
		},
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
	z-index: 999;
}

.login-animation {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 100%;
	height: 100%;
}

.login-bg,
.login-transition {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.login-container {
	position: relative;
	max-height: 100%;
}

.login-form {
	max-width: 100%;
	max-height: calc(100vh - 2rem);
	aspect-ratio: 520 / 791;
}

.login-cursor {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	overflow: visible;
}
</style>
