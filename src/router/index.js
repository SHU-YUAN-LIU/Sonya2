import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/dashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('../views/worksView.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/formView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/profileView.vue')
    }
  ]
})

export default router
