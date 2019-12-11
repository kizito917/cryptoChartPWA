import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index'
import Price from '../components/Price'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/crypto_price',
    name: 'price',
    component: Price
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
