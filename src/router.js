import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Redirect from './views/Redirect'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:url',
      name: 'redirect',
      component: Redirect,
      children: [
        {
          path: '*',
          component: Redirect
        },
      ]
    }
  ]
})
