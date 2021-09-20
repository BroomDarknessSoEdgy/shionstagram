<template>
	<header>
		<img class="nav-logo" src="../assets/images/logo.png" alt="" />

		<input class="mock-search" type="text" placeholder="Search" />

		<div class="nav-icons">Icons</div>
	</header>
</template>

<script>
export default {
	name: "SiteHeader",
	props: {},
};
</script>

<style scoped>
header {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	width: 100%;
	padding: 1.5rem;
	background-color: #fff;
	align-items: center;
}

.nav-logo {
	height: 2rem;
	justify-self: left;
}

.mock-search {
	justify-self: center;
}

.nav-icons {
	justify-self: right;
}
</style>
