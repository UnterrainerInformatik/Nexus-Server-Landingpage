import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/app/landingpage'
  },
  {
    path: '/app/landingpage',
    alias: '/',
    name: 'landingpage',
    component: () => import('../views/LandingPage.vue')
  },
  {
    path: '/*',
    component: () => import('../views/page404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
