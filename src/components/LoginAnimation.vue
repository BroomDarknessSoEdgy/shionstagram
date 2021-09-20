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

export default {
	name: "LoginAnimation",
	mounted() {
		lottie.loadAnimation({
			container: this.$refs.loginBg,
			animationData: bgAnimation,
			loop: true,
			renderer: "svg",
			rendererSettings: {
				preserveAspectRatio: "xMidYMid slice",
			},
		});
		lottie.loadAnimation({
			container: this.$refs.loginForm,
			animationData: formAnimation,
			loop: true,
		});
		lottie.loadAnimation({
			container: this.$refs.loginCursor,
			animationData: cursorAnimation,
			loop: true,
			renderer: "svg",
			rendererSettings: {
				preserveAspectRatio: "xMidYMid slice",
			},
		});
		const transition = lottie.loadAnimation({
			container: this.$refs.loginTransition,
			animationData: transitionAnimation,
			loop: true,
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
}

.login-form {
	width: 100%;
	max-width: 30rem;
}
.login-cursor {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}
</style>
