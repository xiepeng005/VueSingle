// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import Axios from './axios/index'
import MintUI from 'mint-ui'
import * as Filter from './utils/filter'
import 'mint-ui/lib/style.css'
import './assets/css/reset.css'
import './assets/css/app.css'
import './assets/css/main.css'
Vue.prototype.$axios = Axios
Vue.config.productionTip = false
Vue.use(MintUI)
Object.keys(Filter).forEach(key => {
  Vue.filter(key, Filter[key])
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
