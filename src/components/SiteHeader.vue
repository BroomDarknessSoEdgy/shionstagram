<template>
	<header>
		<router-link to="/">
			<img class="nav-logo" src="../assets/images/logo.svg" alt="" />
		</router-link>

		<div class="nav-icons">
			<div class="row">
				<ElSelect v-model="locale">
					<template #prefix>
						<img
							class="icon-small"
							src="../assets/icons/language-outline.svg"
							alt=""
						/>
					</template>

					<ElOption
						v-for="(lang, index) in languages"
						:key="index"
						:label="lang.label"
						:value="lang.value"
					/>
				</ElSelect>
			</div>

			<button class="reset-button clickable" @click="replayAnimation">
				<img
					class="icon"
					src="../assets/icons/refresh-outline.svg"
					alt="Replay intro animation"
				/>
			</button>

			<button class="reset-button clickable" @click="toggleCustomCursor">
				<img
					class="icon"
					:class="customCursor ? 'active' : ''"
					src="../assets/icons/Mouse_Toggle_OFF.png"
					alt="toggle custom cursor"
				/>
			</button>

			<router-link to="/soundboard">
				<img class="icon" src="../assets/icons/Reels.svg" />
			</router-link>
			<router-link to="/submit">
				<img class="icon" src="../assets/icons/Send.svg" />
			</router-link>
			<router-link to="/profile">
				<img
					class="profile-img"
					src="../assets/images/messageHistory/shion.jpg"
				/>
			</router-link>
		</div>
	</header>
</template>

<script>
import { watch } from "vue";
import { useI18n } from "vue-i18n";

import { ElSelect, ElOption } from "element-plus";

const languages = [
	{
		label: "    日本語",
		value: "ja",
	},
	{
		label: "    English",
		value: "en",
	},
];

export default {
	name: "SiteHeader",
	components: {
		ElSelect,
		ElOption,
	},
	props: {
		replayAnimation: Function,
	},
	// TODO: fix this scuffed code, cause it's reusing code from main.js?
	setup() {
		const { locale, t } = useI18n({
			useScope: "global",
		});
		watch(locale, (newVal) => {
			sessionStorage.setItem("locale", newVal);
		});
		return { locale, t };
	},
	data() {
		return {
			customCursor: true,
			languages,
		};
	},
	methods: {
		toggleCustomCursor() {
			document
				.getElementsByTagName("body")[0]
				.classList.toggle("custom-cursor");
			this.customCursor = !this.customCursor;
		},
	},
};
</script>

<style scoped>
header {
	position: sticky;
	top: 0;
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 0.5rem 1rem;
	background-color: #fff;
	z-index: 1;
}

a {
	width: max-content;
}

.nav-logo {
	height: 2rem;
	justify-self: left;
}

.nav-icons {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
}

.reset-button {
	background: none;
	border: none;
	padding: 0;
}

.toggle-cursor :not(.active) {
	filter: grayscale(1);
}

.el-select {
	width: 8rem;
	--el-select-input-focus-border-color: var(--purple-400);
}

.el-select-dropdown__item {
	font-family: "Manrope", sans-serif;
}

.el-select-dropdown__item.selected {
	color: var(--purple-400);
	font-weight: 400;
	font-family: "Manrope", sans-serif;
}

select {
	font-family: "Manrope", sans-serif;
	font-weight: bold;
	color: #5c5c5c;
	padding: 0.25rem 0.5rem;
	border: 2px solid #5c5c5c;
	border-radius: 0.25rem;
}

.profile-img {
	height: 2.5rem;
	border-radius: 50%;
	margin-left: 0.5rem;
}

.icon {
	height: 1.5rem;
	object-fit: contain;
}

.icon-small {
	transform: translateX(-6px);
	height: 1.5rem;
	width: 1.5rem;
}

.nav-icons a {
	font-weight: bold;
	color: #444;
	text-decoration: none;
}

@media screen and (min-width: 960px) {
	header {
		padding: 0.5rem 2rem;
	}
}

@media screen and (min-width: 1200px) {
	header {
		padding: 0.5rem 3rem;
	}
}
</style>
