import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { mask } from 'vue-the-mask'

createApp(App)
	.use(store)
	.use(router)
	.directive('mask', mask as any)
	.mount('#app')
