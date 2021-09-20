<template>
	<SiteHeader />
	<router-view />
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";

export default {
	components: {
		SiteHeader,
	},
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
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: var(--purple-600);
}
</style>
