<template>
	<NavBar />
	<!--nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav-->
	<NotAuthPage v-if="!isAuth" />
	<router-view v-else />
</template>
<script>
import { Options, Vue } from 'vue-class-component'
import NavBar from '@/components/NavBar.vue'
import NotAuthPage from '@/components/NotAuthPage.vue'

import store from './store'

export default {
	props: [],
	components: {
		NavBar,
		NotAuthPage,
	},
	data: () => ({}),
	methods: {},
	computed: {
		isAuth() {
			return store.getters['isAuth']
		},
	},
	mounted() {
		const token = localStorage.getItem('token')
		if (token) {
			store.commit('setToken', token)
			store.dispatch('fetchProfile')
		}
	},
}
</script>
<style lang="scss"></style>
