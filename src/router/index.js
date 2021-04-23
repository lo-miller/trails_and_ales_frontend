import Vue from 'vue'
import VueRouter from 'vue-router'
import HikesIndex from '../views/HikesIndex.vue'
import HikesShow from '../views/HikesShow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/hikes',
    name: 'HikesIndex',
    component: HikesIndex
  },
  {
    path: '/hikes/:id',
    name: 'HikesShow',
    component: HikesShow
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
