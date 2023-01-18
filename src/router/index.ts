import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'
import OrdersView from '../views/OrdersView.vue'
import OrderView from '../views/OrderView.vue'
import CashBackView from '../views/CashBackView.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/profile',
		name: 'profile',
		component: ProfileView,
	},
	{
		path: '/orders',
		name: 'orders',
		component: OrdersView,
	},
	{
		path: '/order/:id',
		name: 'order',
		component: OrderView,
	},
	{
		path: '/cash-back',
		name: 'cash-back',
		component: CashBackView,
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
