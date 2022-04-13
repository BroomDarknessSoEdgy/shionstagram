<template>
	<main>
		<Menu />
		<section class="projects">
			<h1 class="title">Shiokkos 1 Million Subscriber Projects</h1>
			<hr />
			<section class="project">
				<header class="project-title">
					<h2>百万人の塩っ子はどこにいる</h2>
					<h3>Where are a million Shiokkos</h3>
				</header>
				<img src="../assets/images/bg-dark.jpg" alt="" />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem
					tellus, ultrices feugiat tempus non, sodales ac quam. Curabitur sed
					ultricies augue. Quisque nec aliquet dui, ac congue lorem. Phasellus
					vel dignissim ex, sit amet ultrices erat. Vivamus in metus vel enim
					aliquam iaculis. In tellus mauris, lacinia vel dictum quis, efficitur
					vel orci. Integer lobortis, ante vel fermentum ultricies, elit nunc
					placerat urna, vitae faucibus tellus enim at mi. Etiam nec mi eget
					justo pharetra aliquam.
				</p>
			</section>
			<section class="project">
				<header class="project-title">
					<h2>紫咲シオンちゃん100万人記念動画！</h2>
					<h3>Murasaki Shion 1 Million comemorative video</h3>
				</header>
				<iframe
					src="https://www.youtube-nocookie.com/embed/EHxpqK1CeH4"
					title="YouTube video player"
					frameborder="0"
					class="clip-embed"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
				<p>
					{{ $t("projects.comemorative_video_desc") }}
				</p>
			</section>
			<section class="project">
				<header class="project-title">
					<h2>Something something japanese title！(JP)</h2>
					<h3>Shiokko Collaborative Drawing</h3>
				</header>
				<img src="../assets/images/bg-dark.jpg" alt="" />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem
					tellus, ultrices feugiat tempus non, sodales ac quam. Curabitur sed
					ultricies augue. Quisque nec aliquet dui, ac congue lorem. Phasellus
					vel dignissim ex, sit amet ultrices erat. Vivamus in metus vel enim
					aliquam iaculis. In tellus mauris, lacinia vel dictum quis, efficitur
					vel orci. Integer lobortis, ante vel fermentum ultricies, elit nunc
					placerat urna, vitae faucibus tellus enim at mi. Etiam nec mi eget
					justo pharetra aliquam.
				</p>
			</section>
		</section>
	</main>
</template>

<script>
import Menu from "../components/Menu.vue";

export default {
	name: "Profile",
	components: {
		Menu,
	},
};
</script>

<style scoped>
main {
	display: grid;
	width: 100%;
	margin: auto;
	padding: 3rem 1rem;
	gap: 2rem;
}

@media screen and (min-width: 650px) {
	main {
		grid-template-columns: max-content 1fr;
	}
}

@media screen and (min-width: 768px) {
	main {
		gap: 2rem;
		padding: 3rem 2rem;
	}
}
@media screen and (min-width: 1440px) {
	main {
		padding: 3rem;
	}
}

.projects {
	width: 100%;
	max-width: 55rem;
	margin: 0 auto;
	background-color: white;
	padding: 2rem 1.5rem;
	border-radius: 0.5rem;
	box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.15);
}

.title {
	text-align: center;
}

hr {
	width: 100%;
	border: 0;
	height: 1px;
	background-color: var(--purple-500);
	border-radius: 999px;
	margin: 2rem 0;
}

.project + .project {
	margin-top: 3rem;
}

.project img {
	width: 100%;
	border-radius: 0.5rem;
	margin-bottom: 1.5rem;
}
.project iframe {
	border-radius: 0.5rem;
	margin-bottom: 1.5rem;
	aspect-ratio: 16 / 9;
	height: 100%;
	width: 100%;
}

.project-title {
	margin-bottom: 1.5rem;
}

.project-title h2,
.project-title h3 {
	line-height: 1.2;
}

.project-title h3 {
	font-weight: 400;
}
</style>
