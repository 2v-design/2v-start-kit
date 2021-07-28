import { createRouter, createWebHashHistory } from 'vue-router'
import home from '@/modules/home/index.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/',
    name: 'login',
    component: () => import('@/modules/login/view/index.vue') // @/views设置的别名
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
