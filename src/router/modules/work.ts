import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'work',
  name: 'work',
  component: () => import('@/views/work/index.vue')
}

export default routes
