import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import Submit from "../views/Submit.vue";
import Profile from "../views/Profile.vue";
import Soundboard from "../views/Soundboard.vue";

const routes = [
	{
		path: "/",
		name: "Index",
		component: Index,
	},
	{
		path: "/submit",
		name: "Submit",
		component: Submit,
	},
	{
		path: "/profile",
		name: "Profile",
		component: Profile,
	},
	{
		path: "/soundboard",
		name: "Soundboard",
		component: Soundboard,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
