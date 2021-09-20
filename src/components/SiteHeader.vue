<template>
	<header>
		<img class="nav-logo" src="../assets/images/Logo.png" alt="" />

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
	padding: 1rem;
	background-color: #fff;
	align-items: center;
}

.nav-logo {
	height: 2rem;
	justify-self: left;
}

.mock-search {
	border: 1px solid rgba(0, 0, 0, 0.34);
	height: 2rem;
	min-width: 10rem;
	width: 75%;
	border-radius: 0.25rem;
	padding: 0.5rem;
	background: transparent;
	justify-self: center;
}

.nav-icons {
	justify-self: right;
}
</style>
