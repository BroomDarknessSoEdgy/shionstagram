import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import Profile from "../views/Profile.vue";

const routes = [
	{
		path: "/",
		name: "Index",
		component: Index,
	},
	{
		path: "/profile",
		name: "Profile",
		component: Profile,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
