import Vue from 'vue'
import App from './components/App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import VueCharts from 'vue-charts'

Vue.use(ElementUI)
Vue.use(VueCharts)

const app = new Vue({
  router,
  ...App
})

export { app, router }
