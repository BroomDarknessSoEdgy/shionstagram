import { createApp } from "vue";
import App from "./App.vue";

// Localisation
import { createI18n } from "vue-i18n";
import en from "./data/lang/en";
import ja from "./data/lang/ja";

import router from "./router";

const i18n = createI18n({
	legacy: false,
	locale: "ja",
	globalInjection: true,
	messages: {
		en: en,
		ja: ja,
	},
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount("#app");
