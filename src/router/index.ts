import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SocialView from '@/views/SocialView.vue'
import WalletView from '@/views/WalletView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/social',
      name: 'social',
      component: SocialView,
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: WalletView,
    },
  ],
})

export default router
