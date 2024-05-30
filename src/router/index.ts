import { createRouter, createWebHistory } from 'vue-router'
import HeroSlider from '@/components/HeroSlider.vue'
import Home from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
   /* {
      path: '/heroslider',
      name: 'hero',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/HeroSlider.vue')
    }*/
  ]
})

export default router
