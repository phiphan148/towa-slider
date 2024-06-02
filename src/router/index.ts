import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
  ]
})

export default router
