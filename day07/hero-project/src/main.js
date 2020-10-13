// 导入bootstrap的样式
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:3000'
new Vue({
  render: h =>
    h(App),
  router
}).$mount('#app')
