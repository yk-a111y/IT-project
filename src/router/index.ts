import { createRouter, RouteRecordRaw, createWebHashHistory, RouterView } from 'vue-router'
import workRoutes from './modules/work'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: RouterView,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home/index.vue')
      },
      workRoutes
    ]
  },
  {
    path: '/login',
    component: () => import('../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
