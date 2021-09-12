import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../views/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Profile,
    props: route => ({
      token: route.query.token,
      admin: true,
    }) 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
