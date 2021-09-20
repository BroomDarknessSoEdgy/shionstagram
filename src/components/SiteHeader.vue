<template>
	<header>
		<nav>
			<img class="nav-logo" src="../assets/images/Logo.png" alt="" />

			<div class="mock-search">
				<input type="text" placeholder="Search" />
			</div>
			<div class="nav-icons">Icons</div>
		</nav>
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
	width: 100%;
	padding: 1.5rem;
	background-color: #fff;
}

nav {
	max-width: 1140px;
	margin: auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
}

.nav-logo {
	height: 2rem;
	justify-self: left;
}

.nav-icons {
	justify-self: right;
}
</style>
