<template>
	<login-animation :callback="animationFinished" v-if="isAnimationPlaying" />
	<SiteHeader />

	<router-view v-slot="{ Component }">
		<transition name="fade" mode="out-in">
			<component :is="Component" />
		</transition>
	</router-view>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import LoginAnimation from "./components/LoginAnimation.vue";

export default {
	components: {
		SiteHeader,
		LoginAnimation,
	},
	// TODO: check if there's a better way of creating the callback
	methods: {
		animationFinished() {
			this.isAnimationPlaying = false;
		},
	},
	data: () => ({
		isAnimationPlaying: false,
	}),
	mounted: function () {
		// checks cookies to see if it's the first time user is accessing page
		// and plays the animation if it is
		if (window.document.cookie.indexOf("firstTime") === -1) {
			this.isAnimationPlaying = true;
			window.document.cookie = "firstTime=true";
		}
	},
};
</script>

<style>
:root {
	--purple-300: hsl(292, 30%, 30%);
	--purple-400: hsl(292, 30%, 40%);
	--purple-500: hsl(292, 30%, 56%);
	--purple-600: hsl(292, 23%, 56%);
	--purple-700: hsl(292, 20%, 68%);
	--purple-800: hsl(287, 30%, 88%);
}

body {
	background-color: var(--purple-700);
	background-image: url("./assets/images/bg-light.jpg");
	background-size: cover;
	background-position: top;
	background-repeat: no-repeat;
}

/* Box sizing reset */
*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html,
body {
	height: 100%;
}

img {
	display: block;
	max-width: 100%;
}

#app {
	font-family: "Manrope", sans-serif;
	/* font-family: 'Lato', sans-serif; */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: var(--purple-600);
}

.fade-enter-active,
.fade-leave-active {
	transition: transform 350ms ease-out, opacity 350ms ease-out;
}

.fade-enter-active {
	transition-delay: 350ms;
}

.fade-enter-from,
.fade-leave-to {
	transform: translateY(2rem);
	opacity: 0;
}
</style>
