<template>
	<header>
		<img class="nav-logo" src="../assets/images/Logo.png" alt="" />

		<div class="mock-search">
			<input type="text" placeholder="Search" />
		</div>
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
}

.nav-logo {
	height: 2rem;
	justify-self: left;
}

.nav-icons {
	justify-self: right;
}
</style>
