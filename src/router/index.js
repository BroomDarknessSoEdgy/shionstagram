import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../views/Profile.vue'
import Submit from '../views/Submit.vue'

const routes = [
  {
    path: '/',
    name: 'Profile',
    component: Profile,
    props: () => ({
      admin: false,
      token: null,
    })
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Profile,
    props: route => ({
      token: route.query.token,
      admin: true,
    }) 
  },
  {
    path: '/submit',
    name: 'Submit',
    component: Submit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
