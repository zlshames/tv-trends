import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Show from '../views/Show'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/:show',
      component: Show,
      name: 'show'
    }
  ]
})
