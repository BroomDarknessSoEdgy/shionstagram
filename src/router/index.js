import { createRouter, createWebHistory } from "vue-router";
import Submit from "../views/Submit.vue";
import Index from "../views/Index.vue";

const routes = [
	{
		path: "/",
		name: "Index",
		component: Index,
	},
	{
		path: "/admin",
		name: "Admin",
		component: Index,
		props: (route) => ({
			token: route.query.token,
			isAdmin: true,
		}),
	},
	{
		path: "/submit",
		name: "Submit",
		component: Submit,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
