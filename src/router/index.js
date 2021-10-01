import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Leaderboard from '../views/Leaderboard'
import Reward from '../views/ExchangeRewards'
import AddReward from '../views/AddReward'
import WaitApprove from '@/views/Extra/WaitApprove'
import Extra from '@/views/Extra/Extra'
import AddQuestion from '@/views/Extra/AddQuestion'
import ExtraQuestion from '@/views/Extra/ExtraQuestion'
import Check from '../views/Extra/Check'
import MathQ from '../views/qPage/MQuestion'
import SciQ from '../views/qPage/SQuestion'
import M from '../views/TestM'
import S from '../views/TestS'
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import Logout from "../views/auth/Logout.vue";
import XQ from '../views/qPage/XQuestion'
import Q from '../views/Question'
import T from '../views/Table'
import h from '../views/History'
import ta from '../views/TestAdd'
import re from '../views/TestRe'

Vue.use(VueRouter)

const routes = [
  {
    path: '/re',
    name: 're',
    component: re
  },
  {
    path: '/ta',
    name: 'ta',
    component: ta
  },
  {
    path: '/hhhh',
    name: 'h',
    component: h
  },
  {
    path: '/q/:path',
    name: 'T',
    component: T
  },
  {
    path: '/q/:path/:id',
    name: 'Q',
    component: Q
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: '/wait/:id/check',
    name: 'Check',
    component: Check
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: Leaderboard
  },
  {
    path: '/reward',
    name: 'Reward',
    component: Reward
  },
  {
    path: '/add-reward',
    name: 'AddReward',
    component: AddReward
  },
  {
    path: '/wait',
    name: 'WaitApprove',
    component: WaitApprove,
  },
  {
    path: '/extra',
    name: 'Extra',
    component: Extra
  },
  {
    path: '/add-extra',
    name: 'AddQuestion',
    component: AddQuestion
  },
  {
    path: '/extra-question',
    name: 'ExtraQuestion',
    component: ExtraQuestion
  },
  {
    path: '/math/:id',
    name: 'MathQ',
    component: MathQ
  },
  {
    path: '/sci/:id',
    name: 'SciQ',
    component: SciQ
  },
  {
    path: '/extra/:id',
    name: 'XQ',
    component: XQ
  },
  {
    path: '/m',
    name: 'M',
    component: M
  },
  {
    path: '/s',
    name: 'S',
    component: S
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
