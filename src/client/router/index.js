import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Search from '../views/Search'
import NotFound from '../views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/search/:title',
      component: Search,
      name: 'search'
    },
    {
      path: '*',
      component: NotFound,
      name: 'not-found'
    }
  ]
})
