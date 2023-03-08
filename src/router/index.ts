import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)
// component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
const routes: Array<RouteConfig> = [
]

const router = new VueRouter({
  routes
})

export default router
