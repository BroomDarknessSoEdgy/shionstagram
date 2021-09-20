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
	text-align: center;
	color: #2c3e50;
}
</style>
