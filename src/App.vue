<template>
	<login-animation :callback="animationFinished" v-if="isAnimationPlaying" />
	<SiteHeader :replayAnimation="replayAnimation" />

	<router-view v-if="!isAnimationPlaying" v-slot="{ Component }">
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
		replayAnimation() {
			console.log("hello");
			this.isAnimationPlaying = true;
		},
	},
	data: () => ({
		isAnimationPlaying: false,
	}),
	mounted: function () {
		// checks localstorage to see if it's the first time user is accessing page
		// and plays the animation if it is
		if (localStorage.getItem("firstTime") === null) {
			localStorage.setItem("firstTime", "false");
			this.isAnimationPlaying = true;
		}
	},
};
</script>

<style>
:root {
	--purple-200: hsl(292, 30%, 15%);
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
}

* {
	margin: 0;
}

html,
body {
	height: 100%;
}

body {
	font-family: "Manrope", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: var(--purple-600);
}

img,
picture,
video,
canvas,
svg {
	display: block;
	max-width: 100%;
}

input,
button,
textarea,
select {
	font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
	overflow-wrap: break-word;
}

.custom-cursor {
	cursor: url("./assets/cursor/wand.png"), auto;
}

.custom-cursor
	:is(a, label, button, select, input[type="radio"], input[type="submit"], input[type="checkbox"], .el-input__inner, .el-select__caret.el-select__caret, .el-select-dropdown__item) {
	cursor: url("./assets/cursor/wand_active.png"), pointer;
}

.clickable {
	cursor: pointer;
}

.custom-cursor .clickable {
	cursor: url("./assets/cursor/wand_active.png"), pointer;
}

body::-webkit-scrollbar {
	width: 8px;
}

body::-webkit-scrollbar-track {
	background-color: var(--purple-700);
}

body::-webkit-scrollbar-thumb {
	background: var(--purple-500);
}

p {
	line-height: 1.6;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 250ms ease-out;
}

.fade-enter-active {
	transition-delay: 250ms;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
