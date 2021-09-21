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
	methods: {
		animationFinished() {
			this.isAnimationPlaying = false;
		},
	},
	data: () => ({
		isAnimationPlaying: true,
	}),
};
</script>

<style>
:root {
	--purple-300: #3b1b40;
	--purple-400: #6c3a73;
	--purple-500: #944aa0;
	--purple-600: #a175a8;
	--purple-700: #b89dbe;
	--purple-800: #f7bfff;
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
