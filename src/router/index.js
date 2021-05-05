import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import HikesIndex from '../views/HikesIndex.vue'
import HikesShow from '../views/HikesShow.vue'
import BreweriesSearch from '../views/BreweriesSearch.vue'
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import SavedHikes from "../views/SavedHikes.vue";
import FeaturedAdventures from "../views/FeaturedAdventures.vue";
import BeerTrails from "../views/BeerTrails.vue";
import Resources from "../views/Resources.vue";
import LandAcknowledgement from "../views/LandAcknowledgement.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hikes',
    name: 'HikesIndex',
    component: HikesIndex
  },
  {
    path: '/saved_hikes',
    name: 'SavedHikes',
    component: SavedHikes
  },
  {
    path: '/hikes/:id',
    name: 'HikesShow',
    component: HikesShow
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/breweries',
    name: 'BreweriesSearch',
    component: BreweriesSearch
  },
  {
    path: '/beer_trails',
    name: 'BeerTrails',
    component: BeerTrails
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources
  },
  {
    path: '/featured',
    name: 'FeaturedAdventures',
    component: FeaturedAdventures
  },
  {
    path: '/land_acknowledgement',
    name: 'LandAcknowledgement',
    component: LandAcknowledgement
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
