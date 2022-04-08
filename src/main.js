import { createApp } from "vue";
import App from "./App.vue";

// Localisation
import { createI18n } from "vue-i18n";
import en from "./data/lang/en";
import ja from "./data/lang/ja";
import cn from "./data/lang/cn";

import router from "./router";

const i18n = createI18n({
	legacy: false,
	locale: "ja",
	globalInjection: true,
	messages: {
		en: en,
		ja: ja,
		cn: cn,
	},
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount("#app");
