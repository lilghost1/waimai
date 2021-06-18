import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Search from '../components/Search.vue'
import Indent from '../components/Indent.vue'
import User from '../components/User.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Merchant from '../components/Merchant.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/home',
    name: 'home',
    component: Home
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/indent',
    name: 'indent',
    component: Indent
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/merchant/:id',
    name: 'merchant',
    component: Merchant,
    props:true
  },
]

export default new Router({
  routes
})
