import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/login/Login.vue'
import Teste from '../components/home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Teste
    }
  ]
})

export default router
