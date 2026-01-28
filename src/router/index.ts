import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/admission',
    name: 'admission',
    component: () => import('../views/AdmissionView.vue')
  },
  {
    path: '/alumni',
    name: 'alumni',
    component: () => import('../views/AlumniView.vue')
  },
  {
    path: '/research',
    name: 'research',
    component: () => import('../views/ResearchView.vue')
  },
  {
    path: '/administration',
    name: 'administration',
    component: () => import('../views/AdministrationView.vue')
  },
  {
    path: '/center',
    name: 'center',
    component: () => import('../views/CenterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
