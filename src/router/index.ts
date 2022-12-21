import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'
import OrdersView from '../views/OrdersView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: ProfileView
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrdersView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
