import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/:lang/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/:lang/topic/:id',
      name: 'topic',
      component: () => import('../views/TopicView.vue')
    },
  ]
})

export default router
