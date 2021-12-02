<template>
	<aside>
		<img src="../assets/icons/grid1x3.svg" alt="" />
		<img src="../assets/icons/grid2x2.svg" alt="" />
		<img src="../assets/icons/grid3x3.svg" alt="" />
	</aside>
</template>

<style scoped>
aside {
	position: fixed;
	top: 3.5rem;
	right: 1rem;
	bottom: 0;
	display: none;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

aside img {
	width: 1.5rem;
	padding-bottom: 1rem;
}

@media screen and (min-width: 768px) {
	aside {
		display: flex;
		right: 1rem;
	}
}

@media screen and (min-width: 960px) {
	aside {
		right: 2rem;
	}
}

@media screen and (min-width: 1440px) {
	aside {
		right: 3rem;
	}
}
</style>
